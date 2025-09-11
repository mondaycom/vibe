import React, { type AriaRole, forwardRef } from "react";
import classNames from "classnames";
import { type SubIcon, type VibeComponentProps } from "../../../types";
import { ComponentVibeId } from "../../../tests/constants";

export interface FontIconProps extends VibeComponentProps {
  /**
   * Callback fired when the icon is clicked.
   */
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  /**
   * The accessible label for the icon.
   */
  "aria-label"?: string;
  /**
   * The tab index of the icon for keyboard navigation.
   */
  tabIndex?: number;
  /**
   * The icon name or component.
   */
  icon?: SubIcon;
  /**
   * The ARIA role of the icon.
   */
  role?: AriaRole;
  /**
   * If true, hides the icon from screen readers.
   */
  "aria-hidden"?: boolean;
}

const FontIcon = forwardRef(
  (
    {
      id,
      className,
      onClick,
      "aria-label": iconLabel,
      tabIndex,
      icon: Icon,
      role = "img",
      "aria-hidden": ariaHidden,
      "data-testid": dataTestId
    }: FontIconProps,
    iconRef: React.ForwardedRef<HTMLElement>
  ) => {
    const isIconFunction = typeof Icon === "function";
    const iconClassName = isIconFunction ? "" : Icon;
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
        id={id}
        data-testid={dataTestId}
        data-vibe={ComponentVibeId.ICON}
      >
        {isIconFunction && <Icon />}
      </span>
    );
  }
);

export default FontIcon;
