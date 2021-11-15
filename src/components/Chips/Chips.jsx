import React, { useRef, forwardRef, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Icon from "../Icon/Icon";
import useMergeRefs from "../../hooks/useMergeRefs";
import CloseSmall from "../Icon/Icons/components/CloseSmall";
import { getCSSVar } from "../../services/themes";
import { NOOP } from "../../utils/function-utils";
import { elementColorsNames, getElementColor } from "../../general-stories/colors/colors-vars-map";
import "./Chips.scss";

const Chips = forwardRef(
  ({ className, id, label, leftIcon, rightIcon, disabled, readOnly, color, iconSize, onDelete }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const backgroundColorStyle = useMemo(() => {
      return { backgroundColor: disabled ? getCSSVar("disabled-background-color") : getElementColor(color, true) };
    }, [disabled, color]);

    const onDeleteCallback = useCallback(() => {
      if (onDelete) {
        onDelete(id);
      }
    }, [id, onDelete]);

    const hasCloseButton = !readOnly && !disabled;

    return (
      <div
        ref={mergedRef}
        className={cx("chips--wrapper", className, { disabled, "with-close": hasCloseButton })}
        id={id}
        style={backgroundColorStyle}
      >
        {leftIcon ? (
          <Icon
            className="chip-icon left"
            iconType={Icon.type.ICON_FONT}
            clickable={false}
            icon={leftIcon}
            iconSize={iconSize}
            ignoreFocusStyle
          />
        ) : null}
        <div className="label">{label}</div>
        {rightIcon ? (
          <Icon
            className="chip-icon right"
            iconType={Icon.type.ICON_FONT}
            clickable={false}
            icon={rightIcon}
            iconSize={iconSize}
            ignoreFocusStyle
          />
        ) : null}
        {hasCloseButton && (
          <Icon
            aria-label={`Remove ${label}`}
            className="chip-icon close"
            iconType={Icon.type.SVG}
            clickable
            icon={CloseSmall}
            iconSize={18}
            onClick={onDeleteCallback}
          />
        )}
      </div>
    );
  }
);

Chips.colors = elementColorsNames;

Chips.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  /** Icon to place on the right */
  rightIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** Icon to place on the left */
  leftIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  color: PropTypes.oneOf(Object.keys(Chips.colors)),
  /** size for font icon */
  iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onDelete: PropTypes.func
};
Chips.defaultProps = {
  className: "",
  id: "",
  label: "",
  disabled: false,
  readOnly: false,
  rightIcon: null,
  leftIcon: null,
  color: Chips.colors.PRIMARY,
  iconSize: 16,
  onDelete: NOOP
};

export default Chips;
