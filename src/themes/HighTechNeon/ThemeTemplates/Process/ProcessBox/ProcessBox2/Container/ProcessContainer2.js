// ProcessContainer.js
import React from "react";
import PropTypes from "prop-types";
import ProcessBox2 from "../Box/ProcessBox2"; // Import the ProcessBox component
import "./process-container2.css"; // Assuming the same styles are applied

const ProcessContainer = ({ steps }) => {
  return (
    <div className="process-boxes box-section top-space bottom-space flex responsive column">
      {steps.map((step, index) => (
        <ProcessBox2
          key={index} // Unique key for each iteration
          stepNumber={step.stepNumber}
          title={step.title}
          description={step.description}
          
        />
      ))}
    </div>
  );
};

ProcessContainer.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      stepNumber: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProcessContainer;
