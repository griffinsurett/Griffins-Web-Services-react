// TextareaField.js
import React from "react";
import PropTypes from "prop-types";
import "./fields.css";
import IntersectionObserverComponent from "../../ScrollAnimations";

const TextareaField = ({
  label,
  name,
  value,
  onChange,
  placeholder = "", // Default value for placeholder
  className,
}) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <IntersectionObserverComponent
        tag="textarea" // Specify the tag as 'textarea'
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${className} dynamic-focus-border-effect`}
        inViewClass="fade-in"
        outViewClass="fade-out"
      />
    </>
  );
};

TextareaField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default TextareaField;
