import { FocusEvent, useCallback, useMemo, useRef } from "react";

type Result = {
  focusWithinProps?: {
    onFocus?: (e: FocusEvent) => void;
    onBlur?: (e: FocusEvent) => void;
  };
};

export function useFocusWithin({
  onFocusWithin,
  onFocusWithinChange,
  isDisabled,
  onBlurWithin
}: {
  onFocusWithin?: (event: FocusEvent) => void;
  onBlurWithin?: (event: FocusEvent) => void;
  onFocusWithinChange?: (isWithinChange: boolean) => void;
  isDisabled?: boolean;
}): Result {
  const state = useRef({
    isFocusWithin: false
  }).current;

  const onFocus = useCallback(
    (e: FocusEvent) => {
      if (!state.isFocusWithin) {
        if (onFocusWithin) {
          onFocusWithin(e);
        }

        if (onFocusWithinChange) {
          onFocusWithinChange(true);
        }

        state.isFocusWithin = true;
      }
    },
    [onFocusWithin, onFocusWithinChange, state]
  );

  const onBlur = useCallback(
    (e: FocusEvent) => {
      // We don't want to trigger onBlurWithin and then immediately onFocusWithin again
      // when moving focus inside the element. Only trigger if the currentTarget doesn't
      // include the relatedTarget (where focus is moving).
      const currentTarget = e.currentTarget;
      if (state.isFocusWithin && !currentTarget.contains(e.relatedTarget)) {
        if (onBlurWithin) {
          onBlurWithin(e);
        }

        if (onFocusWithinChange) {
          onFocusWithinChange(false);
        }

        state.isFocusWithin = false;
      }
    },
    [onBlurWithin, onFocusWithinChange, state]
  );

  const isDisabledReturnValue = useMemo(() => {
    if (!isDisabled) return {};
    return { focusWithinProps: {} };
  }, [isDisabled]);

  if (isDisabled) {
    return isDisabledReturnValue;
  }

  return {
    focusWithinProps: {
      onFocus: onFocus,
      onBlur: onBlur
    }
  };
}
