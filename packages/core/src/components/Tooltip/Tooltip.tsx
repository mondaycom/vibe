/* eslint-disable react/jsx-props-no-spreading */
import { camelCase, isFunction } from "lodash-es";
import cx from "classnames";
import React, { CSSProperties, isValidElement, PureComponent, ReactElement } from "react";
import { Modifier } from "react-popper";
import Dialog from "../Dialog/Dialog";
import { AnimationType, BASE_SIZES_WITH_NONE, HideShowEvent, JustifyType } from "../../constants";
import { DialogPosition } from "../../constants/positions";
import VibeComponentProps from "../../types/VibeComponentProps";
import { TooltipArrowPosition, TooltipTheme } from "./TooltipConstants";
import { ElementContent } from "../../types/ElementContent";
import { MoveBy } from "../../types/MoveBy";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import styles from "./Tooltip.module.scss";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { SubIcon } from "../../types";
import Icon from "../Icon/Icon";
import Flex from "../Flex/Flex";
import { warnDeprecated } from "../../utils/warn-deprecated";

export type TooltipProps = TooltipBaseProps & (TooltipWithChildrenProps | TooltipWithoutChildrenProps);

interface TooltipWithoutChildrenProps {
  /**
   * When true, the tooltip would be rendered on a Dialog without children
   * Use case is currently for rendering Tipseen with floating prop
   */
  forceRenderWithoutChildren: boolean;
  children?: ReactElement | Array<ReactElement>;
}

interface TooltipWithChildrenProps {
  forceRenderWithoutChildren?: boolean;
  children: ReactElement | Array<ReactElement>;
}

// TODO TS-migration extend DialogProps, once Dialog is migrated to TS
interface TooltipBaseProps extends VibeComponentProps {
  content: ElementContent;
  style?: CSSProperties;
  arrowPosition?: TooltipArrowPosition;
  /** Class name for a tooltip's arrow */
  arrowClassName?: string;
  paddingSize?: keyof typeof BASE_SIZES_WITH_NONE;
  /**
   * How much to move the dialog in relative to children
   * main is the axis in which the position is aligned to
   * secondary is the vertical axes to the position
   */
  moveBy?: MoveBy;
  theme?: TooltipTheme;
  justify?: JustifyType;
  getContainer?: () => HTMLElement;
  /**
   * how much delay should the Dialog wait until it should trigger the hide in MS
   */
  hideDelay?: number;
  /**
   * how much delay should the Dialog wait until it should trigger the show in MS
   */
  showDelay?: number;
  disableDialogSlide?: boolean;
  animationType?: AnimationType;
  withoutDialog?: boolean;
  /**
   * the container selector in which to append the dialog
   * for examples: "body" , ".my-class", "#my-id"
   */
  containerSelector?: string;
  /**
   * With which delay tooltip is going to be shown
   */
  immediateShowDelay?: number;
  /**
   * when false, the arrow of the tooltip is hidden
   */
  tip?: boolean;
  /**
   * Show the Dialog when the children is mounting
   */
  shouldShowOnMount?: boolean;
  hideWhenReferenceHidden?: boolean;
  onTooltipHide?: () => void;
  onTooltipShow?: () => void;
  /**
   * PopperJS Modifiers type
   * https://popper.js.org/docs/v2/modifiers/
   */
  modifiers?: Array<Modifier<unknown>>;
  /**
   * Where the tooltip should be in reference to the children: Top, Left, Right, Bottom ...
   */
  position?: DialogPosition;
  /**
   * an array of hide/show trigger - Tooltip.hideShowTriggers
   */
  showTrigger?: HideShowEvent | Array<HideShowEvent>;
  /**
   * an array of hide/show trigger - Tooltip.hideShowTriggers
   */
  hideTrigger?: HideShowEvent | Array<HideShowEvent>;
  /**
   * If true, prevents open Tooltip from closing on mouseEnter and closes Tooltip, when mouse leaves it
   */
  showOnDialogEnter?: boolean;
  /**
   * A Classname to be added to <span> element which wraps the children
   */
  referenceWrapperClassName?: string;
  /**
   * Treats keyboard focus/blur events as mouse-enter/mouse-leave events
   */
  addKeyboardHideShowTriggersByDefault?: boolean;
  /**
   * set the state of the tooltip - open/close - controlled component
   */
  open?: boolean;
  /**
   * Overwrites z-index of the tooltip
   */
  zIndex?: number;
  // TODO: make default next major
  /**
   * Limit tooltip to 240px
   */
  withMaxWidth?: boolean;
  /**
   * The title of the tooltip
   */
  title?: string;
  /**
   * The image of the tooltip
   */
  image?: string;
  /**
   * The icon of the tooltip next to the title
   */
  icon?: SubIcon;
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
  static hideShowTriggers = HideShowEvent;
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
    modifiers: new Array<Modifier<unknown>>(),
    showTrigger: Tooltip.hideShowTriggers.MOUSE_ENTER,
    hideTrigger: Tooltip.hideShowTriggers.MOUSE_LEAVE,
    showOnDialogEnter: false,
    referenceWrapperClassName: "",
    addKeyboardHideShowTriggersByDefault: false,
    open: false
  };
  constructor(props: TooltipProps) {
    super(props);
    this.renderTooltipContent = this.renderTooltipContent.bind(this);
    this.getShowDelay = this.getShowDelay.bind(this);
    this.onTooltipShow = this.onTooltipShow.bind(this);
    this.onTooltipHide = this.onTooltipHide.bind(this);

    this.wasShown = false;
    warnDeprecated({
      component: "Tooltip",
      condition: this.props.theme && !["primary", "dark"].includes(this.props.theme),
      message:
        "'theme' prop will be able to get only 'dark' and 'primary' in the upcoming major version. Please consider using these themes."
    });
    warnDeprecated({
      component: "Tooltip",
      condition: this.props.position && !["top", "left", "right", "bottom"].includes(this.props.position),
      message:
        "'position' prop will be able to get only 'top', 'bottom', 'left', and 'right' values in the upcoming major version. Please consider using these positions."
    });
  }

  getContainer() {
    return document.getElementById("tooltips-container") || document.querySelector("body");
  }

  renderTooltipContent() {
    const { theme, content, paddingSize, className, style, withMaxWidth, title, image, icon } = this.props;
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

    if (title || image) {
      return (
        <div
          style={style}
          className={cx(
            styles.tooltip,
            styles.tooltipWithContent,
            getStyle(styles, camelCase(theme)),
            { [styles.withMaxWidth]: withMaxWidth },
            className
          )}
        >
          {image && <img className={styles.image} src={image} alt="" />}
          <div className={cx(styles.content, getStyle(styles, camelCase("padding-size-" + paddingSize)))}>
            {title && (
              <Flex gap={Flex.gaps.XS}>
                {icon && <Icon iconSize="20" icon={icon} clickable={false} />}
                <div className={styles.title}>{title}</div>
              </Flex>
            )}
            {contentValue}
          </div>
        </div>
      );
    }

    // TODO: remove in next major, use (title || image) variant instead
    return (
      <div
        style={style}
        className={cx(
          styles.tooltip,
          getStyle(styles, camelCase(theme)),
          getStyle(styles, camelCase("padding-size-" + paddingSize)),
          { [styles.withMaxWidth]: withMaxWidth },
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
      justify,
      children,
      forceRenderWithoutChildren,
      getContainer,
      theme,
      paddingSize,
      tip,
      arrowClassName,
      id,
      "data-testid": dataTestId
    } = this.props;

    if (!children && !forceRenderWithoutChildren) {
      return null;
    }

    if (withoutDialog) {
      return this.renderTooltipContent();
    }

    const content = this.renderTooltipContent;
    const dialogProps = {
      ...this.props,
      "data-testid": dataTestId || getTestId(ComponentDefaultTestId.TOOLTIP, id),
      startingEdge: justify,
      tooltip: tip,
      content,
      getContainer: getContainer || this.getContainer,
      tooltipClassName: cx(
        styles.arrow,
        getStyle(styles, theme),
        getStyle(styles, camelCase("padding-size-" + paddingSize)),
        arrowClassName
      ),
      animationType: AnimationType.EXPAND,
      onDialogDidHide: this.onTooltipHide,
      onDialogDidShow: this.onTooltipShow,
      getDynamicShowDelay: this.getShowDelay
    };
    return <Dialog {...dialogProps}>{children}</Dialog>;
  }
}
