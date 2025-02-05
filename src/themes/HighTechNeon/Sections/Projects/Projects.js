// src/themes/HighTechNeon/ThemeTemplates/Projects/Projects.js
import React from "react";
import Section from "../../Components/Section/Section";
import ContentTemplate from "../../Components/ContentTemplate/ContentTemplate";
import ItemsTemplate from "../../Components/ItemsTemplate/ItemsTemplate";
import { getItemData } from "../../GetItems";
// Import your custom ProjectItem component:
import ProjectItem from "./ProjectItems/ProjectItem2";

const Projects = ({ data }) => {
  if (!data) {
    return <div>Error: Projects data not found.</div>;
  }

  // Extract projects array safely from CMS data.
  const items = getItemData(data);

  return (
    <Section className="justify-center full-height column">
      <ContentTemplate
        data={data}
        className="column bottom-space responsive-center justify-between"
        contentWrapClass="responsive responsive-center"
        ContentHeaderClass="smaller-top-space responsive-center"
        ifButton={true}
        heading={data.heading}
        title={data.title}
        buttonText={data.button?.text}
        buttonLink={data.button?.link}
        buttonId="projects-header-btn"
        buttonSecClass="space margin-center"
        ifParagraph
        paragraphClass="text-right"
        paragraph1={data.paragraph}
        paragraphSide
        paragraph1Class="p-large responsive-center"
        buttonBottomMobile={true}
      >
        {/* Use ItemsTemplate with the ProjectItem component */}
        <ItemsTemplate
          items={items}
          ItemComponent={({
            id,
            title,
            description,
            image,
            slug,
            itemIndex,
          }) => (
            <ProjectItem
              project={{
                id,
                name: title,
                description,
                slug: slug || "#",
                image,
              }}
              index={itemIndex}
            />
          )}
          className="flex flex-wrap justify-center items-stretch gap-6"
          layout="flex flex-wrap justify-center items-stretch gap-6"
          emptyComponent={
            <p className="text-center">No projects available at this time.</p>
          }
        />
      </ContentTemplate>
    </Section>
  );
};

export default Projects;
