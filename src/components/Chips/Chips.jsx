import React, { useRef, forwardRef, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Icon from "../Icon/Icon";
import useMergeRefs from "../../hooks/useMergeRefs";
import CloseSmall from "../Icon/Icons/components/CloseSmall";
import { getCSSVar } from "../../services/themes";
import { NOOP } from "../../utils/function-utils";
import { elementColorsNames, getElementColor } from "../../utils/colors-vars-map";
import "./Chips.scss";
import Avatar from "../Avatar/Avatar";
import { IconButton } from "components";
import { backwardCompatibilityForProperties } from "helpers/backwardCompatibilityForProperties";
import { ELEMENT_TYPES } from "utils/test-utils";

const Chips = forwardRef(
  (
    {
      className,
      id,
      label,
      leftIcon,
      rightIcon,
      leftAvatar,
      rightAvatar,
      disabled,
      readOnly,
      allowTextSelection,
      color,
      iconSize,
      onDelete,
      onMouseDown,
      noAnimation,
      dataTestId,
      "data-testid": deprecatedDataTestId
    },
    ref
  ) => {
    const overrideDataTestId = backwardCompatibilityForProperties(
      [dataTestId, deprecatedDataTestId],
      ELEMENT_TYPES.CHIP
    );

    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const backgroundColorStyle = useMemo(() => {
      return { backgroundColor: disabled ? getCSSVar("disabled-background-color") : getElementColor(color, true) };
    }, [disabled, color]);

    const onDeleteCallback = useCallback(
      e => {
        if (onDelete) {
          onDelete(id, e);
        }
      },
      [id, onDelete]
    );

    const hasCloseButton = !readOnly && !disabled;

    return (
      <div
        ref={mergedRef}
        className={cx("chips--wrapper", className, {
          disabled,
          "with-close": hasCloseButton,
          "no-animation": noAnimation,
          "with-user-select": allowTextSelection
        })}
        id={id}
        style={backgroundColorStyle}
        onMouseDown={onMouseDown}
        data-testid={overrideDataTestId}
      >
        {leftAvatar ? (
          <Avatar
            withoutBorder
            className="chip-avatar left"
            customSize={16}
            src={leftAvatar}
            type={Avatar.types.IMG}
            key={id}
          />
        ) : null}
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
        {rightAvatar ? (
          <Avatar
            withoutBorder
            className="chip-avatar right"
            customSize={16}
            src={rightAvatar}
            type={Avatar.types.IMG}
            key={id}
          />
        ) : null}
        {hasCloseButton && (
          <IconButton
            size={IconButton.sizes.XXS}
            color={IconButton.colors.ON_PRIMARY_COLOR}
            className="chip-icon close"
            aria-label={`Remove ${label}`}
            icon={CloseSmall}
            iconSize={18}
            onClick={onDeleteCallback}
            dataTestId={`${overrideDataTestId}-close`}
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
  /** Img to place as avatar on the right */
  rightAvatar: PropTypes.string,
  /** Img to place as avatar on the left */
  leftAvatar: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(Chips.colors)),
  /** size for font icon */
  iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onDelete: PropTypes.func,
  /**
   * Disables the Chips's entry animation
   */
  noAnimation: PropTypes.bool,
  /**
   * Allow user to select text
   */
  allowTextSelection: PropTypes.bool,
  /**
   * Callback function to be called when the user clicks the component.
   */
  onMouseDown: PropTypes.func
};
Chips.defaultProps = {
  className: "",
  id: "",
  label: "",
  disabled: false,
  readOnly: false,
  rightIcon: null,
  leftIcon: null,
  leftAvatar: null,
  rightAvatar: null,
  color: Chips.colors.PRIMARY,
  iconSize: 16,
  onDelete: NOOP,
  onMouseDown: NOOP,
  noAnimation: false,
  allowTextSelection: false
};

export default Chips;
