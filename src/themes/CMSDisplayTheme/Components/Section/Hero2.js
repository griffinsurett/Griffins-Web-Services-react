// Theme/Components/Sections/Hero2.js
import React from "react";

const GenericHero = ({ title, heading, description }) => {
  return (
    <section className="generic-hero">
      <div className="hero-content">
        {title && <h1 className="hero-title">{title}</h1>}
        {heading && <h2 className="hero-heading">{heading}</h2>}
        {description && <p className="hero-description">{description}</p>}
      </div>
    </section>
  );
};

export default GenericHero;
