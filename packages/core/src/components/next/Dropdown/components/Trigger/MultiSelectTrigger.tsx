import React from "react";
import { Flex } from "../../../../Flex";
import MultiSelectedValues from "../MultiSelectedValues/MultiSelectedValues";
import DropdownInput from "./DropdownInput";
import { useDropdownContext } from "../../context/DropdownContext";
import { type BaseListItemData } from "../../../../BaseListItem";
import TriggerActions from "./TriggerActions";
import styles from "./Trigger.module.scss";
import { getStyle } from "../../../../../helpers/typesciptCssModulesHelper";
import cx from "classnames";
import DropdownChip from "./DropdownChip";

const MultiSelectTrigger = () => {
  const {
    selectedItems = [],
    contextOnOptionRemove,
    multiline,
    disabled,
    readOnly,
    error,
    size,
    searchable,
    getToggleButtonProps,
    label,
    getLabelProps,
    ariaLabel,
    minVisibleCount
  } = useDropdownContext<BaseListItemData>();

  return (
    <Flex justify="space-between" align="center">
      <div
        className={cx(styles.triggerWrapper, getStyle(styles, size))}
        {...(!searchable
          ? getToggleButtonProps({
              "aria-haspopup": "dialog",
              "aria-labelledby": label ? getLabelProps().id : undefined,
              "aria-label": ariaLabel || (label ? undefined : getLabelProps()?.id),
              "aria-disabled": disabled ? "true" : undefined,
              "aria-invalid": error ? "true" : undefined,
              "aria-readonly": readOnly ? "true" : undefined
            })
          : {})}
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
                minVisibleCount={minVisibleCount}
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
