import { React } from "react";
import PropTypes from "prop-types";

import Tag from "./tag/Tag";
import PopUpButton from "./button/popUpButton";

import "./projectPopup.css"

function PopUpComponent({
  title,
  image="assets/img/projects/no-image.png",
  description,
  tags=[],
  download,
  code,
  external,
  callback,
}) {
  return (
  <div className="project-popup">
    <div className="project-card-popup-bg" 
      onClick={() => {
        callback();
      }}
    />
    <div className="project-card-popup">

      <div className="tags-wrapper">
        {
          tags.map((tag) => (
            <Tag name={tag} />
          ))
        }

        <div className="closeable"
          onClick={() => {
            callback();
          }}
        >
          <Tag name="X" />
        </div>
        
      </div>

      <div className="card-text-wrapper-popup-title">
        <p>
          {title}
        </p>
      </div>

      <div className="image-frame-popup">
        <img className="thumb-image-popup" alt="Project" src={image} draggable="false" />
      </div>

      <div className="card-text-wrapper-popup-description">
        <p>
          {description}
        </p>
      </div>

      <div className="popup-buttons-wrapper">
        {download && (
          <PopUpButton name="Download" image="assets/img/download-button.svg" url={download} />
        )}

        {external && (
          <PopUpButton name="Visit" image="assets/img/arrow-button.svg" url={external} />
        )}

        {code && (
          <PopUpButton name="Get Code" image="assets/img/code-button.svg" url={code} />
        )}
        
      </div>
    </div>
  </div>
  );
}

PopUpComponent.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.string,
  download: PropTypes.string,
  code: PropTypes.string,
  externa: PropTypes.string,
  callback: PropTypes.func.isRequired,
}


export default PopUpComponent;




