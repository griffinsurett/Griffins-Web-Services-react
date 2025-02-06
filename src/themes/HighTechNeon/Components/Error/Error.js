// src/themes/HighTechNeon/Components/ErrorPage/ErrorPage.js
import React from "react";
import "./error.css";

const ErrorPage = () => {
  return (
    <div className="error-page flex justify-center item-align-center full-height">
      <div className="error-content text-center">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-message">
          Oops! The page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
