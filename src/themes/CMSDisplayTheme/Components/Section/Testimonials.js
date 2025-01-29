// Theme/Components/Sections/Testimonials.js
import React from "react";
import { Link } from "react-router-dom";

const Testimonials = ({ data }) => {
  if (!data) return <p>No Testimonials section data available.</p>;

  return (
    <section className="testimonials-section">
      <h2>{data.heading}</h2>
      <div className="testimonials-list">
        {data.items.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <blockquote>{`"${testimonial.quote}"`}</blockquote>
            <p>
              <strong>{testimonial.name}</strong>, {testimonial.position}
            </p>
            {testimonial.link && (
              <Link to={testimonial.link} className="testimonial-link">
                Read More
              </Link>
            )}
          </div>
        ))}
      </div>
      {data.link && (
        <div className="section-link">
          <Link to={data.link}>View All Testimonials</Link>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
