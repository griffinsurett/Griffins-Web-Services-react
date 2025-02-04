// About1 - About.js
import React from "react";
import { getCollection } from "../../../../../CMS/Utils/GetCollection";
import ContentTemplate from "../../../themeComponents/ContentTemplate/ContentTemplate";
import "./about.css";
import "../../../styled-circle.css";
import Section from "../../../themeComponents/Section/Section";

const About = () => {
  const aboutContent = getCollection("about");

  if (!aboutContent) {
    return <div>Error: About content not found</div>;
  }

  return (
    <Section
      id="about"
      className="about flex item-align-center justify-center full-height column responsive responsive-center responsive-spacing"
    >
      <ContentTemplate
        ifButton={true}
        ifParagraph={true}
        heading={aboutContent.heading}
        title={aboutContent.title}
        contentWrapClass="column"
        paragraphClass="flex justify-center column about-paragraphs responsive-center"
        paragraph1={aboutContent.paragraphs[0]}
        paragraph1Class="top-paragraph p-xLarge font-weight-regular bottom-space text-left half-column self-left"
        paragraph2={aboutContent.paragraphs[1]}
        paragraph2Class="bottom-paragraph text-left half-column self-right negative-top responsive-right bottom-space"
        ContentHeaderClass="smaller-bottom-space"
        buttonText={aboutContent.button.text}
        buttonLink={aboutContent.button.link}
        buttonId="about-header-btn"
        buttonClass="self-right"
        buttonBottom={true}
        buttonSecClass="half-column self-right responsive-center top-space"
        isHero={false}
      />
    </Section>
  );
};

export default About;
