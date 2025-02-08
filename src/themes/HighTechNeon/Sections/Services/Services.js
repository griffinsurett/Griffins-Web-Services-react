// src/themes/HighTechNeon/ThemeTemplates/Services/Services.js
import React from "react";
import "./services.css";
import ContentTemplate from "../../Components/ContentTemplate/ContentTemplate";
import Section from "../../Components/Section/Section";
import ItemsTemplate from "../../Components/ItemsTemplate/ItemsTemplate";
import { getItemData } from "../../GetItems";
import ServiceBox from "./ServiceBox/ServiceBox";

const Services = ({ data }) => {
  // Safely extract the array of items
  const items = getItemData(data);

  return (
    <Section className="services-section" id="services">
      <ContentTemplate
        data={data}
        className="services-content top-space"
        title={data.title}
        heading={data.heading}
        paragraph1={data.paragraphs?.[0]}
        titleClass={"responsive-center"}
        ifButton={true}
        buttonBottomMobile={true}
        buttonSecClass={"justify-center"}
      >
        <ItemsTemplate
          items={items}
          ItemComponent={({
            title,
            description,
            icon,
            slug,
            hasPage,
            itemIndex,
          }) => (
            <ServiceBox
              icon={icon}
              title={title}
              description={description}
              link={hasPage ? slug : null}
              index={itemIndex}
            />
          )}
          className="services-boxes flex wrap justify-center responsive box-section"
          maxColumns={(items?.length || 0) % 3 === 0 ? 3 : 2}
          emptyComponent={<p className="text-center">No services available.</p>}
        />
      </ContentTemplate>
    </Section>
  );
};

export default Services;