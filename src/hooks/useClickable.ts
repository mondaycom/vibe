import { useKeyboardButtonPressedFunc } from "./useKeyboardButtonPressedFunc";
import React, { useRef } from "react";
import useMergeRefs from "./useMergeRefs";
import { getTestId } from "../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../tests/constants";
import { ClickableProps } from "../components/Clickable/Clickable";
import { NOOP } from "../utils/function-utils";

/**
 * Adds clickable functionality to the element except for the styles and classNames
 */
export default function useClickable(
  {
    onClick = NOOP,
    onMouseDown = NOOP,
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

  return {
    ref: mergedRef,
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
    "aria-expanded": ariaExpanded
  };
}
