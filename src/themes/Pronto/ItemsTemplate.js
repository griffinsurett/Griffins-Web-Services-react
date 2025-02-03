// src/themes/Pronto/ItemsTemplate.js
import React from "react";
import PropTypes from "prop-types";

/**
 * ItemsTemplate Component
 *
 * Renders a list of items using a specified ItemComponent.
 * It first normalizes the `items` prop to always be an array so that we can safely call .map().
 */
const ItemsTemplate = ({
  items,
  ItemComponent,
  containerClass = "",
  layout = "flex flex-col",
  emptyComponent = null,
  ...rest
}) => {
  // Normalize items: if items is an array, use it;
  // if it’s an object (or has a nested array on .data), use that; otherwise, wrap in an array.
  let itemsArray = [];
  if (!items) {
    itemsArray = [];
  } else if (Array.isArray(items)) {
    itemsArray = items;
  } else if (items.data && Array.isArray(items.data)) {
    itemsArray = items.data;
  } else if (typeof items === "object") {
    // Wrap a single object in an array
    itemsArray = [items];
  }

  if (itemsArray.length === 0) {
    return emptyComponent ? (
      <div className={containerClass} {...rest} role="alert">
        {emptyComponent}
      </div>
    ) : (
      <div className={containerClass} {...rest} role="alert">
        <p>No items available at this time.</p>
      </div>
    );
  }

  return (
    <div className={`items-template-container ${layout} ${containerClass}`} {...rest}>
      {itemsArray.map((item, index) => (
        <ItemComponent key={index} {...item} itemIndex={index} {...rest} />
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
  containerClass: PropTypes.string,
  layout: PropTypes.string,
  emptyComponent: PropTypes.node,
};

ItemsTemplate.defaultProps = {
  containerClass: "",
  layout: "flex flex-col",
  emptyComponent: null,
};

export default ItemsTemplate;
