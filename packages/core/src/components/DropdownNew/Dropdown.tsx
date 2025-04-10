import React, { useMemo, useRef, forwardRef, useState } from "react";
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
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import useMergeRef from "../../hooks/useMergeRef";
import FieldLabel from "../FieldLabel/FieldLabel";
import Text from "../Text/Text";
import { BaseListItemData } from "../BaseListItem/BaseListItem.types";

const Dropdown = forwardRef(
  <T extends BaseListItemData<Record<string, unknown>>>(
    {
      options,
      size,
      dir,
      optionRenderer,
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
      onScroll,
      className,
      id,
      "data-testid": dataTestId
    }: BaseDropdownProps<T>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const dropdownRef = useRef<HTMLInputElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const listWrapperRef = useRef<HTMLDivElement>(null);
    const dropdownMergedRef = useMergeRef(ref, dropdownRef);

    const [isFocused, setIsFocused] = useState(false);

    const {
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getInputProps,
      getItemProps,
      reset,
      filteredOptions
    } = useDropdownCombobox(
      options,
      autoFocus,
      isMenuOpen,
      closeMenuOnSelect,
      onChange,
      onInputChange,
      onMenuClose,
      onMenuOpen,
      onOptionSelect
    );

    const offset = useMemo(() => [0, 4] as [number, number], []);

    const { styles: popoverStyles, attributes: popoverAttributes } = usePopover(
      triggerRef.current,
      listWrapperRef.current,
      {
        isOpen,
        placement: "bottom" as Placement,
        offset,
        fallbackPlacements: ["top" as Placement]
      }
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
          <Flex justify="space-between" ref={triggerRef}>
            <div style={{ flexGrow: 1, position: "relative", minWidth: "1px" }}>
              <BaseInput
                {...getInputProps({
                  placeholder: !selectedItem ? placeholder : "",
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
                  [styles.hasSelected]: selectedItem && !inputValue
                })}
                disabled={disabled}
                readOnly={readOnly}
              />
              {selectedItem && !inputValue && (
                <div
                  className={cx(styles.selectedItem, {
                    [styles.faded]: isFocused,
                    [styles.small]: size === "small"
                  })}
                >
                  <BaseListItem
                    size={size}
                    readOnly
                    itemRenderer={optionRenderer}
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
                {selectedItem && clearable && (
                  <IconButton
                    data-testid="dropdown-clear-button"
                    icon={CloseSmall}
                    onClick={() => {
                      reset();
                      onClear?.();
                      onChange?.(null);
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
            style={{
              ...popoverStyles.popper,
              width: dropdownMergedRef.current?.offsetWidth,
              zIndex: 2
            }}
            {...popoverAttributes.popper}
            ref={listWrapperRef}
          >
            <DialogContentContainer>
              <BaseList<T>
                size={size}
                options={filteredOptions}
                selectedItem={selectedItem}
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
          </div>
        </div>
        {helperText && (
          <Text
            color={error ? "negative" : "secondary"}
            style={{
              marginTop: "var(--spacing-xs)"
            }}
          >
            {helperText}
          </Text>
        )}
      </div>
    );
  }
);

export default Dropdown as <T extends BaseListItemData<Record<string, unknown>>>(
  props: BaseDropdownProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => React.ReactElement;
