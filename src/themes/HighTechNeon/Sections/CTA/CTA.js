import React from "react";
import Section from "../../Components/Section/Section";
import ContentTemplate from "../../Components/ContentTemplate/ContentTemplate";
import "./cta.css";

/**
 * CTA Section - reminiscent of Hero1
 *
 * Data shape in `data` (if present):
 * {
 *   heading: string,
 *   description: string,
 *   buttonText: string,
 *   buttonLink: string,
 * }
 *
 * If data is missing or any field is missing, we fall back
 * to siteSettings (siteTitle, siteTagline, CTAButton, CTALink).
 */
const CTA = ({ data, siteSettings }) => {
  // Fallbacks if the item doesn't have a CTA object
  const heading      = data?.heading      || siteSettings?.siteTitle;
  const description  = data?.description  || siteSettings?.siteTagline;
  const buttonText   = data?.buttonText   || siteSettings?.CTAButton;
  const buttonLink   = data?.buttonLink   || siteSettings?.CTALink;

  return (
    <Section className="cta-section flex item-align-center responsive responsive-center">
      <ContentTemplate
        title={heading}
        heading={description}
        ifButton={true}
        buttonText={buttonText}
        buttonLink={"#nonhomehero"}
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
