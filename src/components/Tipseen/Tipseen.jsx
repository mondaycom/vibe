import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import { DialogPositions } from "../../constants/sizes";
import Tooltip from "../Tooltip/Tooltip";
import { DIALOG_ANIMATION_TYPES } from "../../constants/AnimationTypes";
import Button from "../Button/Button";
import { BEMClass } from "../../helpers/bem-helper";
import Icon from "../Icon/Icon";
import CloseSmall from "../Icon/Icons/components/CloseSmall";
import "./Tipseen.scss";

/**
 *  hoverContent,
 justify,
 getContainer,
 moveBy,
 hideTrigger,
 showTrigger,
 animationType,
 shouldShowOnMount,
 theme,
 wrapperClassName,
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<{readonly title?: *, readonly isCloseButtonHidden?: *, readonly position?: *, readonly className?: *}> & React.RefAttributes<unknown>>}
 */

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
      children
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const overrideCloseAriaLabel = closeAriaLabel || "Close";

    return (
      <div ref={mergedRef} className={cx(`${TIPSEEN_BASE_CSS_CLASS}--wrapper`, className)} id={id}>
        <Tooltip position={position} animationType={animationType} hideDelay={hideDelay} showDelay={showDelay}>
          <div className={bemHelper({ element: "header" })}>
            <Button
              className={bemHelper({ element: "close-button" })}
              onClick={onClose}
              size={Button.sizes.SMALL}
              kind={Button.kinds.TERTIARY}
              ariaLabel={overrideCloseAriaLabel}
            >
              {isCloseButtonHidden ? null : <Icon clickable={false} icon={CloseSmall} iconSize={15} ignoreFocusStyle />}
            </Button>
            {title ? <span className={bemHelper("title")}>{title}</span> : null}
          </div>
          <div className={bemHelper({ element: "content" })}>{children}</div>
        </Tooltip>
      </div>
    );
  }
);

Tipseen.positions = DialogPositions;
Tipseen.animationTypes = DIALOG_ANIMATION_TYPES;
Tipseen.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  position: PropTypes.oneOf([
    Tipseen.positions.LEFT,
    Tipseen.positions.LEFT_START,
    Tipseen.positions.LEFT_END,
    Tipseen.positions.RIGHT,
    Tipseen.positions.RIGHT_START,
    Tipseen.positions.RIGHT_END,
    Tipseen.positions.TOP,
    Tipseen.positions.TOP_START,
    Tipseen.positions.TOP_END,
    Tipseen.positions.BOTTOM,
    Tipseen.positions.BOTTOM_START,
    Tipseen.positions.BOTTOM_END
  ]),
  animationType: PropTypes.oneOf([Tipseen.animationTypes.EXPAND, Tipseen.animationTypes.OPACITY_AND_SLIDE]),
  hideDelay: PropTypes.number,
  showDelay: PropTypes.number,
  title: PropTypes.string,
  isCloseButtonHidden: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
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
  children: null
};

export default Tipseen;
