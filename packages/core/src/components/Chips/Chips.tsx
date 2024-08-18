import React, { forwardRef, RefObject, useCallback, useMemo, useRef } from "react";
import cx from "classnames";
import Icon from "../Icon/Icon";
import useMergeRef from "../../hooks/useMergeRef";
import CloseSmall from "../Icon/Icons/components/CloseSmall";
import { getCSSVar } from "../../services/themes";
import { ElementAllowedColor, ElementColor, getElementColor } from "../../utils/colors-vars-map";
import Avatar from "../Avatar/Avatar";
import IconButton from "../IconButton/IconButton";
import Text from "../Text/Text";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { AvatarType } from "../Avatar/AvatarConstants";
import { ElementContent, SubIcon, VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import useHover from "../../hooks/useHover/useHover";
import useSetFocus from "../../hooks/useSetFocus";
import useClickableProps from "../../hooks/useClickableProps/useClickableProps";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import styles from "./Chips.module.scss";

const CHIPS_AVATAR_SIZE = 18;

export interface ChipsProps extends VibeComponentProps {
  label?: ElementContent;
  disabled?: boolean;
  readOnly?: boolean;
  /**
   * @deprecated - use "data-testid" instead
   */
  dataTestId?: string;
  "data-testid"?: string;
  /**
   * A React element that is positioned to the right of the text
   */
  rightRenderer?: ElementContent;
  /**
   * A React element that is positioned to the left of the text
   */
  leftRenderer?: ElementContent;
  /** Icon to place on the right */
  rightIcon?: SubIcon;
  /** Icon to place on the left */
  leftIcon?: SubIcon;
  /** Img to place as avatar on the right */
  rightAvatar?: string;
  /** the type of right avatar */
  rightAvatarType?: AvatarType;
  /** Img to place as avatar on the left */
  leftAvatar?: string;
  /** the type of left avatar */
  leftAvatarType?: AvatarType;
  /** ClassName for left or right icon */
  iconClassName?: string;
  /** ClassName for left or right avatar */
  avatarClassName?: string;
  // TODO Vibe 3.0: filter ElementAllowedColor.DARK_INDIGO, ElementAllowedColor.BLACKISH from colors which are valid for Chips
  color?: ElementColor;
  /** Size for font icon */
  iconSize?: number | string;
  onDelete?: (id: string, event: React.MouseEvent<HTMLSpanElement>) => void;
  /**
   * Disables the Chip's entry animation
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
  /**
   * Callback function to be called when the user clicks the component.
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /**
   * Applies when element has onClick or onMouseDown props
   */
  ariaLabel?: string;
  /**
   * Deprecated, there is no need to use this prop for implementing clickable chips. Please use onClick for this purpose.
   * @deprecated
   */
  clickable?: boolean;
  /**
   * Deprecated, there is no need to use this prop for implementing clickable chips. Please use onClick for this purpose.
   * @deprecated
   */
  isClickable?: boolean;
  /**
   * Disable click behaviors
   */
  disableClickableBehavior?: boolean;
  /**
   * Show border, the border color is `--text-color-on-primary`, should be when the chip is a colored background like
   * selected-color
   */
  showBorder?: boolean;
  closeButtonAriaLabel?: string;
}

const Chips: VibeComponent<ChipsProps, HTMLDivElement> & {
  colors?: typeof ElementAllowedColor;
  avatarTypes?: typeof AvatarType;
} = forwardRef<HTMLDivElement, ChipsProps>(
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
      color = Chips.colors.PRIMARY,
      iconSize = 18,
      onDelete = (_id: string, _e: React.MouseEvent<HTMLSpanElement>) => {},
      onMouseDown,
      onClick,
      noAnimation = true,
      ariaLabel,
      dataTestId: backwardCompatabilityDataTestId,
      "data-testid": dataTestId,
      disableClickableBehavior = false,
      leftAvatarType = AvatarType.IMG,
      rightAvatarType = AvatarType.IMG,
      showBorder = false,
      leftRenderer,
      rightRenderer,
      closeButtonAriaLabel = "Remove"
    },
    ref
  ) => {
    const overrideDataTestId = backwardCompatibilityForProperties(
      [dataTestId, backwardCompatabilityDataTestId],
      getTestId(ComponentDefaultTestId.CHIP, id)
    );
    const hasClickableWrapper = (!!onClick || !!onMouseDown) && !disableClickableBehavior;
    const hasCloseButton = !readOnly && !disabled;
    const overrideAriaLabel = ariaLabel || (typeof label === "string" && label) || "";

    const iconButtonRef = useRef(null);
    const componentRef = useRef(null);

    const [hoverRef, isHovered] = useHover<HTMLDivElement>();
    const { isFocused } = useSetFocus({ ref: componentRef });

    const mergedRef = useMergeRef<HTMLDivElement>(ref, componentRef, hoverRef);

    const overrideClassName = cx(styles.chips, className, {
      [styles.disabled]: disabled,
      [styles.noAnimation]: noAnimation,
      [styles.withUserSelect]: allowTextSelection,
      [styles.border]: showBorder
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
        "data-testid": overrideDataTestId,
        ariaLabel: overrideAriaLabel,
        ariaHidden: false,
        ariaHasPopup: false,
        ariaExpanded: false
      },
      mergedRef
    );
    const wrapperProps = hasClickableWrapper
      ? {
          ...clickableProps,
          ref: clickableProps.ref as RefObject<HTMLDivElement>,
          className: clickableClassName,
          style: backgroundColorStyle
        }
      : {
          className: overrideClassName,
          "aria-label": overrideAriaLabel,
          style: backgroundColorStyle,
          ref: mergedRef,
          onClick: onClickCallback,
          onMouseDown,
          id: id,
          "data-testid": overrideDataTestId
        };

    const leftAvatarProps = leftAvatarType === AvatarType.TEXT ? { text: leftAvatar } : { src: leftAvatar };
    const rightAvatarProps = leftAvatarType === AvatarType.TEXT ? { text: rightAvatar } : { src: rightAvatar };

    return (
      <div {...wrapperProps}>
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
            iconType={Icon.type.ICON_FONT}
            clickable={false}
            icon={leftIcon}
            iconSize={iconSize}
            ignoreFocusStyle
          />
        ) : null}
        {leftRenderer && <div className={cx(styles.customRenderer, styles.left)}>{leftRenderer}</div>}
        <Text type={Text.types.TEXT2} className={styles.label}>
          {label}
        </Text>
        {rightIcon ? (
          <Icon
            className={cx(styles.icon, styles.right, iconClassName)}
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
            size={IconButton.sizes.XXS}
            color={IconButton.colors.ON_PRIMARY_COLOR}
            className={cx(styles.icon, styles.close)}
            ariaLabel={closeButtonAriaLabel}
            hideTooltip
            icon={CloseSmall}
            onClick={onDeleteCallback}
            data-testid={`${overrideDataTestId}-close`}
            ref={iconButtonRef}
          />
        )}
      </div>
    );
  }
);

export default withStaticProps(Chips, {
  colors: ElementAllowedColor,
  avatarTypes: AvatarType
});
