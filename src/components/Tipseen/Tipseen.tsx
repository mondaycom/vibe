import { BasePosition } from "../../constants/positions";
import { forwardRef, Fragment, useMemo, useRef } from "react";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import Tooltip from "../../components/Tooltip/Tooltip";
import Button from "../../components/Button/Button";
import { BEMClass } from "../../helpers/bem-helper";
import Icon from "../../components/Icon/Icon";
import CloseSmall from "../../components/Icon/Icons/components/CloseSmall";
import { AnimationType, HideShowEvent, JustifyType } from "../../constants/dialog";
import TipseenTitle from "./TipseenTitle";
import { TIPSEEN_CLOSE_BUTTON_ARIA_LABEL } from "./TipseenConstants";
import { VibeComponent, VibeComponentProps } from "../../types";
import { MoveBy } from "../../types/MoveBy";
import { ElementContent } from "../../types/ElementContent";
import { Modifier } from "react-popper";
import styles from "./Tipseen.module.scss";

const TIPSEEN_BASE_CSS_CLASS = "monday-style-tipseen";
const bemHelper = BEMClass(TIPSEEN_BASE_CSS_CLASS);

interface TipseenProps extends VibeComponentProps {
  position?: typeof BasePosition[keyof typeof BasePosition];
  animationType?: AnimationType;
  hideDelay?: number;
  showDelay?: number;
  title?: string;
  isCloseButtonHidden?: boolean;
  children?: ElementContent;
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
  isCloseButtonOnImage?: boolean;
  onClose?: () => void;
  content?: ElementContent;
}

const Tipseen: VibeComponent<TipseenProps> & {
  positions?: typeof BasePosition;
  animationTypes?: AnimationType;
  justifyTypes?: JustifyType;
} = forwardRef(
  (
    {
      className,
      id,
      position = BasePosition.BOTTOM,
      animationType = AnimationType.EXPAND,
      hideDelay = 0,
      showDelay = 0,
      title,
      isCloseButtonHidden = false,
      onClose,
      closeAriaLabel,
      children = null,
      content,
      justify = JustifyType.CENTER,
      containerSelector,
      hideTrigger = [],
      isCloseButtonOnImage,
      showTrigger = [],
      width,
      moveBy,
      hideWhenReferenceHidden = false,
      tip = true,
      modifiers = []
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const overrideCloseAriaLabel = closeAriaLabel || TIPSEEN_CLOSE_BUTTON_ARIA_LABEL;
    const TipseenWrapper = ref || id ? "div" : Fragment;
    const tooltipContent = useMemo(
      () => (
        <div className={cx(TIPSEEN_BASE_CSS_CLASS)}>
          <div className={cx(styles.header, bemHelper({ element: "header" }))}>
            {isCloseButtonHidden ? null : (
              <Button
                className={cx(styles.closeButton, bemHelper({ element: "close-button" }), {
                  [styles.closeButtonOnImage]: isCloseButtonOnImage,
                  [bemHelper({ element: "close-button", state: "on-image" })]: isCloseButtonOnImage
                })}
                onClick={onClose}
                size={Button.sizes.SMALL}
                kind={Button.kinds.TERTIARY}
                color={isCloseButtonOnImage ? Button.colors.ON_INVERTED_BACKGROUND : Button.colors.ON_PRIMARY_COLOR}
                ariaLabel={overrideCloseAriaLabel}
              >
                <Icon clickable={false} icon={CloseSmall} iconSize={20} ignoreFocusStyle />
              </Button>
            )}
            <TipseenTitle text={title} className={cx(styles.title, bemHelper({ element: "title" }))} />
          </div>
          <div className={cx(styles.content, bemHelper({ element: "content" }))}>{content}</div>
        </div>
      ),
      [content, isCloseButtonHidden, isCloseButtonOnImage, onClose, overrideCloseAriaLabel, title]
    );

    return (
      <TipseenWrapper ref={mergedRef} id={id}>
        <Tooltip
          className={cx(styles.wrapper, `${TIPSEEN_BASE_CSS_CLASS}-wrapper`, className, {
            [styles.wrapperWithoutCustomWidth]: !width,
            [`${TIPSEEN_BASE_CSS_CLASS}-wrapper--without-custom-width`]: !width
          })}
          style={width ? { width } : undefined}
          shouldShowOnMount
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
        >
          {children}
        </Tooltip>
      </TipseenWrapper>
    );
  }
);

Object.assign(Tipseen, {
  positions: BasePosition,
  animationTypes: AnimationType,
  justifyTypes: JustifyType
});

export default Tipseen;
