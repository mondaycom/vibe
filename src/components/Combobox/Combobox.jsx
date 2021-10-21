/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState, forwardRef, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import isFunction from "lodash/isFunction";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import Search from "../Search/Search";
import { SIZES } from "../../constants/sizes";
import Button from "../Button/Button";
import useListKeyboardNavigation from "../../hooks/useListKeyboardNavigation";
import ComboboxOption from "./components/ComboboxOption/ComboboxOption";
import ComboboxCategory from "./components/ComboboxCategory/ComboboxCategory";
import { getOptionsByCategories } from "./ComboboxService";
import "./Combobox.scss";

const defaultFilter = (filterValue, options) =>
  options.filter(({ label }) => !filterValue || label.toLowerCase().includes(filterValue.toLowerCase()));

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
      noResultsMessage,
      onAddNew,
      addNewLabel,
      onClick,
      filter,
      disableFilter,
      onFilterChanged,
      loading
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
          inputRef.current?.focus();
        }
        setIsActiveByKeyboard(!mouseClick);
      },
      [onClick]
    );

    const onOptionHover = useCallback(
      _event => {
        setActiveItemIndex(-1);
      },
      [setActiveItemIndex]
    );

    const filterdOptions = useMemo(() => {
      if (disableFilter) {
        return options;
      }
      return filter(filterValue, options);
    }, [options, categories, filterValue, filter, disableFilter]);

    const renderedItems = useMemo(() => {
      if (categories) {
        const optionsByCategories = getOptionsByCategories(filterdOptions, categories, filterValue);

        let index = 0;
        return Object.keys(optionsByCategories).map(categoryId => {
          return (
            <div role="group" aria-labelledby={`combox-category-${categoryId}`}>
              <ComboboxCategory category={categories[categoryId]} />
              {optionsByCategories[categoryId].map(option => {
                const renderedOption = (
                  <ComboboxOption
                    index={index}
                    option={option}
                    isActive={activeItemIndex === index}
                    isActiveByKeyboard={isActiveByKeyboard}
                    onOptionClick={onOptionClick}
                    onOptionHover={onOptionHover}
                    optionLineHeight={optionLineHeight}
                  />
                );
                index++;
                return renderedOption;
              })}
            </div>
          );
        });
      }
      return filterdOptions.map((option, index) => {
        return (
          <ComboboxOption
            index={index}
            option={option}
            isActive={activeItemIndex === index}
            isActiveByKeyboard={isActiveByKeyboard}
            onOptionClick={onOptionClick}
            onOptionHover={onOptionHover}
            optionLineHeight={optionLineHeight}
          />
        );
      });
    }, [filterdOptions, categories, activeItemIndex, isActiveByKeyboard, onOptionClick, onOptionHover]);

    const onChangeCallback = useCallback(
      value => {
        if (onFilterChanged) {
          onFilterChanged(value);
        }
        setFilterValue(value);
      },
      [setFilterValue]
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
      filterdOptions,
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
      <div ref={mergedRef} className={cx("combobox--wrapper", className, { empty: !hasResults })} id={id}>
        <Search
          ref={inputRef}
          wrapperClassName="combobox--wrapper-search-wrapper"
          className="combobox--wrapper-search"
          inputAriaLabel="Search for content"
          activeDescendant={`combobox-item-${activeItemIndex}`}
          id="combobox-search"
          iconName="fa-search"
          secondaryIconName="fa-close"
          placeholder={placeholder}
          size={size}
          disabled={disabled}
          onChange={onChangeCallback}
          autoFocus={autoFocus}
          loading={loading}
        />
        <div className="combobox--wrapper-list" style={{ maxHeight: optionsListHeight }} role="listbox">
          {renderedItems}
        </div>
        {!loading && hasFilter && !hasResults && renderNoResults()}
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
  placeholder: PropTypes.string,
  id: PropTypes.string,
  noResultsMessage: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object),
  categories: PropTypes.object,
  size: PropTypes.oneOf([Combobox.sizes.SMALL, Combobox.sizes.MEDIUM, Combobox.sizes.LARGE]),
  optionLineHeight: PropTypes.number,
  optionsListHeight: PropTypes.number,
  autoFocus: PropTypes.bool,
  onAddNew: PropTypes.func,
  addNewLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  filter: PropTypes.func,
  disableFilter: PropTypes.bool,
  onFilterChanged: PropTypes.func,
  loading: PropTypes.bool
};
Combobox.defaultProps = {
  className: "",
  placeholder: "",
  id: "",
  noResultsMessage: "No results found",
  disabled: false,
  options: [],
  categories: undefined,
  size: Combobox.sizes.MEDIUM,
  optionLineHeight: 32,
  optionsListHeight: undefined,
  autoFocus: false,
  onAddNew: undefined,
  addNewLabel: "Add new",
  filter: defaultFilter,
  disableFilter: false,
  onFilterChanged: undefined,
  loading: false
};

export default Combobox;
