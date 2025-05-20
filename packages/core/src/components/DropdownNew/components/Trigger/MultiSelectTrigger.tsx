import React from "react";
import { Flex } from "../../../Flex";
import MultiSelectedValues from "../MultiSelectedValues/MultiSelectedValues";
import { Chips } from "../../../Chips";
import Input from "./Input";
import { useDropdownContext } from "../../context/DropdownContext";
import { BaseListItemData } from "../../../BaseListItem";
import TriggerActions from "./TriggerActions";
import styles from "./Trigger.module.scss";
import { getStyle } from "../../../../helpers/typesciptCssModulesHelper";
import cx from "classnames";

const MultiSelectTrigger = () => {
  const {
    selectedItems = [],
    contextOnOptionRemove,
    multiline,
    disabled,
    readOnly,
    size
  } = useDropdownContext<BaseListItemData>();

  return (
    <Flex justify="space-between" align="center">
      <div className={cx(styles.triggerWrapper, getStyle(styles, size))}>
        {selectedItems.length > 0 ? (
          <div className={styles.multiWrapper}>
            {!multiline ? (
              <MultiSelectedValues
                disabled={disabled}
                readOnly={readOnly}
                selectedItems={selectedItems}
                onRemove={item => {
                  contextOnOptionRemove?.(item as BaseListItemData);
                }}
                renderInput={() => <Input inputSize="small" />}
              />
            ) : (
              <Flex gap="xs" wrap>
                {selectedItems.map((item, index) => (
                  <Flex key={String(item.id ?? item.value ?? index)}>
                    <div style={{ flexShrink: 0 }}>
                      <Chips
                        label={item.label}
                        onDelete={() => {
                          contextOnOptionRemove?.(item as BaseListItemData);
                        }}
                        readOnly={readOnly}
                        disabled={disabled}
                        noMargin
                      />
                    </div>
                    {index === selectedItems.length - 1 && <Input inputSize="small" />}
                  </Flex>
                ))}
              </Flex>
            )}
          </div>
        ) : (
          <Input />
        )}
      </div>
      <TriggerActions />
    </Flex>
  );
};

export default MultiSelectTrigger;
