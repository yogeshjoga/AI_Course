import React, { useEffect } from 'react';
import { X, Download, FileText, ArrowLeft } from 'lucide-react';

export default function PdfViewerModal({ isOpen, onClose, pdfUrl, title }) {
  // Prevent body scrolling when modal is open
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
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.85)',
      backdropFilter: 'blur(4px)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      padding: '24px',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      
      {/* Modal Container */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        height: '90vh',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        overflow: 'hidden'
      }}>
        
        {/* Header Bar */}
        <div style={{
          padding: '16px 24px',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f8fafc'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button 
              onClick={onClose}
              style={{
                background: 'transparent',
                border: '1px solid #cbd5e1',
                cursor: 'pointer',
                color: '#475569',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '0.85rem',
                fontWeight: '600',
                gap: '6px',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <ArrowLeft size={16} /> Back to References
            </button>
            <div style={{ backgroundColor: '#eff6ff', padding: '6px', borderRadius: '8px', color: '#3b82f6' }}>
              <FileText size={18} />
            </div>
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '700', color: '#1e293b' }}>
              {title || 'PDF Viewer'}
            </h3>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a 
              href={pdfUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.88rem',
                color: 'var(--color-primary)',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              <Download size={16} /> Download
            </a>
            
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
                padding: '4px',
                borderRadius: '50%',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e2e8f0'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <X size={24} />
            </button>
          </div>
        </div>
        
        {/* PDF Content Area */}
        <div style={{ flex: 1, backgroundColor: '#e2e8f0', position: 'relative' }}>
          <object
            data={pdfUrl}
            type="application/pdf"
            width="100%"
            height="100%"
            style={{ border: 'none', display: 'block' }}
          >
            {/* Fallback for browsers without PDF plugins (like many mobile browsers) */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              height: '100%',
              padding: '40px',
              textAlign: 'center'
            }}>
              <FileText size={64} style={{ color: '#94a3b8', marginBottom: '24px' }} />
              <h4 style={{ fontSize: '1.2rem', color: '#334155', marginBottom: '12px' }}>
                PDF Preview Not Supported
              </h4>
              <p style={{ color: '#64748b', marginBottom: '24px', maxWidth: '400px' }}>
                Your browser does not support inline PDF viewing. Please download the file to view it.
              </p>
              <a 
                href={pdfUrl}
                download
                className="btn-scaler btn-scaler-primary"
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                Download PDF
              </a>
            </div>
          </object>
        </div>
        
      </div>
    </div>
  );
}
