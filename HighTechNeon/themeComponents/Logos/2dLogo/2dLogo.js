// 2dLogo.js
import React from "react";
import "./2d-logo.css";
import { useTheme } from "../../../themeControls/ThemeContext"; // Import the ThemeContext

const light2dLogo = `${process.env.PUBLIC_URL}/mylogo2d-white.png`;
const dark2dLogo = `${process.env.PUBLIC_URL}/myLogo2d-black.png`;

const Logo = ({
  width,
  classname = "",
  ContainerClassName = "",
  onClick,
  responsive = false,
}) => {
  const { isLightMode } = useTheme(); // Use the theme context to determine the mode

  // Dynamically calculate height based on width (set a ratio, e.g., height = 0.9 * width)
  const calculatedHeight = width;

  return (
    <div
      className={`flex justify-center item-align-center ${ContainerClassName}`}
    >
      {/* Conditionally apply the dark or light mode logo based on the theme */}
      <img
        src={isLightMode ? dark2dLogo : light2dLogo}
        // src={darkLogo}
        alt={isLightMode ? "Light Mode Logo" : "Dark Mode Logo"}
        onClick={onClick}
        className={`${classname} ${responsive ? "responsive-logo" : ""}`}
        style={{
          height: responsive ? "auto" : calculatedHeight,
          width: responsive ? "100%" : width,
        }}
      />
    </div>
  );
};

export default Logo;
