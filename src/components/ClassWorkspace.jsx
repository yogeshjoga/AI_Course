import React, { useState } from 'react';
import ProblemListTable from './ProblemListTable';
import QuestionSolver from './QuestionSolver';
import { ArrowLeft, CheckCircle, ChevronLeft, ChevronRight, HelpCircle, Bell } from 'lucide-react';

export default function ClassWorkspace({ 
  quiz, 
  questions, 
  manifest, 
  history, 
  onBack, 
  onNavigateQuiz, 
  onSubmitAnswer 
}) {
  const [activeTab, setActiveTab] = useState('All'); // 'All' or number (0, 1, 2...)

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

  const handleSubmitAnswer = (questionIdx, selectedOption, isCorrect) => {
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
      explanation: questions[questionIdx].explanation
    };

    if (existingIndex > -1) {
      updatedAnswers[existingIndex] = newRecordItem;
    } else {
      updatedAnswers.push(newRecordItem);
    }

    const newScore = updatedAnswers.filter(r => r.isCorrect).length;
    const isQuizComplete = newScore === questions.length;

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
        <div className="subtab-item active">Assignment {solvedCount}/{questions.length}</div>
      </div>

      {/* Main Split Layout */}
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

    </div>
  );
}
