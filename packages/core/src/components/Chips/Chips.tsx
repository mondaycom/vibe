import React, { forwardRef, useCallback, useLayoutEffect, useMemo, useRef } from "react";
import { camelCase } from "es-toolkit";
import cx from "classnames";
import { Icon } from "@vibe/icon";
import useMergeRef from "../../hooks/useMergeRef";
import { CloseSmall } from "@vibe/icons";
import { ElementAllowedColor as ElementAllowedColorEnum } from "../../utils/colors-vars-map";
import { type ElementAllowedColor, getElementColor, isSemanticElementColor } from "../../types/Colors";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import Avatar from "../Avatar/Avatar";
import { IconButton } from "@vibe/icon-button";
import { Text } from "@vibe/typography";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { AvatarType as AvatarTypeEnum } from "../Avatar/AvatarConstants";
import { type AvatarType } from "../Avatar";
import { type ElementContent, type VibeComponentProps, withStaticProps } from "../../types";
import { type SubIcon } from "@vibe/icon";
import { useClickableProps } from "@vibe/clickable";
import styles from "./Chips.module.scss";
import { ComponentVibeId } from "../../tests/constants";
import { type ChipsVariant, type ChipsSize } from "./Chips.types";

const CHIPS_AVATAR_SIZE = 18;
const CHIPS_AVATAR_SIZE_SMALL = 14;

export interface ChipsProps extends VibeComponentProps {
  /**
   * The text or content displayed inside the chip.
   */
  label?: ElementContent;
  /**
   * Visual and behavioral variant of the chip.
   * - `default` — standard chip (colors, optional remove / click)
   * - `readOnly` — display only; no interaction
   * - `filterable` — primary theme only; default / hover / pressed states
   */
  variant?: ChipsVariant;
  /**
   * If true, the chip is disabled.
   */
  disabled?: boolean;
  /**
   * If true, the chip is read-only and cannot be deleted or interacted with.
   * Prefer `variant="readOnly"` for new usage.
   */
  readOnly?: boolean;
  /**
   * When `variant="filterable"`, shows the pressed (selected) state.
   */
  pressed?: boolean;
  /**
   * The size of the chip.
   * - `medium` — default (24px height)
   * - `small` — 20px height, 12px text
   */
  size?: ChipsSize;
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
   * Ignored when `variant="filterable"` (always primary).
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
      variant = "default",
      readOnly = false,
      pressed = false,
      size = "medium",
      allowTextSelection = false,
      color = "primary",
      iconSize,
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
    const isFilterable = variant === "filterable";
    const isReadOnly = !isFilterable && (readOnly || variant === "readOnly");
    const isSmall = size === "small";
    const resolvedColor = isFilterable ? "primary" : color;
    const overrideAriaLabel = ariaLabel || (typeof label === "string" && label) || "";
    const resolvedIconSize = iconSize ?? (isSmall ? 14 : 18);
    const resolvedAvatarSize = isSmall ? CHIPS_AVATAR_SIZE_SMALL : CHIPS_AVATAR_SIZE;

    const hasCloseButton = !isReadOnly && !disabled && !isFilterable;
    const hasClickableWrapper =
      !isReadOnly && ((!disableClickableBehavior && (!!onClick || !!onMouseDown)) || isFilterable);

    const iconButtonRef = useRef(null);
    const componentRef = useRef(null);

    const mergedRef = useMergeRef<HTMLDivElement>(ref, componentRef);

    // Lock resting width (close is absolutely positioned) so hover padding truncates label instead of growing the chip
    useLayoutEffect(() => {
      if (!hasCloseButton || !componentRef.current) return;
      const el = componentRef.current;
      el.style.width = "";
      el.style.width = `${el.getBoundingClientRect().width}px`;
    }, [hasCloseButton, label, size, leftIcon, rightIcon, leftAvatar, rightAvatar, leftRenderer, rightRenderer]);

    const hasLeftIcon = Boolean(leftIcon || leftAvatar || leftRenderer);
    const hasRightIcon = Boolean(rightIcon || rightAvatar || rightRenderer);

    // Semantic colors are styled by class (same `color-*` pattern as Label), so the fill
    // lives in CSS and consumers can override it without !important. `filterable` owns its
    // own fill, so it opts out.
    const semanticColorClassName =
      !isFilterable && isSemanticElementColor(resolvedColor)
        ? getStyle(styles, camelCase("color-" + resolvedColor))
        : undefined;

    const overrideClassName = cx(styles.chips, className, semanticColorClassName, {
      [styles.disabled]: disabled,
      [styles.noAnimation]: noAnimation,
      [styles.withUserSelect]: allowTextSelection,
      [styles.border]: showBorder,
      [styles.noMargin]: noMargin,
      [styles.small]: isSmall,
      [styles.readOnly]: isReadOnly,
      [styles.defaultCursor]: isReadOnly,
      [styles.filterable]: isFilterable,
      [styles.pressed]: isFilterable && pressed,
      [styles.withClose]: hasCloseButton,
      [styles.withLeftIcon]: hasLeftIcon,
      [styles.withRightIcon]: hasRightIcon
    });
    const clickableClassName = cx(styles.clickable, overrideClassName, {
      [styles.disabled]: disabled,
      [styles.disableTextSelection]: !allowTextSelection
    });

    /**
     * Content colors (there are ~40) can't reasonably each get a class, so they pass their
     * palette in as custom properties and CSS applies them. That keeps `background-color`
     * out of the inline style, so hover is a plain `:hover` rule rather than React state,
     * and consumers can restyle a chip with ordinary specificity.
     */
    const contentColorStyle = useMemo(() => {
      if (isFilterable || disabled || semanticColorClassName) {
        return undefined;
      }
      // No --chips-surface-hover: content colors have no `--color-*-selected-hover` token,
      // so getElementColor ignores the hover palette for them. The CSS falls back to the
      // resting fill, which is what the previous JS hover branch also produced.
      return { "--chips-surface": getElementColor(resolvedColor, true) } as React.CSSProperties;
    }, [disabled, resolvedColor, isFilterable, semanticColorClassName]);

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
        if (isReadOnly || disabled) {
          return;
        }
        if (onClick !== undefined && (e.target as HTMLElement) !== iconButtonRef.current) {
          e.preventDefault();
          onClick(e);
        }
      },
      [onClick, isReadOnly, disabled]
    );

    const onMouseDownCallback = useCallback(
      (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isReadOnly || disabled) {
          return;
        }
        onMouseDown?.(e);
      },
      [onMouseDown, isReadOnly, disabled]
    );

    const clickableProps = useClickableProps(
      {
        onClick: onClickCallback,
        onMouseDown: onMouseDownCallback,
        disabled: disabled || isReadOnly,
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
          style: contentColorStyle,
          ...(isFilterable ? { "aria-pressed": pressed } : {})
        }
      : {
          className: overrideClassName,
          "aria-label": overrideAriaLabel,
          style: contentColorStyle,
          ref: mergedRef,
          onClick: isReadOnly ? undefined : onClickCallback,
          onMouseDown: isReadOnly ? undefined : onMouseDownCallback,
          id: id,
          "data-testid": componentDataTestId
        };

    const leftAvatarProps = leftAvatarType === "text" ? { text: leftAvatar } : { src: leftAvatar };
    const rightAvatarProps = leftAvatarType === "text" ? { text: rightAvatar } : { src: rightAvatar };

    return (
      <div
        {...wrapperProps}
        data-vibe={ComponentVibeId.CHIPS}
        data-variant={isFilterable ? "filterable" : isReadOnly ? "readOnly" : "default"}
      >
        {leftAvatar ? (
          <Avatar
            withoutBorder
            className={cx(styles.avatar, styles.left, avatarClassName)}
            customSize={resolvedAvatarSize}
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
            iconSize={resolvedIconSize}
            ignoreFocusStyle
          />
        ) : null}
        {leftRenderer && <div className={cx(styles.customRenderer, styles.left)}>{leftRenderer}</div>}
        {/* `inherit` so the label follows the chip's colour (--text-on-surface-* for semantic
            colors, set inline on the root). Text's default would pin --primary-text-color and
            leave the label out of step with the icons, which use currentColor. */}
        <Text type={isSmall ? "text3" : "text2"} color="inherit" className={styles.label}>
          {label}
        </Text>
        {rightIcon ? (
          <Icon
            className={cx(styles.icon, styles.right, iconClassName)}
            iconType="font"
            icon={rightIcon}
            iconSize={resolvedIconSize}
            ignoreFocusStyle
          />
        ) : null}
        {rightAvatar ? (
          <Avatar
            withoutBorder
            className={cx(styles.avatar, styles.right, avatarClassName)}
            customSize={resolvedAvatarSize}
            type={rightAvatarType}
            key={id}
            {...rightAvatarProps}
          />
        ) : null}
        {rightRenderer && <div className={cx(styles.customRenderer, styles.right)}>{rightRenderer}</div>}
        {hasCloseButton && (
          <IconButton
            size="xxs"
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
