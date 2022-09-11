import cx from "classnames";
import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { NOOP } from "../../../utils/function-utils";
import { useSliderUi } from "../SliderContext";
import styles from "./SliderRail.module.scss";

const SliderRail = forwardRef(({ className, children, onClick, id }, ref) => {
  const { shapeTestId } = useSliderUi();
  function handleClick(e) {
    onClick(e);
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      id={id}
      data-testid={shapeTestId("rail")}
      className={cx(styles.sliderRail, "monday-slider__rail", className)}
      onClick={handleClick}
      ref={ref}
    >
      {children}
    </div>
  );
});

SliderRail.propTypes = {
  /**
   * Consumer/Custom/Extra `class names` to be added to the Component's-Root-Node
   */
  className: PropTypes.string,
  /**
   * onClick callback function
   */
  onClick: PropTypes.func
};

SliderRail.defaultProps = {
  className: "",
  onClick: NOOP
};

export default SliderRail;
