// src/CMS/Utils/Icons/IconImporter.js
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import * as brandIcons from "@fortawesome/free-brands-svg-icons";

/**
 * Instead of dynamically importing, we just load them all at once.
 * This ensures `getIcon()` returns the actual icon object, not a Promise.
 */

const iconLibraries = {
  fa: solidIcons,   // 'fa' -> free-solid-svg-icons
  fab: brandIcons,  // 'fab' -> free-brands-svg-icons
};

export function getIcon(libraryKey, iconName) {
  const library = iconLibraries[libraryKey];
  if (!library) {
    console.error(`Icon library "${libraryKey}" not found.`);
    return null;
  }

  // Typically FontAwesome icon objects are named as "faCoffee", "faLaptopCode", etc.
  // So we build "faLaptopCode" or "fabFacebook" from (iconName)
  // and look it up in the imported library.
  const possibleKey1 = `fa${iconName}`;   // e.g. "faLaptopCode"
  const possibleKey2 = `fab${iconName}`;  // e.g. "fabFacebook"

  // If libraryKey == "fa", we only need possibleKey1.
  // If libraryKey == "fab", we only need possibleKey2.
  // But let's try both just in case
  const icon = library[possibleKey1] || library[possibleKey2];
  if (!icon) {
    console.error(`Icon "${iconName}" not found in library "${libraryKey}".`);
    return null;
  }
  return icon; // Return the actual FontAwesome icon object
}
