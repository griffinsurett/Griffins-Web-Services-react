// Header.js
import React from "react";
import "./header.css";
import ThemeControls from "../../themeControls/ThemeControls";
import Hamburger from "./components/hamburger/Hamburger";
import Logo from "../../themeComponents/Logos/3dLogo/3dLogo";

const Header = ({ toggleMenu }) => {
  return (
    <div className="header-observer fade-in-down">
      <header className="header flex justify-center item-align-center">
        <div className="header-foot-container flex justify-between item-align-center">
          <div className="nav-left logo fif-container flex justify-center item-align-center fade-in">
            <a href="/">
              <Logo
                ContainerClassName="flex justify-center item-align-center logo hover-scale"
                width="45px" // Width is set, and height will be 90% of this
                classname="responsive-logo"
                everdarkLogo={false}
              />
            </a>
          </div>
          <ThemeControls />
          <div className="nav-right fif-container flex justify-center item-align-center">
            <Hamburger toggleMenu={toggleMenu} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;