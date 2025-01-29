// CMS/Utils/GetPageStructure.js
import Content from "../Content";

export const getPageStructure = (pageId) => {
  const page = Content.pages.find((p) => p.id === pageId);
  if (!page) {
    console.error(`Page '${pageId}' not found in CMS.`);
    return null;
  }
  return page.sections; // Returns an array of section keys
};
