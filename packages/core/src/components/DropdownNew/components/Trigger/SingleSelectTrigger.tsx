import React from "react";
import cx from "classnames";
import { BaseListItem, BaseListItemData } from "../../../BaseListItem";
import Input from "./Input";
import styles from "./Trigger.module.scss";
import { useDropdownContext } from "../../context/DropdownContext";
import { Flex } from "../../../Flex";
import TriggerActions from "./TriggerActions";
import { getStyle } from "../../../../helpers/typesciptCssModulesHelper";

const SingleSelectTrigger = () => {
  const { inputValue, selectedItem, searchable, size, valueRenderer, isFocused, getToggleButtonProps } =
    useDropdownContext<BaseListItemData>();

  return (
    <Flex justify="space-between" align="center">
      <div className={cx(styles.triggerWrapper, getStyle(styles, size))}>
        <Input />

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
