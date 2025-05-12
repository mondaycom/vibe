import React, { useRef, useMemo } from "react";
import { BaseListItemData } from "../../BaseListItem";
import { Chips } from "../../Chips";
import { Flex } from "../../Flex";
import { DialogContentContainer } from "../../DialogContentContainer";
import Dialog from "../../Dialog/Dialog";
import useItemsOverflow from "../../../hooks/useItemsOverflow/useItemsOverflow";
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

  const visibleCount = useItemsOverflow({
    containerRef,
    items: selectedItems,
    gap: 4,
    deductedSpaceRef,
    itemSelector: ".chip-wrapper"
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
        <Flex direction="column" gap="xs" align="start">
          {hiddenItems.map((item, index) => (
            <Chips
              key={`dropdown-chip-${index}`}
              label={item.label}
              onDelete={() => onRemove(item)}
              disableClickableBehavior
              onMouseDown={e => {
                e.stopPropagation();
                e.preventDefault();
              }}
              noMargin
            />
          ))}
        </Flex>
      </DialogContentContainer>
    );
  }, [hiddenItems, onRemove]);

  if (!selectedItems?.length) return null;

  return (
    <Flex align="center" wrap={false} gap="xs" ref={containerRef} className={styles.containerWrapper}>
      {selectedItems.map((item, index) => {
        const isVisible = index < visibleCount;

        return (
          <div
            key={`dropdown-chip-${index}`}
            className={cx("chip-wrapper", { [styles.hiddenChip]: !isVisible })}
            aria-hidden={!isVisible}
          >
            <Chips label={item.label} onDelete={() => onRemove(item)} noMargin />
          </div>
        );
      })}

      <Flex ref={deductedSpaceRef} gap="xs">
        {hiddenCount > 0 && (
          <Dialog
            content={dialogContent}
            showTrigger="click"
            hideTrigger="clickoutside"
            position="bottom"
            moveBy={{ main: 4 }}
          >
            <Chips label={`+ ${hiddenCount}`} disableClickableBehavior readOnly noMargin />
          </Dialog>
        )}
        {renderInput && <div style={{ flexShrink: 0 }}>{renderInput()}</div>}
      </Flex>
    </Flex>
  );
}

export default MultiSelectedValues;
