import React from 'react';
import './FlipText.css'; // Ensure to import your styles

const FlipText = () => {
  return (
    <div className="flip-container">
      <div className="flip">
        <div className="front">
          Front
        </div>
        <div className="back">
          Back
        </div>
      </div>
    </div>
  );
};

export default FlipText;
