// Testimonials.js
import React from "react";
import { getCollection } from "../../../../CMS/Utils/GetCollection";
import Section from "../../themeComponents/Section/Section";
import ContentTemplate from "../../themeComponents/ContentTemplate/ContentTemplate";
import TestimonialCarousel from "./TestimonialBox1/TestimonialContainer";
import "./testimonials.css";

const Testimonials = () => {
  const testimonialsContent = getCollection("testimonials");

  if (!testimonialsContent) {
    return <div>Error: Testimonials content not found</div>;
  }

  return (
    <Section
      className={"testimonials flex justify-center full-height column"}
    >
      <ContentTemplate
        className={
          "testimonials-content flex item-align-center justify-between bottom-space responsive responsive-center"
        }
        contentWrapClass="responsive responsive-center"
        ifButton={true}
        heading={testimonialsContent.heading}
        title={testimonialsContent.title}
        buttonText={testimonialsContent.button.text}
        buttonLink={testimonialsContent.button.link}
        buttonId="testimonials-header-btn"
        buttonSecClass={"responsive-center"}
        buttonBottomMobile={true}
      >
        
      </ContentTemplate>
      {/* Pass the testimonials content as a prop to the TestimonialCarousel */}
      <TestimonialCarousel testimonials={testimonialsContent.items} />
    </Section>
  );
};

export default Testimonials;
