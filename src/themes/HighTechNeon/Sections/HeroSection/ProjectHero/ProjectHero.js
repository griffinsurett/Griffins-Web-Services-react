// src/themes/HighTechNeon/Sections/HeroSection/ProjectHero/ProjectHero.js
import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import Section from "../../../Components/Section/Section";
import ContentTemplate from "../../../Components/ContentTemplate/ContentTemplate";
import "./project-hero.css";
import "../../Contact/Contact1/contact-us.css";

const ProjectHero = ({ data }) => {
  const location = useLocation(); // Get the current route

  if (!data) {
    return <div>Error: No hero data found</div>;
  }

  // Destructure the featuredImage from data:
  const { featuredImage } = data;

  // Get two paragraphs from data.content (if available)
  const paragraph1 =
    Array.isArray(data.content) && data.content.length > 0
      ? data.content[0]
      : "";
  const paragraph2 =
    Array.isArray(data.content) && data.content.length > 1
      ? data.content[1]
      : "";

  return (
    <Section
      id="hero2"
      className="project-hero flex justify-between-section item-align-start full-height responsive-center responsive-spacing"
    >
      {/* Left column: The usual content template */}
      <ContentTemplate
        data={data}
        isHero={true}
        ifParagraph={true}
        ifButton={false}
        buttonText={"View Site"}
        buttonLink={data.link}
        className={"project-hero-content"}
        id={"nonhomehero"}
        title={data.siteTitle || ""}
        heading={data.pageTitle || ""}
        contentWrapClass="column"
        headingClass="hero2-heading responsive-left"
        titleClass="responsive-left"
        paragraphClass="flex justify-center column responsive-center"
        paragraph1={paragraph1}
        paragraph1Class="top-paragraph p-xLarge font-weight-regular text-left self-left"
        paragraph2={paragraph2}
        paragraph2Class="bottom-paragraph text-left negative-top smaller-top-space smaller-bottom-space responsive-left"
        buttonSecClass={"top-space"}
      />

      {/* Right: Featured Image */}
      <div className="project-hero-right w50 flex justify-center item-align-center sticky-section">
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
