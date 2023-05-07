/* eslint-disable react/jsx-props-no-spreading */
import React, {
  ForwardedRef,
  forwardRef,
  ReactElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef
} from "react";
import { DialogPosition } from "../../../constants/positions";
import { isFunction } from "lodash-es";
import cx from "classnames";
import Tooltip from "../../../components/Tooltip/Tooltip";
import Icon from "../../../components/Icon/Icon";
import DropdownChevronRight from "../../../components/Icon/Icons/components/DropdownChevronRight";
import DialogContentContainer from "../../../components/DialogContentContainer/DialogContentContainer";
import useMergeRefs from "../../../hooks/useMergeRefs";
import useIsOverflowing from "../../../hooks/useIsOverflowing/useIsOverflowing";
import usePopover from "../../../hooks/usePopover";
import { backwardCompatibilityForProperties } from "../../../helpers/backwardCompatibilityForProperties";
import useMenuItemMouseEvents from "./hooks/useMenuItemMouseEvents";
import useMenuItemKeyboardEvents from "./hooks/useMenuItemKeyboardEvents";
import { SubIcon, VibeComponent, VibeComponentProps } from "../../../types";
import { IconType } from "../../Icon/IconConstants";
import { TAB_INDEX_FOCUS_WITH_JS_ONLY, TooltipPosition } from "./MenuItemConstants";
import { CloseMenuOption } from "../Menu/MenuConstants";
import "./MenuItem.scss";

export interface MenuItemProps extends VibeComponentProps {
  title?: string;
  label?: string;
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
  onMouseLeave?: (event: React.MouseEvent) => void;
  onMouseEnter?: (event: React.MouseEvent) => void;
  /** Backward compatibility for props naming **/
  classname?: string;
  /**
   * Class name which is added to div which wraps an Icon
   */
  iconWrapperClassName?: string;
  menuId?: string;
  isInitialSelectedState?: boolean;
  shouldScrollMenu?: boolean;
  closeMenu?: (option: CloseMenuOption) => void;
  menuRef?: React.RefObject<HTMLElement>;
  children?: ReactElement | ReactElement[];
}

const MenuItem: VibeComponent<MenuItemProps> & {
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
      menuRef,
      iconType,
      iconBackgroundColor,
      disabled = false,
      disableReason,
      selected = false,
      onClick,
      activeItemIndex = -1,
      setActiveItemIndex,
      index,
      key,
      id,
      menuId,
      children,
      isParentMenuVisible = false,
      resetOpenSubMenuIndex,
      hasOpenSubMenu = false,
      setSubMenuIsOpenByIndex,
      closeMenu,
      useDocumentEventListeners = false,
      tooltipContent,
      tooltipPosition = MenuItem.tooltipPositions.RIGHT,
      tooltipShowDelay = 300,
      isInitialSelectedState,
      onMouseEnter,
      onMouseLeave,
      shouldScrollMenu
    },
    ref: ForwardedRef<HTMLElement>
  ) => {
    const overrideClassName = backwardCompatibilityForProperties([className, classname]);
    const isActive = activeItemIndex === index;
    const isSubMenuOpen = !!children && isActive && hasOpenSubMenu;
    const hasChildren = !!children;
    const shouldShowSubMenu = hasChildren && isParentMenuVisible && isSubMenuOpen;
    const submenuChild = children && React.Children.only(children);
    let menuChild;
    // @ts-ignore
    if (submenuChild && submenuChild.type && submenuChild.type.isMenu) {
      menuChild = submenuChild;
    } else if (submenuChild) {
      console.error(
        "menu item can accept only menu element as first level child, this element is not valid: ",
        submenuChild
      );
    }

    const titleRef = useRef();
    const childRef = useRef<HTMLElement>();
    const referenceElementRef = useRef(null);
    const popperElementRef = useRef(null);
    const popperElement = popperElementRef.current;
    const referenceElement = referenceElementRef.current;
    const childElement = childRef.current;

    const isTitleHoveredAndOverflowing = useIsOverflowing({ ref: titleRef });

    const { styles, attributes } = usePopover(referenceElement, popperElement, {
      isOpen: isSubMenuOpen
    });

    useEffect(() => {
      if (isActive && shouldScrollMenu && referenceElement) {
        if (referenceElement.scrollIntoViewIfNeeded) {
          referenceElement.scrollIntoViewIfNeeded({ behaviour: "smooth" });
        } else {
          referenceElement.scrollIntoView?.({ behavior: "smooth", block: "center" });
        }
      }
    }, [isActive, referenceElement, shouldScrollMenu]);

    const isMouseEnter = useMenuItemMouseEvents({
      ref: referenceElementRef,
      resetOpenSubMenuIndex,
      setSubMenuIsOpenByIndex,
      isActive,
      setActiveItemIndex,
      index,
      hasChildren
    });

    const { onClickCallback } = useMenuItemKeyboardEvents({
      onClick,
      disabled,
      isActive,
      index,
      setActiveItemIndex,
      hasChildren,
      shouldShowSubMenu,
      setSubMenuIsOpenByIndex,
      menuRef,
      isMouseEnter,
      closeMenu,
      useDocumentEventListeners
    });

    useLayoutEffect(() => {
      if (useDocumentEventListeners) return;

      if (shouldShowSubMenu && childElement) {
        requestAnimationFrame(() => {
          childElement.focus();
        });
      }
    }, [shouldShowSubMenu, childElement, useDocumentEventListeners]);

    useEffect(() => {
      if (useDocumentEventListeners) return;
      if (isActive) {
        referenceElement?.focus();
      }
    }, [isActive, referenceElement, useDocumentEventListeners]);

    const closeSubMenu = useCallback(
      (options: { propagate?: boolean } = {}) => {
        setSubMenuIsOpenByIndex(index, false);
        if (options.propagate) {
          closeMenu(options);
        }
      },
      [setSubMenuIsOpenByIndex, index, closeMenu]
    );

    const mergedRef = useMergeRefs({ refs: [ref, referenceElementRef] });

    const renderSubMenuIconIfNeeded = () => {
      if (!hasChildren) return null;

      return (
        <div className="monday-style-menu-item__sub_menu_icon-wrapper">
          <Icon
            clickable={false}
            icon={DropdownChevronRight}
            iconLabel={title}
            className="monday-style-menu-item__sub_menu_icon"
            ignoreFocusStyle
            iconSize={20}
          />
        </div>
      );
    };

    const [iconWrapperStyle, iconStyle] = useMemo(() => {
      return iconBackgroundColor
        ? [
            {
              backgroundColor: iconBackgroundColor,
              borderRadius: "4px",
              width: 20,
              height: 20,
              opacity: disabled ? 0.4 : 1
            },
            { color: "var(--text-color-on-primary)" }
          ]
        : [undefined, undefined];
    }, [iconBackgroundColor, disabled]);

    const renderMenuItemIconIfNeeded = () => {
      if (!icon) return null;

      let finalIconType = iconType;
      if (!finalIconType) {
        finalIconType = isFunction(icon) ? Icon.type.SVG : Icon.type.ICON_FONT;
      }

      return (
        <div className={cx("monday-style-menu-item__icon-wrapper", iconWrapperClassName)} style={iconWrapperStyle}>
          <Icon
            iconType={finalIconType}
            clickable={false}
            icon={icon}
            iconLabel={title}
            className="monday-style-menu-item__icon"
            ignoreFocusStyle
            style={iconStyle}
            iconSize={20}
          />
        </div>
      );
    };

    const a11yProps = useMemo(() => {
      if (!children) return {};
      return {
        "aria-haspopup": true,
        "aria-expanded": hasOpenSubMenu
      };
    }, [children, hasOpenSubMenu]);

    const shouldShowTooltip = isTitleHoveredAndOverflowing || disabled || tooltipContent;

    const finalTooltipContent = useMemo(() => {
      if (disabled) return disableReason;
      if (tooltipContent) return tooltipContent;
      return title;
    }, [disableReason, disabled, title, tooltipContent]);

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <li
        id={id || `${menuId}-${index}`}
        key={key}
        {...a11yProps}
        className={cx("monday-style-menu-item", overrideClassName, {
          "monday-style-menu-item--disabled": disabled,
          "monday-style-menu-item--focused": isActive,
          "monday-style-menu-item--selected": selected,
          "monday-style-menu-item-initial-selected": isInitialSelectedState
        })}
        ref={mergedRef}
        onClick={onClickCallback}
        role="menuitem"
        aria-current={isActive}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        tabIndex={TAB_INDEX_FOCUS_WITH_JS_ONLY}
      >
        {renderMenuItemIconIfNeeded()}

        <Tooltip
          content={shouldShowTooltip ? finalTooltipContent : null}
          position={tooltipPosition}
          showDelay={tooltipShowDelay}
        >
          <div ref={titleRef} className="monday-style-menu-item__title">
            {title}
          </div>
        </Tooltip>
        {label && (
          <div ref={titleRef} className="monday-style-menu-item__label">
            {label}
          </div>
        )}
        {renderSubMenuIconIfNeeded()}
        <div
          style={{ ...styles.popper, visibility: shouldShowSubMenu ? "visible" : "hidden" }}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...attributes.popper}
          className="monday-style-menu-item__popover"
          ref={popperElementRef}
        >
          {menuChild && shouldShowSubMenu && (
            <DialogContentContainer>
              {React.cloneElement(menuChild, {
                ...menuChild?.props,
                isVisible: shouldShowSubMenu,
                isSubMenu: true,
                onClose: closeSubMenu,
                ref: childRef,
                useDocumentEventListeners
              })}
            </DialogContentContainer>
          )}
        </div>
      </li>
    );
  }
);

Object.assign(MenuItem, {
  iconType: Icon.type,
  tooltipPositions: DialogPosition,
  isSelectable: true,
  isMenuChild: true
});

export default MenuItem;
