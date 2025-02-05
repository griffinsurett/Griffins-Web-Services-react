// Hero1.js
import React from "react";
import "./hero.css";
import ContentTemplate from "../../../Components/ContentTemplate/ContentTemplate";
import Logo from "../../../Components/Logos/3dLogo/3dLogo";

const Hero1 = ({ data }) => {
  // If you want to do a fallback if data isn't provided:
  if (!data) {
    return <div>Error: No site data found for Hero1</div>;
  }

  return (
    <section
      id="hero-section"
      className="flex item-align-center responsive hero-height section-gap"
    >
      <div className="hero-left w50 text-left">
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
          headingClass="text-shadow-for-dark"
          paragraphClass="p-small bottom-space"
          buttonClass="p-small"
          buttonSecClass="hero-btn-container smaller-top-space smaller-bottom-space flex justify-left"
          titleClass="section-title"
        />
      </div>

      <div className="hero-right w40 flex column justify-center item-align-center fade-in">
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
    </section>
  );
};

export default Hero1;
