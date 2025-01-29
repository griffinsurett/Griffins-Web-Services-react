import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import * as regularIcons from "@fortawesome/free-regular-svg-icons";
import * as brandIcons from "@fortawesome/free-brands-svg-icons";

// Libraries map for dynamic lookup
const iconLibraries = {
  solid: solidIcons,
  regular: regularIcons,
  brands: brandIcons,
};

/**
 * Dynamically loads an icon from the specified library.
 * @param {string} iconName - The name of the icon.
 * @param {string} library - The library to search for the icon (solid, regular, brands).
 * @returns {object|null} - The resolved icon object or null if not found.
 */
const DynamicIconLoader = (iconName, library = "solid") => {
  const libraryIcons = iconLibraries[library];
  if (!libraryIcons) {
    console.error(`Library '${library}' not found.`);
    return null;
  }

  const iconKey = `fa${iconName.charAt(0).toUpperCase() + iconName.slice(1)}`;
  const icon = libraryIcons[iconKey];

  if (!icon) {
    console.error(`Icon '${iconName}' not found in the '${library}' library.`);
    return null;
  }

  return icon;
};

export default DynamicIconLoader;
