/* eslint-disable react/jsx-props-no-spreading */
import React, { AriaAttributes, ForwardedRef, ReactElement, forwardRef, useMemo, useRef } from "react";
import { DialogPosition } from "../../../constants";
import Tooltip, { TooltipProps } from "../../../components/Tooltip/Tooltip";
import Icon from "../../../components/Icon/Icon";
import useIsOverflowing from "../../../hooks/useIsOverflowing/useIsOverflowing";
import { SubIcon, VibeComponent, VibeComponentProps, withStaticProps } from "../../../types";
import { IconType } from "../../Icon/IconConstants";
import { TooltipPosition } from "./MenuItemConstants";
import { CloseMenuOption, MenuChild } from "../Menu/MenuConstants";
import Label from "../../Label/Label";
import styles from "./MenuItem.module.scss";
import BaseMenuItem from "./components/BaseMenuItem/BaseMenuItem";
import MenuItemIcon from "./components/MenuItemIcon/MenuItemIcon";
import { backwardCompatibilityForProperties } from "../../../helpers/backwardCompatibilityForProperties";
import { SubmenuPosition } from "./MenuItem.Types";

export interface MenuItemProps extends VibeComponentProps {
  title?: string;
  label?: string | React.ReactElement<typeof Label>;
  icon?: SubIcon;
  iconType?: IconType;
  iconBackgroundColor?: string;
  disabled?: boolean;
  disableReason?: string;
  selected?: boolean;
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  activeItemIndex?: number;
  setActiveItemIndex?: (index: number) => void;
  index?: number;
  key?: string;
  isParentMenuVisible?: boolean;
  resetOpenSubMenuIndex?: () => void;
  hasOpenSubMenu?: boolean;
  setSubMenuIsOpenByIndex?: (index: number, isOpen: boolean) => void;
  useDocumentEventListeners?: boolean;
  tooltipContent?: string;
  tooltipPosition?: TooltipPosition;
  tooltipShowDelay?: number;
  tooltipProps?: Partial<TooltipProps>;
  onMouseLeave?: (event: React.MouseEvent) => void;
  onMouseEnter?: (event: React.MouseEvent) => void;
  /**
   * @deprecated - use className instead
   */
  classname?: string;
  /**
   * Class name which is added to div which wraps an Icon
   */
  iconWrapperClassName?: string;
  isInitialSelectedState?: boolean;
  shouldScrollMenu?: boolean;
  closeMenu?: (option: CloseMenuOption) => void;
  menuRef?: React.RefObject<HTMLElement>;
  // TODO MenuItem can accept only Menu element as first level child, it accepts MenuChild[] as children even though it is not valid.
  //  Should be fixed in next major version
  children?: MenuChild | MenuChild[];
  /**
   * Type of menu item with sub menu, which has two click/hover options-
   *    1. click on the main menu item will trigger onClick
   *    2. click/hover on icon button will open the sub menu
   */
  splitMenuItem?: boolean;
  "aria-label"?: AriaAttributes["aria-label"];
  submenuPosition?: SubmenuPosition;
}

export interface MenuItemTitleComponentProps extends Omit<MenuItemProps, "title"> {
  title: ReactElement;
  "aria-label": NonNullable<AriaAttributes["aria-label"]>;
}

const MenuItem: VibeComponent<MenuItemProps | MenuItemTitleComponentProps> & {
  iconType?: typeof Icon.type;
  tooltipPositions?: typeof DialogPosition;
  isSelectable?: boolean;
  isMenuChild?: boolean;
} = forwardRef(
  (
    {
      className,
      // Backward compatibility for props naming
      classname,
      iconWrapperClassName,
      title = "",
      label = "",
      icon = "",
      iconType,
      iconBackgroundColor,
      disabled = false,
      disableReason,
      selected = false,
      key,
      children,
      tooltipContent,
      tooltipPosition = MenuItem.tooltipPositions.RIGHT,
      tooltipShowDelay = 300,
      tooltipProps,
      "aria-label": ariaLabel,
      ...baseMenuProps
    },
    ref: ForwardedRef<HTMLElement>
  ) => {
    const overrideClassName = backwardCompatibilityForProperties([className, classname]);
    const titleRef = useRef();

    // if "title" is a component ariaLabel is mandatory
    const iconLabel = ariaLabel ?? (title as string);

    const isTitleHoveredAndOverflowing = useIsOverflowing({ ref: titleRef });
    const shouldShowTooltip = isTitleHoveredAndOverflowing || disabled || tooltipContent;

    const finalTooltipContent = useMemo(() => {
      if (disabled) return disableReason;
      if (tooltipContent) return tooltipContent;
      return title;
    }, [disableReason, disabled, title, tooltipContent]);

    const renderLabel = useMemo(() => {
      if (!label) return;
      if (typeof label === "string") {
        return <Label kind={Label.kinds.LINE} text={label} />;
      }
      if (React.isValidElement(label) && label.type === Label) {
        return label;
      }
    }, [label]);

    return (
      <BaseMenuItem
        key={key}
        ref={ref}
        subMenu={children}
        className={overrideClassName}
        disabled={disabled}
        selected={selected}
        {...baseMenuProps}
      >
        <>
          {Boolean(icon) && (
            <MenuItemIcon
              icon={icon}
              type={iconType}
              label={iconLabel}
              disabled={disabled}
              selected={selected}
              backgroundColor={iconBackgroundColor}
              wrapperClassName={iconWrapperClassName}
            />
          )}
          <Tooltip
            content={shouldShowTooltip ? finalTooltipContent : null}
            position={tooltipPosition}
            showDelay={tooltipShowDelay}
            {...tooltipProps}
          >
            <div ref={titleRef} className={styles.title}>
              {title}
            </div>
            {/* Tooltip should be on a whole MenuItem, but it's a breaking change (tooltip adds span) - should be fixed in the next major and then this div be removed */}
            <div className={styles.hiddenTitle} aria-hidden tabIndex={-1}>
              {title}
            </div>
          </Tooltip>
          {renderLabel}
        </>
      </BaseMenuItem>
    );
  }
);

Object.assign(MenuItem, {
  isSelectable: true,
  isMenuChild: true
});

export default withStaticProps(MenuItem, {
  iconType: Icon.type,
  tooltipPositions: DialogPosition
});
