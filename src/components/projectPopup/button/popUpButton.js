import { React } from "react";
import PropTypes from "prop-types";

import utils from "../../../utils/utils";

function PopUpButton({
  name,
  image,
  url,
}) {
  return (
  <div className="button-popup-wrapper"
    onClick={()=>{
      utils.openUrl(url);
    }}
  >
    <div className="button-popup-text">
      {name}
    </div>
    <img className="button-popup-icon" alt="Download button" src={image} draggable="false" />
  </div>
  );
}


PopUpButton.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}


export default PopUpButton;