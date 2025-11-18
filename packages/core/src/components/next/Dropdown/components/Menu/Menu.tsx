import React from "react";
import cx from "classnames";
import { DialogContentContainer } from "@vibe/dialog";
import { BaseList } from "../../../../BaseList";
import { useDropdownContext } from "../../context/DropdownContext";
import { type BaseListItemData } from "../../../../BaseListItem";
import styles from "./Menu.module.scss";

const Menu = <Item extends BaseListItemData<Record<string, unknown>>>() => {
  const {
    isOpen,
    filteredOptions,
    highlightedIndex,
    getMenuProps,
    getItemProps,
    optionRenderer,
    menuRenderer,
    size,
    withGroupDivider,
    stickyGroupTitle,
    dir,
    noOptionsMessage,
    maxMenuHeight,
    onScroll,
    menuAriaLabel,
    selectedItem,
    selectedItems,
    menuWrapperClassName,
    multi
  } = useDropdownContext<Item>();

  const currentSelection = selectedItems?.length > 0 ? selectedItems : selectedItem ? [selectedItem] : [];

  const enhancedGetMenuProps = (props?: Record<string, unknown>) => {
    const baseProps = getMenuProps?.(props) || {};
    return multi ? { ...baseProps, "aria-multiselectable": "true" } : baseProps;
  };

  return (
    <DialogContentContainer
      className={cx({ [styles.menuVisible]: isOpen, [styles.menuHidden]: !isOpen }, menuWrapperClassName)}
      style={!isOpen ? { padding: 0 } : undefined}
    >
      <BaseList<Item>
        size={size}
        options={filteredOptions}
        selectedItems={currentSelection}
        highlightedIndex={highlightedIndex}
        menuAriaLabel={menuAriaLabel}
        getMenuProps={enhancedGetMenuProps}
        getItemProps={getItemProps}
        withGroupDivider={withGroupDivider}
        stickyGroupTitle={stickyGroupTitle}
        dir={dir}
        itemRenderer={optionRenderer}
        noOptionsMessage={noOptionsMessage}
        renderOptions={isOpen}
        onScroll={onScroll}
        maxMenuHeight={maxMenuHeight}
        menuRenderer={menuRenderer}
      />
    </DialogContentContainer>
  );
};

export default Menu;
