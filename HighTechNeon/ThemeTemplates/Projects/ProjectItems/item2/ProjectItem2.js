// projectItem2.js
import React from "react";
import PropTypes from "prop-types";
import "./project-item2.css";
import Button from "../../../../themeComponents/Buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// IntersectionObserver removed

const ProjectItem = ({ project, index }) => {
  const animationClass = index % 2 === 0 ? "left" : "right";

  return (
    <div className="project-item flex column justify-center responsive-center">
      {/* Use a plain div with fade-in-<left/right> */}
      <div className={`fade-in-${animationClass}`}>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "350px",
          }}
        >
          <div className="project-content flex column text-left">
            <h5>{project.name}</h5>
            <p className="project-item-onhover p-small smaller-top-space">{project.description}</p>
          </div>
          <div className="project-item-icon project-item-onhover">
            <FontAwesomeIcon className="arrow" size="xl" icon={faArrowRight} />
          </div>
        </a>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectItem;