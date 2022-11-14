import React, { forwardRef, useCallback, useMemo, useRef } from "react";
import cx from "classnames";
import Icon from "../Icon/Icon";
import useMergeRefs from "../../hooks/useMergeRefs";
import CloseSmall from "../Icon/Icons/components/CloseSmall";
import { getCSSVar } from "../../services/themes";
import { NOOP } from "../../utils/function-utils";
import { elementColorsNames, getElementColor } from "../../utils/colors-vars-map";
import Avatar from "../Avatar/Avatar";
import IconButton from "../IconButton/IconButton";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import { ChipsSize } from "./ChipsConstants";
import { AvatarType } from "../Avatar/AvatarConstants";
import { SubIcon, VibeComponent, VibeComponentProps } from "../../types";
import styles from "./Chips.module.scss";

interface ChipsProps extends VibeComponentProps {
  className?: string;
  id?: string;
  label?: string;
  disabled?: boolean;
  readOnly?: boolean;
  dataTestId?: string;
  /** Icon to place on the right */
  rightIcon?: SubIcon;
  /** Icon to place on the left */
  leftIcon?: SubIcon;
  /** Img to place as avatar on the right */
  rightAvatar?: string;
  /** Img to place as avatar on the left */
  leftAvatar?: string;
  // color?: Object.keys(Chips.colors),
  color?: keyof Record<string, string>;
  /** size for font icon */
  iconSize?: number | string;
  onDelete?: (id: string, event: React.MouseEvent<HTMLSpanElement>) => void;
  /**
   * Disables the Chips's entry animation
   */
  noAnimation?: boolean;
  /**
   * Allow user to select text
   */
  allowTextSelection?: boolean;
  /**
   * Callback function to be called when the user clicks the component.
   */
  onMouseDown?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Chips: VibeComponent<ChipsProps, HTMLElement> & {
  sizes?: typeof ChipsSize;
  colors?: typeof elementColorsNames;
} = forwardRef<HTMLElement, ChipsProps>(
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
      (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
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
            type={AvatarType.IMG}
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
            type={AvatarType.IMG}
            key={id}
          />
        ) : null}
        {hasCloseButton && (
          <IconButton
            size={ChipsSize.XXS}
            color={IconButton.colors.ON_PRIMARY_COLOR}
            className={cx(styles.icon, styles.close)}
            ariaLabel="Remove"
            hideTooltip
            icon={CloseSmall}
            onClick={onDeleteCallback}
            dataTestId={`${overrideDataTestId}-close`}
          />
        )}
      </div>
    );
  }
);

Object.assign(Chips, {
  sizes: ChipsSize,
  colors: elementColorsNames
});

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
  color: elementColorsNames.PRIMARY,
  iconSize: 16,
  onDelete: (_id: string, _e: React.MouseEvent<HTMLSpanElement>) => {},
  onMouseDown: NOOP,
  noAnimation: false,
  allowTextSelection: false
};

export default Chips;
