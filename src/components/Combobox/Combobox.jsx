import React, { useRef, useState, forwardRef, useMemo, useCallback } from "react";
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

const renderOption = (index, option, isActive, onOptionClick, onOptionHover) => {
  const { id, leftIcon, rightIcon, label, iconSize = 16, disabled, selected } = option;
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      key={id || label}
      onMouseEnter={onOptionHover}
      onClick={event => onOptionClick(event, index)}
      className={cx("combobox-option", { disabled, selected, active: isActive })}
    >
      {leftIcon && (
        <Icon
          className="option-icon left"
          iconType={Icon.type.ICON_FONT}
          clickable={false}
          icon={leftIcon}
          iconSize={iconSize}
          ignoreFocusStyle
        />
      )}
      <div className="option-label">{label}</div>
      {rightIcon && (
        <Icon
          className="option-icon right"
          iconType={Icon.type.ICON_FONT}
          clickable={false}
          icon={rightIcon}
          iconSize={iconSize}
          ignoreFocusStyle
        />
      )}
    </div>
  );
};

const Combobox = forwardRef(
  ({ className, id, placeholder, size, disabled, options, noResultsMessage, onAddNew, addNewLabel, onClick }, ref) => {
    const componentRef = useRef(null);
    const inputRef = useRef(null);
    const [activeItemIndex, setActiveItemIndex] = useState(-1);
    const [filterValue, setFilterValue] = useState("");
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const onOptionClick = useCallback(
      (_event, optionIndex) => {
        onClick && onClick(options[optionIndex]);
      },
      [onClick, options]
    );

    const onOptionHover = useCallback(
      _event => {
        setActiveItemIndex(-1);
      },
      [setActiveItemIndex]
    );

    const renderedItems = useMemo(() => {
      return options
        .filter(({ label }) => !filterValue || label.includes(filterValue))
        .map((option, index) => {
          return renderOption(index, option, activeItemIndex === index, onOptionClick, onOptionHover);
        });
    }, [options, filterValue, onOptionClick, activeItemIndex, onOptionHover]);

    const onChangeCallback = useCallback(
      value => {
        setFilterValue(value);
      },
      [setFilterValue]
    );

    const isChildSelectable = useCallback((index, currentOptions) => {
      return currentOptions[index] && !currentOptions[index].disabled;
    }, []);

    const onAddNewCallback = useCallback(() => {
      onAddNew && onAddNew(filterValue);
    }, [onAddNew, filterValue]);

    useListKeyboardNavigation(inputRef, options, activeItemIndex, setActiveItemIndex, isChildSelectable, onOptionClick);

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
      <div ref={mergedRef} className={cx("combobox--wrapper", className)} id={id}>
        <Search
          ref={inputRef}
          className="combobox--wrapper-search"
          inputAriaLabel="Search for content"
          id="combobox-search"
          iconName="fa-search"
          secondaryIconName="fa-close"
          placeholder={placeholder}
          size={size}
          disabled={disabled}
          onChange={onChangeCallback}
        />
        <div className="combobox--wrapper-list">{renderedItems}</div>
        {hasFilter && !hasResults && renderNoResults()}
      </div>
    );
  }
);

Search.sizes = SIZES;

Combobox.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  noResultsMessage: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object),
  size: PropTypes.oneOf([SIZES.SMALL, SIZES.MEDIUM, SIZES.LARGE]),
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
  size: SIZES.MEDIUM,
  onAddNew: undefined,
  addNewLabel: "Add new"
};

export default Combobox;
