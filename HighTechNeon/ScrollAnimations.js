// IntersectionObserverComponent.js
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import StaggeredAnimation from './StaggeredAnimation';
import './animations.css';

const IntersectionObserverComponent = ({
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
  tag = 'div', // Specify the element type
  ...otherProps // Pass other props like `type`, `name`, `value`, etc.
}) => {
  const ref = useRef(null);
  const calculatedDelay = staggeredAnimation ? index * delayBase : delayIn;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.setProperty('--delay-in', `${calculatedDelay / 1000}s`);
            entry.target.classList.add(inViewClass);
            entry.target.classList.remove(outViewClass);
          } else {
            entry.target.style.setProperty('--delay-out', `${delayOut / 1000}s`);
            entry.target.classList.add(outViewClass);
            entry.target.classList.remove(inViewClass);
          }
        });
      },
      { threshold, rootMargin }
    );

    const element = ref.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [inViewClass, outViewClass, threshold, rootMargin, calculatedDelay, delayOut]);

  const WrappedChildren = staggeredAnimation ? (
    <StaggeredAnimation index={index} delayBase={delayBase}>
      {children}
    </StaggeredAnimation>
  ) : (
    children
  );

  // Conditionally render based on tag type
  return tag === 'input' || tag === 'img' ? (
    React.createElement(tag, { ref, className: `intersection-observer-wrapper ${className}`, ...otherProps })
  ) : (
    React.createElement(
      tag,
      { ref, className: `intersection-observer-wrapper ${className}`, ...otherProps },
      WrappedChildren
    )
  );
};

IntersectionObserverComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  inViewClass: PropTypes.string,
  outViewClass: PropTypes.string,
  threshold: PropTypes.number,
  rootMargin: PropTypes.string,
  delayIn: PropTypes.number,
  delayOut: PropTypes.number,
  staggeredAnimation: PropTypes.bool,
  index: PropTypes.number,
  delayBase: PropTypes.number,
  tag: PropTypes.string,
};

export default IntersectionObserverComponent;
