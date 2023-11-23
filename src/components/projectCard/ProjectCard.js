import { React } from "react";
import PropTypes from "prop-types";

import utils from "../../utils/utils";
function ProjectCard({
  name,
  image = "assets/img/projects/no-image.png",
  data = {}
}) {
  return (
  <div className="project-card">
    <p className="card-text-wrapper">{name}</p>
    {data.external && (
      <div onClick={() => {
        utils.openUrl(data.external);
      }}
      >
        <img id="button" className="primary-button" alt="Arrow button" src="assets/img/arrow-button.svg" draggable="false" />
      </div>
      
    )}

    {!data.external && data.download ? (
      <div onClick={() => {
        utils.openUrl(data.download);
      }}
      >
        <img id="button" className="primary-button download" alt="Download button" src="assets/img/download-button.svg" draggable="false" />
      </div>
    ) : <div/>}

    {data.code && (
      <div onClick={() => {
        utils.openUrl(data.code);
      }}
      >
        <img id="button" className="secondary-button" alt="Code button" src="assets/img/code-button.svg" draggable="false" />
      </div>
    )}
    
    <div className="image-frame">
      <img className="thumb-image" alt="Project" src={image} draggable="false" />
    </div>
  </div>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  data: PropTypes.object,
}

export default ProjectCard;