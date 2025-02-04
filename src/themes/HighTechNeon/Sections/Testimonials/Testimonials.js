// src/themes/HighTechNeon/Sections/Testimonials/Testimonials.js
import React from "react";
import Section from "../../Components/Section/Section";
import ContentTemplate from "../../Components/ContentTemplate/ContentTemplate";
import ItemsTemplate from "../../Components/ItemsTemplate/ItemsTemplate";
import { getItemData } from "../../GetItems";
import TestimonialBox from "./TestimonialBox1/Box/TestimonialBox"; // Reuse the testimonial box component
import "./testimonials.css";

function Testimonials({ data }) {
  if (!data) {
    return <div>Error: Testimonials data not found</div>;
  }

  // Normalize testimonials data (using your helper)
  const testimonials = getItemData(data);

  return (
    <Section className="testimonials-section flex justify-center full-height column">
      <ContentTemplate
        data={data}
        className="testimonials-header justify-center item-align-center"
        contentWrapClass="responsive responsive-center"
        heading={data.heading}
        title={data.title}
        paragraph1={data.paragraph}
        ifButton={true}
        textSectionClass="w100"
      />
      {/* Use ItemsTemplate to render testimonial boxes */}
      <ItemsTemplate
        items={testimonials}
        ItemComponent={({ quote, name, position, itemIndex }) => (
          <TestimonialBox
            quote={quote}
            name={name}
            position={position}
            itemIndex={itemIndex}
          />
        )}
        className="testimonials-boxes box-section w100 flex wrap justify-center item-align-center responsive responsive-center"
        maxColumns={2}    // You can adjust this based on the desired number of columns
        gap="0"
        emptyComponent={<p className="text-center">No testimonials available.</p>}
      />
    </Section>
  );
}

export default Testimonials;
