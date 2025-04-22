import { forwardRef, Fragment, ReactElement, useEffect, useMemo, useRef, useState } from "react";
import cx from "classnames";
import { AnimationType as AnimationTypeEnum, HideShowEvent as HideShowEventEnum } from "../Dialog/DialogConstants";
import { DialogAnimationType, DialogTriggerEvent } from "../Dialog/Dialog.types";
import useMergeRef from "../../hooks/useMergeRef";
import Tooltip from "../../components/Tooltip/Tooltip";
import IconButton from "../../components/IconButton/IconButton";
import { CloseSmall } from "@vibe/icons";
import TipseenTitle from "./TipseenTitle";
import {
  TIPSEEN_CLOSE_BUTTON_ARIA_LABEL,
  TipseenCloseButtonTheme as TipseenCloseButtonThemeEnum,
  TipseenColor as TipseenColorEnum
} from "./TipseenConstants";
import { TipseenCloseButtonTheme, TipseenColor } from "./Tipseen.types";
import { ElementContent, VibeComponentProps, withStaticProps } from "../../types";
import { MoveBy } from "../../types/MoveBy";
import { Modifier } from "react-popper";
import { ComponentDefaultTestId } from "../../tests/constants";
import { getTestId } from "../../tests/test-ids-utils";
import Text from "../Text/Text";
import styles from "./Tipseen.module.scss";
import { ButtonColor } from "../Button/ButtonConstants";
import React from "react";
import { TooltipPositions } from "../Tooltip/Tooltip.types";
import { TooltipPositions as TooltipPositionsEnum } from "../Tooltip/TooltipConstants";

export interface TipseenProps extends VibeComponentProps {
  /**
   * Class name applied to the Tipseen title.
   */
  titleClassName?: string;
  /**
   * The position of the Tipseen relative to the target element.
   */
  position?: TooltipPositions;
  /**
   * The animation type used for showing/hiding the Tipseen.
   */
  animationType?: DialogAnimationType;
  /**
   * The delay in milliseconds before hiding the Tipseen.
   */
  hideDelay?: number;
  /**
   * The delay in milliseconds before showing the Tipseen.
   */
  showDelay?: number;
  /**
   * The title text of the Tipseen.
   */
  title?: string;
  /**
   * If true, hides the close button.
   */
  hideCloseButton?: boolean;
  /**
   * The child element that triggers the Tipseen.
   */
  children?: ReactElement;
  /**
   * The CSS selector of the container where the Tipseen should be rendered.
   */
  containerSelector?: string;
  /**
   * Events that trigger hiding the Tipseen.
   */
  hideTrigger?: DialogTriggerEvent | Array<DialogTriggerEvent>;
  /**
   * Events that trigger showing the Tipseen.
   */
  showTrigger?: DialogTriggerEvent | Array<DialogTriggerEvent>;
  /**
   * The width of the Tipseen.
   */
  width?: number;
  /**
   * Offset values for positioning adjustments.
   */
  moveBy?: MoveBy;
  /**
   * If true, hides the Tipseen when the reference element is hidden.
   */
  hideWhenReferenceHidden?: boolean;
  /**
   * Class name applied to the reference wrapper element.
   */
  referenceWrapperClassName?: string;
  /**
   * If false, hides the arrow of the Tipseen.
   */
  tip?: boolean;
  /**
   * Class name applied to the Tipseen arrow.
   */
  tooltipArrowClassName?: string;
  /**
   * Custom Popper.js modifiers.
   * https://popper.js.org/docs/v2/modifiers/
   */
  modifiers?: Array<Modifier<unknown>>;
  /**
   * The aria-label for the close button.
   */
  closeAriaLabel?: string;
  /**
   * Callback fired when the Tipseen is closed.
   */
  onClose?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * The content displayed inside the Tipseen.
   */
  content: ElementContent;
  /**
   * The theme of the Tipseen close button.
   */
  closeButtonTheme?: TipseenCloseButtonTheme;
  /**
   * If true, renders the Tipseen as a floating element without a reference.
   */
  floating?: boolean;
  /**
   * The color theme of the Tipseen.
   */
  color?: TipseenColor;
}

export const TipseenContext = React.createContext<TipseenColor>("primary");

const Tipseen = forwardRef(
  (
    {
      className,
      id,
      position = "bottom",
      animationType = "expand",
      hideDelay = 0,
      showDelay = 100,
      title,
      titleClassName,
      hideCloseButton,
      closeButtonTheme = "light",
      onClose,
      closeAriaLabel,
      children = null,
      content,
      containerSelector,
      hideTrigger = [],
      showTrigger = [],
      width,
      moveBy,
      hideWhenReferenceHidden = false,
      referenceWrapperClassName,
      tip = true,
      tooltipArrowClassName,
      modifiers = [],
      floating = false,
      color: colorProp,
      "data-testid": dataTestId
    }: TipseenProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const color = colorProp ?? "inverted";

    const defaultDelayOpen =
      Array.isArray(showTrigger) && Array.isArray(hideTrigger) && showTrigger.length === 0 && showDelay > 0;

    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);
    const [delayedOpen, setDelayOpen] = useState(!defaultDelayOpen);
    const overrideCloseAriaLabel = closeAriaLabel || TIPSEEN_CLOSE_BUTTON_ARIA_LABEL;

    useEffect(() => {
      let timeout: NodeJS.Timeout;
      if (showDelay) {
        timeout = setTimeout(() => {
          setDelayOpen(true);
        }, showDelay);
      }
      return () => {
        clearTimeout(timeout);
      };
    }, [showDelay, setDelayOpen]);

    const textColor = useMemo(() => {
      return color === "inverted" ? "onInverted" : "onPrimary";
    }, [color]);
    const closeButtonColor = useMemo(() => {
      if (closeButtonTheme === "light") {
        return color === "inverted" ? ButtonColor.ON_INVERTED_BACKGROUND : ButtonColor.ON_PRIMARY_COLOR;
      } else {
        return closeButtonTheme;
      }
    }, [color, closeButtonTheme]);

    const TipseenWrapper = ref || id ? "div" : Fragment;
    const tooltipContent = (
      <div>
        <div className={cx(styles.tipseenHeader)}>
          {hideCloseButton ? null : (
            <IconButton
              hideTooltip
              className={cx(styles.tipseenCloseButton, {
                [styles.dark]: closeButtonTheme === "dark" || closeButtonTheme === "fixed-dark"
              })}
              onClick={onClose}
              size="xs"
              kind="tertiary"
              // @ts-ignore
              color={closeButtonColor}
              ariaLabel={overrideCloseAriaLabel}
              icon={CloseSmall}
            />
          )}
          <TipseenTitle text={title} className={cx(styles.tipseenTitle, titleClassName)} />
        </div>
        <Text color={textColor} type="text2" element="p" className={cx(styles.tipseenContent)}>
          <TipseenContext.Provider value={color}>{content}</TipseenContext.Provider>
        </Text>
      </div>
    );

    return (
      <TipseenWrapper ref={mergedRef} id={id} data-testid={dataTestId || getTestId(ComponentDefaultTestId.TIPSEEN, id)}>
        <Tooltip
          className={cx(styles.tipseenWrapper, className, {
            [styles.tipseenWrapperWithoutCustomWidth]: !width,
            [styles.floating]: floating
          })}
          maxWidth={width}
          arrowClassName={tooltipArrowClassName}
          style={width ? { width } : undefined}
          shouldShowOnMount={!defaultDelayOpen}
          position={position}
          animationType={animationType}
          hideDelay={hideDelay}
          showDelay={0}
          hideTrigger={hideTrigger}
          showTrigger={showTrigger}
          showOnDialogEnter={false}
          content={tooltipContent}
          theme={color === "inverted" ? "dark" : "primary"}
          containerSelector={containerSelector}
          disableDialogSlide={false}
          moveBy={moveBy}
          hideWhenReferenceHidden={hideWhenReferenceHidden}
          referenceWrapperClassName={referenceWrapperClassName}
          tip={tip && !floating}
          modifiers={modifiers}
          open={defaultDelayOpen ? delayedOpen : undefined}
          forceRenderWithoutChildren={floating}
        >
          {children}
        </Tooltip>
      </TipseenWrapper>
    );
  }
);

interface TipseenStaticProps {
  closeButtonThemes: typeof TipseenCloseButtonThemeEnum;
  animationTypes: typeof AnimationTypeEnum;
  hideShowTriggers: typeof HideShowEventEnum;
  colors: typeof TipseenColorEnum;
  positions: typeof TooltipPositionsEnum;
}

export default withStaticProps<TipseenProps, TipseenStaticProps>(Tipseen, {
  closeButtonThemes: TipseenCloseButtonThemeEnum,
  animationTypes: AnimationTypeEnum,
  hideShowTriggers: HideShowEventEnum,
  colors: TipseenColorEnum,
  positions: TooltipPositionsEnum
});
