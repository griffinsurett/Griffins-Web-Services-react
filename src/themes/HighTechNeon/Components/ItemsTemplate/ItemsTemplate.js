// src/themes/HighTechNeon/themeComponents/ItemsTemplate.js
import React from "react";
import PropTypes from "prop-types";

/**
 * A reusable component that renders a list of items using a user-supplied "ItemComponent".
 * It's effectively the same pattern from the Pronto theme, but for HighTechNeon.
 *
 * Usage:
 *   <ItemsTemplate
 *     items={someCMSData.items} 
 *     ItemComponent={YourItemComponent}
 *     containerClass="..."
 *     layout="..."
 *     emptyComponent={<p>No items found</p>}
 *   />
 */
const ItemsTemplate = ({
  items,
  ItemComponent,
  className = "flex",
  emptyComponent = null,
  ...rest
}) => {
  // Step 1: Normalize the items to always be an array
  let itemsArray = [];
  if (!items) {
    itemsArray = [];
  } else if (Array.isArray(items)) {
    itemsArray = items;
  } else if (items.data && Array.isArray(items.data)) {
    itemsArray = items.data;
  } else if (typeof items === "object") {
    // e.g. if "items" is a single object
    itemsArray = [items];
  }

  // Step 2: If empty, render the fallback
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

  // Step 3: Render each item with ItemComponent
  return (
    <div
      className={`items-template-container $className}`}
      {...rest}
    >
      {itemsArray.map((item, index) => (
        <ItemComponent key={index} {...item} itemIndex={index} />
      ))}
    </div>
  );
};

ItemsTemplate.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]).isRequired,
  ItemComponent: PropTypes.elementType.isRequired, // A component that renders each item
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