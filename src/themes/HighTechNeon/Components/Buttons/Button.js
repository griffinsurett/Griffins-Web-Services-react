// Button.js
import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Button = ({
  type,
  text,
  onClick,
  className,
  buttonId,
  buttonLink,
}) => {
  const buttonElement = (
    <button
      type={type}
      className={`styled-button button-text dynamic-border-effect hover-scale ${className}`}
      id={buttonId}
      onClick={onClick}
    >
      {text}
    </button>
  );

  if (buttonLink) {
    // If the link starts with "/", assume it’s internal and use <Link>
    if (buttonLink.startsWith("/")) {
      return (
        <Link to={buttonLink} onClick={onClick}>
          {buttonElement}
        </Link>
      );
    } 
    else {
      // Otherwise, use a normal <a> element
      return (
        <a href={buttonLink} onClick={onClick}>
          {buttonElement}
        </a>
      );
    }
  }
  return buttonElement;
};

export default Button;
