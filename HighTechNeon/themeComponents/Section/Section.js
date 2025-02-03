// Section.js
import React from "react";
import "./section.css";

const Section = ({
  children,
  className = "",
  inViewClass = "fade-in",
  outViewClass = "fade-out",
  threshold = 0.1,
  rootMargin = "0px",
  delayIn = 0,
  delayOut = 0,
  staggeredAnimation = false,
  index = 0,
  delayBase = 100,
  ...otherProps
}) => {
  return (
    <section
      className={`section-element section-padding full-height ${className} ${inViewClass}`}
      {...otherProps}
    >
      {children}
    </section>
  );
};

export default Section;