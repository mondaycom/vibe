/* eslint-disable no-param-reassign */
import { DialogPositions } from "../../constants/sizes";
import { DIALOG_ANIMATION_TYPES } from "../../constants/AnimationTypes";
import React, { PureComponent } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { Manager, Reference, Popper } from "react-popper";
import cx from "classnames";
import isFunction from "lodash/isFunction";
import { chainFunctions, convertToArray } from "../../utils/function-utils";
import { DialogContent } from "./DialogContent/DialogContent";
import { isInsideClass } from "../../utils/dom-utils";
import { Refable } from "../../components/Refable/Refable";
import { HIDE_SHOW_EVENTS } from "./consts/dialog-show-hide-event";
import "./Dialog.scss";

const NOOP = () => {};

export default class Dialog extends PureComponent {
  constructor(props) {
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

    // Timeouts
    this.hideTimeout = null;
    this.showTimeout = null;
  }

  closeDialogOnEscape(event) {
    const { isOpen } = this.state;
    if (!isOpen) {
      return;
    }
    switch (event.key) {
      case "Escape":
        this.hideDialogIfNeeded(event, HIDE_SHOW_EVENTS.ESCAPE_KEY);
        break;
      case "Tab":
        this.handleEvent(HIDE_SHOW_EVENTS.TAB_KEY, event);
        break;
      case "Enter":
        this.handleEvent(HIDE_SHOW_EVENTS.ENTER, event);
        break;
      default:
        break;
    }
  }

  componentDidMount() {
    const { shoudlCallbackOnMount, onDialogDidShow } = this.props;
    const { isOpen } = this.state;
    document.addEventListener("keyup", this.closeDialogOnEscape);
    if (shoudlCallbackOnMount && isOpen) {
      onDialogDidShow && onDialogDidShow();
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keyup", this.closeDialogOnEscape);
  }

  static getDerivedStateFromProps(nextProps, state) {
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
    return document.querySelector(containerSelector) || document.body;
  }

  showDialog(options = {}) {
    const { showDelay, instantShowAndHide, getDynamicShowDelay } = this.props;
    let finalShowDelay = showDelay;
    let preventAnimation = options.preventAnimation;
    if (getDynamicShowDelay) {
      const dynamicDelayObj = getDynamicShowDelay();
      finalShowDelay = dynamicDelayObj.showDelay || 0;
      preventAnimation = preventAnimation || dynamicDelayObj.preventAnimation;
    }

    if (instantShowAndHide) {
      this.onShowDialog(options);
      this.setState({ isOpen: true, preventAnimation });
      this.showTimeout = null;
    } else {
      this.showTimeout = setTimeout(() => {
        this.onShowDialog(options);
        this.showTimeout = null;
        this.setState({ isOpen: true, preventAnimation });
      }, finalShowDelay);
    }
  }

  onShowDialog() {
    if (this.isShown()) return;
    const { onDialogDidShow } = this.props;
    onDialogDidShow();
  }

  showDialogIfNeeded(options = {}) {
    const { disable } = this.props;
    if (disable) {
      return;
    }

    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }

    if (!this.showTimeout) {
      this.showDialog(options);
    }
  }

  hideDialog(event, eventName) {
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

  onHideDialog(event, eventName) {
    const { onDialogDidHide } = this.props;
    if (onDialogDidHide) onDialogDidHide(event, eventName);
  }

  hideDialogIfNeeded(event, eventName) {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }

    if (this.hideTimeout) {
      return;
    }
    this.hideDialog(event, eventName);
  }

  handleEvent(eventName, target, event) {
    const { showTriggerIgnoreClass, hideTriggerIgnoreClass } = this.props;
    if (this.isShowTrigger(eventName) && !this.isShown() && !isInsideClass(target, showTriggerIgnoreClass)) {
      return this.showDialogIfNeeded();
    }

    if (this.isHideTrigger(eventName) && !isInsideClass(target, hideTriggerIgnoreClass)) {
      return this.hideDialogIfNeeded(event, eventName);
    }
  }

  isShown() {
    const { isOpen } = this.state;
    const { open } = this.props;

    return isOpen || open;
  }

  isShowTrigger(event) {
    const { showTrigger } = this.props;
    return convertToArray(showTrigger).indexOf(event) > -1;
  }

  isHideTrigger(eventName) {
    const { hideTrigger } = this.props;
    return convertToArray(hideTrigger).indexOf(eventName) > -1;
  }

  onMouseEnter(e) {
    this.handleEvent("mouseenter", e.target, e);
  }

  onMouseLeave(e) {
    this.handleEvent("mouseleave", e.target, e);
  }

  onClick(e) {
    if (e.button) return;
    this.handleEvent("click", e.target, e);
  }

  onKeyDown(event) {
    if (event.key === "Enter") {
      this.handleEvent("enter", event.target, event);
    }

    if (event.key === "Tab") {
      this.handleEvent("tab", event.target, event);
    }
  }

  onMouseDown(e) {
    if (e.button) return;
    this.handleEvent("mousedown", e.target, e);
  }

  onFocus(e) {
    this.handleEvent("focus", e.target, e);
  }

  onBlur(e) {
    this.handleEvent("blur", e.relatedTarget, e);
  }

  onEsc(e) {
    this.handleEvent("esckey", e.target, e);
  }

  onClickOutside(event) {
    const { onClickOutside } = this.props;
    this.handleEvent("clickoutside", event.target, event);
    onClickOutside(event);
  }

  onDialogEnter() {
    const { showOnDialogEnter } = this.props;
    if (showOnDialogEnter) this.showDialogIfNeeded();
  }

  onDialogLeave(event) {
    const { showOnDialogEnter } = this.props;
    if (showOnDialogEnter) this.hideDialogIfNeeded(event, "DialogLeave");
  }

  onContentClick(e) {
    const { onContentClick } = this.props;
    this.handleEvent("onContentClick", e.target, e);
    onContentClick();
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
      hideWhenReferenceHidden
    } = this.props;
    const { preventAnimation } = this.state;

    const disableOnClickOutside = !this.isHideTrigger("clickoutside");
    const animationTypeCalculated = preventAnimationOnMount || preventAnimation ? false : animationType;
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
                className={referenceWrapperClassName}
                ref={ref}
                onBlur={chainOnPropsAndInstance("onBlur", this, this.props)}
                onKeyDown={chainOnPropsAndInstance("onKeyDown", this, this.props)}
                onClick={chainOnPropsAndInstance("onClick", this, this.props)}
                onFocus={chainOnPropsAndInstance("onFocus", this, this.props)}
                onMouseDown={chainOnPropsAndInstance("onMouseDown", this, this.props)}
                onMouseEnter={chainOnPropsAndInstance("onMouseEnter", this, this.props)}
                onMouseLeave={chainOnPropsAndInstance("onMouseLeave", this, this.props)}
              >
                {children}
              </Refable>
            );
          }}
        </Reference>
        {createPortal(
          <Popper
            placement={position}
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
                    state.styles.popper.zIndex = zIndex;
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
                  isReferenceHidden={hideWhenReferenceHidden && isReferenceHidden}
                  onMouseEnter={this.onDialogEnter}
                  onMouseLeave={this.onDialogLeave}
                  disableOnClickOutside={disableOnClickOutside}
                  onClickOutside={this.onClickOutside}
                  onEscKey={this.onEsc}
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
                >
                  {contentRendered}
                  {tooltip && (
                    <div
                      style={arrowProps.style}
                      ref={arrowProps.ref}
                      className={cx("monday-style-tooltip-arrow", tooltipClassName)}
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

Dialog.hideShowTriggers = HIDE_SHOW_EVENTS;
Dialog.positions = DialogPositions;
Dialog.animationTypes = DIALOG_ANIMATION_TYPES;

Dialog.propTypes = {
  /**
   * A Classname to be added to <spam> element which wraps the children
   */
  referenceWrapperClassName: PropTypes.string,
  /**
   * Where the dialog should be in reference to the children,
   * Top, Left, Right, Bottom ...
   */
  position: PropTypes.oneOf([...Object.values(Dialog.positions)]),
  /**
   * PopperJS Modifiers type
   * https://popper.js.org/docs/v2/modifiers/
   */
  modifiers: PropTypes.array,
  startingEdge: PropTypes.string,
  /**
   * How much to move the dialog in relative to children
   * main is the axis in which the position is aligned to
   * secondary is the vertical axes to the position
   */
  moveBy: PropTypes.shape({
    main: PropTypes.number,
    secondary: PropTypes.number
  }),
  /**
   * how much delay should the Dialog wait until it should trigger the show in MS
   */
  showDelay: PropTypes.number,
  /**
   * how much delay should the Dialog wait until it should trigger the hide in MS
   */
  hideDelay: PropTypes.number,
  /**
   * an array of hide/show trigger -
   * Dialog.hideShowTriggers
   */
  showTrigger: PropTypes.any,

  /**
   * an array of hide/show trigger -
   * Dialog.hideShowTriggers
   */
  hideTrigger: PropTypes.any,

  showOnDialogEnter: PropTypes.bool,
  /**
   * Show the Dialog when the children is mounting
   */
  shouldShowOnMount: PropTypes.bool,
  /**
   * disable the opening of the dialog
   */
  disable: PropTypes.bool,
  /**
   * open is a controlled prop to open the dialog
   */
  open: PropTypes.bool,
  /**
   * if this class exists on the children the show trigger will be ignored
   */
  showTriggerIgnoreClass: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * if this class exists on the children the hide trigger will be ignored
   */
  hideTriggerIgnoreClass: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * Dialog animation type
   */
  animationType: PropTypes.oneOf([Dialog.animationTypes.EXPAND, Dialog.animationTypes.OPACITY_AND_SLIDE]),
  /**
   * Classname to be added to the content container
   */
  wrapperClassName: PropTypes.string,
  /**
   * Prevent Animation
   */
  preventAnimationOnMount: PropTypes.bool,
  /**
   * the container selector in which to append the dialog
   * for examples: "body" , ".my-class", "#my-id"
   */
  containerSelector: PropTypes.string,
  /**
   * should position the tooltip element
   * https://popper.js.org/docs/v2/modifiers/arrow/
   */
  tooltip: PropTypes.bool,
  /**
   * class name to add to the tooltip element
   */
  tooltipClassName: PropTypes.string,
  /**
   * callback to be called when the dialog is shown
   */
  onDialogDidShow: PropTypes.func,
  /**
   * callback to be called when the dialog is hidden
   */
  onDialogDidHide: PropTypes.func,
  /**
   * callback to be called when click outside is being triggered
   */
  onClickOutside: PropTypes.func,
  /**
   * callback to be called when click on the content is being triggered
   */
  onContentClick: PropTypes.func,
  /**
   * z-index to add to the dialog
   */
  zIndex: PropTypes.number,
  useDerivedStateFromProps: PropTypes.bool,
  hideWhenReferenceHidden: PropTypes.bool,
  shoudlCallbackOnMount: PropTypes.bool
};

Dialog.defaultProps = {
  referenceWrapperClassName: "",
  position: "top",
  modifiers: [],
  startingEdge: "",
  moveBy: { main: 0, secondary: 0 },
  showDelay: 100,
  hideDelay: 100,
  showTrigger: Dialog.hideShowTriggers.MOUSE_ENTER,
  hideTrigger: Dialog.hideShowTriggers.MOUSE_LEAVE,
  showOnDialogEnter: false,
  shouldShowOnMount: false,
  disable: false,
  open: false,
  showTriggerIgnoreClass: null,
  hideTriggerIgnoreClass: null,
  animationType: Dialog.animationTypes.EXPAND,
  wrapperClassName: null,
  preventAnimationOnMount: false,
  containerSelector: "body",
  tooltip: false,
  tooltipClassName: "",
  onDialogDidShow: NOOP,
  onDialogDidHide: NOOP,
  onClickOutside: NOOP,
  onContentClick: NOOP,
  zIndex: null,
  useDerivedStateFromProps: false,
  hideWhenReferenceHidden: false,
  shoudlCallbackOnMount: false
};

function chainOnPropsAndInstance(name, instance, props) {
  return chainFunctions([props[name], instance[name]], true);
}
