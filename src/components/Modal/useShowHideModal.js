import { useEffect } from "react";
import useAnimationProps from "./useAnimationProps";

export default function useShowHideModal({ instance, show, triggerElement, onClose }) {
  const getAnimationProps = useAnimationProps(triggerElement, instance);

  // show/hide and animate the modal
  useEffect(() => {
    if (instance) {
      const animate = instance?.$el.childNodes[1].animate;
      if (show) {
        instance?.show();
        if (animate) instance?.$el.childNodes[1].animate?.(...getAnimationProps());
      } else {
        if (animate) {
          const animation = instance?.$el.childNodes[1]?.animate(...getAnimationProps(true));
          animation?.finished.then(() => instance?.hide());
        } else {
          instance?.hide();
        }
      }
    }
  }, [show, instance, getAnimationProps]);

  // call onClose when modal is hidden
  useEffect(() => {
    instance?.on("hide", () => onClose());
    return () => {
      instance?.off("hide");
    };
  }, [instance, onClose]);
}
