// Process.js
import React from "react";
import ContentTemplate from "../../themeComponents/ContentTemplate/ContentTemplate"; 
import "./process.css";
import Section from "../../themeComponents/Section/Section";
import ProcessContainer2 from "./ProcessBox/ProcessBox2/Container/ProcessContainer2";

function Process() {
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
      className={
        "flex justify-center full-height column top-space bottom-space"
      }
      shadowClass={"right-shadow bottom"}
    >
      <ContentTemplate
        // className={"bottom-space justify-between-section responsive responsive-center"}
        contentWrapClass="justify-between-section responsive responsive-center"
        ifButton={true}
        textSectionClass={"w100"}
        heading="How We Do It"
        title="Our Process"
        buttonText="Get Started"
        buttonLink="#"
        buttonId="process-header-btn"
        buttonBottomMobile={true}
        buttonSecClass={"responsive-center"}
      >
      <ProcessContainer2 steps={steps} />
      </ContentTemplate>
    </Section>
  );
}

export default Process;
