// src/themes/HighTechNeon/Sections/HeroSection/HeroDisplay.js
import React, { lazy, Suspense } from "react";
import Preloader from "../../Components/Preloader/Preloader";

// Lazy-load your hero components
const Hero1 = lazy(() => import("./Hero1/Hero")); // Homepage hero
const Hero2 = lazy(() => import("./Hero2/Hero")); // Service item hero
const Hero3 = lazy(() => import("./Hero3/Hero")); // Default hero for all other pages

/**
 * HeroDisplay:
 * - If isHomepage is true, displays Hero1.
 * - Else if isServiceItem is true, displays Hero2.
 * - Otherwise, displays Hero3.
 *
 * @param {boolean} isHomepage - True when on the homepage.
 * @param {boolean} isServiceItem - True when on a service item page.
 * @param {object} heroData - Data object with siteTitle, pageTitle, description, etc.
 */
const HeroDisplay = ({ isHomepage, isServiceItem, heroData }) => {
  if (isHomepage) {
    return (
      <Suspense fallback={<Preloader />}>
        <Hero1 data={heroData} />
      </Suspense>
    );
  } else if (isServiceItem) {
    return (
      <Suspense fallback={<Preloader />}>
        <Hero2 data={heroData} />
      </Suspense>
    );
  } else {
    return (
      <Suspense fallback={<Preloader />}>
        <Hero3 data={heroData} />
      </Suspense>
    );
  }
};

export default HeroDisplay;
