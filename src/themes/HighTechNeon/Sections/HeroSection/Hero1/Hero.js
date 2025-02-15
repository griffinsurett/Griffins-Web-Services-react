// Hero1.js
import React from "react";
import "./hero.css";
import ContentTemplate from "../../../Components/ContentTemplate/ContentTemplate";
import Logo from "../../../Components/Logos/3dLogo/3dLogo";
import Section from "../../../Components/Section/Section";

const Hero1 = ({ data }) => {
  // If you want to do a fallback if data isn't provided:
  if (!data) {
    return <div>Error: No site data found for Hero1</div>;
  }

  return (
    <Section
      id="hero-section"
      className="flex responsive hero-height section-gap"
    >
      <div className="hero-left text-left">
        <ContentTemplate
          isHero
          ifParagraph
          contentWrapClass="column"
          title={data.siteTitle}
          heading={data.siteTagline}
          paragraph1={data.siteDescription}
          ifButton
          buttonBottom
          buttonText={data.CTAButton}
          buttonLink={data.CTALink}
          className="hero-content"
          headingClass="text-shadow-for-dark hero-heading smaller-bottom-space"
          paragraphClass="p-small"
          buttonClass="p-small"
          buttonSecClass="hero-btn-container smaller-top-space smaller-bottom-space flex justify-left"
          titleClass="section-title"
        />
      </div>

      <div className="hero-right flex column justify-center item-align-center fade-in">
        <div className="fade-in" style={{ transitionDelay: "1000ms" }}>
          <Logo
            ContainerClassName="flex justify-center item-align-center logo logo-drop-shadow-big sticky-section"
            width="460px"
            classname=""
            responsive
            everdarkLogo
          />
        </div>
      </div>
    </Section>
  );
};

export default Hero1;
