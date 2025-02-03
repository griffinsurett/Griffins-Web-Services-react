// src/themes/HighTechNeon/Components/Accordion/Accordion.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./accordion.css";

const Accordion = ({ items }) => {
  // Keep track of which item index is currently open (null if none)
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle logic: if you click the same item, close it; otherwise open the new item
  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion fade-in">
      {items.map((item, index) => {
        const isOpen = index === activeIndex;
        return (
          <div
            key={index}
            className={`accordion-item dynamic-hover-border-effect dynamic-active-border-effect ${
              isOpen ? "active" : ""
            }`}
          >
            <div
              className="accordion-header"
              onClick={() => handleToggle(index)}
            >
              <h6 className="accordion-title">{item.title}</h6>
              <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} size="xs" />
            </div>
            {isOpen && (
              <div className="accordion-content">
                {item.description}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
