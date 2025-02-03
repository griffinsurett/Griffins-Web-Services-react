// ScaleUpTypewriter.js
import React from 'react';
import './scale-up-typewriter.css';

const ScaleUpTypewriter = ({ text = '', speed = 1, className = '' }) => {
  let cumulativeIndex = 0;

  return (
    <span className={className}>
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="scale-up-word">
          {word.split('').map((char, charIndex) => {
            cumulativeIndex += 1; // Increment cumulative index for each letter
            return (
              <span
                key={charIndex}
                className="scale-up-char"
                style={{ animationDelay: `${cumulativeIndex * speed}ms` }}
              >
                {char}
              </span>
            );
          })}
          <span>&nbsp;</span> {/* Space between words */}
        </span>
      ))}
    </span>
  );
};

export default ScaleUpTypewriter;
