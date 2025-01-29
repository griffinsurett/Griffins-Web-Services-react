// DarkLightSwitch.js
import React from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import CircleCheckbox from "../../themeComponents/CircleCheckbox/circle-checkbox";
import { useTheme } from "../ThemeContext";
import "./dark-light-switch.css";
import IntersectionObserverComponent from "../../ScrollAnimations";

const DarkLightSwitch = () => {
  const { isLightMode, toggleTheme } = useTheme();

  return (
    <IntersectionObserverComponent inViewClass="fade-in" outViewClass="fade-out">
      <CircleCheckbox
        id="theme-toggle"
        checked={!isLightMode} // Dark mode is default
        onChange={toggleTheme}
        iconChecked={faMoon}
        iconUnchecked={faSun}
        iconColor={"var(--maintext-color)"}
      />
    </IntersectionObserverComponent>
  );
};

export default DarkLightSwitch;
