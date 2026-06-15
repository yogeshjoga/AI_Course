import React from 'react';
import { Calendar, HelpCircle, Check, ChevronRight } from 'lucide-react';

export default function QuizCard({ quiz, historyItem, onSelect }) {
  const isCompleted = historyItem?.completed;
  const score = historyItem?.score;
  const total = historyItem?.total;
  
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
        height: '100%'
      }}
    >
      <div>
        {/* Header Badges */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <span className={`topic-badge ${badgeClass}`}>{quiz.topic}</span>
          
          {/* Status Badge */}
          {isCompleted ? (
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '4px',
              background: 'rgba(16, 185, 129, 0.15)', 
              color: '#34d399',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              padding: '2px 8px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.75rem',
              fontWeight: '600'
            }}>
              <Check size={12} /> {score}/{total} Correct
            </span>
          ) : (
            <span style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              color: 'var(--text-muted)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              padding: '2px 8px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.75rem',
              fontWeight: '500'
            }}>
              Not Solved
            </span>
          )}
        </div>

        {/* Title */}
        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', fontWeight: '700' }}>
          {quiz.title}
        </h3>

        {/* Description */}
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '20px', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {quiz.description}
        </p>
      </div>

      {/* Footer Info */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid #eef2f6', paddingTop: '14px', marginTop: '12px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Calendar size={14} />
            <span>{formatDate(quiz.date)}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <HelpCircle size={14} />
            <span>{quiz.questionCount} Questions</span>
          </div>
          {quiz.timing && (
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
