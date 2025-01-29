// CMS/Utils/PickTheme.js
import React from "react";
// import CMSDisplayTheme from "../themes/CMSDisplayTheme/CMSDisplayTheme";
import HighTechNeon from "../themes/HighTechNeon/index";

// Dynamic Theme Loader Component
const DynamicThemeLoader = ({ pageId }) => {
  // Logic for selecting a theme could be added here if needed
  return <HighTechNeon pageId={pageId} />;
};

export default DynamicThemeLoader;
