import React, { forwardRef, useCallback, useMemo, useRef, useState } from "react";
import cx from "classnames";
import { Icon } from "@vibe/icon";
import useMergeRef from "../../hooks/useMergeRef";
import { CloseSmall } from "@vibe/icons";
import { getCSSVar } from "../../services/themes";
import { ElementAllowedColor as ElementAllowedColorEnum } from "../../utils/colors-vars-map";
import { type ElementAllowedColor, getElementColor } from "../../types/Colors";
import Avatar from "../Avatar/Avatar";
import { IconButton } from "@vibe/icon-button";
import { Text } from "@vibe/typography";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { AvatarType as AvatarTypeEnum } from "../Avatar/AvatarConstants";
import { type AvatarType } from "../Avatar";
import { type ElementContent, type VibeComponentProps, withStaticProps } from "../../types";
import { type SubIcon } from "@vibe/icon";
import useSetFocus from "../../hooks/useSetFocus";
import { useClickableProps } from "@vibe/clickable";
import styles from "./Chips.module.scss";
import { ComponentVibeId } from "../../tests/constants";

const CHIPS_AVATAR_SIZE = 18;

export interface ChipsProps extends VibeComponentProps {
  /**
   * The text or content displayed inside the chip.
   */
  label?: ElementContent;
  /**
   * If true, the chip is disabled.
   */
  disabled?: boolean;
  /**
   * If true, the chip is read-only and cannot be deleted.
   */
  readOnly?: boolean;
  /**
   * A React element displayed on the right side.
   */
  rightRenderer?: ElementContent;
  /**
   * A React element displayed on the left side.
   */
  leftRenderer?: ElementContent;
  /**
   * Icon displayed on the right side.
   */
  rightIcon?: SubIcon;
  /**
   * Icon displayed on the left side.
   */
  leftIcon?: SubIcon;
  /**
   * Image URL or text for an avatar displayed on the right.
   */
  rightAvatar?: string;
  /**
   * The type of avatar displayed on the right.
   */
  rightAvatarType?: AvatarType;
  /**
   * Image URL or text for an avatar displayed on the left.
   */
  leftAvatar?: string;
  /**
   * The type of avatar displayed on the left.
   */
  leftAvatarType?: AvatarType;
  /**
   * Class name applied to left or right icons.
   */
  iconClassName?: string;
  /**
   * Class name applied to left or right avatars.
   */
  avatarClassName?: string;
  /**
   * The background color of the chip.
   */
  color?: Exclude<ElementAllowedColor, "dark_indigo" | "blackish">;
  /**
   * The size of the icons inside the chip.
   */
  iconSize?: number | string;
  /**
   * Callback fired when the chip is deleted.
   */
  onDelete?: (id: string, event: React.MouseEvent<HTMLSpanElement>) => void;
  /**
   * If true, disables the chip's entry animation.
   */
  noAnimation?: boolean;
  /**
   * If true, allows the user to select text inside the chip.
   */
  allowTextSelection?: boolean;
  /**
   * Callback fired when the mouse button is pressed on the chip.
   */
  onMouseDown?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /**
   * Callback fired when the chip is clicked.
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /**
   * The label of the chip for accessibility.
   */
  ariaLabel?: string;
  /**
   * If true, indicates that the chip has a popup.
   */
  ariaHasPopup?: boolean;
  /**
   * If true, disables all click behaviors.
   */
  disableClickableBehavior?: boolean;
  /**
   * If true, displays a border around the chip.
   */
  showBorder?: boolean;
  /**
   * The label for the close button.
   */
  closeButtonAriaLabel?: string;
  /**
   * If true, removes the default margin from the chip.
   */
  noMargin?: boolean;
}

const Chips = forwardRef(
  (
    {
      className,
      avatarClassName,
      iconClassName,
      id,
      label = "",
      leftIcon = null,
      rightIcon = null,
      leftAvatar = null,
      rightAvatar = null,
      disabled = false,
      readOnly = false,
      allowTextSelection = false,
      color = "primary",
      iconSize = 18,
      onDelete = (_id: string, _e: React.MouseEvent<HTMLSpanElement>) => {},
      onMouseDown,
      onClick,
      noAnimation = true,
      ariaLabel,
      ariaHasPopup = false,
      "data-testid": dataTestId,
      disableClickableBehavior = false,
      leftAvatarType = "img",
      rightAvatarType = "img",
      showBorder = false,
      leftRenderer,
      rightRenderer,
      closeButtonAriaLabel = "Remove",
      noMargin = false
    }: ChipsProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const componentDataTestId = dataTestId || getTestId(ComponentDefaultTestId.CHIP, id);
    const hasClickableWrapper = (!!onClick || !!onMouseDown) && !disableClickableBehavior;
    const hasCloseButton = !readOnly && !disabled;
    const overrideAriaLabel = ariaLabel || (typeof label === "string" && label) || "";

    const iconButtonRef = useRef(null);
    const componentRef = useRef(null);

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = useCallback(() => setIsHovered(true), []);
    const handleMouseLeave = useCallback(() => setIsHovered(false), []);
    const { isFocused } = useSetFocus({ ref: componentRef });

    const mergedRef = useMergeRef<HTMLDivElement>(ref, componentRef);

    const overrideClassName = cx(styles.chips, className, {
      [styles.disabled]: disabled,
      [styles.noAnimation]: noAnimation,
      [styles.withUserSelect]: allowTextSelection,
      [styles.border]: showBorder,
      [styles.noMargin]: noMargin
    });
    const clickableClassName = cx(styles.clickable, overrideClassName, {
      [styles.disabled]: disabled,
      [styles.disableTextSelection]: !allowTextSelection
    });

    const backgroundColorStyle = useMemo(() => {
      let cssVar;
      if (disabled) {
        cssVar = getCSSVar("disabled-background-color");
      } else if (hasClickableWrapper && (isHovered || isFocused)) {
        cssVar = getElementColor(color, true, true);
      } else {
        cssVar = getElementColor(color, true);
      }
      return { backgroundColor: cssVar };
    }, [disabled, hasClickableWrapper, isHovered, isFocused, color]);

    const onDeleteCallback = useCallback(
      (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.stopPropagation();
        if (onDelete) {
          onDelete(id, e);
        }
      },
      [id, onDelete]
    );

    const onClickCallback = useCallback(
      (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (onClick !== undefined && (e.target as HTMLElement) !== iconButtonRef.current) {
          e.preventDefault();
          onClick(e);
        }
      },
      [onClick]
    );

    const clickableProps = useClickableProps(
      {
        onClick: onClickCallback,
        onMouseDown,
        disabled,
        id,
        "data-testid": componentDataTestId,
        ariaLabel: overrideAriaLabel,
        ariaHidden: false,
        ariaHasPopup,
        ariaExpanded: false
      },
      mergedRef
    );
    const wrapperProps = hasClickableWrapper
      ? {
          ...clickableProps,
          ref: mergedRef,
          className: clickableClassName,
          style: backgroundColorStyle,
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave
        }
      : {
          className: overrideClassName,
          "aria-label": overrideAriaLabel,
          style: backgroundColorStyle,
          ref: mergedRef,
          onClick: onClickCallback,
          onMouseDown,
          id: id,
          "data-testid": componentDataTestId,
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave
        };

    const leftAvatarProps = leftAvatarType === "text" ? { text: leftAvatar } : { src: leftAvatar };
    const rightAvatarProps = leftAvatarType === "text" ? { text: rightAvatar } : { src: rightAvatar };

    return (
      <div {...wrapperProps} data-vibe={ComponentVibeId.CHIPS}>
        {leftAvatar ? (
          <Avatar
            withoutBorder
            className={cx(styles.avatar, styles.left, avatarClassName)}
            customSize={CHIPS_AVATAR_SIZE}
            type={leftAvatarType}
            key={id}
            {...leftAvatarProps}
          />
        ) : null}
        {leftIcon ? (
          <Icon
            className={cx(styles.icon, styles.left, iconClassName)}
            iconType="font"
            icon={leftIcon}
            iconSize={iconSize}
            ignoreFocusStyle
          />
        ) : null}
        {leftRenderer && <div className={cx(styles.customRenderer, styles.left)}>{leftRenderer}</div>}
        <Text type="text2" className={styles.label}>
          {label}
        </Text>
        {rightIcon ? (
          <Icon
            className={cx(styles.icon, styles.right, iconClassName)}
            iconType="font"
            icon={rightIcon}
            iconSize={iconSize}
            ignoreFocusStyle
          />
        ) : null}
        {rightAvatar ? (
          <Avatar
            withoutBorder
            className={cx(styles.avatar, styles.right, avatarClassName)}
            customSize={CHIPS_AVATAR_SIZE}
            type={rightAvatarType}
            key={id}
            {...rightAvatarProps}
          />
        ) : null}
        {rightRenderer && <div className={cx(styles.customRenderer, styles.right)}>{rightRenderer}</div>}
        {hasCloseButton && (
          <IconButton
            size="xxs"
            color="on-primary-color"
            className={cx(styles.icon, styles.close)}
            ariaLabel={closeButtonAriaLabel}
            hideTooltip
            icon={CloseSmall}
            onClick={onDeleteCallback}
            data-testid={`${componentDataTestId}-close`}
            ref={iconButtonRef}
          />
        )}
      </div>
    );
  }
);

interface ChipsStaticProps {
  colors: typeof ElementAllowedColorEnum;
  avatarTypes: typeof AvatarTypeEnum;
}

export default withStaticProps<ChipsProps, ChipsStaticProps>(Chips, {
  colors: ElementAllowedColorEnum,
  avatarTypes: AvatarTypeEnum
});
