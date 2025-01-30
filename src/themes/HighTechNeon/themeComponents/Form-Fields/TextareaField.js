// TextareaField.js
import React from "react";
import PropTypes from "prop-types";
import "./fields.css";

const TextareaField = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  className,
}) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${className} dynamic-focus-border-effect fade-in`}
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
  className: PropTypes.string,
};

export default TextareaField;