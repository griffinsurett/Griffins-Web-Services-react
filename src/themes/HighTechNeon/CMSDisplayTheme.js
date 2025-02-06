// src/themes/HighTechNeon/CMSDisplayTheme.js
import React, { memo, lazy, Suspense } from "react";
import { useCMSContext } from "../../CMS/CMSContext";
import Header from "./Sections/Header/Header";
import Footer from "./Sections/Footer/Footer";
import Preloader from "./Components/Preloader/Preloader";
import "./styles.css";
import "./animations.css";
import { ThemeProvider } from "./Controls/ThemeContext";

// Import MenuManager
import MenuManager from "./Components/MenuManager";

// Lazy-load hero sections
const Hero1 = lazy(() => import("./Sections/HeroSection/Hero1/Hero"));
const Hero2 = lazy(() => import("./Sections/HeroSection/Hero2/Hero"));

// Lazy-load other sections
const sectionComponents = {
  about: lazy(() => import("./Sections/About/About1/About")),
  whyChooseUs: lazy(() => import("./Sections/Services/Services")),
  purpose: lazy(() => import("./Sections/Services/Services")),
  benefits: lazy(() => import("./Sections/Services/Services")),
  process: lazy(() => import("./Sections/Process/Process")),
  services: lazy(() => import("./Sections/Services/Services")),
  projects: lazy(() => import("./Sections/Projects/Projects")),
  contact: lazy(() => import("./Sections/Contact/Contact1/ContactUs")),
  faq: lazy(() => import("./Sections/FAQ/FAQ")),
  testimonials: lazy(() => import("./Sections/Testimonials/Testimonials")),
  // ...
};

const CMSDisplayTheme = memo(() => {
  const { loading, pageStructure, siteSettings, pageId, isInitialLoad } =
    useCMSContext();

  if (loading && isInitialLoad) {
    return <Preloader />;
  }

  if (!pageStructure) {
    return <div>Error: No page structure found.</div>;
  }

  // Create the menu manager from siteSettings
  const menuManager = new MenuManager(siteSettings);

  const { title, description, heading, sections } = pageStructure;

  // Determine if the current page is one of our collection pages.
  // (That is, if pageId is not "home" and there is a corresponding section component.)
  const isCollectionPage = pageId !== "home" && sectionComponents[pageId];

  // For a collection page, you might want to get its data from the sections array.
  // This example assumes that pageStructure.sections contains an object whose key equals the pageId.
  const collectionData =
    sections.find((section) => section.key === pageId)?.data || {};

  return (
    <ThemeProvider>
      {/*
        Pass menuManager & siteSettings to Header and Footer so they can pull menu items from the CMS.
      */}
      <Header menuManager={menuManager} siteSettings={siteSettings} />
      <div className="flex column item-align-center">
        <main className="flex-grow content container" role="main">
          {/*
            Render the hero area:
            - If it's the home page, use Hero1.
            - If it’s a collection page (e.g. /projects), use that section’s component.
            - Otherwise, use Hero2.
          */}
          {pageId === "home" ? (
            <Suspense fallback={<Preloader />}>
              <Hero1
                data={{
                  ...siteSettings,          // Spread all siteSettings
                  pageTitle: title,         // from pageStructure.title
                  pageHeading: heading,     // from pageStructure.heading
                  pageDescription: description,
                }}
              />
            </Suspense>
          ) : isCollectionPage ? (
            <Suspense fallback={<Preloader />}>
              {React.createElement(sectionComponents[pageId], {
                data: collectionData,
              })}
            </Suspense>
          ) : (
            <Suspense fallback={<Preloader />}>
              <Hero2
                data={{
                  ...siteSettings,
                  pageTitle: title,
                  pageHeading: heading,
                  pageDescription: description,
                }}
              />
            </Suspense>
          )}

          {/*
            Render the remaining sections.
            For collection pages, filter out the section with key === pageId
            so it isn’t rendered twice.
          */}
          {sections
            .filter(({ key }) => key !== (isCollectionPage ? pageId : "hero"))
            .map(({ key, data }) => {
              const SectionComponent = sectionComponents[key];
              return SectionComponent ? (
                <Suspense key={key} fallback={<Preloader />}>
                  <SectionComponent data={data} />
                </Suspense>
              ) : (
                <p key={key}>No component found for section: {key}</p>
              );
            })}
        </main>
      </div>
      <Footer menuManager={menuManager} siteSettings={siteSettings} />
    </ThemeProvider>
  );
});

export default CMSDisplayTheme;
