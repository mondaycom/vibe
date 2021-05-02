/* eslint-disable no-param-reassign */
import React, { PureComponent } from "react";
import { createPortal } from "react-dom";
import { Manager, Reference, Popper } from "react-popper";
import cx from "classnames";
import isFunction from "lodash/isFunction";
import { chainFunctions, convertToArray } from "../../utils/function-utils";
import { DialogContent } from "./DialogContent/DialogContent";
import { isInsideClass } from "../../utils/dom-utils";
import "./Dialog.scss";
import { Refable } from "../Refable/Refable";
import { HIDE_SHOW_EVENTS } from "./consts/dialog-show-hide-event";

const NOOP = () => {};

export default class Dialog extends PureComponent {
  constructor(props) {
    super(props);
    this.referenceRef = React.createRef();
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
    if (event.key === "Escape") this.hideDialogIfNeeded(event, HIDE_SHOW_EVENTS.ESCAPE_KEY);
    if (event.key === "Tab") this.handleEvent(HIDE_SHOW_EVENTS.TAB_KEY, event);
  }

  componentDidMount() {
    document.addEventListener("keyup", this.closeDialogOnEscape);
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
    console.log(eventName);
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
      zIndex
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
            {({ placement, style, ref, arrowProps }) => {
              if (!this.isShown() && placement) {
                return null;
              }
              return (
                <DialogContent
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

Dialog.defaultProps = {
  referenceWrapperClassName: "",
  position: "top",
  modifiers: [],
  startingEdge: "",
  moveBy: { main: 0, secondary: 0 },
  showDelay: 100,
  hideDelay: 100,
  showTrigger: HIDE_SHOW_EVENTS.MOUSE_ENTER,
  hideTrigger: HIDE_SHOW_EVENTS.MOUSE_LEAVE,
  showOnDialogEnter: false,
  shouldShowOnMount: false,
  disable: false,
  open: false,
  showTriggerIgnoreClass: null,
  hideTriggerIgnoreClass: null,
  disableDialogSlide: false,
  dialogSlideFactor: 20,
  animationType: "expand",
  wrapperClassName: null,
  preventAnimationOnMount: false,
  onReposition: null,
  getScrollableContainer: null,
  containerSelector: "body",
  shouldAdjustVerticalPosition: false,
  tooltip: false,
  tooltipClassName: "",
  onEsc: NOOP,
  onDialogDidShow: NOOP,
  onDialogDidHide: NOOP,
  onClickOutside: NOOP,
  onContentClick: NOOP,
  closeOnClickInside: false,
  zIndex: null,
  useDerivedStateFromProps: false
};

function chainOnPropsAndInstance(name, instance, props) {
  return chainFunctions([props[name], instance[name]], true);
}
