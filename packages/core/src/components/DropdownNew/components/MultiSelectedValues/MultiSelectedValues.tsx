import React, { useRef, useMemo, createRef } from "react";
import { BaseListItemData } from "../../../BaseListItem";
import { Chips } from "../../../Chips";
import { Flex } from "../../../Flex";
import { DialogContentContainer } from "../../../DialogContentContainer";
import Dialog from "../../../Dialog/Dialog";
import useItemsOverflow from "../../../../hooks/useItemsOverflow/useItemsOverflow";
import styles from "./MultiSelectedValues.module.scss";
import cx from "classnames";

type MultiSelectedValuesProps<Item> = {
  selectedItems: Item[];
  onRemove: (item: Item) => void;
  renderInput?: () => React.ReactNode;
};

function MultiSelectedValues<Item extends BaseListItemData<Record<string, unknown>>>({
  selectedItems,
  onRemove,
  renderInput
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
          {hiddenItems.map(item => (
            <Chips
              key={`dropdown-chip-${item.value}`}
              label={item.label}
              onDelete={() => onRemove(item)}
              noMargin
              className={styles.dialogChip}
            />
          ))}
        </Flex>
      </DialogContentContainer>
    );
  }, [hiddenItems, onRemove]);

  const chipElements = useMemo(() => {
    return selectedItems.map((item, index) => {
      const isVisible = index < visibleCount;
      return (
        <div
          key={`dropdown-chip-${item.value}`}
          ref={itemRefs[index]}
          className={cx({ [styles.hiddenChip]: !isVisible })}
          aria-hidden={!isVisible}
          data-testid={`dropdown-chip-${item.value}`}
        >
          <Chips label={item.label} onDelete={() => onRemove(item)} noMargin />
        </div>
      );
    });
  }, [selectedItems, visibleCount, onRemove, itemRefs]);

  if (!selectedItems?.length) return null;

  return (
    <Flex align="center" wrap={false} gap="xs" ref={containerRef} className={styles.containerWrapper}>
      {chipElements}

      <Flex ref={deductedSpaceRef} gap="xs">
        {hiddenCount > 0 && (
          <Dialog
            content={dialogContent}
            showTrigger="click"
            hideTrigger="clickoutside"
            position="bottom"
            moveBy={{ main: 4 }}
          >
            <Chips
              label={`+ ${hiddenCount}`}
              readOnly
              noMargin
              ariaLabel={`${hiddenCount} items are visible out of ${selectedItems.length}`}
              data-testid="dropdown-overflow-counter"
            />
          </Dialog>
        )}
        {renderInput && <div className={styles.inputWrapper}>{renderInput()}</div>}
      </Flex>
    </Flex>
  );
}

export default MultiSelectedValues;
