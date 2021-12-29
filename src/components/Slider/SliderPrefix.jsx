import React from "react";
import { bem } from "./SliderCommons";

const SliderPrefix = ({ children }) => {
  console.log("slider: postfix", { children });
  return <div className={bem("prefix")}>{children}</div>;
};

SliderPrefix.propTypes = {};

SliderPrefix.defaultProps = {};

export default SliderPrefix;
