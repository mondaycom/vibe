import React, { useRef, useMemo, useCallback, createRef } from "react";
import { type BaseItemData } from "../../../BaseItem";
import { Chips } from "../../../Chips";
import { Flex } from "@vibe/layout";
import { DialogContentContainer, Dialog } from "@vibe/dialog";
import { useMergeRef } from "@vibe/shared";
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
  const dialogContentRef = useRef<HTMLDivElement>(null);
  const localBadgeRef = useRef<HTMLDivElement>(null);
  const mergedBadgeRef = useMergeRef(badgeRef, localBadgeRef);

  // Focus the dialog's first control on open. onDialogDidShow fires just before the content mounts,
  // so defer to the next frame.
  const handleDialogDidShow = useCallback(() => {
    requestAnimationFrame(() => {
      const firstFocusable = dialogContentRef.current?.querySelector<HTMLElement>(
        "button, [href], input, [tabindex]:not([tabindex='-1'])"
      );
      firstFocusable?.focus();
    });
  }, []);

  // Return focus to the +N badge when the dialog is dismissed with Esc. Defer to the next frame:
  // onDialogDidHide fires before the dialog content unmounts, and that teardown would otherwise
  // reset focus to <body> (the top of the page) after a synchronous focus call.
  const handleDialogDidHide = useCallback((_event: unknown, eventName: string) => {
    if (eventName !== "esckey") return;
    requestAnimationFrame(() => {
      const badge =
        localBadgeRef.current ??
        deductedSpaceRef.current?.querySelector<HTMLElement>('[data-testid="dropdown-overflow-counter"]');
      badge?.focus();
    });
  }, []);

  const itemRefs = useMemo(() => selectedItems.map(() => createRef<HTMLDivElement>()), [selectedItems]);

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
        <Flex direction="column" gap="xs" align="start" ref={dialogContentRef} className={styles.hiddenChipsDialog}>
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
      const { ref: extraRef, ...extraAttrs } = extraProps;

      return (
        <div
          key={`dropdown-chip-visible-${item.value}`}
          ref={el => {
            (itemRefs[index] as React.MutableRefObject<HTMLDivElement | null>).current = el;
            if (typeof extraRef === "function") extraRef(el);
          }}
          className={cx({
            [styles.chipWrapperWithOverflow]: minVisibleCount !== undefined,
            [styles.hiddenChip]: !isVisible
          })}
          aria-hidden={!isVisible}
          data-testid={`dropdown-chip-${item.value}`}
          {...extraAttrs}
        >
          <DropdownChip
            item={item}
            onDelete={() => onRemove(item)}
            disabled={disabled}
            readOnly={readOnly}
            className={styles.visibleChip}
          />
        </div>
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
                (itemRefs[visibleCount - 1] as React.MutableRefObject<HTMLDivElement | null>)?.current?.focus();
              }
            }}
            onMouseDown={e => {
              e.stopPropagation();
            }}
          >
            <Dialog
              content={dialogContent}
              showTrigger={["click", "enter"]}
              // "enter" is intentionally NOT a hide trigger: Enter keydown opens and the Enter keyup
              // would otherwise immediately toggle it shut. Close via Esc or click-outside instead.
              hideTrigger={["clickoutside"]}
              position="bottom"
              moveBy={{ main: 4 }}
              hideWhenReferenceHidden
              addKeyboardHideShowTriggersByDefault
              onDialogDidShow={handleDialogDidShow}
              onDialogDidHide={handleDialogDidHide}
            >
              <Chips
                ref={mergedBadgeRef}
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
