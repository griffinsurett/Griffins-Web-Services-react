// MobileStatusBar.js
import React, { useEffect } from 'react';

function MobileStatusBar() {
  useEffect(() => {
    const backgroundColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--background-color')
      .trim();

    let metaTag = document.querySelector('meta[name="theme-color"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.name = "theme-color";
      document.head.appendChild(metaTag);
    }
    metaTag.content = backgroundColor;
  }, []);

  return null; // No UI elements to render, so return null
}

export default MobileStatusBar;
