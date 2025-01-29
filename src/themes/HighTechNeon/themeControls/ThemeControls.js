// theme-controls.js
import "./theme-controls.css";
import CircleCheckbox from "../themeComponents/CircleCheckbox/circle-checkbox";
import PrimaryColorChanger from "./PrimaryColorChanger/PrimaryColorChanger";
import DarkLightSwitch from "./DarkLightSwitch/DarkLightSwitch";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import IntersectionObserverComponent from "../ScrollAnimations";

const ThemeControls = () => {
  return (
    <div className="theme-controls d-flex justify-center item-align-center">
      <DarkLightSwitch />
      <PrimaryColorChanger />
    </div>
  );
};

export default ThemeControls;
