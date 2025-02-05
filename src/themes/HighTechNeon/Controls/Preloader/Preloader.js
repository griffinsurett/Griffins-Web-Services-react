// Preloader.js
import React, { useEffect, useState } from "react";
import Logo from "../../Components/Logos/2dLogo/2dLogo"; // Import your Logo component

// Preloader Component
const Preloader = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Set a timer for when the preloader animation should complete
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 3000); // Adjust the timing as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${animationComplete ? "fade-out" : ""}`}>
      {" "}
      {/* Updated animation effect */}
      <div className="load-logo">
        <Logo width={"60px"} height={"65px"} />
      </div>
    </div>
  );
};

export default Preloader;
