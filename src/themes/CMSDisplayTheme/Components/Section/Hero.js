// Theme/Components/Sections/Hero.js
import React from "react";

const HomeHero = ({ data }) => {
  if (!data) return null;

  const { siteTitle, siteTagline, siteDescription } = data;

  return (
    <section className="home-hero">
      <div className="hero-content">
        <h1 className="site-title">{siteTitle}</h1>
        <h2 className="site-tagline">{siteTagline}</h2>
        <p className="site-description">{siteDescription}</p>
      </div>
    </section>
  );
};

export default HomeHero;

