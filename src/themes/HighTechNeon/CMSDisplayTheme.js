// src/themes/HighTechNeon/CMSDisplayTheme.js
import React, { memo, lazy, Suspense } from "react";
import { useCMSContext } from "../../CMS/CMSContext";
import Header from "./Sections/Header/Header";
import Footer from "./Sections/Footer/footer1/Footer";
import Preloader from "./themeControls/Preloader/Preloader";
import "./styles.css";
import "./animations.css";
// Import your ThemeProvider from your theme's context folder
import { ThemeProvider } from "./themeControls/ThemeContext";

// Lazy-load your hero sections separately
const Hero1 = lazy(() => import("./Sections/HeroSections/Hero1/Hero"));
const Hero2 = lazy(() => import("./Sections/HeroSections/Hero2/Hero"));

/**
 * 1) Add all your "missing" sections to this object.
 * 2) Make sure these imports correspond to the actual file paths for your components.
 */
const sectionComponents = {
    about: lazy(() => import("./Sections/About/About1/About")),
    // You can uncomment or add additional sections as needed:
    // process: lazy(() => import("./ThemeTemplates/Process/Process1/Process")),
    // benefits: lazy(() => import("./ThemeTemplates/Benefits/Benefits1/Benefits")),
    // whyChooseUs: lazy(() => import("./ThemeTemplates/WhyChooseUs/WhyChooseUs1/WhyChooseUs")),
    services: lazy(() => import("./Sections/Services/Services")),
    projects: lazy(() => import("./Sections/Projects/Projects")),
    // testimonials: lazy(() => import("./ThemeTemplates/Testimonials/Testimonials")),
    contact: lazy(() => import("./Sections/Contact/Contact3/ContactUs")),
    faq: lazy(() => import("./Sections/FAQ/FAQ")),
  };
  

const CMSDisplayTheme = memo(() => {
  const { loading, pageStructure, siteSettings, pageId, isInitialLoad } = useCMSContext();

  if (loading && isInitialLoad) {
    return <Preloader />;
  }

  if (!pageStructure) {
    return <div>Error: No page structure found.</div>;
  }

  const { title, description, sections } = pageStructure;

  // Wrap your entire theme with your ThemeProvider from the theme itself.
  return (
    <ThemeProvider>
      <Header />
      <div className="flex column item-align-center">
      <main className="flex-grow content container" role="main">
      {pageId === "home" ? (
            <Suspense fallback={<div>Loading Hero...</div>}>
              <Hero1 data={siteSettings} />
            </Suspense>
          ) : (
            <Suspense fallback={<div>Loading Hero...</div>}>
              <Hero2 data={{ title, description }} />
            </Suspense>
          )}

          {sections
            // We already loaded hero at the top, so skip it here
            .filter(({ key }) => key !== "hero")
            .map(({ key, data }) => {
              const SectionComponent = sectionComponents[key];
              return SectionComponent ? (
                <Suspense key={key} fallback={<div>Loading {key}...</div>}>
                  <SectionComponent data={data} />
                </Suspense>
              ) : (
                <p key={key}>No component found for section: {key}</p>
              );
            })}
        </main>

        <Footer siteSettings={siteSettings} />
      </div>
    </ThemeProvider>
  );
});

export default CMSDisplayTheme;
