// src/themes/HighTechNeon/Components/ItemsTemplate/ItemsTemplate.js
import React from "react";
import PropTypes from "prop-types";
import "./items-template.css"; // We'll use this file for our column and gap styles

const ItemsTemplate = ({
  items,
  ItemComponent,
  className = "flex",
  emptyComponent = null,
  maxColumns = 3,   // already added for columns
  gap = "20px",     // new gap prop with a default value of 20px
  allowWrap = true, // NEW: by default items will wrap
  ...rest
}) => {
  // Step 1: Normalize the items to an array
  let itemsArray = [];
  if (!items) {
    itemsArray = [];
  } else if (Array.isArray(items)) {
    itemsArray = items;
  } else if (items.data && Array.isArray(items.data)) {
    itemsArray = items.data;
  } else if (typeof items === "object") {
    itemsArray = [items];
  }

  // Step 2: If there are no items, return the fallback component
  if (itemsArray.length === 0) {
    return emptyComponent ? (
      <div className={className} {...rest} role="alert">
        {emptyComponent}
      </div>
    ) : (
      <div className={className} {...rest} role="alert">
        <p>No items available at this time.</p>
      </div>
    );
  }

  // Step 3: Render each item within a wrapper.
  // If allowWrap is true, add the "wrap" class and use the "colmax{maxColumns}" class.
  // Otherwise, do not add wrapping and prevent flex shrinking.
  return (
    <ul
      className={`items-template-container ${allowWrap ? "wrap" : ""} ${className}`}
      style={{ gap }}  // The gap is applied here
      {...rest}
    >
      {itemsArray.map((item, index) => (
        <div
          key={index}
          className={allowWrap ? `colmax${maxColumns}` : ""}
          style={!allowWrap ? { flex: "none" } : {}}
        >
          <ItemComponent {...item} itemIndex={index} />
        </div>
      ))}
    </ul>
  );
};

ItemsTemplate.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]).isRequired,
  ItemComponent: PropTypes.elementType.isRequired, // A component that renders each item
  className: PropTypes.string,
  emptyComponent: PropTypes.node,
  maxColumns: PropTypes.oneOf([1, 2, 3, 4]),
  gap: PropTypes.string, // The gap between individual items (e.g., "20px", "1rem", etc.)
  allowWrap: PropTypes.bool, // When false, items will not wrap (useful for fixed-row layouts)
};

export default ItemsTemplate;