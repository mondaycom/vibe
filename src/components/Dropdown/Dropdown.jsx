/* eslint-disable react/jsx-props-no-spreading,react/require-default-props,react/forbid-prop-types */
import React, { useCallback, useMemo, useState } from "react";
import Select, { components } from "react-select";
import AsyncSelect from "react-select/async";
import NOOP from "lodash/noop";
import { WindowedMenuList } from "react-windowed-select";
import PropTypes from "prop-types";
import cx from "classnames";
import MenuComponent from "./components/Menu/Menu";
import DropdownIndicatorComponent from "./components/DropdownIndicator/DropdownIndicator";
import OptionComponent from "./components/Option/Option";
import SingleValueComponent from "./components/SingleValue/SingleValue";
import ClearIndicatorComponent from "./components/ClearIndicator/ClearIndicator";
import { SIZE } from "./DropdownConstants";
import styles, { customTheme } from "./Dropdown.styles";
import "./Dropdown.scss";

const Dropdown = ({
  className,
  placeholder,
  disabled,
  onMenuOpen,
  onMenuClose,
  onFocus,
  onChange,
  searchable,
  options,
  defaultValue,
  value,
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

  const handleMenuOpen = useCallback(
    data => {
      onMenuOpen(data);
      setOpen(true);
    },
    [onMenuOpen, setOpen]
  );

  const handleMenuClose = useCallback(
    data => {
      onMenuClose(data);
      setOpen(false);
    },
    [setOpen, onMenuClose]
  );

  const customStyles = useMemo(() => styles({ size, rtl }), [size, rtl]);

  const Menu = useCallback(props => <MenuComponent {...props} isOpen={isOpen} />, [isOpen]);

  const DropdownIndicator = useCallback(props => <DropdownIndicatorComponent {...props} size={size} />, [size]);

  const Option = useCallback(props => <OptionComponent {...props} OptionRenderer={OptionRenderer} />, [OptionRenderer]);

  const Input = useCallback(props => <components.Input {...props} aria-label="Dropdown input" />, []);

  const SingleValue = useCallback(props => <SingleValueComponent {...props} ValueRenderer={ValueRenderer} />, [
    ValueRenderer
  ]);

  const ClearIndicator = useCallback(props => <ClearIndicatorComponent {...props} size={size} />, [size]);

  const DropDownComponent = asyncOptions ? AsyncSelect : Select;

  const asyncAdditions = {
    ...(asyncOptions && {
      loadOptions: asyncOptions,
      cacheOptions,
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
        ...(ValueRenderer && { SingleValue }),
        ...(isVirtualized && { MenuList: WindowedMenuList })
      }}
      size={size}
      noOptionsMessage={noOptionsMessage}
      placeholder={placeholder}
      isDisabled={disabled}
      isClearable={clearable}
      isSearchable={searchable}
      defaultValue={defaultValue}
      value={value}
      onMenuOpen={handleMenuOpen}
      onMenuClose={handleMenuClose}
      onFocus={onFocus}
      onChange={onChange}
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

Dropdown.size = SIZE;

Dropdown.defaultProps = {
  className: "",
  placeholder: "",
  onMenuOpen: NOOP,
  onMenuClose: NOOP,
  onKeyDown: NOOP,
  onFocus: NOOP,
  onChange: NOOP,
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
   * Called when selected value has changed
   */
  onChange: PropTypes.func,
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
   * Select menu size from `Dropdown.size` - Dropdown.size.LARGE | Dropdown.size.MEDIUM | Dropdown.size.SMALL
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
  defaultOptions: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.object)]),
  /**
   * If set to true, the menu will use virtualization. Virtualized async works only with
   */
  isVirtualized: PropTypes.bool
};

export default Dropdown;
