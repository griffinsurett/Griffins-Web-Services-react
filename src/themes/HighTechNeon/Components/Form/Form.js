// src/themes/HighTechNeon/Sections/Contact/Contact1/Form.js
import React from "react";
import Button from "../Buttons/Button";
import "./form.css"; // Use the same styles

/**
 * Form: a reusable <form> wrapper that includes:
 * - method, action, etc. as props
 * - an automatic submit button with `buttonText`
 * - Renders all children (the custom field layout) before the button
 */
const Form = ({
  method = "POST",
  action = "#",
  buttonText = "Submit",
  className = "contact-form top-space bottom-space w50",
  buttonClass,
  children,
  ...props // e.g. onSubmit, autoComplete, etc.
}) => {
  return (
    <form method={method} action={action} className={className} {...props}>
      {/* Render whatever fields (children) are passed in from Contact1 */}
      {children}
      {/* Add the submit button at the end of the form */}
      <Button
        type="submit"
        text={buttonText}
        className={`${buttonClass} p-large`}
      />
    </form>
  );
};

export default Form;
