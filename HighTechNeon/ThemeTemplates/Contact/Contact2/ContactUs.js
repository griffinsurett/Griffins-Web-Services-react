// ContactUs.js
import React from "react";
import { getCollection } from "../../../../../CMS/Utils/GetCollection";
import InputField from "../../../themeComponents/Form-Fields/InputField";
import TextareaField from "../../../themeComponents/Form-Fields/TextareaField";
import Button from "../../../themeComponents/Buttons/Button";
import ContentTemplate from "../../../themeComponents/ContentTemplate/ContentTemplate";
import Section from "../../../themeComponents/Section/Section";
import IconListItem from "../../../themeComponents/ListItem/ListItem";
import "./contact-us.css";

function ContactUs() {
  const contactContent = getCollection("contact");

  if (!contactContent) {
    return <div>Error: Contact content not found</div>;
  }

  return (
    <Section
      className="flex justify-center item-align-center full-height responsive column"
      shadowClass="left-shadow bottom"
    >
      <div className="flex justify-center item-align-center bottom-space">
        <ContentTemplate
          className="contact-sec-header column responsive-center"
          contentWrapClass="column"
          ifButton={false}
          ifParagraph={true}
          heading={contactContent.heading}
          paragraphClass="flex justify-center column about-paragraphs"
          paragraph1={contactContent.paragraph}
          paragraph1Class="top-paragraph responsive-center"
          buttonBottom={true}
          textSectionClass="smaller-bottom-space"
        />
        <div className="contact-info large-screens bottom-space">
          {contactContent.contactInfo.map((info, index) => (
            <IconListItem
              key={index}
              hasIcon={true}
              icon={info.icon} // Dynamically source icons from Content.js
              title={info.label}
              description={info.value}
              href={info.href}
              className="contact-info-item flex responsive responsive-center item-align-center"
            />
          ))}
        </div>
      </div>

      <form className="contact-form top-space bottom-space">
        <div className="form-group column">
          <div className="form-group">
            <div className="name-fields flex justify-between">
              {contactContent.formFields.slice(0, 2).map((field, index) => (
                <InputField
                  key={index}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              ))}
            </div>
            <div className="contact-fields flex justify-between">
              {contactContent.formFields.slice(2, 4).map((field, index) => (
                <InputField
                  key={index}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              ))}
            </div>
          </div>
          <div className="form-group subject-message">
            {contactContent.formFields.slice(4, 5).map((field, index) => (
              <InputField
                key={index}
                name={field.name}
                placeholder={field.placeholder}
              />
            ))}
            {contactContent.formFields.slice(5, 6).map((field, index) => (
              <TextareaField
                key={index}
                name={field.name}
                placeholder={field.placeholder}
                className="textarea-field"
              />
            ))}
          </div>
        </div>
        <Button
          type="submit"
          text={contactContent.button.text}
          className="p-large self-right"
        />
      </form>
    </Section>
  );
}

export default ContactUs;
