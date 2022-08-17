/* eslint-disable react/require-default-props,react/forbid-prop-types */
import { SIZES } from "../../constants/sizes";
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
import ValueContainer from "./components/ValueContainer/ValueContainer";
import { defaultCustomStyles, ADD_AUTO_HEIGHT_COMPONENTS } from "./DropdownConstants";
import generateBaseStyles, { customTheme } from "./Dropdown.styles";
import "./Dropdown.scss";

const Dropdown = ({
  className,
  placeholder,
  disabled,
  onMenuOpen,
  onMenuClose,
  onFocus,
  onBlur,
  onChange: customOnChange,
  searchable,
  options,
  defaultValue,
  value: customValue,
  noOptionsMessage,
  openMenuOnFocus,
  openMenuOnClick,
  clearable,
  OptionRenderer,
  optionRenderer,
  ValueRenderer,
  valueRenderer,
  menuRenderer,
  menuPlacement,
  rtl,
  size,
  asyncOptions,
  cacheOptions,
  defaultOptions,
  isVirtualized,
  menuPortalTarget,
  extraStyles,
  maxMenuHeight,
  menuIsOpen,
  tabIndex,
  id,
  autoFocus,
  multi = false,
  multiline = false,
  onOptionRemove: customOnOptionRemove,
  onOptionSelect,
  onClear,
  onInputChange,
  closeMenuOnSelect = !multi,
  ref,
  withMandatoryDefaultOptions,
  isOptionSelected
}) => {
  const overrideDefaultValue = useMemo(() => {
    if (defaultValue) {
      return Array.isArray(defaultValue)
        ? defaultValue.map(df => ({ ...df, isMandatory: true }))
        : { ...defaultValue, isMandatory: true };
    }

    return defaultValue;
  }, [defaultValue]);

  const [selected, setSelected] = useState(overrideDefaultValue || []);
  const [isDialogShown, setIsDialogShown] = useState(false);
  const finalOptionRenderer = optionRenderer || OptionRenderer;
  const finalValueRenderer = valueRenderer || ValueRenderer;
  const isControlled = !!customValue;
  const selectedOptions = customValue ?? selected;
  const selectedOptionsMap = useMemo(() => {
    if (Array.isArray(selectedOptions)) {
      return selectedOptions.reduce((acc, option) => ({ ...acc, [option.value]: option }), {});
    }
    return {};
  }, [selectedOptions]);

  const value = multi ? selectedOptions : customValue;

  const styles = useMemo(() => {
    // We first want to get the default stylized groups (e.g. "container", "menu").
    const baseStyles = generateBaseStyles({
      size,
      rtl
    });

    // Then we want to run the consumer's root-level custom styles with our "base" override groups.
    const customStyles = extraStyles(baseStyles);

    // Lastly, we create a style groups object that makes sure we run each custom group with our basic overrides.
    const mergedStyles = Object.entries(customStyles).reduce((accumulator, [stylesGroup, stylesFn]) => {
      return {
        ...accumulator,
        [stylesGroup]: (defaultStyles, state) => {
          const provided = baseStyles[stylesGroup] ? baseStyles[stylesGroup](defaultStyles, state) : defaultStyles;

          return stylesFn(provided, state);
        }
      };
    }, {});

    if (multi) {
      if (multiline) {
        ADD_AUTO_HEIGHT_COMPONENTS.forEach(component => {
          const original = mergedStyles[component];
          mergedStyles[component] = (provided, state) => ({
            ...original(provided, state),
            height: "auto"
          });
        });
      }

      const originalValueContainer = mergedStyles.valueContainer;
      mergedStyles.valueContainer = (provided, state) => ({
        ...originalValueContainer(provided, state),
        paddingLeft: 6
      });
    }

    return mergedStyles;
  }, [size, rtl, extraStyles, multi, multiline]);

  const Menu = useCallback(props => <MenuComponent {...props} Renderer={menuRenderer} />, [menuRenderer]);

  const DropdownIndicator = useCallback(props => <DropdownIndicatorComponent {...props} size={size} />, [size]);

  const Option = useCallback(
    props => <OptionComponent {...props} Renderer={finalOptionRenderer} />,
    [finalOptionRenderer]
  );

  const Input = useCallback(props => <components.Input {...props} aria-label="Dropdown input" />, []);

  const SingleValue = useCallback(
    props => <SingleValueComponent {...props} Renderer={finalValueRenderer} />,
    [finalValueRenderer]
  );

  const ClearIndicator = useCallback(props => <ClearIndicatorComponent {...props} size={size} />, [size]);

  const onOptionRemove = useMemo(() => {
    if (customOnOptionRemove) {
      return (optionValue, e) => customOnOptionRemove(selectedOptionsMap[optionValue], e);
    }
    return function (optionValue, e) {
      setSelected(selected.filter(option => option.value !== optionValue));
      e.stopPropagation();
    };
  }, [customOnOptionRemove, selected, selectedOptionsMap]);

  const customProps = useMemo(
    () => ({
      selectedOptions,
      onSelectedDelete: onOptionRemove,
      setIsDialogShown,
      isDialogShown,
      isMultiline: multiline
    }),
    [selectedOptions, onOptionRemove, setIsDialogShown, isDialogShown, multiline]
  );

  const onChange = (option, event) => {
    if (customOnChange) {
      customOnChange(option, event);
    }

    switch (event.action) {
      case "select-option": {
        const selectedOption = multi ? event.option : option;

        if (onOptionSelect) {
          onOptionSelect(selectedOption);
        }

        if (!isControlled) {
          setSelected([...selected, selectedOption]);
        }
        break;
      }

      case "clear":
        if (onClear) {
          onClear();
        }

        if (!isControlled) {
          if (withMandatoryDefaultOptions) setSelected(overrideDefaultValue);
          else setSelected([]);
        }
        break;
    }
  };

  const DropDownComponent = asyncOptions ? AsyncSelect : Select;

  const asyncAdditions = {
    ...(asyncOptions && {
      loadOptions: asyncOptions,
      cacheOptions,
      ...(defaultOptions && { defaultOptions })
    })
  };

  const additions = {
    ...(!asyncOptions && { options }),
    ...(multi && {
      isMulti: true
    })
  };

  return (
    <DropDownComponent
      className={cx("dropdown-wrapper", className)}
      selectProps={customProps}
      components={{
        DropdownIndicator,
        Menu,
        ClearIndicator,
        Input,
        ...(finalOptionRenderer && { Option }),
        ...(finalValueRenderer && { SingleValue }),
        ...(multi && {
          MultiValue: NOOP, // We need it for react-select to behave nice with "multi"
          ValueContainer
        }),
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
      onMenuOpen={onMenuOpen}
      onMenuClose={onMenuClose}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      onInputChange={onInputChange}
      openMenuOnFocus={openMenuOnFocus}
      openMenuOnClick={openMenuOnClick}
      isRtl={rtl}
      styles={styles}
      theme={customTheme}
      maxMenuHeight={maxMenuHeight}
      menuPortalTarget={menuPortalTarget}
      menuPlacement={menuPlacement}
      menuIsOpen={menuIsOpen}
      tabIndex={tabIndex}
      id={id}
      autoFocus={autoFocus}
      closeMenuOnSelect={closeMenuOnSelect}
      ref={ref}
      withMandatoryDefaultOptions={withMandatoryDefaultOptions}
      isOptionSelected={isOptionSelected}
      {...asyncAdditions}
      {...additions}
    />
  );
};

Dropdown.size = SIZES;

Dropdown.defaultProps = {
  className: "",
  placeholder: "",
  onMenuOpen: NOOP,
  onMenuClose: NOOP,
  onKeyDown: NOOP,
  onFocus: NOOP,
  onBlur: NOOP,
  onChange: NOOP,
  onInputChange: NOOP,
  searchable: true,
  options: [],
  menuPlacement: "bottom",
  noOptionsMessage: NOOP,
  clearable: true,
  size: SIZES.MEDIUM,
  extraStyles: defaultCustomStyles,
  tabIndex: "0",
  onOptionRemove: undefined,
  id: undefined,
  autoFocus: false,
  closeMenuOnSelect: undefined,
  ref: undefined,
  withMandatoryDefaultOptions: false
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
   * Called when the dropdown's input changes.
   */
  onInputChange: PropTypes.func,
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
  optionRenderer: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * custom value render function
   */
  valueRenderer: PropTypes.func,
  /**
   * custom menu render function
   */
  menuRenderer: PropTypes.func,
  /**
   * Default placement of the Dropdown menu in relation to its control. Use "auto" to flip the menu when there isn't enough space below the control.
   */
  menuPlacement: PropTypes.oneOf(["bottom", "top", "auto"]),
  /**
   * If set to true, the dropdown will be in Right to Left mode
   */
  rtl: PropTypes.bool,
  /**
   * Set default selected value
   */
  defaultValue: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      })
    ),
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ]),
  /**
   * The component's value.
   * When passed, makes this a [controlled](https://reactjs.org/docs/forms.html#controlled-components) component.
   */
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      })
    ),
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ]),
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
  menuPortalTarget: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
  /**
   * Custom function to override existing styles (similar to `react-select`'s `style` prop), for example: `base => ({...base, color: 'red'})`, where `base` is the component's default styles
   */
  extraStyles: PropTypes.func,
  /**
   * Maximum height of the menu before scrolling
   */
  maxMenuHeight: PropTypes.number,
  /**
   * Tab index for keyboard navigation purposes
   */
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * ID for the select container
   */
  id: PropTypes.string,
  /**
   * focusAuto when component mount
   */
  autoFocus: PropTypes.bool,
  /**
   * If set to true, the dropdown will be in multi-select mode.
   * When in multi-select mode, the selected value will be an array,
   * and it will be displayed as our [`<Chips>`](/?path=/docs/components-chips--sandbox) component.
   */
  multi: PropTypes.bool,
  /**
   * If set to true together with `multi`, it will make the dropdown expand to multiple lines when new values are selected.
   */
  multiline: PropTypes.bool,
  /**
  Pass closeMenuOnSelect to close the multi choose any time an options is chosen.
  */
  closeMenuOnSelect: PropTypes.bool,
  /**
   * callback to be called when `multiline` is `true` and the option is removed
   */
  onOptionRemove: PropTypes.func,
  /**
   Pass Ref for reference of the actual dropdown component
   */
  ref: PropTypes.func,
  /**
   The options set by default will be set as mandatory and the user will not be able to cancel their selection
   */
  withMandatoryDefaultOptions: PropTypes.bool,
  /**
   * Override the built-in logic to detect whether an option is selected.
   */
  isOptionSelected: PropTypes.func
};

export default Dropdown;
