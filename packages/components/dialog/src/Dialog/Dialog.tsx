import cx from "classnames";
import React, { useState, useEffect, useRef, useContext, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import {
  useFloating,
  offset,
  flip,
  shift,
  hide,
  arrow as arrowMiddleware,
  autoUpdate,
  type Placement,
  type Middleware
} from "@floating-ui/react-dom";
import { isFunction } from "es-toolkit";
import {
  chainFunctions,
  chainRefFunctions,
  convertToArray,
  NOOP,
  isInsideClass,
  ComponentDefaultTestId,
  getTestId,
  isClient
} from "@vibe/shared";
import DialogContent from "./components/DialogContent/DialogContent";
import { Refable } from "./components/Refable/Refable";
import styles from "./Dialog.module.scss";
import { type DialogTriggerEvent, type DialogEvent, type DialogProps } from "./Dialog.types";
import { LayerContext, LayerProvider } from "@vibe/layer";

function Dialog({
  // Core props
  id,
  "data-testid": dataTestId,
  children,
  content,
  position = "top",
  moveBy = { main: 0, secondary: 0 },
  middleware: middlewareProp = [],
  startingEdge,
  showDelay = 100,
  hideDelay = 100,
  instantShowAndHide = false,
  getDynamicShowDelay,
  showTrigger = "mouseenter",
  hideTrigger = "mouseleave",
  showOnDialogEnter = false,
  showTriggerIgnoreClass,
  hideTriggerIgnoreClass,
  addKeyboardHideShowTriggersByDefault = false,
  shouldShowOnMount = false,
  disable = false,
  open = false,
  isOpen: isOpenProp,
  useDerivedStateFromProps = false,
  animationType = "expand",
  preventAnimationOnMount = false,
  tooltip = false,
  tooltipClassName,
  containerSelector,
  disableContainerScroll,
  zIndex,
  wrapperClassName,
  referenceWrapperClassName,
  referenceWrapperElement,
  onBlur: onBlurProp,
  onKeyDown: onKeyDownProp,
  onClick: onClickProp,
  onFocus: onFocusProp,
  onMouseDown: onMouseDownProp,
  onMouseEnter: onMouseEnterProp,
  onMouseLeave: onMouseLeaveProp,
  onContextMenu: onContextMenuProp,
  onDialogDidShow = NOOP,
  onDialogDidHide = NOOP,
  onClickOutside: onClickOutsideProp = NOOP,
  onContentClick: onContentClickProp = NOOP,
  hideWhenReferenceHidden = false,
  shouldCallbackOnMount = false,
  observeContentResize = false,
  enableNestedDialogLayer = false
}: DialogProps) {
  const [isOpenState, setIsOpenState] = useState(shouldShowOnMount);
  const [preventAnimation, setPreventAnimation] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);

  const showTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  const { layerRef } = useContext(LayerContext);

  // Derived state
  const isOpenInternal = useDerivedStateFromProps ? isOpenProp : isOpenState;
  const isShown = isOpenInternal || open;

  // Build middleware array for Floating UI
  const floatingMiddleware = useMemo<Middleware[]>(() => {
    const middlewareList: Middleware[] = [];

    // Get user-provided middleware (filter out invalid ones)
    const validMiddleware = middlewareProp.filter(
      (m): m is Middleware => m != null && typeof m === "object" && typeof m.fn === "function"
    );

    // Check if user provided their own middleware to override defaults
    const hasCustomOffset = validMiddleware.some(m => m.name === "offset");
    const hasCustomFlip = validMiddleware.some(m => m.name === "flip");
    const hasCustomShift = validMiddleware.some(m => m.name === "shift");

    // Offset middleware - skip if user provided their own
    if (!hasCustomOffset && (moveBy.main !== 0 || moveBy.secondary !== 0)) {
      middlewareList.push(offset({ mainAxis: moveBy.main || 0, crossAxis: moveBy.secondary || 0 }));
    }

    // Core positioning middleware - skip if user provided their own
    if (!hasCustomFlip) {
      middlewareList.push(flip());
    }
    if (!hasCustomShift) {
      middlewareList.push(shift());
    }

    // Add user-provided middleware
    middlewareList.push(...validMiddleware);

    // Arrow middleware - pass ref directly, Floating UI handles null refs
    if (tooltip) {
      middlewareList.push(arrowMiddleware({ element: arrowRef }));
    }

    // Hide middleware for detecting when reference is hidden
    if (hideWhenReferenceHidden) {
      middlewareList.push(hide());
    }

    return middlewareList;
  }, [moveBy.main, moveBy.secondary, tooltip, hideWhenReferenceHidden, middlewareProp]);

  // Configure autoUpdate for position tracking
  const whileElementsMounted = useCallback(
    (reference: HTMLElement, floating: HTMLElement, update: () => void) => {
      return autoUpdate(reference, floating, update, {
        elementResize: observeContentResize,
        layoutShift: false
      });
    },
    [observeContentResize]
  );

  // Use Floating UI hook
  const { refs, floatingStyles, placement, middlewareData } = useFloating({
    placement: position as Placement,
    middleware: floatingMiddleware,
    whileElementsMounted,
    elements: {
      reference: referenceElement
    }
  });

  // Check if reference is hidden (from hide middleware)
  const isReferenceHidden = middlewareData.hide?.referenceHidden ?? false;

  const isShowTrigger = useCallback(
    (eventName: DialogTriggerEvent) => {
      const showTriggersArray = convertToArray(showTrigger);
      if (addKeyboardHideShowTriggersByDefault && eventName === "focus" && showTriggersArray.includes("mouseenter")) {
        return true;
      }
      return showTriggersArray.includes(eventName);
    },
    [showTrigger, addKeyboardHideShowTriggersByDefault]
  );

  const isHideTrigger = useCallback(
    (eventName: DialogTriggerEvent) => {
      const hideTriggersArray = convertToArray(hideTrigger);
      if (addKeyboardHideShowTriggersByDefault && eventName === "blur" && hideTriggersArray.includes("mouseleave")) {
        return true;
      }
      return hideTriggersArray.includes(eventName);
    },
    [hideTrigger, addKeyboardHideShowTriggersByDefault]
  );

  const showDialog = useCallback(
    (event: DialogEvent, eventName: DialogTriggerEvent | string, options: { preventAnimation?: boolean } = {}) => {
      let finalShowDelay = showDelay;
      let preventAnimationValue = options.preventAnimation;
      if (getDynamicShowDelay) {
        const dynamicDelayObj = getDynamicShowDelay();
        finalShowDelay = dynamicDelayObj.showDelay || 0;
        preventAnimationValue = preventAnimationValue ?? dynamicDelayObj.preventAnimation;
      }

      if (instantShowAndHide) {
        onDialogDidShow(event, eventName);
        setIsOpenState(true);
        setPreventAnimation(!!preventAnimationValue);
        showTimeoutRef.current = null;
      } else {
        showTimeoutRef.current = setTimeout(() => {
          onDialogDidShow(event, eventName);
          showTimeoutRef.current = null;
          setIsOpenState(true);
          setPreventAnimation(!!preventAnimationValue);
        }, finalShowDelay);
      }
    },
    [showDelay, getDynamicShowDelay, instantShowAndHide, onDialogDidShow]
  );

  const hideDialog = useCallback(
    (event: DialogEvent, eventName: DialogTriggerEvent | string) => {
      if (instantShowAndHide) {
        onDialogDidHide(event, eventName);
        setIsOpenState(false);
        hideTimeoutRef.current = null;
      } else {
        hideTimeoutRef.current = setTimeout(() => {
          onDialogDidHide(event, eventName);
          setIsOpenState(false);
          hideTimeoutRef.current = null;
        }, hideDelay);
      }
    },
    [hideDelay, instantShowAndHide, onDialogDidHide]
  );

  const showDialogIfNeeded = useCallback(
    (event: DialogEvent, eventName: DialogTriggerEvent | string, options = {}) => {
      if (disable) {
        return;
      }

      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }

      if (!showTimeoutRef.current) {
        showDialog(event, eventName, options);
      }
    },
    [disable, showDialog]
  );

  const hideDialogIfNeeded = useCallback(
    (event: DialogEvent, eventName: DialogTriggerEvent | string) => {
      if (showTimeoutRef.current) {
        clearTimeout(showTimeoutRef.current);
        showTimeoutRef.current = null;
      }

      if (!hideTimeoutRef.current) {
        hideDialog(event, eventName);
      }
    },
    [hideDialog]
  );

  // Event handling
  const handleEvent = useCallback(
    (eventName: DialogTriggerEvent, target: EventTarget | null, event: DialogEvent) => {
      if (!target) return; // Guard against null targets (e.g., when focus leaves the document)
      if (isShowTrigger(eventName) && !isShown && !isInsideClass(target as HTMLElement, showTriggerIgnoreClass)) {
        return showDialogIfNeeded(event, eventName);
      }

      if (isHideTrigger(eventName) && !isInsideClass(target as HTMLElement, hideTriggerIgnoreClass)) {
        return hideDialogIfNeeded(event, eventName);
      }
    },
    [
      isShowTrigger,
      isHideTrigger,
      isShown,
      showTriggerIgnoreClass,
      hideTriggerIgnoreClass,
      showDialogIfNeeded,
      hideDialogIfNeeded
    ]
  );

  const getContainer = useCallback(() => {
    if (containerSelector) {
      const containerElement = document.querySelector(containerSelector);
      if (containerElement instanceof Element) {
        return containerElement;
      }
    }
    return layerRef?.current || document.body;
  }, [containerSelector, layerRef]);

  // Memoized event handlers to prevent unnecessary re-renders
  const onMouseEnter = useCallback((e: React.MouseEvent) => handleEvent("mouseenter", e.target, e), [handleEvent]);
  const onMouseLeave = useCallback((e: React.MouseEvent) => handleEvent("mouseleave", e.target, e), [handleEvent]);
  const onClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.button) return;
      handleEvent("click", e.target, e);
    },
    [handleEvent]
  );
  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      // Handle element-level keyboard events for triggers
      if (event.key === "Enter") handleEvent("enter", event.target, event);
      if (event.key === "Tab") handleEvent("tab", event.target, event);
    },
    [handleEvent]
  );

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (e.button) return;
      handleEvent("mousedown", e.target, e);
    },
    [handleEvent]
  );
  const onFocus = useCallback((e: React.FocusEvent) => handleEvent("focus", e.target, e), [handleEvent]);
  const onBlur = useCallback(
    (e: React.FocusEvent) => {
      const target = e.relatedTarget || e.target;
      handleEvent("blur", target, e);
    },
    [handleEvent]
  );
  const onEsc = useCallback((e: React.KeyboardEvent) => handleEvent("esckey", e.target, e), [handleEvent]);
  const onContextMenu = useCallback(
    (e: React.MouseEvent) => {
      if ((isShowTrigger("contextmenu") && !isShown) || (isHideTrigger("contextmenu") && isShown)) {
        e.preventDefault();
      }
      handleEvent("contextmenu", e.target, e);
    },
    [isShown, isShowTrigger, isHideTrigger, handleEvent]
  );

  const onClickOutside = useCallback(
    (event: React.MouseEvent) => {
      handleEvent("clickoutside", event.target, event);
      onClickOutsideProp(event);
    },
    [handleEvent, onClickOutsideProp]
  );

  const onDialogEnter = useCallback(
    (event: React.MouseEvent) => {
      if (showOnDialogEnter) showDialogIfNeeded(event, "DialogEnter");
    },
    [showOnDialogEnter, showDialogIfNeeded]
  );

  const onDialogLeave = useCallback(
    (event: React.MouseEvent) => {
      if (showOnDialogEnter) hideDialogIfNeeded(event, "DialogLeave");
    },
    [showOnDialogEnter, hideDialogIfNeeded]
  );

  const onContentClick = useCallback(
    (e: React.MouseEvent) => {
      handleEvent("onContentClick", e.target, e);
      onContentClickProp(e);
    },
    [handleEvent, onContentClickProp]
  );

  // Memoized chained event handlers to prevent Refable children re-renders
  const chainedOnBlur = useMemo(() => chainFunctions([onBlurProp, onBlur], true), [onBlurProp, onBlur]);
  const chainedOnKeyDown = useMemo(() => chainFunctions([onKeyDownProp, onKeyDown], true), [onKeyDownProp, onKeyDown]);
  const chainedOnClick = useMemo(() => chainFunctions([onClickProp, onClick], true), [onClickProp, onClick]);
  const chainedOnFocus = useMemo(() => chainFunctions([onFocusProp, onFocus], true), [onFocusProp, onFocus]);
  const chainedOnMouseDown = useMemo(
    () => chainFunctions([onMouseDownProp, onMouseDown], true),
    [onMouseDownProp, onMouseDown]
  );
  const chainedOnMouseEnter = useMemo(
    () => chainFunctions([onMouseEnterProp, onMouseEnter], true),
    [onMouseEnterProp, onMouseEnter]
  );
  const chainedOnMouseLeave = useMemo(
    () => chainFunctions([onMouseLeaveProp, onMouseLeave], true),
    [onMouseLeaveProp, onMouseLeave]
  );
  const chainedOnContextMenu = useMemo(
    () => chainFunctions([onContextMenuProp, onContextMenu], true),
    [onContextMenuProp, onContextMenu]
  );

  // Document-level keyboard handler using stable ref pattern
  // Must handle Escape, Tab, and Enter at document level to match old behavior
  const closeDialogOnEscapeRef = useRef<(event: KeyboardEvent) => void>();
  closeDialogOnEscapeRef.current = (event: KeyboardEvent) => {
    if (!isShown) return;

    switch (event.key) {
      case "Escape":
        hideDialogIfNeeded(event, "esckey");
        break;
      case "Tab":
        handleEvent("tab", event.target, event);
        break;
      case "Enter":
        handleEvent("enter", event.target, event);
        break;
    }
  };

  // Effects

  // Callback on mount
  useEffect(() => {
    if (shouldCallbackOnMount && shouldShowOnMount) {
      onDialogDidShow();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  // Document keyboard listener (stable reference via ref)
  useEffect(() => {
    if (!isClient()) return;

    const handler = (event: KeyboardEvent) => closeDialogOnEscapeRef.current?.(event);
    document.addEventListener("keyup", handler);
    return () => document.removeEventListener("keyup", handler);
  }, []);

  // Handle reference hidden state
  useEffect(() => {
    if (hideWhenReferenceHidden && isReferenceHidden && isShown) {
      const event = new CustomEvent("onReferenceHidden");
      hideDialog(event, "onReferenceHidden");
    }
  }, [hideWhenReferenceHidden, isReferenceHidden, isShown, hideDialog]);

  // Computed values
  const overrideDataTestId = dataTestId || getTestId(ComponentDefaultTestId.DIALOG, id);

  const arrowStyles = useMemo<React.CSSProperties>(() => {
    if (!middlewareData.arrow) return {};
    const { x, y } = middlewareData.arrow;
    return {
      left: x != null ? `${x}px` : "",
      top: y != null ? `${y}px` : "",
      transform: "rotate(45deg)"
    };
  }, [middlewareData.arrow]);

  const finalFloatingStyles = useMemo<React.CSSProperties>(
    () => ({ ...floatingStyles, ...(zIndex !== undefined && { zIndex }) }),
    [floatingStyles, zIndex]
  );

  const animationTypeCalculated = preventAnimationOnMount || preventAnimation ? undefined : animationType;
  const contentRendered = isFunction(content) ? content() : content;

  // Early return if no content - wrap in fragment for type safety
  if (!contentRendered) {
    return <>{children}</>;
  }

  const mergedFloatingRef = chainRefFunctions([refs.setFloating, containerRef]);

  const dialogContent = (
    <DialogContent
      data-testid={overrideDataTestId}
      isReferenceHidden={hideWhenReferenceHidden && isReferenceHidden}
      onMouseEnter={onDialogEnter}
      onMouseLeave={onDialogLeave}
      onClickOutside={onClickOutside}
      onContextMenu={onContextMenu}
      onEsc={onEsc}
      animationType={animationTypeCalculated}
      position={placement}
      wrapperClassName={wrapperClassName}
      startingEdge={startingEdge}
      isOpen={isShown}
      showDelay={showDelay}
      styleObject={finalFloatingStyles}
      ref={mergedFloatingRef}
      onClick={onContentClick}
      hasTooltip={!!tooltip}
      containerSelector={containerSelector}
      disableContainerScroll={disableContainerScroll}
    >
      {contentRendered}
      {tooltip && (
        <div
          style={arrowStyles}
          ref={arrowRef}
          className={cx(styles.arrow, tooltipClassName)}
          data-placement={placement}
        />
      )}
    </DialogContent>
  );

  return (
    <>
      <Refable
        className={cx(referenceWrapperClassName)}
        wrapperElement={referenceWrapperElement}
        ref={setReferenceElement}
        onBlur={chainedOnBlur}
        onKeyDown={chainedOnKeyDown}
        onClick={chainedOnClick}
        onFocus={chainedOnFocus}
        onMouseDown={chainedOnMouseDown}
        onMouseEnter={chainedOnMouseEnter}
        onMouseLeave={chainedOnMouseLeave}
        onContextMenu={chainedOnContextMenu}
      >
        {children}
      </Refable>
      {isClient() &&
        isShown &&
        createPortal(
          enableNestedDialogLayer ? (
            <LayerProvider layerRef={containerRef}>{dialogContent}</LayerProvider>
          ) : (
            dialogContent
          ),
          getContainer()
        )}
    </>
  );
}

export default Dialog;
