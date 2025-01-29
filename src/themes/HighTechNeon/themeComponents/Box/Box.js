// Box.js
import React from "react";
import PropTypes from "prop-types";
import "./box.css";
import IntersectionObserverComponent from "../../ScrollAnimations";

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
  maxColumns = 2, // New prop for column control
}) => {
  const boxClass = link
    ? "box-with-link dynamic-hover-border-effect hover-scale"
    : "box-no-link";

  const columnClass = `colmax${maxColumns}`; // Dynamically assign column class (not necessary for every box use)

  const BoxContent = <div>{children}</div>;

  return link ? (
    <IntersectionObserverComponent
      inViewClass={inViewClass}
      outViewClass={outViewClass}
      delayIn={delayIn}
      staggeredAnimation={staggeredAnimation}
      index={index}
      delayBase={delayBase}
      className={`box-wrapper flex wrap ${columnClass}`}
    >
      <a
        href={link}
        className={`box ${boxClass} ${className} flex item-align-center justify-center grow`}
      >
        {children}
      </a>
    </IntersectionObserverComponent>
  ) : (
    <IntersectionObserverComponent
      inViewClass={inViewClass}
      outViewClass={outViewClass}
      delayIn={delayIn}
      staggeredAnimation={staggeredAnimation}
      index={index}
      delayBase={delayBase}
      className={`box-wrapper ${columnClass}`}
    >
      <div className={`box grow ${className} ${boxClass}`}>
      {children}
    </div>
    </IntersectionObserverComponent>
  );
};

Box.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  delayIn: PropTypes.number,
  inViewClass: PropTypes.string,
  outViewClass: PropTypes.string,
  staggeredAnimation: PropTypes.bool,
  index: PropTypes.number,
  delayBase: PropTypes.number,
  maxColumns: PropTypes.oneOf([1, 2, 3, 4]), // Only allow 1-4 columns
};

export default Box;
