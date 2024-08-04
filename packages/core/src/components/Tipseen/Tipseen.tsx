import { forwardRef, Fragment, ReactElement, useEffect, useMemo, useRef, useState } from "react";
import cx from "classnames";
import { AnimationType as AnimationTypeEnum, HideShowEvent as HideShowEventEnum } from "../Dialog/DialogConstants";
import { DialogAnimationType, DialogTriggerEvent } from "../Dialog/Dialog.types";
import useMergeRef from "../../hooks/useMergeRef";
import Tooltip from "../../components/Tooltip/Tooltip";
import Button from "../../components/Button/Button";
import IconButton from "../../components/IconButton/IconButton";
import CloseSmall from "../../components/Icon/Icons/components/CloseSmall";
import TipseenTitle from "./TipseenTitle";
import {
  TIPSEEN_CLOSE_BUTTON_ARIA_LABEL,
  TipseenCloseButtonTheme as TipseenCloseButtonThemeEnum,
  TipseenColor as TipseenColorEnum
} from "./TipseenConstants";
import { TipseenCloseButtonTheme, TipseenColor } from "./Tipseen.types";
import { ElementContent, VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import { MoveBy } from "../../types/MoveBy";
import { Modifier } from "react-popper";
import { ComponentDefaultTestId } from "../../tests/constants";
import { getTestId } from "../../tests/test-ids-utils";
import Text from "../Text/Text";
import styles from "./Tipseen.module.scss";
import { ButtonColor } from "../Button/ButtonConstants";
import React from "react";
import { TooltipPositions } from "../Tooltip/Tooltip.types";

export interface TipseenProps extends VibeComponentProps {
  /**
   * Classname for overriding TipseenTitle styles
   */
  titleClassName?: string;
  position?: TooltipPositions;
  animationType?: DialogAnimationType;
  hideDelay?: number;
  showDelay?: number;
  title?: string;
  hideCloseButton?: boolean;
  children?: ReactElement;
  containerSelector?: string;
  hideTrigger?: DialogTriggerEvent | Array<DialogTriggerEvent>;
  showTrigger?: DialogTriggerEvent | Array<DialogTriggerEvent>;
  width?: number;
  moveBy?: MoveBy;
  hideWhenReferenceHidden?: boolean;
  /**
   * when false, the arrow of the tooltip is hidden
   */
  tip?: boolean;
  /** Class name for a tooltip's arrow */
  tooltipArrowClassName?: string;
  /**
   * PopperJS Modifiers type
   * https://popper.js.org/docs/v2/modifiers/
   */
  modifiers?: Array<Modifier<unknown>>;
  closeAriaLabel?: string;
  onClose?: () => void;
  // Better be required, but it might be a breaking change
  content?: ElementContent;
  /**
   * Control the color of the Tipseen close button. Dark theme can be useful while presenting bright images under the tipseen image
   */
  closeButtonTheme?: TipseenCloseButtonTheme;
  floating?: boolean;
  /** The color of the Tipseen */
  color?: TipseenColor;
}

export const TipseenContext = React.createContext<TipseenColor>("primary");

const Tipseen: VibeComponent<TipseenProps> & {
  closeButtonThemes?: typeof TipseenCloseButtonThemeEnum;
  animationTypes?: typeof AnimationTypeEnum;
  hideShowTriggers?: typeof HideShowEventEnum;
  colors?: typeof TipseenColorEnum;
} = forwardRef(
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
      tip = true,
      tooltipArrowClassName,
      modifiers = [],
      floating = false,
      color = "primary",
      "data-testid": dataTestId
    }: TipseenProps,
    ref
  ) => {
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
              size={Button.sizes.XS}
              kind={Button.kinds.TERTIARY}
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
          arrowClassName={tooltipArrowClassName}
          style={width ? { width } : undefined}
          shouldShowOnMount={!defaultDelayOpen}
          position={position}
          animationType={animationType}
          hideDelay={hideDelay}
          showDelay={showDelay}
          hideTrigger={hideTrigger}
          showTrigger={showTrigger}
          content={tooltipContent}
          theme={color === "inverted" ? "dark" : "primary"}
          containerSelector={containerSelector}
          disableDialogSlide={false}
          moveBy={moveBy}
          hideWhenReferenceHidden={hideWhenReferenceHidden}
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

export default withStaticProps(Tipseen, {
  closeButtonThemes: TipseenCloseButtonThemeEnum,
  animationTypes: AnimationTypeEnum,
  hideShowTriggers: HideShowEventEnum,
  colors: TipseenColorEnum
});
