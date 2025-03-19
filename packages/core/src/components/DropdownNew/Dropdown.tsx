import React, { useMemo, useRef, forwardRef } from "react";
import cx from "classnames";
import { DialogContentContainer } from "../DialogContentContainer";
import { BaseInput } from "../BaseInput";
import { CloseSmall, DropdownChevronDown, DropdownChevronUp } from "@vibe/icons";
import { IconButton } from "../IconButton";
import { Flex } from "../Flex";
import { BaseList } from "../BaseList";
import styles from "./Dropdown.module.scss";
import { BaseListItemProps } from "../BaseListItem";
import usePopover from "../../hooks/usePopover";
import { Placement } from "../../hooks/popoverConstants";
import { BaseDropdownProps } from "./Dropdown.types";
import useDropdownCombobox from "./hooks/useDropdownCombobox";
import { VibeComponent } from "../../types";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import useMergeRef from "../../hooks/useMergeRef";

const Dropdown: VibeComponent<BaseDropdownProps<BaseListItemProps>, HTMLDivElement> = forwardRef(
  (
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
      onInputChange,
      onOptionSelect,
      className,
      id,
      "data-testid": dataTestId
    }: BaseDropdownProps<BaseListItemProps>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const dropdownRef = useRef<HTMLInputElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const listWrapperRef = useRef<HTMLDivElement>(null);
    const dropdownMergedRef = useMergeRef(ref, dropdownRef);

    const {
      isOpen,
      highlightedIndex,
      selectedItem,
      getToggleButtonProps,
      getMenuProps,
      getInputProps,
      getItemProps,
      reset,
      filteredOptions
    } = useDropdownCombobox(options, onInputChange, onOptionSelect);

    const offset = useMemo(() => [0, 4] as [number, number], []);

    const { styles: popoverStyles, attributes: popoverAttributes } = usePopover(
      triggerRef.current,
      listWrapperRef.current,
      {
        isOpen,
        placement: "bottom" as Placement,
        offset
      }
    );

    return (
      <div
        ref={dropdownMergedRef}
        className={cx(styles.wrapper, className, {
          [styles.disabled]: disabled,
          [styles.readOnly]: readOnly,
          [styles.error]: error,
          [styles.active]: isOpen
        })}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.DROPDOWN, id)}
      >
        <Flex justify="space-between" ref={triggerRef}>
          <div>
            <BaseInput
              {...getInputProps({ placeholder: !selectedItem ? placeholder : selectedItem.label })}
              size={size}
              className={styles.inputWrapper}
              disabled={disabled}
              readOnly={readOnly}
            />
          </div>
          {!readOnly && (
            <Flex>
              {selectedItem && <IconButton icon={CloseSmall} onClick={reset} size={size} />}
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
            visibility: isOpen ? "visible" : "hidden",
            width: dropdownMergedRef.current?.offsetWidth
          }}
          {...popoverAttributes.popper}
          ref={listWrapperRef}
        >
          <DialogContentContainer>
            <BaseList
              size={size}
              options={filteredOptions}
              selectedItem={selectedItem}
              highlightedIndex={highlightedIndex}
              getMenuProps={getMenuProps}
              getItemProps={getItemProps}
              withGroupDivider={withGroupDivider}
              stickyGroupTitle={stickyGroupTitle}
              dir={dir}
              optionRenderer={optionRenderer}
              noOptionsMessage={noOptionsMessage}
              renderOptions={isOpen}
            />
          </DialogContentContainer>
        </div>
      </div>
    );
  }
);

export default Dropdown;
