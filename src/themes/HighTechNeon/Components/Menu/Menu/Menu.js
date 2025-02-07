// src/themes/HighTechNeon/Components/Menu/Menu/Menu.js
import React, { useEffect } from "react";
import "./menu.css";
import MenuItem from "../../MenuItem/MenuItem";
import Footer from "../../../Sections/Footer/Footer";

const Menu = ({ isOpen, toggleMenu, siteSettings, menuManager }) => {
  // Disable body scroll when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup: Ensure the overflow is reset when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const menuItems = menuManager.getHierarchicalMenu("Primary") || [];

  return (
    <div className={`menu-container ${isOpen ? "show" : ""}`}>
      <nav className="menu-content flex justify-center item-align-center header-foot-container">
        <ul className="header-menu-list flex column justify-center item-align-start">
          {menuItems.map((item, index) => {
            const label = item.title;
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

      {/* Footer within the menu overlay */}
      <Footer className={"sticky-footer menu-footer-animate"} menuManager={menuManager} siteSettings={siteSettings} />
    </div>
  );
};

export default Menu;
