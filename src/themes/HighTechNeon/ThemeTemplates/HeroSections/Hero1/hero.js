// Hero1.js
import React from "react";
import "./hero.css";
import Button from "../../../themeComponents/Buttons/Button";
import Logo from "../../../themeComponents/Logos/3dLogo/3dLogo";
import ContentTemplate from "../../../themeComponents/ContentTemplate/ContentTemplate";
import { getSiteSettings } from "../../../../../CMS/Utils/GetSettings";
import IntersectionObserverComponent from "../../../ScrollAnimations";

const Hero1 = () => {
  // Retrieve the site settings dynamically
  const siteSettings = getSiteSettings();

  if (!siteSettings) {
    return <div>Error: Site settings not found</div>;
  }

  return (
    <section
      id="hero-section"
      className="flex item-align-center responsive hero-height section-gap"
    >
      <div className="hero-left w50 text-left">
        {/* Use ContentTemplate for the hero section content */}
        <ContentTemplate
          isHero={true} // Ensure h1 is used for hero
          ifParagraph={true}
          contentWrapClass="column"
          title={siteSettings.siteTitle} // Use site title dynamically
          heading={siteSettings.siteTagline} // Use site tagline dynamically
          paragraph1={siteSettings.siteDescription} // Use site description dynamically
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
      <IntersectionObserverComponent className="hero-right w40 flex column justify-center item-align-center">
        <IntersectionObserverComponent
          inViewClass="fade-in"
          delayIn={1000}
          applyDelayOnce={true}
        >
          <Logo
            ContainerClassName="flex justify-center item-align-center logo logo-drop-shadow-big sticky-section"
            width="460px"
            classname=""
            responsive={true}
            everdarkLogo={true}
          />
        </IntersectionObserverComponent>
      </IntersectionObserverComponent>
    </section>
  );
};

export default Hero1;
