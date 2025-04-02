import React, { FC } from "react";
import VibeComponentProps from "../../../types/VibeComponentProps";
import cx from "classnames";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import styles from "./SliderTrack.module.scss";
import { SliderColor } from "../Slider.types";

export interface SliderTrackProps extends VibeComponentProps {
  /**
   * The color of the slider track.
   */
  color: SliderColor;
}

const SliderTrack: FC<SliderTrackProps> = React.memo(({ className, color }) => {
  return <div className={cx(styles.track, getStyle(styles, color), className)} />;
});

export default SliderTrack;
