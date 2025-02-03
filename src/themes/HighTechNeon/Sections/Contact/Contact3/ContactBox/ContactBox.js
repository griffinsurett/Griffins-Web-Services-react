// ContactBox.js
import React from "react";
import PropTypes from "prop-types";
import Box from "../../../../Components/Box/Box";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact-box.css";
import Icon from "../../../../Components/Icon/Icon";

const ContactBox = ({ icon, label, value, href, index }) => {
  return (
    <Box
      className="contact-box flex justify-center column text-center"
      link={href}
      staggeredAnimation={true}
      index={index}
      delayBase={index * 50}
    >
      <div className="contact-box-content flex column item-align-center">
        {icon && (
          <div className="contact-icon">
            <Icon
              icon={icon}
              className="styled-icon dynamic-border-effect hover-scale"
            />
          </div>
        )}
        <h4 className="contact-label smaller-top-space">{label}</h4>
        <p className="contact-value">{value}</p>
      </div>
    </Box>
  );
};

ContactBox.propTypes = {
  icon: PropTypes.object.isRequired, // FontAwesome icon object
  label: PropTypes.string.isRequired, // Label (e.g., "Phone")
  value: PropTypes.string.isRequired, // Value (e.g., phone number or email)
  href: PropTypes.string, // Link for the box
  index: PropTypes.number.isRequired, // For staggered animation
};

export default ContactBox;
