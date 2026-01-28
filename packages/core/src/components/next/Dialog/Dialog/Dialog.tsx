import cx from "classnames";
import React, { useState, useEffect, useRef, useContext, useCallback, type ReactElement } from "react";
import { createPortal } from "react-dom";
import { Manager, type Modifier, Popper, Reference } from "react-popper";
import { isFunction } from "es-toolkit";
import {
  chainFunctions,
  chainRefFunctions,
  convertToArray,
  NOOP,
  isInsideClass,
  type VibeComponentProps,
  ComponentDefaultTestId,
  getTestId,
  isClient
} from "@vibe/shared";
import DialogContent from "./DialogContent/DialogContent";
import { Refable } from "../Refable/Refable";
import {
  AnimationType as AnimationTypeEnum,
  HideShowEvent as DialogTriggerEventEnum,
  DialogPosition as DialogPositionEnum
} from "./DialogConstants";
import type * as PopperJS from "@popperjs/core";
import styles from "./Dialog.module.scss";
import {
  type DialogAnimationType,
  type DialogPosition,
  type DialogTriggerEvent,
  type DialogEvent
} from "./Dialog.types";
import { LayerContext, LayerProvider } from "@vibe/layer";
import { createObserveContentResizeModifier } from "./modifiers/observeContentResizeModifier";

export interface DialogProps extends VibeComponentProps {
  /**
   * Event handler for blur events on the reference element.
   */
  onBlur?: (e: React.FocusEvent) => void;
  /**
   * Event handler for keydown events on the reference element.
   */
  onKeyDown?: (e: React.KeyboardEvent) => void;
  /**
   * Event handler for click events on the reference element.
   */
  onClick?: (e: React.MouseEvent) => void;
  /**
   * Event handler for focus events on the reference element.
   */
  onFocus?: (e: React.FocusEvent) => void;
  /**
   * Event handler for mousedown events on the reference element.
   */
  onMouseDown?: (e: React.MouseEvent) => void;
  /**
   * Event handler for mouseenter events on the reference element.
   */
  onMouseEnter?: (e: React.MouseEvent) => void;
  /**
   * Event handler for mouseleave events on the reference element.
   */
  onMouseLeave?: (e: React.MouseEvent) => void;
  /**
   * Event handler for contextmenu events on the reference element.
   */
  onContextMenu?: (e: React.MouseEvent) => void;
  /**
   * Class name applied to the reference wrapper element.
   */
  referenceWrapperClassName?: string;
  /**
   * The wrapper element type to use for React components. Defaults to "span".
   */
  referenceWrapperElement?: "span" | "div";
  /**
   * The placement of the dialog relative to the reference element.
   */
  position?: DialogPosition;
  /**
   * Custom Popper.js modifiers.
   * https://popper.js.org/docs/v2/modifiers/
   */
  modifiers?: Modifier<any>[];
  /**
   * The starting edge of the dialog.
   */
  startingEdge?: string;
  /**
   * Offset values for positioning adjustments.
   * `main` - horizontal offset
   * `secondary` - vertical offset
   */
  moveBy?: { main?: number; secondary?: number };
  /**
   * Delay in milliseconds before showing the dialog.
   */
  showDelay?: number;
  /**
   * Delay in milliseconds before hiding the dialog.
   */
  hideDelay?: number;
  /**
   * Events that trigger showing the dialog.
   */
  showTrigger?: DialogTriggerEvent | DialogTriggerEvent[];
  /**
   * Events that trigger hiding the dialog.
   */
  hideTrigger?: DialogTriggerEvent | DialogTriggerEvent[];
  /**
   * If true, prevents closing the dialog when the mouse enters it.
   */
  showOnDialogEnter?: boolean;
  /**
   * If true, shows the dialog when the component mounts.
   */
  shouldShowOnMount?: boolean;
  /**
   * If true, disables opening the dialog.
   */
  disable?: boolean;
  /**
   * Controls the open state of the dialog.
   */
  open?: boolean;
  /**
   * Derived state control for managing dialog visibility.
   */
  isOpen?: boolean;
  /**
   * Classes that prevent showing the dialog when present.
   */
  showTriggerIgnoreClass?: string | Array<string>;
  /**
   * Classes that prevent hiding the dialog when present.
   */
  hideTriggerIgnoreClass?: string | Array<string>;
  /**
   * The animation type used for the dialog.
   */
  animationType?: DialogAnimationType;
  /**
   * Class name applied to the dialog content container.
   */
  wrapperClassName?: string;
  /**
   * If true, prevents animation when mounting.
   */
  preventAnimationOnMount?: boolean;
  /**
   * The CSS selector of the container where the dialog is rendered.
   */
  containerSelector?: string;
  /**
   * If true, positions the tooltip element.
   */
  tooltip?: boolean;
  /**
   * Class name applied to the tooltip element.
   */
  tooltipClassName?: string;
  /**
   * Callback fired when the dialog is shown.
   */
  onDialogDidShow?: (event?: DialogEvent, eventName?: DialogTriggerEvent | string) => void;
  /**
   * Callback fired when the dialog is hidden.
   */
  onDialogDidHide?: (event: DialogEvent, eventName: DialogTriggerEvent | string) => void;
  /**
   * Callback fired when clicking outside the dialog.
   */
  onClickOutside?: (event: React.MouseEvent) => void;
  /**
   * Callback fired when clicking inside the dialog content.
   */
  onContentClick?: (event: React.MouseEvent) => void;
  /**
   * The z-index applied to the dialog.
   */
  zIndex?: number;
  /**
   * If true, uses derived state from props.
   */
  useDerivedStateFromProps?: boolean;
  /**
   * If true, makes the dialog disappear when the reference element is hidden.
   */
  hideWhenReferenceHidden?: boolean;
  /**
   * If true, triggers the callback when the dialog mounts.
   */
  shouldCallbackOnMount?: boolean;
  /**
   * If true, instantly shows and hides the dialog without delay.
   */
  instantShowAndHide?: boolean;
  /**
   * Callback to dynamically adjust show delay and animation behavior.
   */
  getDynamicShowDelay?: () => { showDelay: number; preventAnimation: boolean };
  /**
   * The content displayed inside the dialog.
   */
  content?: (() => JSX.Element) | JSX.Element;
  /**
   * The element to position the dialog beside.
   */
  children?: ReactElement | ReactElement[] | string;
  /**
   * If true, keyboard focus/blur events behave like mouse enter/leave.
   */
  addKeyboardHideShowTriggersByDefault?: boolean;
  /**
   * If true, disables scrolling for the container element.
   */
  disableContainerScroll?: boolean | string;
  /**
   * Enables the observation of content resize for the popper element.
   * When set to `true`, a ResizeObserver is attached to the popper content,
   * automatically triggering repositioning when the size of the content changes.
   *
   * This is useful for dialogs, tooltips, or popovers with dynamic content
   * that may grow or shrink without a re-render being triggered.
   */
  observeContentResize?: boolean;
  /**
   * If true, provides a LayerProvider context for nested dialogs to render correctly.
   * This is useful when you have components that use Dialog internally (like Dropdown)
   * inside another Dialog, ensuring proper z-index stacking and click-outside behavior.
   */
  enableNestedDialogLayer?: boolean;
}

export interface DialogState {
  /**
   * If true, the dialog is open.
   */
  isOpen?: boolean;
  /**
   * If true, the dialog state is derived from props.
   */
  shouldUseDerivedStateFromProps?: boolean;
  /**
   * If true, prevents animation when opening or closing the dialog.
   */
  preventAnimation?: boolean;
}

const defaultProps = {
  position: "top" as DialogPosition,
  modifiers: [] as Modifier<any>[],
  moveBy: { main: 0, secondary: 0 },
  showDelay: 100,
  hideDelay: 100,
  showTrigger: DialogTriggerEventEnum.MOUSE_ENTER as DialogTriggerEvent | DialogTriggerEvent[],
  hideTrigger: DialogTriggerEventEnum.MOUSE_LEAVE as DialogTriggerEvent | DialogTriggerEvent[],
  showOnDialogEnter: false,
  shouldShowOnMount: false,
  disable: false,
  open: false,
  animationType: AnimationTypeEnum.EXPAND as DialogAnimationType,
  preventAnimationOnMount: false,
  tooltip: false,
  onDialogDidShow: NOOP,
  onDialogDidHide: NOOP,
  onClickOutside: NOOP,
  onContentClick: NOOP,
  useDerivedStateFromProps: false,
  hideWhenReferenceHidden: false,
  shouldCallbackOnMount: false,
  instantShowAndHide: false,
  addKeyboardHideShowTriggersByDefault: false,
  observeContentResize: false,
  enableNestedDialogLayer: false
};

function Dialog(props: DialogProps) {
  const {
    wrapperClassName,
    content,
    startingEdge,
    children,
    preventAnimationOnMount = defaultProps.preventAnimationOnMount,
    animationType = defaultProps.animationType,
    position = defaultProps.position,
    showDelay = defaultProps.showDelay,
    hideDelay = defaultProps.hideDelay,
    moveBy = defaultProps.moveBy,
    modifiers = defaultProps.modifiers,
    tooltip = defaultProps.tooltip,
    tooltipClassName,
    referenceWrapperClassName,
    referenceWrapperElement,
    zIndex,
    hideWhenReferenceHidden = defaultProps.hideWhenReferenceHidden,
    disableContainerScroll,
    containerSelector,
    observeContentResize = defaultProps.observeContentResize,
    enableNestedDialogLayer = defaultProps.enableNestedDialogLayer,
    id,
    "data-testid": dataTestId,
    showTrigger = defaultProps.showTrigger,
    hideTrigger = defaultProps.hideTrigger,
    showOnDialogEnter = defaultProps.showOnDialogEnter,
    shouldShowOnMount = defaultProps.shouldShowOnMount,
    disable = defaultProps.disable,
    open = defaultProps.open,
    isOpen: isOpenProp,
    showTriggerIgnoreClass,
    hideTriggerIgnoreClass,
    onDialogDidShow = defaultProps.onDialogDidShow,
    onDialogDidHide = defaultProps.onDialogDidHide,
    onClickOutside: onClickOutsideProp = defaultProps.onClickOutside,
    onContentClick: onContentClickProp = defaultProps.onContentClick,
    useDerivedStateFromProps = defaultProps.useDerivedStateFromProps,
    shouldCallbackOnMount = defaultProps.shouldCallbackOnMount,
    instantShowAndHide = defaultProps.instantShowAndHide,
    getDynamicShowDelay,
    addKeyboardHideShowTriggersByDefault = defaultProps.addKeyboardHideShowTriggersByDefault
  } = props;

  const [isOpenState, setIsOpenState] = useState(shouldShowOnMount);
  const [preventAnimation, setPreventAnimation] = useState(false);

  const showTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { layerRef } = useContext(LayerContext);

  // Handle derived state from props
  const isOpenInternal = useDerivedStateFromProps ? isOpenProp : isOpenState;

  const isShown = useCallback(() => {
    return isOpenInternal || open;
  }, [isOpenInternal, open]);

  const isShowTrigger = useCallback(
    (eventName: DialogTriggerEvent) => {
      const showTriggersArray = convertToArray(showTrigger);

      if (addKeyboardHideShowTriggersByDefault) {
        if (eventName === "focus" && showTriggersArray.indexOf("mouseenter") > -1) {
          return true;
        }
      }

      return showTriggersArray.indexOf(eventName) > -1;
    },
    [showTrigger, addKeyboardHideShowTriggersByDefault]
  );

  const isHideTrigger = useCallback(
    (eventName: DialogTriggerEvent) => {
      const hideTriggersArray = convertToArray(hideTrigger);

      if (addKeyboardHideShowTriggersByDefault) {
        if (eventName === "blur" && hideTriggersArray.indexOf("mouseleave") > -1) {
          return true;
        }
      }

      return hideTriggersArray.indexOf(eventName) > -1;
    },
    [hideTrigger, addKeyboardHideShowTriggersByDefault]
  );

  const onShowDialog = useCallback(
    (event: DialogEvent, eventName: DialogTriggerEvent | string) => {
      if (isShown()) return;
      onDialogDidShow(event, eventName);
    },
    [isShown, onDialogDidShow]
  );

  const onHideDialog = useCallback(
    (event: DialogEvent, eventName: DialogTriggerEvent | string) => {
      if (onDialogDidHide) onDialogDidHide(event, eventName);
    },
    [onDialogDidHide]
  );

  const showDialog = useCallback(
    (event: DialogEvent, eventName: DialogTriggerEvent | string, options: { preventAnimation?: boolean } = {}) => {
      let finalShowDelay = showDelay;
      let preventAnimationValue = options.preventAnimation;
      if (getDynamicShowDelay) {
        const dynamicDelayObj = getDynamicShowDelay();
        finalShowDelay = dynamicDelayObj.showDelay || 0;
        preventAnimationValue = preventAnimationValue || dynamicDelayObj.preventAnimation;
      }

      if (instantShowAndHide) {
        onShowDialog(event, eventName);
        setIsOpenState(true);
        setPreventAnimation(!!preventAnimationValue);
        showTimeoutRef.current = null;
      } else {
        showTimeoutRef.current = setTimeout(() => {
          onShowDialog(event, eventName);
          showTimeoutRef.current = null;
          setIsOpenState(true);
          setPreventAnimation(!!preventAnimationValue);
        }, finalShowDelay);
      }
    },
    [showDelay, getDynamicShowDelay, instantShowAndHide, onShowDialog]
  );

  const hideDialog = useCallback(
    (event: DialogEvent, eventName: DialogTriggerEvent | string) => {
      if (instantShowAndHide) {
        onHideDialog(event, eventName);
        setIsOpenState(false);
        hideTimeoutRef.current = null;
      } else {
        hideTimeoutRef.current = setTimeout(() => {
          onHideDialog(event, eventName);
          setIsOpenState(false);
          hideTimeoutRef.current = null;
        }, hideDelay);
      }
    },
    [hideDelay, instantShowAndHide, onHideDialog]
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

      if (hideTimeoutRef.current) {
        return;
      }
      hideDialog(event, eventName);
    },
    [hideDialog]
  );

  const handleEvent = useCallback(
    (eventName: DialogTriggerEvent, target: EventTarget, event: DialogEvent) => {
      if (isShowTrigger(eventName) && !isShown() && !isInsideClass(target as HTMLElement, showTriggerIgnoreClass)) {
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

  const closeDialogOnEscape = useCallback(
    (event: KeyboardEvent) => {
      if (!isShown()) {
        return;
      }
      switch (event.key) {
        case "Escape":
          hideDialogIfNeeded(event, DialogTriggerEventEnum.ESCAPE_KEY);
          break;
        case "Tab":
          handleEvent(DialogTriggerEventEnum.TAB_KEY, event.target, event);
          break;
        case "Enter":
          handleEvent(DialogTriggerEventEnum.ENTER, event.target, event);
          break;
        default:
          break;
      }
    },
    [isShown, hideDialogIfNeeded, handleEvent]
  );

  const getDefaultContainer = useCallback(() => {
    if (layerRef?.current) {
      return layerRef.current;
    }
    return document.body;
  }, [layerRef]);

  const getContainer = useCallback(() => {
    if (!containerSelector) {
      return getDefaultContainer();
    }

    const containerElement = document.querySelector(containerSelector);
    if (!containerElement || !(containerElement instanceof Element)) {
      return getDefaultContainer();
    }
    return containerElement;
  }, [containerSelector, getDefaultContainer]);

  const onMouseEnter = useCallback(
    (e: React.MouseEvent) => {
      handleEvent("mouseenter", e.target, e);
    },
    [handleEvent]
  );

  const onMouseLeave = useCallback(
    (e: React.MouseEvent) => {
      handleEvent("mouseleave", e.target, e);
    },
    [handleEvent]
  );

  const onClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.button) return;
      handleEvent("click", e.target, e);
    },
    [handleEvent]
  );

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Enter") {
        handleEvent("enter", event.target, event);
      }

      if (event.key === "Tab") {
        handleEvent("tab", event.target, event);
      }
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

  const onFocus = useCallback(
    (e: React.FocusEvent) => {
      handleEvent("focus", e.target, e);
    },
    [handleEvent]
  );

  const onBlur = useCallback(
    (e: React.FocusEvent) => {
      handleEvent("blur", e.relatedTarget, e);
    },
    [handleEvent]
  );

  const onEsc = useCallback(
    (e: React.KeyboardEvent) => {
      handleEvent("esckey", e.target, e);
    },
    [handleEvent]
  );

  const onContextMenu = useCallback(
    (e: React.MouseEvent) => {
      const shown = isShown();
      if ((isShowTrigger("contextmenu") && !shown) || (isHideTrigger("contextmenu") && shown)) {
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

  // componentDidMount - callback on mount (runs once)
  useEffect(() => {
    if (shouldCallbackOnMount && shouldShowOnMount) {
      onDialogDidShow && onDialogDidShow();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // componentWillUnmount - cleanup timeouts
  useEffect(() => {
    return () => {
      if (showTimeoutRef.current) {
        clearTimeout(showTimeoutRef.current);
        showTimeoutRef.current = null;
      }
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
    };
  }, []);

  // Keyboard event listener - updates when closeDialogOnEscape changes
  useEffect(() => {
    if (isClient()) {
      document.addEventListener("keyup", closeDialogOnEscape);
      return () => {
        document.removeEventListener("keyup", closeDialogOnEscape);
      };
    }
  }, [closeDialogOnEscape]);

  const overrideDataTestId = dataTestId || getTestId(ComponentDefaultTestId.DIALOG, id);

  const animationTypeCalculated = preventAnimationOnMount || preventAnimation ? undefined : animationType;
  const contentRendered = isFunction(content) ? content() : content;

  if (!contentRendered) {
    return children;
  }

  return (
    <Manager>
      <Reference>
        {({ ref }) => {
          return (
            <Refable
              className={cx(referenceWrapperClassName)}
              wrapperElement={referenceWrapperElement}
              ref={ref}
              onBlur={chainFunctions([props.onBlur, onBlur], true)}
              onKeyDown={chainFunctions([props.onKeyDown, onKeyDown], true)}
              onClick={chainFunctions([props.onClick, onClick], true)}
              onFocus={chainFunctions([props.onFocus, onFocus], true)}
              onMouseDown={chainFunctions([props.onMouseDown, onMouseDown], true)}
              onMouseEnter={chainFunctions([props.onMouseEnter, onMouseEnter], true)}
              onMouseLeave={chainFunctions([props.onMouseLeave, onMouseLeave], true)}
              onContextMenu={chainFunctions([props.onContextMenu, onContextMenu], true)}
            >
              {children}
            </Refable>
          );
        }}
      </Reference>
      {isClient() &&
        createPortal(
          <Popper
            placement={position as unknown as PopperJS.Placement}
            modifiers={[
              {
                name: "offset",
                options: {
                  offset: [moveBy.secondary, moveBy.main]
                }
              },
              {
                name: "zIndex",
                enabled: true,
                phase: "write",
                fn({ state }) {
                  if (zIndex) {
                    state.styles.popper.zIndex = String(zIndex);
                  }
                  return state;
                }
              },
              {
                name: "rotator",
                enabled: true,
                phase: "write",
                fn({ state }) {
                  if (!state.styles.arrow) {
                    return state;
                  }
                  // const reg = new RegExp(
                  //   /translate\(([0-9].*)px, ([0-9].*)px\)/
                  // );
                  // const transform = state.styles.arrow.transform;
                  // const res = reg.exec(transform);
                  // state.styles.popper.transformOrigin = `${100 -
                  //   res[1]}% ${100 - res[2]}%`;
                  state.styles.arrow.transform = `${state.styles.arrow.transform} rotate(45deg)`;
                  return state;
                }
              },
              createObserveContentResizeModifier(observeContentResize),
              ...modifiers
            ]}
          >
            {({ placement, style, ref, arrowProps, isReferenceHidden }) => {
              if (!isShown() && placement) {
                return null;
              }

              if (hideWhenReferenceHidden && isReferenceHidden) {
                const event = new CustomEvent("onReferenceHidden");
                hideDialog(event, "onReferenceHidden");
              }

              const mergedRef = chainRefFunctions([ref, containerRef]);

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
                  isOpen={isShown()}
                  showDelay={showDelay}
                  styleObject={style}
                  ref={mergedRef}
                  onClick={onContentClick}
                  hasTooltip={!!tooltip}
                  containerSelector={containerSelector}
                  disableContainerScroll={disableContainerScroll}
                >
                  {contentRendered}
                  {tooltip && (
                    <div
                      style={arrowProps.style}
                      ref={arrowProps.ref}
                      className={cx(styles.arrow, tooltipClassName)}
                      data-placement={placement}
                    />
                  )}
                </DialogContent>
              );

              return enableNestedDialogLayer ? (
                <LayerProvider layerRef={containerRef}>{dialogContent}</LayerProvider>
              ) : (
                dialogContent
              );
            }}
          </Popper>,
          getContainer()
        )}
    </Manager>
  );
}

Dialog.hideShowTriggers = DialogTriggerEventEnum;
Dialog.positions = DialogPositionEnum;
Dialog.animationTypes = AnimationTypeEnum;
Dialog.defaultProps = defaultProps;

export default Dialog;
