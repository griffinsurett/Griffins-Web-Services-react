// src/themes/HighTechNeon/Components/ItemsTemplate.js
import React from "react";
import PropTypes from "prop-types";
import "./items-template.css"; // We'll create a small stylesheet

const ItemsTemplate = ({
  items,
  ItemComponent,
  className = "flex",
  emptyComponent = null,
  maxColumns = 3,   // <--- new prop
  ...rest
}) => {
  let itemsArray = [];

  // 1) Normalize
  if (!items) {
    itemsArray = [];
  } else if (Array.isArray(items)) {
    itemsArray = items;
  } else if (items.data && Array.isArray(items.data)) {
    itemsArray = items.data;
  } else if (typeof items === "object") {
    itemsArray = [items];
  }

  // 2) If no items
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

  // 3) Render each item in a flex container, 
  // wrapping each with a <div> that sets .colmax{maxColumns}
  return (
    <div className={`items-template-container flex wrap gap-4 ${className}`} {...rest}>
      {itemsArray.map((item, index) => (
        <div key={index} className={`colmax${maxColumns}`}>
          <ItemComponent {...item} itemIndex={index} />
        </div>
      ))}
    </div>
  );
};

ItemsTemplate.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]).isRequired,
  ItemComponent: PropTypes.elementType.isRequired,
  className: PropTypes.string,
  emptyComponent: PropTypes.node,
  maxColumns: PropTypes.oneOf([1,2,3,4]) // Or more if needed
};

export default ItemsTemplate;
