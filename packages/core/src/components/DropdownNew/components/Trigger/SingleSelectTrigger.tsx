import React from "react";
import cx from "classnames";
import { BaseListItem, BaseListItemData } from "../../../BaseListItem";
import SearchableInput from "./SearchableInput";
import styles from "./Trigger.module.scss";
import { useDropdownContext } from "../../context/DropdownContext";
import { Flex } from "../../../Flex";
import TriggerActions from "./TriggerActions";

const SingleSelectTrigger = () => {
  const { inputValue, selectedItem, searchable, size, valueRenderer, isFocused, getToggleButtonProps } =
    useDropdownContext<BaseListItemData>();

  return (
    <Flex justify="space-between" align="start" className={styles.triggerWrapper}>
      <div style={{ flexGrow: 1, position: "relative", minWidth: "1px" }}>
        <SearchableInput />

        {!inputValue && selectedItem && (
          <div
            className={cx(styles.selectedItem, {
              [styles.faded]: isFocused && searchable,
              [styles.small]: size === "small"
            })}
            {...getToggleButtonProps()}
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
      </div>
      <TriggerActions />
    </Flex>
  );
};

export default SingleSelectTrigger;
