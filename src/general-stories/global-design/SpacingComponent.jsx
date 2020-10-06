import React from "react";
import cx from "classnames";

import "./SpacingComponent.scss";

const SpacingComponent = ({ title, sizeInPx, spacingClass }) => {
  return (
    <div className="spacing-component">
      <div className="spacing-component-title-container">
        <span className="spacing-component-title">{title}</span>
        <span className="spacing-component-px-size">{sizeInPx}</span>
      </div>
      <div className={cx(spacingClass, "spacing-component-visualizer")} />
    </div>
  );
};

export default SpacingComponent;
