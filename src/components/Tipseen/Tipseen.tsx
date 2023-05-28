import { forwardRef, Fragment, ReactElement, useEffect, useMemo, useRef, useState } from "react";
import { DialogPosition } from "../../constants";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import Tooltip from "../../components/Tooltip/Tooltip";
import Button from "../../components/Button/Button";
import { BEMClass } from "../../helpers/bem-helper";
import IconButton from "../../components/IconButton/IconButton";
import CloseSmall from "../../components/Icon/Icons/components/CloseSmall";
import { AnimationType, EMPTY_ARR, HideShowEvent, JustifyType } from "../../constants";
import TipseenTitle from "./TipseenTitle";
import { TIPSEEN_CLOSE_BUTTON_ARIA_LABEL, TipseenCloseButtonTheme } from "./TipseenConstants";
import { VibeComponent, VibeComponentProps } from "../../types";
import { MoveBy } from "../../types/MoveBy";
import { ElementContent } from "../../types";
import { Modifier } from "react-popper";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import styles from "./Tipseen.module.scss";

const TIPSEEN_BASE_CSS_CLASS = "monday-style-tipseen";
const bemHelper = BEMClass(TIPSEEN_BASE_CSS_CLASS);

interface TipseenProps extends VibeComponentProps {
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
   * Backward compatability for hideCloseButton prop
   */
  isCloseButtonHidden?: boolean;
  hideCloseButton?: boolean;
  // Better be required, but it might be a breaking change
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
  modifiers?: Array<Modifier<any>>;
  closeAriaLabel?: string;
  onClose?: () => void;
  // Better be required, but it might be a breaking change
  content?: ElementContent;
  /**
   * Control the color of the Tipseen close button. Dark theme can be usfull while presenting bright images under the tipseen image
   */
  closeButtonTheme?: TipseenCloseButtonTheme;
}

const Tipseen: VibeComponent<TipseenProps> & {
  closeButtonThemes?: typeof TipseenCloseButtonTheme;
  positions?: typeof DialogPosition;
  animationTypes?: AnimationType;
  justifyTypes?: JustifyType;
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
      modifiers = EMPTY_ARR
    },
    ref
  ) => {
    const defaultDelayOpen =
      Array.isArray(showTrigger) && Array.isArray(hideTrigger) && showTrigger.length === 0 && showDelay > 0;

    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
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

    const TipseenWrapper = ref || id ? "div" : Fragment;
    const tooltipContent = useMemo(
      () => (
        <div className={cx(TIPSEEN_BASE_CSS_CLASS)}>
          <div className={cx(styles.tipseenHeader, bemHelper({ element: "header" }))}>
            {overrideHideCloseButton ? null : (
              <IconButton
                hideTooltip
                className={cx(styles.tipseenCloseButton, bemHelper({ element: "close-button" }), {
                  [styles.dark]: closeButtonTheme === TipseenCloseButtonTheme.DARK
                })}
                onClick={onClose}
                size={Button.sizes.XS}
                kind={Button.kinds.TERTIARY}
                color={Button.colors.ON_INVERTED_BACKGROUND}
                ariaLabel={overrideCloseAriaLabel}
                icon={CloseSmall}
              />
            )}
            <TipseenTitle
              text={title}
              className={cx(styles.tipseenTitle, bemHelper({ element: "title" }), titleClassName)}
            />
          </div>
          <div className={cx(styles.tipseenContent, bemHelper({ element: "content" }))}>{content}</div>
        </div>
      ),
      [content, onClose, overrideCloseAriaLabel, overrideHideCloseButton, title, titleClassName]
    );

    return (
      <TipseenWrapper ref={mergedRef} id={id}>
        <Tooltip
          className={cx(styles.tipseenWrapper, `${TIPSEEN_BASE_CSS_CLASS}-wrapper`, className, {
            [styles.tipseenWrapperWithoutCustomWidth]: !width,
            [`${TIPSEEN_BASE_CSS_CLASS}-wrapper--without-custom-width`]: !width
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
          theme={Tooltip.themes.Primary}
          justify={justify}
          containerSelector={containerSelector}
          disableDialogSlide={false}
          moveBy={moveBy}
          hideWhenReferenceHidden={hideWhenReferenceHidden}
          tip={tip}
          modifiers={modifiers}
          open={defaultDelayOpen ? delayedOpen : undefined}
        >
          {children}
        </Tooltip>
      </TipseenWrapper>
    );
  }
);

Object.assign(Tipseen, {
  closeButtonThemes: TipseenCloseButtonTheme,
  positions: DialogPosition,
  animationTypes: AnimationType,
  justifyTypes: JustifyType
});

export default Tipseen;
