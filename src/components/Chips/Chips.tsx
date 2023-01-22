import React, { forwardRef, useCallback, useMemo, useRef } from "react";
import cx from "classnames";
import Icon from "../Icon/Icon";
import useMergeRefs from "../../hooks/useMergeRefs";
import CloseSmall from "../Icon/Icons/components/CloseSmall";
import { getCSSVar } from "../../services/themes";
import { elementColorsNames, getElementColor } from "../../utils/colors-vars-map";
import Avatar from "../Avatar/Avatar";
import IconButton from "../IconButton/IconButton";
import { getTestId } from "../../tests/test-ids-utils";
import { ChipsSize } from "./ChipsConstants";
import { AvatarType } from "../Avatar/AvatarConstants";
import { SubIcon, VibeComponent, VibeComponentProps } from "../../types";
import useHover from "../../hooks/useHover";
import useSetFocus from "../../hooks/useSetFocus";
import { ComponentDefaultTestId } from "../../tests/constants";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import useClickableProps from "../../hooks/useClickableProps";
import { BEMClass } from "../../helpers/bem-helper";
import "../Clickable/Clickable.scss";
import styles from "./Chips.module.scss";

const CLICKABLE_CSS_BASE_CLASS = "monday-style-clickable";
const clickableBemHelper = BEMClass(CLICKABLE_CSS_BASE_CLASS);

interface ChipsProps extends VibeComponentProps {
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
  /**
   * Callback function to be called when the user clicks the component.
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /**
   * Applies when element has onClick or onMouseDown props
   */
  ariaLabel?: string;
  /**
   * Should element be focusable & clickable - for backward compatability
   */
  clickable?: boolean;
  /**
   * Backward compatibility for props naming - please use clickable instead
   */
  isClickable?: boolean;
}

const Chips: VibeComponent<ChipsProps, HTMLElement> & {
  sizes?: typeof ChipsSize;
  colors?: typeof elementColorsNames;
} = forwardRef<HTMLElement, ChipsProps>(
  (
    {
      className,
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
      noAnimation = false,
      ariaLabel,
      isClickable,
      clickable,
      dataTestId
    },
    ref
  ) => {
    const overrideClickable = backwardCompatibilityForProperties([clickable, isClickable], false);
    const overrideDataTestId = dataTestId || getTestId(ComponentDefaultTestId.CHIP, id);
    const hasClickableWrapper = overrideClickable && (!!onClick || !!onMouseDown);
    const hasCloseButton = !readOnly && !disabled;

    const focusRef = useRef(null);
    const [hoverRef, isHovered] = useHover();
    const { isFocused } = useSetFocus({ ref: focusRef });

    const iconButtonRef = useRef(null);
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef, hoverRef, focusRef] });

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
        if ((e.target as HTMLElement) !== iconButtonRef.current && onClick) {
          e.preventDefault();
          onClick(e);
        }
      },
      [onClick]
    );

    const overrideClassName = cx(styles.chips, "chips--wrapper", className, {
      [styles.disabled]: disabled,
      [styles.withClose]: hasCloseButton,
      [styles.noAnimation]: noAnimation,
      [styles.withUserSelect]: allowTextSelection
    });
    const clickableClassName = cx(CLICKABLE_CSS_BASE_CLASS, overrideClassName, {
      disabled,
      [clickableBemHelper({ state: "disable-text-selection" })]: !allowTextSelection
    });

    const clickableProps = useClickableProps(
      {
        onClick: onClickCallback,
        onMouseDown,
        disabled,
        id,
        dataTestId: overrideDataTestId,
        ariaLabel: ariaLabel || label,
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
          ref: mergedRef,
          id: id,
          "data-testid": overrideDataTestId,
          className: overrideClassName,
          style: backgroundColorStyle
        };

    return (
      <div {...wrapperProps}>
        {leftAvatar ? (
          <Avatar
            withoutBorder
            className={cx(styles.avatar, styles.left)}
            customSize={18}
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
            ref={iconButtonRef}
          />
        )}
      </div>
    );
  }
);

Object.assign(Chips, {
  sizes: ChipsSize,
  defaultTestId: ComponentDefaultTestId.CHIP,
  colors: elementColorsNames
});

export default Chips;
