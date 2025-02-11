// src/components/Icon/Icon.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "../Tooltip/Tooltip"; // import the new Tooltip component
import "./Icon.css";

const Icon = ({
  icon,
  size = "sm",
  className = "",
  bgColor,
  iconPadding = "18px",
  tooltipText,         // New prop for tooltip text
  tooltipPosition,     // Optional: "top", "bottom", "left", or "right"
}) => {
  const iconElement = (
    <FontAwesomeIcon
      icon={icon}
      size={size}
      className={`icon flex justify-center align-item-center fade-in hover-scale ${className}`}
      style={{ margin: "0 5px", backgroundColor: bgColor, padding: iconPadding }}
    />
  );

  // If tooltipText is provided, wrap the icon with the Tooltip component
  if (tooltipText) {
    return (
      <Tooltip text={tooltipText} position={tooltipPosition || "top"}>
        {iconElement}
      </Tooltip>
    );
  }

  return iconElement;
};

export default Icon;
