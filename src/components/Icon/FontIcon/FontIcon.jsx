import React, { forwardRef } from "react";
import "./FontIcon.scss";
import classNames from "classnames";
import Clickable from "../../Clickable/Clickable";

const FontIcon = forwardRef(
  (
    { className, onClick, "aria-label": iconLabel, tabIndex, icon, role = "img", "aria-hidden": ariaHidden },
    iconRef
  ) => {
    const isIconFunction = typeof icon === "function";
    const iconClassName = isIconFunction ? "" : icon;
    return (
      <Clickable
        elementType="span"
        ariaHidden={ariaHidden}
        className={classNames(className, "fa", iconClassName)}
        onClick={onClick}
        ref={iconRef}
        ariaLabel={iconLabel}
        tabIndex={tabIndex}
        role={role}
      >
        {isIconFunction && icon()}
      </Clickable>
    );
  }
);
export default FontIcon;
