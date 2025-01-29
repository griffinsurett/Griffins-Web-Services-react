// Menu.js
import React from "react";
import "./menu.css";
import MenuItem from "../../../../themeComponents/MenuItem/MenuItem"; // Import the reusable MenuItem component

const Menu = ({ isOpen, toggleMenu }) => {
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className={`menu-container ${isOpen ? "show" : ""}`}>
      <nav className="menu-content flex justify-center item-align-center header-foot-container">
        <ul className="header-menu-list flex column justify-center item-align-start">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              label={item.label}
              href={item.href}
              index={index}
              toggleMenu={toggleMenu}
              className={"navMenu menu-fontSize"} // Pass the custom class
              logoOnlyOnHover={true} 
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
