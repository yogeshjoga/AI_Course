import React, { useState } from 'react';
import { Book, FileText, ArrowRight, ExternalLink, Library, Download, CheckCircle, Lock } from 'lucide-react';
import PdfViewerModal from './PdfViewerModal';
import ImageViewerModal from './ImageViewerModal';

const imageFiles = [
  "agentic-HLD.png",
  "cache-mq.png",
  "day-1.png",
  "day-2.png",
  "day-2a.png",
  "day-3.png",
  "day-4.png",
  "day-5.png",
  "day-6.png",
  "day-7.png",
  "day-8.png",
  "day-9.png",
  "day-10.png",
  "day-11.png",
  "day-12.png",
  "hld_roadmap.jpg"
];

const generatedCheatsheets = imageFiles.map(filename => ({
  title: filename.replace('.png', '').replace('.jpg', '').replace('-', ' ').toUpperCase() + " Cheatsheet",
  author: "Course Instructor",
  type: "Cheatsheet",
  format: "High-Resolution Image",
  downloadUrl: `/assets/${filename}`,
  coverColor: "#10b981",
  description: `Visual reference and quick cheatsheet for ${filename.replace('.png', '').replace('.jpg', '').replace('-', ' ')}.`,
  learnings: [
    "Quickly review visual architecture.",
    "Easily recall concepts for interviews."
  ]
}));

const referenceNotes = [
  "topic_1_rag_vector_db.md",
  "topic_2_mcp_tool_calling.md",
  "topic_3_cache_mq_optimization.md",
  "topic_4_multi_agent_architect.md"
];

const generatedReferenceNotes = referenceNotes.map((filename, index) => ({
  title: `Agentic AI Notes - Topic ${index + 1}`,
  author: "Course Instructor",
  type: "Reference Note",
  format: "Markdown Document",
  downloadUrl: `/hld_notes/${filename}`,
  coverColor: "#8b5cf6",
  description: `Quick reference notes on ${filename.replace('topic_', '').replace('.md', '').replace(/_/g, ' ')}.`,
  learnings: [
    "Quickly revise core topics from the Day 14 MCQs.",
    "Understand the architecture and technology choices."
  ]
}));

const hldPdfFiles = [
  "NoSQL Contd.pdf",
  "NoSQL Continued.pdf",
  "System Design - Caching 1.pdf",
  "System Design - Caching Contd..docx.pdf",
  "System Design - Caching Contd.pdf",
  "System Design - Case Study - Design Hotstar.pdf",
  "System Design - Case Study - Design Uber.pdf",
  "System Design - Case Study - Elastic Search.pdf",
  "System Design - Case Study - Messaging.pdf",
  "System Design - Case Study -Typeahead.pdf",
  "System Design - Microservices 1.pdf",
  "System Design - Microservices 2.pdf",
  "System Design - NoSQL Internals - LSM Trees.pdf",
  "System Design - Popular Interview Questions.pdf",
  "System Design - S3 + Quad trees (nearest neighbors).pdf",
  "System Design - SQL vs NoSQL.pdf",
  "System Design - Zookeeper + Kafka.pdf",
  "System Design 101 & Consistent Hashing.pdf"
];

const generatedHldPdfs = hldPdfFiles.map(filename => ({
  title: filename.replace('.pdf', '').replace('.docx', ''),
  author: "Course Instructor",
  type: "HLD PDF Note",
  format: "PDF Document",
  downloadUrl: `/hld_notes/${filename}`,
  coverColor: "#e11d48",
  description: `Class notes and architectural diagrams covering ${filename.replace('.pdf', '').replace('.docx', '')}.`,
  learnings: [
    "Review core concepts discussed during the live session.",
    "Understand architectural diagrams and flows.",
    "Examine tradeoffs between different system design approaches."
  ]
}));

export default function ModuleResourcesView({ topic }) {
  const [activeResourceIdx, setActiveResourceIdx] = useState(0);
  const [previewState, setPreviewState] = useState({ isOpen: false, url: '', title: '' });
  const [imagePreviewState, setImagePreviewState] = useState({ isOpen: false, url: '', title: '' });

  // High-quality Books & Reference Material dataset for each module
  const resourcesData = {
    'Intro Module': [
      {
        title: "Inspired: How to Create Tech Products Customers Love",
        author: "Marty Cagan",
        type: "Recommended Book",
        format: "Paperback / Kindle",
        downloadUrl: "https://www.svpg.com/books/inspired-how-to-create-tech-products-customers-love-2nd-edition/",
        coverColor: "#3b82f6",
        description: "The gold standard for product thinking. Learn how to define products that are valuable, usable, feasible, and viable, establishing a solid user-first and problem-first mindset.",
        learnings: [
          "The root causes of product failures in technology teams",
          "How to run discovery to validate product feasibility and user value",
          "Understanding the role of product managers vs. software architects",
          "Creating a product vision and cascading product principles"
        ]
      },
      {
        title: "The Lean Startup",
        author: "Eric Ries",
        type: "Recommended Book",
        format: "Paperback / PDF Guide",
        downloadUrl: "https://theleanstartup.com/",
        coverColor: "#1e3a8a",
        description: "A must-read for understanding modern SDLC. Learn how to design Minimum Viable Products (MVPs), run build-measure-learn loops, and structure feedback loops before investing heavily in engineering.",
        learnings: [
          "Validated learning as a discipline for software releases",
          "Designing MVPs (Minimum Viable Products) to test business problems",
          "When to pivot product technology or persevere",
          "Continuous deployment and cohort analysis basics"
        ]
      }
    ],
    'HLD': [
      {
        title: "AI Agent Building - HLD Concepts Roadmap",
        author: "Course Instructor",
        type: "Architecture Roadmap",
        format: "High-Resolution Image",
        downloadUrl: "/assets/hld_roadmap.jpg",
        coverColor: "#8b5cf6",
        description: "A comprehensive visual roadmap detailing the journey from Idea -> Architecture -> Scale -> Intelligence for building AI Agents. Covers BOE calculations, functional and non-functional requirements, data layers, and agent memory loops.",
        learnings: [
          "End-to-End System Design workflow for intelligent agents",
          "Distinguishing between traditional systems and AI Agent systems",
          "Understanding the Observability and Security stack requirements",
          "Visualizing the components of Intent, Planner, Memory, and Tool Execution"
        ]
      },
      {
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        type: "Essential Reference Book",
        format: "PDF / Hardcover",
        downloadUrl: "https://dataintensive.net/",
        coverColor: "#1e73e8",
        description: "Frequently regarded as the 'bible' of system design and High Level Design. This book dives deep into the architecture, data models, scalability patterns, and distributed system concepts that back modern massive-scale systems.",
        learnings: [
          "Replication models (Single-leader, multi-leader, leaderless)",
          "Database partitioning (sharding) strategies and secondary indexes",
          "How databases store data (LSM-trees vs B-trees)",
          "Distributed systems challenges: clocks, consensus, split-brain, and CAP theorem"
        ]
      },
      {
        title: "System Design Interview – An Insider's Guide",
        author: "Alex Xu",
        type: "Practical System Design Guide",
        format: "Kindle / PDF Reference",
        downloadUrl: "https://bytebytego.com/",
        coverColor: "#0f172a",
        description: "A highly practical reference guide that details step-by-step architectures for real-world platforms (like WhatsApp, YouTube, and Rate Limiters). Ideal for applying HLD concepts to production blueprints.",
        learnings: [
          "Standard framework for solving system design problems",
          "Designing a chat system (WhatsApp-scale connection servers)",
          "Designing a video streaming platform (YouTube-scale transcoding and CDN delivery)",
          "Web crawler and notification service architectures"
        ]
      },
      ...generatedHldPdfs,
      ...generatedCheatsheets,
      ...generatedReferenceNotes
    ],
    'Databases': [
      {
        title: "Database Internals: A Deep Dive into How Distributed Data Systems Work",
        author: "Alex Petrov",
        type: "Advanced Reference Book",
        format: "Paperback / eBook",
        downloadUrl: "https://www.databass.dev/",
        coverColor: "#ea580c",
        description: "A deep technical look under the hood of database engines. Understand the design patterns, storage structures, and transaction protocols that power SQL and NoSQL database management systems.",
        learnings: [
          "B-Trees, B+ Trees, and Log-Structured Merge (LSM) Trees",
          "Concurrency control: MVCC, Two-Phase Locking (2PL), and isolation levels",
          "Distributed consensus protocols (Paxos, Raft)",
          "Anti-entropy algorithms and gossip protocols"
        ]
      },
      {
        title: "SQL Performance Explained",
        author: "Markus Winand",
        type: "Performance Guide",
        format: "Free Online Reference / Book",
        downloadUrl: "https://sql-performance-explained.com/",
        coverColor: "#b45309",
        description: "A developer-focused guide explaining database indexing, query execution plans, and performance tuning. Highly useful for architects seeking to optimize slow queries in relational databases.",
        learnings: [
          "How database indexes work structure-wise",
          "Preventing common index-avoidance query patterns",
          "Optimizing multi-column indexes and JOIN query paths",
          "Understanding performance impacts of functions on indexed columns"
        ]
      }
    ],
    'Python': [
      {
        title: "Fluent Python: Clear, Concise, and Effective Programming",
        author: "Luciano Ramalho",
        type: "Advanced Language Reference",
        format: "Paperback / eBook",
        downloadUrl: "https://www.oreilly.com/library/view/fluent-python-2nd/9781492056317/",
        coverColor: "#a16207",
        description: "Take your Python skills to an expert level. Learn how to write clean, idiomatic Python code by utilizing its best features: generators, coroutines, type hints, and deep metadata interfaces.",
        learnings: [
          "Idiomatic dictionaries, sets, and sequence behaviors",
          "Object-oriented Python: protocols, abstract base classes, and multiple inheritance",
          "Concurrency models (asyncio event loops vs. multiprocessing futures)",
          "Metaprogramming, decorators, and dynamic attribute handling"
        ]
      },
      {
        title: "Effective Python: 90 Specific Ways to Write Better Python",
        author: "Brett Slatkin",
        type: "Coding Standards Reference",
        format: "eBook / PDF Guide",
        downloadUrl: "https://effectivepython.com/",
        coverColor: "#854d0e",
        description: "A handbook containing 90 practical rules of thumb for writing robust Python. Great for reviewing memory management, concurrency guidelines, and testing frameworks.",
        learnings: [
          "Writing clear generator expressions and list comprehensions",
          "Avoiding common pitfalls with default argument evaluation",
          "Structuring packages and modules cleanly",
          "Best practices for debugging, optimization, and unit testing"
        ]
      }
    ],
    'FastAPI': [
      {
        title: "FastAPI Complete Documentation & Production Blueprints",
        author: "Tiangolo (FastAPI Creator)",
        type: "Official Reference Guide",
        format: "HTML Document / Reference",
        downloadUrl: "https://fastapi.tiangolo.com/",
        coverColor: "#0891b2",
        description: "The complete official documentation, including advanced tutorials on routing structure, database session management, security hooks, testing setups, and async deployment options.",
        learnings: [
          "Declaring nested Pydantic validation schemas",
          "Utilizing FastAPI's powerful Dependency Injection system",
          "Implementing OAuth2 authorization with JWT tokens",
          "Production ready Docker setups for Uvicorn/Gunicorn servers"
        ]
      }
    ],
    'Intro to LLMs, ML, DL, DS': [
      {
        title: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow",
        author: "Aurélien Géron",
        type: "AI/ML Reference Textbook",
        format: "Paperback / eBook",
        downloadUrl: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125837/",
        coverColor: "#db2777",
        description: "An intuitive and comprehensive guide for understanding mathematical foundations, building model pipelines, training convolutional networks, and transitioning to transformers.",
        learnings: [
          "Core ML algorithms (Regression, SVMs, Decision Trees)",
          "Building and compiling neural networks with Keras & TensorFlow",
          "Understanding deep neural network architectures (CNNs, RNNs)",
          "Attention mechanisms and the Transformer architecture that powers LLMs"
        ]
      },
      {
        title: "Attention Is All You Need",
        author: "Vaswani et al. (Google Brain)",
        type: "Breakthrough Research Paper",
        format: "PDF Document (arXiv)",
        downloadUrl: "https://arxiv.org/abs/1706.03762",
        coverColor: "#4d0e3d",
        description: "The foundational research paper that introduced the Transformer architecture, replacing traditional recurrent architectures with multi-head self-attention mechanisms and paving the way for LLMs.",
        learnings: [
          "Self-Attention and Multi-Head Attention mechanics",
          "Decoder-Encoder mapping structures",
          "Why parallelized training works on modern GPU architectures",
          "Positional encodings for sequence processing"
        ]
      }
    ],
    'AI Agents with memory': [
      {
        title: "Generative Agents: Interactive Simulacra of Human Behavior",
        author: "Joon Sung Park et al. (Stanford University)",
        type: "Foundational Agent Paper",
        format: "PDF Document (arXiv)",
        downloadUrl: "https://arxiv.org/abs/2304.03442",
        coverColor: "#6366f1",
        description: "The famous Stanford research paper that demonstrated how to construct generative agents with human-like memory systems. It establishes architecture paradigms for storing, retrieving, and reflecting on memory in multi-agent environments.",
        learnings: [
          "Implementing agent memories (Memory Stream)",
          "Retrieval function based on recency, importance, and relevance",
          "Agent reflection models to convert raw observations into higher-level thoughts",
          "Action planning and execution loops"
        ]
      }
    ],
    'Agentic AI workflows': [
      {
        title: "Building Effective Agents: Anthropic Developer Guide",
        author: "Anthropic Research Team",
        type: "Industry Design Guide",
        format: "PDF / Markdown Reference",
        downloadUrl: "https://www.anthropic.com/research/building-effective-agents",
        coverColor: "#be185d",
        description: "Anthropic's official research blueprint for building effective AI agents. Explains the differences between simple prompt chains, routing topologies, evaluators, and full agent loops with design guidelines for production success.",
        learnings: [
          "Workflow patterns: Prompt Chaining, Routing, Parallelization, Orchestrator-Workers, and Evaluator-Optimizer",
          "When to use simple workflows instead of complex autonomous agents",
          "Managing state, token usage, and latency in loops",
          "Systematic evaluation strategies for agentic tasks"
        ]
      }
    ],
    'Capstone Project': [
      {
        title: "Clean Architecture: A Craftsman's Guide to Software Structure",
        author: "Robert C. Martin (Uncle Bob)",
        type: "Architecture Reference Book",
        format: "Hardcover / eBook",
        downloadUrl: "https://www.oreilly.com/library/view/clean-architecture-a/9780134494272/",
        coverColor: "#10b981",
        description: "Essential software design advice for building clean, testable, and maintainable systems. Learn how to draw lines between your application business rules (entities, use cases) and delivery mechanisms (database, web UI).",
        learnings: [
          "The SOLID principles applied to software architecture",
          "Drawing boundaries between core business logic and database/UI frameworks",
          "Dependency inversion and creating decouple systems",
          "Structuring projects for testability and parallel development"
        ]
      }
    ]
  };

  const currentResources = resourcesData[topic] || [];

  if (currentResources.length === 0) {
    return (
      <div style={{ backgroundColor: 'var(--bg-surface)', border: '1.5px dashed var(--border-color)', padding: '50px 40px', borderRadius: 'var(--radius-lg)', textAlign: 'center', margin: '20px auto', maxWidth: '800px' }}>
        <Library size={40} style={{ color: 'var(--text-muted)', marginBottom: '16px' }} />
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: '500' }}>
          Reference materials for <strong>{topic}</strong> will unlock once the module classes are completed.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '6px' }}>
          Recommended reading textbooks, research papers, and download guides will display here.
        </p>
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '32px', minHeight: '420px', marginTop: '24px' }}>
      
      {/* Sidebar - Reference Materials Selector */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '12px', 
        borderRight: '1px solid var(--border-color)', 
        paddingRight: '16px', 
        maxHeight: 'calc(100vh - 180px)', 
        overflowY: 'auto' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
          <Library size={14} />
          <span>Reference Library</span>
        </div>
        
        {currentResources.map((res, idx) => {
          const isActive = idx === activeResourceIdx;
          const isYogeshReference = res.type === "HLD PDF Note";
          const prevRes = idx > 0 ? currentResources[idx - 1] : null;
          const isFirstYogeshReference = isYogeshReference && (!prevRes || prevRes.type !== "HLD PDF Note");

          return (
            <React.Fragment key={idx}>
              {isFirstYogeshReference && (
                <div style={{ 
                  marginTop: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  color: '#8b5cf6', 
                  fontSize: '0.75rem', 
                  fontWeight: '800', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em', 
                  borderBottom: '1px solid #e2e8f0', 
                  paddingBottom: '8px', 
                  marginBottom: '4px' 
                }}>
                  Yogesh Reference PDFs
                </div>
              )}
              <button
                onClick={() => setActiveResourceIdx(idx)}
              style={{
                width: '100%',
                padding: '16px 14px',
                borderRadius: 'var(--radius-md)',
                border: isActive ? '1px solid var(--color-primary)' : '1px solid var(--border-color)',
                backgroundColor: isActive ? 'var(--bg-surface)' : '#ffffff',
                color: isActive ? 'var(--color-primary)' : 'var(--text-secondary)',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start',
                transition: 'all 0.2s ease',
                boxShadow: isActive ? 'var(--shadow-sm)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                  e.currentTarget.style.borderColor = '#cbd5e1';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }
              }}
            >
              {/* Mini Book Icon with dynamic color */}
              <div style={{ 
                backgroundColor: isActive ? 'var(--color-primary)' : '#94a3b8', 
                color: '#ffffff', 
                borderRadius: '4px', 
                padding: '5px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Book size={14} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', overflow: 'hidden' }}>
                <span style={{ fontWeight: '700', fontSize: '0.85rem', lineHeight: '1.3', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                  {res.title}
                </span>
                <span style={{ fontSize: '0.72rem', color: '#64748b' }}>
                  By {res.author}
                </span>
              </div>
            </button>
            </React.Fragment>
          );
        })}
      </div>

      {/* Main Content Pane - Book Details */}
      <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '36px', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        
        <div>
          {/* Header block with Book Type & format */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ 
              backgroundColor: '#e0f2fe', 
              color: '#0369a1', 
              fontSize: '0.75rem', 
              fontWeight: '700', 
              padding: '4px 10px', 
              borderRadius: '20px'
            }}>
              {currentResources[activeResourceIdx].type}
            </span>
            <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '500' }}>
              Format: <strong>{currentResources[activeResourceIdx].format}</strong>
            </span>
          </div>

          {/* Book Title & Author */}
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0f172a', marginBottom: '4px', lineHeight: '1.3' }}>
            {currentResources[activeResourceIdx].title}
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: '600', marginBottom: '24px' }}>
            Author: <span style={{ color: '#334155' }}>{currentResources[activeResourceIdx].author}</span>
          </p>

          {/* Book Divider */}
          <hr style={{ border: '0', borderTop: '1px solid var(--border-color)', marginBottom: '24px' }} />

          {/* Book Description */}
          <h3 style={{ fontSize: '0.9rem', fontWeight: '800', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
            Reference Overview
          </h3>
          <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '28px' }}>
            {currentResources[activeResourceIdx].description}
          </p>

          {/* What Students Will Learn */}
          <h3 style={{ fontSize: '0.9rem', fontWeight: '800', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
            Key Learning Outcomes & Syllabus Context
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px', marginBottom: '32px' }}>
            {currentResources[activeResourceIdx].learnings.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <CheckCircle size={15} style={{ color: 'var(--color-success)', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.88rem', color: '#334155', lineHeight: '1.4' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* View / Download Button Link */}
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '24px', display: 'flex', justifyContent: 'flex-start' }}>
          {currentResources[activeResourceIdx].downloadUrl.endsWith('.pdf') && currentResources[activeResourceIdx].downloadUrl.startsWith('/') ? (
            <button
              onClick={() => setPreviewState({
                isOpen: true, 
                url: currentResources[activeResourceIdx].downloadUrl,
                title: currentResources[activeResourceIdx].title
              })}
              className="btn-scaler btn-scaler-primary"
              style={{ padding: '12px 24px', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
            >
              <ExternalLink size={18} /> View PDF Inline
            </button>
          ) : currentResources[activeResourceIdx].downloadUrl.match(/\.(png|jpg|jpeg)$/i) && currentResources[activeResourceIdx].downloadUrl.startsWith('/') ? (
            <button
              onClick={() => setImagePreviewState({
                isOpen: true, 
                url: currentResources[activeResourceIdx].downloadUrl,
                title: currentResources[activeResourceIdx].title
              })}
              className="btn-scaler btn-scaler-primary"
              style={{ padding: '12px 24px', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', backgroundColor: '#10b981' }}
            >
              <ExternalLink size={18} /> View Cheatsheet Image
            </button>
          ) : (
            <a
              href={currentResources[activeResourceIdx].downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-scaler btn-scaler-primary"
              style={{ padding: '12px 24px', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
            >
              <Download size={16} />
              <span>Access Book / Guide Reference</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      <PdfViewerModal 
        isOpen={previewState.isOpen}
        pdfUrl={previewState.url}
        title={previewState.title}
        onClose={() => setPreviewState({ ...previewState, isOpen: false })}
      />

      <ImageViewerModal 
        isOpen={imagePreviewState.isOpen}
        imageUrl={imagePreviewState.url}
        title={imagePreviewState.title}
        onClose={() => setImagePreviewState({ ...imagePreviewState, isOpen: false })}
      />
    </div>
  );
}
