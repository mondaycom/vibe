import React, { useCallback, useMemo, useState } from "react";
import Select, { components } from "react-select";
import AsyncSelect from "react-select/async";
import VirtualizedSelect from "react-select-virtualized";
import PropTypes from "prop-types";
import cx from "classnames";
import VirtualizedAsyncDropdown from "./VirtualizedAsyncDropdown/VirtualizedAsyncDropdown";
import DropdownChevronDown from "../Icon/Icons/components/DropdownChevronDown";
import CloseSmall from "../Icon/Icons/components/CloseSmall";
import { SIZE } from "./DropdownConstants";
import { NOOP } from "../../utils/function-utils";
import Icon from "../Icon/Icon";
import styles, { customTheme, getIndicatorSize } from "./Dropdown.styles";
import "./Dropdown.scss";

const Dropdown = ({
  className,
  placeholder,
  disabled,
  onMenuOpen,
  onMenuClose,
  onFocus,
  searchable,
  options,
  defaultValue,
  noOptionsMessage,
  openMenuOnFocus,
  openMenuOnClick,
  clearable,
  OptionRenderer,
  ValueRenderer,
  rtl,
  size,
  asyncOptions,
  cacheOptions,
  defaultOptions,
  isVirtualized
}) => {
  const [isOpen, setOpen] = useState(false);

  const handleMenuOpen = data => {
    onMenuOpen(data);
    setOpen(true);
  };

  const handleMenuClose = data => {
    onMenuClose(data);
    setOpen(false);
  };

  const customStyles = useMemo(() => styles({ size, rtl }), [size, rtl]);

  const Menu = useCallback(
    props => (
      <components.Menu
        {...props}
        className={cx("menu", {
          "dropdown-wrapper__menu--open": isOpen,
          "dropdown-wrapper__menu--close": !isOpen
        })}
      >
        {props.children}
      </components.Menu>
    ),
    [isOpen]
  );

  const DropdownIndicator = useCallback(
    props => (
      <components.DropdownIndicator {...props} className={"dropdown-indicator"}>
        <Icon
          iconType={Icon.type.SVG}
          icon={DropdownChevronDown}
          iconSize={getIndicatorSize(size)}
          tabindex="-1"
        />
      </components.DropdownIndicator>
    ),
    [size]
  );

  const Option = useCallback(
    props => {
      if (!OptionRenderer) return null;
      return (
        <components.Option
          {...props}
          className={"dropdown-wrapper__option--reset"}
        >
          <OptionRenderer {...props.data} />
        </components.Option>
      );
    },
    [OptionRenderer]
  );

  const Input = useCallback(
    props => <components.Input {...props} aria-label="Dropdown input" />,
    []
  );

  const SingleValue = useCallback(
    props => {
      if (!ValueRenderer) return null;
      return (
        <components.SingleValue
          {...props}
          className={"dropdown-wrapper__single-value--reset"}
        >
          <ValueRenderer {...props.data} />
        </components.SingleValue>
      );
    },
    [ValueRenderer]
  );

  const ClearIndicator = useCallback(
    props => (
      <components.ClearIndicator {...props} className={"clear-indicator"}>
        <Icon
          iconType={Icon.type.SVG}
          icon={CloseSmall}
          iconSize={getIndicatorSize(size)}
          tabindex="-1"
        />
      </components.ClearIndicator>
    ),
    [size]
  );

  let DropDownComponent;
  if (isVirtualized) {
    DropDownComponent = asyncOptions
      ? VirtualizedAsyncDropdown
      : VirtualizedSelect;
  } else {
    DropDownComponent = asyncOptions ? AsyncSelect : Select;
  }

  const asyncAdditions = {
    ...(asyncOptions && {
      loadOptions: asyncOptions,
      cacheOptions: cacheOptions,
      ...(defaultOptions && { defaultOptions })
    })
  };

  const additions = {
    ...(!asyncOptions && { options })
  };

  return (
    <DropDownComponent
      className={cx("dropdown-wrapper", className)}
      components={{
        DropdownIndicator,
        Menu,
        ClearIndicator,
        Input,
        ...(OptionRenderer && { Option }),
        ...(ValueRenderer && { SingleValue })
      }}
      size={size}
      noOptionsMessage={noOptionsMessage}
      placeholder={placeholder}
      isDisabled={disabled}
      isClearable={clearable}
      isSearchable={searchable}
      defaultValue={defaultValue}
      onMenuOpen={handleMenuOpen}
      onMenuClose={handleMenuClose}
      onFocus={onFocus}
      openMenuOnFocus={openMenuOnFocus}
      openMenuOnClick={openMenuOnClick}
      isRtl={rtl}
      styles={customStyles}
      theme={customTheme}
      {...asyncAdditions}
      {...additions}
    />
  );
};

Dropdown.SIZE = SIZE;

Dropdown.defaultProps = {
  className: "",
  placeholder: "",
  onMenuOpen: NOOP,
  onMenuClose: NOOP,
  onKeyDown: NOOP,
  onFocus: NOOP,
  searchable: true,
  options: [],
  noOptionsMessage: NOOP,
  clearable: true,
  size: SIZE.MEDIUM
};

Dropdown.propTypes = {
  /**
   * Custom style
   */
  className: PropTypes.string,
  /**
   * Placeholder to show when no value was selected
   */
  placeholder: PropTypes.string,
  /**
   * If set to true, dropdown will be disabled
   */
  disabled: PropTypes.bool,
  /**
   * Called when menu is opened
   */
  onMenuOpen: PropTypes.func,
  /**
   * Called when menu is closed
   */
  onMenuClose: PropTypes.func,
  /**
   * Called when key is pressed in the dropdown
   */
  onKeyDown: PropTypes.func,
  /**
   * Called when focused
   */
  onFocus: PropTypes.func,
  /**
   * If true, search in options will be enabled
   */
  searchable: PropTypes.bool,
  /**
   * The dropdown options
   */
  options: PropTypes.arrayOf(PropTypes.object),
  /**
   * Text to display when there are no options
   */
  noOptionsMessage: PropTypes.func,
  /**
   * If set to true, the menu will open when focused
   */
  openMenuOnFocus: PropTypes.bool,
  /**
   * If set to true, the menu will open when clicked
   */
  openMenuOnClick: PropTypes.bool,
  /**
   * If set to true, clear button will be added
   */
  clearable: PropTypes.bool,
  /**
   * custom option render function
   */
  OptionRenderer: PropTypes.func,
  /**
   * custom value render function
   */
  ValueRenderer: PropTypes.func,
  /**
   * If set to true, the dropdown will be in Right to Left mode
   */
  rtl: PropTypes.bool,
  /**
   * Set default selected value
   */
  defaultValue: PropTypes.object,
  /**
   * Select menu size from `Dropdown.SIZE` - Dropdown.SIZE.BIG | Dropdown.SIZE.MEDIUM | Dropdown.SIZE.SMALL
   */
  size: PropTypes.string,
  /**
   * If provided Dropdown will work in async mode. Can be either promise or callback
   */
  asyncOptions: PropTypes.oneOfType([
    PropTypes.func, // callback
    PropTypes.shape({
      then: PropTypes.func.isRequired,
      catch: PropTypes.func.isRequired
    }) // Promise
  ]),
  /**
   * If set to true, fetched async options will be cached
   */
  cacheOptions: PropTypes.bool,
  /**
   * If set, `asyncOptions` will be invoked with its value on mount and the resolved results will be loaded
   */
  defaultOptions: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.object)
  ]),
  /**
   * If set to true, the menu will use virtualization. Virtualized async works only with
   */
  isVirtualized: PropTypes.bool
};

export default Dropdown;
