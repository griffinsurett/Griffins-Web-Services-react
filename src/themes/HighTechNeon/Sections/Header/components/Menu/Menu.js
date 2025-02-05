// Menu.js
import React from "react";
import "./menu.css";
import MenuItem from "../../../../Components/MenuItem/MenuItem";
import Footer from "../../../Footer/Footer";

const Menu = ({ isOpen, toggleMenu, siteSettings, menuManager }) => {

const menuItems = menuManager.getHierarchicalMenu("Primary") || [];

  return (
    <div className={`menu-container ${isOpen ? "show" : ""}`}>
      <nav className="menu-content flex justify-center item-align-center header-foot-container">
        <ul className="header-menu-list flex column justify-center item-align-start">
          {menuItems.map((item, index) => {
            const label = item.title;
            // if item has a `slug`, we might do `href={item.slug}` 
            // or use item.link if you prefer.
            const href = item.slug || item.link || "#";

            return (
              <MenuItem
                key={index}
                label={label}
                href={href}
                toggleMenu={toggleMenu}
                className="navMenu menu-fontSize"
                logoOnlyOnHover
                index={index}
              />
            );
          })}
        </ul>
      </nav>

      {/* 
        We still show the <Footer> in the menu overlay 
        but pass it the same 'menuManager' so that 
        if we want, it can fetch the same or a different menu 
      */}
      <Footer className={"sticky-footer menu-footer-animate"} menuManager={menuManager} siteSettings={siteSettings} />
    </div>
  );
};

export default Menu;

