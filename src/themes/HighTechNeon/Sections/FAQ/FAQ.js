// src/themes/HighTechNeon/Sections/FAQ/FAQ.js
import React from "react";
import ContentTemplate from "../../Components/ContentTemplate/ContentTemplate";
import Section from "../../Components/Section/Section";
import { getItemData } from "../../GetItems"; 
import Accordion from "../../Components/Accordion/Accordion";
import "./faq.css";

function FAQ({ data }) {
  if (!data) {
    return <div>Error: FAQ data not found</div>;
  }

  const faqItems = getItemData(data);

  return (
    <Section className="faq-section flex justify-center full-height column">
      <ContentTemplate
        data={data}
        ifButton={false}
        ifParagraph={true}
        heading={data.heading}
        title={data.title}
        titleClass={"text-center"}
        headingClass={"flex text-center justify-center"}
        paragraph1={data.description}
        paragraphClass="p-large text-center"
      />

      <div className="faq-list-wrapper flex justify-center item-align-center responsive">
        {/* Pass the entire array to Accordion here */}
        <Accordion items={faqItems} />
      </div>
    </Section>
  );
}

export default FAQ;
