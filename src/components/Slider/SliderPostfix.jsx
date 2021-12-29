import React from "react";
import { bem } from "./SliderCommons";

const SliderPostfix = ({ children }) => {
  console.log("slider: postfix", { children });
  return <div className={bem("postfix")}>{children}</div>;
};

SliderPostfix.propTypes = {};

SliderPostfix.defaultProps = {};

export default SliderPostfix;
