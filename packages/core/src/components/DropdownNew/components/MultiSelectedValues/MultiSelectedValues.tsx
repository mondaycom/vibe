import React, { useRef, useMemo, createRef } from "react";
import { BaseListItemData } from "../../../BaseListItem";
import { Chips } from "../../../Chips";
import { Flex } from "../../../Flex";
import { DialogContentContainer } from "../../../DialogContentContainer";
import Dialog from "../../../Dialog/Dialog";
import useItemsOverflow from "../../../../hooks/useItemsOverflow/useItemsOverflow";
import styles from "./MultiSelectedValues.module.scss";
import cx from "classnames";
import DropdownChip from "../Trigger/DropdownChip";

type MultiSelectedValuesProps<Item> = {
  selectedItems: Item[];
  onRemove: (item: Item) => void;
  renderInput?: () => React.ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
};

function MultiSelectedValues<Item extends BaseListItemData<Record<string, unknown>>>({
  selectedItems,
  onRemove,
  renderInput,
  disabled,
  readOnly
}: MultiSelectedValuesProps<Item>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const deductedSpaceRef = useRef<HTMLDivElement>(null);

  const itemRefs = useMemo(() => selectedItems.map(() => createRef<HTMLDivElement>()), [selectedItems]);

  const visibleCount = useItemsOverflow({
    containerRef,
    itemRefs,
    gap: 4,
    deductedSpaceRef
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

      return (
        <div
          key={`dropdown-chip-visible-${item.value}`}
          ref={itemRefs[index]}
          className={cx({ [styles.hiddenChip]: !isVisible })}
          aria-hidden={!isVisible}
          data-testid={`dropdown-chip-${item.value}`}
        >
          <DropdownChip item={item} onDelete={() => onRemove(item)} disabled={disabled} readOnly={readOnly} />
        </div>
      );
    });
  }, [selectedItems, visibleCount, onRemove, itemRefs, disabled, readOnly]);

  if (!selectedItems?.length) return null;

  return (
    <Flex align="center" wrap={false} gap="xs" ref={containerRef} className={styles.containerWrapper}>
      {chipElements}

      <Flex ref={deductedSpaceRef} gap="xs">
        {hiddenCount > 0 && (
          <div
            onClick={e => {
              e.stopPropagation();
            }}
            onMouseDown={e => {
              e.stopPropagation();
            }}
          >
            <Dialog
              content={dialogContent}
              showTrigger={["click", "enter"]}
              hideTrigger="clickoutside"
              position="bottom"
              moveBy={{ main: 4 }}
              hideWhenReferenceHidden
              addKeyboardHideShowTriggersByDefault
            >
              <Chips
                label={`+ ${hiddenCount}`}
                readOnly
                noMargin
                ariaLabel={`${hiddenCount} items are visible out of ${selectedItems.length}`}
                data-testid="dropdown-overflow-counter"
                className={styles.overflowCounter}
                onClick={() => {
                  // Keep empty onclick for accessibility (keyboard support)
                  // Don't stop propagation here - let it bubble to Dialog
                }}
                onMouseDown={e => {
                  // Only prevent default here, let it bubble for Dialog to handle
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
