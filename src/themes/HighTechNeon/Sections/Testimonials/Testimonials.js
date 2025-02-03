// src/themes/HighTechNeon/ThemeTemplates/Testimonials/Testimonials.js
import React from "react";
import Section from "../../Components/Section/Section";
import ContentTemplate from "../../Components/ContentTemplate/ContentTemplate";
import TestimonialCarousel from "./TestimonialBox1/TestimonialContainer";
import { getItemData } from "../../GetItems"; // Use the helper
import "./testimonials.css";

function Testimonials({ data }) {
  if (!data) {
    return <div>Error: Testimonials data not found</div>;
  }

  // Use getItemData to ensure we have an array
  const testimonials = getItemData(data);

  return (
    <Section className="testimonials flex justify-center full-height column">
      <ContentTemplate
        data={data}
        className="testimonials-content flex item-align-center justify-between bottom-space responsive responsive-center"
        contentWrapClass="responsive responsive-center"
        ifButton
        heading={data.heading}
        title={data.title}
        buttonText={data.button?.text}
        buttonLink={data.button?.link}
        buttonId="testimonials-header-btn"
        buttonSecClass="responsive-center"
        buttonBottomMobile
      >
        {/* No direct content here—just the button and heading */}
      </ContentTemplate>

      {/* Carousel */}
      <TestimonialCarousel testimonials={testimonials} />
    </Section>
  );
}

export default Testimonials;
