/* eslint-disable react/jsx-props-no-spreading */
import { ReactElement, CSSProperties, PureComponent, isValidElement } from "react";
import classnames from "classnames";
import { Modifier } from "react-popper";
import isFunction from "lodash/isFunction";
import Dialog from "../Dialog/Dialog";
import { BASE_SIZES_WITH_NONE, DialogPosition } from "../../constants";
import VibeComponentProps from "../../types/VibeComponentProps";
import { TooltipArrowPosition, TooltipTheme } from "./TooltipConstants";
import { HideShowEvent, JustifyType, AnimationType } from "../../constants/dialog";
import "./Tooltip.scss";

export interface TooltipProps extends VibeComponentProps {
  style?: CSSProperties;
  children: ReactElement;
  content: string | ReactElement;
  arrowPosition?: TooltipArrowPosition;
  paddingSize?: keyof typeof BASE_SIZES_WITH_NONE;
  moveBy?: { main: number; secondary: number };
  theme?: TooltipTheme;
  justify?: JustifyType;
  getContainer?: () => void;
  hideDelay?: number;
  showDelay?: number;
  disableDialogSlide?: boolean;
  animationType?: typeof AnimationType[keyof typeof AnimationType];
  withoutDialog?: boolean;
  containerSelector?: string;
  immediateShowDelay?: number;
  tip?: boolean;
  shouldShowOnMount?: boolean;
  hideWhenReferenceHidden?: boolean;
  onTooltipHide?: () => void;
  onTooltipShow?: () => void;
  modifiers?: Modifier<any>[];
  position?: typeof DialogPosition[keyof typeof DialogPosition];
  /**
   * an array of hide/show trigger -
   * Dialog.hideShowTriggers
   */
  showTrigger?: HideShowEvent;
  /**
   * an array of hide/show trigger -
   * Dialog.hideShowTriggers
   */
  hideTrigger?: HideShowEvent;
  showOnDialogEnter?: boolean;
  /**
   * A Classname to be added to <spam> element which wraps the children
   */
  referenceWrapperClassName?: string;
}
// When last tooltip was shown in the last 1.5 second - the next tooltip will be shown immediately
const IMMEDIATE_SHOW_THRESHOLD_MS = 1500;

// Shared state across multiple tooltip instances (i.e last tooltip shown time)
const globalState: { lastTooltipHideTS: number; openTooltipsCount: number } = {
  lastTooltipHideTS: null,
  openTooltipsCount: 0
};

export default class Tooltip extends PureComponent<TooltipProps> {
  wasShown: boolean;
  static positions = DialogPosition;
  static themes = TooltipTheme;
  static animationTypes = AnimationType;
  static justifyTypes = JustifyType;
  static arrowPositions = TooltipArrowPosition;
  static defaultProps = {
    arrowPosition: TooltipArrowPosition.CENTER,
    moveBy: { main: 4, secondary: 0 },
    theme: TooltipTheme.Dark,
    position: Tooltip.positions.TOP,
    justify: Tooltip.justifyTypes.CENTER,
    hideDelay: 0,
    showDelay: 300,
    disableDialogSlide: true,
    animationType: AnimationType.EXPAND,
    withoutDialog: false,
    containerSelector: "#tooltips-container",
    tip: true,
    hideWhenReferenceHidden: false,
    modifiers: new Array<Modifier<any>>(),
    showTrigger: Dialog.hideShowTriggers.MOUSE_ENTER,
    hideTrigger: Dialog.hideShowTriggers.MOUSE_LEAVE,
    showOnDialogEnter: false,
    referenceWrapperClassName: ""
  };
  constructor(props: TooltipProps) {
    super(props);
    this.renderTooltipContent = this.renderTooltipContent.bind(this);
    this.getShowDelay = this.getShowDelay.bind(this);
    this.onTooltipShow = this.onTooltipShow.bind(this);
    this.onTooltipHide = this.onTooltipHide.bind(this);

    this.wasShown = false;
  }

  getContainer() {
    return document.getElementById("tooltips-container") || document.querySelector("body");
  }

  renderTooltipContent() {
    const { theme, content, paddingSize, className, style } = this.props;
    if (!content) {
      // don't render empty tooltip
      return null;
    }
    let contentValue;
    if (isFunction(content)) {
      contentValue = content();
    } else if (isValidElement(content)) {
      contentValue = content;
    } else if (typeof content === "string" && content) {
      contentValue = content;
    }

    if (!contentValue) {
      return null;
    }
    return (
      <div
        style={style}
        className={classnames(
          `monday-style-tooltip monday-style-tooltip-${theme} padding-size-${paddingSize}`,
          className
        )}
      >
        {contentValue}
      </div>
    );
  }

  onTooltipShow() {
    if (!this.wasShown) {
      const { onTooltipShow } = this.props;
      globalState.openTooltipsCount++;
      this.wasShown = true;
      onTooltipShow && onTooltipShow();
    }
  }

  onTooltipHide() {
    if (this.wasShown) {
      const { onTooltipHide } = this.props;
      globalState.lastTooltipHideTS = Date.now();
      globalState.openTooltipsCount--;
      this.wasShown = false;
      onTooltipHide && onTooltipHide();
    }
  }

  getTimeSinceLastTooltip() {
    if (globalState.openTooltipsCount > 0) {
      return 0;
    }
    return globalState.lastTooltipHideTS ? Date.now() - globalState.lastTooltipHideTS : Infinity;
  }

  getShowDelay() {
    const { showDelay, immediateShowDelay } = this.props;
    const timeSinceLastTooltip = this.getTimeSinceLastTooltip();
    if ((immediateShowDelay === 0 || immediateShowDelay) && timeSinceLastTooltip < IMMEDIATE_SHOW_THRESHOLD_MS) {
      // showing the tooltip immediately (without animation)
      return {
        showDelay: immediateShowDelay,
        preventAnimation: true
      };
    }
    return {
      showDelay,
      preventAnimation: false
    };
  }

  render() {
    const {
      withoutDialog,
      moveBy,
      justify,
      children,
      getContainer,
      theme,
      paddingSize,
      tip,
      showTrigger,
      hideTrigger,
      showOnDialogEnter
    } = this.props;

    if (!children) {
      return null;
    }

    if (withoutDialog) {
      return this.renderTooltipContent();
    }
    const content = this.renderTooltipContent;
    const dialogProps = {
      ...this.props,
      startingEdge: justify,
      tooltip: tip,
      content,
      getContainer: getContainer || this.getContainer,
      moveBy,
      tooltipClassName: `monday-style-arrow monday-style-arrow-${theme} padding-size-${paddingSize}`,
      animationType: "expand",
      onDialogDidHide: this.onTooltipHide,
      onDialogDidShow: this.onTooltipShow,
      getDynamicShowDelay: this.getShowDelay,
      showTrigger,
      hideTrigger,
      showOnDialogEnter
    };
    return <Dialog {...dialogProps}>{children}</Dialog>;
  }
}
