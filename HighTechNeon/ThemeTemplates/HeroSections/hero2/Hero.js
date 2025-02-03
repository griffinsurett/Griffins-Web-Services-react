// hero2.js
import React from "react";
import "./hero.css";
import Button from "../../../themeComponents/Buttons/Button";
import Logo from "../../../themeComponents/Logos/3dLogo/3dLogo";
import Typewriter from "../../../themeComponents/TextEffects/Typewriter/SimpleTypewriter/SimpleTypewriter";
import ContentTemplate from "../../../themeComponents/ContentTemplate/ContentTemplate";

const Hero1 = () => {
  return (
    <section
      id="hero-section"
      className="flex item-align-center responsive hero-height section-gap"
    >
          {/* Use ContentTemplate for the hero section content */}
          <ContentTemplate
            isHero={true} // Ensure h1 is used for hero
            ifParagraph={true}
            title="Griffin’s Web Services"
            heading="Websites and All Things Digital."
            paragraph1="Your premier one-stop shop for website design and development, expert social media and digital marketing, and creative graphic design services."
            ifButton={true}
            buttonBottom={true}
            buttonText="Get Started"
            buttonLink="#"
            className="hero-content column text-center margin-center w70"
            headingClass="text-shadow-for-dark"
            paragraphClass="p-small smaller-top-space bottom-space"
            buttonClass="p-small"
            buttonSecClass="hero-btn-container smaller-top-space smaller-bottom-space justify-center"
            titleClass="section-title"
          />
    </section>
  );
};

export default Hero1;
