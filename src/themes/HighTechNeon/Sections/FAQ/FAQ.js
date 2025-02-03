// FAQ.js
import React from "react";
import Accordion from "../../Components/Accordion/Accordion";
import ContentTemplate from "../../Components/ContentTemplate/ContentTemplate";
import Section from "../../Components/Section/Section";
import "./faq.css";

function FAQ({ data }) {
  if (!data) {
    return <div>Error: FAQ data not found</div>;
  }

  return (
    <Section className="flex justify-center full-height column">
      <ContentTemplate
        className="flex justify-center text-center column bottom-space"
        ifButton={false}
        ifParagraph={true}
        contentWrapClass="column"
        heading={data.heading}
        headingClass="text-center bottom-space"
        title={data.title}
        paragraph1={data.paragraph}
        paragraphClass="top-paragraph p-large text-center"
        paragraph1Class="p-large"
      />
      <div className="faq-box flex justify-center item-align-center responsive">
        <Accordion items={data.items || []} />
      </div>
    </Section>
  );
}

export default FAQ;
