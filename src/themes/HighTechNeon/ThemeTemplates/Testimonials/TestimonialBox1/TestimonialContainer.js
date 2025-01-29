// TestimonialCarousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialBox from "./Box/TestimonialBox"; // Import the TestimonialBox component

const TestimonialCarousel = ({ testimonials }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1069, // Adjust for screen widths of 768px and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} id='testimonialSlider'>
      {testimonials.map((testimonial, index) => (
        <TestimonialBox
          key={index}
          quote={testimonial.quote}
          name={testimonial.name}
          position={testimonial.position}
        />
      ))}
    </Slider>
  );
};

export default TestimonialCarousel;