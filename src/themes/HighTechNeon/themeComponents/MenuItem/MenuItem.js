// MenuItem.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import IntersectionObserverComponent from "../../ScrollAnimations";
import ListBulletLogo from "../ListBulletImage/ListBulletLogo"; // Import ListBulletLogo
import "./menu-item.css";

const MenuItem = ({
  label,
  href,
  index,
  toggleMenu,
  className,
  logoOnlyOnHover,
  logoSize = "25px",
  labelClass,
  labelElement: LabelElement = "span", // New prop with default element
  hover = true, // New prop to control hover behavior
}) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const element = href ? document.querySelector(href) : null; // Find the target element by `id`
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Align the top of the section
      });
    }
    if (toggleMenu) toggleMenu(); // Close the menu if toggleMenu is provided
  };

  const hoverClass = hover ? "menu-item-hover" : ""; // Add a hover-disable class conditionally

  return (
    <IntersectionObserverComponent
      inViewClass="fade-in"
      outViewClass="fade-out"
      staggeredAnimation={true}
      index={index}
      delayBase={100}
    >
      <li
        className={`menu-item ${href ? "text-shadow-for-dark-hover" : ""} ${hoverClass} ${className}`}
        onMouseEnter={() => hover && setHovered(true)} // Hover logic only if hover is true
        onMouseLeave={() => hover && setHovered(false)} // Hover logic only if hover is true
      >
        <div className="menu-item-content flex item-align-center">
          {/* Conditionally show logo based on hover or always */}
          {(logoOnlyOnHover ? hovered : true) && <ListBulletLogo size={logoSize} />}
          {href ? (
            <a href={href} className="menu-link" onClick={handleClick}>
              <LabelElement className={labelClass}>{label}</LabelElement>
            </a>
          ) : (
            <LabelElement className={`${labelClass} menu-text`}>{label}</LabelElement>
          )}
        </div>
      </li>
    </IntersectionObserverComponent>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  index: PropTypes.number.isRequired,
  toggleMenu: PropTypes.func,
  className: PropTypes.string,
  logoOnlyOnHover: PropTypes.bool, // New prop
  logoSize: PropTypes.string, // Size for the logo
  labelClass: PropTypes.string, // Custom class for the label
  labelElement: PropTypes.string, // Element type for the label (e.g., h4, p, span)
  hover: PropTypes.bool, // New prop to enable or disable hover
};

MenuItem.defaultProps = {
  className: "",
  href: null,
  toggleMenu: null,
  logoOnlyOnHover: false, // Default to show logo always
  labelClass: "",
  labelElement: "span", // Default label element
  hover: true, // Default to enable hover
};

export default MenuItem;
