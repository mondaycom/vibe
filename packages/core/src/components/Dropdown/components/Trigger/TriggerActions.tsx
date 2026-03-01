import React from "react";
import { CloseSmall, DropdownChevronDown, DropdownChevronUp } from "@vibe/icons";
import { IconButton } from "@vibe/icon-button";
import { Flex } from "@vibe/layout";
import { Loader } from "@vibe/loader";
import styles from "./Trigger.module.scss";
import { useDropdownContext } from "../../context/DropdownContext";
import { type BaseItemData } from "../../../BaseItem";

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
    toggleMenu,
    getMenuProps,
    loading,
    clearAriaLabel,
    boxMode
  } = useDropdownContext<BaseItemData>();

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
        {loading && (
          <Loader size={iconButtonSize === "xs" ? 16 : iconButtonSize === "small" ? 20 : 24} color="secondary" />
        )}
        {hasSelection && clearable && !disabled && (
          <IconButton
            data-testid="dropdown-clear-button"
            icon={CloseSmall}
            onClick={handleClear}
            size={iconButtonSize}
            ariaLabel={clearAriaLabel}
            hideTooltip
          />
        )}
        {!boxMode && (
          <IconButton
            icon={isOpen ? DropdownChevronUp : DropdownChevronDown}
            size={iconButtonSize}
            disabled={disabled}
            ariaControls={getMenuProps().id}
            ariaExpanded={isOpen}
            ariaLabeledBy={getMenuProps().id}
            tabIndex={-1}
            onClick={() => {
              toggleMenu();
            }}
          />
        )}
      </Flex>
    </div>
  );
};

export default TriggerActions;
