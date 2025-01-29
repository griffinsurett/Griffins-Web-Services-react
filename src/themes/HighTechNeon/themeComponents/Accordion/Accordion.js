// Accordion.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./accordion.css";
import IntersectionObserverComponent from "../../ScrollAnimations";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`accordion-item dynamic-hover-border-effect dynamic-active-border-effect ${
        isOpen ? "active" : ""
      }`}
    >
      <div className="accordion-header" onClick={toggleAccordion}>
        <h6 className="accordion-title">{title}</h6>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} size="xs" />
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

// Accept items as props
const Accordion = ({ items }) => {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <IntersectionObserverComponent
          key={index} // Key applied here
          inViewClass="fade-in"
          outViewClass="fade-out"
        >
          <AccordionItem title={item.title} content={item.content} />
        </IntersectionObserverComponent>
      ))}
    </div>
  );
};

export default Accordion;