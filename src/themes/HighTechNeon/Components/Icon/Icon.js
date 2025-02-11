// Updated: src/components/Icon/Icon.js
import React from "react";
import Tooltip from "../Tooltip/Tooltip";
import "./Icon.css";

const Icon = ({
  icon,
  size = "1em", // react-icons typically use "1em" as a default size
  className = "",
  bgColor,
  iconPadding = "18px",
  tooltipText,
  tooltipPosition,
  ...rest
}) => {
  if (!icon) return null;

  // 'icon' is now a react-icons component (a function)
  const IconComponent = icon;

  const renderedIcon = (
    <span
      className={`icon flex justify-center align-item-center fade-in hover-scale ${className}`}
      style={{ margin: "0 5px", backgroundColor: bgColor, padding: iconPadding }}
      {...rest}
    >
      <IconComponent size={size} />
    </span>
  );

  if (tooltipText) {
    return (
      <Tooltip text={tooltipText} position={tooltipPosition || "top"}>
        {renderedIcon}
      </Tooltip>
    );
  }

  return renderedIcon;
};

export default Icon;
