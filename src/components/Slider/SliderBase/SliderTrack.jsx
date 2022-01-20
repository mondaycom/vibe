import React from "react";
import PropTypes from "prop-types";
import { bem } from "../SliderHelpers";

const SliderTrack = React.memo(({ className }) => {
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
