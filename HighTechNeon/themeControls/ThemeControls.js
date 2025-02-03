// theme-controls.js
import "./theme-controls.css";
import PrimaryColorChanger from "./PrimaryColorChanger/PrimaryColorChanger";
import DarkLightSwitch from "./DarkLightSwitch/DarkLightSwitch";

const ThemeControls = () => {
  return (
    <div className="theme-controls d-flex justify-center item-align-center">
      <DarkLightSwitch />
      <PrimaryColorChanger />
    </div>
  );
};

export default ThemeControls;
