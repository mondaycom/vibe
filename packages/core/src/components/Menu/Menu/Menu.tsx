import cx from "classnames";
import { SIZES } from "../../../constants/sizes";
import React, {
  forwardRef,
  ReactElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";
import useMergeRef from "../../../hooks/useMergeRef";
import useClickOutside from "../../../hooks/useClickOutside";
import { backwardCompatibilityForProperties } from "../../../helpers/backwardCompatibilityForProperties";
import useSubMenuIndex from "./hooks/useSubMenuIndex";
import useOnCloseMenu from "./hooks/useOnCloseMenu";
import useCloseMenuOnKeyEvent from "./hooks/useCloseMenuOnKeyEvent";
import useMenuKeyboardNavigation from "./hooks/useMenuKeyboardNavigation";
import useMouseLeave from "./hooks/useMouseLeave";
import { useAdjacentSelectableMenuIndex } from "./hooks/useAdjacentSelectableMenuIndex";
import { useFocusWithin } from "../../../hooks/useFocusWithin";
import usePrevious from "../../../hooks/usePrevious";
import { ElementContent, VibeComponent, VibeComponentProps, withStaticProps } from "../../../types";
import { CloseMenuOption, MenuChild } from "./MenuConstants";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { useFocusOnMount } from "./hooks/useFocusOnMount";
import { useMenuId } from "./hooks/useMenuId";
import { generateMenuItemId } from "./utils/utils";
import styles from "./Menu.module.scss";

export interface MenuProps extends VibeComponentProps {
  /**
   * @deprecated - use className instead
   */
  classname?: string;
  size?: (typeof SIZES)[keyof typeof SIZES];
  tabIndex?: number;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  focusOnMount?: boolean;
  onItemFocus?: (index: number) => void;
  isVisible?: boolean;
  onClose?: (option: CloseMenuOption) => void;
  focusItemIndex?: number;
  isSubMenu?: boolean;
  useDocumentEventListeners?: boolean;
  focusItemIndexOnMount?: number;
  shouldScrollMenu?: boolean;
  children?: ElementContent;
}

const Menu: VibeComponent<MenuProps> & {
  isMenu?: boolean;
  supportFocusOnMount?: boolean;
  sizes?: typeof SIZES;
} = forwardRef(
  (
    {
      id,
      className,
      // Backward compatibility for props naming
      classname,
      size = Menu.sizes.MEDIUM,
      tabIndex = 0,
      ariaLabel = "Menu",
      ariaDescribedBy,
      children: originalChildren,
      isVisible = true,
      onClose,
      onItemFocus,
      focusOnMount = false,
      focusItemIndex = -1,
      focusItemIndexOnMount = -1,
      isSubMenu = false,
      useDocumentEventListeners = false,
      shouldScrollMenu = false,
      "data-testid": dataTestId
    },
    forwardedRef
  ) => {
    const ref = useRef(null);
    const mergedRef = useMergeRef(ref, forwardedRef);

    const overrideId = useMenuId(id);
    const splitMenuItemIconButtonRef = useRef<HTMLElement>(null);

    const overrideClassName = backwardCompatibilityForProperties([className, classname]);
    const [activeItemIndex, setActiveItemIndex] = useState(focusItemIndex);
    const [isInitialSelectedState, setIsInitialSelectedState] = useState(false);

    const children = useMemo(() => {
      const allChildren = React.Children.toArray(originalChildren) as MenuChild[];
      return allChildren.filter(child => {
        if (child.type.isMenuChild) return true;
        console.error(
          "Menu child must be a menuChild item (such as MenuItem, MenuDivider, MenuTitle, etc). This child is not supported: ",
          child
        );
        return false;
      });
    }, [originalChildren]);

    const updateActiveItemIndex = useCallback(
      (index: number) => {
        setActiveItemIndex(index);

        const activeChild = children[index];
        const ariaActiveDescendant = React.isValidElement(activeChild)
          ? activeChild?.props?.id || `${overrideId}-item-${index}`
          : undefined;
        if (ariaActiveDescendant) {
          ref?.current?.setAttribute("aria-activedescendant", ariaActiveDescendant);
        } else {
          ref?.current?.removeAttribute("aria-activedescendant");
        }
      },
      [children, overrideId]
    );

    const onSetActiveItemIndexCallback = useCallback(
      (index: number) => {
        onItemFocus && onItemFocus(index);
        updateActiveItemIndex(index);
        setIsInitialSelectedState(false);
      },
      [updateActiveItemIndex, onItemFocus]
    );

    const { setSubMenuIsOpenByIndex, hasOpenSubMenu, openSubMenuIndex, setOpenSubMenuIndex, resetOpenSubMenuIndex } =
      useSubMenuIndex();

    const onCloseMenu = useOnCloseMenu({
      setActiveItemIndex: onSetActiveItemIndexCallback,
      setOpenSubMenuIndex,
      onClose
    });

    useClickOutside({ ref, callback: () => onCloseMenu() });
    useCloseMenuOnKeyEvent({ hasOpenSubMenu, onCloseMenu, ref, onClose, isSubMenu, useDocumentEventListeners });

    const { getNextSelectableIndex, getPreviousSelectableIndex } = useAdjacentSelectableMenuIndex({
      children: children as ReactElement[]
    });
    useMenuKeyboardNavigation({
      hasOpenSubMenu,
      getNextSelectableIndex,
      getPreviousSelectableIndex,
      activeItemIndex,
      setActiveItemIndex: onSetActiveItemIndexCallback,
      isVisible,
      ref,
      useDocumentEventListeners
    });
    useMouseLeave({
      resetOpenSubMenuIndex,
      hasOpenSubMenu,
      ref,
      setActiveItemIndex: onSetActiveItemIndexCallback
    });
    useFocusOnMount({
      focusItemIndexOnMount,
      focusChildOnMount: children[focusItemIndexOnMount] as ReactElement,
      getNextSelectableIndex,
      updateActiveItemIndex,
      setIsInitialFocusSet: setIsInitialSelectedState
    });

    const onMouseMove = useCallback(() => {
      setIsInitialSelectedState(true);
    }, [setIsInitialSelectedState]);

    const previousHasOpenSubMenu = usePrevious(hasOpenSubMenu);
    useEffect(() => {
      if (hasOpenSubMenu || useDocumentEventListeners) return;
      if (activeItemIndex > -1 && previousHasOpenSubMenu) {
        // the submenu was just closed, so we want to focus the menu to capture keyboard events
        ref?.current?.focus();
      }
    }, [activeItemIndex, hasOpenSubMenu, previousHasOpenSubMenu, useDocumentEventListeners]);

    useLayoutEffect(() => {
      if (!focusOnMount || useDocumentEventListeners) return;
      requestAnimationFrame(() => {
        ref && ref.current && ref.current.focus();
      });
    }, [ref, focusOnMount, useDocumentEventListeners]);

    const { focusWithinProps } = useFocusWithin({
      onBlurWithin: () => {
        onCloseMenu && onCloseMenu();
      }
    });

    return (
      <ul
        onFocus={focusWithinProps?.onFocus}
        onBlur={focusWithinProps?.onBlur}
        id={overrideId}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MENU, id)}
        className={cx(styles.menu, getStyle(styles, size), overrideClassName)}
        ref={mergedRef}
        tabIndex={tabIndex}
        aria-label={ariaLabel}
        role="menu"
        aria-describedby={ariaDescribedBy}
        onMouseOver={onMouseMove}
      >
        {children &&
          React.Children.map(children, (child, index) => {
            return React.isValidElement(child)
              ? React.cloneElement(child, {
                  ...child?.props,
                  activeItemIndex,
                  index,
                  setActiveItemIndex: updateActiveItemIndex,
                  menuRef: ref,
                  resetOpenSubMenuIndex,
                  isParentMenuVisible: isVisible,
                  setSubMenuIsOpenByIndex,
                  hasOpenSubMenu: index === openSubMenuIndex,
                  closeMenu: onCloseMenu,
                  id: generateMenuItemId(overrideId, child, index),
                  useDocumentEventListeners,
                  isInitialSelectedState,
                  shouldScrollMenu,
                  getNextSelectableIndex,
                  getPreviousSelectableIndex,
                  isUnderSubMenu: isSubMenu,
                  splitMenuItemIconButtonRef
                })
              : null;
          })}
      </ul>
    );
  }
);

Object.assign(Menu, {
  isMenu: true,
  supportFocusOnMount: true
});

export default withStaticProps(Menu, {
  sizes: SIZES
});
