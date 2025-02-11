// src/components/Tooltip/Tooltip.js
import React, { useState } from 'react';
import './tooltip.css';

const Tooltip = ({ children, text, position = "top" }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div 
      className="tooltip-wrapper"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className={`tooltip-box tooltip-${position}`}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;