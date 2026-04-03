import React, { useState, useEffect } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties; // Add style prop
  timeout?: number; // Add timeout prop
}
const MIN_DELAY = 2000
const Accordion: React.FC<AccordionProps> = ({ title, children, timeout }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!isExpanded) return;
    let hideTimeout: NodeJS.Timeout | null = null;

    if (timeout) {
      hideTimeout = setTimeout(() => {
        setIsExpanded(false);
      }, MIN_DELAY + timeout * 1000);
    }

    return () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [timeout, isExpanded]);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ width: '100%', margin: '0.5rem 0' }}>
      <button
        style={{
          width: '100%',
          minHeight: '44px',
          padding: '0.75rem',
          fontSize: '1rem',
          borderRadius: '8px',
          backgroundColor: isExpanded ? '#4CAF50' : '#f0f0f0',
          color: isExpanded ? 'white' : '#333',
          border: '1px solid #ddd',
          cursor: 'pointer',
          transition: 'all 0.2s',
          fontWeight: '500'
        }}
        onClick={toggleAccordion}
      >
        {isExpanded ? '▼ ' : '▶ '}{title}
      </button>
      {isExpanded && <div style={{ padding: '0.5rem', marginTop: '0.5rem' }}>{children}</div>}
    </div>
  );
};

export default React.memo(Accordion);