import React from "react";
import "./RoundedCornerComponent.scss";
import cx from "classnames";

const RoundedCornerComponent = ({ number, roundedCornerClassName }) => {
  return (
    <div className={cx(roundedCornerClassName, "rounded-corner-component")}>
      {number}
      <span className="rounded-corner-component-px">px</span>
    </div>
  );
};

export default RoundedCornerComponent;
