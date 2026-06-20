import React, { useState, useEffect } from 'react';
import { parseQuizMarkdown } from './utils/quizParser';
import QuizCard from './components/QuizCard';
import ClassWorkspace from './components/ClassWorkspace';
import { Search, GraduationCap, RefreshCw, ArrowLeft, Download, BookOpen, Compass } from 'lucide-react';
import TerminologyView from './components/TerminologyView';
import ResearchView from './components/ResearchView';
import ModuleResourcesView from './components/ModuleResourcesView';

export default function App() {
  const [manifest, setManifest] = useState([]);
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('course_solve_history');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse history from localStorage', e);
      }
    }
    return {};
  });
  const [customDates, setCustomDates] = useState(() => {
    const saved = localStorage.getItem('course_custom_dates');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse custom dates from localStorage', e);
      }
    }
    // Prepopulate Day 5 with June 20, 2026 as default override due to leaf
    return {
      'day5_day_5_introduction_to_hld_components': '2026-06-20'
    };
  });
  const [activeQuiz, setActiveQuiz] = useState(null);

  // Helper to advance a date string YYYY-MM-DD to the next valid Tuesday-Saturday course day
  const getNextValidDate = (dateStr) => {
    if (!dateStr) return '';
    try {
      const [year, month, day] = dateStr.split('-').map(Number);
      const date = new Date(year, month - 1, day);
      
      // Advance by 1 day at a time until we hit Tuesday-Saturday
      // (getDay(): 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat)
      do {
        date.setDate(date.getDate() + 1);
      } while (date.getDay() === 0 || date.getDay() === 1);
      
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, '0');
      const d = String(date.getDate()).padStart(2, '0');
      return `${y}-${m}-${d}`;
    } catch (e) {
      console.error('Error generating next date for', dateStr, e);
      return dateStr;
    }
  };

  // Helper to extract the day index sequence number from the quiz ID
  const getQuizDayNumber = (quiz) => {
    const match = quiz.id.match(/^day(\d+)_/i);
    if (match) {
      return parseInt(match[1], 10);
    }
    return 999;
  };

  // Compute resolved dates for all manifest items sequentially
  const getResolvedDates = () => {
    if (manifest.length === 0) return {};
    
    // Sort manifest by their actual Day sequence to propagate changes in logical order
    const sortedQuizzes = [...manifest].sort((a, b) => getQuizDayNumber(a) - getQuizDayNumber(b));
    
    const resolved = {};
    let lastDate = null;
    
    for (let i = 0; i < sortedQuizzes.length; i++) {
      const quiz = sortedQuizzes[i];
      let dateVal = null;
      
      if (customDates[quiz.id]) {
        dateVal = customDates[quiz.id];
      } else if (history[quiz.id]?.completedAt) {
        dateVal = history[quiz.id].completedAt;
      } else if (i === 0) {
        dateVal = quiz.date;
      } else {
        dateVal = getNextValidDate(lastDate);
      }
      
      resolved[quiz.id] = dateVal;
      lastDate = dateVal;
    }
    
    return resolved;
  };

  const resolvedDates = getResolvedDates();

  const handleUpdateCustomDate = (quizId, newDate) => {
    const pwd = prompt("Enter password to update class date:");
    if (pwd === null) return; // User cancelled
    if (pwd !== "7799250107@Ai") {
      alert("Incorrect password. Date modification denied.");
      return;
    }
    const updatedCustomDates = {
      ...customDates,
      [quizId]: newDate
    };
    setCustomDates(updatedCustomDates);
    localStorage.setItem('course_custom_dates', JSON.stringify(updatedCustomDates));
  };
  const [questions, setQuestions] = useState([]);
  const [quizIntro, setQuizIntro] = useState('');
  const [view, setView] = useState('dashboard'); // 'dashboard', 'workspace', 'classes', 'terminology', 'research'
  const [filterTopic, setFilterTopic] = useState('All');
  const [classesSubtab, setClassesSubtab] = useState('Classes'); // 'Classes' or 'Resources'
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [viewBeforeTerminology, setViewBeforeTerminology] = useState('dashboard');
  const [viewBeforeResearch, setViewBeforeResearch] = useState('dashboard');

  const handleOpenTerminology = () => {
    setViewBeforeTerminology(view);
    setView('terminology');
  };

  const handleCloseTerminology = () => {
    setView(viewBeforeTerminology);
  };

  const handleOpenResearch = () => {
    setViewBeforeResearch(view);
    setView('research');
  };

  const handleCloseResearch = () => {
    setView(viewBeforeResearch);
  };

  // Load manifest on mount
  useEffect(() => {
    fetch('/docs/manifest.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load quiz catalog index.');
        return res.json();
      })
      .then(data => {
        setManifest(data);
      })
      .catch(err => {
        console.error(err);
        setError('Could not fetch quiz catalog. Make sure to run node generate-manifest.js first.');
      });
  }, []);

  const handleSelectQuiz = async (quiz) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/docs/${quiz.file}`);
      if (!response.ok) throw new Error(`Failed to load quiz file: ${quiz.file}`);
      const text = await response.text();
      
      const parsedQuestions = parseQuizMarkdown(text);
      if (parsedQuestions.length === 0) {
        throw new Error('No valid questions could be parsed from this file. Check the format.');
      }
      
      // Extract intro block (everything between frontmatter and the first Q1. / ## Question 1)
      const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
      const cleanContent = text.replace(frontmatterRegex, '');
      const questionIndex = cleanContent.search(/^(?:##\s+)?(?:Question|Q)\s*\d+[\.:-\s]/im);
      let intro = '';
      if (questionIndex !== -1) {
        intro = cleanContent.substring(0, questionIndex).trim();
      }
      
      setQuizIntro(intro);
      setQuestions(parsedQuestions);
      setActiveQuiz(quiz);
      setView('workspace');
    } catch (err) {
      setError(err.message);
      alert(`Error loading quiz: ${err.message}`);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitQuizAnswer = (quizId, updatedProgress) => {
    const todayStr = new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD
    const updatedProgressWithDate = {
      ...updatedProgress,
      completedAt: updatedProgress.completed
        ? (history[quizId]?.completedAt || todayStr)
        : null
    };

    const updatedHistory = {
      ...history,
      [quizId]: updatedProgressWithDate
    };

    setHistory(updatedHistory);
    localStorage.setItem('course_solve_history', JSON.stringify(updatedHistory));
  };

  const handleBackToDashboard = () => {
    setActiveQuiz(null);
    setQuestions([]);
    setClassesSubtab('Classes');
    if (filterTopic === 'All') {
      setView('dashboard');
    } else {
      setView('classes');
    }
  };

  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to clear your solve history? This will reset all your scores and custom dates.')) {
      setHistory({});
      setCustomDates({
        'day5_day_5_introduction_to_hld_components': '2026-06-20'
      });
      localStorage.removeItem('course_solve_history');
      localStorage.removeItem('course_custom_dates');
    }
  };

  // Fixed course modules list requested by user in exact order
  const availableTopics = [
    'All',
    'Intro Module',
    'HLD',
    'Databases',
    'Python',
    'FastAPI',
    'Intro to LLMs, ML, DL, DS',
    'AI Agents with memory',
    'Agentic AI workflows',
    'Capstone Project'
  ];

  // Helper to get custom color for module markers
  const getModuleColor = (moduleName) => {
    const clean = moduleName.toLowerCase();
    if (clean.includes('intro module')) return '#3b82f6';    // Blue-slate
    if (clean.includes('hld')) return '#1a73e8';             // Blue
    if (clean.includes('database')) return '#ea580c';        // Orange
    if (clean.includes('python')) return '#a16207';           // Yellow-gold
    if (clean.includes('fastapi')) return '#0891b2';          // Cyan
    if (clean.includes('llm') || clean.includes('ml')) return '#db2777'; // Pink
    if (clean.includes('memory') || clean.includes('agents')) return '#6366f1'; // Indigo
    if (clean.includes('workflows')) return '#be185d';        // Fuchsia
    if (clean.includes('capstone')) return '#10b981';         // Emerald
    return '#4b5563';                                         // Gray
  };

  // Helper to calculate module solve progress
  const getModuleProgress = (moduleName) => {
    const moduleQuizzes = manifest.filter(q => q.topic === moduleName);
    const solvedCount = moduleQuizzes.filter(q => history[q.id]?.completed).length;
    return {
      total: moduleQuizzes.length,
      solved: solvedCount
    };
  };

  // Filter modules to display based on topic filter
  const activeModules = filterTopic === 'All'
    ? availableTopics.filter(t => t !== 'All')
    : [filterTopic];

  // Helper to check if any class matches search in active modules
  const hasMatchingClasses = activeModules.some(modName => 
    manifest.some(quiz => 
      quiz.topic === modName && (
        searchQuery === '' || 
        quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        quiz.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        quiz.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      
      {/* Navbar header */}
      <header className="header-glass" style={{ flexShrink: 0, height: '65px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={handleBackToDashboard}>
            <GraduationCap size={28} style={{ color: 'var(--color-primary)' }} />
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-primary)' }}>
              Online Agentic AI course by Yogesh
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button 
              onClick={handleOpenResearch}
              className="btn-scaler btn-scaler-secondary"
              style={{ 
                padding: '6px 14px', 
                fontSize: '0.78rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px',
                border: '1px solid var(--color-primary)',
                color: 'var(--color-primary)',
                backgroundColor: 'transparent',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              <Compass size={13} /> Research Papers
            </button>
            <button 
              onClick={handleOpenTerminology}
              className="btn-scaler btn-scaler-secondary"
              style={{ 
                padding: '6px 14px', 
                fontSize: '0.78rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px',
                border: '1px solid var(--color-primary)',
                color: 'var(--color-primary)',
                backgroundColor: 'transparent',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              <BookOpen size={13} /> Course Terminology
            </button>
            <a 
              href="/syllabus.pdf"
              download="Agentic_AI_Course_Syllabus.pdf"
              className="btn-scaler btn-scaler-secondary"
              style={{ 
                padding: '6px 14px', 
                fontSize: '0.78rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px',
                textDecoration: 'none',
                border: '1px solid var(--color-primary)',
                color: 'var(--color-primary)',
                backgroundColor: 'transparent',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              <Download size={13} /> Download Syllabus
            </a>
            {(view === 'dashboard' || view === 'classes') && Object.keys(history).length > 0 && (
              <button 
                className="btn-scaler btn-scaler-secondary" 
                onClick={handleResetProgress}
                style={{ padding: '6px 12px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <RefreshCw size={12} /> Clear Progress
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div style={{ flex: 1, overflowY: (view === 'dashboard' || view === 'classes' || view === 'research') ? 'auto' : 'hidden' }}>
        {error && (
          <div style={{ maxWidth: '1200px', margin: '24px auto 0', background: 'var(--color-danger-bg)', border: '1px solid var(--color-danger-text)', padding: '16px 20px', borderRadius: 'var(--radius-md)', color: 'var(--color-danger-text)', fontSize: '0.9rem' }}>
            {error}
          </div>
        )}

        {loading && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ border: '3px solid rgba(0,0,0,0.05)', borderTop: '3px solid var(--color-primary)', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite', margin: '0 auto 16px' }} />
              <p style={{ color: 'var(--text-secondary)' }}>Loading class quiz data...</p>
            </div>
            <style>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        )}

        {!loading && (
          <>
            {view === 'dashboard' && (
              <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
                
                {/* Intro Section */}
                <div style={{ marginBottom: '32px' }}>
                  <h1 style={{ fontSize: '2.2rem', marginBottom: '8px', fontWeight: '800', color: '#1e293b' }}>
                    Class MCQ Assignment Hub
                  </h1>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '650px' }}>
                    Solve assignment questions for System Design, Algorithms, LLMs, AI Agents, and FastAPI classes. Review detailed explanations when you hit the wrong answer.
                  </p>
                </div>

                <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#1e293b', marginBottom: '20px' }}>
                  Course Modules
                </h2>

                {/* Modules Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
                  {availableTopics.filter(t => t !== 'All').map(topicName => {
                    const progress = getModuleProgress(topicName);
                    const themeColor = getModuleColor(topicName);
                    const isCompleted = progress.total > 0 && progress.solved === progress.total;
                    
                    return (
                      <div 
                        key={topicName}
                        onClick={() => {
                          setFilterTopic(topicName);
                          setView('classes');
                        }}
                        className="glass-panel"
                        style={{
                          padding: '24px',
                          cursor: 'pointer',
                          borderLeft: `5px solid ${themeColor}`,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          minHeight: '150px'
                        }}
                      >
                        <div>
                          <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '8px', color: '#1e293b' }}>
                            {topicName}
                          </h3>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
                            {progress.total} {progress.total === 1 ? 'Class' : 'Classes'}
                          </span>
                        </div>
                        
                        <div style={{ marginTop: '20px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px', fontSize: '0.75rem', fontWeight: '700' }}>
                            <span style={{ color: isCompleted ? 'var(--color-success)' : 'var(--text-muted)' }}>
                              {isCompleted ? '🎉 Completed' : 'Progress'}
                            </span>
                            <span style={{ color: 'var(--text-primary)' }}>
                              {progress.solved}/{progress.total} Solved
                            </span>
                          </div>
                          
                          {/* Progress bar */}
                          <div style={{ width: '100%', height: '6px', backgroundColor: '#eef2f6', borderRadius: '3px', overflow: 'hidden' }}>
                            <div style={{ 
                              width: `${progress.total > 0 ? (progress.solved / progress.total) * 100 : 0}%`, 
                              height: '100%', 
                              backgroundColor: isCompleted ? 'var(--color-success)' : themeColor,
                              borderRadius: '3px',
                              transition: 'width 0.3s ease'
                            }} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {view === 'classes' && (
              <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
                
                {/* Back Link */}
                <div style={{ marginBottom: '24px' }}>
                  <button 
                    onClick={() => {
                      setFilterTopic('All');
                      setClassesSubtab('Classes');
                      setView('dashboard');
                    }}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'var(--color-primary)',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginBottom: '16px',
                      padding: '0'
                    }}
                  >
                    <ArrowLeft size={16} /> Back to Modules
                  </button>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '5px', height: '24px', backgroundColor: getModuleColor(filterTopic), borderRadius: '3px' }} />
                      <h1 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#1e293b' }}>
                        {filterTopic} Classes
                      </h1>
                    </div>
                    
                    {/* Search Box */}
                    {classesSubtab === 'Classes' && (
                      <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
                        <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                          type="text"
                          placeholder="Search classes..."
                          value={searchQuery}
                          onChange={e => setSearchQuery(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '10px 12px 10px 36px',
                            backgroundColor: 'var(--bg-surface)',
                            border: '1px solid var(--border-color)',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--text-primary)',
                            fontSize: '0.88rem',
                            outline: 'none'
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Module Level Subtabs */}
                <div className="scaler-subtabs" style={{ marginBottom: '24px', borderBottom: '1px solid var(--border-color)', display: 'flex', gap: '8px', flexShrink: 0 }}>
                  <div 
                    className={`subtab-item${classesSubtab === 'Classes' ? ' active' : ''}`}
                    onClick={() => setClassesSubtab('Classes')}
                    style={{ padding: '8px 16px', cursor: 'pointer', fontWeight: '600', fontSize: '0.9rem' }}
                  >
                    Classes
                  </div>
                  <div 
                    className={`subtab-item${classesSubtab === 'Resources' ? ' active' : ''}`}
                    onClick={() => setClassesSubtab('Resources')}
                    style={{ padding: '8px 16px', cursor: 'pointer', fontWeight: '600', fontSize: '0.9rem' }}
                  >
                    Module Resources
                  </div>
                </div>

                {/* Conditional rendering based on active subtab */}
                {classesSubtab === 'Classes' ? (
                  manifest.filter(q => q.topic === filterTopic && (
                    searchQuery === '' || 
                    q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    q.description.toLowerCase().includes(searchQuery.toLowerCase())
                  )).length > 0 ? (
                    <div className="grid-container" style={{ marginTop: '24px' }}>
                      {manifest.filter(q => q.topic === filterTopic && (
                        searchQuery === '' || 
                        q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        q.description.toLowerCase().includes(searchQuery.toLowerCase())
                      )).map(quiz => (
                        <QuizCard
                          key={quiz.id}
                          quiz={quiz}
                          resolvedDate={resolvedDates[quiz.id]}
                          onUpdateCustomDate={handleUpdateCustomDate}
                          historyItem={history[quiz.id]}
                          onSelect={handleSelectQuiz}
                        />
                      ))}
                    </div>
                  ) : (
                    <div style={{ backgroundColor: 'var(--bg-surface)', border: '1.5px dashed var(--border-color)', padding: '60px 40px', textAlign: 'center', borderRadius: 'var(--radius-lg)', marginTop: '24px' }}>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        No classes found matching your search.
                      </p>
                    </div>
                  )
                ) : (
                  <ModuleResourcesView topic={filterTopic} />
                )}
              </div>
            )}

            {view === 'workspace' && activeQuiz && (
              <ClassWorkspace
                quiz={activeQuiz}
                resolvedDate={resolvedDates[activeQuiz.id]}
                onUpdateCustomDate={handleUpdateCustomDate}
                questions={questions}
                quizIntro={quizIntro}
                manifest={manifest}
                history={history}
                onBack={handleBackToDashboard}
                onNavigateQuiz={handleSelectQuiz}
                onSubmitAnswer={handleSubmitQuizAnswer}
              />
            )}

            {view === 'terminology' && (
              <TerminologyView 
                onBack={handleCloseTerminology}
              />
            )}

            {view === 'research' && (
              <ResearchView 
                onBack={handleCloseResearch}
              />
            )}
          </>
        )}
      </div>

    </div>
  );
}
