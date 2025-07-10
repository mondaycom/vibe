import React from "react";
import { CloseSmall, DropdownChevronDown, DropdownChevronUp } from "@vibe/icons";
import { IconButton } from "../../../IconButton";
import { Flex } from "../../../Flex";
import styles from "./Trigger.module.scss";
import { useDropdownContext } from "../../context/DropdownContext";
import { BaseListItemData } from "../../../BaseListItem";

const sizeMap = {
  large: "medium",
  medium: "small",
  small: "xs"
} as const;

const TriggerActions = () => {
  const {
    isOpen,
    reset,
    contextOnClear,
    size,
    disabled,
    clearable,
    readOnly,
    multi,
    selectedItem,
    selectedItems = [],
    toggleMenu
  } = useDropdownContext<BaseListItemData>();

  const hasSelection = multi ? selectedItems?.length > 0 : !!selectedItem;
  const iconButtonSize = sizeMap[size] || "small";

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (contextOnClear) {
      contextOnClear();
    } else {
      reset();
    }
  };

  if (readOnly) {
    return null;
  }

  return (
    <div
      onKeyDown={e => {
        e.stopPropagation();
      }}
    >
      <Flex className={styles.actionsWrapper}>
        {hasSelection && clearable && !disabled && (
          <IconButton
            data-testid="dropdown-clear-button"
            icon={CloseSmall}
            onClick={handleClear}
            size={iconButtonSize}
            ariaLabel="Clear selection"
          />
        )}
        <IconButton
          icon={isOpen ? DropdownChevronUp : DropdownChevronDown}
          size={iconButtonSize}
          disabled={disabled}
          onClick={() => {
            toggleMenu();
          }}
        />
      </Flex>
    </div>
  );
};

export default TriggerActions;
