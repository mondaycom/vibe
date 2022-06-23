import { useCallback } from "react";

export default function useAnimationProps(triggerElement, instance) {
  return useCallback(
    (hideAnimation = false) => {
      let animationStart, animationEnd;
      if (triggerElement) {
        const { top: sourceTop, left: sourceLeft } = triggerElement.getBoundingClientRect();
        const {
          top: destinationTop,
          left: destinationLeft,
          width,
          height
        } = instance?.$el.childNodes[1].getBoundingClientRect();

        animationStart = {
          transform: `translate(${sourceLeft - destinationLeft - width / 2}px, ${
            sourceTop - destinationTop - height / 2
          }px) scale(0.2)`,
          opacity: 0.2
        };
        animationEnd = { transform: `translate(0, 0) scale(1)`, opacity: 1 };
      } else {
        animationStart = {
          transform: `scale(0.2)`,
          opacity: 0.2
        };
        animationEnd = { transform: `scale(1)`, opacity: 1 };
      }

      return [
        hideAnimation ? [animationEnd, animationStart] : [animationStart, animationEnd],
        {
          duration: hideAnimation ? 0 : 200,
          easing: "ease-in"
        }
      ];
    },
    [instance, triggerElement]
  );
}
