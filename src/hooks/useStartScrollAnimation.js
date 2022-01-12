import { useCallback } from "react";

export default function useStartScrollAnimation(item, animationData, onScrollToFinished, animateScroll) {
  return useCallback(() => {
    const { offsetTop } = item;
    if (animationData.animationStartTime) {
      // animation already in progress
      animationData.scrollOffsetFinal = offsetTop;
      return;
    }
    if (animationData.scrollOffsetInitial === offsetTop) {
      // offset already equals to item offset
      onScrollToFinished && onScrollToFinished();
      return;
    }

    animationData.scrollOffsetFinal = offsetTop;
    animationData.animationStartTime = performance.now();
    animateScroll();
  }, [item, animationData, onScrollToFinished, animateScroll]);
}
