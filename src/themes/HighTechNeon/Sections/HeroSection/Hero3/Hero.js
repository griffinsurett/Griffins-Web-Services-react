// src/themes/HighTechNeon/Sections/HeroSection/Hero2/Hero.js
import React from "react";
import Section from "../../../Components/Section/Section";
import ContentTemplate from "../../../Components/ContentTemplate/ContentTemplate";
import "../../../styled-circle.css"; // Reuse the same circle styles as in About1 if desired

const Hero2 = ({ data }) => {
  if (!data) {
    return <div>Error: No hero data found</div>;
  }

  // Optionally, you can use additional fields from data:
  // For example, you might use siteTitle for a smaller text and pageHeading (or pageTitle) for the main heading.
  const { siteTitle, pageTitle, pageHeading } = data;

  console.log("Hero2 data: ", data);  

  // Get the two paragraphs from data.content array (if available)
  const paragraph1 =
    Array.isArray(data.content) && data.content.length > 0
      ? data.content[0]
      : "";
  const paragraph2 =
    Array.isArray(data.content) && data.content.length > 1
      ? data.content[1]
      : "";

  return (
    <Section
      id="hero2"
      className="
        text-left
        flex item-align-center justify-center
        full-height
        column
        responsive
        responsive-center
        responsive-spacing
      "
    >
      <ContentTemplate
        data={data}
        isHero={true}
        ifParagraph={true}
        ifButton={false}
        id={"nonhomehero"}
        title={siteTitle || ""}
        heading={pageTitle || ""}
        contentWrapClass="column"
        headingClass={"responsive-left"}
        titleClass={"responsive-left"}
        paragraphClass="flex justify-center column about-paragraphs responsive-center"
        paragraph1={paragraph1}
        paragraph1Class="
          top-paragraph
          p-xLarge
          font-weight-regular
          bottom-space
          text-left
          half-column
          self-left
        "
        paragraph2={paragraph2}
        paragraph2Class="
          bottom-paragraph
          text-left
          half-column
          self-right
          responsive-left
          negative-top
          bottom-space
        "
        ContentHeaderClass="w50"
      />
    </Section>
  );
};

export default Hero2;
