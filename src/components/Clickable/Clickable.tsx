/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { AriaRole, forwardRef, useRef } from "react";
import { noop as NOOP } from "lodash-es";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import { useKeyboardButtonPressedFunc } from "../../hooks/useKeyboardButtonPressedFunc";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import styles from "./Clickable.module.scss";

const CSS_BASE_CLASS = "monday-style-clickable";

export interface ClickableProps extends VibeComponentProps {
  elementType?: keyof JSX.IntrinsicElements | string;
  children?: React.ReactNode;
  role?: AriaRole;
  onClick?: (event: React.MouseEvent) => void;
  enableTextSelection?: boolean;
  onMouseDown?: (event: React.MouseEvent) => void;
  ariaLabel?: string;
  ariaHidden?: boolean;
  ariaHasPopup?: boolean | string;
  ariaExpanded?: boolean;
  tabIndex?: string;
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
    const componentRef = useRef<HTMLElement | null>(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const onKeyDown = useKeyboardButtonPressedFunc(onClick);
    return React.createElement(
      elementType,
      {
        ref: mergedRef,
        className: cx(styles.clickable, CSS_BASE_CLASS, className, {
          [styles.disabled]: disabled,
          ["disabled"]: disabled,
          [styles.disableTextSelection]: !enableTextSelection,
          ["monday-style-clickable--disable-text-selection"]: !enableTextSelection
        }),
        "data-testid": dataTestId || getTestId(ComponentDefaultTestId.CLICKABLE, id),
        role: role,
        onClick: disabled ? undefined : onClick,
        id: id,
        onKeyDown: disabled ? undefined : onKeyDown,
        tabIndex: disabled ? -1 : tabIndex,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        "aria-haspopup": ariaHasPopup,
        "aria-expanded": ariaExpanded,
        onMouseDown: onMouseDown,
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
