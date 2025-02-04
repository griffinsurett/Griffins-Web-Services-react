// TestimonialBox.js

import React from "react";
import PropTypes from "prop-types";
import "./testimonial-box.css"; // Assuming you have some CSS for styling
import Box from "../../../../Components/Box/Box";

const TestimonialBox = ({ quote, name, position }) => {
  return (
    <Box className="testimonial-box flex column justify-left item-align-center">
      <p className="quote p-small">"{quote}"</p>
      <p className="name">
      {name}, <span className="position">{position}</span>
      </p>
    </Box>
  );
};

TestimonialBox.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default TestimonialBox;
