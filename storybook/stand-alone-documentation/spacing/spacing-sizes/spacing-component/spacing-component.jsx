import React from "react";
import cx from "classnames";

import "./spacing-component.scss";

const SpacingComponent = ({ title, sizeInPx, spacingVariableName }) => {
  return (
    <div className="spacing-component">
      <div className={cx(spacingVariableName, "spacing-component-visualizer")} />
      <div className="spacing-component_description">
        <div className="spacing-component_title-container">
          <span className="spacing-component_title">{title}</span>
          <span className="spacing-component_px-size">{sizeInPx}</span>
        </div>
        <span className="spacing-component_variable-name">{`var(--${spacingVariableName})`}</span>
      </div>
    </div>
  );
};

export default SpacingComponent;
