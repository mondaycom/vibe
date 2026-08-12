import React from "react";
import cx from "classnames";
import { DialogContentContainer } from "@vibe/dialog";
import { useDropdownContext } from "../../context/DropdownContext";
import { type BaseItemData } from "../../../BaseItem";
import MenuList from "./MenuList";
import styles from "./Menu.module.scss";

const Menu = <Item extends BaseItemData<Record<string, unknown>>>() => {
  const { isOpen, menuWrapperClassName } = useDropdownContext<Item>();

  return (
    <DialogContentContainer
      size="small"
      className={cx({ [styles.menuVisible]: isOpen, [styles.menuHidden]: !isOpen }, styles.menu, menuWrapperClassName)}
    >
      <MenuList<Item> />
    </DialogContentContainer>
  );
};

export default Menu;
