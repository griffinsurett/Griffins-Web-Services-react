// src/themes/HighTechNeon/ThemeTemplates/Pricing/PricingTable/PricingTable.js
import React from "react";
import PricingBox from "../PricingBox/PricingBox";
import ItemsTemplate from "../../../Components/ItemsTemplate/ItemsTemplate";
import "./pricing-table.css";

const PricingTable = ({ pricingData }) => {
  return (
    <ItemsTemplate
      items={pricingData}
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
  );
};

export default PricingTable;
