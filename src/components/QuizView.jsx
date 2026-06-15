import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowLeft, AlertCircle, CheckCircle2, Clock } from 'lucide-react';

export default function QuizView({ quiz, questions, onBack, onComplete }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [answersRecord, setAnswersRecord] = useState([]);
  const [seconds, setSeconds] = useState(0);

  // Timer effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnswered || currentIdx < questions.length) {
        setSeconds(s => s + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isAnswered, currentIdx]);

  if (!questions || questions.length === 0) {
    return (
      <div className="glass-panel" style={{ padding: '40px', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>No questions found in this quiz.</p>
        <button className="btn btn-secondary" onClick={onBack}>
          <ArrowLeft size={16} /> Back to Dashboard
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentIdx];
  const progressPercent = Math.round(((currentIdx) / questions.length) * 100);

  // Helper to format time (e.g. 02:05)
  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  // Helper to render markdown-like content safely (bold, code, pre blocks)
  const renderTextContent = (text) => {
    if (!text) return '';
    
    // Escape HTML first
    let escaped = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Parse block code ```lang ... ```
    escaped = escaped.replace(/```(?:[a-zA-Z0-9]+)?\r?\n([\s\S]*?)```/g, (match, code) => {
      return `<pre><code>${code.trim()}</code></pre>`;
    });

    // Parse inline code `code`
    escaped = escaped.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Parse bold **text**
    escaped = escaped.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

    // Parse newlines to <br />
    escaped = escaped.replace(/\n/g, '<br />');

    return <div dangerouslySetInnerHTML={{ __html: escaped }} />;
  };

  const handleOptionSelect = (optionId) => {
    if (isAnswered) return; // Prevent clicking after answer is locked
    
    setSelectedOption(optionId);
    setIsAnswered(true);

    const isCorrect = optionId === currentQuestion.correctAnswer;
    
    // Save to results history
    setAnswersRecord(prev => [
      ...prev,
      {
        questionIndex: currentIdx,
        questionText: currentQuestion.questionText,
        options: currentQuestion.options,
        correctAnswer: currentQuestion.correctAnswer,
        selectedOption: optionId,
        isCorrect,
        explanation: currentQuestion.explanation
      }
    ]);
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Quiz finished! Calculate score
      const finalScore = answersRecord.filter(r => r.isCorrect).length;
      onComplete(finalScore, questions.length, answersRecord, seconds);
    }
  };

  const isWrongAnswer = isAnswered && selectedOption !== currentQuestion.correctAnswer;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      
      {/* Top Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <button 
          className="btn btn-secondary" 
          onClick={onBack}
          style={{ padding: '8px 16px', fontSize: '0.85rem' }}
        >
          <ArrowLeft size={16} /> Exit Quiz
        </button>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <Clock size={16} />
            <span style={{ fontFamily: 'monospace', fontWeight: '600' }}>{formatTime(seconds)}</span>
          </div>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
            Question {currentIdx + 1} of {questions.length}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-full)', overflow: 'hidden', marginBottom: '32px', border: '1px solid rgba(255,255,255,0.02)' }}>
        <div 
          style={{ 
            height: '100%', 
            width: `${progressPercent}%`, 
            background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))',
            transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </div>

      {/* Main Question Box */}
      <div className="glass-panel animate-fade-in" style={{ padding: '32px', marginBottom: '24px', borderWidth: '1.5px' }}>
        
        {/* Topic Badge */}
        <span className="topic-badge topic-hld" style={{ marginBottom: '16px', fontSize: '0.7rem' }}>
          {quiz.topic}
        </span>
        
        {/* Question Text */}
        <h2 style={{ fontSize: '1.35rem', marginBottom: '24px', fontWeight: '700', lineHeight: '1.4', color: '#ffffff' }}>
          {renderTextContent(currentQuestion.questionText)}
        </h2>

        {/* Options list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
          {currentQuestion.options.map((option) => {
            const isSelected = selectedOption === option.id;
            const isCorrectOption = option.id === currentQuestion.correctAnswer;
            
            let btnClass = '';
            if (isAnswered) {
              btnClass += ' disabled';
              if (isSelected) {
                btnClass += isCorrectOption ? ' selected-correct' : ' selected-incorrect';
              } else if (isCorrectOption) {
                btnClass += ' revealed-correct';
              }
            }

            return (
              <button
                key={option.id}
                className={`option-btn${btnClass}`}
                onClick={() => handleOptionSelect(option.id)}
                disabled={isAnswered}
              >
                <div className="option-indicator">
                  {option.id}
                </div>
                <div style={{ flex: 1, paddingTop: '1.5px', color: isSelected || (isAnswered && isCorrectOption) ? '#ffffff' : 'inherit' }}>
                  {renderTextContent(option.text)}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation Card (shows ONLY if wrong answer is hit) */}
        {isWrongAnswer && (
          <div 
            className="animate-fade-in" 
            style={{ 
              background: 'var(--color-danger-bg)', 
              border: '1px solid var(--color-danger-border)',
              borderRadius: 'var(--radius-md)',
              padding: '20px',
              marginTop: '24px',
              display: 'flex',
              gap: '12px'
            }}
          >
            <AlertCircle size={22} style={{ color: 'var(--color-danger)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '700', marginBottom: '6px' }}>
                Incorrect. Let's understand why:
              </h4>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: '1.5' }}>
                {renderTextContent(currentQuestion.explanation)}
              </div>
            </div>
          </div>
        )}

        {/* Explanation Card (shows success for correct answer too, optionally, but let's keep it simple or show a nice message) */}
        {isAnswered && !isWrongAnswer && (
          <div 
            className="animate-fade-in" 
            style={{ 
              background: 'var(--color-success-bg)', 
              border: '1px solid var(--color-success-border)',
              borderRadius: 'var(--radius-md)',
              padding: '20px',
              marginTop: '24px',
              display: 'flex',
              gap: '12px'
            }}
          >
            <CheckCircle2 size={22} style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '700', marginBottom: '6px' }}>
                Correct!
              </h4>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: '1.5' }}>
                {renderTextContent(currentQuestion.explanation)}
              </div>
            </div>
          </div>
        )}

        {/* Next Button */}
        {isAnswered && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '20px' }}>
            <button 
              className="btn btn-primary" 
              onClick={handleNext}
              style={{ padding: '12px 24px' }}
            >
              {currentIdx + 1 < questions.length ? 'Next Question' : 'Finish & View Results'}
              <ChevronRight size={18} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
