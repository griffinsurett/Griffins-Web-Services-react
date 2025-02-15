// src/themes/HighTechNeon/themeComponents/ListItem/ListItem.js
import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import Button from "../Buttons/Button"; // Import Button so we can render a link/button
import "./list-item.css";

const ListItem = ({
  hasIcon = false,
  icon,
  title,
  description,
  href,
  hasPage = false,
  slug,
  linkText = "Learn More",
  buttonClass = "",
  ariaLabel = "",
  className,
  titleClasses,
  titleTag: TitleTag = "h3",
  iconPadding,
  isColumnMobile = false,
  isRowMobile = false,
  IconTop = false,
  // NEW: Additional class names for the icon
  iconClass = "",
}) => {
  // Layout classes
  const layoutClass = IconTop ? "column text-left" : "item-align-center";

  // Combine base icon classes with user-provided `iconClass`
  const derivedIconClass = IconTop
    ? `styled-icon dynamic-border-effect hover-scale larger-bottom-space ${iconClass}`
    : `styled-icon dynamic-border-effect hover-scale smaller-right-space ${iconClass}`;

  // Content container class
  const contentClass = IconTop
    ? "flex column item-align-center"
    : "flex column smaller-left-space";

  // Overall listItem class
  const listItemClasses = `${className} list-item flex ${layoutClass} ${
    isColumnMobile && !isRowMobile ? "responsive responsive-center" : ""
  } ${isRowMobile ? "responsive-row left-on-desktop" : ""}`;

  const itemContent = (
    <div className={`${listItemClasses} fade-in`}>
      {hasIcon && icon && (
        <Icon icon={icon} size="1em" className={derivedIconClass} iconPadding={iconPadding} />
      )}
      <div className={contentClass}>
        <TitleTag className={`small-top-space-desktop ${titleClasses}`}>{title}</TitleTag>
        {description && <p className="p-xSmall">{description}</p>}
      </div>
    </div>
  );

  // If an explicit href is provided, wrap the content in an <a>
  if (href) {
    return (
      <a href={href} className="list-item-link">
        {itemContent}
      </a>
    );
  }

  // Otherwise, if the item indicates it has a page, render a button below the content
  return (
    <div className="list-item-wrapper">
      {itemContent}
      {hasPage && slug && (
        <div>
          <Button
            to={slug}
            className={buttonClass}
            ariaLabel={ariaLabel || `See details about ${title}`}
          >
            {linkText}
          </Button>
        </div>
      )}
    </div>
  );
};

ListItem.propTypes = {
  hasIcon: PropTypes.bool,
  icon: PropTypes.object,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  href: PropTypes.string,
  hasPage: PropTypes.bool,
  slug: PropTypes.string,
  linkText: PropTypes.string,
  buttonClass: PropTypes.string,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  titleClasses: PropTypes.string,
  titleTag: PropTypes.string,
  iconPadding: PropTypes.string,
  isColumnMobile: PropTypes.bool,
  isRowMobile: PropTypes.bool,
  IconTop: PropTypes.bool,
  // NEW: Additional icon class
  iconClass: PropTypes.string,
};

export default ListItem;
