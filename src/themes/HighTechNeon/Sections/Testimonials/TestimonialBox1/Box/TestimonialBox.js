// TestimonialBox.js

import React from "react";
import PropTypes from "prop-types";
import "./testimonial-box.css"; // Assuming you have some CSS for styling

const TestimonialBox = ({ quote, name, position }) => {
  return (
    <div className="testimonial-box flex column justify-left item-align-center">
      <p className="quote p-small">"{quote}"</p>
      <p className="name">
      {name}, <span className="position">{position}</span>
      </p>
    </div>
  );
};

TestimonialBox.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default TestimonialBox;
