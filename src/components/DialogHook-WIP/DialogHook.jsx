import React, { cloneElement, useCallback, useRef, useState, useEffect, useMemo } from "react";
import { usePopper } from "react-popper";
import isFunction from "lodash/isFunction";
import "../Dialog/Dialog.scss";
import { chainFunctions, convertToArray } from "../../utils/function-utils";
import { DialogContent } from "../Dialog/DialogContent/DialogContent";
import { isInsideClass } from "../../utils/dom-utils";
import DialogReference from "./DialogReference/DialogReference";

const NOOP = () => {};

const Dialog = ({
  moveBy,
  children,
  position,
  wrapperClassName,
  startingEdge,
  showDelay,
  hideDelay,
  shouldShowOnMount,
  instantShowAndHide,
  onDialogDidShow = NOOP,
  open,
  disable,
  onDialogDidHide = NOOP,
  showTriggerIgnoreClass,
  hideTriggerIgnoreClass,
  showTrigger,
  hideTrigger,
  content,
  preventAnimationOnMount,
  animationType,
  showOnDialogEnter
}) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const contentRef = useRef(null);
  const [isOpen, setIsOpen] = useState(shouldShowOnMount);
  const hideTimeout = useRef(null);
  const showTimeout = useRef(null);

  useEffect(() => {
    if (!contentRef.current) {
      return;
    }
    setReferenceElement(contentRef.current);
  }, [contentRef, contentRef.current, setReferenceElement]);

  const isShown = useMemo(() => {
    return isOpen || open;
  }, [open, isOpen]);

  const onShowDialog = useCallback(() => {
    if (isShown) return;
    onDialogDidShow();
  }, [onDialogDidShow, isShown]);

  const showDialog = useCallback(() => {
    if (instantShowAndHide) {
      onShowDialog();
      return setIsOpen(true);
    }

    showTimeout.current = setTimeout(() => {
      onShowDialog();
      setIsOpen(true);
    }, showDelay);
  }, [showDelay, instantShowAndHide, setIsOpen, showTimeout, onShowDialog]);

  const showDialogIfNeeded = useCallback(() => {
    if (disable) {
      return;
    }

    if (hideTimeout && hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }

    if (showTimeout && !showTimeout.current) {
      showDialog();
    }
  }, [disable, showDialog, hideTimeout, showTimeout]);

  const hideDialog = useCallback(() => {
    if (instantShowAndHide) {
      onDialogDidHide();
      setIsOpen(false);
    } else {
      hideTimeout.current = setTimeout(() => {
        onDialogDidHide();
        setIsOpen(false);
      }, hideDelay);
    }
  }, [instantShowAndHide, hideDelay, setIsOpen, hideTimeout, onDialogDidHide]);

  const hideDialogIfNeeded = useCallback(() => {
    if (showTimeout && showTimeout.current) {
      clearTimeout(showTimeout.current);
      showTimeout.current = null;
    }

    if (hideTimeout && hideTimeout.current) {
      return;
    }
    hideDialog();
  }, [hideDialog, hideTimeout, showTimeout]);

  const isShowTrigger = useCallback(
    eventName => {
      return convertToArray(showTrigger).indexOf(eventName) > -1;
    },
    [showTrigger]
  );

  const isHideTrigger = useCallback(
    eventName => {
      return convertToArray(hideTrigger).indexOf(eventName) > -1;
    },
    [hideTrigger]
  );

  const handleEvent = useCallback(
    (eventName, target) => {
      if (isShowTrigger(eventName) && !isShown && !isInsideClass(target, showTriggerIgnoreClass)) {
        return showDialogIfNeeded();
      }

      if (isHideTrigger(eventName) && isShown && !isInsideClass(target, hideTriggerIgnoreClass)) {
        return hideDialogIfNeeded();
      }
    },
    [
      showTriggerIgnoreClass,
      hideTriggerIgnoreClass,
      isShown,
      showDialogIfNeeded,
      hideDialogIfNeeded,
      isShowTrigger,
      isHideTrigger
    ]
  );

  const onMouseEnter = useCallback(
    e => {
      handleEvent("mouseenter", e.target);
    },
    [handleEvent]
  );

  const onMouseLeave = useCallback(
    e => {
      handleEvent("mouseleave", e.target);
    },
    [handleEvent]
  );

  const onClick = useCallback(
    e => {
      if (e.button) return;
      handleEvent("click", e.target);
    },
    [handleEvent]
  );

  const onMouseDown = useCallback(
    e => {
      if (e.button) return;
      handleEvent("mousedown", e.target);
    },
    [handleEvent]
  );

  const onFocus = useCallback(
    e => {
      handleEvent("focus", e.target);
    },
    [handleEvent]
  );

  const onBlur = useCallback(
    e => {
      handleEvent("blur", e.relatedTarget);
    },
    [handleEvent]
  );

  const onEsc = useCallback(
    e => {
      handleEvent("esckey", e.target);
    },
    [handleEvent]
  );

  const onClickOutside = useCallback(
    e => {
      handleEvent("clickoutside", e.target);
    },
    [handleEvent]
  );

  const disableOnClickOutside = useMemo(() => {
    return !isHideTrigger("clickoutside");
  }, [isHideTrigger]);

  const animationTypeCalculated = useMemo(() => {
    return preventAnimationOnMount ? false : animationType;
  }, [preventAnimationOnMount, animationType]);

  const onDialogEnter = useCallback(() => {
    if (showOnDialogEnter) showDialogIfNeeded();
  }, [showOnDialogEnter]);

  const onDialogLeave = useCallback(() => {
    if (showOnDialogEnter) hideDialogIfNeeded();
  }, [showOnDialogEnter]);

  useEffect(() => {
    return () => {
      if (showTimeout && showTimeout.current) {
        clearTimeout(showTimeout.current);
      }
      if (hideTimeout && hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
    };
  }, [hideTimeout, showTimeout]);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: position,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [moveBy.secondary, moveBy.main]
        }
      }
    ]
  });

  console.log("referenceElement, popperElement:", referenceElement, popperElement);

  return (
    <>
      <DialogReference
        setReferenceElement={setReferenceElement}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
        onMouseDown={onMouseDown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </DialogReference>
      {isShown && (
        <div style={styles.popper} ref={setPopperElement} className="monday-style-dialog-content-wrapper">
          <DialogContent
            onMouseEnter={onDialogEnter}
            onMouseLeave={onDialogLeave}
            disableOnClickOutside={disableOnClickOutside}
            onClickOutside={onClickOutside}
            onEscKey={onEsc}
            animationType={animationTypeCalculated}
            position={attributes.placement}
            wrapperClassName={wrapperClassName}
            startingEdge={startingEdge}
            isOpen={isShown}
            showDelay={showDelay}
          >
            {isFunction(content) ? content() : content}
          </DialogContent>
        </div>
      )}
    </>
  );
};

export default Dialog;
