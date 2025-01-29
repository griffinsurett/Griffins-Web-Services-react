// CMS/Utils/GetCollection.js
import Content from "../Content";

export const getCollection = (collectionName) => {
  const collection = Content.collections.find(
    (item) => item.collection === collectionName
  );
  if (!collection) {
    console.error(`Collection '${collectionName}' not found.`);
    return null;
  }
  return collection; // Returns the full collection object
};
