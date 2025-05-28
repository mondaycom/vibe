import React from "react";
import cx from "classnames";
import { BaseListItem, BaseListItemData } from "../../../BaseListItem";
import DropdownInput from "./DropdownInput";
import styles from "./Trigger.module.scss";
import { useDropdownContext } from "../../context/DropdownContext";
import { Flex } from "../../../Flex";
import TriggerActions from "./TriggerActions";
import { getStyle } from "../../../../helpers/typesciptCssModulesHelper";

const SingleSelectTrigger = () => {
  const { inputValue, selectedItem, searchable, size, valueRenderer, isFocused, getToggleButtonProps, disabled } =
    useDropdownContext<BaseListItemData>();

  return (
    <Flex justify="space-between" align="center">
      <div className={cx(styles.triggerWrapper, getStyle(styles, size))}>
        <DropdownInput />

        {!inputValue && selectedItem && (
          <div
            className={cx(
              styles.selectedItem,
              {
                [styles.faded]: isFocused && searchable
              },
              getStyle(styles, size)
            )}
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
                  disabled,
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
