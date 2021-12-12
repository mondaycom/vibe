import React, { forwardRef } from "react";
import classNames from "classnames";

const FontIcon = forwardRef(
  (
    {
      className,
      onClick,
      "aria-label": iconLabel,
      tabIndex,
      icon,
      role = "img",
      "aria-hidden": ariaHidden,
      "data-testid": dataTestId
    },
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
        data-testid={dataTestId}
      >
        {isIconFunction && icon()}
      </span>
    );
  }
);
export default FontIcon;
