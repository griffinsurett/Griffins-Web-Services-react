// Icon.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Icon.css';
import IntersectionObserverComponent from '../../ScrollAnimations';

const Icon = ({ icon, size = 'sm', className = '', bgColor, iconPadding = "18px" }) => {
    return (
        <IntersectionObserverComponent className={"icon-observer"} inViewClass="fade-in" delayIn={50} outViewClass="fade-out">
        <FontAwesomeIcon 
            icon={icon} 
            size={size} 
            className={`icon flex justify-center align-item-center hover-scale ${className}`}
            style={{ margin: '0 5px', backgroundColor: bgColor, padding: iconPadding }}
        />
        </IntersectionObserverComponent>
    );
};

export default Icon;
