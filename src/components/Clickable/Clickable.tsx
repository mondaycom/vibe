/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { AriaRole, forwardRef } from "react";
import cx from "classnames";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import { ComponentDefaultTestId } from "../../tests/constants";
import { noop as NOOP } from "lodash-es";
import useClickableProps from "../../hooks/useClickableProps";
import styles from "./Clickable.module.scss";

const CSS_BASE_CLASS = "monday-style-clickable";

export interface ClickableProps extends VibeComponentProps {
  elementType?: keyof JSX.IntrinsicElements | string;
  children?: React.ReactNode;
  role?: AriaRole;
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  enableTextSelection?: boolean;
  onMouseDown?: (event: React.MouseEvent) => void;
  ariaLabel?: string;
  ariaHidden?: boolean;
  // TODO remove string in Vibe 2.0
  ariaHasPopup?: boolean | string;
  ariaExpanded?: boolean;
  // TODO remove string in Vibe 2.0
  tabIndex?: string | number;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const Clickable: VibeComponent<ClickableProps, HTMLElement> = forwardRef(
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
      ariaLabel,
      ariaHidden,
      ariaHasPopup,
      ariaExpanded,
      tabIndex = "0",
      disabled = false,
      style,
      "data-testid": dataTestId
    },
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const clickableProps = useClickableProps(
      {
        onClick,
        onMouseDown,
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
    const overrideClassName = cx(styles.clickable, CSS_BASE_CLASS, className, {
      [styles.disabled]: disabled,
      ["disabled"]: disabled,
      [styles.disableTextSelection]: !enableTextSelection,
      ["monday-style-clickable--disable-text-selection"]: !enableTextSelection
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

Object.assign(Clickable, {
  defaultTestId: ComponentDefaultTestId.CLICKABLE
});

export default Clickable;
