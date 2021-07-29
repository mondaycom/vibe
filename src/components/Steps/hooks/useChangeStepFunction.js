import { useCallback } from "react";

export function useChangeStepFunction({ onClickCallback, activeStepIndex, stepsCount, newStepIndex }) {
  return useCallback(
    e => {
      const newIndex = newStepIndex < stepsCount && newStepIndex >= 0 ? newStepIndex : activeStepIndex;
      onClickCallback(e, newIndex);
    },
    [onClickCallback, activeStepIndex, stepsCount, newStepIndex]
  );
}
