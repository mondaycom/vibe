import React from "react";
import PropTypes from "prop-types";
import { COMPONENT_ID, createBemHelper, SIZES_BASIC } from "../SliderCommons";
import "./SliderRail.scss";

const bem = createBemHelper(COMPONENT_ID);

const SliderRail = ({ className, children, size }) => {
  console.log("slider: rail", { className });
  return <div className={bem("rail", [size], className)}>{children}</div>;
};

SliderRail.sizes = SIZES_BASIC;

SliderRail.propTypes = {
  /**
   * Consumer/Custom/Extra `class names` to be added to the Component's-Root-Node
   */
  className: PropTypes.string,
  /**
   * Size small/medium/large of the component (Slider)
   */
  size: PropTypes.oneOf(Object.values(SliderRail.sizes))
};

SliderRail.defaultProps = {
  className: "",
  size: SliderRail.sizes.SMALL
};

export default SliderRail;
