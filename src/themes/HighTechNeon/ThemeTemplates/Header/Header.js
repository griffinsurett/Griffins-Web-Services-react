// header.js
import React from "react";
import "./header.css";
import ThemeControls from "../../themeControls/ThemeControls";
import Hamburger from "./components/hamburger/Hamburger";
import Logo from "../../themeComponents/Logos/3dLogo/3dLogo";
import IntersectionObserverComponent from "../../ScrollAnimations";
const lightLogo = `${process.env.PUBLIC_URL}/myLogo3d.png`;
const darkLogo = `${process.env.PUBLIC_URL}/myLogo3d-black.png`;

const Header = ({ toggleMenu }) => {
  return (
    <IntersectionObserverComponent inViewClass="fade-in-down" delayIn={1500} outViewClass="fade-out" className={"header-observer"}>
    <header className="header flex justify-center item-align-center">
      <div className="header-foot-container flex justify-between item-align-center">
        <div className="nav-left logo fif-container flex justify-center item-align-center">
        <IntersectionObserverComponent inViewClass="fade-in" outViewClass="fade-out">
          <a href="/">
            <Logo
              ContainerClassName="flex justify-center item-align-center logo hover-scale"
              width="45px" // Width is set, and height will be 90% of this
              classname="responsive-logo"
              everdarkLogo={false}
            />
          </a>
          </IntersectionObserverComponent>
        </div>
        <ThemeControls />
        <div className="nav-right fif-container flex justify-center item-align-center">
          <Hamburger toggleMenu={toggleMenu} /> {/* Pass toggleMenu prop */}
        </div>
      </div>
    </header>
    </IntersectionObserverComponent>
  );
};

export default Header;
