import cx from "classnames";
import React from "react";
import PropTypes from "prop-types";
import styles from "./SliderTrack.module.scss";

const SliderTrack = React.memo(({ className }) => {
  return (
    <div
      className={cx(styles.sliderTrack, "monday-slider__track", {
        [`monday-slider__track--${className}`]: className
      })}
    />
  );
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
