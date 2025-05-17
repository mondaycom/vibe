import React, { useMemo, useRef, forwardRef, useState, useCallback } from "react";
import cx from "classnames";
import { DialogContentContainer } from "../DialogContentContainer";
import { BaseInput } from "../BaseInput";
import { CloseSmall, DropdownChevronDown, DropdownChevronUp } from "@vibe/icons";
import { IconButton } from "../IconButton";
import { Flex } from "../Flex";
import { BaseList } from "../BaseList";
import styles from "./Dropdown.module.scss";
import { BaseListItem } from "../BaseListItem";
import { BaseDropdownProps } from "./Dropdown.types";
import useDropdownCombobox from "./hooks/useDropdownCombobox";
import useDropdownMultiCombobox from "./hooks/useDropdownMultiCombobox";
import useDropdownSelect from "./hooks/useDropdownSelect";
import useDropdownMultiSelect from "./hooks/useDropdownMultiSelect";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import useMergeRef from "../../hooks/useMergeRef";
import FieldLabel from "../FieldLabel/FieldLabel";
import Text from "../Text/Text";
import { BaseListItemData } from "../BaseListItem";
import MultiSelectedValues from "./components/MultiSelectedValues";
import { Chips } from "../Chips";
import Dialog from "../Dialog/Dialog";
import { Modifier } from "react-popper";

const Dropdown = forwardRef(
  <Item extends BaseListItemData<Record<string, unknown>>>(
    {
      options,
      size,
      dir,
      optionRenderer,
      valueRenderer,
      noOptionsMessage,
      placeholder = "",
      withGroupDivider,
      stickyGroupTitle,
      disabled,
      readOnly,
      error,
      label,
      helperText,
      required,
      maxMenuHeight,
      isMenuOpen,
      closeMenuOnSelect = true,
      autoFocus,
      clearable = true,
      showSelectedOptions = false,
      searchable = true,
      filterOption,
      onBlur,
      onChange,
      onClear,
      onFocus,
      onInputChange,
      onKeyDown,
      onMenuOpen,
      onMenuClose,
      onOptionSelect,
      onOptionRemove,
      onScroll,
      multi,
      multiline,
      className,
      id,
      "data-testid": dataTestId
    }: BaseDropdownProps<Item>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const dropdownRef = useRef<HTMLInputElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const dropdownMergedRef = useMergeRef(ref, dropdownRef);

    const [isFocused, setIsFocused] = useState(false);
    const [multiSelectedItems, setMultiSelectedItems] = useState<Item[]>([]);

    const singleDropdown = useDropdownCombobox<Item>(
      options,
      autoFocus,
      isMenuOpen,
      closeMenuOnSelect,
      onChange,
      onInputChange,
      onMenuClose,
      onMenuOpen,
      onOptionSelect,
      filterOption,
      showSelectedOptions
    );

    const multiDropdown = useDropdownMultiCombobox<Item>(
      options,
      multiSelectedItems,
      setMultiSelectedItems,
      autoFocus,
      onChange,
      onInputChange,
      onMenuClose,
      onMenuOpen,
      onOptionSelect,
      filterOption,
      showSelectedOptions
    );

    const singleSelect = useDropdownSelect<Item>(
      options,
      autoFocus,
      isMenuOpen,
      onChange,
      onMenuOpen,
      onMenuClose,
      onOptionSelect,
      showSelectedOptions,
      filterOption
    );

    const multiSelect = useDropdownMultiSelect<Item>(
      options,
      multiSelectedItems,
      setMultiSelectedItems,
      autoFocus,
      onChange,
      onMenuOpen,
      onMenuClose,
      onOptionSelect,
      showSelectedOptions,
      filterOption
    );

    const {
      isOpen,
      inputValue,
      highlightedIndex,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getInputProps,
      getItemProps,
      reset,
      filteredOptions
    } = useMemo(() => {
      if (searchable) {
        return multi ? multiDropdown : singleDropdown;
      }
      return multi ? multiSelect : singleSelect;
    }, [searchable, multi, multiDropdown, singleDropdown, multiSelect, singleSelect]);

    const selectedItem = !multi ? (searchable ? singleDropdown.selectedItem : singleSelect.selectedItem) : undefined;
    const selectedItems = multi ? (searchable ? multiDropdown.selectedItems : multiSelect.selectedItems) : undefined;
    const removeSelectedItem = multi
      ? searchable
        ? multiDropdown.removeSelectedItem
        : multiSelect.removeSelectedItem
      : undefined;

    const matchWidthModifier: Modifier<any>[] = useMemo(
      () => [
        {
          name: "matchWidth",
          enabled: true,
          phase: "beforeWrite",
          requires: ["computeStyles"],
          fn: ({ state }) => {
            if (state.rects && state.rects.reference) {
              state.styles.popper.width = `${state.rects.reference.width}px`;
            }
          }
        }
      ],
      []
    );

    const renderInput = useCallback(() => {
      if (!searchable) return null;
      return (
        <BaseInput
          style={{ padding: "0" }}
          {...getInputProps({
            value: inputValue,
            placeholder: (multi && selectedItems?.length) || (!multi && selectedItem) ? "" : placeholder,
            onFocus: e => {
              setIsFocused(true);
              onFocus?.(e);
            },
            onBlur: () => {
              setIsFocused(false);
              onBlur?.();
            },
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
    }, [
      getInputProps,
      autoFocus,
      disabled,
      readOnly,
      selectedItem,
      selectedItems,
      inputValue,
      placeholder,
      onFocus,
      onBlur,
      onKeyDown,
      size,
      multi,
      searchable
    ]);

    const dialogContent = useMemo(
      () => (
        <DialogContentContainer>
          <BaseList<Item>
            size={size}
            options={filteredOptions}
            selectedItems={multi ? selectedItems : [selectedItem]}
            highlightedIndex={highlightedIndex}
            getMenuProps={getMenuProps}
            getItemProps={getItemProps}
            withGroupDivider={withGroupDivider}
            stickyGroupTitle={stickyGroupTitle}
            dir={dir}
            itemRenderer={optionRenderer}
            noOptionsMessage={noOptionsMessage}
            renderOptions={isOpen}
            onScroll={onScroll}
            maxMenuHeight={maxMenuHeight}
          />
        </DialogContentContainer>
      ),
      [
        size,
        filteredOptions,
        multi,
        selectedItems,
        selectedItem,
        highlightedIndex,
        getMenuProps,
        getItemProps,
        withGroupDivider,
        stickyGroupTitle,
        dir,
        optionRenderer,
        noOptionsMessage,
        isOpen,
        onScroll,
        maxMenuHeight
      ]
    );

    const renderDropdownTrigger = () => {
      return (
        <Flex justify="space-between" ref={triggerRef} align="start">
          <div style={{ flexGrow: 1, position: "relative", minWidth: "1px" }}>
            {multi && selectedItems.length > 0 && (
              <>
                {!multiline ? (
                  <MultiSelectedValues
                    selectedItems={selectedItems}
                    onRemove={item => {
                      removeSelectedItem(item);
                      onOptionRemove?.(item);
                    }}
                    {...(searchable ? { renderInput: () => renderInput() } : {})}
                  />
                ) : (
                  <Flex gap="xs" wrap>
                    {selectedItems.map((item, index) => (
                      <Flex key={index}>
                        <div style={{ flexShrink: 0 }}>
                          <Chips label={item.label} onDelete={() => removeSelectedItem(item)} noMargin />
                        </div>
                        {index === selectedItems.length - 1 && searchable && renderInput()}
                      </Flex>
                    ))}
                  </Flex>
                )}
              </>
            )}
            {!searchable && !selectedItem && !selectedItems?.length && placeholder && (
              <Text color="secondary" {...getToggleButtonProps()}>
                {placeholder}
              </Text>
            )}
            {multi && selectedItems.length === 0 && searchable && renderInput()}
            {!multi && searchable && renderInput()}
            {!multi && !inputValue && selectedItem && (
              <div
                className={cx(styles.selectedItem, {
                  [styles.faded]: isFocused,
                  [styles.small]: size === "small"
                })}
              >
                <BaseListItem
                  size={size}
                  readOnly
                  itemRenderer={valueRenderer}
                  item={{
                    ...selectedItem,
                    startElement: selectedItem.startElement?.type === "indent" ? undefined : selectedItem.startElement
                  }}
                />
              </div>
            )}
          </div>
          {!readOnly && (
            <Flex>
              {(selectedItems?.length > 0 || selectedItem) && clearable && (
                <IconButton
                  data-testid="dropdown-clear-button"
                  icon={CloseSmall}
                  onClick={() => {
                    reset();
                    onClear?.();
                    if (multi) {
                      setMultiSelectedItems?.([]);
                    } else {
                      onChange?.(null);
                    }
                  }}
                  size={size}
                />
              )}
              <IconButton
                icon={isOpen ? DropdownChevronUp : DropdownChevronDown}
                {...getToggleButtonProps()}
                size={size}
                disabled={disabled}
              />
            </Flex>
          )}
        </Flex>
      );
    };

    return (
      <div dir={dir}>
        {label && <FieldLabel labelText={label} required={required} {...getLabelProps()} />}
        <div
          ref={dropdownMergedRef}
          className={cx(styles.wrapper, className, {
            [styles.disabled]: disabled,
            [styles.readOnly]: readOnly,
            [styles.error]: error,
            [styles.active]: isFocused
          })}
          id={id}
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.DROPDOWN, id)}
        >
          <Dialog
            open={isOpen}
            useDerivedStateFromProps
            position="bottom-start"
            moveBy={{ main: 4, secondary: 0 }}
            observeContentResize={true}
            showTrigger={[]}
            hideTrigger={[]}
            onClickOutside={() => {
              if (isOpen) {
                reset();
              }
            }}
            modifiers={matchWidthModifier}
            content={dialogContent}
          >
            {renderDropdownTrigger()}
          </Dialog>
        </div>
        {helperText && (
          <Text color={error ? "negative" : "secondary"} className={styles.helperText}>
            {helperText}
          </Text>
        )}
      </div>
    );
  }
);

export default Dropdown as <Item extends BaseListItemData<Record<string, unknown>>>(
  props: BaseDropdownProps<Item> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => React.ReactElement;
