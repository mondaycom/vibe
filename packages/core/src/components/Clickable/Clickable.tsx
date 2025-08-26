import cx from "classnames";
import React, { type AriaRole, forwardRef } from "react";
import { noop as NOOP } from "es-toolkit/compat";
import { type VibeComponentProps } from "../../types";
import useClickableProps from "../../hooks/useClickableProps/useClickableProps";
import styles from "./Clickable.module.scss";

export interface ClickableProps extends VibeComponentProps {
  /**
   * The HTML element or custom component used as the root.
   */
  elementType?: keyof JSX.IntrinsicElements | string;
  /**
   * The content inside the clickable element.
   */
  children?: React.ReactNode;
  /**
   * The ARIA role of the element.
   */
  role?: AriaRole;
  /**
   * Callback fired when the element is clicked.
   */
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  /**
   * If true, allows text selection inside the element.
   */
  enableTextSelection?: boolean;
  /**
   * Callback fired when the mouse button is pressed down on the element.
   */
  onMouseDown?: (event: React.MouseEvent) => void;
  /**
   * Callback fired when the mouse enters the element.
   */
  onMouseEnter?: (event: React.MouseEvent) => void;
  /**
   * Callback fired when the mouse leaves the element.
   */
  onMouseLeave?: (event: React.MouseEvent) => void;
  /**
   * The label of the element for accessibility.
   */
  ariaLabel?: string;
  /**
   * If true, hides the element from assistive technologies.
   */
  ariaHidden?: boolean;
  // TODO: [breaking] remove string type
  /**
   * Indicates the presence of a popup associated with the element.
   */
  ariaHasPopup?: boolean | string;
  /**
   * If true, indicates that the associated popup is open.
   */
  ariaExpanded?: boolean;
  // TODO: [breaking] remove string type
  /**
   * The tab order of the element.
   */
  tabIndex?: string | number;
  /**
   * If true, the element is disabled.
   */
  disabled?: boolean;
  /**
   * Inline styles applied to the element.
   */
  style?: React.CSSProperties;
}

const Clickable = forwardRef(
  (
    {
      elementType = "div",
      className = "",
      id,
      children,
      role = "button",
      onClick = NOOP,
      enableTextSelection = false,
      onMouseDown = NOOP,
      onMouseEnter = NOOP,
      onMouseLeave = NOOP,
      ariaLabel,
      ariaHidden,
      ariaHasPopup,
      ariaExpanded,
      tabIndex = "0",
      disabled = false,
      style,
      "data-testid": dataTestId
    }: ClickableProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const clickableProps = useClickableProps(
      {
        onClick,
        onMouseDown,
        onMouseEnter,
        onMouseLeave,
        disabled,
        id,
        "data-testid": dataTestId,
        role,
        tabIndex,
        ariaLabel,
        ariaHidden,
        ariaHasPopup,
        ariaExpanded
      },
      ref
    );
    const overrideClassName = cx(styles.clickable, className, {
      [styles.disabled]: disabled,
      [styles.disableTextSelection]: !enableTextSelection
    });

    return React.createElement(
      elementType,
      {
        ...clickableProps,
        className: overrideClassName,
        style: style
      },
      children
    );
  }
);

export default Clickable;
