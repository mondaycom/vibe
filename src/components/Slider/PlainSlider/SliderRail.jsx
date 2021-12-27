import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { createBemBlockHelper } from "../../../helpers/bem-helper";
import { SIZES_BASIC } from "../../../constants";
import { COMPONENT_ID } from "../SliderCommons";
import "./SliderRail.scss";

const bem = createBemBlockHelper(COMPONENT_ID);

const SliderRail = forwardRef(({ className, children, onClick, size }, ref) => {
  function handleClick(e) {
    console.log("click on track", e, e.clientX);
    if (typeof onClick === "function") {
      onClick(e);
    }
  }

  console.log("slider: rail", { className });
  return (
    <div className={bem("rail", [size], className)} onClick={handleClick} ref={ref}>
      {children}
    </div>
  );
});

SliderRail.sizes = SIZES_BASIC;

SliderRail.propTypes = {
  /**
   * Consumer/Custom/Extra `class names` to be added to the Component's-Root-Node
   */
  className: PropTypes.string,
  /**
   * onClick callback function
   */
  onClick: PropTypes.func,
  /**
   * Size small/medium/large of the component (Slider)
   */
  size: PropTypes.oneOf(Object.values(SliderRail.sizes))
};

SliderRail.defaultProps = {
  className: "",
  onClick: undefined,
  size: SliderRail.sizes.SMALL
};

export default SliderRail;
