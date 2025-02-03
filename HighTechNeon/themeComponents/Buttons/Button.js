// Button.js
import React from 'react';
import './button.css';
import IntersectionObserverComponent from '../../ScrollAnimations';

const Button = ({ type, text, onClick, className, buttonId, buttonLink }) => {
    const buttonElement = (        
        <button type={type} className={`styled-button button-text dynamic-border-effect hover-scale ${className}`} id={buttonId} onClick={onClick}>
            {text}
        </button>
    );

    return buttonLink ? (
        <a href={buttonLink}>
            {buttonElement}
        </a>
    ) : (
        buttonElement
    );
};

export default Button;