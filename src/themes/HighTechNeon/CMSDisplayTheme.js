// src/themes/HighTechNeon/CMSDisplayTheme.js
import React, { memo, lazy, Suspense } from "react";
import { useCMSContext } from "../../CMS/CMSContext";
import Header from "./Sections/Header/Header";
import Footer from "./Sections/Footer/Footer";
import Preloader from "./Components/Preloader/Preloader";
import ErrorPage from "./Components/Error/Error"; 
import "./styles.css";
import "./animations.css";

// Theme provider
import { ThemeProvider } from "./Controls/ThemeContext";

// Menu manager & context
import MenuManager from "./Components/MenuManager";
import { MenuProvider } from "./Components/Menu/MenuContext";

// --- Import the consolidated HeroDisplay
import HeroDisplay from "./Sections/HeroSection/HeroDisplay";

// --- Lazy-load other non-hero sections ---
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
};

const CMSDisplayTheme = memo(() => {
  const { loading, pageStructure, siteSettings, pageId, isInitialLoad } = useCMSContext();

  // Show a preloader if this is the very first load
  if (loading && isInitialLoad) {
    return <Preloader />;
  }

  // If no page structure, show minimal error
  if (!pageStructure) {
    return <div>Error: No page structure found.</div>;
  }

  // If user is at /error, show error page
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

  // Otherwise, normal page logic
  const menuManager = new MenuManager(siteSettings);
  const { title, description, heading, content, sections } = pageStructure;
  const isHomepage = pageId === "home";
  // If the current page is under the services collection (its slug starts with "/services")
  // but is not the services collection itself, we consider it a service item.
  const isServiceItem = pageId.startsWith("/services") && pageId !== "/services";

  // Prepare hero data
  const heroData = {
    ...siteSettings,
    pageTitle: title,
    pageHeading: heading,
    pageDescription: description,
    content: content,
  };

  // Check if the page’s sections array includes "hero"
  const hasHero = sections.some((s) => s.key === "hero");
  // Exclude hero from final sections
  const finalSections = sections.filter((s) => s.key !== "hero");

  return (
    <MenuProvider>
      <Header menuManager={menuManager} siteSettings={siteSettings} />
      <div className="flex column item-align-center">
        <main className="flex-grow content container" role="main">
          {hasHero && (
            <HeroDisplay
              isHomepage={isHomepage}
              isServiceItem={isServiceItem}
              heroData={heroData}
            />
          )}

          {/* Render each remaining section by key.
              For the "cta" section, pass siteSettings as well */}
          {finalSections.map(({ key, data }) => {
            const SectionComponent = sectionComponents[key];
            if (!SectionComponent) {
              return <p key={key}>No component found for section: {key}</p>;
            }
            return (
              <Suspense key={key} fallback={<Preloader />}>
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
    </MenuProvider>
  );
});

// Attach the ThemeProvider if needed
CMSDisplayTheme.ThemeProvider = ThemeProvider;

export default CMSDisplayTheme;