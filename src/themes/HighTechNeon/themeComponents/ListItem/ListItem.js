// ListItem.js
import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon"; // Adjust the path as necessary
import IntersectionObserverComponent from "../../ScrollAnimations";
import "./list-item.css";

const ListItem = ({
  hasIcon = false,
  icon,
  title,
  description,
  href,
  className,
  titleClasses,
  titleTag: TitleTag = "h3", // Default to 'h3' if not provided
  iconPadding, // Add iconPadding prop
  isColumnMobile = false, // For column layout on mobile
  isRowMobile = false, // For row layout on mobile
  IconTop = false, // Position icon on top
}) => {
  // Determine additional classes based on props
  const layoutClass = IconTop
    ? "column text-left"
    : "item-align-center"; // Use global `column` or `row` class

  const iconClass = IconTop
    ? "styled-icon dynamic-border-effect hover-scale larger-bottom-space"
    : "styled-icon dynamic-border-effect hover-scale smaller-right-space";

  const contentClass = IconTop
    ? "flex column item-align-center"
    : "flex column smaller-left-space";

  // Combine class names for the main container
  const listItemClasses = `${className} list-item flex ${layoutClass} ${
    isColumnMobile && !isRowMobile ? "responsive responsive-center" : ""
  } ${isRowMobile ? "responsive-row left-on-desktop" : ""}`;

  // Component structure
  const ListItemContent = (
    <IntersectionObserverComponent
      className={`${listItemClasses} `}
      inViewClass="fade-in"
      outViewClass="fade-out"
    >
      {hasIcon && icon && (
        <Icon
          icon={icon}
          size="sm"
          className={iconClass} // Dynamically assigned class
          iconPadding={iconPadding} // Pass iconPadding to Icon component
        />
      )}
      <div className={contentClass}>
        <TitleTag className={`small-top-space-desktop ${titleClasses}`}>{title}</TitleTag>
        {description && <p className="p-xSmall">{description}</p>}
      </div>
    </IntersectionObserverComponent>
  );

  // Return structure
  return href ? (
    <a href={href} className="list-item-link">
      {ListItemContent}
    </a>
  ) : (
    ListItemContent
  );
};

ListItem.propTypes = {
  hasIcon: PropTypes.bool,
  icon: PropTypes.object, // FontAwesomeIcon or similar icon
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  titleClasses: PropTypes.string,
  titleTag: PropTypes.string, // Prop type for the title tag
  iconPadding: PropTypes.string, // Add prop type for iconPadding
  isColumnMobile: PropTypes.bool, // For column layout on mobile
  isRowMobile: PropTypes.bool, // For row layout on mobile
  IconTop: PropTypes.bool, // For positioning icon on top
};

export default ListItem;
