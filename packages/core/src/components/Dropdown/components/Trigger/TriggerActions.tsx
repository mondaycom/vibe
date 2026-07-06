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
    boxMode,
    label,
    getLabelProps,
    "aria-label": ariaLabel,
    inputAriaLabel
  } = useDropdownContext<BaseItemData>();

  const hasSelection = multi ? selectedItems?.length > 0 : !!selectedItem;
  const iconButtonSize = sizeMap[size] || "small";

  // The chevron needs a real accessible name (WCAG 4.1.2): the visible label via aria-labelledby, or an
  // aria-label string when there's none. (Referencing the listbox/input wouldn't compute a usable name.)
  const chevronLabelledBy = label ? getLabelProps().id : undefined;
  const chevronAriaLabel = label ? undefined : ariaLabel || inputAriaLabel;

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
            aria-label={clearAriaLabel}
            hideTooltip
          />
        )}
        {!boxMode && (
          <IconButton
            icon={isOpen ? DropdownChevronUp : DropdownChevronDown}
            size={iconButtonSize}
            disabled={disabled}
            aria-controls={getMenuProps().id}
            aria-expanded={isOpen}
            aria-labelledby={chevronLabelledBy}
            aria-label={chevronAriaLabel}
            // The accessible name is for assistive tech only — don't surface it as a hover tooltip.
            hideTooltip
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
