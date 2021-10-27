import React, { forwardRef } from "react";
import "./FontIcon.scss";
import classNames from "classnames";

const FontIcon = forwardRef(
  (
    { className, onClick, "aria-label": iconLabel, tabIndex, icon, role = "img", "aria-hidden": ariaHidden },
    iconRef
  ) => {
    const isIconFunction = typeof icon === "function";
    const iconClassName = isIconFunction ? "" : icon;
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <span
        aria-hidden={ariaHidden}
        className={classNames(className, "fa", iconClassName)}
        onClick={onClick}
        ref={iconRef}
        aria-label={iconLabel}
        tabIndex={tabIndex}
        role={role}
      >
        {isIconFunction && icon()}
      </span>
    );
  }
);
export default FontIcon;
