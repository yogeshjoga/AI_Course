import React, { useState } from 'react';
import { Calendar, HelpCircle, Check, ChevronRight, BookOpen } from 'lucide-react';

export default function QuizCard({ quiz, resolvedDate, onUpdateCustomDate, historyItem, onSelect }) {
  const [isEditingDate, setIsEditingDate] = useState(false);
  const isCompleted = historyItem?.completed;
  const score = historyItem?.score;
  const total = historyItem?.total;
  
  // Calculate solved questions statistics
  const solvedCount = historyItem?.answersRecord?.filter(r => r.isCorrect).length || 0;
  const progressPercent = quiz.questionCount > 0 ? (solvedCount / quiz.questionCount) * 100 : 0;

  // Format topic badge
  let badgeClass = 'topic-default';
  const cleanTopic = quiz.topic.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (cleanTopic.includes('intromodule')) badgeClass = 'topic-intro';
  else if (cleanTopic.includes('hld')) badgeClass = 'topic-hld';
  else if (cleanTopic.includes('database')) badgeClass = 'topic-databases';
  else if (cleanTopic.includes('python')) badgeClass = 'topic-python';
  else if (cleanTopic.includes('fastapi')) badgeClass = 'topic-fastapi';
  else if (cleanTopic.includes('llm') || cleanTopic.includes('ml')) badgeClass = 'topic-llms';
  else if (cleanTopic.includes('memory') || cleanTopic.includes('agent')) badgeClass = 'topic-agents';
  else if (cleanTopic.includes('workflow')) badgeClass = 'topic-workflows';
  else if (cleanTopic.includes('capstone')) badgeClass = 'topic-capstone';
  else if (cleanTopic.includes('ai')) badgeClass = 'topic-ai';

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

  return (
    <div 
      className="glass-panel animate-fade-in-up" 
      onClick={() => onSelect(quiz)}
      style={{ 
        padding: '24px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        cursor: 'pointer',
        height: '100%',
        backgroundColor: quiz.isReference ? 'rgba(139, 92, 246, 0.04)' : undefined,
        borderColor: quiz.isReference ? 'rgba(139, 92, 246, 0.2)' : undefined,
        boxShadow: quiz.isReference ? '0 4px 12px rgba(139, 92, 246, 0.05)' : undefined
      }}
    >
      <div>
        {/* Header Badges */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <span className={`topic-badge ${badgeClass}`}>{quiz.topic}</span>
          
          {/* Status Badge */}
          {isCompleted || solvedCount === quiz.questionCount ? (
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '4px',
              background: 'rgba(16, 185, 129, 0.15)', 
              color: 'var(--color-success)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              padding: '2px 8px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.75rem',
              fontWeight: '600'
            }}>
              <Check size={12} /> {solvedCount}/{quiz.questionCount} Correct
            </span>
          ) : solvedCount > 0 ? (
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '4px',
              background: 'rgba(245, 158, 11, 0.15)', 
              color: '#ca8a04',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              padding: '2px 8px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.75rem',
              fontWeight: '600'
            }}>
              In Progress
            </span>
          ) : (
            <span style={{ 
              background: 'rgba(0, 0, 0, 0.05)', 
              color: 'var(--text-muted)',
              border: '1px solid var(--border-color)',
              padding: '2px 8px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.75rem',
              fontWeight: '500'
            }}>
              Not Solved
            </span>
          )}
        </div>

        {/* Extra Quiz Headline */}
        {quiz.isReference && (
          <div style={{ color: '#7c3aed', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span>✨</span> This is an extra practice quiz, not a class
          </div>
        )}

        {/* Title */}
        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', fontWeight: '700' }}>
          {quiz.title}
        </h3>

        {/* Description */}
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '20px', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {quiz.description}
        </p>

        {/* Dynamic Class-Level Progress Bar */}
        <div style={{ marginTop: '12px', marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px', fontSize: '0.72rem', fontWeight: '700' }}>
            <span style={{ color: solvedCount === quiz.questionCount ? 'var(--color-success)' : solvedCount > 0 ? '#ca8a04' : 'var(--text-muted)' }}>
              {solvedCount === quiz.questionCount ? '🎉 Completed' : solvedCount > 0 ? 'In Progress' : 'Unstarted'}
            </span>
            <span style={{ color: 'var(--text-secondary)' }}>
              {solvedCount}/{quiz.questionCount} Solved ({Math.round(progressPercent)}%)
            </span>
          </div>
          <div style={{ width: '100%', height: '6px', backgroundColor: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ 
              width: `${progressPercent}%`, 
              height: '100%', 
              backgroundColor: solvedCount === quiz.questionCount ? 'var(--color-success)' : 'var(--color-primary)',
              borderRadius: '3px',
              transition: 'width 0.4s ease'
            }} />
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid #eef2f6', paddingTop: '14px', marginTop: '12px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '0.78rem', color: 'var(--text-muted)', alignItems: 'center' }}>
          {!quiz.isReference && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {isEditingDate ? (
                <input
                  type="date"
                  value={resolvedDate || quiz.date}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => {
                    onUpdateCustomDate(quiz.id, e.target.value);
                    setIsEditingDate(false);
                  }}
                  onBlur={() => setIsEditingDate(false)}
                  autoFocus
                  style={{
                    fontSize: '0.75rem',
                    padding: '2px 4px',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-sm)',
                    outline: 'none',
                    backgroundColor: 'var(--bg-surface)',
                    color: 'var(--text-primary)'
                  }}
                />
              ) : (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsEditingDate(true);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    cursor: 'pointer',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(0, 0, 0, 0.03)',
                    transition: 'background-color 0.2s'
                  }}
                  title="Click to edit class date"
                >
                  <Calendar size={14} style={{ color: 'var(--color-primary)' }} />
                  <span>{formatDate(resolvedDate || quiz.date)}</span>
                  <span style={{ fontSize: '0.65rem', opacity: 0.6 }}>✏️</span>
                </div>
              )}
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <HelpCircle size={14} />
            <span>{quiz.questionCount} Questions</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <BookOpen size={14} style={{ color: quiz.resourceCount > 0 ? 'var(--color-primary)' : 'inherit' }} />
            <span style={{ color: quiz.resourceCount > 0 ? 'var(--color-primary)' : 'inherit', fontWeight: quiz.resourceCount > 0 ? '600' : 'normal' }}>
              {quiz.resourceCount || 0} Resources
            </span>
          </div>
          {!quiz.isReference && quiz.timing && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '500', color: 'var(--color-primary)' }}>
              <span>🕒</span>
              <span>{quiz.timing}</span>
            </div>
          )}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <div style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: '600', marginRight: '2px' }}>
              {isCompleted ? 'Retry' : 'Solve'}
            </span>
            <ChevronRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
