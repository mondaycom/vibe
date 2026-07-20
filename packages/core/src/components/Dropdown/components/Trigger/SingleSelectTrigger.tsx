import React from "react";
import cx from "classnames";
import { BaseItem, type BaseItemData } from "../../../BaseItem";
import DropdownInput from "./DropdownInput";
import styles from "./Trigger.module.scss";
import { useDropdownContext } from "../../context/DropdownContext";
import { Flex } from "@vibe/layout";
import TriggerActions from "./TriggerActions";
import { getStyle } from "@vibe/shared";

// Renders the trigger for single-select dropdowns (searchable and non-searchable).
const SingleSelectTrigger = () => {
  const {
    inputValue,
    isFocused,
    selectedItem,
    searchable,
    size,
    valueRenderer,
    getToggleButtonProps,
    disabled,
    readOnly,
    error,
    label,
    getLabelProps,
    "aria-label": ariaLabel,
    helperTextId,
    inlineSelectedValue
  } = useDropdownContext<BaseItemData>();

  // inlineSelectedValue puts the selected label inside the input, so the overlay only renders for
  // non-searchable single select. Without it (default), the selection is shown via the overlay —
  // including in searchable mode, faded while the input is focused (the original behavior).
  const showSelectedOverlay = (inlineSelectedValue ? !searchable : !inputValue) && !!selectedItem;

  return (
    <Flex justify="space-between" align="center">
      <div
        className={cx(styles.triggerWrapper, getStyle(styles, size))}
        {...(!searchable
          ? getToggleButtonProps({
              "aria-haspopup": "dialog",
              "aria-labelledby": label ? getLabelProps().id : undefined,
              "aria-label": label ? undefined : ariaLabel,
              "aria-describedby": helperTextId,
              "aria-disabled": disabled ? "true" : undefined,
              "aria-invalid": error ? "true" : undefined,
              "aria-readonly": readOnly ? "true" : undefined
            })
          : {})}
      >
        <DropdownInput />

        {showSelectedOverlay && (
          <div
            className={cx(
              styles.selectedItem,
              { [styles.faded]: !inlineSelectedValue && isFocused && searchable },
              getStyle(styles, size)
            )}
          >
            <BaseItem
              component="div"
              itemRenderer={valueRenderer}
              size={size}
              readOnly
              item={{
                ...selectedItem,
                disabled,
                startElement: selectedItem.startElement?.type === "indent" ? undefined : selectedItem.startElement
              }}
            />
          </div>
        )}
      </div>
      <TriggerActions />
    </Flex>
  );
};

export default SingleSelectTrigger;
