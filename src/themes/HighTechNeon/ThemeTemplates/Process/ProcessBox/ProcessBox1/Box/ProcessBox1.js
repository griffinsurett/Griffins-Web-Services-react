// process-box.js

import React from "react";
import PropTypes from "prop-types";
import Box from "../../../../../themeComponents/Box/Box"; // Adjust the path as necessary
import "./process-box1.css"; // Assuming you have some CSS for styling

const ProcessBox = ({ stepNumber, title, description }) => {
  return (
    <Box className="process-box grow flex column justify-center item-align-left text-left">
      <h5 className="flex justify-center item-align-center dynamic-border-effect">
        {`Step ${stepNumber}.`}
      </h5>
      <div className="">
        <h3 className="smaller-top-space smaller-bottom-space">{title}</h3>
        <p className="p-small">{description}</p>
      </div>
    </Box>
  );
};

ProcessBox.propTypes = {
  stepNumber: PropTypes.number.isRequired, // Ensures a valid step number is passed
  title: PropTypes.string.isRequired, // Title of the step
  description: PropTypes.string.isRequired, // Description of the step
};

export default ProcessBox;
