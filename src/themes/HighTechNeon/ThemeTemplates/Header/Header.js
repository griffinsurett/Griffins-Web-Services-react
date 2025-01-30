// Header.js
import React, { useState } from "react";
import "./header.css";
import ThemeControls from "../../themeControls/ThemeControls";
import Hamburger from "./components/hamburger/Hamburger";
import Menu from "./components/Menu/Menu";  // If you're rendering the menu inside the header
import Logo from "../../themeComponents/Logos/3dLogo/3dLogo";

const Header = () => {
  // 1) Local state in the Header
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2) Toggling function
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="header-observer fade-in-down">
      <header className="header flex justify-center item-align-center">
        <div className="header-foot-container flex justify-between item-align-center">

          {/* Left: Logo */}
          <div className="nav-left logo fif-container flex justify-center item-align-center fade-in">
            <a href="/">
              <Logo
                ContainerClassName="flex justify-center item-align-center logo hover-scale"
                width="45px"
                classname="responsive-logo"
              />
            </a>
          </div>

          {/* Center: Theme Controls */}
          <ThemeControls />

          {/* Right: Hamburger (pass down isMenuOpen & toggleMenu) */}
          <div className="nav-right fif-container flex justify-center item-align-center">
            <Hamburger 
              isMenuOpen={isMenuOpen} 
              toggleMenu={toggleMenu} 
            />
          </div>
        </div>
      </header>

      {/* 3) Render the Menu, also passing isMenuOpen & toggleMenu */}
      <Menu 
        isOpen={isMenuOpen} 
        toggleMenu={toggleMenu} 
      />
    </div>
  );
};

export default Header;
