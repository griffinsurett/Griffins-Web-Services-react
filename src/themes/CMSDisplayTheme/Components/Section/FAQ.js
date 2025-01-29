// Theme/Components/Sections/FAQ.js
import React, { useState } from "react";

const FAQ = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  if (!data) return <p>No FAQ section data available.</p>;

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>{data.heading}</h2>
      <p>{data.paragraph}</p>
      <div className="faq-list">
        {data.items.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              onClick={() => toggleFAQ(index)}
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
            >
              {item.title}
            </button>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
