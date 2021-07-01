/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState, forwardRef, useMemo, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import isFunction from "lodash/isFunction";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import Search from "../Search/Search";
import Icon from "../Icon/Icon";
import { SIZES } from "../../constants/sizes";
import Button from "../Button/Button";
import useListKeyboardNavigation from "../../hooks/useListKeyboardNavigation";
import "./Combobox.scss";

const renderOption = (index, option, isActive, isActiveByKeyboard, onOptionClick, onOptionHover, optionLineHeight) => {
  const {
    id,
    leftIcon,
    rightIcon,
    leftIconType,
    rightIconType,
    label,
    iconSize = 16,
    disabled,
    selected,
    ariaLabel
  } = option;

  const renderIcon = (icon, iconType, className) => {
    if (iconType === Combobox.iconTypes.RENDERER) {
      return icon(`option-icon ${className}`);
    } else {
      return (
        <Icon
          className={cx("option-icon", className)}
          iconType={Icon.type.ICON_FONT}
          clickable={false}
          icon={icon}
          iconSize={iconSize}
          ignoreFocusStyle
        />
      );
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div
      key={id || label}
      role="option"
      ariaLabel={ariaLabel || label}
      id={`combobox-item-${index}`}
      onMouseEnter={!disabled && onOptionHover}
      onClick={event => onOptionClick(event, index, option, true)}
      className={cx("combobox-option", {
        disabled,
        selected,
        active: isActive,
        "active-outline": isActiveByKeyboard && isActive
      })}
      style={{ height: optionLineHeight }}
    >
      {leftIcon && renderIcon(leftIcon, leftIconType, "left")}
      <div className="option-label">{label}</div>
      {rightIcon && renderIcon(rightIcon, rightIconType, "right")}
    </div>
  );
};

const renderCategory = category => {
  if (!category.label) return null;

  return (
    <div
      key={category.id}
      role="presentation"
      ariaLabel={category.ariaLabel || category.label}
      id={`combox-category-${category.id}`}
      className="category-label"
    >
      {category.label}
    </div>
  );
};

const getOptionsByCategories = (options, categories, filterValue) => {
  return options.reduce((result, option) => {
    const categoryId = option.categoryId;
    // skipping if the option doesn't have a category
    if (!categoryId) return result;
    if (categories[categoryId]?.onlyShowOnSearch && !filterValue) return result;

    if (result[categoryId]) {
      result[categoryId].push(option);
    } else {
      result[categoryId] = [option];
    }

    return result;
  }, {});
};

const Combobox = forwardRef(
  (
    {
      className,
      id,
      placeholder,
      size,
      optionLineHeight,
      backgroundColor,
      autoFocus,
      disabled,
      options,
      categories,
      noResultsMessage,
      onAddNew,
      addNewLabel,
      onClick
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const inputRef = useRef(null);
    const [activeItemIndex, setActiveItemIndex] = useState(-1);
    const [isActiveByKeyboard, setIsActiveByKeyboard] = useState(false);
    const [filterValue, setFilterValue] = useState("");
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    useEffect(() => {
      if (!inputRef.current) return;

      const inputElement = inputRef.current;
      inputElement.style.backgroundColor = backgroundColor;
    }, [inputRef, backgroundColor]);

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
          inputRef.current.focus();
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
      return options.filter(({ label }) => !filterValue || label.toLowerCase().includes(filterValue.toLowerCase()));
    }, [options, categories, filterValue]);

    const renderedItems = useMemo(() => {
      if (categories) {
        const optionsByCategories = getOptionsByCategories(filterdOptions, categories, filterValue);

        let index = 0;
        return Object.keys(optionsByCategories).map(categoryId => {
          return (
            <div role="group" aria-labelledby={`combox-category-${categoryId}`}>
              {renderCategory(categories[categoryId])}
              {optionsByCategories[categoryId].map(option => {
                const renderedOption = renderOption(
                  index,
                  option,
                  activeItemIndex === index,
                  isActiveByKeyboard,
                  onOptionClick,
                  onOptionHover,
                  optionLineHeight
                );
                index++;
                return renderedOption;
              })}
            </div>
          );
        });
      } else {
        return filterdOptions.map((option, index) => {
          return renderOption(
            index,
            option,
            activeItemIndex === index,
            isActiveByKeyboard,
            onOptionClick,
            onOptionHover,
            optionLineHeight
          );
        });
      }
    }, [filterdOptions, categories, activeItemIndex, isActiveByKeyboard, onOptionClick, onOptionHover]);

    const onChangeCallback = useCallback(
      value => {
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
      <div
        ref={mergedRef}
        className={cx("combobox--wrapper", className, { empty: !hasResults })}
        style={{ backgroundColor: backgroundColor }}
        id={id}
      >
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
        />
        <div className="combobox--wrapper-list" role="listbox">
          {renderedItems}
        </div>
        {hasFilter && !hasResults && renderNoResults()}
      </div>
    );
  }
);

Combobox.sizes = SIZES;
Combobox.iconTypes = {
  DEFAULT: "default",
  RENDERER: "renderer"
};

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
  backgroundColor: PropTypes.string,
  autoFocus: PropTypes.bool,
  onAddNew: PropTypes.func,
  addNewLabel: PropTypes.string
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
  backgroundColor: "var(--primary-background-color)",
  autoFocus: false,
  onAddNew: undefined,
  addNewLabel: "Add new"
};

export default Combobox;
