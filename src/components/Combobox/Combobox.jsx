/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState, forwardRef, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import isFunction from "lodash/isFunction";
import NOOP from "lodash/noop";
import cx from "classnames";
import { getTestId, ELEMENT_TYPES } from "../../utils/test-utils";
import useMergeRefs from "../../hooks/useMergeRefs";
import Search from "../Search/Search";
import { SIZES } from "../../constants/sizes";
import Button from "../Button/Button";
import ComboboxOption from "./components/ComboboxOption/ComboboxOption";
import { defaultFilter } from "./ComboboxService";
import { ComboboxItems } from "../../components/Combobox/components/ComboboxItems/ComboboxItems";
import { StickyCategoryHeader } from "../../components/Combobox/components/StickyCategoryHeader/StickyCategoryHeader";
import useActiveDescendantListFocus from "../../hooks/useActiveDescendantListFocus";
import { getOptionId } from "./ComboboxHelpers/ComboboxHelpers";
import "./Combobox.scss";

const Combobox = forwardRef(
  (
    {
      className,
      id,
      placeholder,
      size,
      defaultVisualFocusFirstIndex,
      optionLineHeight,
      optionsListHeight,
      autoFocus,
      disabled,
      options,
      categories,
      withCategoriesDivider,
      noResultsMessage,
      onAddNew,
      addNewLabel,
      onClick,
      filter,
      disableFilter,
      onFilterChanged,
      loading,
      onOptionHover,
      onOptionLeave,
      shouldScrollToSelectedItem,
      noResultsRenderer,
      stickyCategories,
      optionRenderer,
      renderOnlyVisibleOptions,
      clearFilterOnSelection,
      maxOptionsWithoutScroll,
      /**
       * temporary flag for investigate a bug - will remove very soon
       */
      forceUndoScrollNullCheck = false
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const inputRef = useRef(null);
    const resultsContainerRef = useRef(null);
    const [filterValue, setFilterValue] = useState("");
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const onChangeCallback = useCallback(
      value => {
        if (onFilterChanged) {
          onFilterChanged(value);
        }
        setFilterValue(value);
      },
      [setFilterValue, onFilterChanged]
    );

    const onOptionHoverCB = useCallback(
      (event, index, option) => {
        onOptionHover(event, index, option);
      },
      [onOptionHover]
    );

    const filteredOptions = useMemo(() => {
      if (disableFilter) {
        return options;
      }
      return filter(filterValue, options);
    }, [options, filterValue, filter, disableFilter]);

    const [activeOptionIndex, setActiveOptionIndex] = useState(-1);

    const isChildSelectable = useCallback(
      index => {
        return index !== undefined && filteredOptions[index] && !filteredOptions[index].disabled;
      },
      [filteredOptions]
    );

    const filteredOptionsIds = useMemo(
      () => filteredOptions.map((option, index) => getOptionId(option?.id, index)),
      [filteredOptions]
    );

    const onAddNewCallback = useCallback(() => {
      onAddNew && onAddNew(filterValue);
      // clear filter after adding
      setFilterValue("");
    }, [onAddNew, filterValue, setFilterValue]);

    const overrideOnClick = useCallback(
      (event, itemIndex) => {
        onClick(filteredOptions[itemIndex]);
        if (isChildSelectable(itemIndex)) {
          setActiveOptionIndex(itemIndex);
        }
        if (clearFilterOnSelection) {
          // clear filter after adding
          onChangeCallback("");
        }
      },
      [onClick, filteredOptions, isChildSelectable, clearFilterOnSelection, onChangeCallback]
    );

    const {
      visualFocusItemIndex,
      visualFocusItemId,
      onItemClickCallback: onOptionClick
    } = useActiveDescendantListFocus({
      defaultVisualFocusFirstIndex,
      focusedElementRef: inputRef,
      containerElementRef: resultsContainerRef,
      focusedElementRole: useActiveDescendantListFocus.roles.COMBOBOX,
      itemsIds: filteredOptionsIds,
      onItemClick: overrideOnClick,
      isItemSelectable: isChildSelectable,
      isIgnoreSpaceAsItemSelection: true
    });

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

    const [activeCategoryLabel, setActiveCategoryLabel] = useState();

    const onActiveCategoryChanged = useCallback(
      categoryData => {
        if (categoryData?.category?.label !== activeCategoryLabel) {
          setActiveCategoryLabel(categoryData?.category?.label);
        }
      },
      [activeCategoryLabel]
    );

    return (
      // eslint-disable-next-line jsx-a11y/aria-activedescendant-has-tabindex
      <div
        ref={mergedRef}
        className={cx("combobox--wrapper", className, `size-${size}`, {
          empty: !hasResults,
          "sticky-category": stickyCategories
        })}
        id={id}
        data-testid={getTestId(ELEMENT_TYPES.COMBOBOX, id)}
      >
        <div className="combobox--wrapper-list" style={{ maxHeight: optionsListHeight }} role="listbox">
          <Search
            ref={inputRef}
            value={filterValue}
            wrapperClassName="combobox--wrapper-search-wrapper"
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
            forceUndoScrollNullCheck={forceUndoScrollNullCheck}
            ref={resultsContainerRef}
            categories={categories}
            options={filteredOptions}
            filterValue={filterValue}
            withCategoriesDivider={withCategoriesDivider}
            optionRenderer={optionRenderer}
            activeItemIndex={activeOptionIndex}
            visualFocusItemIndex={visualFocusItemIndex}
            onActiveCategoryChanged={onActiveCategoryChanged}
            onOptionClick={onOptionClick}
            onOptionEnter={onOptionHoverCB}
            onOptionLeave={onOptionLeave}
            optionLineHeight={optionLineHeight}
            shouldScrollToSelectedItem={shouldScrollToSelectedItem}
            renderOnlyVisibleOptions={renderOnlyVisibleOptions}
            maxOptionsWithoutScroll={maxOptionsWithoutScroll}
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

Combobox.sizes = SIZES;
Combobox.iconTypes = ComboboxOption.iconTypes;

Combobox.propTypes = {
  className: PropTypes.string,
  /**
   * Placeholder to show when no value was selected
   */
  placeholder: PropTypes.string,
  /**
   * Unique element id
   */
  id: PropTypes.string,
  /**
   * A message that will be displayed inside the combo box when no results are found
   */
  noResultsMessage: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object),
  categories: PropTypes.object,
  /**
   * Divider between categories sections
   */
  withCategoriesDivider: PropTypes.bool,
  size: PropTypes.oneOf([Combobox.sizes.SMALL, Combobox.sizes.MEDIUM, Combobox.sizes.LARGE]),
  optionLineHeight: PropTypes.number,
  optionsListHeight: PropTypes.number,
  autoFocus: PropTypes.bool,
  /**
   * Callback that called after clicking on the add new combo box button.
   * @param {string} _filterValue
   */
  onAddNew: PropTypes.func,
  /**
   * The label of the button that appears at the end of the combo box when the search does not return appropriate options
   */
  addNewLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  filter: PropTypes.func,
  disableFilter: PropTypes.bool,
  onFilterChanged: PropTypes.func,
  /**
   * Display the combo box with loading state
   */
  loading: PropTypes.bool,
  /**
   * on mouse hover callback for option
   */
  onOptionHover: PropTypes.func,
  /**
   * on mouse leave callback for option
   */
  onOptionLeave: PropTypes.func,
  /**
   * Allowed to the following behavior: scrolling automatically to the combo box's selected option
   */
  shouldScrollToSelectedItem: PropTypes.bool,
  noResultsRenderer: PropTypes.func,
  stickyCategories: PropTypes.bool,
  /** By default the first option will be selected, when focusing selecting the first option, or when changing items */
  defaultVisualFocusFirstIndex: PropTypes.bool,
  /** Clear the filter/search on selection (click or enter) */
  clearFilterOnSelection: PropTypes.bool,
  /**
   * Replace the regular appearance of combo box option with custom renderer.
   */
  optionRenderer: PropTypes.func,
  /** Maximum options count without scroll */
  maxOptionsWithoutScroll: PropTypes.number,
  /**
   * Using virtualized list for rendering only the items which visible to the user in any given user (performance optimization)
   */
  renderOnlyVisibleOptions: PropTypes.bool,
  /**
   * On option click callback
   */
  onClick: PropTypes.func
};

Combobox.defaultProps = {
  className: "",
  placeholder: "",
  id: "",
  noResultsMessage: "No results found",
  disabled: false,
  options: [],
  categories: undefined,
  withCategoriesDivider: false,
  size: Combobox.sizes.MEDIUM,
  optionLineHeight: 32,
  optionsListHeight: undefined,
  autoFocus: false,
  maxOptionsWithoutScroll: undefined,
  onAddNew: undefined,
  addNewLabel: "Add new",
  filter: defaultFilter,
  disableFilter: false,
  onFilterChanged: undefined,
  loading: false,
  onOptionHover: NOOP,
  onOptionLeave: NOOP,
  shouldScrollToSelectedItem: true,
  noResultsRenderer: undefined,
  stickyCategories: false,
  optionRenderer: null,
  clearFilterOnSelection: false,
  defaultVisualFocusFirstIndex: undefined,
  renderOnlyVisibleOptions: false,
  onClick: _optionData => {}
};

export default Combobox;
