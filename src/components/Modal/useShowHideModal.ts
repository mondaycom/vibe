import { useCallback, useEffect } from "react";
import useAnimationProps from "./useAnimationProps";
import useKeyEvent from "../../hooks/useKeyEvent/index";

export default function useShowHideModal({
  instance,
  show,
  triggerElement,
  onClose,
  alertDialog
}: {
  // the type is A11yDialog, but it's not exported, so can't be used
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  instance: any;
  show: boolean;
  triggerElement: Element;
  onClose: () => void;
  alertDialog: boolean;
}) {
  const getAnimationProps = useAnimationProps(triggerElement, instance);

  const closeDialogIfNeeded = useCallback(() => {
    if (!alertDialog) {
      onClose?.();
    }
  }, [alertDialog, onClose]);

  useKeyEvent({
    callback: event => {
      if (instance?.$el.contains(document.activeElement)) {
        event.stopPropagation();
        closeDialogIfNeeded();
      }
    },
    capture: true,
    keys: ["Escape"]
  });

  // show/hide and animate the modal
  useEffect(() => {
    if (!instance) {
      return;
    }
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
  }, [show, instance, getAnimationProps]);

  // call onClose when modal is hidden
  useEffect(() => {
    instance?.on("hide", () => onClose?.());
    return () => {
      instance?.off("hide");
    };
  }, [instance, onClose]);

  return { closeDialogIfNeeded };
}
