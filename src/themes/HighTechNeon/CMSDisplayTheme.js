// src/themes/HighTechNeon/CMSDisplayTheme.js
import React, { memo, lazy, Suspense } from "react";
import { useCMSContext } from "../../CMS/CMSContext";
import Header from "./Sections/Header/Header";
import Preloader from "./Components/Preloader/Preloader";
import "./styles.css";
import "./animations.css";
import { ThemeProvider } from "./Controls/ThemeContext";

// 1) Import our new or existing MenuManager:
import MenuManager from "./Components/MenuManager";

// Lazy-load sections...
const Hero1 = lazy(() => import("./Sections/HeroSections/Hero1/Hero"));
const Hero2 = lazy(() => import("./Sections/HeroSections/Hero2/Hero"));

const sectionComponents = {
  about: lazy(() => import("./Sections/About/About1/About")),
  whyChooseUs: lazy(() => import("./Sections/Services/Services")),
  purpose: lazy(() => import("./Sections/Services/Services")),
  benefits: lazy(() => import("./Sections/Services/Services")),
  process: lazy(() => import("./Sections/Process/Process")),
  services: lazy(() => import("./Sections/Services/Services")),
  projects: lazy(() => import("./Sections/Projects/Projects")),
  contact: lazy(() => import("./Sections/Contact/Contact3/ContactUs")),
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

  // 2) Create a menuManager from siteSettings (which has queries):
  const menuManager = new MenuManager(siteSettings);

  const { title, description, heading, sections } = pageStructure;

  return (
    <ThemeProvider>
      {/*
+       3) Pass menuManager & siteSettings to Header and Footer:
+       This ensures they can pull menu items from the CMS queries, 
+       just like in Pronto.
+     */}
      <Header menuManager={menuManager} siteSettings={siteSettings} />
      <div className="flex column item-align-center">
        <main className="flex-grow content container" role="main">
          {pageId === "home" ? (
            <Suspense fallback={<Preloader />}>
              <Hero1 data={siteSettings} />
            </Suspense>
          ) : (
            <Suspense fallback={<Preloader />}>
              <Hero2 data={{ title, heading, description }} />
            </Suspense>
          )}

          {sections
            .filter(({ key }) => key !== "hero")
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
      {/* <Footer menuManager={menuManager} siteSettings={siteSettings} /> */}
    </ThemeProvider>
  );
});

export default CMSDisplayTheme;
