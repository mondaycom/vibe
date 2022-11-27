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
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
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
import { VibeComponent, VibeComponentProps } from "../../../types";
import "./Menu.scss";
import { CloseMenuOption } from "./MenuConstants";

interface MenuProps extends VibeComponentProps {
  /** Backward compatibility for props naming **/
  classname?: string;
  size?: typeof SIZES[keyof typeof SIZES];
  tabIndex?: number;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  focusOnMount?: boolean;
  isVisible?: boolean;
  onClose?: (option: CloseMenuOption) => void;
  focusItemIndex?: number;
  isSubMenu?: boolean;
  useDocumentEventListeners?: boolean;
  focusItemIndexOnMount?: number;
  shouldScrollMenu?: boolean;
  children?: ReactElement | ReactElement[];
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
      focusOnMount = false,
      focusItemIndex = -1,
      focusItemIndexOnMount = -1,
      isSubMenu = false,
      useDocumentEventListeners = false,
      shouldScrollMenu = false
    },
    forwardedRef
  ) => {
    const ref = useRef<HTMLElement>(null);
    const overrideClassName = backwardCompatibilityForProperties([className, classname]);
    const [activeItemIndex, setActiveItemIndex] = useState(focusItemIndex);
    const [isInitialSelectedState, setIsInitialSelectedState] = useState(false);

    const onSetActiveItemIndexCallback = useCallback(
      (index: number) => {
        setActiveItemIndex(index);
        setIsInitialSelectedState(false);
      },
      [setActiveItemIndex, setIsInitialSelectedState]
    );

    useEffect(() => {
      if (focusItemIndexOnMount === -1) {
        return;
      }
      setActiveItemIndex(focusItemIndexOnMount);
      setIsInitialSelectedState(true);
    }, [focusItemIndexOnMount, setIsInitialSelectedState]);

    const children = useMemo(() => {
      const allChildren = React.Children.toArray(originalChildren);
      return allChildren.filter(child => {
        // @ts-ignore
        if (child.type.isMenuChild) return true;
        console.error(
          "Menu child must be a menuChild item (such as MenuItem, MenuDivider, MenuTitle, etc). This child is not supported: ",
          child
        );
        return false;
      });
    }, [originalChildren]);

    const { setSubMenuIsOpenByIndex, hasOpenSubMenu, openSubMenuIndex, setOpenSubMenuIndex, resetOpenSubMenuIndex } =
      useSubMenuIndex();

    const onCloseMenu = useOnCloseMenu({
      setActiveItemIndex: onSetActiveItemIndexCallback,
      setOpenSubMenuIndex,
      onClose
    });

    useClickOutside({ ref, callback: onCloseMenu });
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
    useMouseLeave({ resetOpenSubMenuIndex, hasOpenSubMenu, ref, setActiveItemIndex: onSetActiveItemIndexCallback });

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

    const mergedRef = useMergeRefs({ refs: [ref, forwardedRef] });

    const { focusWithinProps } = useFocusWithin({
      onBlurWithin: e => {
        onCloseMenu && onCloseMenu(e);
      }
    });

    return (
      // eslint-disable-next-line jsx-a11y/aria-activedescendant-has-tabindex
      <ul
        onFocus={focusWithinProps?.onFocus}
        onBlur={focusWithinProps?.onBlur}
        id={id}
        className={cx("monday-style-menu", overrideClassName, `monday-style-menu--${size}`)}
        ref={mergedRef}
        tabIndex={tabIndex}
        aria-label={ariaLabel}
        role="menu"
        aria-activedescendant={`${id}-${activeItemIndex}`}
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
                  setActiveItemIndex,
                  menuRef: ref,
                  resetOpenSubMenuIndex,
                  isParentMenuVisible: isVisible,
                  setSubMenuIsOpenByIndex,
                  hasOpenSubMenu: index === openSubMenuIndex,
                  closeMenu: onCloseMenu,
                  menuId: id,
                  useDocumentEventListeners,
                  isInitialSelectedState,
                  shouldScrollMenu,
                  getNextSelectableIndex,
                  getPreviousSelectableIndex,
                  isUnderSubMenu: isSubMenu
                })
              : null;
          })}
      </ul>
    );
  }
);

Object.assign(Menu, {
  isMenu: true,
  supportFocusOnMount: true,
  sizes: SIZES
});

export default Menu;
