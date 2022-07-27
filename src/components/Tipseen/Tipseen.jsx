import { DialogPositions } from "../../constants/sizes";
import { DIALOG_ANIMATION_TYPES } from "../../constants/AnimationTypes";
import { useRef, forwardRef, useMemo, Fragment } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import Tooltip from "../../components/Tooltip/Tooltip";
import Button from "../../components/Button/Button";
import { BEMClass } from "../../helpers/bem-helper";
import Icon from "../../components/Icon/Icon";
import CloseSmall from "../../components/Icon/Icons/components/CloseSmall";
import { TOOLTIP_JUSTIFY_TYPES } from "../../components/Tooltip/TooltipConstants";
import TipseenTitle from "./TipseenTitle";
import { TIPSEEN_CLOSE_BUTTON_ARIA_LABEL } from "./TipseenConstants";
import styles from "./Tipseen.module.scss";

const TIPSEEN_BASE_CSS_CLASS = "monday-style-tipseen";
const bemHelper = BEMClass(TIPSEEN_BASE_CSS_CLASS);

const Tipseen = forwardRef(
  (
    {
      className,
      id,
      position,
      animationType,
      hideDelay,
      showDelay,
      title,
      isCloseButtonHidden,
      onClose,
      closeAriaLabel,
      children,
      content,
      justify,
      containerSelector,
      hideTrigger,
      isCloseButtonOnImage,
      showTrigger,
      width,
      moveBy,
      hideWhenReferenceHidden,
      modifiers
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const overrideCloseAriaLabel = closeAriaLabel || TIPSEEN_CLOSE_BUTTON_ARIA_LABEL;
    const TipseenWrapper = ref || id ? "div" : Fragment;
    const tooltipContent = useMemo(
      () => (
        <div className={cx(styles.tipseen, TIPSEEN_BASE_CSS_CLASS)}>
          <div className={cx(styles.tipseenHeader, bemHelper({ element: "header" }))}>
            {isCloseButtonHidden ? null : (
              <Button
                className={cx(styles.tipseenCloseButton, bemHelper({ element: "close-button" }), {
                  [styles.tipseenCloseButtonOnImage]: isCloseButtonOnImage,
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
            <TipseenTitle text={title} className={cx(styles.tipseenTitle, bemHelper({ element: "title" }))} />
          </div>
          <div className={cx(styles.tipseenContent, bemHelper({ element: "content" }))}>{content}</div>
        </div>
      ),
      [content, isCloseButtonHidden, isCloseButtonOnImage, onClose, overrideCloseAriaLabel, title]
    );

    return (
      <TipseenWrapper ref={mergedRef} id={id}>
        <Tooltip
          className={cx(styles.tipseenWrapper, `${TIPSEEN_BASE_CSS_CLASS}-wrapper`, className, {
            [styles.tipseenWrapperWithoutCustomWidth]: !width,
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
          modifiers={modifiers}
        >
          {children}
        </Tooltip>
      </TipseenWrapper>
    );
  }
);

Tipseen.positions = {
  LEFT: DialogPositions.LEFT,
  RIGHT: DialogPositions.RIGHT,
  TOP: DialogPositions.TOP,
  BOTTOM: DialogPositions.BOTTOM
};
Tipseen.animationTypes = DIALOG_ANIMATION_TYPES;
Tipseen.justifyTypes = TOOLTIP_JUSTIFY_TYPES;
Tipseen.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  position: PropTypes.oneOf([
    Tipseen.positions.LEFT,
    Tipseen.positions.RIGHT,
    Tipseen.positions.TOP,
    Tipseen.positions.BOTTOM
  ]),
  animationType: PropTypes.oneOf([Tipseen.animationTypes.EXPAND, Tipseen.animationTypes.OPACITY_AND_SLIDE]),
  hideDelay: PropTypes.number,
  showDelay: PropTypes.number,
  title: PropTypes.string,
  isCloseButtonHidden: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  containerSelector: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  hideTrigger: PropTypes.array,
  // eslint-disable-next-line react/no-unused-prop-types
  showTrigger: PropTypes.array,
  justify: PropTypes.oneOf([Tipseen.justifyTypes.START, Tipseen.justifyTypes.CENTER, Tipseen.justifyTypes.END]),
  width: PropTypes.number,
  moveBy: PropTypes.shape({
    main: PropTypes.number,
    secondary: PropTypes.number
  }),
  hideWhenReferenceHidden: PropTypes.bool,
  /**
   * PopperJS Modifiers type
   * https://popper.js.org/docs/v2/modifiers/
   */
  modifiers: PropTypes.array
};

Tipseen.defaultProps = {
  className: "",
  id: "",
  position: Tipseen.positions.BOTTOM,
  animationType: Tipseen.animationTypes.EXPAND,
  hideDelay: 0,
  showDelay: 0,
  title: undefined,
  isCloseButtonHidden: false,
  children: null,
  containerSelector: undefined,
  hideTrigger: [],
  showTrigger: [],
  justify: Tipseen.justifyTypes.CENTER,
  width: undefined,
  moveBy: undefined,
  hideWhenReferenceHidden: false,
  modifiers: []
};

export default Tipseen;
