// primary-color-changer.js
import React, { useState, useEffect, useRef } from "react";
import CircleCheckbox from "../../themeComponents/CircleCheckbox/circle-checkbox";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { setCookie, getCookie } from "../../../../components/cookies/cookies"; // Ensure the path is correct
import "./primary-color-changer.css";
import IntersectionObserverComponent from "../../ScrollAnimations";

const PrimaryColorChanger = () => {
  const defaultColor = "#5e76f6"; // Default color
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [darkPrimaryColor, setDarkPrimaryColor] = useState(() => {
    // Load the initial color from the cookie or use the default
    const savedColor = getCookie("primaryColor");
    return savedColor || defaultColor;
  });
  const [isChecked, setIsChecked] = useState(false);
  const modalRef = useRef(null);

  // Define colors independently from the selected color
  const colors = [
    "#F5004F",
    "#7C00FE",
    "#FF5F1F",
    "#FFAF00",
    "#39ff14",
    "#01dada",
    "#FF0000",
    "#ff13f0",
    "#0096FF",
    "#8e0fed",
  ]; // Array of colors excluding the default

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setShowColorPicker(!isChecked);
  };

  const handleColorChange = (color) => {
    setDarkPrimaryColor(color);
    setCookie("primaryColor", color, 30); // Save color preference in cookie
    document.documentElement.style.setProperty("--darkBG-primary-color", color); // Update the CSS variable
    setShowColorPicker(false); // Close the modal after selecting a color
    setIsChecked(false); // Uncheck the checkbox
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowColorPicker(false);
      setIsChecked(false);
    }
  };

  useEffect(() => {
    if (showColorPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showColorPicker]);

  // Set the CSS variable on mount
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--darkBG-primary-color",
      darkPrimaryColor
    );
  }, [darkPrimaryColor]);

  return (
    <div className="primary-color-changer" ref={modalRef}>
      <IntersectionObserverComponent inViewClass="fade-in" outViewClass="fade-out">
      <CircleCheckbox
        id="colorCheckbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        iconChecked={faDroplet}
        iconUnchecked={faDroplet}
        iconColor={"var(--darkBG-primary-color)"}
      />
      </IntersectionObserverComponent>
      {showColorPicker && (
        <div className="color-picker-modal">
          {/* Display the default color button */}
          <button
            className={`color-button ${
              darkPrimaryColor === defaultColor ? "current-color" : ""
            }`}
            style={{ backgroundColor: defaultColor }}
            onClick={() => handleColorChange(defaultColor)} // Handle default color change
          ></button>
          {/* Display the other colors */}
          {colors.map((color, index) => (
            <button
              key={index}
              className={`color-button ${
                color === darkPrimaryColor ? "current-color" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PrimaryColorChanger;
