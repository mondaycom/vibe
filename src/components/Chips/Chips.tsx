import React, { forwardRef, useCallback, useMemo, useRef } from "react";
import cx from "classnames";
import Icon from "../Icon/Icon";
import useMergeRefs from "../../hooks/useMergeRefs";
import CloseSmall from "../Icon/Icons/components/CloseSmall";
import { getCSSVar } from "../../services/themes";
import { elementColorsNames, getElementColor } from "../../utils/colors-vars-map";
import Avatar from "../Avatar/Avatar";
import IconButton from "../IconButton/IconButton";
import Tooltip from "../Tooltip/Tooltip";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { ChipsSize } from "./ChipsConstants";
import { AvatarType } from "../Avatar/AvatarConstants";
import { SubIcon, VibeComponent, VibeComponentProps } from "../../types";
import useHover from "../../hooks/useHover/useHover";
import useSetFocus from "../../hooks/useSetFocus";
import useClickableProps from "../../hooks/useClickableProps/useClickableProps";
import useIsOverflowing from "../../hooks/useIsOverflowing/useIsOverflowing";
import useChipOverflowTooltip from "./hooks/useChipOverflowTooltip";
import { BEMClass } from "../../helpers/bem-helper";
import { ElementContent } from "../../types/ElementContent";
import "../Clickable/Clickable.scss";
import styles from "./Chips.module.scss";

const CLICKABLE_CSS_BASE_CLASS = "monday-style-clickable";
const clickableBemHelper = BEMClass(CLICKABLE_CSS_BASE_CLASS);

interface ChipsProps extends VibeComponentProps {
  label?: string;
  disabled?: boolean;
  readOnly?: boolean;
  dataTestId?: string;
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
}

const Chips: VibeComponent<ChipsProps, HTMLElement> & {
  sizes?: typeof ChipsSize;
  colors?: typeof elementColorsNames;
  avatarTypes?: typeof AvatarType;
} = forwardRef<HTMLElement, ChipsProps>(
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
      color = elementColorsNames.PRIMARY,
      iconSize = 16,
      onDelete = (_id: string, _e: React.MouseEvent<HTMLSpanElement>) => {},
      onMouseDown,
      onClick,
      noAnimation = true,
      ariaLabel,
      dataTestId,
      disableClickableBehavior = false,
      leftAvatarType = AvatarType.IMG,
      rightAvatarType = AvatarType.IMG,
      showBorder = false,
      leftRenderer,
      rightRenderer
    },
    ref
  ) => {
    const overrideDataTestId = dataTestId || getTestId(ComponentDefaultTestId.CHIP, id);
    const hasClickableWrapper = (!!onClick || !!onMouseDown) && !disableClickableBehavior;
    const hasCloseButton = !readOnly && !disabled;
    const overrideAriaLabel = ariaLabel || label;

    const iconButtonRef = useRef(null);
    const labelRef = useRef(null);
    const componentRef = useRef(null);

    const [hoverRef, isHovered] = useHover();
    const { isFocused } = useSetFocus({ ref: componentRef });
    const isOverflowing = useIsOverflowing({ ref: labelRef });

    const mergedRef = useMergeRefs({ refs: [ref, componentRef, hoverRef] });

    const overrideClassName = cx(styles.chips, "chips--wrapper", className, {
      [styles.disabled]: disabled,
      [styles.withClose]: hasCloseButton,
      [styles.noAnimation]: noAnimation,
      [styles.withUserSelect]: allowTextSelection,
      [styles.border]: showBorder
    });
    const clickableClassName = cx(CLICKABLE_CSS_BASE_CLASS, overrideClassName, {
      disabled,
      [clickableBemHelper({ state: "disable-text-selection" })]: !allowTextSelection
    });

    const overflowProps = useChipOverflowTooltip({
      isOverflowing,
      wrapperClassName: overrideClassName,
      clickableClassName,
      label
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
        dataTestId: overrideDataTestId,
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
          className: clickableClassName,
          style: backgroundColorStyle
        }
      : {
          className: overrideClassName,
          ...overflowProps.wrapperProps,
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
      <Tooltip {...overflowProps.tooltipProps}>
        <div {...wrapperProps}>
          {leftAvatar ? (
            <Avatar
              withoutBorder
              className={cx(styles.avatar, styles.left, avatarClassName)}
              customSize={18}
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
          <div className={styles.label} ref={labelRef}>
            {label}
          </div>
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
              customSize={16}
              type={rightAvatarType}
              key={id}
              {...rightAvatarProps}
            />
          ) : null}
          {rightRenderer && <div className={cx(styles.customRenderer, styles.right)}>{rightRenderer}</div>}
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
              ref={iconButtonRef}
            />
          )}
        </div>
      </Tooltip>
    );
  }
);

Object.assign(Chips, {
  sizes: ChipsSize,
  defaultTestId: ComponentDefaultTestId.CHIP,
  colors: elementColorsNames,
  avatarTypes: AvatarType
});

export default Chips;
