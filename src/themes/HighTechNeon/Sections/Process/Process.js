// src/themes/HighTechNeon/ThemeTemplates/Process/Process.js
import React from "react";
import Section from "../../Components/Section/Section";
import ContentTemplate from "../../Components/ContentTemplate/ContentTemplate";
import ItemsTemplate from "../../Components/ItemsTemplate/ItemsTemplate";
import ProcessBox2 from "./ProcessBox/ProcessBox2/Box/ProcessBox2";
import { getItemData } from "../../GetItems";
import "./process.css";

const Process = ({ data }) => {
  // If data is null, return null (or a fallback UI)
  if (!data) {
    console.warn("Process component received no data.");
    return null;
  }

  const items = getItemData(data);

  return (
    <Section className="flex justify-center full-height column top-space bottom-space">
      <ContentTemplate
        data={data}
        contentWrapClass="justify-between-section responsive responsive-center"
        ifButton={true}
        ContentHeaderClass="w100"
        heading={data.heading} // This is now safe because data is not null.
        title={data.title}
        buttonText="Get Started"
        buttonLink="#"
        buttonId="process-header-btn"
        buttonBottomMobile={true}
        buttonSecClass="responsive-center"
      >
        <ItemsTemplate
          items={items}
          maxColumns={1}
          ItemComponent={({ id, name, description, featuredImage, itemIndex }) => (
            <ProcessBox2
              stepNumber={itemIndex + 1}
              title={name}
              description={description}
              index={itemIndex}
            />
          )}
          className="process-boxes box-section top-space bottom-space flex responsive column"
          layout="flex responsive column"
          emptyComponent={<p className="text-center">No process steps available.</p>}
        />
      </ContentTemplate>
    </Section>
  );
};

export default Process;

