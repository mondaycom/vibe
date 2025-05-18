import React, { useMemo, useRef, forwardRef, useState } from "react";
import cx from "classnames";
import { DialogContentContainer } from "../DialogContentContainer";
import { BaseList } from "../BaseList";
import styles from "./Dropdown.module.scss";
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
import Dialog from "../Dialog/Dialog";
import { matchWidthModifier } from "./utils/dropdown-modifiers";
import Trigger from "./components/Trigger/Trigger";

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
      ariaLabel,
      inputAriaLabel,
      menuAriaLabel,
      defaultValue,
      inputValue: inputValueProp,
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
    const dropdownMergedRef = useMergeRef(ref, dropdownRef);

    const [isFocused, setIsFocused] = useState(false);
    const [multiSelectedItems, setMultiSelectedItems] = useState<Item[]>((defaultValue as Item[]) ?? []);

    const singleDropdown = useDropdownCombobox<Item>(
      options,
      isMenuOpen,
      autoFocus,
      closeMenuOnSelect,
      defaultValue as Item,
      inputValueProp,
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
      isMenuOpen,
      autoFocus,
      defaultValue as Item[],
      inputValueProp,
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
      defaultValue as Item,
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
      isMenuOpen,
      autoFocus,
      defaultValue as Item[],
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

    const dialogContent = useMemo(
      () => (
        <DialogContentContainer>
          <BaseList<Item>
            size={size}
            options={filteredOptions}
            selectedItems={multi ? selectedItems : [selectedItem]}
            highlightedIndex={highlightedIndex}
            menuAriaLabel={menuAriaLabel}
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
        maxMenuHeight,
        menuAriaLabel
      ]
    );

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
          aria-label={ariaLabel}
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
            <Trigger
              getToggleButtonProps={getToggleButtonProps}
              getInputProps={getInputProps}
              isOpen={isOpen}
              inputValue={inputValue}
              selectedItem={selectedItem as Item | undefined | null}
              selectedItems={selectedItems as Item[] | undefined}
              reset={reset}
              autoFocus={autoFocus}
              disabled={disabled}
              readOnly={readOnly}
              placeholder={placeholder}
              clearable={clearable}
              searchable={searchable}
              multi={multi}
              multiline={multiline}
              size={size}
              isFocused={isFocused}
              onClear={() => {
                reset();
                onClear?.();
                if (multi) {
                  setMultiSelectedItems?.([]);
                } else {
                  onChange?.(null);
                }
              }}
              onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                setIsFocused(true);
                onFocus?.(e);
              }}
              onBlur={() => {
                setIsFocused(false);
                onBlur?.();
              }}
              onKeyDown={onKeyDown}
              onOptionRemove={(item: Item) => {
                if (removeSelectedItem) {
                  removeSelectedItem(item);
                }
                onOptionRemove?.(item);
              }}
              valueRenderer={valueRenderer as any}
              inputAriaLabel={inputAriaLabel}
              highlightedIndex={highlightedIndex}
            />
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
