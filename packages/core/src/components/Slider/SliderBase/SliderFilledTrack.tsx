import React, { type FC } from "react";
import type VibeComponentProps from "../../../types/VibeComponentProps";
import cx from "classnames";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import styles from "./SliderFilledTrack.module.scss";
import { type SliderColor } from "../Slider.types";

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
   * The size of the filled track, based on the selected value.
   */
  dimension?: number;
  /**
   * The offset from the start of the track.
   */
  offset?: number;
  /**
   * If true, the filled track starts from the end instead of the beginning.
   */
  reverse?: boolean;
  /**
   * The color of the filled track.
   */
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
