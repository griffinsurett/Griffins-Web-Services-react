// Theme/Components/Sections/Contact.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = ({ data }) => {
  if (!data) return <p>No Contact section data available.</p>;

  return (
    <section className="contact-section">
      <h2>{data.heading}</h2>
      <p>{data.paragraph}</p>
      <div className="contact-info">
        {data.contactInfo.map((info, i) => (
          <div key={i} className="contact-item">
            <FontAwesomeIcon icon={info.icon} /> {/* Render the icon */}
            <a href={info.href}>{info.value}</a>
          </div>
        ))}
      </div>
      <form>
        {data.formFields.map((field, i) => (
          <input
            key={i}
            type="text"
            name={field.name}
            placeholder={field.placeholder}
          />
        ))}
        <button type="submit">{data.button.text}</button>
      </form>
    </section>
  );
};

export default Contact;
