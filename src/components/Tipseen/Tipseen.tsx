import { forwardRef, Fragment, ReactElement, useEffect, useMemo, useRef, useState } from "react";
import { DialogPosition } from "../../constants/positions";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import Tooltip from "../../components/Tooltip/Tooltip";
import Button from "../../components/Button/Button";
import { BEMClass } from "../../helpers/bem-helper";
import Icon from "../../components/Icon/Icon";
import CloseSmall from "../../components/Icon/Icons/components/CloseSmall";
import { AnimationType, EMPTY_ARR, HideShowEvent, JustifyType } from "../../constants";
import TipseenTitle from "./TipseenTitle";
import { TIPSEEN_CLOSE_BUTTON_ARIA_LABEL } from "./TipseenConstants";
import { VibeComponent, VibeComponentProps } from "../../types";
import { MoveBy } from "../../types/MoveBy";
import { ElementContent } from "../../types/ElementContent";
import { Modifier } from "react-popper";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import styles from "./Tipseen.module.scss";

const TIPSEEN_BASE_CSS_CLASS = "monday-style-tipseen";
const bemHelper = BEMClass(TIPSEEN_BASE_CSS_CLASS);

interface TipseenProps extends VibeComponentProps {
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
  /**
   * PopperJS Modifiers type
   * https://popper.js.org/docs/v2/modifiers/
   */
  modifiers?: Array<Modifier<any>>;
  closeAriaLabel?: string;
  /**
   * Backward compatability for isCloseButtonOnImage prop
   */
  isCloseButtonOnImage?: boolean;
  closeButtonOnImage?: boolean;
  onClose?: () => void;
  // Better be required, but it might be a breaking change
  content?: ElementContent;
}

const Tipseen: VibeComponent<TipseenProps> & {
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
      hideCloseButton,
      // Backward compatability for hideCloseButton
      isCloseButtonHidden,
      onClose,
      closeAriaLabel,
      children = null,
      content,
      justify = JustifyType.CENTER,
      containerSelector,
      hideTrigger = EMPTY_ARR,
      closeButtonOnImage,
      // Backward compatability for closeButtonOnImage
      isCloseButtonOnImage,
      showTrigger = EMPTY_ARR,
      width,
      moveBy,
      hideWhenReferenceHidden = false,
      tip = true,
      modifiers = EMPTY_ARR
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const [delayedOpen, setDelayOpen] = useState(!showDelay);
    const overrideCloseAriaLabel = closeAriaLabel || TIPSEEN_CLOSE_BUTTON_ARIA_LABEL;
    const overrideCloseButtonOnImage = backwardCompatibilityForProperties([closeButtonOnImage, isCloseButtonOnImage]);
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
              <Button
                className={cx(styles.tipseenCloseButton, bemHelper({ element: "close-button" }), {
                  [styles.tipseenCloseButtonOnImage]: overrideCloseButtonOnImage,
                  [bemHelper({ element: "close-button", state: "on-image" })]: overrideCloseButtonOnImage
                })}
                onClick={onClose}
                size={Button.sizes.SMALL}
                kind={Button.kinds.TERTIARY}
                color={
                  overrideCloseButtonOnImage ? Button.colors.ON_INVERTED_BACKGROUND : Button.colors.ON_PRIMARY_COLOR
                }
                ariaLabel={overrideCloseAriaLabel}
              >
                <Icon clickable={false} icon={CloseSmall} iconSize={20} ignoreFocusStyle />
              </Button>
            )}
            <TipseenTitle text={title} className={cx(styles.tipseenTitle, bemHelper({ element: "title" }))} />
          </div>
          <div className={cx(styles.tipseenContent, bemHelper({ element: "content" }))}>{content}</div>
        </div>
      ),
      [content, onClose, overrideCloseAriaLabel, overrideCloseButtonOnImage, overrideHideCloseButton, title]
    );

    return (
      <TipseenWrapper ref={mergedRef} id={id}>
        <Tooltip
          className={cx(styles.tipseenWrapper, `${TIPSEEN_BASE_CSS_CLASS}-wrapper`, className, {
            [styles.tipseenWrapperWithoutCustomWidth]: !width,
            [`${TIPSEEN_BASE_CSS_CLASS}-wrapper--without-custom-width`]: !width
          })}
          style={width ? { width } : undefined}
          shouldShowOnMount={!showDelay}
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
          open={delayedOpen}
        >
          {children}
        </Tooltip>
      </TipseenWrapper>
    );
  }
);

Object.assign(Tipseen, {
  positions: DialogPosition,
  animationTypes: AnimationType,
  justifyTypes: JustifyType
});

export default Tipseen;
