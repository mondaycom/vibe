import React, { useRef } from "react";
import { Flex } from "@vibe/layout";
import MultiSelectedValues from "../MultiSelectedValues/MultiSelectedValues";
import DropdownInput from "./DropdownInput";
import { useDropdownContext } from "../../context/DropdownContext";
import { type BaseItemData } from "../../../BaseItem";
import TriggerActions from "./TriggerActions";
import styles from "./Trigger.module.scss";
import { getStyle } from "@vibe/shared";
import cx from "classnames";
import DropdownChip from "./DropdownChip";

const MultiSelectTrigger = () => {
  const {
    selectedItems = [],
    contextOnOptionRemove,
    getSelectedItemProps,
    multiline,
    disabled,
    readOnly,
    error,
    size,
    searchable,
    getToggleButtonProps,
    label,
    getLabelProps,
    "aria-label": ariaLabel,
    minVisibleCount,
    interactiveChips
  } = useDropdownContext<BaseItemData>();

  const showChips = selectedItems.length > 0;
  const overflowBadgeRef = useRef<HTMLDivElement>(null);

  const renderTriggerContent = () => {
    if (interactiveChips && searchable && !readOnly) {
      if (selectedItems.length === 0) {
        return <DropdownInput />;
      }
      return (
        <div
          className={styles.multiWrapper}
          onKeyDown={e => {
            if (
              e.key === "ArrowLeft" &&
              e.target instanceof HTMLInputElement &&
              !e.target.value &&
              overflowBadgeRef.current
            ) {
              overflowBadgeRef.current.focus();
            }
          }}
        >
          <MultiSelectedValues
            disabled={disabled}
            readOnly={readOnly}
            selectedItems={selectedItems}
            onRemove={item => contextOnOptionRemove?.(item)}
            renderInput={() => <DropdownInput inputSize="small" fullWidth />}
            getChipContainerProps={(item, index) => getSelectedItemProps?.({ selectedItem: item, index }) ?? {}}
            badgeRef={overflowBadgeRef}
            minVisibleCount={minVisibleCount}
          />
        </div>
      );
    }

    // Default chips mode: original behavior.
    if (showChips) {
      return (
        <div className={styles.multiWrapper}>
          {!multiline ? (
            <MultiSelectedValues
              disabled={disabled}
              readOnly={readOnly}
              selectedItems={selectedItems}
              onRemove={item => {
                contextOnOptionRemove?.(item);
              }}
              renderInput={searchable ? () => <DropdownInput inputSize="small" fullWidth /> : undefined}
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
      );
    }

    return <DropdownInput />;
  };

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
        {renderTriggerContent()}
      </div>
      <TriggerActions />
    </Flex>
  );
};

export default MultiSelectTrigger;
