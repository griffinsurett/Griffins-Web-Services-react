// Icon.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Icon.css";

const Icon = ({ icon, size = "sm", className = "", bgColor, iconPadding = "18px" }) => {
  return (
    <div className="icon-observer fade-in" style={{ display: "flex", justifyContent: "center" }}>
      <FontAwesomeIcon
        icon={icon}
        size={size}
        className={`icon flex justify-center align-item-center hover-scale ${className}`}
        style={{ margin: "0 5px", backgroundColor: bgColor, padding: iconPadding }}
      />
    </div>
  );
};

export default Icon;