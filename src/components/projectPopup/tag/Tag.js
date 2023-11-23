import { React } from "react";
import PropTypes from "prop-types";
import './tag.css';

function Tag({
  name,
}) {
  return (
  <div className="tag-component">
    <div className="tag-text">
      {name}
    </div>
  </div>
  );
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
}


export default Tag;