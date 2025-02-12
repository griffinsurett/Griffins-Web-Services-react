// src/themes/HighTechNeon/Sections/Gallery/Gallery.js
import React from "react";
import Section from "../../Components/Section/Section";
import ContentTemplate from "../../Components/ContentTemplate/ContentTemplate";
import ItemsTemplate from "../../Components/ItemsTemplate/ItemsTemplate";
import { getItemData } from "../../GetItems";
import GalleryItem from "./GalleryItem/GalleryItem";
import "./gallery.css";

const Gallery = ({ data }) => {
  if (!data) {
    return <div>Error: Gallery data not found</div>;
  }

  // Extract the gallery items from CMS data
  const items = getItemData(data);

  return (
    <Section id="gallery" className="gallery-section flex justify-center column">
      <ContentTemplate
        data={data}
        className="gallery-header text-center"
        heading={data.heading}
        title={data.title}
        paragraph1={data.paragraph}
        ContentHeaderClass="w100"
        ifButton={false}
      >
        <ItemsTemplate
          items={items}
          ItemComponent={({ media, title, itemIndex }) => (
            <GalleryItem
              src={media}          // <-- Pass "media" as src
              caption={title}      // Use the title as the caption
              index={itemIndex}
            />
          )}
          className="gallery-items flex flex-wrap justify-center gap-20"
          emptyComponent={<p>No gallery items available.</p>}
        />
      </ContentTemplate>
    </Section>
  );
};

export default Gallery;
