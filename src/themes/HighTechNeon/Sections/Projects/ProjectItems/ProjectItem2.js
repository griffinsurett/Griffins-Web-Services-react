// projectItem2.js
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./project-item2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProjectItem = ({ project, index }) => {
  const animationClass = index % 2 === 0 ? "left" : "right";

  const content = (
    <>
      {/* Overlay div (initially transparent, will fade in on hover) */}
      <div className="project-overlay"></div>

      {/* Existing content container */}
      <div className="project-content flex column text-left">
        <h5>{project.name}</h5>
        <p className="project-item-onhover p-small smaller-top-space">
          {project.description}
        </p>
      </div>

      <div className="project-item-icon project-item-onhover">
        <FontAwesomeIcon className="arrow" size="xl" icon={faArrowRight} />
      </div>
    </>
  );

  return (
    <div className="project-item flex column justify-center responsive-center">
      <div className={`fade-in-${animationClass}`}>
        <Link
          to={project.slug}
          className="project-link"
          style={{
            background: `url(${project.image}) center/cover no-repeat`,
            height: "350px",
          }}
        >
          {content}
        </Link>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectItem;
