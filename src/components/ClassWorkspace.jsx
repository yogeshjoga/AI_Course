import React, { useState } from 'react';
import ProblemListTable from './ProblemListTable';
import QuestionSolver from './QuestionSolver';
import { ArrowLeft, CheckCircle, ChevronLeft, ChevronRight, HelpCircle, Bell, GraduationCap, BookOpen } from 'lucide-react';

export default function ClassWorkspace({ 
  quiz, 
  questions, 
  quizIntro,
  manifest, 
  history, 
  onBack, 
  onNavigateQuiz, 
  onSubmitAnswer 
}) {
  const [activeTab, setActiveTab] = useState('All'); // 'All' or number (0, 1, 2...)
  const [activeSubtab, setActiveSubtab] = useState('Assignment'); // 'Assignment' or 'Resources'

  // Helper to parse markdown tables
  const parseMarkdownTable = (introText) => {
    if (!introText) return null;
    const lines = introText.split('\n');
    const tableRows = [];
    let headers = [];
    let inTable = false;

    for (let line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        const cols = trimmed.split('|').map(c => c.trim()).filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
        
        // Skip alignment lines (like | :--- | :--- |)
        if (cols.every(col => col.match(/^:?-+:?$/))) {
          continue;
        }
        
        if (!inTable) {
          headers = cols;
          inTable = true;
        } else {
          tableRows.push(cols);
        }
      } else {
        if (inTable && trimmed !== '') {
          break;
        }
      }
    }

    if (headers.length > 0) {
      return { headers, rows: tableRows };
    }
    return null;
  };

  // Helper to parse and render dynamic markdown intro elements
  // Helper to parse and render dynamic markdown intro elements
  const renderIntroResources = (introText) => {
    if (!introText) {
      return (
        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center', padding: '40px' }}>
          No additional resources available for this class yet.
        </div>
      );
    }

    const lines = introText.split('\n');
    const cleanLines = lines.filter(line => {
      const trimmed = line.trim().toLowerCase();
      if (trimmed.startsWith('# ') || (trimmed.startsWith('## ') && trimmed.includes(quiz.title.toLowerCase()))) return false;
      if (trimmed.startsWith('#') && trimmed.includes('timing')) return false;
      if (trimmed.includes('class timing:')) return false;
      if (trimmed.includes('welcome to the daily assessment')) return false;
      if (trimmed.includes('please attempt all questions')) return false;
      if (trimmed.includes('explanations will unlock')) return false;
      return true;
    });

    // If there are no clean lines left after filtering redundant elements
    const hasContent = cleanLines.some(line => line.trim() !== '');
    if (!hasContent) {
      return (
        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center', padding: '40px' }}>
          No additional resources available for this class yet.
        </div>
      );
    }

    const elements = [];
    let tableLines = [];
    let inTable = false;
    let listItems = [];
    let inList = false;

    // Helper to flush current list
    const flushList = (key) => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${key}`} style={{ marginLeft: '20px', marginBottom: '20px', color: '#334155', lineHeight: '1.6', listStyleType: 'disc' }}>
            {listItems.map((item, idx) => (
              <li key={idx} style={{ marginBottom: '6px' }}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    // Helper to flush current table
    const flushTable = (key) => {
      if (tableLines.length > 0) {
        const tableData = parseMarkdownTable(tableLines.join('\n'));
        if (tableData) {
          elements.push(
            <div key={`table-wrapper-${key}`} style={{ overflowX: 'auto', borderRadius: '6px', border: '1px solid #e2e8f0', marginBottom: '24px', boxShadow: 'var(--shadow-sm)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                    {tableData.headers.map((h, i) => (
                      <th key={i} style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#475569' }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.rows.map((row, rowIndex) => (
                    <tr 
                      key={rowIndex} 
                      style={{ 
                        borderBottom: '1px solid #f1f5f9', 
                        backgroundColor: rowIndex % 2 === 0 ? '#ffffff' : '#f8fafc',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#e8f2fc'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = rowIndex % 2 === 0 ? '#ffffff' : '#f8fafc'; }}
                    >
                      {row.map((cell, colIndex) => (
                        <td key={colIndex} style={{ padding: '12px 16px', color: '#334155', fontWeight: colIndex === 1 ? '600' : 'normal' }}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        tableLines = [];
        inTable = false;
      }
    };

    for (let i = 0; i < cleanLines.length; i++) {
      const line = cleanLines[i];
      const trimmed = line.trim();

      // Table line
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        flushList(i);
        inTable = true;
        tableLines.push(line);
        continue;
      } else {
        if (inTable) {
          flushTable(i);
        }
      }

      // List item
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        inList = true;
        listItems.push(trimmed.substring(2));
        continue;
      } else {
        if (inList) {
          flushList(i);
        }
      }

      if (trimmed === '') continue;

      // Headings
      if (trimmed.startsWith('#')) {
        const level = trimmed.match(/^#+/)[0].length;
        const text = trimmed.replace(/^#+\s*/, '');
        const headingStyle = {
          fontWeight: '700',
          color: '#1e293b',
          marginTop: '24px',
          marginBottom: '12px'
        };
        if (level === 1) {
          elements.push(<h1 key={i} style={{ ...headingStyle, fontSize: '1.5rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginTop: '12px' }}>{text}</h1>);
        } else if (level === 2) {
          elements.push(<h2 key={i} style={{ ...headingStyle, fontSize: '1.25rem' }}>{text}</h2>);
        } else {
          elements.push(<h3 key={i} style={{ ...headingStyle, fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={16} style={{ color: 'var(--color-primary)' }} />
            {text}
          </h3>);
        }
        continue;
      }

      // Normal paragraph with potential inline links
      const linkMatch = trimmed.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        elements.push(
          <p key={i} style={{ marginBottom: '14px', color: '#475569', fontSize: '0.9rem', lineHeight: '1.6' }}>
            {trimmed.substring(0, linkMatch.index)}
            <a href={linkMatch[2]} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: '600', textDecoration: 'underline' }}>
              {linkMatch[1]}
            </a>
            {trimmed.substring(linkMatch.index + linkMatch[0].length)}
          </p>
        );
      } else {
        elements.push(
          <p key={i} style={{ marginBottom: '14px', color: '#475569', fontSize: '0.9rem', lineHeight: '1.6' }}>
            {trimmed}
          </p>
        );
      }
    }

    // Flush remaining
    if (inTable) flushTable('end');
    if (inList) flushList('end');

    return elements;
  };

  // Calculate solved stats for the current quiz
  const quizHistory = history[quiz.id] || { completed: false, score: 0, total: questions.length, answersRecord: [] };
  const answersRecord = quizHistory.answersRecord || [];
  const solvedCount = answersRecord.filter(r => r.isCorrect).length;

  const moduleQuizzes = manifest.filter(q => q.topic === quiz.topic);
  const currentQuizIndex = moduleQuizzes.findIndex(q => q.id === quiz.id);
  const prevQuiz = currentQuizIndex > 0 ? moduleQuizzes[currentQuizIndex - 1] : null;
  const nextQuiz = currentQuizIndex < moduleQuizzes.length - 1 ? moduleQuizzes[currentQuizIndex + 1] : null;

  // Format date nicely
  const formatDate = (dateStr) => {
    try {
      const [year, month, day] = dateStr.split('-').map(Number);
      const date = new Date(year, month - 1, day);
      const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    } catch (e) {
      return dateStr;
    }
  };

  const handleSolveQuestion = (index) => {
    setActiveTab(index);
  };

  const handleSubmitAnswer = (questionIdx, selectedOption, isCorrect, hintUsed) => {
    // Compile updated answers record
    let updatedAnswers = [...answersRecord];
    const existingIndex = updatedAnswers.findIndex(r => r.questionIndex === questionIdx);

    const newRecordItem = {
      questionIndex: questionIdx,
      questionText: questions[questionIdx].questionText,
      options: questions[questionIdx].options,
      correctAnswer: questions[questionIdx].correctAnswer,
      selectedOption,
      isCorrect,
      explanation: questions[questionIdx].explanation,
      hintUsed: hintUsed || false
    };

    if (existingIndex > -1) {
      updatedAnswers[existingIndex] = {
        ...updatedAnswers[existingIndex],
        ...newRecordItem
      };
    } else {
      updatedAnswers.push(newRecordItem);
    }

    const solvedCount = updatedAnswers.filter(r => r.isCorrect).length;
    const isQuizComplete = solvedCount === questions.length;

    // Score is the count of correct answers solved without hint usage
    const newScore = updatedAnswers.filter(r => r.isCorrect && !r.hintUsed).length;

    onSubmitAnswer(quiz.id, {
      completed: isQuizComplete,
      score: newScore,
      total: questions.length,
      answersRecord: updatedAnswers
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 65px)', backgroundColor: 'var(--bg-main)' }}>
      
      {/* Workspace Header Panel */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid var(--border-color)', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
        
        {/* Title and Date */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
            <button 
              onClick={onBack}
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', marginRight: '4px' }}
            >
              <ArrowLeft size={18} />
            </button>
            <h1 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b' }}>
              {quiz.title}
            </h1>
            <span style={{ 
              backgroundColor: '#fff3cd', 
              color: '#856404', 
              fontSize: '0.75rem', 
              fontWeight: '600', 
              padding: '2px 8px', 
              borderRadius: '4px' 
            }}>
              Mandatory
            </span>
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '32px' }}>
            {formatDate(quiz.date)}
          </span>
        </div>

      </div>

      {/* Subtabs Bar */}
      <div className="scaler-subtabs" style={{ flexShrink: 0 }}>
        <div 
          className={`subtab-item${activeSubtab === 'Assignment' ? ' active' : ''}`}
          onClick={() => setActiveSubtab('Assignment')}
        >
          Assignment {solvedCount}/{questions.length}
        </div>
        <div 
          className={`subtab-item${activeSubtab === 'Resources' ? ' active' : ''}`}
          onClick={() => setActiveSubtab('Resources')}
        >
          Resources ({quiz.resourceCount || 0})
        </div>
      </div>

      {activeSubtab === 'Assignment' ? (
        /* Main Split Layout for Assignment Solver */
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          
          {/* Left Vertical Question Sidebar */}
          <div className="scaler-sidebar">
            {/* All Questions item */}
            <div 
              className={`sidebar-item${activeTab === 'All' ? ' active' : ''}`}
              onClick={() => setActiveTab('All')}
            >
              <span>All</span>
            </div>

            {/* Question markers Q1, Q2, Q3... */}
            {questions.map((_, idx) => {
              const isSolved = answersRecord.find(r => r.questionIndex === idx)?.isCorrect;
              const isActive = activeTab === idx;
              
              return (
                <div 
                  key={idx} 
                  className={`sidebar-item${isActive ? ' active' : ''}`}
                  onClick={() => setActiveTab(idx)}
                >
                  <span>Q{idx + 1}</span>
                  {isSolved && (
                    <CheckCircle size={10} className="sidebar-item-status-icon" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Content Pane */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            
            {/* Tab Body */}
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {activeTab === 'All' ? (
                <div style={{ padding: '24px' }}>
                  <div style={{ marginBottom: '16px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    Attempting these questions is a great way to reinforce your learning, build a deep conceptual foundation, and master the practical nuances of building Agentic AI solutions!
                  </div>
                  <ProblemListTable 
                    questions={questions}
                    answersRecord={answersRecord}
                    onSolveQuestion={handleSolveQuestion}
                  />
                </div>
              ) : (
                <QuestionSolver 
                  question={questions[activeTab]}
                  questionIdx={activeTab}
                  totalQuestions={questions.length}
                  answersRecord={answersRecord}
                  onSubmitAnswer={handleSubmitAnswer}
                  onNextQuestion={() => {
                    if (activeTab < questions.length - 1) {
                      setActiveTab(activeTab + 1);
                    } else {
                      setActiveTab('All');
                    }
                  }}
                />
              )}
            </div>

            {/* Footer Pagination */}
            <div className="scaler-workspace-footer">
              
              {/* Prev Day Link */}
              {prevQuiz ? (
                <div 
                  className="footer-nav-link" 
                  onClick={() => {
                    onNavigateQuiz(prevQuiz);
                    setActiveTab('All');
                    setActiveSubtab('Assignment');
                  }}
                >
                  <ChevronLeft size={16} />
                  <span>{prevQuiz.title}</span>
                </div>
              ) : (
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  First class in module
                </div>
              )}

              {/* Next Day Link */}
              {nextQuiz ? (
                <div 
                  className="footer-nav-link" 
                  onClick={() => {
                    onNavigateQuiz(nextQuiz);
                    setActiveTab('All');
                    setActiveSubtab('Assignment');
                  }}
                >
                  <span>{nextQuiz.title}</span>
                  <ChevronRight size={16} />
                </div>
              ) : (
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  No more classes in this module
                </div>
              )}

            </div>

          </div>

        </div>
      ) : (
        /* Resources View Layout */
        <div style={{ display: 'flex', flex: 1, overflowY: 'auto', padding: '32px', backgroundColor: '#f8fafc' }}>
          <div style={{ 
            maxWidth: '960px', 
            width: '100%', 
            margin: '0 auto', 
            backgroundColor: '#ffffff', 
            border: '1px solid var(--border-color)', 
            borderRadius: 'var(--radius-lg)', 
            padding: '36px', 
            boxShadow: 'var(--shadow-md)',
            alignSelf: 'flex-start'
          }}>
            <h2 style={{ 
              fontSize: '1.35rem', 
              fontWeight: '800', 
              color: '#1e293b', 
              marginBottom: '28px', 
              borderBottom: '1px solid #e2e8f0', 
              paddingBottom: '18px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px' 
            }}>
              <GraduationCap size={24} style={{ color: 'var(--color-primary)' }} />
              Class Resources & Reference Materials
            </h2>
            <div style={{ padding: '0 4px' }}>
              {renderIntroResources(quizIntro)}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
