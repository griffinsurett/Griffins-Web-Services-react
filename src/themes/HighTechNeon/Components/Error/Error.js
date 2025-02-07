// src/themes/HighTechNeon/Components/ErrorPage/ErrorPage.js
import React from "react";
import "./error.css";
import Button from "../Buttons/Button"; // Import your custom Button component

const ErrorPage = () => {
  return (
    <div className="error-page flex justify-center item-align-center full-height">
      <div className="error-content text-center">
        <h1 className="error-code">404</h1>
        <p className="error-message bottom-space">
          Oops! The page you're looking for doesn't exist.
        </p>
        {/* 
          Button: Goes back to home ("/") 
          'buttonLink' accepts an internal route (since it starts with "/").
        */}
        <Button
          text="Go Home"
          buttonLink="/"
          className="p-large self-center top-space"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
