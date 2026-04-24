'use client';
import { useState, useEffect } from 'react';

export default function Toast({ message, show, onClose }) {
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    if (show) {
      setIsHiding(false);
      const timer = setTimeout(() => {
        setIsHiding(true);
        setTimeout(() => {
          onClose();
        }, 300); // Wait for the slide-out animation to finish
      }, 3000); // Show for 3 seconds
      
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="toast-container">
      <div className={`toast ${isHiding ? 'hiding' : ''}`}>
        <span>✓</span>
        <span>{message}</span>
      </div>
    </div>
  );
}
