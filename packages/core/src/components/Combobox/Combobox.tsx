import { camelCase } from "lodash-es";
import cx from "classnames";
import React, { useRef, useState, forwardRef, useMemo, useCallback } from "react";
import { isFunction, noop as NOOP } from "lodash-es";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import useMergeRef from "../../hooks/useMergeRef";
import Search from "../Search/Search";
import { BASE_SIZES } from "../../constants";
import { Button } from "@vibe/button";
import Text from "../Text/Text";
import ComboboxOption from "./components/ComboboxOption/ComboboxOption";
import { defaultFilter } from "./ComboboxService";
import { ComboboxItems } from "./components/ComboboxItems/ComboboxItems";
import { StickyCategoryHeader } from "./components/StickyCategoryHeader/StickyCategoryHeader";
import { useItemsData, useKeyboardNavigation } from "./ComboboxHelpers/ComboboxHelpers";
import { getOptionId } from "./helpers";
import { type ElementContent, type VibeComponentProps, withStaticProps } from "../../types";
import {
  type IComboboxCategoryMap,
  type IComboboxItem,
  type IComboboxOption,
  COMBOBOX_LISTBOX_ID,
  type IComboboxCategory
} from "./components/ComboboxConstants";
import styles from "./Combobox.module.scss";
import { type ComboboxSizes } from "./Combobox.types";
import type IconButton from "../IconButton/IconButton";
import type MenuButton from "../MenuButton/MenuButton";
import { ComponentVibeId } from "../../tests/constants";
import { type SubIcon } from "@vibe/icon";

export interface ComboboxProps extends VibeComponentProps {
  /**
   * Class name applied to each option item.
   */
  optionClassName?: string;
  /**
   * Class name applied to the search wrapper.
   */
  searchWrapperClassName?: string;
  /**
   * Class name applied to the sticky category header.
   */
  stickyCategoryClassName?: string;
  /**
   * Placeholder text displayed in the search input.
   */
  placeholder?: string;
  /**
   * Message displayed when no results are found.
   */
  noResultsMessage?: string;
  /**
   * If true, the combobox is disabled.
   */
  disabled?: boolean;
  /**
   * The list of available options.
   */
  options?: IComboboxOption[];
  /**
   * The list of available categories.
   */
  categories?: IComboboxCategoryMap;
  /**
   * If true, displays a divider between category sections.
   */
  withCategoriesDivider?: boolean;
  /**
   * The size of the combobox.
   */
  size?: ComboboxSizes;
  /**
   * The height of each option item.
   */
  optionLineHeight?: number;
  /**
   * The height of the options list.
   */
  optionsListHeight?: number;
  /**
   * If true, the search input is focused when the component mounts.
   */
  autoFocus?: boolean;
  /**
   * Callback fired when the "Add new" button is clicked.
   */
  onAddNew?: (value: string) => void;
  /**
   * Label displayed for the "Add new" button.
   */
  addNewLabel?: ((label: string) => ElementContent) | string;
  /**
   * Custom filter function for searching options.
   */
  filter?: (filterValue: string, options: IComboboxOption[]) => IComboboxOption[];
  /**
   * The default search input
   */
  defaultFilter?: string;
  /**
   * If true, disables filtering.
   */
  disableFilter?: boolean;
  /**
   * Controlled search input value.
   */
  filterValue?: string;
  /**
   * Callback fired when the search input value changes.
   */
  onFilterChanged?: (value: string) => void;
  /**
   * If true, displays a loading state.
   */
  loading?: boolean;
  /**
   * Callback fired when an option is hovered.
   */
  onOptionHover?: (event: React.MouseEvent, index: number, option: IComboboxOption) => void;
  /**
   * Callback fired when the mouse leaves an option.
   */
  onOptionLeave?: () => void;
  /**
   * If true, automatically scrolls to the selected option.
   */
  shouldScrollToSelectedItem?: boolean;
  /**
   * Custom renderer for when no results are found.
   */
  noResultsRenderer?: () => JSX.Element;
  /**
   * If true, keeps categories visible when scrolling.
   */
  stickyCategories?: boolean;
  /**
   * If true, visually focuses the first item by default.
   */
  defaultVisualFocusFirstIndex?: boolean;
  /**
   * If true, clears the search input when an option is selected.
   */
  clearFilterOnSelection?: boolean;
  /**
   * Custom renderer for options.
   */
  optionRenderer?: (option: IComboboxOption) => JSX.Element;
  /**
   * Maximum number of options displayed before scrolling.
   */
  maxOptionsWithoutScroll?: number;
  /**
   * If true, renders only visible options for performance optimization.
   */
  renderOnlyVisibleOptions?: boolean;
  /**
   * Callback fired when an option is clicked.
   */
  onClick?: (optionData: IComboboxOption) => void;
  /**
   * Custom search icon.
   */
  searchIcon?: SubIcon;
  /**
   * ARIA label for the search input.
   */
  searchInputAriaLabel?: string;
  /**
   * The debounce rate for filtering.
   */
  debounceRate?: number;
  /**
   * Ref for the search input element.
   */
  searchInputRef?: React.RefObject<HTMLInputElement>;
  /**
   * Additional action button inside the search input.
   */
  renderAction?: React.ReactElement<typeof IconButton | typeof MenuButton>;
  /**
   * If true, hides the additional action when the user types in the search input.
   */
  hideRenderActionOnInput?: boolean;
}

const Combobox = forwardRef(
  (
    {
      className = "",
      optionClassName = "",
      searchWrapperClassName,
      stickyCategoryClassName,
      searchIcon,
      id = "",
      placeholder = "",
      size = "medium",
      defaultVisualFocusFirstIndex,
      optionLineHeight = 32,
      optionsListHeight,
      autoFocus = false,
      disabled = false,
      options = [],
      categories,
      withCategoriesDivider = false,
      noResultsMessage = "No results found",
      onAddNew,
      addNewLabel = "Add new",
      onClick = (_optionData: IComboboxOption) => {},
      filter = defaultFilter,
      disableFilter = false,
      filterValue: filterValueProp,
      onFilterChanged,
      loading = false,
      onOptionHover = NOOP,
      onOptionLeave = NOOP,
      shouldScrollToSelectedItem = true,
      noResultsRenderer,
      stickyCategories = false,
      optionRenderer = null,
      renderOnlyVisibleOptions = false,
      clearFilterOnSelection = false,
      maxOptionsWithoutScroll,
      defaultFilter: defaultFilterValue = "",
      searchInputAriaLabel = "Search for content",
      "data-testid": dataTestId,
      debounceRate,
      searchInputRef,
      renderAction: RenderAction,
      hideRenderActionOnInput
    }: ComboboxProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const componentRef = useRef(null);
    const inputRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);
    const mergedInputRef = useMergeRef(inputRef, searchInputRef);

    const [filterValue, setFilterValue] = useState(filterValueProp || defaultFilterValue);

    if (filterValueProp !== undefined && filterValueProp !== filterValue) {
      setFilterValue(filterValueProp);
    }

    const onChangeCallback = useCallback(
      (value: string) => {
        setActiveOptionIndex(-1);
        if (onFilterChanged) {
          onFilterChanged(value);
        }
        setFilterValue(value);
      },
      [setFilterValue, onFilterChanged]
    );

    const onOptionHoverCB = useCallback(
      (event: React.MouseEvent, index: number, option: IComboboxOption) => {
        onOptionHover(event, index, option);
      },
      [onOptionHover]
    );

    const filteredOptions: IComboboxOption[] = useMemo(() => {
      if (disableFilter) {
        return options;
      }
      return filter(filterValue, options);
    }, [options, filterValue, filter, disableFilter]);

    const [activeOptionIndex, setActiveOptionIndex] = useState(-1);

    const isChildSelectable = useCallback(
      (index: number) => {
        return index !== undefined && filteredOptions[index] && !filteredOptions[index].disabled;
      },
      [filteredOptions]
    );

    const onAddNewCallback = useCallback(() => {
      onAddNew && onAddNew(filterValue);
      // clear filter after adding
      setFilterValue("");
    }, [onAddNew, filterValue, setFilterValue]);

    const hasResults = filteredOptions.length > 0;
    const hasFilter = filterValue.length > 0;

    function getAddNewLabel() {
      if (isFunction(addNewLabel)) {
        return addNewLabel(filterValue);
      }
      return addNewLabel;
    }

    function renderNoResults() {
      if (noResultsRenderer) {
        return noResultsRenderer();
      }

      return (
        <div className={styles.comboboxNoResults}>
          <div className={styles.comboboxMessageWrapper}>
            <span className={styles.comboboxMessage}>{noResultsMessage}</span>
          </div>
          {onAddNew && !disabled && (
            <Button className={styles.addNewButton} size={size} kind="tertiary" onClick={onAddNewCallback}>
              <span className={styles.buttonLabel}>{getAddNewLabel()}</span>
            </Button>
          )}
        </div>
      );
    }

    const [activeCategory, setActiveCategory] = useState<IComboboxCategory>();

    const onActiveCategoryChanged = useCallback(
      (categoryData: IComboboxItem) => {
        if (categoryData?.category?.label !== activeCategory?.label) {
          setActiveCategory(categoryData?.category);
        }
      },
      [activeCategory]
    );

    const { items, itemsMap, selectableItems } = useItemsData({
      categories,
      options: filteredOptions,
      filterValue,
      withCategoriesDivider,
      optionLineHeight
    });

    const overrideOnClick = useCallback(
      (_event: React.MouseEvent | React.KeyboardEvent, itemIndex: number) => {
        onClick(selectableItems[itemIndex]);
        if (isChildSelectable(itemIndex)) {
          setActiveOptionIndex(itemIndex);
        }
        if (clearFilterOnSelection) {
          // clear filter after adding
          onChangeCallback("");
        }
      },
      [onClick, selectableItems, isChildSelectable, clearFilterOnSelection, onChangeCallback]
    );

    const {
      visualFocusItemIndex,
      visualFocusItemId,
      onOptionClick: overrideOnOptionClick
    } = useKeyboardNavigation({
      getOptionId,
      defaultVisualFocusFirstIndex,
      onClick: overrideOnClick,
      isChildSelectable,
      options: selectableItems,
      inputRef: mergedInputRef
    });

    return (
      <Text
        type="text2"
        ref={mergedRef}
        className={cx(styles.combobox, className, getStyle(styles, camelCase("size-" + size)), {
          [styles.empty]: !hasResults,
          [styles.stickyCategory]: stickyCategories
        })}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.COMBOBOX, id)}
        ellipsis={false}
        data-vibe={ComponentVibeId.COMBOBOX}
      >
        <div className={styles.comboboxList} style={{ maxHeight: optionsListHeight }}>
          <Search
            ref={mergedInputRef}
            value={filterValue}
            className={cx(styles.comboboxSearchWrapper, searchWrapperClassName)}
            inputAriaLabel={searchInputAriaLabel}
            currentAriaResultId={visualFocusItemId}
            id="combobox-search"
            placeholder={placeholder}
            size={size}
            disabled={disabled}
            onChange={onChangeCallback}
            autoFocus={autoFocus}
            loading={loading}
            searchIconName={searchIcon}
            ariaExpanded={hasFilter || hasResults}
            ariaHasPopup="listbox"
            searchResultsContainerId={id ? `${id}-listbox` : COMBOBOX_LISTBOX_ID}
            debounceRate={debounceRate}
            renderAction={RenderAction}
            hideRenderActionOnInput={hideRenderActionOnInput}
          />
          {stickyCategories && (
            <StickyCategoryHeader
              label={activeCategory?.label}
              color={activeCategory?.color}
              className={stickyCategoryClassName}
            />
          )}
          {hasResults && (
            <ComboboxItems
              stickyCategories={stickyCategories}
              categories={categories}
              options={items}
              itemsMap={itemsMap}
              optionClassName={optionClassName}
              optionRenderer={optionRenderer}
              activeItemIndex={activeOptionIndex}
              onActiveCategoryChanged={onActiveCategoryChanged}
              onOptionClick={overrideOnOptionClick}
              onOptionEnter={onOptionHoverCB}
              onOptionLeave={onOptionLeave}
              optionLineHeight={optionLineHeight}
              shouldScrollToSelectedItem={shouldScrollToSelectedItem}
              renderOnlyVisibleOptions={renderOnlyVisibleOptions}
              maxOptionsWithoutScroll={maxOptionsWithoutScroll}
              visualFocusItemIndex={visualFocusItemIndex}
              id={id ? `${id}-listbox` : COMBOBOX_LISTBOX_ID}
            />
          )}
        </div>
        {hasFilter && !hasResults && !loading && renderNoResults()}
      </Text>
    );
  }
);

// Locate loading next to search icon
// color it with --secondary-text-color
// size it like the icon - we think it's 16px - make sure it's not fat

interface ComboboxStaticProps {
  sizes: typeof BASE_SIZES;
  iconTypes: typeof ComboboxOption.iconTypes;
}

export default withStaticProps<ComboboxProps, ComboboxStaticProps>(Combobox, {
  sizes: BASE_SIZES,
  iconTypes: ComboboxOption.iconTypes
});
