import React from "react";
import PropTypes from "prop-types";
import { bem } from "../SliderHelpers";

function defineFilledTrackProps({ dimension, offset, reverse }) {
  if (reverse) {
    return {
      right: `${offset}%`,
      width: `${dimension - offset}%`
    };
  }
  return {
    left: `${offset}%`,
    width: `${dimension - offset}%`
  };
}

const SliderFilledTrack = ({ className, dimension, offset, reverse }) => {
  const filledTrackStyle = defineFilledTrackProps({ dimension, offset, reverse });
  return <div className={bem("filled-track", "", className)} style={filledTrackStyle} />;
};

SliderFilledTrack.propTypes = {
  /**
   * Consumer/Custom/Extra `class names` to be added to the Component's-Root-Node
   */
  className: PropTypes.string,
  /**
   * Size of filled track, according to selected value of component (Slider)
   */
  dimension: PropTypes.number,
  /**
   * Offset from start of track
   */
  offset: PropTypes.number,
  /**
   * Start Filled Track from the end of the track
   * (`right` for LTR and `left` for RTL, `bottom` for vertical)
   */
  reverse: PropTypes.bool
};

SliderFilledTrack.defaultProps = {
  className: "",
  dimension: 0,
  offset: 0,
  reverse: false
};

export default SliderFilledTrack;
