import React, { useRef, useMemo, createRef } from "react";
import { BaseListItemData } from "../../../BaseListItem";
import { Chips, ChipsProps } from "../../../Chips";
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
  disabled?: boolean;
  readOnly?: boolean;
};

const getChipPropsFromItemElements = (item: BaseListItemData<Record<string, unknown>>): Partial<ChipsProps> => {
  const chipProps: Partial<ChipsProps> = {};
  if (item.startElement) {
    switch (item.startElement.type) {
      case "icon":
        chipProps.leftIcon = item.startElement.value;
        break;
      case "avatar":
        chipProps.leftAvatar = item.startElement.value;
        break;
      case "custom":
        chipProps.leftRenderer = item.startElement.render();
        break;
      default:
        break;
    }
  }

  if (item.endElement) {
    switch (item.endElement.type) {
      case "icon":
        chipProps.rightIcon = item.endElement.value;
        break;
      case "custom":
        chipProps.rightRenderer = item.endElement.render();
        break;
      default:
        break;
    }
  }
  return chipProps;
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
            const chipSpecificProps = getChipPropsFromItemElements(item);
            return (
              <Chips
                key={`dropdown-chip-dialog-${item.value}`}
                label={item.label}
                onDelete={() => onRemove(item)}
                noMargin
                className={styles.dialogChip}
                disabled={disabled} // Assuming dialog chips also respect main disabled/readonly state
                readOnly={readOnly}
                {...chipSpecificProps}
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
      const chipSpecificProps = getChipPropsFromItemElements(item);

      return (
        <div
          key={`dropdown-chip-visible-${item.value}`}
          ref={itemRefs[index]}
          className={cx({ [styles.hiddenChip]: !isVisible })}
          aria-hidden={!isVisible}
          data-testid={`dropdown-chip-${item.value}`}
        >
          <Chips
            label={item.label}
            onDelete={() => onRemove(item)}
            noMargin
            disabled={disabled}
            readOnly={readOnly}
            {...chipSpecificProps}
          />
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
              className={styles.overflowCounter}
            />
          </Dialog>
        )}
        {renderInput && <div className={styles.inputWrapper}>{renderInput()}</div>}
      </Flex>
    </Flex>
  );
}

export default MultiSelectedValues;
