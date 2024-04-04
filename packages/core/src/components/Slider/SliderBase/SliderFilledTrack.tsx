import React, { FC } from "react";
import VibeComponentProps from "../../../types/VibeComponentProps";
import cx from "classnames";
import { SliderColor } from "../SliderConstants";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
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

export interface SliderFilledTrackProps extends VibeComponentProps {
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
  color: SliderColor;
}

const SliderFilledTrack: FC<SliderFilledTrackProps> = ({
  className,
  dimension = 0,
  offset = 0,
  reverse = false,
  color
}) => {
  const filledTrackStyle = defineFilledTrackProps(dimension, offset, reverse);
  return <div className={cx(styles.filledTrack, getStyle(styles, color), className)} style={filledTrackStyle} />;
};

export default SliderFilledTrack;
