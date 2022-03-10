/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState, forwardRef, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import isFunction from "lodash/isFunction";
import NOOP from "lodash/noop";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import Search from "../Search/Search";
import { SIZES } from "../../constants/sizes";
import Button from "../Button/Button";
import useListKeyboardNavigation from "../../hooks/useListKeyboardNavigation";
import ComboboxOption from "./components/ComboboxOption/ComboboxOption";
import ComboboxCategory from "./components/ComboboxCategory/ComboboxCategory";
import { getOptionsByCategories, defaultFilter } from "./ComboboxService";
import "./Combobox.scss";
import Divider from "../Divider/Divider";

const Combobox = forwardRef(
  (
    {
      className,
      id,
      placeholder,
      size,
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
      clearFilterOnSelection
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const inputRef = useRef(null);
    const [activeItemIndex, setActiveItemIndex] = useState(-1);
    const [isActiveByKeyboard, setIsActiveByKeyboard] = useState(false);
    const [filterValue, setFilterValue] = useState("");
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const setActiveItemIndexKeyboardNav = useCallback(
      index => {
        setActiveItemIndex(index);
        setIsActiveByKeyboard(true);
      },
      [setActiveItemIndex]
    );

    const onOptionClick = useCallback(
      (_event, index, option, mouseClick) => {
        if (option.disabled) return;
        onClick && onClick(option);
        setActiveItemIndex(index);
        if (mouseClick) {
          // set focus on input again
          requestAnimationFrame(() => inputRef.current?.focus());
        }
        setIsActiveByKeyboard(!mouseClick);
        if (clearFilterOnSelection) {
          // clear filter after adding
          onChangeCallback("");
        }
      },
      [onClick, onChangeCallback, clearFilterOnSelection]
    );

    const onOptionEnter = useCallback(
      (event, index, option) => {
        setActiveItemIndex(-1);
        onOptionHover(event, index, option);
        if (clearFilterOnSelection) {
          // clear filter after adding
          onChangeCallback("");
        }
      },
      [setActiveItemIndex, onOptionHover, onChangeCallback, clearFilterOnSelection]
    );

    const filteredOptions = useMemo(() => {
      if (disableFilter) {
        return options;
      }
      return filter(filterValue, options);
    }, [options, filterValue, filter, disableFilter]);

    const renderedItems = useMemo(() => {
      if (categories) {
        const optionsByCategories = getOptionsByCategories(filteredOptions, categories, filterValue);

        let index = 0;
        return Object.keys(optionsByCategories).map((categoryId, categoryIndex) => {
          const withDivider = withCategoriesDivider && categoryIndex !== 0;
          return [
            withDivider ? <Divider className="combobox_category-divider" key={`${categoryId}-divider`} /> : null,
            <div
              role="group"
              aria-labelledby={`combox-category-${categoryId}`}
              key={categoryId}
              className={cx({ ["combobox_category--with-divider"]: withDivider })}
            >
              <ComboboxCategory category={categories[categoryId]} />
              {optionsByCategories[categoryId].map(option => {
                const renderedOption = (
                  <ComboboxOption
                    index={index}
                    key={option.id || index}
                    option={option}
                    optionRenderer={optionRenderer}
                    isActive={activeItemIndex === index}
                    isActiveByKeyboard={isActiveByKeyboard}
                    onOptionClick={onOptionClick}
                    onOptionHover={onOptionEnter}
                    onOptionLeave={onOptionLeave}
                    optionLineHeight={optionLineHeight}
                    shouldScrollWhenActive={shouldScrollToSelectedItem}
                  />
                );
                index++;
                return renderedOption;
              })}
            </div>
          ];
        });
      }
      return filteredOptions.map((option, index) => {
        return (
          <ComboboxOption
            index={index}
            key={option.id || index}
            option={option}
            optionRenderer={optionRenderer}
            isActive={activeItemIndex === index}
            isActiveByKeyboard={isActiveByKeyboard}
            onOptionClick={onOptionClick}
            onOptionHover={onOptionEnter}
            onOptionLeave={onOptionLeave}
            optionLineHeight={optionLineHeight}
            shouldScrollWhenActive={shouldScrollToSelectedItem}
          />
        );
      });
    }, [
      categories,
      filteredOptions,
      filterValue,
      withCategoriesDivider,
      optionRenderer,
      activeItemIndex,
      isActiveByKeyboard,
      onOptionClick,
      onOptionEnter,
      onOptionLeave,
      optionLineHeight,
      shouldScrollToSelectedItem
    ]);

    const onChangeCallback = useCallback(
      value => {
        if (onFilterChanged) {
          onFilterChanged(value);
        }
        setFilterValue(value);
      },
      [setFilterValue, onFilterChanged]
    );

    const isChildSelectable = useCallback(option => {
      return option && !option.disabled;
    }, []);

    const onAddNewCallback = useCallback(() => {
      onAddNew && onAddNew(filterValue);
      // clear filter after adding
      setFilterValue("");
    }, [onAddNew, filterValue, setFilterValue]);

    useListKeyboardNavigation(
      inputRef,
      filteredOptions,
      activeItemIndex,
      setActiveItemIndexKeyboardNav,
      isChildSelectable,
      onOptionClick
    );

    const hasResults = renderedItems.length > 0;
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
          <div className="message-wrapper">
            <span className="message">{noResultsMessage}</span>
          </div>
          {onAddNew && !disabled && (
            <Button className="add-new-button" size={size} kind={Button.kinds.TERTIARY} onClick={onAddNewCallback}>
              <span className="button-label">{getAddNewLabel()}</span>
            </Button>
          )}
        </div>
      );
    }

    return (
      // eslint-disable-next-line jsx-a11y/aria-activedescendant-has-tabindex
      <div
        ref={mergedRef}
        className={cx("combobox--wrapper", className, `size-${size}`, {
          empty: !hasResults,
          "sticky-category": stickyCategories
        })}
        id={id}
      >
        <div className="combobox--wrapper-list" style={{ maxHeight: optionsListHeight }} role="listbox">
          <Search
            ref={inputRef}
            value={filterValue}
            wrapperClassName="combobox--wrapper-search-wrapper"
            className="combobox--wrapper-search"
            inputAriaLabel="Search for content"
            activeDescendant={`combobox-item-${activeItemIndex}`}
            id="combobox-search"
            placeholder={placeholder}
            size={size}
            disabled={disabled}
            onChange={onChangeCallback}
            autoFocus={autoFocus}
            loading={loading}
          />
          {renderedItems}
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
  /** Clear the filter/search on selection (click or enter) */
  clearFilterOnSelection: PropTypes.bool,
  /**
   * Replace the regular appearance of combo box option with custom renderer.
   */
  optionRenderer: PropTypes.func
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
  /**
   * Callback that called after clicking on the add new combo box button.
   */
  onAddNew: undefined,
  /**
   * The button label appears at the end of the combo box when the search does not return appropriate options.
   * The button will not be displayed if you have not passed a function for the onAddNew prop
   */
  addNewLabel: "Add new",
  filter: defaultFilter,
  disableFilter: false,
  onFilterChanged: undefined,
  /** shows loading animation */
  loading: false,
  onOptionHover: NOOP,
  onOptionLeave: NOOP,
  shouldScrollToSelectedItem: true,
  noResultsRenderer: undefined,
  stickyCategories: false,
  optionRenderer: null,
  clearFilterOnSelection: false
};

export default Combobox;
