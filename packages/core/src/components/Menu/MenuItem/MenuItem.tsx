import React, { AriaAttributes, ForwardedRef, ReactElement, forwardRef, useMemo, useRef } from "react";
import Tooltip, { TooltipProps } from "../../../components/Tooltip/Tooltip";
import Icon from "../../../components/Icon/Icon";
import useIsOverflowing from "../../../hooks/useIsOverflowing/useIsOverflowing";
import { SubIcon, VibeComponent, VibeComponentProps, withStaticProps } from "../../../types";
import { IconType } from "../../Icon";
import { CloseMenuOption, MenuChild } from "../Menu/MenuConstants";
import Label from "../../Label/Label";
import styles from "./MenuItem.module.scss";
import BaseMenuItem from "./components/BaseMenuItem/BaseMenuItem";
import MenuItemIcon from "./components/MenuItemIcon/MenuItemIcon";
import { TooltipPositions } from "../../Tooltip/Tooltip.types";
import { TooltipPositions as TooltipPositionsEnum } from "../../Tooltip/TooltipConstants";
import { SubmenuPosition } from "./MenuItem.types";

export interface MenuItemProps extends VibeComponentProps {
  /**
   * The title of the menu item.
   */
  title?: string;
  /**
   * The label displayed alongside the title.
   */
  label?: string | React.ReactElement<typeof Label>;
  /**
   * The icon displayed in the menu item.
   */
  icon?: SubIcon;
  /**
   * The type of icon.
   */
  iconType?: IconType;
  /**
   * The background color of the icon.
   */
  iconBackgroundColor?: string;
  /**
   * If true, the menu item is disabled.
   */
  disabled?: boolean;
  /**
   * The reason for disabling the item, shown in a tooltip.
   */
  disableReason?: string;
  /**
   * If true, the menu item is selected.
   */
  selected?: boolean;
  /**
   * Callback fired when the menu item is clicked.
   */
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  /**
   * The active item index in the menu.
   */
  activeItemIndex?: number;
  /**
   * Callback to set the active item index.
   */
  setActiveItemIndex?: (index: number) => void;
  /**
   * The index of the menu item.
   */
  index?: number;
  /**
   * The key of the menu item.
   */
  key?: string;
  /**
   * If true, the parent menu is visible.
   */
  isParentMenuVisible?: boolean;
  /**
   * Callback to reset the open submenu index.
   */
  resetOpenSubMenuIndex?: () => void;
  /**
   * If true, a submenu is open.
   */
  hasOpenSubMenu?: boolean;
  /**
   * Callback to open or close a submenu by index.
   */
  setSubMenuIsOpenByIndex?: (index: number, isOpen: boolean) => void;
  /**
   * If true, document event listeners are used for handling interactions.
   */
  useDocumentEventListeners?: boolean;
  /**
   * The tooltip content for the menu item.
   */
  tooltipContent?: string;
  /**
   * The position of the tooltip.
   */
  tooltipPosition?: TooltipPositions;
  /**
   * The delay in milliseconds before the tooltip shows.
   */
  tooltipShowDelay?: number;
  /**
   * Additional props for customizing the tooltip.
   */
  tooltipProps?: Partial<TooltipProps>;
  /**
   * Callback fired when the mouse leaves the item.
   */
  onMouseLeave?: (event: React.MouseEvent) => void;
  /**
   * Callback fired when the mouse enters the item.
   */
  onMouseEnter?: (event: React.MouseEvent) => void;
  /**
   * Class name applied to the icon wrapper.
   */
  iconWrapperClassName?: string;
  /**
   * If true, the menu item starts as selected.
   */
  isInitialSelectedState?: boolean;
  /**
   * If true, the menu scrolls to ensure visibility.
   */
  shouldScrollMenu?: boolean;
  /**
   * Function to close the menu with a given option.
   */
  closeMenu?: (option: CloseMenuOption) => void;
  /**
   * Reference to the menu container.
   */
  menuRef?: React.RefObject<HTMLElement>;
  /**
   * The submenu items, if applicable.
   */
  children?: MenuChild | MenuChild[];
  /**
   * If true, enables a split menu item interaction where the main area triggers an action,
   * while the icon button opens the submenu.
   */
  splitMenuItem?: boolean;
  /**
   * The label of the menu item for accessibility.
   */
  "aria-label"?: AriaAttributes["aria-label"];
  /**
   * The position of a submenu relative to the menu item.
   */
  submenuPosition?: SubmenuPosition;
  /**
   * If true, automatically repositions the submenu when its content changes.
   */
  autoAdjustOnSubMenuContentResize?: boolean;
}

export interface MenuItemTitleComponentProps extends Omit<MenuItemProps, "title"> {
  title: ReactElement;
  "aria-label": NonNullable<AriaAttributes["aria-label"]>;
}

const MenuItem: VibeComponent<MenuItemProps | MenuItemTitleComponentProps> & {
  iconType?: typeof Icon.type;
  isSelectable?: boolean;
  isMenuChild?: boolean;
  tooltipPositions?: typeof TooltipPositionsEnum;
} = forwardRef(
  (
    {
      className,
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
      tooltipPosition = "right",
      tooltipShowDelay = 300,
      tooltipProps,
      "aria-label": ariaLabel,
      ...baseMenuProps
    }: MenuItemProps | MenuItemTitleComponentProps,
    ref: ForwardedRef<HTMLElement>
  ) => {
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
        return <Label kind="line" text={label} />;
      }
      if (React.isValidElement(label) && label.type === Label) {
        return label;
      }
    }, [label]);

    return (
      <Tooltip
        content={shouldShowTooltip ? finalTooltipContent : null}
        position={tooltipPosition}
        showDelay={tooltipShowDelay}
        {...tooltipProps}
      >
        <BaseMenuItem
          key={key}
          ref={ref}
          subMenu={children}
          className={className}
          disabled={disabled}
          selected={selected}
          {...baseMenuProps}
        >
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
          <div ref={titleRef} className={styles.title}>
            {title}
          </div>
          {renderLabel}
        </BaseMenuItem>
      </Tooltip>
    );
  }
);

Object.assign(MenuItem, {
  isSelectable: true,
  isMenuChild: true
});

export default withStaticProps(MenuItem, {
  iconType: Icon.type,
  tooltipPositions: TooltipPositionsEnum
});
