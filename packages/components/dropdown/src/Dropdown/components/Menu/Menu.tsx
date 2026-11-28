import React from "react";
import cx from "classnames";
import { DialogContentContainer } from "@vibe/dialog";
import { useDropdownContext } from "../../context/DropdownContext";
import { type BaseItemData } from "@vibe/base-list";
import MenuList from "./MenuList";
import MenuSearch from "../MenuSearch/MenuSearch";
import styles from "./Menu.module.scss";

const Menu = <Item extends BaseItemData<Record<string, unknown>>>() => {
  const { isOpen, menuWrapperClassName, searchInMenu, getMenuProps, menuAriaLabel } = useDropdownContext<Item>();

  if (!searchInMenu) {
    return (
      <DialogContentContainer
        className={cx({ [styles.menuVisible]: isOpen, [styles.menuHidden]: !isOpen }, menuWrapperClassName)}
        style={!isOpen ? { padding: 0 } : undefined}
      >
        <MenuList<Item> />
      </DialogContentContainer>
    );
  }

  // The search field and the listbox share one container, and downshift's menu ref is attached to it,
  // so interacting with the search (e.g. its clear button) doesn't count as an outside click.
  const { ref: menuRef, ...listboxProps } = getMenuProps({ "aria-label": menuAriaLabel });

  return (
    <DialogContentContainer
      className={cx({ [styles.menuVisible]: isOpen, [styles.menuHidden]: !isOpen }, menuWrapperClassName)}
      style={!isOpen ? { padding: 0 } : undefined}
    >
      <div ref={menuRef} className={cx(styles.searchMenu, { [styles.closed]: !isOpen })}>
        <div className={styles.menuSearch}>
          <MenuSearch />
        </div>
        <MenuList<Item> listboxProps={listboxProps} />
      </div>
    </DialogContentContainer>
  );
};

export default Menu;
