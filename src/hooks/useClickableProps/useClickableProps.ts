import { useKeyboardButtonPressedFunc } from "../useKeyboardButtonPressedFunc";
import React, { useRef } from "react";
import useMergeRefs from "../useMergeRefs";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import { ClickableProps } from "../../components/Clickable/Clickable";
import { NOOP } from "../../utils/function-utils";

/**
 * Return props for adding clickable functionality to the element except for the styles and classNames
 */
export default function useClickableProps(
  {
    onClick = NOOP,
    onMouseDown = NOOP,
    onMouseEnter = NOOP,
    onMouseLeave = NOOP,
    disabled = false,
    id,
    dataTestId,
    role = "button",
    tabIndex = 0,
    ariaLabel,
    ariaHidden,
    ariaHasPopup,
    ariaExpanded
  }: ClickableProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  const onKeyDown = useKeyboardButtonPressedFunc(onClick);
  const componentRef = useRef<HTMLElement | null>(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
  // Remove when ariaHasPopup is no longer a string
  const overrideAriaHasPopup = ariaHasPopup === undefined ? undefined : !!ariaHasPopup;

  return {
    ref: mergedRef,
    id,
    "data-testid": dataTestId || getTestId(ComponentDefaultTestId.CLICKABLE, id),
    onClick: disabled ? undefined : onClick,
    onKeyDown: disabled ? undefined : onKeyDown,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    tabIndex: disabled ? -1 : Number(tabIndex),
    role,
    "aria-label": ariaLabel,
    "aria-hidden": ariaHidden,
    "aria-haspopup": overrideAriaHasPopup,
    "aria-expanded": ariaExpanded
  };
}
