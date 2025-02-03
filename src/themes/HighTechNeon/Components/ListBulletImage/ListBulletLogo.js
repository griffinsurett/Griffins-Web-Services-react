// ListBulletLogo.js
import React from "react";
import PropTypes from "prop-types";
import "./list-bullet-logo.css"; 
import Logo from "../Logos/2dLogo/2dLogo"; // Import 2dLogo

const ListBulletLogo = ({ size, className }) => {
  return (
    <Logo
      ContainerClassName="spin-in"
      className={`list-bullet-logo ${className}`}
      style={{ width: size, height: size }} // Apply size to both width and height
      width={size}
      height={size}
    />
  );
};

ListBulletLogo.propTypes = {
  size: PropTypes.string, // Size for both width and height
  className: PropTypes.string,
};

ListBulletLogo.defaultProps = {
  size: "25px", // Default size
  className: "",
};

export default ListBulletLogo;
