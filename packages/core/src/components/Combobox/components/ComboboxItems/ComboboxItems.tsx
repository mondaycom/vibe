import React, { type CSSProperties, forwardRef, type RefObject, useCallback, useMemo, useRef } from "react";
import cx from "classnames";
import { comboboxItemRenderer } from "../../ComboboxHelpers/ComboboxHelpers";
import VirtualizedList from "../../../../components/VirtualizedList/VirtualizedList";
import {
  COMBOBOX_CATEGORY_ITEM,
  COMBOBOX_OPTION_ITEM,
  type IComboboxCategoryMap,
  type IComboboxItem,
  type IComboboxOption,
  type IComboboxOptionEvents
} from "../ComboboxConstants";
import styles from "./ComboboxItems.module.scss";

export interface ComboboxItemsProps extends IComboboxOptionEvents {
  /**
   * Class name applied to the options container.
   */
  className?: string;
  /**
   * Class name applied to individual options.
   */
  optionClassName?: string;
  /**
   * The categories available in the combobox.
   */
  categories?: IComboboxCategoryMap;
  /**
   * The list of options displayed in the combobox.
   */
  options?: IComboboxItem[];
  /**
   * Custom renderer for an option.
   */
  optionRenderer?: (option: IComboboxOption) => JSX.Element;
  /**
   * The index of the currently active item.
   */
  activeItemIndex?: number;
  /**
   * The index of the item with visual focus.
   */
  visualFocusItemIndex?: number;
  /**
   * The height of each option item.
   */
  optionLineHeight?: number;
  /**
   * If true, the list scrolls to the selected item when opened.
   */
  shouldScrollToSelectedItem?: boolean;
  /**
   * If true, only renders visible options (optimization for large lists).
   */
  renderOnlyVisibleOptions?: boolean;
  /**
   * Callback fired when the active category changes.
   */
  onActiveCategoryChanged?: (category: IComboboxItem) => void;
  /**
   * The maximum number of options displayed without scrolling.
   */
  maxOptionsWithoutScroll?: number;
  /**
   * A map of item IDs to item data.
   */
  itemsMap?: Map<string, IComboboxItem>;
  /**
   * If true, categories remain visible when scrolling.
   */
  stickyCategories?: boolean;
  /**
   * The ID of the options container.
   */
  id?: string;
}

export const ComboboxItems: React.FC<ComboboxItemsProps> = forwardRef(
  (
    {
      className,
      optionClassName,
      categories,
      options,
      optionRenderer,
      activeItemIndex,
      visualFocusItemIndex,
      onOptionClick,
      onOptionEnter,
      onOptionLeave,
      optionLineHeight,
      shouldScrollToSelectedItem,
      renderOnlyVisibleOptions,
      onActiveCategoryChanged,
      maxOptionsWithoutScroll,
      itemsMap,
      stickyCategories,
      id
    },
    ref: RefObject<HTMLDivElement>
  ) => {
    const activeCategoryId = useRef<string>();
    const style = useMemo(() => {
      if (maxOptionsWithoutScroll) {
        // Adding 0.5 to show next option to indicate scroll is available
        const maxCount = Math.min(options.length + Object.keys(categories ?? {}).length, maxOptionsWithoutScroll + 0.5);
        return { height: optionLineHeight * maxCount };
      }
      return undefined;
    }, [maxOptionsWithoutScroll, optionLineHeight, options, categories]);

    const createItemElementRenderer = useCallback(
      (item: IComboboxItem, index: number, style: CSSProperties) =>
        comboboxItemRenderer({
          stickyCategories,
          item,
          style,
          optionEvents: {
            onOptionClick,
            onOptionEnter,
            onOptionLeave
          },
          optionRenderData: {
            className: optionClassName,
            optionLineHeight,
            optionRenderer,
            visualFocusItemIndex,
            scrollRef: renderOnlyVisibleOptions ? null : ref,
            activeItemIndex,
            shouldScrollToSelectedItem
          },
          isVirtualized: renderOnlyVisibleOptions
        }),
      [
        onOptionClick,
        onOptionEnter,
        onOptionLeave,
        optionClassName,
        optionLineHeight,
        optionRenderer,
        visualFocusItemIndex,
        renderOnlyVisibleOptions,
        ref,
        activeItemIndex,
        shouldScrollToSelectedItem
      ]
    );

    const onItemsRender = useCallback(
      ({ firstItemId }: { firstItemId?: string }) => {
        window.requestAnimationFrame(() => {
          const itemData = itemsMap.get(firstItemId);
          if (itemData && (itemData.type === COMBOBOX_CATEGORY_ITEM || itemData.type === COMBOBOX_OPTION_ITEM)) {
            const newActiveCategoryId =
              itemData.type === COMBOBOX_OPTION_ITEM && itemData.categoryId ? itemData.categoryId : itemData.id;

            if (newActiveCategoryId !== activeCategoryId.current) {
              activeCategoryId.current = newActiveCategoryId;
              const categoryObject = itemsMap.get(activeCategoryId.current);
              onActiveCategoryChanged(categoryObject);
            }
          }
        });
      },
      [itemsMap, onActiveCategoryChanged]
    );

    let itemsElements;

    // If we request to render only the items which visible in a given moment (optimization for very large lists)
    if (renderOnlyVisibleOptions) {
      itemsElements = (
        <VirtualizedList
          ref={ref}
          className={cx(styles.optionsContainer, className)}
          items={options}
          itemRenderer={createItemElementRenderer}
          role="listbox"
          scrollableClassName={styles.scrollableContainer}
          onItemsRendered={onItemsRender}
          style={style}
          id={id}
        />
      );
    } else {
      itemsElements = (
        <div
          className={cx(styles.scrollableContainer, styles.optionsContainer, className)}
          role="listbox"
          id={id}
          style={style}
          ref={ref}
        >
          {options.map((itemData, index) => createItemElementRenderer(itemData, index, undefined))}
        </div>
      );
    }

    return itemsElements;
  }
);
