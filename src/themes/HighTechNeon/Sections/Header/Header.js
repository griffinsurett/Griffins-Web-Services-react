// src/themes/HighTechNeon/Sections/Header/Header.js
import React, { useState, useEffect } from "react";
import "./header.css";
import ThemeControls from "../../Controls/ThemeControls";
import Hamburger from "./components/hamburger/Hamburger";
import Logo from "../../Components/Logos/3dLogo/3dLogo";
import Menu from "./components/Menu/Menu";

const Header = ({ menuManager, siteSettings }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="header fade-in-down">
        <div className="header-foot-container header-container flex justify-between item-align-center">
          {/* Left: Logo */}
          <div className="nav-left logo fif-container flex justify-center item-align-center fade-in">
            <a href="/">
              <Logo
                ContainerClassName="flex justify-center item-align-center logo hover-scale"
                width="45px"
                classname="responsive-logo"
                everdarkLogo={false}
              />
            </a>
          </div>

          {/* Middle: Theme Controls */}
          <ThemeControls />

          {/* Right: Hamburger */}
          <div className="nav-right fif-container flex justify-center item-align-center">
            <Hamburger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </header>

      {/* 
        1) Pass menuManager + isOpen/toggleMenu to our <Menu> so it can 
           fetch "Primary" from the CMS. 
      */}
      <Menu
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        menuManager={menuManager}
        siteSettings={siteSettings}
      />
    </>
  );
};

export default Header;
