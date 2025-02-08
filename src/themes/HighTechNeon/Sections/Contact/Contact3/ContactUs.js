// src/themes/HighTechNeon/ThemeTemplates/Contact/Contact3/ContactUs.js
import React from "react";
import ContentTemplate from "../../../Components/ContentTemplate/ContentTemplate";
import Section from "../../../Components/Section/Section";
import ItemsTemplate from "../../../Components/ItemsTemplate/ItemsTemplate";
import ContactBox from "./ContactBox/ContactBox";

const Contact3 = ({ data }) => {
  if (!data) return <div>Error: Contact data not found</div>;

  // Extract contact info items from CMS data (if they are nested)
  const contactItems = data.contactInfo || [];

  return (
    <Section
      className="flex justify-center full-height responsive column"
    >
      <ContentTemplate
        className="contact-header column responsive-center"
        contentWrapClass="column"
        ifButton={false}
        ifParagraph={true}
        title={data.title}
        heading={data.heading}
        paragraphClass="flex justify-center column about-paragraphs"
        paragraph1={data.paragraph}
        paragraph1Class="top-paragraph responsive-center"
        ContentHeaderClass="smaller-bottom-space"
      />
      {/* Use ItemsTemplate to render contact info boxes */}
      <ItemsTemplate
        items={contactItems}
        ItemComponent={({ icon, label, value, href, itemIndex }) => (
          <ContactBox
            icon={icon}
            label={label}
            value={value}
            href={href}
            index={itemIndex}
          />
        )}
        emptyComponent={
          <p className="text-center">No contact information available.</p>
        }
      />
    </Section>
  );
};

export default Contact3;
