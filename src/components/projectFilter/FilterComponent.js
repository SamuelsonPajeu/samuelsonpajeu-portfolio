import { React } from "react";
import PropTypes from "prop-types";

function FilterComponent({
  name,
  selected=false,
}) {
  return (
    <div key={name} className={selected ? "option" : "option-2"}>
      <div className="ellipse" />
      <div className="filter-text-wrapper">{name}</div>
    </div>

  );
}

FilterComponent.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool,
}


export default FilterComponent;