import React from "react";
import cx from "classnames";
import "./TooltipReference.scss";

const TooltipReference = () => {
  return (
    <div className={cx("tooltip-reference-container")}>
      <div className="tooltip-reference-dot" />
      <div className="tooltip-reference-dot" />
      <div className="tooltip-reference-dot" />
    </div>
  );
};

export default TooltipReference;
