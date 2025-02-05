// Preloader.js
import React from "react";
import Logo from "../Logos/2dLogo/2dLogo";
import "./preloader.css"; // Ensure this file is imported for styles

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="spinner">
        <Logo width="60px" />
      </div>
    </div>
  );
};

export default Preloader;
