// TestimonialBox.js

import React from "react";
import PropTypes from "prop-types";
import "./testimonial-box.css"; // Assuming you have some CSS for styling
import Box from "../../../../Components/Box/Box";

const TestimonialBox = ({ quote, name, position }) => {
  return (
    <Box className="testimonial-box flex column">
      <p className="quote p-small">"{quote}"</p>
      <div className="flex column item-align-center top-space text-center">
        <h5>{name}</h5>
      <p className="position p-xSmall">{position}</p>
      </div>
    </Box>
  );
};

TestimonialBox.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default TestimonialBox;
