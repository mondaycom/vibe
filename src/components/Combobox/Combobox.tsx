/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState, forwardRef, useMemo, useCallback } from "react";
import { isFunction, noop as NOOP } from "lodash-es";
import cx from "classnames";
import { ComponentDefaultTestId } from "../../tests/constants";
import { getTestId } from "../../tests/test-ids-utils";
import useMergeRefs from "../../hooks/useMergeRefs";
import Search from "../Search/Search";
import { BASE_SIZES } from "../../constants";
import Button from "../Button/Button";
import ComboboxOption from "./components/ComboboxOption/ComboboxOption";
import { defaultFilter } from "./ComboboxService";
import { ComboboxItems } from "./components/ComboboxItems/ComboboxItems";
import { StickyCategoryHeader } from "./components/StickyCategoryHeader/StickyCategoryHeader";
import { useItemsData, useKeyboardNavigation } from "./ComboboxHelpers/ComboboxHelpers";
import { getOptionId } from "./helpers";
import { ElementContent } from "../../types/ElementContent";
import { VibeComponentProps } from "../../types";
import { IComboboxCategoryMap, IComboboxItem, IComboboxOption } from "./components/ComboboxConstants";
import "./Combobox.scss";

export interface ComboboxProps extends VibeComponentProps {
  className?: string;
  optionClassName?: string;
  searchWrapperClassName?: string;
  /**
   * Placeholder to show when no value was selected
   */
  placeholder?: string;
  /**
   * Unique element id
   */
  id?: string;
  /**
   * A message that will be displayed inside the combo box when no results are found
   */
  noResultsMessage?: string;
  disabled?: boolean;
  options?: IComboboxOption[];
  categories?: IComboboxCategoryMap;
  /**
   * Divider between categories sections
   */
  withCategoriesDivider?: boolean;
  size?: typeof BASE_SIZES[keyof typeof BASE_SIZES];
  optionLineHeight?: number;
  optionsListHeight?: number;
  autoFocus?: boolean;
  /**
   * Callback that called after clicking on the add new combo box button.
   * @param {string} _filterValue
   */
  onAddNew?: (value: string) => void;
  /**
   * The label of the button that appears at the end of the combo box when the search does not return appropriate options
   */
  addNewLabel?: ((label: string) => ElementContent) | string;
  filter?: (filterValue: string, options: IComboboxOption[]) => IComboboxOption[];
  disableFilter?: boolean;
  onFilterChanged?: (value: string) => void;
  /**
   * Display the combo box with loading state
   */
  loading?: boolean;
  /**
   * on mouse hover callback for option
   */
  // onOptionHover?: PropTypes.func,
  onOptionHover?: () => void;
  /**
   * on mouse leave callback for option
   */
  // onOptionLeave?: PropTypes.func,
  onOptionLeave?: () => void;
  /**
   * Allowed to the following behavior: scrolling automatically to the combo box's selected option
   */
  shouldScrollToSelectedItem?: boolean;
  noResultsRenderer?: () => JSX.Element;
  stickyCategories?: boolean;
  /** By default, the first option will be selected, when focusing selecting the first option, or when changing items */
  defaultVisualFocusFirstIndex?: boolean;
  /** Clear the filter/search on selection (click or enter) */
  clearFilterOnSelection?: boolean;
  /** Replace the regular appearance of combo box option with custom renderer. */
  optionRenderer?: (option: IComboboxOption) => JSX.Element;
  /** Maximum options count without scroll */
  maxOptionsWithoutScroll?: number;
  /**
   * Using virtualized list for rendering only the items which visible to the user in any given user (performance optimization)
   */
  renderOnlyVisibleOptions?: boolean;
  /**
   * On option click callback
   */
  onClick?: (optionData: IComboboxOption) => void;
}

const Combobox: React.FC<ComboboxProps> & {
  sizes?: typeof BASE_SIZES;
  iconTypes?: typeof ComboboxOption.iconTypes;
} = forwardRef(
  (
    {
      className = "",
      optionClassName = "",
      searchWrapperClassName,
      id = "",
      placeholder = "",
      size = Combobox.sizes.MEDIUM,
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
      maxOptionsWithoutScroll
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const inputRef = useRef(null);
    const [filterValue, setFilterValue] = useState("");
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const onChangeCallback = useCallback(
      (value: string) => {
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
        <div className="combobox--wrapper-no-results">
          <div className="combobox-message-wrapper">
            <span className="combobox-message">{noResultsMessage}</span>
          </div>
          {onAddNew && !disabled && (
            <Button className="add-new-button" size={size} kind={Button.kinds.TERTIARY} onClick={onAddNewCallback}>
              <span className="button-label">{getAddNewLabel()}</span>
            </Button>
          )}
        </div>
      );
    }

    const [activeCategoryLabel, setActiveCategoryLabel] = useState<string>();

    const onActiveCategoryChanged = useCallback(
      (categoryData: IComboboxItem) => {
        if (categoryData?.category?.label !== activeCategoryLabel) {
          setActiveCategoryLabel(categoryData?.category?.label);
        }
      },
      [activeCategoryLabel]
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
      inputRef
    });

    return (
      <div
        ref={mergedRef}
        className={cx("combobox--wrapper", className, `size-${size}`, {
          empty: !hasResults,
          "sticky-category": stickyCategories
        })}
        id={id}
        data-testid={getTestId(ComponentDefaultTestId.COMBOBOX, id)}
      >
        <div className="combobox--wrapper-list" style={{ maxHeight: optionsListHeight }} role="listbox">
          <Search
            ref={inputRef}
            value={filterValue}
            wrapperClassName={cx("combobox--wrapper-search-wrapper", searchWrapperClassName)}
            className="combobox--wrapper-search"
            inputAriaLabel="Search for content"
            activeDescendant={visualFocusItemId}
            id="combobox-search"
            placeholder={placeholder}
            size={size}
            disabled={disabled}
            onChange={onChangeCallback}
            autoFocus={autoFocus}
            loading={loading}
          />
          {stickyCategories && <StickyCategoryHeader label={activeCategoryLabel} />}
          <ComboboxItems
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
          />
        </div>
        {hasFilter && !hasResults && !loading && renderNoResults()}
      </div>
    );
  }
);

// Locate loading next to search icon
// color it with --secondary-text-color
// size it like the icon - we think it's 16px - make sure it's not fat

Object.assign(Combobox, {
  sizes: BASE_SIZES,
  iconTypes: ComboboxOption.iconTypes,
  defaultTestId: ComponentDefaultTestId.COMBOBOX
});

export default Combobox;
