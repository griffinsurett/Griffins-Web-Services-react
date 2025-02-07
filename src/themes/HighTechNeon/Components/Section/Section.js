// Section.js
import React from "react";
import "./section.css";

const Section = ({
  children,
  className = "",
  index = 0,
  ...otherProps
}) => {
  return (
    <section
      className={`section-element section-padding fade-in fade-out ${className}`}
      {...otherProps}
    >
      {children}
    </section>
  );
};

export default Section;