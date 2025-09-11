import cx from "classnames";
import React, { PureComponent, type ReactElement } from "react";
import { createPortal } from "react-dom";
import { Manager, type Modifier, Popper, Reference } from "react-popper";
import { isFunction } from "es-toolkit";
import { chainFunctions, convertToArray, NOOP } from "../../utils/function-utils";
import DialogContent from "./DialogContent/DialogContent";
import { isInsideClass } from "../../utils/dom-utils";
import { Refable } from "../Refable/Refable";
import {
  AnimationType as AnimationTypeEnum,
  HideShowEvent as DialogTriggerEventEnum,
  DialogPosition as DialogPositionEnum
} from "./DialogConstants";
import { type VibeComponentProps } from "../../types";
import type * as PopperJS from "@popperjs/core";
import styles from "./Dialog.module.scss";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { type DialogAnimationType, type DialogPosition, type DialogTriggerEvent } from "./Dialog.types";
import LayerContext from "../LayerProvider/LayerContext";
import { isClient } from "../../utils/ssr-utils";
import { createObserveContentResizeModifier } from "./modifiers/observeContentResizeModifier";

export interface DialogProps extends VibeComponentProps {
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

export type DialogEvent = React.MouseEvent | React.KeyboardEvent | KeyboardEvent | React.FocusEvent | CustomEvent;

export default class Dialog extends PureComponent<DialogProps, DialogState> {
  static hideShowTriggers = DialogTriggerEventEnum;
  static positions = DialogPositionEnum;
  static animationTypes = AnimationTypeEnum;
  static defaultProps = {
    position: "top",
    modifiers: [] as Modifier<any>[],
    moveBy: { main: 0, secondary: 0 },
    showDelay: 100,
    hideDelay: 100,
    showTrigger: Dialog.hideShowTriggers.MOUSE_ENTER,
    hideTrigger: Dialog.hideShowTriggers.MOUSE_LEAVE,
    showOnDialogEnter: false,
    shouldShowOnMount: false,
    disable: false,
    open: false,
    animationType: Dialog.animationTypes.EXPAND,
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
    observeContentResize: false
  };
  private showTimeout: NodeJS.Timeout;
  private hideTimeout: NodeJS.Timeout;
  context!: React.ContextType<typeof LayerContext>;

  constructor(props: DialogProps) {
    super(props);
    this.state = {
      shouldUseDerivedStateFromProps: props.useDerivedStateFromProps,
      isOpen: props.shouldShowOnMount
    };

    // Binding section.
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.isShown = this.isShown.bind(this);
    this.onEsc = this.onEsc.bind(this);
    this.onClickOutside = this.onClickOutside.bind(this);
    this.onDialogEnter = this.onDialogEnter.bind(this);
    this.onDialogLeave = this.onDialogLeave.bind(this);
    this.getContainer = this.getContainer.bind(this);
    this.onContentClick = this.onContentClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.closeDialogOnEscape = this.closeDialogOnEscape.bind(this);
    this.onContextMenu = this.onContextMenu.bind(this);

    // Timeouts
    this.hideTimeout = null;
    this.showTimeout = null;
  }

  closeDialogOnEscape(event: KeyboardEvent) {
    const { isOpen } = this.state;
    if (!isOpen) {
      return;
    }
    switch (event.key) {
      case "Escape":
        this.hideDialogIfNeeded(event, DialogTriggerEventEnum.ESCAPE_KEY);
        break;
      case "Tab":
        this.handleEvent(DialogTriggerEventEnum.TAB_KEY, event.target, event);
        break;
      case "Enter":
        this.handleEvent(DialogTriggerEventEnum.ENTER, event.target, event);
        break;
      default:
        break;
    }
  }

  componentDidMount() {
    const { shouldCallbackOnMount, onDialogDidShow } = this.props;
    const { isOpen } = this.state;
    if (isClient()) {
      document.addEventListener("keyup", this.closeDialogOnEscape);
    }
    if (shouldCallbackOnMount && isOpen) {
      onDialogDidShow && onDialogDidShow();
    }
  }

  componentWillUnmount() {
    if (isClient()) {
      document.removeEventListener("keyup", this.closeDialogOnEscape);
    }
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }

  static getDerivedStateFromProps(nextProps: DialogProps, state: DialogState): DialogState {
    if (state.shouldUseDerivedStateFromProps) {
      return { isOpen: nextProps.isOpen };
    }
    return null;
  }

  getContainer() {
    const { containerSelector } = this.props;
    const containerElement = document.querySelector(containerSelector);
    if (!containerElement || !(containerElement instanceof Element)) {
      const { layerRef } = this.context;
      if (layerRef?.current) {
        return layerRef.current;
      }
      return document.body;
    }
    return containerElement;
  }

  showDialog(event: DialogEvent, eventName: DialogTriggerEvent | string, options: { preventAnimation?: boolean } = {}) {
    const { showDelay, instantShowAndHide, getDynamicShowDelay } = this.props;
    let finalShowDelay = showDelay;
    let preventAnimation = options.preventAnimation;
    if (getDynamicShowDelay) {
      const dynamicDelayObj = getDynamicShowDelay();
      finalShowDelay = dynamicDelayObj.showDelay || 0;
      preventAnimation = preventAnimation || dynamicDelayObj.preventAnimation;
    }

    if (instantShowAndHide) {
      this.onShowDialog(event, eventName);
      this.setState({ isOpen: true, preventAnimation });
      this.showTimeout = null;
    } else {
      this.showTimeout = setTimeout(() => {
        this.onShowDialog(event, eventName);
        this.showTimeout = null;
        this.setState({ isOpen: true, preventAnimation });
      }, finalShowDelay);
    }
  }

  onShowDialog(event: DialogEvent, eventName: DialogTriggerEvent | string) {
    if (this.isShown()) return;
    const { onDialogDidShow } = this.props;
    onDialogDidShow(event, eventName);
  }

  showDialogIfNeeded(event: DialogEvent, eventName: DialogTriggerEvent | string, options = {}) {
    const { disable } = this.props;
    if (disable) {
      return;
    }

    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }

    if (!this.showTimeout) {
      this.showDialog(event, eventName, options);
    }
  }

  hideDialog(event: DialogEvent, eventName: DialogTriggerEvent | string) {
    const { hideDelay, instantShowAndHide } = this.props;
    if (instantShowAndHide) {
      this.onHideDialog(event, eventName);
      this.setState({ isOpen: false });
      this.hideTimeout = null;
    } else {
      this.hideTimeout = setTimeout(() => {
        this.onHideDialog(event, eventName);
        this.setState({ isOpen: false });
        this.hideTimeout = null;
      }, hideDelay);
    }
  }

  onHideDialog(event: DialogEvent, eventName: DialogTriggerEvent | string) {
    const { onDialogDidHide } = this.props;
    if (onDialogDidHide) onDialogDidHide(event, eventName);
  }

  hideDialogIfNeeded(event: DialogEvent, eventName: DialogTriggerEvent | string) {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }

    if (this.hideTimeout) {
      return;
    }
    this.hideDialog(event, eventName);
  }

  handleEvent(eventName: DialogTriggerEvent, target: EventTarget, event: DialogEvent) {
    const { showTriggerIgnoreClass, hideTriggerIgnoreClass } = this.props;
    if (
      this.isShowTrigger(eventName) &&
      !this.isShown() &&
      !isInsideClass(target as HTMLElement, showTriggerIgnoreClass)
    ) {
      return this.showDialogIfNeeded(event, eventName);
    }

    if (this.isHideTrigger(eventName) && !isInsideClass(target as HTMLElement, hideTriggerIgnoreClass)) {
      return this.hideDialogIfNeeded(event, eventName);
    }
  }

  isShown() {
    const { isOpen } = this.state;
    const { open } = this.props;

    return isOpen || open;
  }

  isShowTrigger(eventName: DialogTriggerEvent) {
    const { showTrigger, addKeyboardHideShowTriggersByDefault } = this.props;
    const showTriggersArray = convertToArray(showTrigger);

    if (addKeyboardHideShowTriggersByDefault) {
      if (eventName === "focus" && showTriggersArray.indexOf("mouseenter") > -1) {
        return true;
      }
    }

    return showTriggersArray.indexOf(eventName) > -1;
  }

  isHideTrigger(eventName: DialogTriggerEvent) {
    const { hideTrigger, addKeyboardHideShowTriggersByDefault } = this.props;
    const hideTriggersArray = convertToArray(hideTrigger);

    if (addKeyboardHideShowTriggersByDefault) {
      if (eventName === "blur" && hideTriggersArray.indexOf("mouseleave") > -1) {
        return true;
      }
    }

    return hideTriggersArray.indexOf(eventName) > -1;
  }

  onMouseEnter(e: React.MouseEvent) {
    this.handleEvent("mouseenter", e.target, e);
  }

  onMouseLeave(e: React.MouseEvent) {
    this.handleEvent("mouseleave", e.target, e);
  }

  onClick(e: React.MouseEvent) {
    if (e.button) return;
    this.handleEvent("click", e.target, e);
  }

  onKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      this.handleEvent("enter", event.target, event);
    }

    if (event.key === "Tab") {
      this.handleEvent("tab", event.target, event);
    }
  }

  onMouseDown(e: React.MouseEvent) {
    if (e.button) return;
    this.handleEvent("mousedown", e.target, e);
  }

  onFocus(e: React.FocusEvent) {
    this.handleEvent("focus", e.target, e);
  }

  onBlur(e: React.FocusEvent) {
    this.handleEvent("blur", e.relatedTarget, e);
  }

  onEsc(e: React.KeyboardEvent) {
    this.handleEvent("esckey", e.target, e);
  }

  onContextMenu(e: React.MouseEvent) {
    const isShown = this.isShown();
    if ((this.isShowTrigger("contextmenu") && !isShown) || (this.isHideTrigger("contextmenu") && isShown)) {
      e.preventDefault();
    }
    this.handleEvent("contextmenu", e.target, e);
  }

  onClickOutside(event: React.MouseEvent) {
    const { onClickOutside } = this.props;
    this.handleEvent("clickoutside", event.target, event);
    onClickOutside(event);
  }

  onDialogEnter(event: React.MouseEvent) {
    const { showOnDialogEnter } = this.props;
    if (showOnDialogEnter) this.showDialogIfNeeded(event, "DialogEnter");
  }

  onDialogLeave(event: React.MouseEvent) {
    const { showOnDialogEnter } = this.props;
    if (showOnDialogEnter) this.hideDialogIfNeeded(event, "DialogLeave");
  }

  onContentClick(e: React.MouseEvent) {
    const { onContentClick } = this.props;
    this.handleEvent("onContentClick", e.target, e);
    onContentClick(e);
  }

  render() {
    const {
      wrapperClassName,
      content,
      startingEdge,
      children,
      preventAnimationOnMount,
      animationType,
      position,
      showDelay,
      moveBy,
      modifiers,
      tooltip,
      tooltipClassName,
      referenceWrapperClassName,
      referenceWrapperElement,
      zIndex,
      hideWhenReferenceHidden,
      disableContainerScroll,
      containerSelector,
      observeContentResize,
      id,
      "data-testid": dataTestId
    } = this.props;
    const { preventAnimation } = this.state;
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
                onBlur={chainOnPropsAndInstance("onBlur", this, this.props)}
                onKeyDown={chainOnPropsAndInstance("onKeyDown", this, this.props)}
                onClick={chainOnPropsAndInstance("onClick", this, this.props)}
                onFocus={chainOnPropsAndInstance("onFocus", this, this.props)}
                onMouseDown={chainOnPropsAndInstance("onMouseDown", this, this.props)}
                onMouseEnter={chainOnPropsAndInstance("onMouseEnter", this, this.props)}
                onMouseLeave={chainOnPropsAndInstance("onMouseLeave", this, this.props)}
                onContextMenu={chainOnPropsAndInstance("onContextMenu", this, this.props)}
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
                if (!this.isShown() && placement) {
                  return null;
                }

                if (hideWhenReferenceHidden && isReferenceHidden) {
                  const event = new CustomEvent("onReferenceHidden");
                  this.hideDialog(event, "onReferenceHidden");
                }

                return (
                  <DialogContent
                    data-testid={overrideDataTestId}
                    isReferenceHidden={hideWhenReferenceHidden && isReferenceHidden}
                    onMouseEnter={this.onDialogEnter}
                    onMouseLeave={this.onDialogLeave}
                    onClickOutside={this.onClickOutside}
                    onContextMenu={this.onContextMenu}
                    onEsc={this.onEsc}
                    animationType={animationTypeCalculated}
                    position={placement}
                    wrapperClassName={wrapperClassName}
                    startingEdge={startingEdge}
                    isOpen={this.isShown()}
                    showDelay={showDelay}
                    styleObject={style}
                    ref={ref}
                    onClick={this.onContentClick}
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
              }}
            </Popper>,
            this.getContainer()
          )}
      </Manager>
    );
  }
}

function chainOnPropsAndInstance(name: string, instance: Dialog, props: DialogProps) {
  // @ts-ignore
  return chainFunctions([props[name], instance[name]], true);
}

Dialog.contextType = LayerContext;
