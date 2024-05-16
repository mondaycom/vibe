/* eslint-disable no-param-reassign */
import cx from "classnames";
import React, { PureComponent, ReactElement } from "react";
import { createPortal } from "react-dom";
import { Manager, Modifier, Popper, Reference } from "react-popper";
import { DialogPosition } from "../../constants/positions";
import { isFunction } from "lodash-es";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { chainFunctions, convertToArray, NOOP } from "../../utils/function-utils";
import { DialogContent } from "./DialogContent/DialogContent";
import { isInsideClass } from "../../utils/dom-utils";
import { Refable } from "../Refable/Refable";
import { AnimationType, HideShowEvent } from "../../constants/dialog";
import { VibeComponentProps } from "../../types";
import * as PopperJS from "@popperjs/core";
import styles from "./Dialog.module.scss";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";

export interface DialogProps extends VibeComponentProps {
  /**
   * A Classname to be added to <span> element which wraps the children
   */
  referenceWrapperClassName?: string;
  /**
   * Where the dialog should be in reference to the children,
   * Top, Left, Right, Bottom ...
   */
  position?: DialogPosition;
  /**
   * PopperJS Modifiers type
   * https://popper.js.org/docs/v2/modifiers/
   */
  modifiers?: Modifier<any>[];
  startingEdge?: string;
  /**
   * How much to move the dialog in relative to children
   * main is the axis in which the position is aligned to
   * secondary is the vertical axes to the position
   */
  moveBy?: { main?: number; secondary?: number };
  /**
   * how much delay should the Dialog wait until it should trigger the show in MS
   */
  showDelay?: number;
  /**
   * how much delay should the Dialog wait until it should trigger the hide in MS
   */
  hideDelay?: number;
  /**
   * an array of hide/show trigger -
   * Dialog.hideShowTriggers
   */
  showTrigger?: HideShowEvent | HideShowEvent[];
  /**
   * an array of hide/show trigger -
   * Dialog.hideShowTriggers
   */
  hideTrigger?: HideShowEvent | HideShowEvent[];
  /**
   * If true, prevents opened Dialog from closing on mouseEnter, and closes Dialog when mouse leaves it
   */
  showOnDialogEnter?: boolean;
  /**
   * Show the Dialog when the children are mounting
   */
  shouldShowOnMount?: boolean;
  /**
   * disable the opening of the dialog
   */
  disable?: boolean;
  /**
   * open is a controlled prop to open the dialog
   */
  open?: boolean;
  /**
   * used when state is derived from props
   */
  isOpen?: boolean;
  /**
   * if this class exists on the children the show trigger will be ignored
   */
  showTriggerIgnoreClass?: string | Array<string>;
  /**
   * if this class exists on the children the hide trigger will be ignored
   */
  hideTriggerIgnoreClass?: string | Array<string>;
  /**
   * Dialog animation type
   */
  animationType?: AnimationType;
  /**
   * Classname to be added to the content container
   */
  wrapperClassName?: string;
  /**
   * Prevent Animation
   */
  preventAnimationOnMount?: boolean;
  /**
   * the container selector in which to append the dialog
   * for examples: "body" , ".my-class", "#my-id"
   */
  containerSelector?: string;
  /**
   * should position the tooltip element
   * https://popper.js.org/docs/v2/modifiers/arrow/
   */
  tooltip?: boolean;
  /**
   * class name to add to the tooltip element
   */
  tooltipClassName?: string;
  /**
   * callback to be called when the dialog is shown
   */
  onDialogDidShow?: (event?: DialogEvent, eventName?: HideShowEvent | string) => void;
  /**
   * callback to be called when the dialog is hidden
   */
  onDialogDidHide?: (event: DialogEvent, eventName: HideShowEvent | string) => void;
  /**
   * callback to be called when click outside is being triggered
   */
  onClickOutside?: (event: React.MouseEvent) => void;
  /**
   * callback to be called when click on the content is being triggered
   */
  onContentClick?: (event: React.MouseEvent) => void;
  /**
   * z-index to add to the dialog
   */
  zIndex?: number;
  useDerivedStateFromProps?: boolean;
  /**
   * Make the dialog disappear when the element it is attached to becomes hidden
   */
  hideWhenReferenceHidden?: boolean;
  /**
   * @deprecated - use shouldCallbackOnMount instead
   */
  shoudlCallbackOnMount?: boolean;
  shouldCallbackOnMount?: boolean;
  instantShowAndHide?: boolean;
  getDynamicShowDelay?: () => { showDelay: number; preventAnimation: boolean };
  content?: (() => JSX.Element) | JSX.Element;
  /**
   * The element where we will position the dialog beside.
   */
  children?: ReactElement | ReactElement[] | string;
  /**
   * Treats keyboard focus/blur events as mouse-enter/mouse-leave events
   */
  addKeyboardHideShowTriggersByDefault?: boolean;
  /**
   * If true disable the scroll for the containerSelector element.
   * If string use it as selector to prevent scroll.
   */
  disableContainerScroll?: boolean | string;
}

export interface DialogState {
  isOpen?: boolean;
  shouldUseDerivedStateFromProps?: boolean;
  preventAnimation?: boolean;
}

export type DialogEvent = React.MouseEvent | React.KeyboardEvent | KeyboardEvent | React.FocusEvent | CustomEvent;

export default class Dialog extends PureComponent<DialogProps, DialogState> {
  static hideShowTriggers = HideShowEvent;
  static positions = DialogPosition;
  static animationTypes = AnimationType;
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
    containerSelector: "body",
    tooltip: false,
    onDialogDidShow: NOOP,
    onDialogDidHide: NOOP,
    onClickOutside: NOOP,
    onContentClick: NOOP,
    useDerivedStateFromProps: false,
    hideWhenReferenceHidden: false,
    shoudlCallbackOnMount: false,
    shouldCallbackOnMount: false,
    instantShowAndHide: false,
    addKeyboardHideShowTriggersByDefault: false
  };
  private showTimeout: NodeJS.Timeout;
  private hideTimeout: NodeJS.Timeout;

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
        this.hideDialogIfNeeded(event, HideShowEvent.ESCAPE_KEY);
        break;
      case "Tab":
        this.handleEvent(HideShowEvent.TAB_KEY, event.target, event);
        break;
      case "Enter":
        this.handleEvent(HideShowEvent.ENTER, event.target, event);
        break;
      default:
        break;
    }
  }

  componentDidMount() {
    const { shoudlCallbackOnMount, shouldCallbackOnMount, onDialogDidShow } = this.props;
    const overrideShouldCallbackOnMount = backwardCompatibilityForProperties(
      [shouldCallbackOnMount, shoudlCallbackOnMount],
      false
    );
    const { isOpen } = this.state;
    document.addEventListener("keyup", this.closeDialogOnEscape);
    if (overrideShouldCallbackOnMount && isOpen) {
      onDialogDidShow && onDialogDidShow();
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keyup", this.closeDialogOnEscape);
  }

  static getDerivedStateFromProps(nextProps: DialogProps, state: DialogState): DialogState {
    if (state.shouldUseDerivedStateFromProps) {
      return { isOpen: nextProps.isOpen };
    }
    return null;
  }

  getContainer() {
    const { containerSelector } = this.props;
    if (!containerSelector) {
      return document.body;
    }

    const containerElement = document.querySelector(containerSelector);
    if (!containerElement || !(containerElement instanceof Element)) {
      // TODO add env check - if not jest env - trashing the logs - https://monday.monday.com/boards/3532714909/pulses/5570955392
      // console.error(
      //   `Dialog: Container element with selector "${containerSelector}" was not found or is not an HTMLElement. Dialog may not be correctly positioned.`
      // );
      return document.body;
    }
    return containerElement;
  }

  showDialog(event: DialogEvent, eventName: HideShowEvent | string, options: { preventAnimation?: boolean } = {}) {
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

  onShowDialog(event: DialogEvent, eventName: HideShowEvent | string) {
    if (this.isShown()) return;
    const { onDialogDidShow } = this.props;
    onDialogDidShow(event, eventName);
  }

  showDialogIfNeeded(event: DialogEvent, eventName: HideShowEvent | string, options = {}) {
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

  hideDialog(event: DialogEvent, eventName: HideShowEvent | string) {
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

  onHideDialog(event: DialogEvent, eventName: HideShowEvent | string) {
    const { onDialogDidHide } = this.props;
    if (onDialogDidHide) onDialogDidHide(event, eventName);
  }

  hideDialogIfNeeded(event: DialogEvent, eventName: HideShowEvent | string) {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }

    if (this.hideTimeout) {
      return;
    }
    this.hideDialog(event, eventName);
  }

  handleEvent(eventName: HideShowEvent, target: EventTarget, event: DialogEvent) {
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

  isShowTrigger(eventName: HideShowEvent) {
    const { showTrigger, addKeyboardHideShowTriggersByDefault } = this.props;
    const showTriggersArray = convertToArray(showTrigger);

    if (addKeyboardHideShowTriggersByDefault) {
      if (eventName === HideShowEvent.FOCUS && showTriggersArray.indexOf(HideShowEvent.MOUSE_ENTER) > -1) {
        return true;
      }
    }

    return showTriggersArray.indexOf(eventName) > -1;
  }

  isHideTrigger(eventName: HideShowEvent) {
    const { hideTrigger, addKeyboardHideShowTriggersByDefault } = this.props;
    const hideTriggersArray = convertToArray(hideTrigger);

    if (addKeyboardHideShowTriggersByDefault) {
      if (eventName === HideShowEvent.BLUR && hideTriggersArray.indexOf(HideShowEvent.MOUSE_LEAVE) > -1) {
        return true;
      }
    }

    return hideTriggersArray.indexOf(eventName) > -1;
  }

  onMouseEnter(e: React.MouseEvent) {
    this.handleEvent(HideShowEvent.MOUSE_ENTER, e.target, e);
  }

  onMouseLeave(e: React.MouseEvent) {
    this.handleEvent(HideShowEvent.MOUSE_LEAVE, e.target, e);
  }

  onClick(e: React.MouseEvent) {
    if (e.button) return;
    this.handleEvent(HideShowEvent.CLICK, e.target, e);
  }

  onKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      this.handleEvent(HideShowEvent.ENTER, event.target, event);
    }

    if (event.key === "Tab") {
      this.handleEvent(HideShowEvent.TAB_KEY, event.target, event);
    }
  }

  onMouseDown(e: React.MouseEvent) {
    if (e.button) return;
    this.handleEvent(HideShowEvent.MOUSE_DOWN, e.target, e);
  }

  onFocus(e: React.FocusEvent) {
    this.handleEvent(HideShowEvent.FOCUS, e.target, e);
  }

  onBlur(e: React.FocusEvent) {
    this.handleEvent(HideShowEvent.BLUR, e.relatedTarget, e);
  }

  onEsc(e: React.KeyboardEvent) {
    this.handleEvent(HideShowEvent.ESCAPE_KEY, e.target, e);
  }

  onContextMenu(e: React.MouseEvent) {
    const isShown = this.isShown();
    if (
      (this.isShowTrigger(HideShowEvent.CONTEXT_MENU) && !isShown) ||
      (this.isHideTrigger(HideShowEvent.CONTEXT_MENU) && isShown)
    ) {
      e.preventDefault();
    }
    this.handleEvent(HideShowEvent.CONTEXT_MENU, e.target, e);
  }

  onClickOutside(event: React.MouseEvent) {
    const { onClickOutside } = this.props;
    this.handleEvent(HideShowEvent.CLICK_OUTSIDE, event.target, event);
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
    this.handleEvent(HideShowEvent.CONTENT_CLICK, e.target, e);
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
      zIndex,
      hideWhenReferenceHidden,
      disableContainerScroll,
      containerSelector,
      id,
      "data-testid": dataTestId
    } = this.props;
    const { preventAnimation } = this.state;
    const overrideDataTestId = dataTestId || getTestId(ComponentDefaultTestId.DIALOG, id);

    const disableOnClickOutside = !this.isHideTrigger(HideShowEvent.CLICK_OUTSIDE);
    const animationTypeCalculated = preventAnimationOnMount || preventAnimation ? undefined : animationType;
    const contentRendered = isFunction(content) ? content() : content;

    if (!contentRendered) {
      return children;
    }
    return (
      // @ts-ignore TS2746: This JSX tag's 'children' prop expects a single child of type 'ReactNode', but multiple children were provided.
      <Manager>
        <Reference>
          {({ ref }) => {
            return (
              <Refable
                className={cx(referenceWrapperClassName)}
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
        {createPortal(
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
                  // eslint-disable-next-line no-param-reassign
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
                  disableOnClickOutside={disableOnClickOutside}
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
