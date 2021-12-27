import React from "react";
import PropTypes from "prop-types";
import { COMPONENT_ID, createBemHelper } from "../SliderCommons";
import "./SliderTrack.scss";

const bem = createBemHelper(COMPONENT_ID);

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
