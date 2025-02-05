// primary-color-changer.js
import React, { useState, useEffect, useRef } from "react";
import CircleCheckbox from "../../Components/CircleCheckbox/circle-checkbox";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { setCookie, getCookie } from "../../../../components/cookies/cookies";
import "./primary-color-changer.css";

const PrimaryColorChanger = () => {
  const defaultColor = "#5e76f6"; // Default color
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [darkPrimaryColor, setDarkPrimaryColor] = useState(() => {
    const savedColor = getCookie("primaryColor");
    return savedColor || defaultColor;
  });
  const [isChecked, setIsChecked] = useState(false);
  const modalRef = useRef(null);

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
  ];

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setShowColorPicker(!isChecked);
  };

  const handleColorChange = (color) => {
    setDarkPrimaryColor(color);
    setCookie("primaryColor", color, 30);
    document.documentElement.style.setProperty("--darkBG-primary-color", color);
    setShowColorPicker(false);
    setIsChecked(false);
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

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--darkBG-primary-color",
      darkPrimaryColor
    );
  }, [darkPrimaryColor]);

  return (
    <div className="primary-color-changer" ref={modalRef}>
      <div className="fade-in">
        <CircleCheckbox
          id="colorCheckbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          iconChecked={faDroplet}
          iconUnchecked={faDroplet}
          iconColor={"var(--darkBG-primary-color)"}
        />
      </div>

      {showColorPicker && (
        <div className="color-picker-modal">
          {/* Default color button */}
          <button
            className={`color-button ${
              darkPrimaryColor === defaultColor ? "current-color" : ""
            }`}
            style={{ backgroundColor: defaultColor }}
            onClick={() => handleColorChange(defaultColor)}
          />
          {/* Other colors */}
          {colors.map((color, index) => (
            <button
              key={index}
              className={`color-button ${
                color === darkPrimaryColor ? "current-color" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PrimaryColorChanger;
