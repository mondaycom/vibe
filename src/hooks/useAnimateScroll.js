import { useCallback } from "react";
import easeInOutQuint from "../services/easeInOutQuint.js";

export default function useAnimateScroll(
  animationDataRef,
  scrollTopRef,
  maxVirtualizedComponentOffset,
  virtualizedComponentRef,
  scrollDuration,
  onScrollToFinished
) {
  return useCallback(() => {
    animate(
      animationDataRef,
      scrollTopRef,
      maxVirtualizedComponentOffset,
      virtualizedComponentRef,
      scrollDuration,
      onScrollToFinished
    );
  }, [
    animationDataRef,
    scrollTopRef,
    maxVirtualizedComponentOffset,
    virtualizedComponentRef,
    scrollDuration,
    onScrollToFinished
  ]);
}

const animate = (
  animationDataRef,
  scrollTopRef,
  maxVirtualizedComponentOffset,
  virtualizedComponentRef,
  scrollDuration,
  onScrollToFinished
) => {
  return requestAnimationFrame(() => {
    const now = performance.now();
    const animationData = animationDataRef.current;
    const ellapsed = now - animationData.animationStartTime;
    const scrollDelta = animationData.scrollOffsetFinal - animationData.scrollOffsetInitial;
    const easedTime = easeInOutQuint(Math.min(1, ellapsed / scrollDuration));
    const scrollOffset = animationData.scrollOffsetInitial + scrollDelta * easedTime;
    const finalOffsetValue = Math.min(maxVirtualizedComponentOffset, scrollOffset);
    scrollTopRef.current = finalOffsetValue;
    virtualizedComponentRef.current.scrollTo(finalOffsetValue);

    if (ellapsed < scrollDuration) {
      animate(
        animationDataRef,
        scrollTopRef,
        maxVirtualizedComponentOffset,
        virtualizedComponentRef,
        scrollDuration,
        onScrollToFinished
      );
    } else {
      animationData.animationStartTime = undefined;
      onScrollToFinished && onScrollToFinished();
    }
  });
};
