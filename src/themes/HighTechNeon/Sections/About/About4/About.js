// src/themes/HighTechNeon/ThemeTemplates/About/About4/About.js
import React from "react";
import ContentTemplate from "../../../Components/ContentTemplate/ContentTemplate";
import "./about.css";
import "../../../styled-circle.css";
import Section from "../../../Components/Section/Section";
import ItemsTemplate from "../../../Components/ItemsTemplate/ItemsTemplate";
import { getItemData } from "../../../GetItems";
import ListItem from "../../../Components/ListItem/ListItem";
import Logo from "../../../Components/Logos/3dLogo/3dLogo";

const About4 = ({ data }) => {
  if (!data) return <div>Error: About4 data not found</div>;

  const items = getItemData(data);

  return (
    <Section
      id="about"
      className="about flex item-align-start justify-between-section full-height responsive responsive-center responsive-spacing margin-center box-gap"
      shadowClass="left-shadow bottom"
    >
      <div
        className="about-right flex column justify-center item-align-center sticky-section w40 fade-in"
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
        paragraph2={data.paragraphs?.[1]}
        paragraph1Class="top-paragraph p-large p-medium smaller-bottom-space"
        paragraph2Class="bottom-space"
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
              IconTop={true}
              titleTag="h6"
              iconPadding="17px"
              description={description}
              className="text-center left-on-desktop"
              isRowMobile={true}
              itemIndex={itemIndex}
            />
          )}
          className="about-icon-list flex responsive justify-between item-align-start w100"
          layout="flex responsive justify-between item-align-start w100"
          emptyComponent={<p className="text-center">No items available.</p>}
        />
      </ContentTemplate>
    </Section>
  );
};

export default About4;
