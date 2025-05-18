import React from "react";
import cx from "classnames";
import { BaseInput } from "../../../BaseInput";
import { CloseSmall, DropdownChevronDown, DropdownChevronUp } from "@vibe/icons";
import { IconButton } from "../../../IconButton";
import { Flex } from "../../../Flex";
import { Text } from "../../../Text";
import { BaseListItem, BaseListItemData } from "../../../BaseListItem";
import MultiSelectedValues from "../MultiSelectedValues/MultiSelectedValues";
import { Chips } from "../../../Chips";
import styles from "./Trigger.module.scss";
import { DropdownSizes } from "../../Dropdown.types";

// TODO: Import necessary Downshift prop getters and other types from a future DropdownContext
interface TriggerDownshiftProps {
  getToggleButtonProps: (options?: any) => any; // Simplified for now
  getInputProps: (options?: any) => any; // Simplified for now
  // Callbacks from context
  reset: () => void;
  // State from context
  isOpen: boolean;
  inputValue?: string;
  highlightedIndex: number;
  selectedItem?: BaseListItemData | null;
  selectedItems?: BaseListItemData[];
  // From main Dropdown props
  autoFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  clearable?: boolean;
  searchable?: boolean;
  multi?: boolean;
  multiline?: boolean;
  size?: DropdownSizes;
  isFocused?: boolean; // To manage styles
  // Callbacks from main Dropdown props
  onClear?: () => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onOptionRemove?: (item: BaseListItemData) => void;
  // Renderers from main Dropdown props
  valueRenderer?: (
    item: BaseListItemData,
    _itemProps: Partial<React.HTMLAttributes<HTMLElement>> // itemProps often unused in simple renderers
  ) => JSX.Element;
  inputAriaLabel?: string;
}

const Trigger = (props: TriggerDownshiftProps) => {
  const {
    getToggleButtonProps,
    getInputProps,
    isOpen,
    inputValue,
    selectedItem,
    selectedItems = [],
    reset,
    autoFocus,
    disabled,
    readOnly,
    placeholder,
    clearable,
    searchable,
    multi,
    multiline,
    size,
    isFocused,
    onClear,
    onFocus,
    onBlur,
    onKeyDown,
    onOptionRemove,
    valueRenderer,
    inputAriaLabel
  } = props;

  const hasSelection = multi ? selectedItems.length > 0 : !!selectedItem;

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent a click on clear from opening/closing the dropdown
    reset();
    onClear?.();
    // TODO: For multi-select, this needs to clear multiSelectedItems state (likely via context)
    // For single-select, it needs to call onChange(null) (likely via context)
  };

  const renderSearchableInput = () => {
    if (!searchable) return null;
    return (
      <BaseInput
        style={{ padding: "0" }}
        {...getInputProps({
          ...(inputAriaLabel && { "aria-label": inputAriaLabel }),
          value: inputValue,
          placeholder: hasSelection ? "" : placeholder,
          onFocus,
          onBlur,
          onKeyDown
        })}
        autoFocus={autoFocus}
        size={size}
        className={cx(styles.inputWrapper, {
          [styles.hasSelected]: !multi && selectedItem && !inputValue
        })}
        disabled={disabled}
        readOnly={readOnly}
      />
    );
  };

  // Downshift requires the toggle button to always be in the DOM.
  // We will use Flex as the main wrapper and apply getToggleButtonProps to it
  // if the dropdown is not searchable. If it IS searchable, the input itself often handles toggling.
  // For simplicity and Downshift compliance, a primary clickable element is best.
  // Let's refine this: the main interaction surface should get toggleButtonProps.

  return (
    <Flex
      justify="space-between"
      align="start"
      className={styles.triggerWrapper} // A new class for overall trigger styling
      {...(!searchable ? getToggleButtonProps({ disabled }) : {})}
    >
      <div style={{ flexGrow: 1, position: "relative", minWidth: "1px" }}>
        {multi && hasSelection && (
          <>
            {!multiline ? (
              <MultiSelectedValues
                selectedItems={selectedItems}
                onRemove={item => {
                  // This will eventually call a function from context to remove item
                  onOptionRemove?.(item as BaseListItemData);
                }}
                // Conditionally pass renderInput only if searchable, or style it to be hidden
                {...(searchable && { renderInput: () => renderSearchableInput() })}
              />
            ) : (
              <Flex gap="xs" wrap>
                {selectedItems.map((item, index) => (
                  <Flex key={String(item.id ?? item.value ?? index)}>
                    <div style={{ flexShrink: 0 }}>
                      <Chips
                        label={item.label}
                        onDelete={() => {
                          // This will eventually call a function from context
                          onOptionRemove?.(item as BaseListItemData);
                        }}
                        noMargin
                      />
                    </div>
                    {/* Render input after the last chip in multiline searchable mode */}
                    {index === selectedItems.length - 1 && searchable && renderSearchableInput()}
                  </Flex>
                ))}
                {/* If multiline and searchable but no items yet, render input */}
                {selectedItems.length === 0 && searchable && renderSearchableInput()}
              </Flex>
            )}
          </>
        )}

        {!multi && !searchable && !selectedItem && placeholder && (
          <Text color="secondary" className={styles.placeholderText}>
            {placeholder}
          </Text>
        )}

        {!multi && searchable && renderSearchableInput()}

        {!multi && !inputValue && selectedItem && (
          <div
            className={cx(styles.selectedItem, {
              [styles.faded]: isFocused && searchable,
              [styles.small]: size === "small"
            })}
          >
            {valueRenderer ? (
              valueRenderer(selectedItem, {})
            ) : (
              <BaseListItem
                size={size}
                readOnly
                item={{
                  ...selectedItem,
                  startElement: selectedItem.startElement?.type === "indent" ? undefined : selectedItem.startElement
                }}
              />
            )}
          </div>
        )}
        {multi && !hasSelection && searchable && !multiline && renderSearchableInput()}
      </div>

      {!readOnly && (
        <Flex className={styles.actionsWrapper}>
          {hasSelection && clearable && (
            <IconButton data-testid="dropdown-clear-button" icon={CloseSmall} onClick={handleClear} size={size} />
          )}
          <IconButton
            icon={isOpen ? DropdownChevronUp : DropdownChevronDown}
            {...getToggleButtonProps({ disabled })}
            size={size}
            disabled={disabled}
          />
        </Flex>
      )}
    </Flex>
  );
};

export default Trigger;
