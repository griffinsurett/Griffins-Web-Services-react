// About1 - About.js
import React from "react";
import ContentTemplate from "../../../Components/ContentTemplate/ContentTemplate";
import "./about.css";
import "../../../styled-circle.css";
import Section from "../../../Components/Section/Section";

const About1 = ({ data }) => {
  if (!data) {
    return <div>Error: About data not found</div>;
  }

  // For example, if your data structure is:
  // data.heading, data.title, data.paragraphs, data.button.{text,link}, etc.
  // Adjust if they differ.
  return (
    <Section
      id="about"
      className="about flex item-align-center justify-center full-height column responsive responsive-spacing"
    >
      <ContentTemplate
        data={data}
        ifButton={true}
        ifParagraph={true}
        heading={data.heading}
        title={data.title}
        contentWrapClass="column"
        paragraphClass="flex justify-center column about-paragraphs responsive-left"
        paragraph1={data.content}
        paragraph1Class="top-paragraph p-xLarge font-weight-regular bottom-space text-left half-column self-left"
        paragraph2={data.description}
        paragraph2Class="bottom-paragraph text-left half-column self-right negative-top responsive-left bottom-space"
        ContentHeaderClass="w50"
        buttonText={data.button?.text}
        buttonLink={data.button?.link}
        buttonId="about-header-btn"
        buttonClass="self-right"
        buttonBottom={true}
        buttonSecClass="half-column self-right responsive-left top-space"
        isHero={false}
      />
    </Section>
  );
};

export default About1;
