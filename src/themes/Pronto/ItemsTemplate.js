// src/themes/HighTechNeon/Components/ItemsTemplate/ItemsTemplate.js
import React from "react";
import PropTypes from "prop-types";
import "./items-template.css";

const ItemsTemplate = ({
  items,
  ItemComponent,
  className = "flex",
  emptyComponent = null,
  maxColumns = null, // If null, no column classes are applied
  gap = "20px",
  ...rest
}) => {
  // 1. Normalize the items to an array
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

  // 2. If there are no items, return the fallback component or a default <p>
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

  // 3. Render the items in a container (with optional gap)
  return (
    <div
      className={`items-template-container flex wrap ${className}`}
      style={{ gap }} // apply the gap inline
      {...rest}
    >
      {itemsArray.map((item, index) => {
        // If maxColumns is a valid number (1-4), wrap each item in a div.colmax{maxColumns}.
        // If maxColumns is null, 0, or otherwise not in [1,2,3,4], don’t wrap with the column div.
        if ([1, 2, 3, 4].includes(maxColumns)) {
          return (
            <div key={index} className={`colmax${maxColumns}`}>
              <ItemComponent {...item} itemIndex={index} />
            </div>
          );
        }
        // Otherwise, just render the item without the extra wrapper
        return (
          <ItemComponent key={index} {...item} itemIndex={index} />
        );
      })}
    </div>
  );
};

ItemsTemplate.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object
  ]).isRequired,
  ItemComponent: PropTypes.elementType.isRequired, // A component that renders each item
  className: PropTypes.string,
  emptyComponent: PropTypes.node,
  maxColumns: PropTypes.oneOfType([
    PropTypes.oneOf([1, 2, 3, 4]),
    PropTypes.oneOf([null]) // null means no columns
  ]),
  gap: PropTypes.string
};

export default ItemsTemplate;
