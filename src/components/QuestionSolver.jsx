import React, { useState, useEffect } from 'react';
import { Check, AlertCircle, HelpCircle } from 'lucide-react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-json';

export default function QuestionSolver({ question, questionIdx, answersRecord, onSubmitAnswer, totalQuestions, onNextQuestion }) {
  const record = answersRecord.find(r => r.questionIndex === questionIdx);
  const isCorrectRecorded = record?.isCorrect;

  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isWrongAnswer, setIsWrongAnswer] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);

  // Sync state when question changes
  useEffect(() => {
    if (record) {
      setSelectedOption(record.selectedOption);
      setSubmitted(true);
      setIsWrongAnswer(!record.isCorrect);
      setHintUsed(record.hintUsed || false);
    } else {
      setSelectedOption(null);
      setSubmitted(false);
      setIsWrongAnswer(false);
      setHintUsed(false);
    }
    setShowHint(false); // Reset hint state on question change
  }, [questionIdx, record]);

  // Helper to render markdown-like formatting (bold, code)
  const renderTextContent = (text) => {
    if (!text) return '';
    
    let blocks = [];
    let textWithPlaceholders = text.replace(/```([a-zA-Z0-9]+)?\r?\n([\s\S]*?)```/g, (match, lang, code) => {
      blocks.push({ lang, code });
      return `___CODE_BLOCK_${blocks.length - 1}___`;
    });

    let escaped = textWithPlaceholders
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    escaped = escaped.replace(/`([^`]+)`/g, '<code>$1</code>');
    escaped = escaped.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    escaped = escaped.replace(/\n/g, '<br />');

    blocks.forEach((block, index) => {
      const language = (block.lang || 'text').trim().toLowerCase();
      let highlightedCode = block.code.trim();
      
      try {
        if (Prism.languages[language]) {
          highlightedCode = Prism.highlight(highlightedCode, Prism.languages[language], language);
        } else {
          highlightedCode = highlightedCode
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        }
      } catch (e) {
        highlightedCode = highlightedCode
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
      }

      const blockHtml = `
        <div class="code-block-wrapper" style="margin: 16px 0; border-radius: 6px; overflow: hidden; border: 1px solid var(--border-color); background: #2d2d2d;">
          <div class="code-block-header" style="background: #1e1e1e; color: #a0a0a0; padding: 6px 12px; font-size: 0.75rem; font-family: monospace; text-transform: uppercase; border-bottom: 1px solid #333;">
            ${language === 'text' ? 'Code Snippet' : language}
          </div>
          <pre style="margin: 0; padding: 16px; font-size: 0.9rem; overflow-x: auto; background: transparent;"><code class="language-${language}">${highlightedCode}</code></pre>
        </div>
      `;

      escaped = escaped.replace(`___CODE_BLOCK_${index}___`, blockHtml);
    });

    return <div dangerouslySetInnerHTML={{ __html: escaped }} />;
  };

  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleSubmit = () => {
    if (!selectedOption) return;

    const isCorrect = selectedOption === question.correctAnswer;
    setSubmitted(true);
    setIsWrongAnswer(!isCorrect);

    onSubmitAnswer(questionIdx, selectedOption, isCorrect, hintUsed);
  };

  const correctOption = question.options?.find(o => o.id === question.correctAnswer);
  const correctOptionText = correctOption ? correctOption.text : '';

  return (
    <div className="scaler-split-workspace">
      
      {/* Left Column: Problem Description */}
      <div className="scaler-description-pane">
        
        {/* Title Block */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700', lineHeight: '1.4' }}>
            Q{questionIdx + 1}. {question.questionText.split('\n')[0]}
          </h2>
          
          {isCorrectRecorded ? (
            <span className="badge-solved">
              <Check size={12} /> Solved
            </span>
          ) : (
            <span className="badge-unsolved">
              Unsolved
            </span>
          )}
        </div>

        {/* Hints Banner */}
        <div style={{ 
          background: '#f8fafd', 
          border: '1px solid #d0e3f0', 
          borderRadius: 'var(--radius-md)', 
          padding: '12px 16px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          marginBottom: showHint ? '12px' : '24px',
          transition: 'margin-bottom var(--transition-fast)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HelpCircle size={16} style={{ color: 'var(--color-primary)' }} />
            <span>
              {hintUsed 
                ? 'Hint used. This question is worth 0 points.' 
                : 'Warning: Using the hint for this problem will reduce your score to 0 points.'}
            </span>
          </div>
          <button 
            className="btn-scaler btn-scaler-secondary" 
            style={{ 
              padding: '4px 10px', 
              fontSize: '0.78rem', 
              border: '1px solid var(--color-primary)', 
              color: showHint ? '#ffffff' : 'var(--color-primary)',
              backgroundColor: showHint ? 'var(--color-primary)' : 'transparent',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onClick={() => {
              setShowHint(!showHint);
              setHintUsed(true);
            }}
          >
            {showHint ? 'Hide Hint' : 'Use Hint'}
          </button>
        </div>

        {/* Inline Hint Block */}
        {showHint && (
          <div className="animate-fade-in" style={{ 
            background: '#fffbf0', 
            border: '1px solid #ffeeba', 
            borderRadius: 'var(--radius-md)', 
            padding: '14px 18px', 
            fontSize: '0.9rem',
            color: '#856404',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
          }}>
            <span style={{ fontSize: '1.1rem', marginTop: '-2px' }}>💡</span>
            <div>
              <strong>Hint:</strong> Focus on understanding option <strong>{question.correctAnswer}</strong>:
              <div style={{ marginTop: '6px', fontStyle: 'italic', fontWeight: '500', color: '#664d03' }}>
                {renderTextContent(correctOptionText)}
              </div>
            </div>
          </div>
        )}

        {/* Question Text Body (if any additional lines exist) */}
        {question.questionText.split('\n').length > 1 && (
          <div style={{ fontSize: '0.98rem', lineHeight: '1.6', color: 'var(--text-primary)', marginBottom: '24px' }}>
            {renderTextContent(question.questionText.split('\n').slice(1).join('\n'))}
          </div>
        )}

        {/* Explanation Banner (Shows if answer is submitted) */}
        {submitted && isWrongAnswer && (
          <div style={{ 
            background: 'var(--color-danger-bg)', 
            border: '1px solid var(--color-danger-text)', 
            borderRadius: 'var(--radius-md)', 
            padding: '18px', 
            marginTop: '32px',
            color: 'var(--color-danger-text)'
          }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', fontWeight: '700', fontSize: '0.92rem' }}>
              <AlertCircle size={18} />
              <span>Incorrect answer submitted. Explanation:</span>
            </div>
            <div style={{ fontSize: '0.88rem', lineHeight: '1.5', paddingLeft: '26px' }}>
              {renderTextContent(question.explanation)}
            </div>
          </div>
        )}

        {submitted && !isWrongAnswer && (
          <div style={{ 
            background: '#d1e7dd', 
            border: '1px solid #a3cfbb', 
            borderRadius: 'var(--radius-md)', 
            padding: '18px', 
            marginTop: '32px',
            color: '#0f5132'
          }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', fontWeight: '700', fontSize: '0.92rem' }}>
              <Check size={18} />
              <span>Correct! Explanation:</span>
            </div>
            <div style={{ fontSize: '0.88rem', lineHeight: '1.5', paddingLeft: '26px' }}>
              {renderTextContent(question.explanation)}
            </div>
          </div>
        )}

      </div>

      {/* Right Column: Interaction Panel */}
      <div className="scaler-interactive-pane">
        
        {/* Options List */}
        <div>
          <h3 style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '20px' }}>
            Choose the correct answer from below:
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {question.options.map((option) => {
              const isSelected = selectedOption === option.id;
              const isCorrectOption = option.id === question.correctAnswer;
              
              let cardClass = '';
              if (isSelected) cardClass = ' selected';
              
              if (submitted) {
                if (isSelected) {
                  cardClass = isCorrectOption ? ' correct' : ' incorrect';
                } else if (isCorrectOption) {
                  cardClass = ' correct-outline';
                }
              }

              return (
                <button
                  key={option.id}
                  className={`scaler-option-card${cardClass}`}
                  onClick={() => handleOptionClick(option.id)}
                  disabled={submitted && isCorrectRecorded} // Lock if solved, allow retry if wrong
                >
                  <div className="scaler-radio-circle" />
                  <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                    {renderTextContent(option.text)}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer actions */}
        <div style={{ borderTop: '1px solid #d0dbe5', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            ℹ️ Feel Free to submit your answer. Your score will only be calculated based on the best of your attempts.
          </span>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
            {onNextQuestion && (
              <button
                className="btn-scaler btn-scaler-secondary"
                style={{ 
                  width: '120px', 
                  height: '40px', 
                  border: '1px solid var(--color-primary)', 
                  color: 'var(--color-primary)',
                  cursor: 'pointer'
                }}
                onClick={onNextQuestion}
              >
                {questionIdx === totalQuestions - 1 ? 'Back to List' : 'Next'}
              </button>
            )}
            <button
              className="btn-scaler btn-scaler-primary"
              style={{ width: '120px', height: '40px' }}
              onClick={handleSubmit}
              disabled={!selectedOption || (submitted && isCorrectRecorded)}
            >
              Submit
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
