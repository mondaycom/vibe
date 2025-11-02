import React from "react";
import cx from "classnames";
import { DialogContentContainer } from "../../../../DialogContentContainer";
import { useDropdownContext } from "../../context/DropdownContext";
import { type BaseListItemData } from "../../../../BaseListItem";
import MenuList from "./MenuList";
import styles from "./Menu.module.scss";

const Menu = <Item extends BaseListItemData<Record<string, unknown>>>() => {
  const { isOpen, menuWrapperClassName } = useDropdownContext<Item>();

  return (
    <DialogContentContainer
      className={cx({ [styles.menuVisible]: isOpen, [styles.menuHidden]: !isOpen }, menuWrapperClassName)}
      style={!isOpen ? { padding: 0 } : undefined}
    >
      <MenuList<Item> />
    </DialogContentContainer>
  );
};

export default Menu;
