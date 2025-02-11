// src/CMS/Utils/Icons/IconImporter.js
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
import * as SiIcons from "react-icons/si";  // NEW: Import Simple Icons

// Map our keys to the respective react-icons libraries
const reactIconLibraries = {
  fa: FaIcons,   // FontAwesome (all icons: solid & brands)
  fab: FaIcons,  // Maintain backward compatibility
  io: IoIcons,   // Ionic (v4 and earlier, if needed)
  io5: Io5Icons, // Ionic v5 icons
  md: MdIcons,   // Material Design icons
  gi: GiIcons,   // Game Icons (example)
  si: SiIcons,   // Simple Icons (for tech/brand icons)
  // Add more libraries if desired
};

// Map each key to its expected prefix (as used in react-icons)
const prefixMapping = {
  fa: "Fa",
  fab: "Fa", // For react‑icons, FontAwesome brands are under "Fa" as well
  io: "Io",
  io5: "Io5",
  md: "Md",
  gi: "Gi",
  si: "Si",  // For Simple Icons, the prefix is "Si"
  // Add more prefixes if needed
};

/**
 * Returns a React icon component from react-icons based on the library key and icon name.
 *
 * @param {string} libraryKey - The key for the desired library (e.g. "fa", "io5", "si").
 * @param {string} iconName - The name of the icon (e.g. "LaptopCode", "Bullseye", "Html5").
 * @returns {React.Component|null} The requested icon component, or null if not found.
 */
export function getIcon(libraryKey, iconName) {
  const library = reactIconLibraries[libraryKey];
  if (!library) {
    console.error(`React icon library "${libraryKey}" not found.`);
    return null;
  }

  const prefix = prefixMapping[libraryKey];
  if (!prefix) {
    console.error(`No prefix defined for library "${libraryKey}".`);
    return null;
  }

  // Construct the component name. For example, for libraryKey "si" and iconName "Html5" we expect "SiHtml5".
  const iconComponent = library[`${prefix}${iconName}`];

  if (!iconComponent) {
    console.error(`Icon "${iconName}" not found in library "${libraryKey}".`);
    return null;
  }

  return iconComponent; // This is a React component; you can render it as: <IconComponent />
}
