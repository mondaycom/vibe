import React from "react";
import { Flex } from "../../../Flex";
import MultiSelectedValues from "../MultiSelectedValues/MultiSelectedValues";
import DropdownInput from "./DropdownInput";
import { useDropdownContext } from "../../context/DropdownContext";
import { BaseListItemData } from "../../../BaseListItem";
import TriggerActions from "./TriggerActions";
import styles from "./Trigger.module.scss";
import { getStyle } from "../../../../helpers/typesciptCssModulesHelper";
import cx from "classnames";
import DropdownChip from "./DropdownChip";

const MultiSelectTrigger = () => {
  const {
    selectedItems = [],
    contextOnOptionRemove,
    multiline,
    disabled,
    readOnly,
    size,
    searchable,
    getToggleButtonProps
  } = useDropdownContext<BaseListItemData>();

  return (
    <Flex justify="space-between" align="center">
      <div
        className={cx(styles.triggerWrapper, getStyle(styles, size))}
        {...(!searchable ? getToggleButtonProps() : {})}
      >
        {selectedItems.length > 0 ? (
          <div className={styles.multiWrapper}>
            {!multiline ? (
              <MultiSelectedValues
                disabled={disabled}
                readOnly={readOnly}
                selectedItems={selectedItems}
                onRemove={item => {
                  contextOnOptionRemove?.(item);
                }}
                renderInput={() => <DropdownInput inputSize="small" />}
              />
            ) : (
              <Flex gap="xs" wrap>
                {selectedItems.map((item, index) => (
                  <Flex key={String(item.id ?? item.value ?? index)}>
                    <div style={{ flexShrink: 0 }}>
                      <DropdownChip
                        item={item}
                        onDelete={() => {
                          contextOnOptionRemove?.(item);
                        }}
                        readOnly={readOnly}
                        disabled={disabled}
                      />
                    </div>
                    {index === selectedItems.length - 1 && <DropdownInput inputSize="small" />}
                  </Flex>
                ))}
              </Flex>
            )}
          </div>
        ) : (
          <DropdownInput />
        )}
      </div>
      <TriggerActions />
    </Flex>
  );
};

export default MultiSelectTrigger;
