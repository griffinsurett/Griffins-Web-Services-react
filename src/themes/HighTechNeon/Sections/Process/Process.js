// src/themes/HighTechNeon/ThemeTemplates/Process/Process.js
import React from "react";
import ContentTemplate from "../../Components/ContentTemplate/ContentTemplate";
import "./process.css";
import Section from "../../Components/Section/Section";
import ItemsTemplate from "../../Components/ItemsTemplate/ItemsTemplate";
// Import one of your ProcessBox components – here we use ProcessBox2 as an example.
import ProcessBox2 from "./ProcessBox/ProcessBox2/Box/ProcessBox2";

const Process = () => {
  const steps = [
    {
      stepNumber: 1,
      title: "Plan",
      description: "Define your goals and strategy.",
    },
    {
      stepNumber: 2,
      title: "Design",
      description: "Create the visual and user experience.",
    },
    {
      stepNumber: 3,
      title: "Develop",
      description: "Build and implement the solution.",
    },
    {
      stepNumber: 4,
      title: "Launch",
      description: "Deploy and go live with your product.",
    },
  ];

  return (
    <Section
      className="flex justify-center full-height column top-space bottom-space"
      shadowClass="right-shadow bottom"
    >
      <ContentTemplate
        contentWrapClass="justify-between-section responsive responsive-center"
        ifButton={true}
        ContentHeaderClass="w100"
        heading="How We Do It"
        title="Our Process"
        buttonText="Get Started"
        buttonLink="#"
        buttonId="process-header-btn"
        buttonBottomMobile={true}
        buttonSecClass="responsive-center"
      >
        {/* Use ItemsTemplate to render each process step */}
        <ItemsTemplate
          items={steps}
          ItemComponent={({ stepNumber, title, description, itemIndex }) => (
            <ProcessBox2
              stepNumber={stepNumber}
              title={title}
              description={description}
              index={itemIndex}
            />
          )}
          containerClass="process-boxes box-section top-space bottom-space flex responsive column"
          layout="flex responsive column"
          emptyComponent={
            <p className="text-center">No process steps available.</p>
          }
        />
      </ContentTemplate>
    </Section>
  );
};

export default Process;
