// Services.js
import React from "react";
import { getCollection } from "../../../../CMS/Utils/GetCollection";
import "./services.css";
import ContentTemplate from "../../themeComponents/ContentTemplate/ContentTemplate";
import Section from "../../themeComponents/Section/Section";
import ServiceBox from "./ServiceBox/ServiceBox";

const Services = () => {
  const servicesContent = getCollection("services");

  if (!servicesContent) {
    return <div>Error: Services content not found</div>;
  }

  return (
    <Section className={"services-section"} id="services">
      <ContentTemplate
        ifButton={true}
        contentWrapClass="justify-between-section responsive responsive-center"
        heading={servicesContent.heading}
        title={servicesContent.title}
        buttonText={servicesContent.button.text}
        buttonLink={servicesContent.button.link}
        buttonId="services-header-btn"
        paragraph1={servicesContent.paragraph}
        paragraphSide={true}
        buttonBottomMobile={true}
        buttonSecClass={"justify-center"}
      >
        <div className="space"></div>

        <div className="services-boxes box-section flex justify-between-section">
          {servicesContent.items.map((service, index) => (
            <ServiceBox
              key={index}
              icon={service.icon} // Dynamically use the icon from Content.js
              title={service.title}
              description={service.description}
              link={service.link}
              index={index}
            />
          ))}
        </div>
      </ContentTemplate>
    </Section>
  );
};

export default Services;