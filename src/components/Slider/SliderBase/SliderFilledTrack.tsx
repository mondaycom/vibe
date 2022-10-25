import { ELEMENT_TYPES, getTestId } from "../../../utils/test-utils";
import cx from "classnames";
import React, { FC } from "react";
import VibeComponentProps from "../../../types/VibeComponentProps";
import styles from "./SliderFilledTrack.module.scss";

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

const SliderFilledTrack: FC<SliderFilledTrackProps> = ({
  className,
  dimension = 0,
  offset = 0,
  reverse = false,
  id,
  "data-testid": dataTestId
}) => {
  const filledTrackStyle = defineFilledTrackProps(dimension, offset, reverse);
  return (
    <div
      className={cx(styles.sliderFilledTrack, "monday-slider__filled-track", className)}
      style={filledTrackStyle}
      id={id}
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.SLIDER_FILLED_TRACK, id)}
    />
  );
};

export default SliderFilledTrack;
