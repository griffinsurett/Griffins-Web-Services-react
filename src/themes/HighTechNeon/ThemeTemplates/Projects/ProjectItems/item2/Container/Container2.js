import React from "react";
import PropTypes from "prop-types";
import ProjectItem from "../ProjectItem2"; // Adjust the path if necessary
import "./container2.css";

const ProjectContainer = ({ projects }) => {
  return (
    <div className="project-container box-section flex justify-center wrap top-space bottom-space">
      {projects.map((project, index) => (
        <ProjectItem 
          key={project.id} 
          project={project} 
          index={index} // Pass index for animation or styling
        />
      ))}
    </div>
  );
};

ProjectContainer.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProjectContainer;
