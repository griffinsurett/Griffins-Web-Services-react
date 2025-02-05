// Box.js
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./box.css";

const Box = ({
  className,
  children,
  link,
  inViewClass = "scale-in",
  outViewClass = "scale-out",
}) => {
  const boxClass = link
    ? "box-with-link dynamic-hover-border-effect hover-scale"
    : "box-no-link";

  if (link) {
    // Determine if the link is internal (starts with "/")
    const isInternal = link.startsWith("/");
    const LinkComponent = isInternal ? Link : "a";
    // Use 'to' if internal, or 'href' if external
    const linkProps = isInternal ? { to: link } : { href: link };

    return (
      <div className={`box-wrapper flex wrap ${inViewClass}`}>
        <LinkComponent
          {...linkProps}
          className={`box ${boxClass} ${className} flex item-align-center justify-center grow`}
        >
          {children}
        </LinkComponent>
      </div>
    );
  }

  return (
    <div className={`${inViewClass} box-wrapper box-gap`}>
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
  inViewClass: PropTypes.string,
  outViewClass: PropTypes.string,
  // The following props can be used if needed by a parent component
  delayIn: PropTypes.number,
  staggeredAnimation: PropTypes.bool,
  index: PropTypes.number,
  delayBase: PropTypes.number,
};

export default Box;
