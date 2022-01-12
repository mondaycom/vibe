import { useCallback } from "react";

export default function useStartScrollAnimation(item, animationData, onScrollToFinished, animateScroll) {
  return useCallback(() => {
    const { offsetTop } = item;
    const editableAnimationData = animationData;
    if (editableAnimationData.animationStartTime) {
      // animation already in progress
      editableAnimationData.scrollOffsetFinal = offsetTop;
      return;
    }
    if (editableAnimationData.scrollOffsetInitial === offsetTop) {
      // offset already equals to item offset
      onScrollToFinished && onScrollToFinished();
      return;
    }

    editableAnimationData.scrollOffsetFinal = offsetTop;
    editableAnimationData.animationStartTime = performance.now();
    animateScroll();
  }, [item, animationData, onScrollToFinished, animateScroll]);
}
