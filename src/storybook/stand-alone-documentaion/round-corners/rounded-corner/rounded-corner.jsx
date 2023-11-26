import React from "react";
import cx from "classnames";
import classes from "./rounded-corner.module.scss";

const RoundedCorner = ({ number, roundedCornerSize }) => {
  return (
    <div className={cx(classes["rounded-corner-component"], classes[`rounded-corner-component--${roundedCornerSize}`])}>
      {number}
      <span className={classes["rounded-corner-component-px"]}>px</span>
    </div>
  );
};

export default RoundedCorner;
