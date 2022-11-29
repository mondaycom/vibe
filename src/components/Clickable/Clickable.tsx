/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { AriaRole, forwardRef, useRef } from "react";
import NOOP from "lodash/noop";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import { BEMClass } from "../../helpers/bem-helper";
import { useKeyboardButtonPressedFunc } from "../../hooks/useKeyboardButtonPressedFunc";
import { getTestId } from "../../tests/base-tests-utils";
import { ComponentDefaultTestId } from "../../tests";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import "./Clickable.scss";

const CSS_BASE_CLASS = "monday-style-clickable";
const bemHelper = BEMClass(CSS_BASE_CLASS);

export interface ClickableProps extends VibeComponentProps {
  elementType?: keyof JSX.IntrinsicElements | string;
  className?: string;
  id?: string;
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
  dataTestId?: string;
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
      dataTestId
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
        className: cx(CSS_BASE_CLASS, className, {
          disabled,
          [bemHelper({ state: "disable-text-selection" })]: !enableTextSelection
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
