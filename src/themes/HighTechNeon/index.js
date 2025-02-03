// src/themes/HighTechNeon/index.js
import React from "react";
import { ThemeProvider } from "./themeControls/ThemeContext";
import CMSDisplayTheme from "./CMSDisplayTheme"; 

const HighTechNeonThemeIndex = () => {
  return (
    <ThemeProvider>
      <CMSDisplayTheme />
    </ThemeProvider>
  );
};

export default HighTechNeonThemeIndex;
