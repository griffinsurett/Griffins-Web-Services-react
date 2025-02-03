// Hero3.js
import React from "react";
import "./hero.css";
import Button from "../../../themeComponents/Buttons/Button";
import Logo from "../../../themeComponents/Logos/3dLogo/3dLogo";
import ContentTemplate from "../../../themeComponents/ContentTemplate/ContentTemplate";
import { getSiteSettings } from "../../../../../CMS/Utils/GetSettings";

const Hero3 = () => {
  const siteSettings = getSiteSettings();

  if (!siteSettings) {
    return <div>Error: Site settings not found</div>;
  }

  return (
    <section
      id="hero-section"
      className="flex item-align-start justify-between-section full-height responsive responsive-center responsive-spacing margin-center box-gap"
    >
      <div className="hero-left w50 text-left">
        <ContentTemplate
          isHero={true}
          ifParagraph={true}
          contentWrapClass="column"
          title={siteSettings.siteTitle}
          heading={siteSettings.siteTagline}
          paragraph1={siteSettings.siteDescription}
          ifButton={true}
          buttonBottom={true}
          buttonText="Get Started"
          buttonLink="#"
          className="hero-content"
          headingClass="text-shadow-for-dark"
          paragraphClass="p-small bottom-space"
          buttonClass="p-small"
          buttonSecClass="hero-btn-container smaller-top-space smaller-bottom-space flex justify-left"
          titleClass="section-title"
        />
      </div>
      <div className="hero-right w50 flex column justify-center item-align-center fade-in">
        <div className="fade-in" style={{ transitionDelay: "1000ms" }}>
          <Logo
            ContainerClassName="flex justify-center item-align-center logo logo-drop-shadow-big sticky-section"
            width="460px"
            classname=""
            responsive={true}
            everdarkLogo={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero3;
