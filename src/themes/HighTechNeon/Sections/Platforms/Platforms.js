import React from "react";
import Section from "../../Components/Section/Section";
import ContentTemplate from "../../Components/ContentTemplate/ContentTemplate";
import ItemsTemplate from "../../Components/ItemsTemplate/ItemsTemplate";
import { getItemData } from "../../GetItems";
import "./platforms.css";
import Icon from "../../Components/Icon/Icon";

const Platforms = ({ data }) => {
  if (!data) {
    return <div>Error: No platform data found</div>;
  }

  // Use the collection itself to extract items from the items.data property
  const platforms = getItemData(data);

  return (
    <Section
      id="platforms"
      className="platforms-section flex justify-left responsive responsive-center"
    >
      <ContentTemplate
        data={data}
        ifButton={false}
        ifParagraph={true}
        heading={data.heading}
        title={data.title}
        paragraph1={data.paragraph}
        className={"platforms-content"}
        ContentHeaderClass="w100"
      >
        <ItemsTemplate
          items={platforms}
          ItemComponent={({ icon, title, link, itemIndex }) => (
            <Icon icon={icon} className="platform-icon styled-icon dynamic-border-effect hover-scale" />
          )}
          allowWrap={false}
          className="platforms-list flex wrap top-space"
          emptyComponent={<p>No platforms available</p>}
        />
      </ContentTemplate>
    </Section>
  );
};

export default Platforms;
