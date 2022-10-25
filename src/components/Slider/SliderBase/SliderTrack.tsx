import React, { FC } from "react";
import VibeComponentProps from "../../../types/VibeComponentProps";
import cx from "classnames";
import styles from "./SliderTrack.module.scss";

export interface SliderTrackProps extends VibeComponentProps {
  /**
   * Consumer/Custom/Extra `class names` to be added to the Component's-Root-Node
   */
  className?: string;
}

const SliderTrack: FC<SliderTrackProps> = React.memo(({ className }) => {
  return (
    <div
      className={cx(styles.sliderTrack, "monday-slider__track", {
        [`monday-slider__track--${className}`]: className
      })}
    />
  );
});

export default SliderTrack;
