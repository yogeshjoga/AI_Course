import React, { useState } from 'react';
import { ArrowLeft, Search, FileText, ExternalLink, BookOpen, GraduationCap, Compass } from 'lucide-react';

const researchPapersData = [
  {
    topic: "Cloud Databases for AI Apps",
    title: "Building Scalable AI-Powered Applications with Cloud Databases: Architectures, Best Practices and Performance Considerations",
    link: "https://arxiv.org/abs/2504.18793",
    whyUseful: "Covers vector databases (pgvector), graph databases (AWS Neptune), NoSQL (DynamoDB), relational cloud DBs (Aurora), RAG patterns, and real-time pipelines."
  },
  {
    topic: "Distributed Systems Design",
    title: "AI for Distributed Systems Design: Scalable Cloud Optimization Through Repeated LLMs Sampling And Simulators",
    link: "https://arxiv.org/abs/2510.18897",
    whyUseful: "Function-as-a-Service runtime, scheduler design, and throughput improvements for cloud optimization."
  },
  {
    topic: "Database Sharding",
    title: "Self-healing Nodes with Adaptive Data-Sharding",
    link: "https://arxiv.org/pdf/2405.00004.pdf",
    whyUseful: "Adaptive data sharding techniques for building highly scalable, fault-tolerant distributed systems."
  },
  {
    topic: "Blockchain Database Sharding",
    title: "GriDB: Scaling Blockchain Database via Sharding and Off-Chain Cross-Shard Mechanism",
    link: "https://arxiv.org/abs/2407.03750",
    whyUseful: "Off-chain cross-shard mechanism and inter-shard load balancing architectures for scalable databases."
  },
  {
    topic: "Web Agents Architecture",
    title: "An Illusion of Progress? Assessing the Current State of Web Agents",
    link: "https://arxiv.org/abs/2504.01382",
    whyUseful: "Comprehensive analysis of web agent strengths, limitations, and future research directions for autonomous workflows."
  },
  {
    topic: "Schema Linking for Large DBs",
    title: "LinkAlign: Scalable Schema Linking for Real-World Large-Scale Databases",
    link: "https://arxiv.org/abs/2503.18596",
    whyUseful: "Framework designed for databases with thousands of fields, significantly improving accuracy in Text-to-SQL pipelines."
  }
];

export default function ResearchView({ onBack }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All');

  // Fixed categories requested by user
  const topics = ['All', 'AI Agents', 'Database', 'Web', 'Backend Tech'];

  // Helper to match papers with categories based on topics
  const matchesCategory = (paper, category) => {
    if (category === 'All') return true;
    
    const topicLower = paper.topic.toLowerCase();
    
    if (category === 'AI Agents') {
      return topicLower.includes('agent');
    }
    if (category === 'Database') {
      return topicLower.includes('database') || topicLower.includes('sharding') || topicLower.includes('db');
    }
    if (category === 'Web') {
      return topicLower.includes('web') || topicLower.includes('schema');
    }
    if (category === 'Backend Tech') {
      return topicLower.includes('distributed') || topicLower.includes('database') || topicLower.includes('sharding') || topicLower.includes('db');
    }
    return false;
  };

  // Filter papers based on category and search query
  const filteredPapers = researchPapersData.filter(paper => {
    const matchesTopic = matchesCategory(paper, selectedTopic);
    const matchesSearch = 
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.whyUseful.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  // Get matching color scheme for each topic
  const getTopicColor = (topic) => {
    switch (topic) {
      case "Cloud Databases for AI Apps": return { bg: '#e0f2fe', text: '#0369a1', border: '#bde0fe' };
      case "Distributed Systems Design": return { bg: '#f3e8ff', text: '#6b21a8', border: '#e9d5ff' };
      case "Database Sharding": return { bg: '#ecfdf5', text: '#047857', border: '#a7f3d0' };
      case "Blockchain Database Sharding": return { bg: '#fff7ed', text: '#c2410c', border: '#ffedd5' };
      case "Web Agents Architecture": return { bg: '#f0fdf4', text: '#166534', border: '#bbf7d0' };
      case "Schema Linking for Large DBs": return { bg: '#fff1f2', text: '#be123c', border: '#ffe4e6' };
      default: return { bg: '#f1f5f9', text: '#475569', border: '#cbd5e1' };
    }
  };

  return (
    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', overflowY: 'auto', backgroundColor: '#f8fafc', padding: '32px 24px' }}>
      <div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto' }}>
        
        {/* Back Button */}
        <button
          onClick={onBack}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'transparent',
            border: 'none',
            color: 'var(--color-primary)',
            fontSize: '0.9rem',
            fontWeight: '600',
            cursor: 'pointer',
            marginBottom: '24px',
            padding: 0
          }}
        >
          <ArrowLeft size={16} /> Back to Dashboard
        </button>

        {/* Header Block */}
        <div style={{ 
          backgroundColor: '#ffffff', 
          border: '1px solid var(--border-color)', 
          borderRadius: 'var(--radius-lg)', 
          padding: '32px', 
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '28px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <Compass size={32} style={{ color: 'var(--color-primary)' }} />
            <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#1e293b', margin: 0 }}>
              Curated System Design & AI Research Directory
            </h1>
          </div>
          <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
            Explore cutting-edge research papers from arXiv detailing production-grade database architectures, 
            blockchain cross-shard scaling systems, agentic workflow scaling patterns, and distributed cloud optimizers.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '16px',
          marginBottom: '24px'
        }}>
          {/* Search Input */}
          <div style={{ position: 'relative', width: '100%' }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search by paper title, key concepts, or topics..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px 12px 48px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontSize: '0.95rem',
                outline: 'none',
                boxShadow: 'var(--shadow-sm)',
                transition: 'border-color 0.2s ease'
              }}
            />
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {topics.map(topic => {
              const isActive = selectedTopic === topic;
              return (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--color-primary)' : 'var(--border-color)',
                    backgroundColor: isActive ? 'var(--color-primary)' : '#ffffff',
                    color: isActive ? '#ffffff' : '#475569',
                    boxShadow: isActive ? '0 2px 4px 0 rgba(0,0,0,0.06)' : 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {topic}
                </button>
              );
            })}
          </div>
        </div>

        {/* Papers Grid */}
        {filteredPapers.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
            {filteredPapers.map((paper, idx) => {
              const colors = getTopicColor(paper.topic);
              return (
                <div 
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    padding: '24px',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    {/* Header: Topic Tag & Icon */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <span style={{
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        backgroundColor: colors.bg,
                        color: colors.text,
                        border: `1px solid ${colors.border}`
                      }}>
                        {paper.topic}
                      </span>
                      <FileText size={18} style={{ color: '#94a3b8' }} />
                    </div>

                    {/* Paper Title */}
                    <h3 style={{ 
                      fontSize: '1.15rem', 
                      fontWeight: '700', 
                      color: '#1e293b', 
                      lineHeight: '1.4',
                      marginBottom: '12px',
                      fontFamily: 'var(--font-heading)'
                    }}>
                      {paper.title}
                    </h3>

                    {/* Why Useful block */}
                    <div style={{ 
                      backgroundColor: '#f8fafc',
                      borderRadius: '6px',
                      padding: '12px 16px',
                      marginBottom: '20px',
                      borderLeft: `3px solid ${colors.text}`
                    }}>
                      <h4 style={{ margin: '0 0 6px 0', fontSize: '0.8rem', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        💡 Why It's Useful
                      </h4>
                      <p style={{ margin: 0, fontSize: '0.88rem', color: '#475569', lineHeight: '1.5' }}>
                        {paper.whyUseful}
                      </p>
                    </div>
                  </div>

                  {/* arXiv Link Footer */}
                  <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '4px' }}>
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        fontSize: '0.82rem',
                        fontWeight: '700',
                        color: '#ffffff',
                        backgroundColor: 'var(--color-primary)',
                        textDecoration: 'none',
                        transition: 'background-color 0.2s ease',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#2563eb'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-primary)'; }}
                    >
                      <ExternalLink size={14} /> Open arXiv Paper
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ 
            backgroundColor: '#ffffff', 
            border: '1.5px dashed var(--border-color)', 
            padding: '60px 40px', 
            textAlign: 'center', 
            borderRadius: 'var(--radius-lg)' 
          }}>
            <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0 }}>
              No research papers found matching your query. Try a different search keyword.
            </p>
          </div>
        )}
        
      </div>
    </div>
  );
}
