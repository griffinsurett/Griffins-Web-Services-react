// src/themes/HighTechNeon/Sections/HeroSection/Hero2/Hero.js
import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import Section from "../../../Components/Section/Section";
import ContentTemplate from "../../../Components/ContentTemplate/ContentTemplate";
import "./hero.css";
import "../../Contact/Contact1/contact-us.css"
import Form from "../../../Components/Form/Form";
import InputField from "../../../Components/Inputs/InputField";
import TextareaField from "../../../Components/Inputs/TextareaField";

const Hero2 = ({ data }) => {
  const location = useLocation(); // Get the current route

  if (!data) {
    return <div>Error: No hero data found</div>;
  }

  // Get two paragraphs from data.content (if available)
  const paragraph1 =
    Array.isArray(data.content) && data.content.length > 0
      ? data.content[0]
      : "";
  const paragraph2 =
    Array.isArray(data.content) && data.content.length > 1
      ? data.content[1]
      : "";

  return (
    <Section
      id="hero2"
      className="hero2-section flex justify-between-section item-align-start full-height responsive responsive-center responsive-spacing"
    >
      {/* Left column: The usual content template */}
      <ContentTemplate
        data={data}
        isHero={true}
        ifParagraph={true}
        ifButton={false}
        className={"hero2-content"}
        id={"nonhomehero"}
        title={data.siteTitle || ""}
        heading={data.pageTitle || ""}
        contentWrapClass="column"
        headingClass="hero2-heading responsive-left"
        titleClass="responsive-left"
        paragraphClass="flex justify-center column responsive-center"
        paragraph1={paragraph1}
        paragraph1Class="top-paragraph p-xLarge font-weight-regular text-left self-left"
        paragraph2={paragraph2}
        paragraph2Class="bottom-paragraph text-left negative-top responsive-left"
        // ContentHeaderClass="w50"
      />

      {/* Right column: Inline Quote Form */}
      <div className="form-content flex justify-center item-align-center sticky-section">
        <Form
          method="POST"
          action="https://formspree.io/f/myzkpadl"
          autoComplete="on"
          className="quote-form p-large"
          buttonClass={""}
        >
          {/* Invisible field to send the current page route */}
          <InputField type="hidden" name="pageUrl" value={location.pathname} />

          <div className="quote-form-fields">
            <div className="name-fields flex justify-between">
              <InputField
                type="text"
                name="firstName"
                placeholder="First Name"
                className="p-large dynamic-focus-border-effect fade-in"
              />
              <InputField
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="p-large dynamic-focus-border-effect fade-in"
              />
            </div>
            <div className="contact-fields flex justify-between">
              <InputField
                type="email"
                name="email"
                placeholder="Email"
                className="p-large dynamic-focus-border-effect fade-in"
              />
              <InputField
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="p-large dynamic-focus-border-effect fade-in"
              />
            </div>
            <div className="form-group subject-message flex column">
              <InputField
                type="text"
                name="subject"
                placeholder="Subject"
                className="p-large dynamic-focus-border-effect fade-in"
              />
              <TextareaField
                name="message"
                placeholder="Message"
                className="p-large dynamic-focus-border-effect fade-in"
              />
            </div>
          </div>
        </Form>
      </div>
    </Section>
  );
};

export default Hero2;
