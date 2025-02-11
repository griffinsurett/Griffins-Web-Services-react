// src/themes/HighTechNeon/Sections/CTA/CTA.js
import React from "react";
import Section from "../../Components/Section/Section";
import ContentTemplate from "../../Components/ContentTemplate/ContentTemplate";
import "./cta.css";

const CTA = ({ data, siteSettings }) => {
  // Look for a nested 'cta' object; if not present, use data directly.
  const ctaData = data?.cta || data;

  // Use values from the CTA object if available, otherwise fallback to site settings.
  const heading     = ctaData?.heading     || siteSettings?.siteTitle;
  const description = ctaData?.description || siteSettings?.siteTagline;
  const buttonText  = ctaData?.buttonText  || siteSettings?.CTAButton;
  const buttonLink  = "#nonhomehero"  || siteSettings?.CTALink || "#nonhomehero";

  // onClick handler that scrolls smoothly to the element with id "nonhomehero"
  const handleCTAButtonClick = (e) => {
    e.preventDefault(); // Prevent default link jump behavior
    const target = document.querySelector("#nonhomehero");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section className="cta-section flex item-align-center responsive responsive-center">
      <ContentTemplate
        title={heading}
        heading={description}
        ifButton={true}
        buttonText={buttonText}
        buttonLink={buttonLink}
        onClick={handleCTAButtonClick} // Pass the onClick handler
        buttonBottom={true}
        isHero={true}
        className="cta-content text-center"
        titleClass=""
        headingClass={"text-shadow-for-dark"}
        paragraphClass="p-small"
        buttonClass="p-small"
        buttonSecClass="cta-btn-container smaller-top-space smaller-bottom-space flex justify-center"
      />
    </Section>
  );
};

export default CTA;
