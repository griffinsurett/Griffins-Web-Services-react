// FAQ.js
import React from "react";
import { getCollection } from "../../../../CMS/Utils/GetCollection";
import Accordion from "../../themeComponents/Accordion/Accordion";
import ContentTemplate from "../../themeComponents/ContentTemplate/ContentTemplate"; // Updated to ContentTemplate
import Section from "../../themeComponents/Section/Section"; // Import your Section component
import "./faq.css"; // Import your FAQ styles

function FAQ() {
  const faqContent = getCollection("faq");

  if (!faqContent) {
    return <div>Error: FAQ content not found</div>;
  }

  return (
    <Section
      className="flex justify-center full-height column"
      shadowClass="left-shadow bottom"
    >
      <ContentTemplate
        className="flex justify-center text-center column bottom-space"
        ifButton={false}
        ifParagraph={true}
        contentWrapClass="column"
        heading={faqContent.heading} // Dynamic heading
        headingClass="text-center bottom-space"
        title={faqContent.title} // Dynamic title
        paragraph1={faqContent.paragraph} // Dynamic paragraph
        paragraphClass="top-paragraph p-large text-center"
        paragraph1Class={"p-large"}
      />
      <div className="faq-box flex justify-center item-align-center responsive">
        <Accordion items={faqContent.items} /> {/* Pass dynamic FAQ items */}
      </div>
    </Section>
  );
}

export default FAQ;
