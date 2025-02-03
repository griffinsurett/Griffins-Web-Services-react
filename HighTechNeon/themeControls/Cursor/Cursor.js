// Cursor.js
import React, { useEffect, useRef, useState } from "react";
import "./cursor.css";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverText, setHoverText] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.classList.contains("invert-on-hover")) {
        e.target.style.color = "black"; // Change text to black
        setHoverText(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.classList.contains("invert-on-hover")) {
        e.target.style.color = ""; // Reset to default
        setHoverText(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  useEffect(() => {
    const lagCursor = () => {
      if (cursorRef.current) {
        const cursor = cursorRef.current;
        const currentX = parseFloat(cursor.style.left) || 0;
        const currentY = parseFloat(cursor.style.top) || 0;

        const lag = 0.5; // Adjust this value to change the lag speed
        const newX = currentX + (mousePosition.x - currentX) * lag;
        const newY = currentY + (mousePosition.y - currentY) * lag;

        cursor.style.left = `${newX}px`;
        cursor.style.top = `${newY}px`;

        requestAnimationFrame(lagCursor);
      }
    };

    requestAnimationFrame(lagCursor);
  }, [mousePosition]);

  return (
    <div
      ref={cursorRef}
      className={`cursor ${hoverText ? "hover-text" : ""}`}
    ></div>
  );
};

export default Cursor;
