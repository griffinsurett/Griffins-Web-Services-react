// Hero1.js
import React from "react";
import "./hero.css";
import ContentTemplate from "../../../Components/ContentTemplate/ContentTemplate";

const Hero2 = ({ data }) => {
  console.log(data);
  // If you want to do a fallback if data isn't provided:
  if (!data) {
    return <div>Error: No site data found for Hero1</div>;
  }

  return (
    <section
      id="hero-section"
      className="flex item-align-center responsive hero-height section-gap"
    >
          {/* Use ContentTemplate for the hero section content */}
          <ContentTemplate
                 isHero
                 ifParagraph
                 contentWrapClass="column"
                 title={data.title}
                 heading={data.heading}
                 paragraph1={data.description}
                 ifButton={false}
                 buttonText="Get Started"
                 buttonLink="#"
                 className="hero-content"
                 headingClass="text-shadow-for-dark"
                 paragraphClass="p-small bottom-space"
                 buttonClass="p-small"
                 buttonSecClass="hero-btn-container smaller-top-space smaller-bottom-space flex justify-left"
                 titleClass="section-title"
               />
    </section>
  );
};

export default Hero2;
