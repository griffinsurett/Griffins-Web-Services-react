// ProcessBox2.js
import React from "react";
import PropTypes from "prop-types";
import Box from "../../../../../Components/Box/Box"; // Adjust the path as necessary
import "./process-box2.css"; // Assuming you have some CSS for styling
import Logo from "../../../../../Components/Logos/2dLogo/2dLogo";

const ProcessBox = ({ stepNumber, title, description }) => {
  return (
    <Box
      className="process-box grow flex justify-between item-align-center responsive responsive-center"
      delayIn={400}
      inViewClass="fade-in-up"
      outViewClass="fade-in-down"
    >
      <h4 className="flex justify-center item-align-center w10 text-shadow-for-dark">
        {`0${stepNumber}.`}
      </h4>
      <h3 className="w40 smaller-top-space responsive-center">{title}</h3>
      <Logo
        ContainerClassName="flex justify-center item-align-center logo w20"
        width="50px" // Width is set, and height will be 90% of this
        classname="responsive-logo"
      />
      <p className="p-small w30">{description}</p>
    </Box>
  );
};

ProcessBox.propTypes = {
  stepNumber: PropTypes.number.isRequired, // Ensures a valid step number is passed
  title: PropTypes.string.isRequired, // Title of the step
  description: PropTypes.string.isRequired, // Description of the step
};

export default ProcessBox;
