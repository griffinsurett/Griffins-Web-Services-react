// MenuItem.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import ListBulletLogo from "../ListBulletImage/ListBulletLogo";
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
  labelElement: LabelElement = "span",
  hover = true,
}) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = (e) => {
    // Optionally scroll if an element matching the href selector exists
    let element = null;
    try {
      element = href ? document.querySelector(href) : null;
    } catch (error) {
      element = null;
    }
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Always call toggleMenu so the menu closes on click
    if (toggleMenu) {
      toggleMenu();
    }
  };

  const hoverClass = hover ? "menu-item-hover" : "";

  return (
    <li
      className={`menu-item fade-in ${href ? "text-shadow-for-dark-hover" : ""} ${hoverClass} ${className}`}
      onMouseEnter={() => hover && setHovered(true)}
      onMouseLeave={() => hover && setHovered(false)}
    >
      <div className="menu-item-content flex item-align-center">
        {(logoOnlyOnHover ? hovered : true) && <ListBulletLogo size={logoSize} />}
        {href ? (
          // Use Link for internal navigation; toggleMenu is called on click.
          <Link to={href} className="menu-link" onClick={handleClick}>
            <LabelElement className={labelClass}>{label}</LabelElement>
          </Link>
        ) : (
          <LabelElement className={`${labelClass} menu-text`}>{label}</LabelElement>
        )}
      </div>
    </li>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  index: PropTypes.number.isRequired,
  toggleMenu: PropTypes.func,
  className: PropTypes.string,
  logoOnlyOnHover: PropTypes.bool,
  logoSize: PropTypes.string,
  labelClass: PropTypes.string,
  labelElement: PropTypes.string,
  hover: PropTypes.bool,
};

MenuItem.defaultProps = {
  className: "",
  href: null,
  toggleMenu: null,
  logoOnlyOnHover: false,
  labelClass: "",
  labelElement: "span",
  hover: true,
};

export default MenuItem;