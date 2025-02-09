import React from "react";
import Section from "../../Components/Section/Section";
import ContentTemplate from "../../Components/ContentTemplate/ContentTemplate";
import ItemsTemplate from "../../Components/ItemsTemplate/ItemsTemplate";
import { getItemData } from "../../GetItems";
import PricingBox from "./PricingBox/PricingBox";
import "./pricing.css";

const Pricing = ({ data }) => {
  if (!data) {
    return <div>Error: Pricing data not found</div>;
  }

  // Normalize the pricing items from the CMS data using getItemData
  const pricingItems = getItemData(data);

  return (
    <Section className="pricing-section flex justify-center full-height column text-center">
      <ContentTemplate
        data={data}
        className="pricing-header"
        contentWrapClass="justify-between-section responsive responsive-center"
        heading={data.heading}
        title={data.title}
        paragraph1={data.paragraph}
        ifButton={false}
        ContentHeaderClass="w100"
      />
      <ItemsTemplate
        items={pricingItems}
        ItemComponent={({
          title,
          description,
          price,
          paymentType,
          bulletPoints,
          buttonText,
          buttonLink,
          isFeatured,
          itemIndex,
        }) => (
          <PricingBox
            plan={{
              title,
              description,
              price,
              paymentType,
              bulletPoints,
              buttonText,
              buttonLink,
              isFeatured,
            }}
            index={itemIndex}
          />
        )}
        className="pricing-boxes flex justify-center responsive"
        layout="flex justify-center responsive"
        emptyComponent={
          <p className="text-center">No pricing plans available.</p>
        }
      />
    </Section>
  );
};

export default Pricing;
