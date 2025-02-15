// src/themes/HighTechNeon/Components/ContactForm/ContactForm.js
import React from 'react';
import Form from '../../../Components/Form/Form';
import InputField from '../../../Components/Inputs/InputField';
import TextareaField from '../../../Components/Inputs/TextareaField';
import './contact-form.css'; // Optionally create and adjust this CSS file for custom styles
import { useLocation } from "react-router-dom"; // Import useLocation

const ContactForm = () => {
    const location = useLocation(); // Get the current route
  return (
    <Form
      method="POST"
      action="https://formspree.io/f/mjkgojyo"  // <-- Replace with your actual form endpoint
      autoComplete="on"
      buttonText="Submit"
      className="contact-form"
    >
    <InputField type="hidden" name="pageUrl" value={location.pathname} />
      <div className="form-group">
        <div className="name-fields">
          <InputField
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input-field"
          />
          <InputField
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input-field"
          />
        </div>
        <div className="contact-fields">
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
          />
          <InputField
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="input-field"
          />
        </div>
        <div className="subject-message">
          <InputField
            type="text"
            name="subject"
            placeholder="Subject"
            className="input-field"
          />
          <TextareaField
            name="message"
            placeholder="Message"
            className="textarea-field"
          />
        </div>
      </div>
    </Form>
  );
};

export default ContactForm;
