// src/CMS/CMSContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPageStructure } from "./Utils/DynamicContent/GetPageStructure";
import { getSiteSettings } from "./Utils/GetContent/GetSettings";
import useMeta from "./Utils/SEO/UseMeta";
import Content from "./Content";
import { setLogo } from "./Utils/SEO/SetLogo";

// Import the ThemeProvider from HighTechNeon for now (or choose dynamically)
import HighTechNeon from "../themes/HighTechNeon/CMSDisplayTheme";

const CMSContext = createContext(null);

export const CMSProvider = ({ children }) => {
  const location = useLocation();
  const [pageId, setPageId] = useState("home");
  const [cmsData, setCmsData] = useState({
    loading: true,
    pageStructure: null,
    siteSettings: null,
  });
  const [isInitialLoad, setIsInitialLoad] = useState(true);

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

  useEffect(() => {
    if (cmsData.siteSettings && cmsData.siteSettings.siteLogo) {
      setLogo(cmsData.siteSettings.siteLogo);
    }
  }, [cmsData.siteSettings, pageId]);

  // Expose our theme component (HighTechNeon or others)
  const contextValue = {
    ...cmsData,
    pageId,
    setPageId,
    ThemeComponent: HighTechNeon, // This is the chosen theme component (lazy loaded)
    isInitialLoad,
  };

  // Determine if the current ThemeComponent exports a ThemeProvider.
  // If yes, use it; if not, simply use React.Fragment.
  const ProviderWrapper =
    contextValue.ThemeComponent && contextValue.ThemeComponent.ThemeProvider
      ? contextValue.ThemeComponent.ThemeProvider
      : React.Fragment;

  return (
    <CMSContext.Provider value={contextValue}>
      <ProviderWrapper>{children}</ProviderWrapper>
    </CMSContext.Provider>
  );
};

export const useCMSContext = () => useContext(CMSContext);
