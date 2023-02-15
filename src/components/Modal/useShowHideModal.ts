import React, { useCallback, useEffect } from "react";
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
  const getAnimationProps = useAnimationProps(triggerElement, instance);

  const onCloseCallback = useCallback(() => {
    console.log("%%% onCloseCallback");
    onClose?.();
  }, [onClose]);

  const closeModalIfNotAlert = useCallback(() => {
    if (!alertDialog) {
      instance.hide();
    }
  }, [alertDialog, instance]);

  const closeModal = useCallback(() => {
    instance.hide();
  }, [instance]);

  const closeOnEsc = useCallback(
    (event: React.KeyboardEvent) => {
      if (instance?.$el.contains(document.activeElement)) {
        event.stopPropagation();
        closeModalIfNotAlert();
      }
    },
    [closeModalIfNotAlert, instance?.$el]
  );

  useKeyEvent({
    callback: closeOnEsc,
    capture: true,
    keys: KEYS
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
    if (!instance) {
      return;
    }

    instance.on("hide", onCloseCallback);
    return () => {
      instance.off("hide");
    };
  }, [instance, onCloseCallback]);

  return { closeModalIfNotAlert, closeModal };
}
