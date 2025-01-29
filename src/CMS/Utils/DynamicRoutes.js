// CMS/Utils/DynamicRoutes.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Content from "../Content";
import PickTheme from "../PickTheme"; // Import the theme loader

const DynamicRoutes = () => {
  const collectionsWithPages = Content.collections.filter(
    (collection) => collection.hasPage
  );

  return (
    <Routes>
      {/* Homepage Route */}
      <Route path="/" element={<PickTheme pageId="homepage" />} />

      {/* Collection Routes */}
      {collectionsWithPages.map((collection) => (
        <Route
          key={collection.id}
          path={collection.link}
          element={<PickTheme pageId={collection.collection} />}
        />
      ))}

      {/* Item-specific routes */}
      {collectionsWithPages
        .filter((collection) => collection.itemsHasPage)
        .flatMap((collection) =>
          collection.items.map((item) => (
            <Route
              key={item.link}
              path={item.link}
              element={
                <PickTheme
                  pageId={item.link} // Use item's link as the page ID
                  sections={item.sections} // Pass the sections explicitly
                />
              }
            />
          ))
        )}

      {/* Redirect Logic */}
      {collectionsWithPages
        .filter((collection) => collection.redirectFrom && collection.redirectFrom.length > 0)
        .flatMap((collection) =>
          collection.redirectFrom.map((fromPath) => (
            <Route
              key={`redirect-${fromPath}`}
              path={fromPath}
              element={<Navigate to={collection.link} replace />}
            />
          ))
        )}
    </Routes>
  );
};

export default DynamicRoutes;
