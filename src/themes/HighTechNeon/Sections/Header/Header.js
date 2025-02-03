// Header.js
import React, { useState, useEffect } from "react";
import "./header.css";
import ThemeControls from "../../themeControls/ThemeControls";
import Hamburger from "./components/hamburger/Hamburger";
import Logo from "../../Components/Logos/3dLogo/3dLogo";
import Menu from "./components/Menu/Menu";

const Header = () => {
  // 1) Local state for the hamburger open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2) Toggling function
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // 3) Body scroll lock if menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* The visual container for the header */}
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

      {/* 4) The Menu overlay is rendered below the header, but inside the same parent component */}
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;
