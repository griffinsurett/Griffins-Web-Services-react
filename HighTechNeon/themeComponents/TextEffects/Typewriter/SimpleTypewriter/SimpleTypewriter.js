// SimpleTypewriter.js
import React, { useState, useEffect } from 'react';
import './simple-typewriter.css';

const Typewriter = ({ text, speed = 100, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setDisplayedText(text.substring(0, index + 1));
      index += 1;

      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <span className={className}>{displayedText}</span>;
};

export default Typewriter;
