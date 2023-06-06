/* eslint-disable react/require-default-props,react/forbid-prop-types */
import { SIZES } from "../../constants/sizes";
import React, { forwardRef, useCallback, useMemo, useRef, useState } from "react";
import Select, { components } from "react-select";
import AsyncSelect from "react-select/async";
import { noop as NOOP } from "lodash-es";
import { WindowedMenuList } from "react-windowed-select";
import PropTypes from "prop-types";
import cx from "classnames";
import MenuComponent from "./components/menu/menu";
import DropdownIndicatorComponent from "./components/DropdownIndicator/DropdownIndicator";
import OptionComponent from "./components/option/option";
import SingleValueComponent from "./components/singleValue/singleValue";
import ClearIndicatorComponent from "./components/ClearIndicator/ClearIndicator";
import MultiValueContainer from "./components/MultiValueContainer/MultiValueContainer";
import { ADD_AUTO_HEIGHT_COMPONENTS, defaultCustomStyles, DROPDOWN_ID } from "./DropdownConstants";
import generateBaseStyles, { customTheme } from "./Dropdown.styles";
import Control from "./components/Control/Control";
import { DROPDOWN_CHIP_COLORS, MENU_WRAPPER_CLASS_NAME } from "./dropdown-constants";
import "./Dropdown.scss";

const Dropdown = forwardRef(
  (
    {
      className,
      optionWrapperClassName,
      singleValueWrapperClassName,
      dropdownMenuWrapperClassName,
      placeholder,
      disabled,
      readOnly,
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
      withMandatoryDefaultOptions,
      isOptionSelected,
      insideOverflowContainer,
      insideOverflowWithTransformContainer,
      tooltipContent,
      onKeyDown,
      isLoading,
      loadingMessage,
      ariaLabel
    },
    ref
  ) => {
    const controlRef = useRef();
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

    const overrideAriaLabel = useMemo(() => {
      return (
        ariaLabel ||
        `${readOnly ? "Readonly " : ""} ${tooltipContent} ${
          Array.isArray(selectedOptions) ? `Selected: ${selectedOptions.map(o => o.label).join(", ")}` : "Select"
        }`
      );
    }, [ariaLabel, readOnly, selectedOptions, tooltipContent]);
    const value = multi ? selectedOptions : customValue;

    const styles = useMemo(() => {
      // We first want to get the default stylized groups (e.g. "container", "menu").
      const baseStyles = generateBaseStyles({
        size,
        rtl,
        insideOverflowContainer,
        controlRef,
        insideOverflowWithTransformContainer
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
    }, [size, rtl, insideOverflowContainer, insideOverflowWithTransformContainer, extraStyles, multi, multiline]);

    const Menu = useCallback(
      props => (
        <MenuComponent {...props} Renderer={menuRenderer} dropdownMenuWrapperClassName={dropdownMenuWrapperClassName} />
      ),
      [dropdownMenuWrapperClassName, menuRenderer]
    );

    const DropdownIndicator = useCallback(props => <DropdownIndicatorComponent {...props} size={size} />, [size]);

    const Option = useCallback(
      props => (
        <OptionComponent {...props} Renderer={finalOptionRenderer} optionWrapperClassName={optionWrapperClassName} />
      ),
      [finalOptionRenderer, optionWrapperClassName]
    );

    const Input = useCallback(props => <components.Input {...props} aria-label="Dropdown input" />, []);

    const SingleValue = useCallback(
      props => (
        <SingleValueComponent
          {...props}
          readOnly={readOnly}
          Renderer={finalValueRenderer}
          selectedOption={selectedOptions[0]}
          singleValueWrapperClassName={singleValueWrapperClassName}
        />
      ),
      [finalValueRenderer, readOnly, selectedOptions, singleValueWrapperClassName]
    );

    const ClearIndicator = useCallback(props => <ClearIndicatorComponent {...props} size={size} />, [size]);

    const onOptionRemove = useMemo(() => {
      return function (optionValue, e) {
        if (customOnOptionRemove) {
          customOnOptionRemove(selectedOptionsMap[optionValue]);
        }
        const newSelectedOptions = selected.filter(option => option.value !== optionValue);
        if (customOnChange) {
          customOnChange(newSelectedOptions, e);
        }
        setSelected(newSelectedOptions);
      };
    }, [customOnChange, customOnOptionRemove, selected, selectedOptionsMap]);

    const customProps = useMemo(
      () => ({
        selectedOptions,
        onSelectedDelete: onOptionRemove,
        setIsDialogShown,
        isDialogShown,
        isMultiline: multiline,
        insideOverflowContainer,
        insideOverflowWithTransformContainer,
        controlRef,
        tooltipContent
      }),
      [
        selectedOptions,
        onOptionRemove,
        isDialogShown,
        multiline,
        insideOverflowContainer,
        insideOverflowWithTransformContainer,
        tooltipContent
      ]
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

    const closeMenuOnScroll = useCallback(
      event => {
        const scrolledElement = event.target;
        if (scrolledElement?.parentElement?.classList.contains(MENU_WRAPPER_CLASS_NAME)) {
          return false;
        }
        return insideOverflowContainer || insideOverflowWithTransformContainer;
      },
      [insideOverflowContainer, insideOverflowWithTransformContainer]
    );

    return (
      <DropDownComponent
        className={cx("dropdown-wrapper", className)}
        selectProps={customProps}
        components={{
          DropdownIndicator,
          Menu,
          ClearIndicator,
          Input,
          Option,
          Control,
          SingleValue,
          ...(multi && {
            MultiValue: NOOP, // We need it for react-select to behave nice with "multi"
            ValueContainer: MultiValueContainer
          }),
          ...(isVirtualized && { MenuList: WindowedMenuList })
        }}
        // When inside scroll we set the menu position by js and we can't follow the drop down location while use scrolling
        closeMenuOnScroll={closeMenuOnScroll}
        size={size}
        noOptionsMessage={noOptionsMessage}
        placeholder={placeholder}
        isDisabled={disabled}
        isClearable={!readOnly && clearable}
        isSearchable={!readOnly && searchable}
        readOnly={readOnly}
        aria-readonly={readOnly}
        aria-label={overrideAriaLabel}
        aria-details={tooltipContent}
        defaultValue={defaultValue}
        value={value}
        onMenuOpen={onMenuOpen}
        onMenuClose={onMenuClose}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onInputChange={onInputChange}
        openMenuOnFocus={openMenuOnFocus}
        openMenuOnClick={openMenuOnClick}
        isRtl={rtl}
        styles={styles}
        theme={customTheme}
        maxMenuHeight={maxMenuHeight}
        menuPortalTarget={menuPortalTarget}
        menuPlacement={menuPlacement}
        menuIsOpen={!readOnly && menuIsOpen}
        tabIndex={tabIndex}
        id={id}
        autoFocus={autoFocus}
        closeMenuOnSelect={closeMenuOnSelect}
        ref={ref}
        withMandatoryDefaultOptions={withMandatoryDefaultOptions}
        isOptionSelected={isOptionSelected}
        isLoading={isLoading}
        loadingMessage={loadingMessage}
        {...asyncAdditions}
        {...additions}
      />
    );
  }
);

Dropdown.size = SIZES;
Dropdown.chipColors = DROPDOWN_CHIP_COLORS;

Dropdown.defaultProps = {
  className: "",
  optionWrapperClassName: undefined,
  dropdownMenuWrapperClassName: undefined,
  singleValueWrapperClassName: undefined,
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
  id: DROPDOWN_ID,
  autoFocus: false,
  closeMenuOnSelect: undefined,
  ref: undefined,
  withMandatoryDefaultOptions: false,
  insideOverflowContainer: false,
  insideOverflowWithTransformContainer: false,
  tooltipContent: "",
  disabled: false,
  readOnly: false,
  isLoading: false,
  loadingMessage: undefined,
  ariaLabel: undefined
};

Dropdown.propTypes = {
  /**
   * Custom style
   */
  className: PropTypes.string,
  /** ClassName to be added to dropdown option wrapper (dropdown-wrapper__option--reset) */
  optionWrapperClassName: PropTypes.string,
  /** ClassName to be added to dropdown single value wrapper (dropdown-wrapper__single-value--reset) */
  singleValueWrapperClassName: PropTypes.string,
  /** ClassName to be added to dropdown menu wrapper (dropdown-menu-wrapper) */
  dropdownMenuWrapperClassName: PropTypes.string,
  /**
   * Placeholder to show when no value was selected
   */
  placeholder: PropTypes.string,
  /**
   * If set to true, dropdown will be disabled
   */
  disabled: PropTypes.bool,
  /**
   * If set to true, dropdown won't be editable
   */
  readOnly: PropTypes.bool,
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
   Pass Ref for reference of the actual dropdown component - returns StateManager from react-select
   */
  ref: PropTypes.func,
  /**
   The options set by default will be set as mandatory and the user will not be able to cancel their selection
   */
  withMandatoryDefaultOptions: PropTypes.bool,
  /**
   * Override the built-in logic to detect whether an option is selected.
   */
  isOptionSelected: PropTypes.func,
  /**
   * For display the drop down menu in overflow hidden/scroll container.
   */
  insideOverflowContainer: PropTypes.bool,
  /**
   * For display the drop down menu in overflow hidden/scroll container which contains transform css function usage.
   */
  insideOverflowWithTransformContainer: PropTypes.bool,
  /**
   * When content is passed, the dropdown will include a tooltip on the dropdown's value.
   */
  tooltipContent: PropTypes.string,
  /**
   * Display the drop down with loading state.
   */
  isLoading: PropTypes.bool,
  /**
   * Overrides the built-in logic of loading message design
   */
  loadingMessage: PropTypes.func,
  /**
   * aria-label attribute for dropdown
   */
  ariaLabel: PropTypes.string
};

export default Dropdown;
