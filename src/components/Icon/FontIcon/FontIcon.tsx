import React, { AriaRole, forwardRef } from "react";
import classNames from "classnames";
import VibeComponentProps from "../../../interfaces/VibeComponentProps";
import VibeComponent from "../../../interfaces/VibeComponent";

interface FontIconProps extends VibeComponentProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  "aria-label"?: string;
  tabIndex?: number;
  icon?: string | React.Component | null;
  role?: AriaRole;
  "aria-hidden"?: boolean;
}

const FontIcon: VibeComponent<FontIconProps, HTMLElement> = forwardRef(
  (
    {
      className,
      onClick,
      "aria-label": iconLabel,
      tabIndex,
      icon: Icon,
      role = "img",
      "aria-hidden": ariaHidden,
      "data-testid": dataTestId
    },
    iconRef
  ) => {
    const isIconFunction = typeof Icon === "function";
    const iconClassName = isIconFunction ? "" : Icon;
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
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
        {isIconFunction && (
          //Icon components are not converted to typescript in this stage
          //@ts-ignore
          <Icon />
        )}
      </span>
    );
  }
);
export default FontIcon;
