import React, { FC } from "react";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { SliderColor } from "../SliderConstants";
import cx from "classnames";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import styles from "./SliderTrack.module.scss";

export interface SliderTrackProps extends VibeComponentProps {
  /**
   * Consumer/Custom/Extra `class names` to be added to the Component's-Root-Node
   */
  className?: string;
  color: SliderColor;
}

const SliderTrack: FC<SliderTrackProps> = React.memo(({ className, color }) => {
  return <div className={cx(styles.track, getStyle(styles, color), className)} />;
});

export default SliderTrack;
