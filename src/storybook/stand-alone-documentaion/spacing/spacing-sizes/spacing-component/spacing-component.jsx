import React from "react";
import cx from "classnames";

import "./spacing-component.scss";

const SpacingComponent = ({ title, sizeInPx, spacingClass }) => {
  return (
    <div className="spacing-component">
      <div className={cx(spacingClass, "spacing-component-visualizer")} />
      <div className="spacing-component_description">
        <div className="spacing-component_title-container">
          <span className="spacing-component_title">{title}</span>
          <span className="spacing-component_px-size">{sizeInPx}</span>
        </div>
        <span className="spacing-component_variable-name">{`$${spacingClass}`}</span>
      </div>
    </div>
  );
};

export default SpacingComponent;
