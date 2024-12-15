import { useCallback } from "react";
import { A11yDialogType } from "./ModalHelper";

export default function useAnimationProps(triggerElement: Element, instance: A11yDialogType) {
  return useCallback(
    (hideAnimation = false) => {
      let animationStart, animationEnd;
      if (triggerElement) {
        const { top: sourceTop, right: sourceRight } = triggerElement.getBoundingClientRect();
        const {
          top: destinationTop,
          left: destinationLeft,
          width,
          height
        } = instance?.$el.childNodes[1].getBoundingClientRect() || {};

        animationStart = {
          transform: `translate(${sourceRight - destinationLeft - width / 2}px, ${
            sourceTop - destinationTop - height / 2
          }px) scale(0.6)`,
          opacity: 0
        };
        animationEnd = { transform: `translate(0, 0) scale(1)`, opacity: 1 };
      } else {
        animationStart = {
          transform: `scale(0.70)`,
          opacity: 0.4
        };
        animationEnd = { transform: `scale(1)`, opacity: 1 };
      }

      return hideAnimation
        ? [
            [animationEnd, animationStart],
            {
              duration: 100,
              easing: "cubic-bezier(0.4, 0, 1, 1)"
            }
          ]
        : [
            [animationStart, animationEnd],
            {
              duration: 100,
              easing: "cubic-bezier(0, 0, 0.35, 1)"
            }
          ];
    },
    [instance, triggerElement]
  );
}
