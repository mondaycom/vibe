import React, { FC } from "react";
import { bem } from "../SliderHelpers";
import VibeComponentProps from "../../../types/VibeComponentProps";

function defineFilledTrackProps(dimension: number, offset: number, reverse: boolean) {
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

interface SliderFilledTrackProps extends VibeComponentProps {
  /**
   * Consumer/Custom/Extra `class names` to be added to the Component's-Root-Node
   */
  className?: string;
  /**
   * Size of filled track, according to selected value of component (Slider)
   */
  dimension?: number;
  /**
   * Offset from start of track
   */
  offset?: number;
  /**
   * Start Filled Track from the end of the track
   * (`right` for LTR and `left` for RTL, `bottom` for vertical)
   */
  reverse?: boolean;
}

const SliderFilledTrack: FC<SliderFilledTrackProps> = ({ className, dimension = 0, offset = 0, reverse = false }) => {
  const filledTrackStyle = defineFilledTrackProps(dimension, offset, reverse);
  return <div className={bem("filled-track", "", className)} style={filledTrackStyle} />;
};

export default SliderFilledTrack;
