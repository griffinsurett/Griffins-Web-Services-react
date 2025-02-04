// src/themes/HighTechNeon/ThemeTemplates/About/About2/About.js
import React from "react";
import ContentTemplate from "../../../Components/ContentTemplate/ContentTemplate";
import "./about.css";
import "../../../styled-circle.css";
import Section from "../../../Components/Section/Section";
import ItemsTemplate from "../../../Components/ItemsTemplate/ItemsTemplate";
import { getItemData } from "../../../GetItems";
import ListItem from "../../../Components/ListItem/ListItem";
import Logo from "../../../Components/Logos/3dLogo/3dLogo";

const About2 = ({ data }) => {
  if (!data) return <div>Error: About2 data not found</div>;

  // Extract items from the CMS data
  const items = getItemData(data);

  return (
    <Section
      id="about"
      className="about flex item-align-center justify-center full-height column responsive responsive-center responsive-spacing margin-center"
      shadowClass="left-shadow bottom"
    >
      <ContentTemplate
        data={data}
        className="text-center justify-center item-align-center"
        ifParagraph={true}
        heading={data.heading}
        title={data.title}
        contentWrapClass="column bottom-space"
        paragraph1={data.paragraphs?.[0]}
        paragraph1Class="top-paragraph p-medium bottom-space right-space left-space"
        ContentHeaderClass="smaller-bottom-space"
        buttonText={data.button?.text}
        buttonLink={data.button?.link}
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
          {/* Use ItemsTemplate to render About items */}
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
        </div>
      </ContentTemplate>
    </Section>
  );
};

export default About2;
