// Subscribe.js
import React from "react";
import InputField from "../../themeComponents/Form-Fields/InputField";
import ContentTemplate from "../../themeComponents/ContentTemplate/ContentTemplate"; 
import Section from "../../themeComponents/Section/Section";
import Button from "../../themeComponents/Buttons/Button";
import "./subscribe.css";

function Subscribe() {
  return (
    <Section
      className={"flex justify-center item-align-center full-height column"}
      shadowClass={"right-shadow bottom"}
    >
      <div className="w80">
        <ContentTemplate
          ifButton={false}
          textSectionClass={"w100"}
          heading="Subscribe Now"
          className={"top-space bottom-space text-center justify-center"}
        />

        <form className="subscribe-form flex top-space bottom-space responsive">
          <InputField
            type={"email"}
            placeholder="hello@email.com"
            className="p-large"
          />
          <Button
            type={"submit"}
            text="Subscribe"
            id="subscribeBtn"
            className="p-large"
          />
        </form>
      </div>
    </Section>
  );
}

export default Subscribe;
