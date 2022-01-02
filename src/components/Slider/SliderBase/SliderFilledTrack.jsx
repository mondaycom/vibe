import React from "react";
import PropTypes from "prop-types";
import { bem } from "../SliderCommons";

function defineFilledTrackProps({ dimension, offset, reverse }) {
  if (reverse) {
    return {
      style: {
        right: `${offset}%`,
        width: `${dimension}%`
      }
    };
  }
  return {
    style: {
      left: `${offset}%`,
      width: `${dimension}%`
    }
  };
  // can be extended here for vertical slider
}

const SliderFilledTrack = ({ className, dimension, offset, reverse }) => {
  const filledTrackProps = defineFilledTrackProps({ dimension, offset, reverse });
  return <div className={bem("filled-track", "", className)} {...filledTrackProps} />;
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
