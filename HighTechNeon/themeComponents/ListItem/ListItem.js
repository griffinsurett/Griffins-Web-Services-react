// ListItem.js
import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import "./list-item.css";

const ListItem = ({
  hasIcon = false,
  icon,
  title,
  description,
  href,
  className,
  titleClasses,
  titleTag: TitleTag = "h3",
  iconPadding,
  isColumnMobile = false,
  isRowMobile = false,
  IconTop = false,
}) => {
  const layoutClass = IconTop ? "column text-left" : "item-align-center";
  const iconClass = IconTop
    ? "styled-icon dynamic-border-effect hover-scale larger-bottom-space"
    : "styled-icon dynamic-border-effect hover-scale smaller-right-space";
  const contentClass = IconTop
    ? "flex column item-align-center"
    : "flex column smaller-left-space";

  const listItemClasses = `${className} list-item flex ${layoutClass} ${
    isColumnMobile && !isRowMobile ? "responsive responsive-center" : ""
  } ${isRowMobile ? "responsive-row left-on-desktop" : ""}`;

  const itemContent = (
    <div className={`${listItemClasses} fade-in`}>
      {hasIcon && icon && (
        <Icon icon={icon} size="sm" className={iconClass} iconPadding={iconPadding} />
      )}
      <div className={contentClass}>
        <TitleTag className={`small-top-space-desktop ${titleClasses}`}>{title}</TitleTag>
        {description && <p className="p-xSmall">{description}</p>}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="list-item-link">
        {itemContent}
      </a>
    );
  }

  return itemContent;
};

ListItem.propTypes = {
  hasIcon: PropTypes.bool,
  icon: PropTypes.object,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  titleClasses: PropTypes.string,
  titleTag: PropTypes.string,
  iconPadding: PropTypes.string,
  isColumnMobile: PropTypes.bool,
  isRowMobile: PropTypes.bool,
  IconTop: PropTypes.bool,
};

export default ListItem;