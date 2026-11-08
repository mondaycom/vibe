import React, { useEffect, useRef } from "react";
import { Flex } from "@vibe/layout";
import MultiSelectedValues from "../MultiSelectedValues/MultiSelectedValues";
import DropdownInput from "./DropdownInput";
import { useDropdownContext } from "../../context/DropdownContext";
import { type BaseItemData } from "@vibe/base-list";
import TriggerActions from "./TriggerActions";
import styles from "./Trigger.module.scss";
import { getStyle } from "@vibe/shared";
import cx from "classnames";
import DropdownChip from "./DropdownChip";
import useTriggerToggleProps from "./useTriggerToggleProps";
import { getSelectedValueId, getSelectedValueText } from "../../utils/dropdownUtils";

const MultiSelectTrigger = () => {
  const {
    selectedItems = [],
    contextOnOptionRemove,
    getSelectedItemProps,
    multiline,
    disabled,
    readOnly,
    size,
    searchable,
    searchInMenu,
    minVisibleCount,
    interactiveChips,
    getLabelProps
  } = useDropdownContext<BaseItemData>();
  const toggleProps = useTriggerToggleProps();
  const inputInTrigger = searchable && !searchInMenu;

  const showChips = selectedItems.length > 0;
  const overflowBadgeRef = useRef<HTMLDivElement>(null);
  const chipsWrapperRef = useRef<HTMLDivElement>(null);

  // With the search inside the menu, the trigger is a single button whose name already lists every
  // selected value. The chips stay clickable for pointer users but are hidden from assistive tech and
  // removed from the tab order, so screen readers don't announce the nested remove/overflow buttons.
  useEffect(() => {
    if (!searchInMenu) return;
    chipsWrapperRef.current
      ?.querySelectorAll<HTMLElement>("button, [tabindex]")
      .forEach(element => element.setAttribute("tabindex", "-1"));
  });

  const renderTriggerContent = () => {
    if (interactiveChips && inputInTrigger && !readOnly) {
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
        <div ref={chipsWrapperRef} className={styles.multiWrapper} aria-hidden={searchInMenu ? "true" : undefined}>
          {!multiline ? (
            <MultiSelectedValues
              disabled={disabled}
              readOnly={readOnly}
              selectedItems={selectedItems}
              onRemove={item => {
                contextOnOptionRemove?.(item);
              }}
              renderInput={inputInTrigger ? () => <DropdownInput inputSize="small" fullWidth /> : undefined}
              minVisibleCount={minVisibleCount}
            />
          ) : (
            <Flex gap="xs" wrap>
              {selectedItems.map((item, index) => (
                <Flex key={String(item.id ?? item.value ?? index)} className={styles.multilineItem}>
                  <div className={styles.multilineChip}>
                    <DropdownChip
                      item={item}
                      onDelete={() => {
                        contextOnOptionRemove?.(item);
                      }}
                      readOnly={readOnly}
                      disabled={disabled}
                      className={styles.multilineChipRoot}
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
      <div className={cx(styles.triggerWrapper, getStyle(styles, size))} {...toggleProps}>
        {renderTriggerContent()}
      </div>
      <TriggerActions />
      {searchInMenu && showChips && (
        <span id={getSelectedValueId(getLabelProps().id)} className={styles.visuallyHidden}>
          {getSelectedValueText(selectedItems)}
        </span>
      )}
    </Flex>
  );
};

export default MultiSelectTrigger;
