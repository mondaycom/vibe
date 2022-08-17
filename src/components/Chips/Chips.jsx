import React, { forwardRef, useCallback, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Icon from "../Icon/Icon";
import useMergeRefs from "../../hooks/useMergeRefs";
import CloseSmall from "../Icon/Icons/components/CloseSmall";
import { getCSSVar } from "../../services/themes";
import { NOOP } from "../../utils/function-utils";
import { elementColorsNames, getElementColor } from "../../utils/colors-vars-map";
import Avatar from "../Avatar/Avatar";
import IconButton from "../../components/IconButton/IconButton";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import styles from "./Chips.module.scss";

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
      dataTestId
    },
    ref
  ) => {
    const overrideDataTestId = dataTestId || getTestId(ELEMENT_TYPES.CHIP, id);
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
        className={cx(styles.chips, "chips--wrapper", className, {
          disabled,
          [styles.withClose]: hasCloseButton,
          [styles.noAnimation]: noAnimation,
          [styles.withUserSelect]: allowTextSelection
        })}
        id={id}
        style={backgroundColorStyle}
        onMouseDown={onMouseDown}
        data-testid={overrideDataTestId}
      >
        {leftAvatar ? (
          <Avatar
            withoutBorder
            className={cx(styles.avatar, styles.left)}
            customSize={16}
            src={leftAvatar}
            type={Avatar.types.IMG}
            key={id}
          />
        ) : null}
        {leftIcon ? (
          <Icon
            className={cx(styles.icon, styles.left)}
            iconType={Icon.type.ICON_FONT}
            clickable={false}
            icon={leftIcon}
            iconSize={iconSize}
            ignoreFocusStyle
          />
        ) : null}
        <div className={styles.label}>{label}</div>
        {rightIcon ? (
          <Icon
            className={cx(styles.icon, styles.right)}
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
            className={cx(styles.avatar, styles.right)}
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
            className={cx(styles.icon, styles.close)}
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
  dataTestId: PropTypes.string,
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
  dataTestId: undefined,
  readOnly: false,
  rightIcon: null,
  leftIcon: null,
  leftAvatar: null,
  rightAvatar: null,
  color: Chips.colors.PRIMARY,
  iconSize: 16,
  onDelete: (_id, _e) => {},
  onMouseDown: NOOP,
  noAnimation: false,
  allowTextSelection: false
};

export default Chips;
