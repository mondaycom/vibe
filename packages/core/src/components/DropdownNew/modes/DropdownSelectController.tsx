import React, { useState, useRef } from "react";
import { type DropdownSingleControllerProps } from "../Dropdown.types";
import useDropdownSelect from "../hooks/useDropdownSelect";
import { type BaseListItemData } from "../../BaseListItem";
import { type DropdownContextProps } from "../context/DropdownContext.types";
import DropdownWrapperUI from "../components/DropdownWrapperUI";

const DropdownSelectController = <Item extends BaseListItemData<Record<string, unknown>>>(
  props: DropdownSingleControllerProps<Item>
) => {
  const {
    options,
    autoFocus,
    isMenuOpen: isMenuOpenProp,
    defaultValue,
    value,
    onChange,
    onMenuOpen,
    onMenuClose,
    onOptionSelect,
    showSelectedOptions = true,
    filterOption,
    clearable = true,
    searchable = false,
    multi = false,
    dropdownRef,
    onClear,
    onFocus,
    onBlur,
    size = "medium"
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const currentEventRef = useRef<
    | {
        type: string;
        clientX: number;
        clientY: number;
        target: EventTarget | null;
        currentTarget: EventTarget | null;
        ctrlKey: boolean;
        shiftKey: boolean;
        altKey: boolean;
        metaKey: boolean;
        button: number;
        timeStamp: number;
        isTrusted: boolean;
        nativeEvent: Event;
        preventDefault: () => void;
        stopPropagation: () => void;
      }
    | undefined
  >(undefined);

  // Wrapper for onChange that includes the current event
  const onChangeWithEvent = (option: Item | null) => {
    onChange?.(option, currentEventRef.current as unknown as React.SyntheticEvent);
    currentEventRef.current = undefined; // Clear after use
  };

  const {
    isOpen,
    highlightedIndex,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    reset: hookReset,
    toggleMenu,
    filteredOptions,
    selectedItem: hookSelectedItem
  } = useDropdownSelect<Item>(
    options,
    autoFocus,
    isMenuOpenProp,
    defaultValue,
    value,
    onChangeWithEvent,
    onMenuOpen,
    onMenuClose,
    onOptionSelect,
    showSelectedOptions,
    filterOption
  );

  const contextValue: DropdownContextProps<Item> = {
    ...props,
    isOpen,
    highlightedIndex,
    selectedItem: hookSelectedItem,
    filteredOptions,
    getToggleButtonProps: (toggleOptions?: Record<string, unknown>) => {
      return getToggleButtonProps({
        ...(toggleOptions || {}),
        disabled: props.readOnly || props.disabled,
        onFocus: (event: React.FocusEvent<HTMLDivElement>) => {
          setIsFocused(true);
          onFocus?.(event);
        },
        onBlur: (event: React.FocusEvent<HTMLDivElement>) => {
          setIsFocused(false);
          onBlur?.(event);
        }
      });
    },
    getLabelProps,
    getMenuProps,
    getItemProps: (itemOptions: { item: Item; index: number }) => {
      const originalProps = getItemProps(itemOptions);
      return {
        ...originalProps,
        onClick: (event: React.MouseEvent) => {
          // Capture specific event properties immediately before they get nullified
          currentEventRef.current = {
            type: event.type,
            clientX: event.clientX,
            clientY: event.clientY,
            target: event.target,
            currentTarget: event.currentTarget,
            ctrlKey: event.ctrlKey,
            shiftKey: event.shiftKey,
            altKey: event.altKey,
            metaKey: event.metaKey,
            button: event.button,
            timeStamp: event.timeStamp,
            isTrusted: event.isTrusted,
            nativeEvent: event.nativeEvent,
            preventDefault: () => event.preventDefault(),
            stopPropagation: () => event.stopPropagation()
          };
          // Call the original onClick which will trigger the onChange through the hook
          if (originalProps.onClick) {
            originalProps.onClick(event);
          }
        }
      };
    },
    reset: hookReset,
    inputValue: null,
    selectedItems: [],
    addSelectedItem: undefined,
    removeSelectedItem: undefined,
    contextOnClear: (event?: React.SyntheticEvent) => {
      // Capture the event for the onChange callback that will be triggered by hookReset
      if (event && "clientX" in event) {
        const mouseEvent = event as React.MouseEvent;
        currentEventRef.current = {
          type: mouseEvent.type,
          clientX: mouseEvent.clientX,
          clientY: mouseEvent.clientY,
          target: mouseEvent.target,
          currentTarget: mouseEvent.currentTarget,
          ctrlKey: mouseEvent.ctrlKey,
          shiftKey: mouseEvent.shiftKey,
          altKey: mouseEvent.altKey,
          metaKey: mouseEvent.metaKey,
          button: mouseEvent.button,
          timeStamp: mouseEvent.timeStamp,
          isTrusted: mouseEvent.isTrusted,
          nativeEvent: mouseEvent.nativeEvent,
          preventDefault: () => mouseEvent.preventDefault(),
          stopPropagation: () => mouseEvent.stopPropagation()
        };
      }
      hookReset();
      onClear?.();
    },
    contextOnOptionRemove: () => {},
    clearable,
    searchable,
    multi,
    autoFocus,
    onClear,
    size,
    toggleMenu,
    isFocused
  };

  return <DropdownWrapperUI contextValue={contextValue} dropdownRef={dropdownRef} />;
};

export default DropdownSelectController;
