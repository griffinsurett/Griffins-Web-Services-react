// PricingBox.js
import React from "react";
import Box from "../../../Components/Box/Box";
import Button from "../../../Components/Buttons/Button";
import PropTypes from "prop-types";
import "./pricing-box.css";
import MenuItem from "../../../Components/MenuItem/MenuItem"; // Use MenuItem

const PricingBox = ({ plan, href, logoOnlyOnHover }) => {
  return (
    <Box
      href={href}
      className={`pricing-box flex column justify-center item-align-center ${
        plan.isFeatured ? "featured-plan" : ""
      }`}
    >
      <h3 className="pricing-title top-space">{plan.title}</h3>
      <p className="pricing-description p-small">{plan.description}</p>
      <div className="pricing-price">
        <span className="price-amount">{plan.price}</span>
        <span className="payment-type">{plan.paymentType}</span>
      </div>
      <ul className="pricing-features">
        {plan.bulletPoints.map((point, idx) => (
          <MenuItem
            key={idx}
            label={point}
            href={plan.featureLinks?.[idx] || null}
            index={idx}
            className="feature-item"
            logoOnlyOnHover={logoOnlyOnHover} // Pass down the new prop
          />
        ))}
      </ul>
      <div className="pricing-button-container top-space bottom-space">
        <Button
          text={plan.buttonText}
          buttonLink={plan.buttonLink}
          className="pricing-button p-small"
        />
      </div>
    </Box>
  );
};

PricingBox.propTypes = {
  plan: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    paymentType: PropTypes.string.isRequired,
    bulletPoints: PropTypes.array.isRequired,
    featureLinks: PropTypes.array, // Optional array of links for bullet points
    buttonText: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
    isFeatured: PropTypes.bool,
  }).isRequired,
  logoOnlyOnHover: PropTypes.bool, // New prop for controlling logo visibility
};

PricingBox.defaultProps = {
  logoOnlyOnHover: false, // Default to always show the logo
};

export default PricingBox;
