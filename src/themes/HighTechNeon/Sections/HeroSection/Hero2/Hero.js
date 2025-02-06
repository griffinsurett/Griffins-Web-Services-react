// src/themes/HighTechNeon/Sections/HeroSections/Hero2/Hero.js
import React from "react";
import "./hero.css";
import ContentTemplate from "../../../Components/ContentTemplate/ContentTemplate";

const Hero2 = ({ data }) => {
  if (!data) {
    return <div>Error: No hero data found</div>;
  }

  // You can now access BOTH siteSettings stuff AND page-specific stuff on `data`
  const { 
    siteTitle,       // e.g. from siteSettings
    siteDescription, // e.g. from siteSettings
    // possibly other fields from siteSettings…
    pageTitle,       // from pageStructure.title
    pageHeading,     // from pageStructure.heading
    pageDescription  // from pageStructure.description
  } = data;

  return (
    <section
      id="hero-section"
      className="flex item-align-center responsive quarter-height larger-top-space justify-between"
    >
      <ContentTemplate
        isHero
        ifParagraph
        contentWrapClass="column"
        // Maybe you want to show siteTitle in small text, pageTitle in a bigger headline, etc.
        title={siteTitle}    
        heading={pageTitle}
        paragraph1={pageDescription}
        ifButton={false}
        // rest of your props
      />
    </section>
  );
};

export default Hero2;
