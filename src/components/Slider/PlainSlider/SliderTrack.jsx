import React from "react";
import PropTypes from "prop-types";
import { createBemBlockHelper } from "../../../helpers/bem-helper";
import { COMPONENT_ID } from "../SliderCommons";
import "./SliderTrack.scss";

const bem = createBemBlockHelper(COMPONENT_ID);

const SliderTrack = React.memo(({ className }) => {
  console.log("slider: track", { className });
  return <div className={bem("track", "", className)} />;
});

SliderTrack.propTypes = {
  /**
   * Consumer/Custom/Extra `class names` to be added to the Component's-Root-Node
   */
  className: PropTypes.string
};

SliderTrack.defaultProps = {
  className: ""
};

export default SliderTrack;
