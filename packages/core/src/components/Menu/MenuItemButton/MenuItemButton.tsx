import cx from "classnames";
import React, { FC, useRef } from "react";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import Button from "../../Button/Button";
import Tooltip from "../../Tooltip/Tooltip";
import { ButtonType } from "../../Button/Button.types";
import useMergeRef from "../../../hooks/useMergeRef";
import useMenuItemMouseEvents from "../MenuItem/hooks/useMenuItemMouseEvents";
import useMenuItemKeyboardEvents from "../MenuItem/hooks/useMenuItemKeyboardEvents";
import { SubIcon, VibeComponentProps, withStaticProps, ElementContent } from "../../../types";
import Text from "../../Text/Text";
import styles from "./MenuItemButton.module.scss";
import { TooltipPositions } from "../../Tooltip/Tooltip.types";
import { TooltipPositions as TooltipPositionsEnum } from "../../Tooltip/TooltipConstants";

export interface MenuItemButtonProps extends VibeComponentProps {
  kind?: ButtonType;
  leftIcon?: SubIcon;
  rightIcon?: SubIcon;
  index?: number;
  activeItemIndex?: number;
  disabled?: boolean;
  disableReason?: string;
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  tooltipPosition?: TooltipPositions;
  tooltipShowDelay?: number;
  resetOpenSubMenuIndex?: () => void;
  setSubMenuIsOpenByIndex?: (index: number, isOpen: boolean) => void;
  setActiveItemIndex?: (index: number) => void;
  menuRef?: React.RefObject<HTMLElement>;
  closeMenu?: () => void;
  useDocumentEventListeners?: boolean;
  children?: ElementContent | ElementContent[];
}

const MenuItemButton: FC<MenuItemButtonProps> & {
  kinds?: typeof Button.kinds;
  isSelectable?: boolean;
  isMenuChild?: boolean;
  tooltipPositions?: typeof TooltipPositionsEnum;
} = ({
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

export default withStaticProps(MenuItemButton, {
  kinds: Button.kinds,
  tooltipPositions: TooltipPositionsEnum
});
