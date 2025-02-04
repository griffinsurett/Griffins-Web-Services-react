// src/themes/HighTechNeon/ThemeTemplates/About/About3/About.js
import React from "react";
import ContentTemplate from "../../../Components/ContentTemplate/ContentTemplate";
import Section from "../../../Components/Section/Section";
import ItemsTemplate from "../../../Components/ItemsTemplate/ItemsTemplate";
import { getItemData } from "../../../GetItems";
import ListItem from "../../../Components/ListItem/ListItem";
import Logo from "../../../Components/Logos/3dLogo/3dLogo";
import "./about.css";

const About3 = ({ data }) => {
  if (!data) return <div>Error: About3 data not found</div>;

  const items = getItemData(data);

  return (
    <Section
      id="about"
      className="about flex item-align-start justify-between-section full-height responsive responsive-center responsive-spacing margin-center box-gap"
      shadowClass="left-shadow bottom"
    >
      <div
        className="about-right flex column justify-center item-align-center sticky-section w30 fade-in"
        style={{ transitionDelay: "1000ms" }}
      >
        <Logo
          ContainerClassName="flex justify-center item-align-center logo logo-drop-shadow-big"
          width="460px"
          classname=""
          responsive={true}
          everdarkLogo={true}
        />
      </div>

      <ContentTemplate
        data={data}
        className="text-left justify-left item-align-start w60"
        ifButton={true}
        ifParagraph={true}
        heading={data.heading}
        title={data.title}
        contentWrapClass="column bottom-space"
        paragraph1={data.paragraphs?.[0]}
        paragraph1Class="top-paragraph p-medium bottom-space"
        ContentHeaderClass="smaller-bottom-space"
        buttonText={data.button?.text}
        buttonLink={data.button?.link}
        buttonId="about-header-btn"
        buttonSecClass="responsive-container self-left"
        isHero={false}
        buttonBottom={true}
      >
        <ItemsTemplate
          items={items}
          ItemComponent={({ title, description, icon, itemIndex }) => (
            <ListItem
              hasIcon={true}
              icon={icon}
              title={title}
              description={description}
              itemIndex={itemIndex}
            />
          )}
          containerClass="about-icon-list flex flex-wrap justify-center gap-20"
          layout="flex flex-wrap justify-center gap-20"
          emptyComponent={<p className="text-center">No items available.</p>}
        />
      </ContentTemplate>
    </Section>
  );
};

export default About3;
