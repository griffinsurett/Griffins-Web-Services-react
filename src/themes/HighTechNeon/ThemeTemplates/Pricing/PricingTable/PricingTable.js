// PricingTable.js
import React from "react";
import PricingBox from "../PricingBox/PricingBox";
import "./pricing-table.css"; // Keep global styles

const PricingTable = ({ pricingData }) => {
  return (
    <div className="pricing-boxes flex justify-center responsive">
      {pricingData.map((plan, index) => (
        <PricingBox key={index} plan={plan} />
      ))}
    </div>
  );
};

export default PricingTable;
