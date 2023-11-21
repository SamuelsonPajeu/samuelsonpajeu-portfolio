import { React } from "react";
import PropTypes from "prop-types";

function ProjectCard({
  name,
  image = "assets/img/projects/no-image.png",
}) {
  return <div className="project-card">
    <p className="card-text-wrapper">{name}</p>
    <img className="primary-button" alt="Arrow button" src="assets/img/arrow-button.svg" />
    <img className="secondary-button" alt="Code button" src="assets/img/code-button.svg" />
    <div className="image-frame">
      <img className="thumb-image" alt="Project" src={image} />
    </div>
  </div>;
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default ProjectCard;