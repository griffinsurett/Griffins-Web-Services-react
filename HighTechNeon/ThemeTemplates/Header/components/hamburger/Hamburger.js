// Hamburger.js
import React from "react";
import "./hamburger.css";

const Hamburger = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="menu spin-in">
      <input
        type="checkbox"
        id="hamburger-toggle"
        className="hamburger-toggle"
        hidden
        checked={isMenuOpen}
        onChange={toggleMenu}
      />
      <label htmlFor="hamburger-toggle" className="hamburger-menu">
        <span className="line big"></span>
        <span className="line little"></span>
        <span className="line big"></span>
      </label>
    </div>
  );
};

export default Hamburger;
