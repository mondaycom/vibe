import React from "react";
import cx from "classnames";
import { DialogContentContainer } from "@vibe/core";
import { useDropdownContext } from "../../context/DropdownContext";
import { type BaseItemData } from "../../../../BaseItem";
import MenuList from "./MenuList";
import styles from "./Menu.module.scss";

const Menu = <Item extends BaseItemData<Record<string, unknown>>>() => {
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
