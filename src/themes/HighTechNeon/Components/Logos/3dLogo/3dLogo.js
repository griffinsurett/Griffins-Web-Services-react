// 3dLogo.js
import React from "react";
import "./3d-logo.css";
import { useTheme } from "../../../Controls/ThemeContext"; // Import the ThemeContext

const light3dLogo = `${process.env.PUBLIC_URL}/mylogo3d.png`;
const dark3dLogo = `${process.env.PUBLIC_URL}/mylogo3d-black.png`;

const Logo = ({
  width,
  classname = "",
  ContainerClassName = "",
  onClick,
  responsive = false,
  everdarkLogo = false, // New parameter for always dark logo
  everlightLogo = false, // New parameter for always light logo
}) => {
  const { isLightMode } = useTheme(); // Use the theme context to determine the mode

  // Dynamically calculate height based on width (set a ratio, e.g., height = 0.9 * width)
  const calculatedHeight = `${parseFloat(width) * 1.15}px`;

  // Determine which logo to display based on everdarkLogo, everlightLogo, or theme mode
  const logoSrc = everdarkLogo
    ? dark3dLogo // Always dark logo if everdarkLogo is true
    : everlightLogo
    ? light3dLogo // Always light logo if everlightLogo is true
    : isLightMode
    ? dark3dLogo // Light mode logo (default behavior)
    : light3dLogo; // Dark mode logo (default behavior)

  return (
    <div
      className={`flex justify-center item-align-center ${ContainerClassName}`}
    >
      <img
        src={logoSrc} // Use the determined logo source
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
