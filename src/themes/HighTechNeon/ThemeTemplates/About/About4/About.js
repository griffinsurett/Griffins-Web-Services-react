import React from "react";
import { getCollection } from "../../../../../CMS/Utils/GetCollection";
import ContentTemplate from "../../../themeComponents/ContentTemplate/ContentTemplate";
import "./about.css";
import "../../../styled-circle.css";
import Section from "../../../themeComponents/Section/Section";
import AboutList from "./AboutList/AboutList";
import Logo from "../../../themeComponents/Logos/3dLogo/3dLogo";
import IntersectionObserverComponent from "../../../ScrollAnimations";
import MenuItem from "../../../themeComponents/MenuItem/MenuItem";

const About = () => {
  const aboutContent = getCollection("about");

  if (!aboutContent) {
    return <div>Error: About content not found</div>;
  }

  return (
    <Section
      id="about"
      className={
        "about flex item-align-start justify-between-section full-height responsive responsive-center responsive-spacing margin-center box-gap"
      }
      shadowClass={"left-shadow bottom"}
    >
      <div className="about-right flex column justify-center item-align-center sticky-section w40">
        <IntersectionObserverComponent
          inViewClass="fade-in"
          delayIn={1000}
          applyDelayOnce={true}
        >
          <Logo
            ContainerClassName="flex justify-center item-align-center logo logo-drop-shadow-big"
            width="460px"
            classname=""
            responsive={true}
            everdarkLogo={true}
          />
        </IntersectionObserverComponent>
      </div>

      <ContentTemplate
        className={"text-left justify-left item-align-start w60"}
        ifButton={true}
        ifParagraph={true}
        heading={aboutContent.heading}
        title={aboutContent.title}
        contentWrapClass="column bottom-space"
        paragraph1={aboutContent.paragraphs[0]}
        paragraph2={aboutContent.paragraphs[1]}
        paragraph1Class={"top-paragraph p-large p-medium smaller-bottom-space"}
        paragraph2Class={"bottom-space"}
        textSectionClass="smaller-bottom-space"
        buttonText={aboutContent.button.text}
        buttonLink={aboutContent.button.link}
        buttonId="about-header-btn"
        buttonSecClass={"responsive-container self-left"}
        isHero={false}
        buttonBottom={true}
      >
        <div className="about-icon-section flex item-align-start smaller-bottom-space">
          <AboutList items={aboutContent.items} />
        </div>

        {/* <div className="about-list-menu flex justify-left item-align-start bottom-space column">
          {aboutContent.aboutInfo.map((info, index) => (
            <div key={index} className="about-list-item smaller-top-space">
              <MenuItem
                className={"about-menu smaller-top-space"} // Pass the custom class
                logoOnlyOnHover={false}
                logoSize="30px"
                label={`Our ${info.title}`}
                labelClass="about-menu-label"
                labelElement="h5"
                hover={false}
              />
              <p className="about-list-p p-xSmall">{info.statement}</p>
            </div>
          ))}
        </div> */}
      </ContentTemplate>
    </Section>
  );
};

export default About;
