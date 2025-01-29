// InputField.js
import React from "react";
import PropTypes from "prop-types";
import "./fields.css";
import IntersectionObserverComponent from "../../ScrollAnimations";

const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  className,
}) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <IntersectionObserverComponent
        tag="input"
        type={type}
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

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default InputField;
