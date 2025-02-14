// src/themes/HighTechNeon/CMSDisplayTheme.js
import React, { memo, lazy, Suspense } from "react";
import { useCMSContext } from "../../CMS/CMSContext";
import Header from "./Sections/Header/Header";
import Footer from "./Sections/Footer/Footer";
import Preloader from "./Components/Preloader/Preloader";
import ErrorPage from "./Components/Error/Error"; 
import FloatingPhoneButton from "./Components/FloatingPhoneButton/FloatingPhoneButton";
import "./styles.css";
import "./animations.css";

import { ThemeProvider } from "./Controls/ThemeContext";
import MenuManager from "./Components/MenuManager";
import { MenuProvider } from "./Components/Menu/MenuContext";
import HeroDisplay from "./Sections/HeroSection/HeroDisplay";

// Lazy import
const sectionComponents = {
  about:        lazy(() => import("./Sections/About/About1/About")),
  whyChooseUs:  lazy(() => import("./Sections/Services/Services")),
  purpose:      lazy(() => import("./Sections/Services/Services")),
  benefits:     lazy(() => import("./Sections/Services/Services")),
  process:      lazy(() => import("./Sections/Process/Process")),
  services:     lazy(() => import("./Sections/Services/Services")),
  projects:     lazy(() => import("./Sections/Projects/Projects")),
  contact:      lazy(() => import("./Sections/Contact/Contact1/ContactUs")),
  faq:          lazy(() => import("./Sections/FAQ/FAQ")),
  testimonials: lazy(() => import("./Sections/Testimonials/Testimonials")),
  pricing:      lazy(() => import("./Sections/Pricing/Pricing")),
  cta:          lazy(() => import("./Sections/CTA/CTA")),
  platforms:    lazy(() => import("./Sections/Platforms/Platforms")),
  gallery:      lazy(() => import("./Sections/Gallery/Gallery")),
};

const getPageType = (pageId) => {
  if (pageId === "home") return "home";
  if (pageId === "error") return "error";
  if (pageId.startsWith("/services") && pageId !== "/services") return "serviceItem";
  if (pageId.startsWith("/projects") && pageId !== "/projects") return "projectItem";
  return "static";
};

const CMSDisplayTheme = memo(() => {
  const { loading, pageStructure, siteSettings, pageId, isInitialLoad } = useCMSContext();

  // Only show preloader on the very first load
  if (loading && isInitialLoad) {
    return <Preloader />;
  }

  // If no page structure
  if (!pageStructure) {
    return <div>Error: No page structure found.</div>;
  }

  // If /error
  if (pageId === "error") {
    const menuManager = new MenuManager(siteSettings);
    return (
      <MenuProvider>
        <Header menuManager={menuManager} siteSettings={siteSettings} />
        <div className="flex column item-align-center">
          <main className="flex-grow content container" role="main">
            <ErrorPage />
          </main>
        </div>
        <Footer menuManager={menuManager} siteSettings={siteSettings} />
      </MenuProvider>
    );
  }

  // Normal page logic
  const menuManager = new MenuManager(siteSettings);
  const { title, description, heading, content, sections, featuredImage } = pageStructure;
  const pageType = getPageType(pageId);
  const isHomepage = pageType === "home";

  // Prepare hero data
  const heroData = {
    ...siteSettings,
    pageTitle: title,
    pageHeading: heading,
    pageDescription: description,
    featuredImage: featuredImage,
    content: content,
  };

  const hasHero = sections.some((s) => s.key === "hero");
  const finalSections = sections.filter((s) => s.key !== "hero");

  return (
    <MenuProvider>
      <Header menuManager={menuManager} siteSettings={siteSettings} />
      <div className="flex column item-align-center">
        <main className="flex-grow content container" role="main">
          {hasHero && (
            <HeroDisplay pageType={pageType} heroData={heroData} />
          )}

          {finalSections.map(({ key, data }) => {
            const SectionComponent = sectionComponents[key];
            if (!SectionComponent) {
              return <p key={key}>No component found for section: {key}</p>;
            }
            return (
              <Suspense key={key} fallback={null}>
                {key === "cta" ? (
                  <SectionComponent data={data} siteSettings={siteSettings} />
                ) : (
                  <SectionComponent data={data} />
                )}
              </Suspense>
            );
          })}
        </main>
      </div>
      <Footer menuManager={menuManager} siteSettings={siteSettings} />
      <FloatingPhoneButton />
    </MenuProvider>
  );
});

CMSDisplayTheme.ThemeProvider = ThemeProvider;
export default CMSDisplayTheme;