import React, { useState } from 'react';
import { Award, RotateCcw, Home, CheckCircle2, XCircle, ChevronDown, ChevronUp, Clock } from 'lucide-react';

export default function QuizResults({ quiz, score, total, answersRecord, seconds, onRetry, onBack }) {
  const percent = Math.round((score / total) * 100);
  const [openReviewIdx, setOpenReviewIdx] = useState(null);

  // SVG parameters for the circular score gauge
  const radius = 60;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  // Format time taken
  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}m ${remainingSecs}s`;
  };

  // Performance feedback
  const getFeedbackMessage = () => {
    if (percent === 100) return { title: 'Perfect Score!', text: 'You are an absolute master of this subject. Design patterns and workflows are second nature!', color: 'var(--color-success)' };
    if (percent >= 80) return { title: 'Excellent Work!', text: 'Superb understanding. You have grasped the core architectural decisions and API mechanics.', color: 'var(--color-primary)' };
    if (percent >= 50) return { title: 'Good Effort!', text: 'Nice attempt! Take a look at the explanations for questions you missed to solidify your concepts.', color: 'var(--color-warning)' };
    return { title: 'Keep Practicing!', text: 'A great learning opportunity. Review the materials and retry the quiz to master these topics.', color: 'var(--color-danger)' };
  };

  const feedback = getFeedbackMessage();

  const toggleReview = (idx) => {
    setOpenReviewIdx(openReviewIdx === idx ? null : idx);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }} className="animate-fade-in">
      
      {/* Result Card */}
      <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', marginBottom: '32px', border: '1.5px solid var(--border-color)' }}>
        
        <div style={{ display: 'inline-flex', position: 'relative', marginBottom: '24px' }}>
          {/* Animated SVG Circle */}
          <svg width="150" height="150" style={{ transform: 'rotate(-90deg)' }}>
            <circle
              cx="75"
              cy="75"
              r={radius}
              fill="transparent"
              stroke="rgba(255, 255, 255, 0.04)"
              strokeWidth={strokeWidth}
            />
            <circle
              cx="75"
              cy="75"
              r={radius}
              fill="transparent"
              stroke={percent >= 80 ? 'var(--color-success)' : percent >= 50 ? 'var(--color-warning)' : 'var(--color-danger)'}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{
                transition: 'stroke-dashoffset 1.2s ease-in-out',
              }}
            />
          </svg>
          {/* Center Text */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '2.2rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: '#ffffff' }}>
              {percent}%
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600' }}>
              Accuracy
            </span>
          </div>
        </div>

        {/* Motivational Title & Message */}
        <h2 style={{ color: feedback.color, fontSize: '1.8rem', marginBottom: '8px', fontWeight: '800' }}>
          {feedback.title}
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', maxWidth: '500px', margin: '0 auto 28px' }}>
          {feedback.text}
        </p>

        {/* Stats Strip */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '40px', 
          background: 'rgba(0, 0, 0, 0.2)', 
          padding: '16px', 
          borderRadius: 'var(--radius-md)', 
          border: '1px solid rgba(255,255,255,0.03)',
          maxWidth: '450px',
          margin: '0 auto 32px'
        }}>
          <div>
            <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#ffffff' }}>{score} / {total}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600' }}>Score</div>
          </div>
          <div style={{ width: '1px', background: 'rgba(255,255,255,0.08)' }} />
          <div>
            <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'center' }}>
              <Clock size={16} style={{ color: 'var(--color-primary)' }} />
              {formatTime(seconds)}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600' }}>Time Spent</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <button className="btn btn-primary" onClick={onRetry}>
            <RotateCcw size={18} /> Retry Quiz
          </button>
          <button className="btn btn-secondary" onClick={onBack}>
            <Home size={18} /> Back to Dashboard
          </button>
        </div>

      </div>

      {/* Review Section */}
      <div>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: '#ffffff', fontWeight: '700' }}>
          Review Questions & Explanations
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {answersRecord.map((record, idx) => {
            const isOpen = openReviewIdx === idx;
            
            return (
              <div 
                key={idx} 
                className="glass-panel" 
                style={{ 
                  borderRadius: 'var(--radius-md)', 
                  borderLeft: `4px solid ${record.isCorrect ? 'var(--color-success)' : 'var(--color-danger)'}`,
                  overflow: 'hidden'
                }}
              >
                {/* Header Row */}
                <div 
                  onClick={() => toggleReview(idx)}
                  style={{ 
                    padding: '18px 24px', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    cursor: 'pointer' 
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, paddingRight: '12px' }}>
                    {record.isCorrect ? (
                      <CheckCircle2 size={20} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                    ) : (
                      <XCircle size={20} style={{ color: 'var(--color-danger)', flexShrink: 0 }} />
                    )}
                    <span style={{ 
                      fontSize: '0.92rem', 
                      fontWeight: '600', 
                      color: '#ffffff',
                      textAlign: 'left',
                      display: '-webkit-box',
                      WebkitLineClamp: '1',
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      Question {idx + 1}: {record.questionText.split('\n')[0]}
                    </span>
                  </div>
                  <div>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>

                {/* Expanded Details */}
                {isOpen && (
                  <div style={{ padding: '0 24px 24px 24px', borderTop: '1px solid rgba(255, 255, 255, 0.03)', paddingTop: '16px', background: 'rgba(0,0,0,0.1)' }}>
                    {/* Full Question */}
                    <div style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '16px', fontWeight: '500', whiteSpace: 'pre-wrap' }}>
                      {record.questionText}
                    </div>

                    {/* Options Review */}
                    <div style={{ display: 'grid', gap: '8px', marginBottom: '16px' }}>
                      {record.options.map(opt => {
                        const isSelected = record.selectedOption === opt.id;
                        const isCorrect = opt.id === record.correctAnswer;
                        
                        let borderStyle = '1px solid rgba(255,255,255,0.05)';
                        let bgStyle = 'rgba(255,255,255,0.01)';
                        let colorStyle = 'var(--text-secondary)';
                        
                        if (isSelected) {
                          if (isCorrect) {
                            borderStyle = '1px solid var(--color-success)';
                            bgStyle = 'var(--color-success-bg)';
                            colorStyle = '#ffffff';
                          } else {
                            borderStyle = '1px solid var(--color-danger)';
                            bgStyle = 'var(--color-danger-bg)';
                            colorStyle = '#ffffff';
                          }
                        } else if (isCorrect) {
                          borderStyle = '1.5px dashed var(--color-success)';
                          bgStyle = 'rgba(16, 185, 129, 0.03)';
                          colorStyle = 'var(--color-success)';
                        }

                        return (
                          <div 
                            key={opt.id} 
                            style={{ 
                              padding: '10px 14px', 
                              border: borderStyle, 
                              background: bgStyle, 
                              borderRadius: '8px', 
                              fontSize: '0.85rem',
                              color: colorStyle,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px'
                            }}
                          >
                            <span style={{ 
                              fontWeight: '700', 
                              background: isSelected ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.03)', 
                              padding: '2px 6px', 
                              borderRadius: '4px',
                              border: '1px solid rgba(255,255,255,0.05)'
                            }}>
                              {opt.id}
                            </span>
                            <span>{opt.text}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    <div style={{ 
                      background: 'rgba(255, 255, 255, 0.02)', 
                      border: '1px solid rgba(255,255,255,0.05)', 
                      borderRadius: '8px', 
                      padding: '14px 18px',
                      fontSize: '0.88rem',
                      lineHeight: '1.5',
                      color: 'var(--text-primary)'
                    }}>
                      <div style={{ fontWeight: '700', color: 'var(--color-primary)', marginBottom: '4px' }}>Concept Explanation:</div>
                      <div style={{ whiteSpace: 'pre-wrap' }}>{record.explanation}</div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
