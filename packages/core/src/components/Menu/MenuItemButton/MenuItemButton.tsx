import cx from "classnames";
import React, { useRef } from "react";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import { Button, type ButtonType } from "@vibe/button";
import Tooltip from "../../Tooltip/Tooltip";
import useMergeRef from "../../../hooks/useMergeRef";
import useMenuItemMouseEvents from "../MenuItem/hooks/useMenuItemMouseEvents";
import useMenuItemKeyboardEvents from "../MenuItem/hooks/useMenuItemKeyboardEvents";
import { type VibeComponentProps, type ElementContent, withStaticPropsWithoutForwardRef } from "../../../types";
import { type SubIcon } from "@vibe/icon";
import Text from "../../Text/Text";
import styles from "./MenuItemButton.module.scss";
import { type TooltipPositions } from "../../Tooltip";
import { TooltipPositions as TooltipPositionsEnum } from "../../Tooltip/TooltipConstants";

export interface MenuItemButtonProps extends VibeComponentProps {
  /**
   * The style variant of the button.
   */
  kind?: ButtonType;
  /**
   * Icon displayed on the left side of the button.
   */
  leftIcon?: SubIcon;
  /**
   * Icon displayed on the right side of the button.
   */
  rightIcon?: SubIcon;
  /**
   * The index of the menu item in the menu.
   */
  index?: number;
  /**
   * The index of the currently active menu item.
   */
  activeItemIndex?: number;
  /**
   * If true, the button is disabled.
   */
  disabled?: boolean;
  /**
   * The reason why the button is disabled, displayed as a tooltip.
   */
  disableReason?: string;
  /**
   * Callback fired when the button is clicked.
   */
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  /**
   * The position of the tooltip.
   */
  tooltipPosition?: TooltipPositions;
  /**
   * The delay in milliseconds before the tooltip appears.
   */
  tooltipShowDelay?: number;
  /**
   * Callback to reset the open submenu index.
   */
  resetOpenSubMenuIndex?: () => void;
  /**
   * Callback to open or close a submenu by index.
   */
  setSubMenuIsOpenByIndex?: (index: number, isOpen: boolean) => void;
  /**
   * Callback to set the active item index.
   */
  setActiveItemIndex?: (index: number) => void;
  /**
   * Reference to the menu container.
   */
  menuRef?: React.RefObject<HTMLElement>;
  /**
   * Function to close the menu.
   */
  closeMenu?: () => void;
  /**
   * If true, event listeners are added at the document level.
   */
  useDocumentEventListeners?: boolean;
  /**
   * The content of the button.
   */
  children?: ElementContent | ElementContent[];
}

const MenuItemButton = ({
  className,
  kind = "primary",
  leftIcon = null,
  rightIcon = null,
  disabled = false,
  disableReason,
  index,
  activeItemIndex = -1,
  onClick,
  tooltipPosition = "right",
  tooltipShowDelay = 300,
  children,
  resetOpenSubMenuIndex,
  setSubMenuIsOpenByIndex,
  setActiveItemIndex,
  menuRef,
  closeMenu,
  useDocumentEventListeners,
  id,
  "data-testid": dataTestId
}: MenuItemButtonProps) => {
  const ref = useRef(null);
  const referenceElementRef = useRef(null);
  const mergedRef = useMergeRef(ref, referenceElementRef);

  const shouldShowTooltip = disabled && disableReason;
  const tooltipContent = disableReason;

  const isActive = activeItemIndex === index;

  const isMouseEnter = useMenuItemMouseEvents({
    ref,
    resetOpenSubMenuIndex,
    setSubMenuIsOpenByIndex,
    isActive,
    setActiveItemIndex,
    index,
    hasChildren: false
  });

  const { onClickCallback } = useMenuItemKeyboardEvents({
    onClick,
    disabled,
    isActive,
    index,
    setActiveItemIndex,
    hasChildren: false,
    shouldShowSubMenu: false,
    setSubMenuIsOpenByIndex,
    menuRef,
    isMouseEnter,
    closeMenu,
    useDocumentEventListeners
  });

  return (
    <Tooltip
      content={shouldShowTooltip ? tooltipContent : null}
      position={tooltipPosition}
      showDelay={tooltipShowDelay}
    >
      <Text
        type="text2"
        element="li"
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MENU_ITEM_BUTTON, id)}
        id={id}
        className={cx(styles.itemButton, className)}
        ref={mergedRef}
        role="menuitem"
        aria-current={isActive}
      >
        <Button
          className={styles.buttonComponent}
          active={isActive}
          disabled={disabled}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          onClick={onClickCallback}
          kind={kind}
          size="small"
          blurOnMouseUp={false}
        >
          <div className={styles.content}>{children}</div>
        </Button>
      </Text>
    </Tooltip>
  );
};

Object.assign(MenuItemButton, {
  isSelectable: true,
  isMenuChild: true
});

interface MenuItemButtonStaticProps {
  kinds: typeof Button.kinds;
  tooltipPositions: typeof TooltipPositionsEnum;
}

export default withStaticPropsWithoutForwardRef<MenuItemButtonProps, MenuItemButtonStaticProps>(MenuItemButton, {
  kinds: Button.kinds,
  tooltipPositions: TooltipPositionsEnum
});
