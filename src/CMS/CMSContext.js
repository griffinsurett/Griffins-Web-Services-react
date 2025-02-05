// src/CMS/CMSContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPageStructure } from "./Utils/DynamicContent/GetPageStructure";
import { getSiteSettings } from "./Utils/GetContent/GetSettings";
import useMeta from "./Utils/SEO/UseMeta"; // Import the custom hook
import Content from "./Content";
// Import setLogo so that we can update the favicon on route changes
import { setLogo } from "./Utils/SEO/SetLogo";

// Import the ThemeProvider from your theme controls
import { ThemeProvider } from "../themes/HighTechNeon/Controls/ThemeContext";

const CMSContext = createContext(null);

// Lazy load the HighTechNeon theme
const HighTechNeon = React.lazy(() =>
  import("../themes/HighTechNeon/CMSDisplayTheme")
);

export const CMSProvider = ({ children }) => {
  const location = useLocation();

  // The "current pageId" we want to display; default to "home" or any fallback
  const [pageId, setPageId] = useState("home");

  // Internal state that mirrors what we had in useThemeContent
  const [cmsData, setCmsData] = useState({
    loading: true,
    pageStructure: null,
    siteSettings: null,
  });

  // New state to track if it's the initial load
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Utilize the useMeta hook here
  useMeta({
    title: cmsData.pageStructure?.title || "",
    description: cmsData.pageStructure?.description || "",
    keywords: [
      ...(cmsData.pageStructure?.keywords || []),
      ...(cmsData.siteSettings?.keywords || []),
    ],
    siteTitle: cmsData.siteSettings?.siteTitle || "",
    author: cmsData.siteSettings?.businessOwner || "",
    image:
      cmsData.pageStructure?.featuredImage ||
      cmsData.siteSettings?.siteLogo ||
      null,
    url: window.location.href,
  });

  // Load CMS data based on the current pageId and location
  useEffect(() => {
    const loadCMSData = () => {
      const pageStructure = getPageStructure(pageId);
      const siteSettings = { ...getSiteSettings(), queries: Content.queries };

      setCmsData({
        loading: false,
        pageStructure,
        siteSettings,
      });

      if (isInitialLoad) {
        setIsInitialLoad(false);
      }
    };

    if (isInitialLoad) {
      setCmsData((prev) => ({ ...prev, loading: true }));
      loadCMSData();
    } else {
      loadCMSData();
    }
  }, [location, pageId, isInitialLoad]);

  // New Effect: Update the favicon on changes to siteSettings or pageId
  useEffect(() => {
    if (cmsData.siteSettings && cmsData.siteSettings.siteLogo) {
      setLogo(cmsData.siteSettings.siteLogo);
    }
  }, [cmsData.siteSettings, pageId]);

  // Combine everything we want to expose to the rest of the app
  const contextValue = {
    ...cmsData, // loading, pageStructure, siteSettings
    pageId, // current page
    setPageId, // function to switch page
    ThemeComponent: HighTechNeon, // the chosen theme component (lazy loaded)
    isInitialLoad, // expose isInitialLoad
  };

  return (
    <CMSContext.Provider value={contextValue}>
      <ThemeProvider>{children}</ThemeProvider>
    </CMSContext.Provider>
  );
};

export const useCMSContext = () => useContext(CMSContext);
