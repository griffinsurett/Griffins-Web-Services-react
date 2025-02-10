// src/CMS/Utils/DynamicContent/GetPageStructure.js

import Content from "../../Content";
import { getCollection } from "../GetContent/GetCollection";
import RelationalUtil from "../Relationships/RelationsUtil";
import HierarchyUtil from "../Relationships/HierarchyUtil";

const relationalUtil = new RelationalUtil(Content);
const hierarchyUtil = new HierarchyUtil(Content);

export const getPageStructure = (pageId) => {
  const page = Content.pages.find((p) => p.id === pageId);

  if (!page) {
    console.error(`[getPageStructure] Page '${pageId}' not found in CMS.`);
    return null;
  }

  const isCollectionPage = page.isCollection;
  const collection = isCollectionPage ? getCollection(pageId) : null;

  const isItemPage =
    collection &&
    collection.items &&
    Array.isArray(collection.items.data) &&
    collection.items.data.some((item) => item.slug === pageId);

  const item = isItemPage
    ? collection.items.data.find((i) => i.slug === pageId)
    : null;

  // Determine featured image from item, then collection, then page
  const featuredImage =
    item?.featuredImage || collection?.featuredImage || page.featuredImage;

  // Determine title and description using item first, then collection, then page
  const title =
    item?.title ||
    item?.name ||
    collection?.title ||
    page.title ||
    "Untitled Page";

  const description =
    item?.description ||
    collection?.description ||
    page.description ||
    "";

  const content = page.content || item?.content || "";

  // Compute the heading from available properties
  const heading =
    item?.heading ||
    collection?.heading ||
    page.heading ||
    "";

  // Build a helper map of object sections from collections (if any are marked for auto-render)
  const objectSectionsMap = {};
  Content.collections.forEach((col) => {
    for (const key in col) {
      if (col[key] && typeof col[key] === "object" && col[key].makeObjectSection) {
        objectSectionsMap[key] = col[key];
      }
    }
  });

  // Helper function: aggregate cross-relations from an array of items
  const aggregateCrossRelations = (items) => {
    const aggregatedRelations = {};
    items?.forEach((itm) => {
      Object.keys(itm).forEach((relationKey) => {
        if (relationKey.startsWith("relatedTo")) {
          const relatedCollectionName = relationKey.replace("relatedTo", "").toLowerCase();
          const relatedSlugs = itm[relationKey] || [];
          const relatedItems = relatedSlugs
            .map((slug) => relationalUtil.findEntityBySlug(relatedCollectionName, slug))
            .filter(Boolean);
          aggregatedRelations[relatedCollectionName] =
            aggregatedRelations[relatedCollectionName] || [];
          aggregatedRelations[relatedCollectionName].push(...relatedItems);
        }
      });
    });

    // Remove duplicate entities based on their slug
    Object.keys(aggregatedRelations).forEach((key) => {
      aggregatedRelations[key] = [
        ...new Map(aggregatedRelations[key].map((i) => [i.slug, i])).values(),
      ];
    });

    return aggregatedRelations;
  };

  let sections = [];

  if (isCollectionPage && !isItemPage && collection) {
    // CASE 1: A collection page (non-item page)
    if (
      collection.items?.isHeirarchical &&
      collection.onlyParentsOnCollection
    ) {
      const parents = hierarchyUtil.getParents(collection.collection);
      const crossRels = aggregateCrossRelations(collection.items.data);

      sections = page.sections.map((sectionKey) => {
        let sectionData;
        if (sectionKey === collection.collection) {
          sectionData = { ...collection, items: parents };
        } else if (sectionKey in collection) {
          sectionData = collection[sectionKey];
        } else if (objectSectionsMap[sectionKey]) {
          sectionData = objectSectionsMap[sectionKey];
        } else {
          sectionData = {
            ...(getCollection(sectionKey) || {}),
            items: crossRels[sectionKey] || [],
          };
        }
        return { key: sectionKey, data: sectionData };
      });
    } else {
      const crossRels = aggregateCrossRelations(collection.items?.data);
      sections = page.sections.map((sectionKey) => {
        let sectionData;
        if (sectionKey === collection.collection) {
          sectionData = collection;
        } else if (sectionKey in collection) {
          sectionData = collection[sectionKey];
        } else if (objectSectionsMap[sectionKey]) {
          sectionData = objectSectionsMap[sectionKey];
        } else {
          sectionData = {
            ...(getCollection(sectionKey) || {}),
            items: crossRels[sectionKey] || [],
          };
        }
        // Special handling for services testimonials if needed…
        if (collection.collection === "services" && sectionKey === "testimonials") {
          const companies = Content.collections.filter((c) => c.collection === "companies");
          let aggregatedTestimonials = [];
          companies.forEach((company) => {
            if (company.items && Array.isArray(company.items.data)) {
              company.items.data.forEach((companyItem) => {
                if (companyItem.relations && Array.isArray(companyItem.relations)) {
                  companyItem.relations.forEach((rel) => {
                    if (rel.collection === "testimonials") {
                      const testimonialEntity = relationalUtil.findEntityByIdentifier("testimonials", rel.value);
                      if (testimonialEntity) {
                        aggregatedTestimonials.push(testimonialEntity);
                      }
                    }
                  });
                }
              });
            }
          });
          const directTestimonials = sectionData.items || [];
          sectionData.items = [
            ...new Map([...directTestimonials, ...aggregatedTestimonials].map(i => [i.slug, i])).values()
          ];
        }
        return { key: sectionKey, data: sectionData };
      });
    }
  } else if (isItemPage && collection && item) {
    // CASE 2: An item page

    // Start with any predefined itemSections from the collection if available.
    let sectionKeys = [];
    if (collection.items && Array.isArray(collection.items.itemSections)) {
      sectionKeys.push(...collection.items.itemSections);
    }
    // Also scan the item for any keys whose value is an object
    const knownKeys = new Set([
      "id",
      "slug",
      "title",
      "name",
      "description",
      "content",
      "featuredImage",
      "relations",
      "parentItem",
      "redirectFrom",
    ]);
    for (const key in item) {
      if (
        item[key] &&
        typeof item[key] === "object" &&
        !Array.isArray(item[key]) &&
        !knownKeys.has(key) &&
        !sectionKeys.includes(key)
      ) {
        sectionKeys.push(key);
      }
    }
    // Optionally, if your static page defines a sections array, you may override:
    if (page.sections && Array.isArray(page.sections) && page.sections.length > 0) {
      sectionKeys = page.sections;
    }

    const crossRels = aggregateCrossRelations([item]);

    sections = sectionKeys.map((sectionKey) => {
      let sectionData;
      if (item.hasOwnProperty(sectionKey) && typeof item[sectionKey] === "object" && item[sectionKey] !== null) {
        sectionData = item[sectionKey];
      } else if (
        sectionKey === collection.collection &&
        collection.items?.isHeirarchical
      ) {
        if (hierarchyUtil.isParent(item)) {
          const children = hierarchyUtil.getChildren(collection.collection, item.slug);
          sectionData = {
            title: collection.title,
            heading: collection.heading,
            items: children,
            slug: collection.slug,
            hasPage: collection.hasPage,
          };
        } else {
          const parentSlug = item.parentItem;
          if (parentSlug) {
            const siblings = hierarchyUtil.getSiblings(collection.collection, parentSlug, item.slug);
            sectionData = {
              title: collection.title || collection.heading,
              heading: collection.heading,
              items: siblings,
              slug: collection.slug,
              hasPage: collection.hasPage,
            };
          } else {
            sectionData = { title: "", heading: "", items: [] };
          }
        }
      } else if (sectionKey in collection) {
        sectionData = collection[sectionKey];
      } else if (objectSectionsMap[sectionKey]) {
        sectionData = objectSectionsMap[sectionKey];
      } else if (crossRels[sectionKey]) {
        const relatedCollection = getCollection(sectionKey);
        sectionData = {
          title: relatedCollection?.title || sectionKey,
          heading: relatedCollection?.heading || "",
          items: crossRels[sectionKey] || [],
          slug: relatedCollection?.slug || "",
          hasPage: relatedCollection?.hasPage || false,
        };
      } else {
        sectionData = getCollection(sectionKey, pageId) || null;
      }
      return { key: sectionKey, data: sectionData };
    });
  } else {
    // CASE 3: Static page (neither a collection nor an item page)
    sections = page.sections.map((sectionKey) => {
      let sectionData;
      const targetCollection = getCollection(sectionKey);
      if (
        targetCollection?.items?.isHeirarchical &&
        targetCollection.onlyParentsOnCollection
      ) {
        const parents = hierarchyUtil.getParents(targetCollection.collection);
        sectionData = {
          ...targetCollection,
          items: parents,
          title: targetCollection.title || "",
          heading: targetCollection.heading || "",
        };
      } else if (objectSectionsMap[sectionKey]) {
        sectionData = objectSectionsMap[sectionKey];
      } else {
        sectionData = {
          ...(targetCollection || {}),
          title: targetCollection?.title || "",
          heading: targetCollection?.heading || "",
        };
      }
      return { key: sectionKey, data: sectionData };
    });
  }

  const pageStructure = { title, heading, description, content, sections, featuredImage };

  return pageStructure;
};

