import React from "react";
import Section from "../../Components/Section/Section";
import ContentTemplate from "../../Components/ContentTemplate/ContentTemplate";
import "./cta.css";

const CTA = ({ data, siteSettings }) => {
  // Fallbacks if the item doesn't have a CTA object
  const heading     = data?.heading     || siteSettings?.siteTitle;
  const description = data?.description || siteSettings?.siteTagline;
  const buttonText  = data?.buttonText  || siteSettings?.CTAButton;
  // We still pass the same anchor reference so that, for browsers supporting CSS scroll-behavior,
  // clicking the link will work. But we add an onClick handler for extra control.
  const buttonLink  = "#nonhomehero";

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
        onClick={handleCTAButtonClick}  // Pass the onClick handler
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
