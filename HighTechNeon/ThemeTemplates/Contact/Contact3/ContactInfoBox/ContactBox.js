// ContactBox.js
import React from "react";
import PropTypes from "prop-types";
import Box from "../../../../themeComponents/Box/Box";
import "./contact-box.css";

// ContactBox.js
const ContactBox = ({ icon, title, description, href, index }) => {
  return (
    <Box
      linkClassName=""
      boxClassName="contact-box flex column justify-center item-align-center"
      href={href}
      hasIcon={true}
      icon={icon}
      title={title}
      description={description}
      staggeredAnimation={true}
      index={index}
      delayBase={index * 50}
      maxColumns={2}
    />
  );
};

ContactBox.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default ContactBox;
