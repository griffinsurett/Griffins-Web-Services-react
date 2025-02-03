// ListStyleImage.js
import React from "react";
import Logo from "../Logos/2dLogo/2dLogo";
import "./list-style-image.css"; // Import relevant styles

const ListStyleImage = ({ items }) => {
  return (
    <ul className="custom-list">
      {items.map((item, index) => (
        <li key={index} className="custom-list-item">
          <span className="list-logo">
            <Logo width="24px" height="24px" /> {/* Adjust size as needed */}
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListStyleImage;
