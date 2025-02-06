// Section.js
import React from "react";
import "./section.css";

const Section = ({
  children,
  className = "",
  inViewClass = "fade-in",
  outViewClass = "fade-out",
  index = 0,
  ...otherProps
}) => {
  return (
    <section
      className={`section-element section-padding ${className} ${inViewClass}`}
      {...otherProps}
    >
      {children}
    </section>
  );
};

export default Section;