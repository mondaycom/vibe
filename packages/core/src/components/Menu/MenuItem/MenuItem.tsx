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
  tooltipPosition?: TooltipPositions;
  tooltipShowDelay?: number;
  tooltipProps?: Partial<TooltipProps>;
  onMouseLeave?: (event: React.MouseEvent) => void;
  onMouseEnter?: (event: React.MouseEvent) => void;
  /**
   * Class name which is added to div which wraps an Icon
   */
  iconWrapperClassName?: string;
  isInitialSelectedState?: boolean;
  shouldScrollMenu?: boolean;
  closeMenu?: (option: CloseMenuOption) => void;
  menuRef?: React.RefObject<HTMLElement>;
  //// TODO: [breaking] MenuItem can accept only Menu element as first level child, it accepts MenuChild[] as children even though it is not valid
  children?: MenuChild | MenuChild[];
  /**
   * Type of menu item with sub menu, which has two click/hover options-
   *    1. click on the main menu item will trigger onClick
   *    2. click/hover on icon button will open the sub menu
   */
  splitMenuItem?: boolean;
  "aria-label"?: AriaAttributes["aria-label"];
  submenuPosition?: SubmenuPosition;
  tooltipId?: string;
  shouldShowTooltip?: boolean;
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
        childId={baseMenuProps.id}
        {...tooltipProps}
      >
        <BaseMenuItem
          key={key}
          ref={ref}
          subMenu={children}
          className={className}
          disabled={disabled}
          selected={selected}
          tooltipId={tooltipProps?.id}
          shouldShowTooltip={!!shouldShowTooltip}
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
