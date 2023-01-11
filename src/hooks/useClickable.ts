import { useKeyboardButtonPressedFunc } from "./useKeyboardButtonPressedFunc";
import React, { useRef } from "react";
import useMergeRefs from "./useMergeRefs";
import cx from "classnames";
import { BEMClass } from "../helpers/bem-helper";
import { getTestId } from "../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../tests/constants";
import { ClickableProps } from "../components/Clickable/Clickable";
import { NOOP } from "../utils/function-utils";
import "../components/Clickable/Clickable.scss";

const CSS_BASE_CLASS = "monday-style-clickable";
const bemHelper = BEMClass(CSS_BASE_CLASS);

export default function useClickable(
  {
    onClick = NOOP,
    onMouseDown = NOOP,
    className = "",
    enableTextSelection = false,
    disabled = false,
    id,
    dataTestId,
    role = "button",
    tabIndex = 0,
    ariaLabel,
    ariaHidden,
    ariaHasPopup,
    ariaExpanded,
    style
  }: ClickableProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  const onKeyDown = useKeyboardButtonPressedFunc(onClick);
  const componentRef = useRef<HTMLElement | null>(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  return {
    ref: mergedRef,
    className: cx(CSS_BASE_CLASS, className, {
      disabled,
      [bemHelper({ state: "disable-text-selection" })]: !enableTextSelection
    }),
    role,
    id,
    "data-testid": dataTestId || getTestId(ComponentDefaultTestId.CLICKABLE, id),
    onClick: disabled ? undefined : onClick,
    onKeyDown: disabled ? undefined : onKeyDown,
    onMouseDown,
    tabIndex: disabled ? -1 : Number(tabIndex),
    "aria-label": ariaLabel,
    "aria-hidden": ariaHidden,
    "aria-haspopup": ariaHasPopup,
    "aria-expanded": ariaExpanded,
    style
  };
}
