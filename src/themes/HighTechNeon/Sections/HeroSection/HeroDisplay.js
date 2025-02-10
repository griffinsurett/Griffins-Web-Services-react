// HeroDisplay.js
import React, { lazy, Suspense } from "react";
import Preloader from "../../Components/Preloader/Preloader";

// Lazy-load your two hero components
const Hero1 = lazy(() => import("./Hero1/Hero")); // Homepage hero
const Hero2 = lazy(() => import("./Hero2/Hero")); // Internal pages hero

/**
 * HeroDisplay:
 * Decides which Hero to show (Hero1 vs Hero2).
 * @param {bool} isHomepage - Are we on the homepage?
 * @param {object} heroData - Data object with siteTitle, pageTitle, description, etc.
 */
const HeroDisplay = ({ isHomepage, heroData }) => {
  if (isHomepage) {
    return (
      <Suspense fallback={<Preloader />}>
        <Hero1 data={heroData} />
      </Suspense>
    );
  }
  return (
    <Suspense fallback={<Preloader />}>
      <Hero2 data={heroData} />
    </Suspense>
  );
};

export default HeroDisplay;
