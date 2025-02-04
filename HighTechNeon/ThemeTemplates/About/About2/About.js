// About2 - About.js
import React from "react";
import { getCollection } from "../../../../../CMS/Utils/GetCollection";
import ContentTemplate from "../../../themeComponents/ContentTemplate/ContentTemplate";
import "./about.css";
import "../../../styled-circle.css";
import Section from "../../../themeComponents/Section/Section";
import AboutList from "./AboutList/AboutList";
import Logo from "../../../themeComponents/Logos/3dLogo/3dLogo";

const About = () => {
  const aboutContent = getCollection("about");

  if (!aboutContent) {
    return <div>Error: About content not found</div>;
  }

  return (
    <Section
      id="about"
      className="about flex item-align-center justify-center full-height column responsive responsive-center responsive-spacing margin-center"
      shadowClass="left-shadow bottom"
    >
      <ContentTemplate
        className="text-center justify-center item-align-center"
        ifParagraph={true}
        heading={aboutContent.heading}
        title={aboutContent.title}
        contentWrapClass="column bottom-space"
        paragraph1={aboutContent.paragraphs[0]}
        paragraph1Class="top-paragraph p-medium bottom-space right-space left-space"
        ContentHeaderClass="smaller-bottom-space"
        buttonText={aboutContent.button.text}
        buttonLink={aboutContent.button.link}
        buttonId="about-header-btn"
        buttonSecClass="responsive-container top-space item-align-center justify-center margin-center"
        isHero={false}
        buttonBottom={true}
      >
        <div className="about-info flex responsive responsive-center box-gap justify-between-section">
          <div className="about-right w40 flex column justify-center item-align-center sticky-section">
            <Logo
              ContainerClassName="flex justify-left item-align-start logo logo-drop-shadow-big"
              width="360px"
              classname=""
              responsive={true}
              everdarkLogo={true}
            />
          </div>
          <div className="about flex item-align-start w50">
            <AboutList items={aboutContent.items} />
          </div>
        </div>
      </ContentTemplate>
    </Section>
  );
};

export default About;
