/* eslint-disable react/jsx-props-no-spreading,react/require-default-props,react/forbid-prop-types */
import React, { useCallback, useMemo, useState } from "react";
import Select, { components } from "react-select";
import AsyncSelect from "react-select/async";
import NOOP from "lodash/noop";
import { WindowedMenuList } from "react-windowed-select";
import PropTypes from "prop-types";
import cx from "classnames";
import MenuComponent from "./components/menu/menu";
import DropdownIndicatorComponent from "./components/DropdownIndicator/DropdownIndicator";
import OptionComponent from "./components/option/option";
import SingleValueComponent from "./components/singleValue/singleValue";
import ClearIndicatorComponent from "./components/ClearIndicator/ClearIndicator";
import { SIZE, defaultCustomStyles } from "./DropdownConstants";
import styles, { customTheme } from "./Dropdown.styles";
import "./Dropdown.scss";

const Dropdown = ({
  className,
  placeholder,
  disabled,
  onMenuOpen,
  onMenuClose,
  onFocus,
  onBlur,
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
  optionRenderer,
  ValueRenderer,
  valueRenderer,
  menuRenderer,
  rtl,
  size,
  asyncOptions,
  cacheOptions,
  defaultOptions,
  isVirtualized,
  menuPortalTarget,
  extraStyles,
  menuIsOpen,
  tabIndex,
  id
}) => {
  const [isOpen, setOpen] = useState(false);

  const finalOptionRenderer = optionRenderer || OptionRenderer;
  const finalValueRenderer = valueRenderer || ValueRenderer;

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

  const customStyles = useMemo(() => extraStyles(styles({ size, rtl })), [size, rtl, extraStyles]);

  const Menu = useCallback(props => <MenuComponent {...props} isOpen={isOpen} Renderer={menuRenderer} />, [
    isOpen,
    menuRenderer
  ]);

  const DropdownIndicator = useCallback(props => <DropdownIndicatorComponent {...props} size={size} />, [size]);

  const Option = useCallback(props => <OptionComponent {...props} Renderer={finalOptionRenderer} />, [
    finalOptionRenderer
  ]);

  const Input = useCallback(props => <components.Input {...props} aria-label="Dropdown input" />, []);

  const SingleValue = useCallback(props => <SingleValueComponent {...props} Renderer={finalValueRenderer} />, [
    finalValueRenderer
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
        ...(finalOptionRenderer && { Option }),
        ...(finalValueRenderer && { SingleValue }),
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
      onBlur={onBlur}
      onChange={onChange}
      openMenuOnFocus={openMenuOnFocus}
      openMenuOnClick={openMenuOnClick}
      isRtl={rtl}
      styles={customStyles}
      theme={customTheme}
      menuPortalTarget={menuPortalTarget}
      menuIsOpen={menuIsOpen}
      tabIndex={tabIndex}
      id={id}
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
  onBlur: NOOP,
  onChange: NOOP,
  searchable: true,
  options: [],
  noOptionsMessage: NOOP,
  clearable: true,
  size: SIZE.MEDIUM,
  extraStyles: defaultCustomStyles,
  tabIndex: "0",
  id: undefined
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
   * Called when blurred
   */
  onBlur: PropTypes.func,
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
  optionRenderer: PropTypes.func,
  /**
   * custom value render function
   */
  valueRenderer: PropTypes.func,
  /**
   * custom menu render function
   */
  menuRenderer: PropTypes.func,
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
  isVirtualized: PropTypes.bool,
  /**
   * Whether the menu should use a portal, and where it should attach
   */
  menuPortalTarget: PropTypes.element,
  /**
   * Custom function to override existing styles, ex: base => {...base, ...myCustomOverrides}
   */
  extraStyles: PropTypes.func,

  /**
   * Tab index for keyboard navigation purposes
   */
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * ID for the select container
   */
  id: PropTypes.string
};

export default Dropdown;
