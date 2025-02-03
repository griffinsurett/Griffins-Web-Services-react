// Box.js
import React from "react";
import PropTypes from "prop-types";
import "./box.css";

const Box = ({
  className,
  children,
  link,
  delayIn = 0,
  inViewClass = "scale-in",
  outViewClass = "scale-out",
  staggeredAnimation = true,
  index = 0,
  delayBase = 150,
}) => {
  const boxClass = link
    ? "box-with-link dynamic-hover-border-effect hover-scale"
    : "box-no-link";

  if (link) {
    return (
      <div className={`box-wrapper flex wrap ${inViewClass}`}>
        <a
          href={link}
          className={`box ${boxClass} ${className} flex item-align-center justify-center grow`}
        >
          {children}
        </a>
      </div>
    );
  }

  return (
    <div className={`${inViewClass} box-wrapper`}>
      <div className={`box grow ${className} ${boxClass}`}>
        {children}
      </div>
    </div>
  );
};

Box.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
  delayIn: PropTypes.number,
  inViewClass: PropTypes.string,
  outViewClass: PropTypes.string,
  staggeredAnimation: PropTypes.bool,
  index: PropTypes.number,
  delayBase: PropTypes.number,
};

export default Box;