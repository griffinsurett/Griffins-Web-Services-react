// src/themes/HighTechNeon/CMSDisplayTheme.js

import React, { memo, lazy, Suspense } from "react";
import { useCMSContext } from "../../CMS/CMSContext";
import Header from "./Sections/Header/Header";
import Footer from "./Sections/Footer/Footer";
import Preloader from "./Components/Preloader/Preloader";
import ErrorPage from "./Components/Error/Error"; 
import "./styles.css";
import "./animations.css";

// Import the ThemeProvider from your theme controls
import { ThemeProvider } from "./Controls/ThemeContext";

// Import MenuManager
import MenuManager from "./Components/MenuManager";

// Import the MenuProvider from the separate file
import { MenuProvider } from "./Components/Menu/MenuContext";

// --- Lazy-load hero sections ---
const Hero1 = lazy(() => import("./Sections/HeroSection/Hero1/Hero")); // Homepage hero
const Hero2 = lazy(() => import("./Sections/HeroSection/Hero2/Hero")); // Internal pages hero

// --- Lazy-load other sections ---
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
  // ... add more as needed
};

const CMSDisplayTheme = memo(() => {
  const { loading, pageStructure, siteSettings, pageId, isInitialLoad } = useCMSContext();

  // Show a preloader if this is the very first load
  if (loading && isInitialLoad) {
    return <Preloader />;
  }

  // If no page structure at all, just show a minimal error
  if (!pageStructure) {
    return <div>Error: No page structure found.</div>;
  }

  // If the user is at /error (pageId === "error"), display our ErrorPage
  if (pageId === "error") {
    // We’ll still show Header & Footer for consistent site styling
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

  // Otherwise, normal page logic
  const menuManager = new MenuManager(siteSettings);
  const { title, description, heading, content, sections } = pageStructure;
  const isHomepage = pageId === "home";

  // Prepare hero data
  const heroData = {
    ...siteSettings,
    pageTitle: title,
    pageHeading: heading,
    pageDescription: description,
    content: content,
  };

  // Check if this page’s sections array includes a "hero"
  const hasHero = sections.some((s) => s.key === "hero");
  // Exclude hero from the final sections (we'll handle it separately)
  const finalSections = sections.filter((s) => s.key !== "hero");

  return (
    <MenuProvider>
      <Header menuManager={menuManager} siteSettings={siteSettings} />
      <div className="flex column item-align-center">
        <main className="flex-grow content container" role="main">
          {hasHero &&
            (isHomepage ? (
              <Suspense fallback={<Preloader />}>
                <Hero1 data={heroData} />
              </Suspense>
            ) : (
              <Suspense fallback={<Preloader />}>
                <Hero2 data={heroData} />
              </Suspense>
            ))}

          {/* Render each remaining section by key */}
          {finalSections.map(({ key, data }) => {
            const SectionComponent = sectionComponents[key];
            if (!SectionComponent) {
              return <p key={key}>No component found for section: {key}</p>;
            }
            return (
              <Suspense key={key} fallback={<Preloader />}>
                <SectionComponent data={data} />
              </Suspense>
            );
          })}
        </main>
      </div>
      <Footer menuManager={menuManager} siteSettings={siteSettings} />
    </MenuProvider>
  );
});

// Attach the ThemeProvider as a static property if needed
CMSDisplayTheme.ThemeProvider = ThemeProvider;

export default CMSDisplayTheme;
