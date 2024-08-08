import { forwardRef, Fragment, ReactElement, useEffect, useMemo, useRef, useState } from "react";
import cx from "classnames";
import { AnimationType, DialogPosition, EMPTY_ARR, HideShowEvent, JustifyType } from "../../constants";
import useMergeRef from "../../hooks/useMergeRef";
import Tooltip from "../../components/Tooltip/Tooltip";
import Button from "../../components/Button/Button";
import IconButton from "../../components/IconButton/IconButton";
import CloseSmall from "../../components/Icon/Icons/components/CloseSmall";
import TipseenTitle from "./TipseenTitle";
import { TIPSEEN_CLOSE_BUTTON_ARIA_LABEL, TipseenCloseButtonTheme, TipseenColor } from "./TipseenConstants";
import { ElementContent, VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import { MoveBy } from "../../types/MoveBy";
import { Modifier } from "react-popper";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { ComponentDefaultTestId } from "../../tests/constants";
import { getTestId } from "../../tests/test-ids-utils";
import Text from "../Text/Text";
import styles from "./Tipseen.module.scss";
import { TooltipTheme } from "../Tooltip/TooltipConstants";
import { ButtonColor } from "../Button/ButtonConstants";
import { TypographyColor } from "../Typography/TypographyConstants";
import React from "react";
import { useWarnDeprecated } from "../../utils/warn-deprecated";

export interface TipseenProps extends VibeComponentProps {
  /**
   * Classname for overriding TipseenTitle styles
   */
  titleClassName?: string;
  position?: DialogPosition;
  animationType?: AnimationType;
  hideDelay?: number;
  showDelay?: number;
  title?: string;
  /**
   * @deprecated - use hideCloseButton instead
   */
  isCloseButtonHidden?: boolean;
  hideCloseButton?: boolean;
  children?: ReactElement;
  containerSelector?: string;
  hideTrigger?: HideShowEvent | Array<HideShowEvent>;
  showTrigger?: HideShowEvent | Array<HideShowEvent>;
  justify?: JustifyType;
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
   * Control the color of the Tipseen close button. Dark theme can be usfull while presenting bright images under the tipseen image
   */
  closeButtonTheme?: TipseenCloseButtonTheme;
  floating?: boolean;
  /** The color of the Tipseen */
  color?: TipseenColor;
}

export const TipseenContext = React.createContext<TipseenColor>(TipseenColor.PRIMARY);

const Tipseen: VibeComponent<TipseenProps> & {
  closeButtonThemes?: typeof TipseenCloseButtonTheme;
  positions?: typeof DialogPosition;
  animationTypes?: typeof AnimationType;
  justifyTypes?: typeof JustifyType;
  hideShowTriggers?: typeof HideShowEvent;
  colors?: typeof TipseenColor;
} = forwardRef(
  (
    {
      className,
      id,
      position = DialogPosition.BOTTOM,
      animationType = AnimationType.EXPAND,
      hideDelay = 0,
      showDelay = 0,
      title,
      titleClassName,
      hideCloseButton,
      // Backward compatability for hideCloseButton
      isCloseButtonHidden,
      closeButtonTheme = TipseenCloseButtonTheme.LIGHT,
      onClose,
      closeAriaLabel,
      children = null,
      content,
      justify = JustifyType.CENTER,
      containerSelector,
      hideTrigger = EMPTY_ARR,
      showTrigger = EMPTY_ARR,
      width,
      moveBy,
      hideWhenReferenceHidden = false,
      tip = true,
      tooltipArrowClassName,
      modifiers = EMPTY_ARR,
      floating = false,
      color: colorProp,
      "data-testid": dataTestId
    },
    ref
  ) => {
    useWarnDeprecated({
      component: "Tipseen",
      condition: colorProp === undefined,
      message:
        "The default `color` prop will be changed to 'Tipseen.colors.INVERTED' in the next major version. To keep current color, please use `color={Tipseen.colors.PRIMARY}`"
    });

    const color = colorProp ?? TipseenColor.PRIMARY;

    const defaultDelayOpen =
      Array.isArray(showTrigger) && Array.isArray(hideTrigger) && showTrigger.length === 0 && showDelay > 0;

    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);
    const [delayedOpen, setDelayOpen] = useState(!defaultDelayOpen);
    const overrideCloseAriaLabel = closeAriaLabel || TIPSEEN_CLOSE_BUTTON_ARIA_LABEL;
    const overrideHideCloseButton = backwardCompatibilityForProperties([hideCloseButton, isCloseButtonHidden], false);

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
      return color === TipseenColor.INVERTED ? TypographyColor.ON_INVERTED : TypographyColor.ON_PRIMARY;
    }, [color]);
    const closeButtonColor = useMemo(() => {
      if (closeButtonTheme === TipseenCloseButtonTheme.LIGHT) {
        return color === TipseenColor.INVERTED ? ButtonColor.ON_INVERTED_BACKGROUND : ButtonColor.ON_PRIMARY_COLOR;
      } else {
        return closeButtonTheme;
      }
    }, [color, closeButtonTheme]);

    const TipseenWrapper = ref || id ? "div" : Fragment;
    const tooltipContent = (
      <div>
        <div className={cx(styles.tipseenHeader)}>
          {overrideHideCloseButton ? null : (
            <IconButton
              hideTooltip
              className={cx(styles.tipseenCloseButton, {
                [styles.dark]:
                  closeButtonTheme === TipseenCloseButtonTheme.DARK ||
                  closeButtonTheme === TipseenCloseButtonTheme.FIXED_DARK
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
        <Text color={textColor} type={Text.types.TEXT2} element="p" className={cx(styles.tipseenContent)}>
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
          theme={color === TipseenColor.INVERTED ? TooltipTheme.Dark : TooltipTheme.Primary}
          justify={justify}
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
  closeButtonThemes: TipseenCloseButtonTheme,
  positions: DialogPosition,
  animationTypes: AnimationType,
  justifyTypes: JustifyType,
  hideShowTriggers: HideShowEvent,
  colors: TipseenColor
});
