// src/themes/HighTechNeon/Sections/Gallery/GalleryItem.js
import React from "react";
import PropTypes from "prop-types";
import "./gallery-item.css";

const GalleryItem = ({ type, src, videoUrl, caption, index }) => {
  return (
    <div className="gallery-item" style={{ animationDelay: `${index * 100}ms` }}>
      {type === "video" && videoUrl ? (
        <video className="gallery-video" controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img className="gallery-image" src={src} alt={caption || "Gallery item"} />
      )}
      {/* {caption && <p className="gallery-caption">{caption}</p>} */}
    </div>
  );
};

GalleryItem.propTypes = {
  type: PropTypes.string, // "image" or "video"
  src: PropTypes.string, // used if image
  videoUrl: PropTypes.string, // used if video
  caption: PropTypes.string,
  index: PropTypes.number.isRequired,
};

export default GalleryItem;
