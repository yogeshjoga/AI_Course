import React, { useState, useEffect } from 'react';
import { X, Image as ImageIcon, ExternalLink, Download } from 'lucide-react';
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
  "day-16.png",
  "day-17.png",
  "day-18.png",
  "hld_roadmap.jpg"
];

const generatedCheatsheets = imageFiles.map(filename => ({
  title: filename.replace('.png', '').replace('.jpg', '').replace('-', ' ').toUpperCase() + " Cheatsheet",
  downloadUrl: `/assets/${filename}`
}));

export default function CheatsheetsModal({ isOpen, onClose }) {
  const [imagePreviewState, setImagePreviewState] = useState({ isOpen: false, url: '', title: '' });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(4px)',
        zIndex: 9998,
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1000px',
          height: '85vh',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            padding: '20px 24px',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#f8fafc'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ backgroundColor: '#dcfce7', padding: '8px', borderRadius: '8px', color: '#10b981' }}>
                <ImageIcon size={20} />
              </div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '800', color: '#1e293b' }}>
                Course Cheatsheets Library
              </h3>
            </div>
            <button 
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#64748b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px',
                borderRadius: '50%',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e2e8f0'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Content */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px', backgroundColor: '#f1f5f9' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
              {generatedCheatsheets.map((sheet, idx) => (
                <div key={idx} style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ backgroundColor: '#f1f5f9', padding: '8px', borderRadius: '6px', color: '#64748b' }}>
                      <ImageIcon size={18} />
                    </div>
                    <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: '700', color: '#334155', lineHeight: '1.4' }}>
                      {sheet.title}
                    </h4>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                    <button
                      onClick={() => setImagePreviewState({ isOpen: true, url: sheet.downloadUrl, title: sheet.title })}
                      className="btn-scaler btn-scaler-primary"
                      style={{ flex: 1, padding: '8px', fontSize: '0.85rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
                    >
                      <ExternalLink size={14} /> View
                    </button>
                    <a
                      href={sheet.downloadUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-scaler btn-scaler-secondary"
                      style={{ padding: '8px 12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', textDecoration: 'none', border: '1px solid #cbd5e1', color: '#475569', borderRadius: '6px' }}
                    >
                      <Download size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ImageViewerModal 
        isOpen={imagePreviewState.isOpen}
        imageUrl={imagePreviewState.url}
        title={imagePreviewState.title}
        onClose={() => setImagePreviewState({ ...imagePreviewState, isOpen: false })}
      />
    </>
  );
}
