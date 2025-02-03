// Projects.js
import React from "react";
import { getCollection } from "../../../../CMS/Utils/GetCollection";
import Section from "../../themeComponents/Section/Section";
import ContentTemplate from "../../themeComponents/ContentTemplate/ContentTemplate";
import ProjectContainer2 from "./ProjectItems/item2/Container/Container2"; // Import the desired container
import "./projects.css";

const Projects = () => {
  const projectsContent = getCollection("projects");

  if (!projectsContent) {
    return <div>Error: Projects content not found</div>;
  }

  return (
    <Section
      className={"justify-center full-height column"}
    >
      <ContentTemplate
        className="column bottom-space responsive-center justify-between-section item-align-center"
        contentWrapClass="responsive responsive-center"
        textSectionClass={"smaller-top-space responsive-center"}
        ifButton={true}
        buttonBottom={true}
        heading={projectsContent.heading}
        title={projectsContent.title}
        buttonText={projectsContent.button.text}
        buttonLink={projectsContent.button.link}
        buttonId="projects-header-btn"
        buttonSecClass="space margin-center"
        ifParagraph={true}
        paragraphClass={"text-right"}
        paragraph1={projectsContent.paragraph}
        paragraphSide={true}
        paragraph1Class={"p-large responsive-center"}
      >
        <ProjectContainer2 projects={projectsContent.items} />
      </ContentTemplate>
    </Section>
  );
};

export default Projects;