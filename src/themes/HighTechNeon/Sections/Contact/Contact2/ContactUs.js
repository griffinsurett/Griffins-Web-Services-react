// Contact2.js
import React from "react";
import InputField from "../../../Components/Form-Fields/InputField";
import TextareaField from "../../../Components/Form-Fields/TextareaField";
import Button from "../../../Components/Buttons/Button";
import ContentTemplate from "../../../Components/ContentTemplate/ContentTemplate";
import Section from "../../../Components/Section/Section";
import IconListItem from "../../../Components/ListItem/ListItem";
import "./contact-us.css";

function Contact2({ data }) {
  if (!data) {
    return <div>Error: Contact data not found</div>;
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
          heading={data.heading}
          paragraphClass="flex justify-center column about-paragraphs"
          paragraph1={data.paragraph}
          paragraph1Class="top-paragraph responsive-center"
          buttonBottom={true}
          textSectionClass="smaller-bottom-space"
        />
        <div className="contact-info large-screens bottom-space">
          {data.contactInfo?.map((info, index) => (
            <IconListItem
              key={index}
              hasIcon={true}
              icon={info.icon}
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
              {data.formFields?.slice(0, 2).map((field, idx) => (
                <InputField
                  key={idx}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              ))}
            </div>
            <div className="contact-fields flex justify-between">
              {data.formFields?.slice(2, 4).map((field, idx) => (
                <InputField
                  key={idx}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              ))}
            </div>
          </div>
          <div className="form-group subject-message">
            {data.formFields?.slice(4, 5).map((field, idx) => (
              <InputField
                key={idx}
                name={field.name}
                placeholder={field.placeholder}
              />
            ))}
            {data.formFields?.slice(5, 6).map((field, idx) => (
              <TextareaField
                key={idx}
                name={field.name}
                placeholder={field.placeholder}
                className="textarea-field"
              />
            ))}
          </div>
        </div>
        <Button
          type="submit"
          text={data.button?.text}
          className="p-large self-right"
        />
      </form>
    </Section>
  );
}

export default Contact2;
