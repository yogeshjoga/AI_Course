import React, { useState, useEffect } from 'react';
import { AlertTriangle, Key, Info, HelpCircle } from 'lucide-react';

export default function CustomModal({
  isOpen,
  type = 'alert', // 'alert' | 'confirm' | 'prompt'
  title = 'Notification',
  message = '',
  inputType = 'text',
  defaultValue = '',
  placeholder = 'Enter value...',
  onConfirm,
  onCancel
}) {
  const [inputValue, setInputValue] = useState(defaultValue);

  useEffect(() => {
    if (isOpen) {
      setInputValue(defaultValue);
    }
  }, [isOpen, defaultValue]);

  if (!isOpen) return null;

  // Choose visual accents & icons based on title and type
  const isDanger = title.toLowerCase().includes('warning') || title.toLowerCase().includes('delete');
  
  const getIcon = () => {
    if (isDanger) return <AlertTriangle size={24} style={{ color: '#dc3545' }} />;
    if (type === 'prompt') return <Key size={24} style={{ color: '#3b82f6' }} />;
    if (type === 'confirm') return <HelpCircle size={24} style={{ color: '#3b82f6' }} />;
    return <Info size={24} style={{ color: '#3b82f6' }} />;
  };

  const getAccentColor = () => {
    return isDanger ? '#dc3545' : '#3b82f6';
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onConfirm(inputValue);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.45)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 99999, // Ensure it sits on top of everything
      animation: 'modalFadeIn 0.2s ease-out'
    }}>
      {/* Inject animations in-place */}
      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalScaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <form 
        onSubmit={handleFormSubmit}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          width: '90%',
          maxWidth: '440px',
          padding: '24px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          border: '1px solid #e2e8f0',
          animation: 'modalScaleUp 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}
      >
        {/* Header containing Icon & Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            backgroundColor: isDanger ? '#fef2f2' : '#eff6ff',
            borderRadius: '8px',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {getIcon()}
          </div>
          <h3 style={{
            fontSize: '1.1rem',
            fontWeight: '700',
            color: '#0f172a',
            margin: 0
          }}>
            {title}
          </h3>
        </div>

        {/* Message Body */}
        <div style={{ 
          fontSize: '0.9rem', 
          color: '#475569', 
          lineHeight: '1.5',
          whiteSpace: 'pre-line' 
        }}>
          {message}
        </div>

        {/* Input field for Prompts */}
        {type === 'prompt' && (
          <div style={{ marginTop: '4px' }}>
            <input
              type={inputType}
              placeholder={placeholder}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              autoFocus
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1.5px solid #cbd5e1',
                borderRadius: '8px',
                outline: 'none',
                fontSize: '0.9rem',
                color: '#0f172a',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = getAccentColor()}
              onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
            />
          </div>
        )}

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '12px',
          marginTop: '8px'
        }}>
          {type !== 'alert' && (
            <button
              type="button"
              onClick={onCancel}
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                border: '1px solid #cbd5e1',
                backgroundColor: '#ffffff',
                color: '#475569',
                fontSize: '0.85rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: getAccentColor(),
              color: '#ffffff',
              fontSize: '0.85rem',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            {type === 'alert' ? 'OK' : 'Proceed'}
          </button>
        </div>
      </form>
    </div>
  );
}
