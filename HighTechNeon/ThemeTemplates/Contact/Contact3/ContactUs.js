// ContactUs3.js
import React from "react";
import { getCollection } from "../../../../../CMS/Utils/GetCollection";
import ContentTemplate from "../../../themeComponents/ContentTemplate/ContentTemplate";
import Section from "../../../themeComponents/Section/Section";
import ContactBox from "./ContactBox/ContactBox";
import "./contact-us.css";

function ContactUs() {
  const contactContent = getCollection("contact");

  if (!contactContent) {
    return <div>Error: Contact content not found</div>;
  }

  return (
    <Section
      className="flex justify-center full-height responsive column"
      shadowClass="left-shadow bottom"
    >
      <div className="flex justify-center bottom-space column">
        <ContentTemplate
          className="contact-header column responsive-center bottom-space"
          contentWrapClass="column"
          ifButton={false}
          ifParagraph={true}
          heading={contactContent.heading}
          paragraphClass="flex justify-center column about-paragraphs"
          paragraph1={contactContent.paragraph}
          paragraph1Class="top-paragraph responsive-center"
          buttonBottom={true}
          ContentHeaderClass="smaller-bottom-space"
        />
        <div className="contact-info box-section w100 flex wrap justify-center item-align-center responsive responsive-center">
          {contactContent.contactInfo.map((info, index) => (
            <ContactBox
              key={index}
              icon={info.icon} // Pass the FontAwesome icon
              label={info.label}
              value={info.value}
              href={info.href}
              index={index} // Pass index for staggered animation
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ContactUs;
