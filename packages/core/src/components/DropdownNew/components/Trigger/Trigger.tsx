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
import { useDropdownContext } from "../../context/DropdownContext";

const Trigger = () => {
  const {
    isOpen,
    inputValue,
    selectedItem,
    selectedItems = [],
    getToggleButtonProps,
    getInputProps,
    reset,
    contextOnClear,
    contextOnOptionRemove,
    searchable,
    multi,
    multiline,
    disabled,
    readOnly,
    size,
    optionRenderer: _optionRenderer,
    valueRenderer,
    placeholder,
    autoFocus,
    inputAriaLabel,
    isFocused,
    clearable
  } = useDropdownContext<BaseListItemData>();

  const hasSelection = multi ? selectedItems.length > 0 : !!selectedItem;

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (contextOnClear) {
      contextOnClear();
    } else {
      reset();
    }
  };

  const renderSearchableInput = () => {
    if (!searchable) return null;
    return (
      <BaseInput
        style={{ padding: "0" }}
        {...getInputProps({
          ...(inputAriaLabel && { "aria-label": inputAriaLabel }),
          placeholder: hasSelection ? "" : placeholder
        })}
        value={inputValue || ""}
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

  return (
    <Flex
      justify="space-between"
      align="start"
      className={styles.triggerWrapper}
      {...(!searchable ? getToggleButtonProps({ disabled, onClick: (e: React.MouseEvent) => e.preventDefault() }) : {})}
    >
      <div style={{ flexGrow: 1, position: "relative", minWidth: "1px" }}>
        {multi && hasSelection && (
          <>
            {!multiline ? (
              <MultiSelectedValues
                selectedItems={selectedItems}
                onRemove={item => {
                  contextOnOptionRemove?.(item as BaseListItemData);
                }}
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
                          contextOnOptionRemove?.(item as BaseListItemData);
                        }}
                        noMargin
                      />
                    </div>
                    {index === selectedItems.length - 1 && searchable && renderSearchableInput()}
                  </Flex>
                ))}
                {selectedItems.length === 0 && searchable && renderSearchableInput()}
              </Flex>
            )}
          </>
        )}

        {!multi && !searchable && !selectedItem && placeholder && (
          <Text color="secondary" className={styles.placeholderText} {...getToggleButtonProps({ disabled })}>
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
              valueRenderer(selectedItem)
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
