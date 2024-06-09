import React, { useState, useCallback, useEffect } from "react";
import useAnimationProps from "./useAnimationProps";
import useKeyEvent from "../../hooks/useKeyEvent/index";
import { A11yDialogType } from "./ModalHelper";
import { keyCodes } from "../../constants";

const KEYS = [keyCodes.ESCAPE];

export default function useShowHideModal({
  instance,
  show,
  triggerElement,
  onClose,
  alertDialog
}: {
  instance: A11yDialogType;
  show: boolean;
  triggerElement: Element;
  onClose: () => void;
  alertDialog: boolean;
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const getAnimationProps = useAnimationProps(triggerElement, instance);

  const closeOnEsc = useCallback(
    (event: React.KeyboardEvent) => {
      if (!alertDialog && instance?.$el.contains(document.activeElement)) {
        event.stopPropagation();
        onClose?.();
      }
    },
    [alertDialog, instance?.$el, onClose]
  );

  useKeyEvent({
    callback: closeOnEsc,
    capture: true,
    keys: KEYS
  });

  useEffect(() => {
    if (show) {
      setIsAnimating(true);
      instance?.show();
      const animate = instance?.$el.childNodes[1].animate;
      if (animate) {
        instance?.$el.childNodes[1].animate?.(...getAnimationProps());
      }
    } else {
      const animate = instance?.$el.childNodes[1].animate;
      if (animate) {
        const animation = instance?.$el.childNodes[1]?.animate(...getAnimationProps(true));
        animation?.finished.then(() => {
          setIsAnimating(false);
          instance?.hide();
        });
      } else {
        setIsAnimating(false);
        instance?.hide();
      }
    }
  }, [show, instance, getAnimationProps]);

  return { shouldShow: isAnimating };
}
