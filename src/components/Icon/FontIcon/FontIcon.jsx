import React, { forwardRef } from "react";
import "./FontIcon.scss";
import classNames from "classnames";

const FontIcon = forwardRef(
  (
    { className, clickable, onClickCallback, iconLabel, tabindex, iconName },
    iconRef
  ) => {
    return (
      <span
        className={classNames(className, "fa")}
        onClick={onClickCallback}
        ref={iconRef}
        aria-label={iconLabel}
        tabIndex={tabindex}
      >
        {typeof iconName === "function" && iconName()}
      </span>
    );
  }
);
export default FontIcon;
