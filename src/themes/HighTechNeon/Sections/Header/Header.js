// src/themes/HighTechNeon/Sections/Header/Header.js
import React from "react";
import "./header.css";
import ThemeControls from "../../Controls/ThemeControls";
import Hamburger from "../../Components/Menu/hamburger/Hamburger";
import Logo from "../../Components/Logos/3dLogo/3dLogo";
import Menu from "../../Components/Menu/Menu/Menu";
import { Link } from "react-router-dom";
import { useMenu } from "../../Components/Menu/MenuContext";  // Updated import

const Header = ({ menuManager, siteSettings }) => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMenu();

  return (
    <>
      <header className="header fade-in-down">
        <div className="header-foot-container header-container flex justify-between item-align-center">
          {/* Left: Logo – clicking it closes the menu */}
          <div className="nav-left logo fif-container flex justify-center item-align-center fade-in">
            <Link to="/" onClick={closeMenu}>
              <Logo
                ContainerClassName="flex justify-center item-align-center logo hover-scale"
                width="45px"
                classname="responsive-logo"
                everdarkLogo={false}
              />
            </Link>
          </div>

          {/* Middle: Theme Controls */}
          <ThemeControls />

          {/* Right: Hamburger */}
          <div className="nav-right fif-container flex justify-center item-align-center">
            <Hamburger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </header>

      {/* Pass the global state to the Menu */}
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
