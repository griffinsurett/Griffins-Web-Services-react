// Theme/CMSDisplayTheme.js
import React from "react";
import { getPageStructure } from "../../CMS/Utils/GetPageStructure";
import { getCollection } from "../../CMS/Utils/GetCollection";
import { getSiteSettings } from "../../CMS/Utils/GetSettings";
import Content from "../../CMS/Content";
import HomeHero from "./Components/Section/Hero"; // Hero for homepage
import GenericHero from "./Components/Section/Hero2"; // Generic hero for other pages
import About from "./Components/Section/About/About";
import Services from "./Components/Section/Services";
import Contact from "./Components/Section/Contact";
import Testimonials from "./Components/Section/Testimonials";
import Projects from "./Components/Section/Projects";
import FAQ from "./Components/Section/FAQ";

// Map section keys to their respective components
const sectionComponents = {
  about: About,
  services: Services,
  contact: Contact,
  testimonials: Testimonials,
  projects: Projects,
  faq: FAQ,
};

// CMSDisplayTheme.js
const CMSDisplayTheme = ({ pageId }) => {
  const sections = getPageStructure(pageId);

  if (!sections) {
    return <p>Error: No sections found for page '{pageId}'.</p>;
  }

  const isHomepage = pageId === "homepage";

  // Check if the page corresponds to a main collection or an item within a collection
  const collection =
    getCollection(pageId) || // Try to find a collection by pageId
    Content.collections.find((col) =>
      col.items?.some((item) => item.link === pageId)
    );

  const item = collection?.items?.find((item) => item.link === pageId);

  return (
    <div className={`page-${pageId}`}>
      {/* Render the appropriate hero */}
      {isHomepage ? (
        <HomeHero data={getSiteSettings()} />
      ) : (
        <GenericHero
          title={item?.title || collection?.title}
          heading={"" || collection?.heading}
          description={
            item?.description ||
            collection?.paragraph ||
            "Discover more details about this page."
          }
        />
      )}

      {/* Render other sections dynamically */}
      {sections
        .filter((sectionKey) => sectionKey !== "hero") // Exclude hero
        .map((sectionKey) => {
          const SectionComponent = sectionComponents[sectionKey];
          const sectionData = getCollection(sectionKey);

          if (!SectionComponent || !sectionData) {
            console.warn(
              `Section '${sectionKey}' is missing data or a component.`
            );
            return null;
          }

          return <SectionComponent key={sectionKey} data={sectionData} />;
        })}
    </div>
  );
};

export default CMSDisplayTheme;
