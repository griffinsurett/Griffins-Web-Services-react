// Section.js
import React from 'react';
import IntersectionObserverComponent from '../../ScrollAnimations';
import './section.css'; 

const Section = ({
  children,
  className,
  inViewClass = 'fade-in',
  outViewClass = 'fade-out',
  threshold = 0.1,
  rootMargin = '0px',
  delayIn = 0,
  delayOut = 0,
  staggeredAnimation = false,
  index = 0,
  delayBase = 100,
  ...otherProps
}) => {
  return (
    <IntersectionObserverComponent
      className={`section-element section-padding full-height ${className}`}
      tag="section"
      inViewClass={inViewClass}
      outViewClass={outViewClass}
      threshold={threshold}
      rootMargin={rootMargin}
      delayIn={delayIn}
      delayOut={delayOut}
      staggeredAnimation={staggeredAnimation}
      index={index}
      delayBase={delayBase}
      {...otherProps}
    >
      {children}
    </IntersectionObserverComponent>
  );
};

export default Section;
