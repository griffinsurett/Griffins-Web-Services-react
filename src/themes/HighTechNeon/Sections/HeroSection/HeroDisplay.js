// src/themes/HighTechNeon/Sections/HeroSection/HeroDisplay.js
import React, { lazy, Suspense } from "react";
import Preloader from "../../Components/Preloader/Preloader";

// Lazy-load your hero components:
const Hero1 = lazy(() => import("./Hero1/Hero"));       // Homepage hero
const Hero2 = lazy(() => import("./Hero2/Hero"));           // Service item hero
const Hero3 = lazy(() => import("./Hero3/Hero"));           // Default hero for other pages
const ProjectHero = lazy(() => import("./ProjectHero/ProjectHero")); // Project item hero

/**
 * HeroDisplay:
 * Renders the appropriate hero component based on the consolidated page type.
 *
 * @param {object} props - Contains pageType and heroData.
 * @param {string} props.pageType - One of: "home", "serviceItem", "projectItem", or "static".
 * @param {object} props.heroData - Data for the hero.
 */
const HeroDisplay = ({ pageType, heroData }) => {
  if (pageType === "home") {
    return (
      <Suspense fallback={<Preloader />}>
        <Hero1 data={heroData} />
      </Suspense>
    );
  } else if (pageType === "serviceItem") {
    return (
      <Suspense fallback={<Preloader />}>
        <Hero2 data={heroData} />
      </Suspense>
    );
  } else if (pageType === "projectItem") {
    return (
      <Suspense fallback={<Preloader />}>
        <ProjectHero data={heroData} />
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
