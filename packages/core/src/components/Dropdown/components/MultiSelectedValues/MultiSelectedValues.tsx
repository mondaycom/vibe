import React, { useRef, useMemo, createRef } from "react";
import { type BaseItemData } from "../../../BaseItem";
import { Chips } from "../../../Chips";
import { Flex } from "@vibe/layout";
import { DialogContentContainer, Dialog } from "@vibe/dialog";
import useItemsOverflow from "../../../../hooks/useItemsOverflow/useItemsOverflow";
import styles from "./MultiSelectedValues.module.scss";
import cx from "classnames";
import DropdownChip from "../Trigger/DropdownChip";

const INPUT_DEDUCTED_WIDTH = 48;

type MultiSelectedValuesProps<Item> = {
  selectedItems: Item[];
  onRemove: (item: Item) => void;
  renderInput?: () => React.ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
  minVisibleCount?: number;
  /** Extra props (tabIndex, onKeyDown, etc.) to spread on each visible chip container. */
  getChipContainerProps?: (item: Item, index: number) => Record<string, any>;
  /** Ref forwarded to the +N overflow Chips element, for external keyboard focus management. */
  badgeRef?: React.Ref<HTMLDivElement>;
};

function MultiSelectedValues<Item extends BaseItemData<Record<string, unknown>>>({
  selectedItems,
  onRemove,
  renderInput,
  disabled,
  readOnly,
  minVisibleCount = 0,
  getChipContainerProps,
  badgeRef
}: MultiSelectedValuesProps<Item>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const deductedSpaceRef = useRef<HTMLDivElement>(null);

  const itemRefs = useMemo(() => selectedItems.map(() => createRef<HTMLButtonElement>()), [selectedItems]);

  const { visibleCount, hasMeasured } = useItemsOverflow({
    containerRef,
    itemRefs,
    gap: 4,
    deductedSpaceRef,
    deductedWidth: renderInput ? INPUT_DEDUCTED_WIDTH : 0,
    minVisibleCount: selectedItems.length === 1 ? 1 : minVisibleCount
  });

  const { hiddenItems, hiddenCount } = useMemo(() => {
    const hiddenItems = selectedItems.length > visibleCount ? selectedItems.slice(visibleCount) : [];
    return {
      hiddenItems,
      hiddenCount: hiddenItems.length
    };
  }, [selectedItems, visibleCount]);

  const dialogContent = useMemo(() => {
    return () => (
      <DialogContentContainer>
        <Flex direction="column" gap="xs" align="start" className={styles.hiddenChipsDialog}>
          {hiddenItems.map(item => {
            return (
              <DropdownChip
                key={`dropdown-chip-dialog-${item.value}`}
                item={item}
                onDelete={() => onRemove(item)}
                className={styles.dialogChip}
                disabled={disabled}
                readOnly={readOnly}
              />
            );
          })}
        </Flex>
      </DialogContentContainer>
    );
  }, [hiddenItems, onRemove, disabled, readOnly]);

  const chipElements = useMemo(() => {
    return selectedItems.map((item, index) => {
      const isVisible = index < visibleCount;
      const extraProps = isVisible && getChipContainerProps ? getChipContainerProps(item, index) : {};
      // Removal is handled by this button's onClick; drop downshift's own onClick (selected-item focus).
      const { ref: extraRef, onClick: _extraOnClick, ...extraAttrs } = extraProps;

      return (
        <button
          key={`dropdown-chip-visible-${item.value}`}
          type="button"
          ref={el => {
            (itemRefs[index] as React.MutableRefObject<HTMLButtonElement | null>).current = el;
            if (typeof extraRef === "function") extraRef(el);
          }}
          className={cx(styles.chipButton, {
            [styles.chipWrapperWithOverflow]: minVisibleCount !== undefined,
            [styles.hiddenChip]: !isVisible
          })}
          aria-hidden={!isVisible}
          aria-label={`Remove ${item.label}`}
          data-testid={`dropdown-chip-${item.value}`}
          disabled={disabled || readOnly}
          {...extraAttrs}
          onClick={() => onRemove(item)}
        >
          <DropdownChip item={item} presentational disabled={disabled} className={styles.visibleChip} />
        </button>
      );
    });
  }, [selectedItems, visibleCount, onRemove, itemRefs, disabled, readOnly, minVisibleCount, getChipContainerProps]);

  if (!selectedItems?.length) return null;

  const isSingleChip = selectedItems.length === 1;

  return (
    <Flex
      align="center"
      wrap={false}
      gap="xs"
      ref={containerRef}
      role="group"
      aria-label="selected items"
      className={cx(styles.containerWrapper, {
        [styles.singleChip]: isSingleChip,
        [styles.measuring]: !hasMeasured
      })}
    >
      {chipElements}

      <Flex gap="xs" className={styles.inputAndCounterWrapper}>
        {hiddenCount > 0 && (
          <div
            ref={deductedSpaceRef}
            onClick={e => {
              e.stopPropagation();
            }}
            onKeyDown={e => {
              e.stopPropagation();
              if (e.key === "ArrowLeft") {
                e.preventDefault();
                (itemRefs[visibleCount - 1] as React.MutableRefObject<HTMLButtonElement | null>)?.current?.focus();
              }
            }}
            onMouseDown={e => {
              e.stopPropagation();
            }}
          >
            <Dialog
              content={dialogContent}
              showTrigger={["click", "enter"]}
              hideTrigger={["clickoutside", "enter"]}
              position="bottom"
              moveBy={{ main: 4 }}
              hideWhenReferenceHidden
              addKeyboardHideShowTriggersByDefault
            >
              <Chips
                ref={badgeRef}
                label={`+ ${hiddenCount}`}
                readOnly
                noMargin
                aria-label={`+${hiddenCount}. ${selectedItems.length - hiddenCount} items are visible out of ${
                  selectedItems.length
                }`}
                data-testid="dropdown-overflow-counter"
                className={styles.overflowCounter}
                onClick={() => {}}
                onMouseDown={e => {
                  e.preventDefault();
                }}
              />
            </Dialog>
          </div>
        )}
        {renderInput && <div className={styles.inputWrapper}>{renderInput()}</div>}
      </Flex>
    </Flex>
  );
}

export default MultiSelectedValues;
