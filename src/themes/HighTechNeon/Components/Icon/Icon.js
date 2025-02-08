// Icon.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Icon.css";

const Icon = ({ icon, size = "sm", className = "", bgColor, iconPadding = "18px" }) => {
  return (
      <FontAwesomeIcon
        icon={icon}
        size={size}
        className={`icon flex justify-center align-item-cente fade-in hover-scale ${className}`}
        style={{ margin: "0 5px", backgroundColor: bgColor, padding: iconPadding }}
      />
  );
};

export default Icon;