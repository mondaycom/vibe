import React from "react";
import cx from "classnames";
import { BaseItem, type BaseItemData } from "../../../BaseItem";
import DropdownInput from "./DropdownInput";
import styles from "./Trigger.module.scss";
import { useDropdownContext } from "../../context/DropdownContext";
import { Flex } from "@vibe/layout";
import TriggerActions from "./TriggerActions";
import { getStyle } from "@vibe/shared";

const SingleSelectTrigger = () => {
  const {
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
    helperTextId
  } = useDropdownContext<BaseItemData>();

  return (
    <Flex justify="space-between" align="center">
      <div
        className={cx(styles.triggerWrapper, getStyle(styles, size))}
        {...(!searchable
          ? getToggleButtonProps({
              "aria-haspopup": "dialog",
              "aria-labelledby": label ? getLabelProps().id : undefined,
              "aria-label": ariaLabel || (label ? undefined : getLabelProps()?.id),
              "aria-describedby": helperTextId,
              "aria-disabled": disabled ? "true" : undefined,
              "aria-invalid": error ? "true" : undefined,
              "aria-readonly": readOnly ? "true" : undefined
            })
          : {})}
      >
        <DropdownInput />

        {/* Non-searchable single select shows the selection via this overlay. In searchable mode the
            selected value lives inside the input itself, so the overlay must not render. */}
        {!searchable && selectedItem && (
          <div className={cx(styles.selectedItem, getStyle(styles, size))}>
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
