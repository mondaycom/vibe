import React, { useRef, forwardRef, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { useButton } from "@react-aria/button";
import cx from "classnames";
import Icon from "../Icon/Icon";
import useMergeRefs from "../../hooks/useMergeRefs";
import CloseSmall from "../Icon/Icons/components/CloseSmall";
import { getCSSVar } from "../../services/themes";
import { NOOP } from "../../utils/function-utils";
import {
  contentColorsByName,
  stateSelectedColors,
  getSelectedColor
} from "../../general-stories/colors/colors-vars-map";
import "./Chips.scss";

const Chips = forwardRef(
  ({ className, id, label, leftIcon, rightIcon, disabled, readOnly, color, iconSize, onDelete }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const backgroundColorStyle = useMemo(() => {
      return { backgroundColor: disabled ? getCSSVar("disabled-background-color") : getSelectedColor(color) };
    }, [disabled, color]);

    const onDeleteCallback = useCallback(() => {
      if (onDelete) {
        onDelete(id);
      }
    }, [id, onDelete]);

    const { buttonProps } = useButton({
      onPress: onDeleteCallback,
      elementType: "span"
    });

    return (
      <div
        ref={mergedRef}
        className={cx("chips--wrapper", className, { disabled })}
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
        {!readOnly && !disabled && (
          <Icon
            aria-label={`Remove ${label}`}
            className="chip-icon close"
            iconType={Icon.type.SVG}
            clickable
            icon={CloseSmall}
            iconSize={iconSize}
            onClick={onDeleteCallback}
          />
        )}
      </div>
    );
  }
);

Chips.colors = [...Object.keys(contentColorsByName), ...Object.keys(stateSelectedColors)].reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {});

Chips.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  /** Icon to place on the right */
  rightIcon: PropTypes.string,
  /** Icon to place on the left */
  leftIcon: PropTypes.string,
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
