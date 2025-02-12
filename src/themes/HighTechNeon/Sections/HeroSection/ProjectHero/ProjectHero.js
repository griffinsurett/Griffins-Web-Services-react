// src/themes/HighTechNeon/Sections/HeroSection/ProjectHero/ProjectHero.js
import React from "react";
import Section from "../../../Components/Section/Section";
import ContentTemplate from "../../../Components/ContentTemplate/ContentTemplate";
import "./project-hero.css";

const ProjectHero = ({ data }) => {
  if (!data) {
    return <div>Error: No project data found for the hero.</div>;
  }

  console.log("ProjectHero data: ", data);

  // Assume the project item includes a featured image URL
  const featuredImage = data.featuredImage; // adjust property name if needed

  return (
    <Section
      id="project-hero"
      className="project-hero-section flex item-align-center responsive hero-height section-gap"
    >
      {/* Left: Content template */}
      <div className="project-hero-left w50">
        <ContentTemplate
          isHero
          ifParagraph
          contentWrapClass="column"
          title={data.projectTitle || data.siteTitle}
          heading={data.projectSubtitle || data.siteTagline}
          paragraph1={data.projectDescription || data.siteDescription}
          ifButton
          buttonBottom
          buttonText={data.CTAButton}
          buttonLink={data.CTALink}
          className="project-hero-content"
          headingClass="text-shadow-for-dark project-hero-heading"
          paragraphClass="p-small"
          buttonClass="p-small"
          buttonSecClass="project-hero-btn-container smaller-top-space smaller-bottom-space flex justify-left"
          titleClass="section-title"
        />
      </div>

      {/* Right: Featured Image */}
      <div className="project-hero-right w50 flex justify-center item-align-center">
        {featuredImage ? (
          <img
            src={featuredImage}
            alt="Featured Project"
            className="project-featured-image"
          />
        ) : (
          <div className="no-image-placeholder">No Image Available</div>
        )}
      </div>
    </Section>
  );
};

export default ProjectHero;
