// projectItem2.js
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./project-item2.css";
import Button from "../../../Components/Buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// IntersectionObserver removed

const ProjectItem = ({ project, index }) => {
  const animationClass = index % 2 === 0 ? "left" : "right";
  console.log(project);
  
  // Determine if the slug is internal (starts with a slash)
  const isInternal = project.slug.startsWith("/");

  // Prepare the content that will be wrapped in either a Link or an <a>
  const content = (
    <>
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
      {/* Use a plain div with fade-in-<left/right> */}
      <div className={`fade-in-${animationClass}`}>
          <Link
            to={project.slug}
            className="project-link"
            style={{
              backgroundImage: `url(${project.image || "https://picsum.photos/600/400"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
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
    slug: PropTypes.string.isRequired, // Now using slug for routing
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectItem;
