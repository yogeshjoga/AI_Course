import React from 'react';
import { Award, BookOpen, CheckCircle, TrendingUp } from 'lucide-react';

export default function StatsDashboard({ manifest, history }) {
  const totalQuizzes = manifest.length;
  
  // Calculate completed quizzes
  const completedIds = Object.keys(history).filter(id => history[id]?.completed);
  const completedCount = completedIds.length;
  
  // Calculate completion percentage
  const completionRate = totalQuizzes > 0 ? Math.round((completedCount / totalQuizzes) * 100) : 0;
  
  // Calculate average score
  let averageScore = 0;
  let totalScorePercent = 0;
  
  if (completedCount > 0) {
    completedIds.forEach(id => {
      const quiz = history[id];
      const percent = (quiz.score / quiz.total) * 100;
      totalScorePercent += percent;
    });
    averageScore = Math.round(totalScorePercent / completedCount);
  }

  // Count correct answers
  const totalCorrect = completedIds.reduce((sum, id) => sum + (history[id]?.score || 0), 0);
  
  // Breakdown by Topic
  const topics = {};
  manifest.forEach(quiz => {
    if (!topics[quiz.topic]) {
      topics[quiz.topic] = { total: 0, completed: 0 };
    }
    topics[quiz.topic].total += 1;
    if (history[quiz.id]?.completed) {
      topics[quiz.topic].completed += 1;
    }
  });

  return (
    <div className="glass-panel" style={{ padding: '24px', marginBottom: '32px' }}>
      <h2 style={{ marginBottom: '20px', fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <TrendingUp size={22} className="text-primary" style={{ color: 'var(--color-primary)' }} />
        Your Progress Dashboard
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '28px' }}>
        
        {/* Stat Card 1 */}
        <div className="stat-pill">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span className="stat-val">{completionRate}%</span>
            <BookOpen size={20} style={{ color: 'var(--color-info)' }} />
          </div>
          <span className="stat-lbl">Completion Rate</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            {completedCount} of {totalQuizzes} classes solved
          </span>
        </div>

        {/* Stat Card 2 */}
        <div className="stat-pill">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span className="stat-val">{averageScore}%</span>
            <Award size={20} style={{ color: 'var(--color-secondary)' }} />
          </div>
          <span className="stat-lbl">Average Score</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Across all finished quizzes
          </span>
        </div>

        {/* Stat Card 3 */}
        <div className="stat-pill">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span className="stat-val">{totalCorrect}</span>
            <CheckCircle size={20} style={{ color: 'var(--color-success)' }} />
          </div>
          <span className="stat-lbl">Total Correct</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Total MCQs answered right
          </span>
        </div>

      </div>

      {/* Topic Progress Bars */}
      <div>
        <h3 style={{ fontSize: '1rem', marginBottom: '14px', color: '#ffffff' }}>Topics Mastery</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          {Object.entries(topics).map(([topic, data]) => {
            const percent = Math.round((data.completed / data.total) * 100);
            
            // Choose Badge Class
            let badgeClass = 'topic-default';
            const cleanTopic = topic.toLowerCase().replace(/[^a-z0-9]/g, '');
            if (cleanTopic.includes('hld')) badgeClass = 'topic-hld';
            else if (cleanTopic.includes('lld')) badgeClass = 'topic-lld';
            else if (cleanTopic.includes('dsa')) badgeClass = 'topic-dsa';
            else if (cleanTopic.includes('llm')) badgeClass = 'topic-llms';
            else if (cleanTopic.includes('agent')) badgeClass = 'topic-agents';
            else if (cleanTopic.includes('python')) badgeClass = 'topic-python';
            else if (cleanTopic.includes('fastapi')) badgeClass = 'topic-fastapi';
            else if (cleanTopic.includes('ai')) badgeClass = 'topic-ai';

            return (
              <div key={topic} style={{ background: 'rgba(0,0,0,0.15)', padding: '12px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.03)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span className={`topic-badge ${badgeClass}`} style={{ fontSize: '0.7rem' }}>{topic}</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                    {data.completed}/{data.total} ({percent}%)
                  </span>
                </div>
                {/* Visual Progress Bar */}
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div 
                    style={{ 
                      height: '100%', 
                      width: `${percent}%`, 
                      background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))',
                      borderRadius: '3px',
                      transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }} 
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
