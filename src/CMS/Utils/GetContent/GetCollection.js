// Utils/GetContent/GetCollection.js
import Content from "../../Content";

/**
 * Retrieves a collection by its slug or an item within the collection by its slug.
 * Optionally filters related items based on `pageId`.
 * @param {string} slug - The slug to search for.
 * @param {string} [pageId] - The page ID for filtering related items.
 * @returns {object|null} - The matching collection or null if not found.
 */
export const getCollection = (slug, pageId = null) => {
  const collection =
    Content.collections.find((c) => c.collection === slug) ||
    Content.collections.find((c) =>
      c.items?.data?.some((item) => item.slug === slug)
    );

  if (!collection) {
    return null;
  }

  // If pageId is "home", return the entire collection
  if (pageId === "home") {
    return collection;
  }

  // If filtering for a specific page, return only items that are related
  if (pageId && collection.items && Array.isArray(collection.items.data)) {
    const normalizedPageId = pageId.toLowerCase();
    const relatedItems = collection.items.data.filter((item) => {
      return Object.keys(item)
        .filter((key) => key.startsWith("relatedTo"))
        .some((key) =>
          Array.isArray(item[key]) &&
          item[key].some(val => val.toLowerCase() === normalizedPageId)
        );
    });
  
    return {
      ...collection,
      items: {
        ...collection.items,
        data: relatedItems,
      },
    };
  }

  return collection;
};
