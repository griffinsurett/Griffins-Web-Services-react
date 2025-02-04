// Pricing.js
import React from "react";
import Section from "../../themeComponents/Section/Section";
import ContentTemplate from "../../themeComponents/ContentTemplate/ContentTemplate";
import PricingTable from "./PricingTable/PricingTable";
import "./pricing.css"; // Ensure you have relevant styles for the section

// Pricing data array moved to Pricing.js
const pricingData = [
  {
    title: "Basic Plan",
    description: "For small businesses just getting started.",
    price: "$19",
    paymentType: "per month",
    bulletPoints: ["1 Website", "Basic Support", "Email Hosting"],
    buttonText: "Choose Plan",
    buttonLink: "#",
    isFeatured: false,
  },
  {
    title: "Pro Plan",
    description: "For growing businesses that need more features.",
    price: "$49",
    paymentType: "per month",
    bulletPoints: ["3 Websites", "Priority Support", "SEO Tools"],
    buttonText: "Choose Plan",
    buttonLink: "#",
    isFeatured: true,
  },
  {
    title: "Enterprise Plan",
    description: "For large organizations with advanced needs.",
    price: "$99",
    paymentType: "per month",
    bulletPoints: [
      "Unlimited Websites",
      "Dedicated Support",
      "Advanced Analytics",
    ],
    buttonText: "Choose Plan",
    buttonLink: "#",
    isFeatured: false,
  },
];

const Pricing = () => {
  return (
    <Section className={"pricing-section full-height column text-center"}>
      <ContentTemplate
        className="pricing-header"
        contentWrapClass="justify-between-section responsive responsive-center"
        heading="Our Pricing Plans"
        title="Choose a Plan"
        paragraph1="We offer flexible pricing plans for businesses of all sizes. Find the perfect plan for you."
        ifButton={false}
        ContentHeaderClass={"w100"}
      />
      {/* Pass the pricingData as a prop to PricingTable */}
      <PricingTable pricingData={pricingData} />
    </Section>
  );
};

export default Pricing;
