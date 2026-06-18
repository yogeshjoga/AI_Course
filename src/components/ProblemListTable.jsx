import React from 'react';
import { Check } from 'lucide-react';

export default function ProblemListTable({ questions, answersRecord, onSolveQuestion }) {
  // Helper to determine difficulty
  const getDifficulty = (index) => {
    if (index % 3 === 0) return { text: 'Easy', className: 'easy', color: '#198754', points: 25 };
    if (index % 3 === 1) return { text: 'Medium', className: 'medium', color: '#ca8a04', points: 50 };
    return { text: 'Hard', className: 'hard', color: '#dc3545', points: 75 };
  };

  return (
    <div style={{ backgroundColor: 'transparent', overflow: 'hidden' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', border: 'none' }}>
        <thead>
          <tr>
            <th style={{ 
              textAlign: 'left', 
              backgroundColor: '#e8f2fc', 
              color: '#5f738c', 
              fontWeight: '600', 
              fontSize: '0.85rem', 
              padding: '14px 20px',
              border: 'none',
              borderTopLeftRadius: '8px',
              borderBottomLeftRadius: '8px'
            }}>
              Name of the Problem
            </th>
            <th style={{ 
              textAlign: 'left', 
              backgroundColor: '#e8f2fc', 
              color: '#5f738c', 
              fontWeight: '600', 
              fontSize: '0.85rem', 
              padding: '14px 20px',
              border: 'none'
            }}>
              Difficulty
            </th>
            <th style={{ 
              textAlign: 'left', 
              backgroundColor: '#e8f2fc', 
              color: '#5f738c', 
              fontWeight: '600', 
              fontSize: '0.85rem', 
              padding: '14px 20px',
              border: 'none'
            }}>
              Score
            </th>
            <th style={{ 
              textAlign: 'left', 
              backgroundColor: '#e8f2fc', 
              color: '#5f738c', 
              fontWeight: '600', 
              fontSize: '0.85rem', 
              padding: '14px 20px',
              border: 'none'
            }}>
              Status
            </th>
            <th style={{ 
              textAlign: 'right', 
              backgroundColor: '#e8f2fc', 
              color: '#5f738c', 
              fontWeight: '600', 
              fontSize: '0.85rem', 
              padding: '14px 20px',
              border: 'none',
              borderTopRightRadius: '8px',
              borderBottomRightRadius: '8px'
            }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, idx) => {
            const record = answersRecord.find(r => r.questionIndex === idx);
            const isSolved = record?.isCorrect;
            const difficulty = getDifficulty(idx);
            
            return (
              <tr 
                key={idx} 
                className="problem-row-item"
                style={{ cursor: 'pointer' }} 
                onClick={() => onSolveQuestion(idx)}
              >
                {/* Name */}
                <td style={{ 
                  padding: '18px 20px', 
                  border: 'none',
                  fontWeight: '600', 
                  color: '#4e5d78',
                  fontSize: '0.92rem'
                }}>
                  Q{idx + 1}. {question.questionText.split('\n')[0]}
                </td>
                
                {/* Difficulty */}
                <td style={{ padding: '18px 20px', border: 'none' }}>
                  <span style={{ color: difficulty.color, fontWeight: '600', fontSize: '0.85rem' }}>
                    {difficulty.text}
                  </span>
                </td>
                
                {/* Score */}
                <td style={{ padding: '18px 20px', border: 'none', color: '#4e5d78', fontWeight: 500, fontSize: '0.88rem' }}>
                  {isSolved && !record?.hintUsed ? `${difficulty.points}.0/${difficulty.points}` : `0.0/${difficulty.points}`}
                </td>
                
                {/* Status */}
                <td style={{ padding: '18px 20px', border: 'none' }}>
                  {isSolved ? (
                    <span style={{ 
                      backgroundColor: '#e2f9eb', 
                      color: '#198754', 
                      padding: '4px 10px', 
                      borderRadius: '4px',
                      fontSize: '0.82rem',
                      fontWeight: '600',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <Check size={12} /> Solved
                    </span>
                  ) : (
                    <span style={{ 
                      backgroundColor: '#f1f3f5', 
                      color: '#6c757d', 
                      padding: '4px 10px', 
                      borderRadius: '4px',
                      fontSize: '0.82rem',
                      fontWeight: '600',
                      display: 'inline-flex',
                      alignItems: 'center'
                    }}>
                      Unsolved
                    </span>
                  )}
                </td>
                
                {/* Actions */}
                <td style={{ padding: '18px 20px', border: 'none', textAlign: 'right' }}>
                  <button 
                    className={`btn-scaler ${isSolved ? 'btn-scaler-secondary' : 'btn-scaler-primary'}`}
                    style={{ padding: '6px 16px', fontSize: '0.8rem', minWidth: '80px', borderRadius: '4px' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSolveQuestion(idx);
                    }}
                  >
                    {isSolved ? 'Review' : 'Solve'}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
