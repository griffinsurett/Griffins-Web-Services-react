// src/themes/HighTechNeon/Sections/Contact/Contact1/ContactUs.js
import React from "react";
import IconListItem from "../../../Components/ListItem/ListItem";
import ContentTemplate from "../../../Components/ContentTemplate/ContentTemplate";
import Section from "../../../Components/Section/Section";
import Form from "../../../Components/Form/Form";
import InputField from "../../../Components/Inputs/InputField";
import TextareaField from "../../../Components/Inputs/TextareaField";
import "./contact-us.css"; // For contact-info styling

function Contact1({ data }) {
  if (!data) {
    return <div>Error: Contact data not found</div>;
  }

  // If data.form is missing, we can fallback to some defaults
  const formConfig = data.form || {};

  return (
    <Section className="flex justify-center item-align-start full-height responsive responsive-center">
      {/* Contact header & info */}
      <ContentTemplate
        className="contact-sec-header column responsive-center sticky-section"
        contentWrapClass="column"
        ifButton={false}
        ifParagraph={true}
        title={data.title}
        heading={data.heading}
        paragraphClass="flex justify-center column about-paragraphs"
        paragraph1={data.paragraph}
        paragraph1Class="top-paragraph responsive-center smaller-bottom-space"
        buttonBottom={false}
        ContentHeaderClass="smaller-bottom-space"
      >
        <div className="contact-info top-space bottom-space">
          {data.contactInfo?.map((info, index) => (
            <IconListItem
              key={index}
              hasIcon={true}
              isColumnMobile={true}
              icon={info.icon}
              title={info.label}
              description={info.value}
              href={info.href}
              className="contact-info-item responsive-center flex item-align-center responsive responsive-center bottom-space"
            />
          ))}
        </div>
      </ContentTemplate>

      {/* Our Form (method, action, etc.) plus fields as children */}
      <Form
        method={formConfig.method || "POST"}
        action={formConfig.action || "#"}
        autoComplete="on"
        buttonText={formConfig.button?.text || "Submit"}
        buttonClass={formConfig.button?.class || ""}
      >
        {/* The field layout (same slices) */}
        <div className="form-group column">
          <div className="form-group">
            <div className="name-fields flex justify-between">
              {formConfig.formFields?.slice(0, 2).map((field, idx) => (
                <InputField
                  key={idx}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              ))}
            </div>
            <div className="contact-fields flex justify-between">
              {formConfig.formFields?.slice(2, 4).map((field, idx) => (
                <InputField
                  key={idx}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              ))}
            </div>
          </div>

          <div className="form-group subject-message">
            {formConfig.formFields?.slice(4, 5).map((field, idx) => (
              <InputField
                key={idx}
                name={field.name}
                placeholder={field.placeholder}
              />
            ))}
            {formConfig.formFields?.slice(5, 6).map((field, idx) => (
              <TextareaField
                key={idx}
                name={field.name}
                placeholder={field.placeholder}
                className="textarea-field"
              />
            ))}
          </div>
        </div>
      </Form>
    </Section>
  );
}

export default Contact1;
