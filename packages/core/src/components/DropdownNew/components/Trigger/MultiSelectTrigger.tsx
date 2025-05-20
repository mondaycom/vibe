import React from "react";
import { Flex } from "../../../Flex";
import MultiSelectedValues from "../MultiSelectedValues/MultiSelectedValues";
import { Chips } from "../../../Chips";
import SearchableInput from "./SearchableInput";
import { useDropdownContext } from "../../context/DropdownContext";
import { BaseListItemData } from "../../../BaseListItem";
import TriggerActions from "./TriggerActions";
import styles from "./Trigger.module.scss";

const MultiSelectTrigger = () => {
  const {
    selectedItems = [],
    contextOnOptionRemove,
    multiline,
    disabled,
    readOnly
  } = useDropdownContext<BaseListItemData>();

  const hasSelection = selectedItems.length > 0;

  return (
    <Flex justify="space-between" align="start" className={styles.triggerWrapper}>
      <div style={{ flexGrow: 1, position: "relative", minWidth: "1px" }}>
        {hasSelection ? (
          <>
            {!multiline ? (
              <MultiSelectedValues
                disabled={disabled}
                readOnly={readOnly}
                selectedItems={selectedItems}
                onRemove={item => {
                  contextOnOptionRemove?.(item as BaseListItemData);
                }}
                renderInput={() => <SearchableInput />}
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
                    {index === selectedItems.length - 1 && <SearchableInput />}
                  </Flex>
                ))}
              </Flex>
            )}
          </>
        ) : (
          <SearchableInput />
        )}
      </div>
      <TriggerActions />
    </Flex>
  );
};

export default MultiSelectTrigger;
