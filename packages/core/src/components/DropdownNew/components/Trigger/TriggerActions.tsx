import React from "react";
import { CloseSmall, DropdownChevronDown, DropdownChevronUp } from "@vibe/icons";
import { IconButton } from "../../../IconButton";
import { Flex } from "../../../Flex";
import styles from "./Trigger.module.scss"; // Assuming styles for actionsWrapper are here
import { useDropdownContext } from "../../context/DropdownContext";
import { BaseListItemData } from "../../../BaseListItem";

const TriggerActions = () => {
  const {
    isOpen,
    getToggleButtonProps,
    reset,
    contextOnClear,
    size,
    disabled,
    clearable,
    readOnly,
    multi,
    selectedItem,
    selectedItems = []
  } = useDropdownContext<BaseListItemData>();

  const hasSelection = multi ? selectedItems?.length > 0 : !!selectedItem;

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
    <Flex className={styles.actionsWrapper}>
      {hasSelection && clearable && !disabled && (
        <IconButton data-testid="dropdown-clear-button" icon={CloseSmall} onClick={handleClear} size={size} />
      )}
      <IconButton
        icon={isOpen ? DropdownChevronUp : DropdownChevronDown}
        {...getToggleButtonProps({ disabled })}
        size={size}
        disabled={disabled}
      />
    </Flex>
  );
};

export default TriggerActions;
