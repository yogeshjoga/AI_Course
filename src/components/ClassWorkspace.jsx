import React, { useState } from 'react';
import ProblemListTable from './ProblemListTable';
import QuestionSolver from './QuestionSolver';
import { ArrowLeft, CheckCircle, ChevronLeft, ChevronRight, HelpCircle, Bell, GraduationCap, BookOpen, ChevronDown, RotateCcw } from 'lucide-react';
import CustomModal from './CustomModal';

export default function ClassWorkspace({ 
  quiz, 
  resolvedDate,
  onUpdateCustomDate,
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
  const [openSectionIndex, setOpenSectionIndex] = useState(0); // For resources accordion
  const [isEditingDate, setIsEditingDate] = useState(false);
  const [resetModalOpen, setResetModalOpen] = useState(false);

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

  // Helper to parse inline markdown (bold ** and links [text](url))
  const parseInlineMarkdown = (text) => {
    if (!text) return "";
    
    // Split by bold markdown "**"
    const boldParts = text.split('**');
    const result = [];
    
    boldParts.forEach((part, index) => {
      const isBold = index % 2 === 1;
      const elements = [];
      let remainingText = part;
      let linkMatch;
      let keyCounter = 0;
      
      while ((linkMatch = remainingText.match(/\[([^\]]+)\]\(([^)]+)\)/))) {
        const startIndex = linkMatch.index;
        const matchStr = linkMatch[0];
        const label = linkMatch[1];
        const url = linkMatch[2];
        
        if (startIndex > 0) {
          elements.push(remainingText.substring(0, startIndex));
        }
        
        elements.push(
          <a 
            key={`link-${index}-${keyCounter++}`} 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: 'var(--color-primary)', fontWeight: '600', textDecoration: 'underline' }}
          >
            {label}
          </a>
        );
        
        remainingText = remainingText.substring(startIndex + matchStr.length);
      }
      
      if (remainingText.length > 0) {
        elements.push(remainingText);
      }
      
      if (isBold) {
        result.push(
          <strong key={`bold-${index}`} style={{ fontWeight: '700', color: '#1e293b' }}>
            {elements}
          </strong>
        );
      } else {
        elements.forEach((el) => {
          result.push(el);
        });
      }
    });
    
    return result;
  };

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

    const sections = [];
    let currentSection = { title: "", elements: [] };

    let tableLines = [];
    let inTable = false;
    let listItems = [];
    let inList = false;
    let codeLines = [];
    let inCodeBlock = false;

    // Helper to flush current list
    const flushList = (key) => {
      if (listItems.length > 0) {
        currentSection.elements.push(
          <ul key={`list-${key}`} style={{ marginLeft: '20px', marginBottom: '20px', color: '#334155', lineHeight: '1.6', listStyleType: 'disc' }}>
            {listItems.map((item, idx) => (
              <li key={idx} style={{ marginBottom: '6px' }}>{parseInlineMarkdown(item)}</li>
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
          currentSection.elements.push(
            <div key={`table-wrapper-${key}`} style={{ overflowX: 'auto', borderRadius: '6px', border: '1px solid #e2e8f0', marginBottom: '24px', boxShadow: 'var(--shadow-sm)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                    {tableData.headers.map((h, i) => (
                      <th key={i} style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#475569' }}>
                        {parseInlineMarkdown(h)}
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
                          {parseInlineMarkdown(cell)}
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

    // Helper to colorize decision tree segments
    const renderSegmentText = (text) => {
      const trimmed = text.trim();
      const leadingSpaces = text.length - text.trimStart().length;
      const trailingSpaces = text.length - text.trimEnd().length;
      const spacePrefix = ' '.repeat(leadingSpaces);
      const spaceSuffix = ' '.repeat(trailingSpaces);
      
      let style = { color: '#e2e8f0' }; // default off-white
      
      if (trimmed === 'Yes') {
        style = { color: '#4ade80', fontWeight: 'bold' }; // bright green
      } else if (trimmed === 'No') {
        style = { color: '#f87171', fontWeight: 'bold' }; // bright red
      } else if (trimmed === 'Is it AI?') {
        style = { color: '#c084fc', fontWeight: 'bold' }; // bright purple
      } else if (trimmed.endsWith('?')) {
        style = { color: '#60a5fa', fontWeight: 'bold' }; // light blue questions
      } else if (trimmed.includes('+') || trimmed.includes('→')) {
        style = { color: '#fbbf24', fontWeight: '600' }; // amber/gold for technology solutions
      } else if (trimmed !== '') {
        style = { color: '#38bdf8' }; // cyan for leaf endpoints
      }
      
      return (
        <span key={text} style={style}>
          {spacePrefix}{trimmed}{spaceSuffix}
        </span>
      );
    };

    // Helper to flush current code block
    const flushCodeBlock = (key) => {
      if (codeLines.length > 0) {
        const codeText = codeLines.join('\n');
        
        // Check if this is the decision tree or a diagram
        const isDecisionTree = codeLines.some(line => line.includes('Is it AI?') || line.includes('├──') || line.includes('└──'));
        
        let renderedContent;
        if (isDecisionTree) {
          // Colorize the decision tree for maximum visual appeal
          renderedContent = codeLines.map((line, lineIdx) => {
            const colorizedLine = [];
            let segment = "";
            
            for (let char of line) {
              if (['│', '├', '└', '─', '┌', '┬', '┐'].includes(char)) {
                if (segment && !['│', '├', '└', '─', '┌', '┬', '┐'].includes(segment[0])) {
                  colorizedLine.push(renderSegmentText(segment));
                  segment = "";
                }
                segment += char;
              } else {
                if (segment && ['│', '├', '└', '─', '┌', '┬', '┐'].includes(segment[0])) {
                  colorizedLine.push(<span key={colorizedLine.length} style={{ color: '#38bdf8', opacity: 0.8, fontWeight: 'bold' }}>{segment}</span>);
                  segment = "";
                }
                segment += char;
              }
            }
            if (segment) {
              if (['│', '├', '└', '─', '┌', '┬', '┐'].includes(segment[0])) {
                colorizedLine.push(<span key={colorizedLine.length} style={{ color: '#38bdf8', opacity: 0.8, fontWeight: 'bold' }}>{segment}</span>);
              } else {
                colorizedLine.push(renderSegmentText(segment));
              }
            }
            
            return (
              <div key={lineIdx} style={{ minHeight: '1.4em', fontFamily: 'Fira Code, Courier New, monospace' }}>
                {colorizedLine}
              </div>
            );
          });
        } else {
          // Normal code block
          renderedContent = (
            <code style={{ color: '#e2e8f0', backgroundColor: 'transparent', padding: 0 }}>
              {codeText}
            </code>
          );
        }

        currentSection.elements.push(
          <pre key={`code-${key}`} style={{ 
            backgroundColor: '#0f172a', 
            color: '#e2e8f0', 
            padding: '20px', 
            borderRadius: '8px', 
            fontFamily: 'Fira Code, Courier New, monospace', 
            fontSize: '0.88rem', 
            overflowX: 'auto',
            marginBottom: '20px',
            lineHeight: '1.6',
            whiteSpace: 'pre-wrap',
            border: '1px solid #1e293b',
            boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
          }}>
            {renderedContent}
          </pre>
        );
        codeLines = [];
        inCodeBlock = false;
      }
    };

    for (let i = 0; i < cleanLines.length; i++) {
      const line = cleanLines[i];
      const trimmed = line.trim();

      // Code block start/end
      if (trimmed.startsWith('```')) {
        flushList(i);
        flushTable(i);
        if (inCodeBlock) {
          flushCodeBlock(i);
        } else {
          inCodeBlock = true;
        }
        continue;
      }

      if (inCodeBlock) {
        codeLines.push(line);
        continue;
      }

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

        if (level === 3) {
          flushList(i);
          flushTable(i);
          flushCodeBlock(i);
          if (currentSection.title !== "" || currentSection.elements.length > 0) {
            sections.push(currentSection);
          }
          currentSection = {
            title: text,
            elements: []
          };
          continue;
        }

        if (level === 1) {
          currentSection.elements.push(<h1 key={i} style={{ ...headingStyle, fontSize: '1.5rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginTop: '12px' }}>{parseInlineMarkdown(text)}</h1>);
        } else if (level === 2) {
          currentSection.elements.push(<h2 key={i} style={{ ...headingStyle, fontSize: '1.25rem' }}>{parseInlineMarkdown(text)}</h2>);
        } else {
          currentSection.elements.push(
            <h4 key={i} style={{ 
              fontWeight: '700', 
              color: '#334155', 
              fontSize: '1.05rem',
              marginTop: '20px', 
              marginBottom: '10px' 
            }}>
              {parseInlineMarkdown(text)}
            </h4>
          );
        }
        continue;
      }

      // Image line check
      const imgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
      if (imgMatch) {
        flushList(i);
        flushTable(i);
        flushCodeBlock(i);
        currentSection.elements.push(
          <div key={`img-${i}`} style={{ marginTop: '20px', marginBottom: '20px', textAlign: 'center' }}>
            <img 
              src={imgMatch[2]} 
              alt={imgMatch[1]} 
              style={{ 
                maxWidth: '100%', 
                borderRadius: '8px', 
                border: '1px solid #e2e8f0',
                boxShadow: 'var(--shadow-md)',
                display: 'block',
                margin: '0 auto'
              }} 
            />
            {imgMatch[1] && (
              <span style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '10px', display: 'inline-block', fontWeight: '500' }}>
                {imgMatch[1]}
              </span>
            )}
          </div>
        );
        continue;
      }

      // Normal paragraph with potential inline links
      currentSection.elements.push(
        <p key={i} style={{ marginBottom: '14px', color: '#475569', fontSize: '0.9rem', lineHeight: '1.6' }}>
          {parseInlineMarkdown(trimmed)}
        </p>
      );
    }

    // Flush remaining
    if (inTable) flushTable('end');
    if (inList) flushList('end');
    if (inCodeBlock) flushCodeBlock('end');

    if (currentSection.title !== "" || currentSection.elements.length > 0) {
      sections.push(currentSection);
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {sections.map((section, index) => {
          if (section.title === "") {
            return (
              <div key={`flat-${index}`} style={{ marginBottom: '16px' }}>
                {section.elements}
              </div>
            );
          }

          const isExpanded = openSectionIndex === index;

          return (
            <div 
              key={`section-${index}`} 
              style={{ 
                border: '1px solid #e2e8f0', 
                borderRadius: '8px', 
                overflow: 'hidden', 
                backgroundColor: '#ffffff',
                boxShadow: isExpanded ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                transition: 'all 0.2s ease-in-out'
              }}
            >
              <button
                onClick={() => setOpenSectionIndex(isExpanded ? null : index)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  backgroundColor: isExpanded ? '#f8fafc' : '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isExpanded) e.currentTarget.style.backgroundColor = '#f8fafc';
                }}
                onMouseLeave={(e) => {
                  if (!isExpanded) e.currentTarget.style.backgroundColor = '#ffffff';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <BookOpen size={18} style={{ color: 'var(--color-primary)' }} />
                  <span style={{ fontWeight: '700', fontSize: '1rem', color: '#1e293b' }}>
                    {section.title}
                  </span>
                </div>
                <div style={{ 
                  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', 
                  transition: 'transform 0.2s ease',
                  color: '#64748b',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <ChevronDown size={18} />
                </div>
              </button>
              
              {isExpanded && (
                <div style={{ 
                  padding: '24px 20px', 
                  borderTop: '1px solid #e2e8f0',
                  backgroundColor: '#ffffff'
                }}>
                  {section.elements}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
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
    <div className="class-workspace-root" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 65px)', backgroundColor: 'var(--bg-main)' }}>
      
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
          <div style={{ marginLeft: '32px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            {isEditingDate ? (
              <input 
                type="date"
                value={resolvedDate || quiz.date}
                onChange={(e) => {
                  onUpdateCustomDate(quiz.id, e.target.value);
                  setIsEditingDate(false);
                }}
                onBlur={() => setIsEditingDate(false)}
                autoFocus
                style={{
                  fontSize: '0.8rem',
                  padding: '2px 6px',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-sm)',
                  outline: 'none',
                  backgroundColor: 'var(--bg-surface)',
                  color: 'var(--text-primary)'
                }}
              />
            ) : (
              <span 
                onClick={() => setIsEditingDate(true)}
                style={{ 
                  fontSize: '0.8rem', 
                  color: 'var(--text-muted)', 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  padding: '2px 6px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: '#f1f5f9',
                  transition: 'background-color 0.2s'
                }}
                title="Click to adjust class date"
              >
                <span>📅 {formatDate(resolvedDate || quiz.date)}</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--color-primary)', fontWeight: '600' }}>✏️ Edit</span>
              </span>
            )}
          </div>
        </div>

        {/* Action buttons on the right */}
        {answersRecord.length > 0 && (
          <div>
            <button
              onClick={() => setResetModalOpen(true)}
              className="btn-scaler btn-scaler-secondary"
              style={{
                padding: '6px 14px',
                fontSize: '0.78rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                border: '1px solid var(--color-danger)',
                color: 'var(--color-danger)',
                backgroundColor: 'transparent',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              <RotateCcw size={13} /> Reset Class Progress
            </button>
          </div>
        )}

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
        <div className="scaler-assignment-container" style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          
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
          <div className="scaler-assignment-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            
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

      {/* Custom styled modal for resetting class progress */}
      <CustomModal
        isOpen={resetModalOpen}
        type="confirm"
        title="⚠️ WARNING: Reset Progress"
        message="This will permanently delete all your solved answers and score data for this class. You will have to solve these class MCQs again from the beginning."
        onConfirm={() => {
          onSubmitAnswer(quiz.id, {
            completed: false,
            score: 0,
            total: questions.length,
            answersRecord: []
          });
          setActiveTab('All');
          setResetModalOpen(false);
        }}
        onCancel={() => setResetModalOpen(false)}
      />

    </div>
  );
}
