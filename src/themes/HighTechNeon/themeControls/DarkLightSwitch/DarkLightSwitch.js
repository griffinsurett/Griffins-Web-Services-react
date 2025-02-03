// DarkLightSwitch.js
import React from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import CircleCheckbox from "../../Components/CircleCheckbox/circle-checkbox";
import { useTheme } from "../ThemeContext";
import "./dark-light-switch.css";

const DarkLightSwitch = () => {
  const { isLightMode, toggleTheme } = useTheme();

  return (
    <div className="fade-in">
      <CircleCheckbox
        id="theme-toggle"
        checked={!isLightMode} // Dark mode is default
        onChange={toggleTheme}
        iconChecked={faMoon}
        iconUnchecked={faSun}
        iconColor={"var(--maintext-color)"}
      />
    </div>
  );
};

export default DarkLightSwitch;
