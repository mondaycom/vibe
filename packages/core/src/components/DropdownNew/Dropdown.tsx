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
import usePopover from "../../hooks/usePopover";
import { Placement } from "../../hooks/popoverConstants";
import { BaseDropdownProps } from "./Dropdown.types";
import useDropdownCombobox from "./hooks/useDropdownCombobox";
import useDropdownMultiCombobox from "./hooks/useDropdownMultiCombobox";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import useMergeRef from "../../hooks/useMergeRef";
import FieldLabel from "../FieldLabel/FieldLabel";
import Text from "../Text/Text";
import { BaseListItemData } from "../BaseListItem/BaseListItem.types";
import MultiSelectedValues from "./components/MultiSelectedValues";
import { Chips } from "../Chips";

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
    const listWrapperRef = useRef<HTMLDivElement>(null);
    const dropdownMergedRef = useMergeRef(ref, dropdownRef);

    const [isFocused, setIsFocused] = useState(false);
    const [multiSelectedItems, setMultiSelectedItems] = useState<Item[]>([]);

    const handleSingleChange = (selectedItem: Item | null) => {
      if (!multi && onChange) {
        (onChange as (item: Item | null) => void)(selectedItem);
      }
    };

    const singleDropdown = useDropdownCombobox<Item>(
      options,
      autoFocus,
      isMenuOpen,
      closeMenuOnSelect,
      handleSingleChange,
      onInputChange,
      onMenuClose,
      onMenuOpen,
      onOptionSelect
    );

    const multiDropdown = useDropdownMultiCombobox<Item>(
      options,
      multiSelectedItems,
      setMultiSelectedItems,
      autoFocus,
      multi ? onChange : undefined,
      onInputChange,
      onMenuClose,
      onMenuOpen,
      onOptionSelect
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
      return multi ? multiDropdown : singleDropdown;
    }, [multi, multiDropdown, singleDropdown]);

    const selectedItem = !multi ? singleDropdown.selectedItem : undefined;
    const selectedItems = multi ? multiDropdown.selectedItems : undefined;
    const removeSelectedItem = multi ? multiDropdown.removeSelectedItem : undefined;

    const popoverOffset = useMemo(() => [0, 4] as [number, number], []);

    const { styles: popoverStyles, attributes: popoverAttributes } = usePopover(
      triggerRef.current,
      listWrapperRef.current,
      {
        isOpen,
        placement: "bottom" as Placement,
        offset: popoverOffset,
        observeContentResize: true,
        observeReferenceResize: true,
        fallbackPlacements: ["top" as Placement]
      }
    );

    const renderInput = useCallback(
      (isMulti = false) => (
        <BaseInput
          style={{ padding: "0" }}
          {...getInputProps({
            placeholder: isMulti ? (!selectedItems?.length ? placeholder : "") : !selectedItem ? placeholder : "",
            onFocus: e => {
              setIsFocused(true);
              onFocus?.(e);
            },
            onBlur: () => {
              setIsFocused(false);
              onBlur?.();
            },
            onKeyDown: e => {
              onKeyDown?.(e);
            }
          })}
          autoFocus={autoFocus}
          size={size}
          className={cx(styles.inputWrapper, {
            [styles.hasSelected]: !isMulti && selectedItem && !inputValue
          })}
          disabled={disabled}
          readOnly={readOnly}
        />
      ),
      [
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
        size
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
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.DROPDOWN, id)}
        >
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
                      renderInput={() => renderInput(true)}
                    />
                  ) : (
                    <Flex gap="xs" wrap>
                      {selectedItems.map((item, index) => (
                        <Flex key={index}>
                          <div style={{ flexShrink: 0 }}>
                            <Chips label={item.label} onDelete={() => removeSelectedItem(item)} noMargin />
                          </div>
                          {index === selectedItems.length - 1 && renderInput(true)}
                        </Flex>
                      ))}
                    </Flex>
                  )}
                </>
              )}
              {multi && selectedItems.length === 0 && renderInput(true)}
              {!multi && renderInput()}
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
          <div
            className={styles.popoverWrapper}
            style={{
              ...popoverStyles.popper,
              width: dropdownMergedRef.current?.offsetWidth
            }}
            {...popoverAttributes.popper}
            ref={listWrapperRef}
          >
            <DialogContentContainer>
              <BaseList<Item>
                size={size}
                options={filteredOptions}
                selectedItems={multi ? selectedItems : [selectedItem]}
                highlightedIndex={highlightedIndex}
                getMenuProps={getMenuProps}
                getItemProps={listItemProps => {
                  const item = listItemProps.item;
                  const index = listItemProps.index;
                  const baseProps = getItemProps({ item, index });
                  const isSelected = multi ? selectedItems.some(i => i.id === item.id) : selectedItem?.id === item.id;
                  return { ...baseProps, selected: isSelected };
                }}
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
          </div>
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
