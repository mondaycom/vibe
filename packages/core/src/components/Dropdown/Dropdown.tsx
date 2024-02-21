/* eslint-disable react/require-default-props,react/forbid-prop-types */
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import { BaseSizes, SIZES } from "../../constants/sizes";
import { forwardRef, useCallback, useMemo, useRef, useState } from "react";
import Select, { MenuProps, OptionsType, components, createFilter } from "react-select";
import AsyncSelect from "react-select/async";
import { noop as NOOP } from "lodash-es";
import { WindowedMenuList } from "react-windowed-select";
import PropTypes from "prop-types";
import MenuComponent from "./components/menu/menu";
import DropdownIndicatorComponent from "./components/DropdownIndicator/DropdownIndicator";
import OptionComponent from "./components/option/option";
import SingleValueComponent from "./components/singleValue/singleValue";
import ClearIndicatorComponent from "./components/ClearIndicator/ClearIndicator";
import MultiValueContainer from "./components/MultiValueContainer/MultiValueContainer";
import {
  ADD_AUTO_HEIGHT_COMPONENTS,
  defaultCustomStyles,
  DROPDOWN_CHIP_COLORS,
  DROPDOWN_MENU,
  DROPDOWN_MENU_ID,
  DROPDOWN_MENU_ARIA_LABEL,
  DROPDOWN_MENU_PLACEMENT,
  DROPDOWN_MENU_POSITION,
  DropdownDefaultValue
} from "./DropdownConstants";
import generateBaseStyles, { customTheme } from "./Dropdown.styles";
import Control from "./components/Control/Control";
import menuStyles from "./components/menu/menu.module.scss";
import styles from "./Dropdown.module.scss";
import { VibeComponent, VibeComponentProps } from "src/types";
import { IComboboxOption } from "../Combobox/components/ComboboxConstants";
import { Option } from "react-select/src/filters";

interface CustomMenuProps extends MenuProps<Option, boolean> {
  Renderer: React.ComponentType;
  dropdownMenuWrapperClassName: string;
}

export interface DropdownComponentProps extends VibeComponentProps {
  /**
   * Custom style
   */
  className?: string;
  /** ClassName to be added to dropdown option wrapper (dropdown-wrapper__option--reset) */
  optionWrapperClassName?: string;
  /** ClassName to be added to dropdown single value wrapper (dropdown-wrapper__single-value--reset) */
  singleValueWrapperClassName?: string;
  /** ClassName to be added to dropdown menu wrapper (dropdown-menu-wrapper) */
  dropdownMenuWrapperClassName?: string;
  /**
   * Placeholder to show when no value was selected
   */
  placeholder?: string;
  /**
   * If set to true, dropdown will be disabled
   */
  disabled?: boolean;
  /**
   * If set to true, dropdown won't be editable
   */
  readOnly?: boolean;
  /**
   * Called when menu is opened
   */
  onMenuOpen?: () => void;
  /**
   * Called when menu is closed
   */
  onMenuClose?: () => void;
  /**
   * Called when key is pressed in the dropdown
   */
  onKeyDown?: (...args: unknown[]) => unknown;
  /**
   * Called when focused
   */
  onFocus?: (...args: unknown[]) => unknown;
  /**
   * Called when blurred
   */
  onBlur?: (...args: unknown[]) => unknown;
  /**
   * Called when selected value has changed
   */
  onChange?: (...args: unknown[]) => unknown;
  /**
   * Called when the dropdown's input changes.
   */
  onInputChange?: (...args: unknown[]) => unknown;
  /**
   * If true, search in options will be enabled
   */
  searchable?: boolean;
  /**
   * The dropdown options
   */
  options?: DropdownDefaultValue[];
  /**
   * Text to display when there are no options
   */
  noOptionsMessage?: (() => string) | typeof NOOP;
  /**
   * If set to true, the menu will open when focused
   */
  openMenuOnFocus?: boolean;
  /**
   * If set to true, the menu will open when clicked
   */
  openMenuOnClick?: boolean;
  /**
   * If set to true, clear button will be added
   */
  clearable?: boolean;
  /**
   * custom option render function
   */
  optionRenderer?: (option: IComboboxOption) => JSX.Element;
  /**
   * custom value render function
   */
  valueRenderer?: (...args: unknown[]) => unknown;
  ValueRenderer?: (...args: unknown[]) => unknown;
  /**
   * custom menu render function
   */
  menuRenderer?: (...args: unknown[]) => unknown;
  /**
   * Default placement of the Dropdown menu in relation to its control. Use "auto" to flip the menu when there isn't enough space below the control.
   */
  menuPlacement?: DROPDOWN_MENU_PLACEMENT;

  //  enum() PropTypes.oneOf(Object.values(DROPDOWN_MENU_PLACEMENT)),
  /**
   * The CSS position value of the menu, when "fixed" extra layout management might be required
   * Fixed position can be used to solve the issue of positioning Dropdown inside overflow container like Modal or Dialog
   */
  menuPosition?: DROPDOWN_MENU_POSITION;
  /**
   * If set to true, the dropdown will be in Right to Left mode
   */
  rtl?: boolean;
  /**
   * Set default selected value
   */
  defaultValue?: DropdownDefaultValue[];
  /**
   * The component's value.
   * When passed, makes this a [controlled](https://reactjs.org/docs/forms.html#controlled-components) component.
   */
  value?: DropdownDefaultValue[];
  /**
   * Select menu size from `Dropdown.size` - Dropdown.sizes.LARGE | Dropdown.sizes.MEDIUM | Dropdown.sizes.SMALL
   */
  size?: BaseSizes;
  /**
   * If provided Dropdown will work in async mode. Can be either promise or callback
   */
  asyncOptions?: (inputValue: string) => Promise<DropdownDefaultValue[]>;
  /**
   * If set to true, fetched async options will be cached
   */
  cacheOptions?: boolean;
  /**
   * If set, `asyncOptions` will be invoked with its value on mount and the resolved results will be loaded
   */
  defaultOptions?: boolean | Record<string, string>[];
  /**
   * If set to true, the menu will use virtualization. Virtualized async works only with
   */
  isVirtualized?: boolean;
  /**
   * Whether the menu should use a portal, and where it should attach
   */
  menuPortalTarget?: HTMLElement;
  /**
   * Custom function to override existing styles (similar to `react-select`'s `style` prop), for example: `base => ({...base, color: 'red'})`, where `base` is the component's default styles
   */
  extraStyles?: (...args: unknown[]) => unknown;
  /**
   * Maximum height of the menu before scrolling
   */
  maxMenuHeight?: number;
  /**
   * Tab index for keyboard navigation purposes
   */
  tabIndex?: number;
  /**
   * ID for the select container
   */
  id?: DROPDOWN_MENU.ID;
  /**
   * focusAuto when component mount
   */
  autoFocus?: boolean;
  /**
   * If set to true, the dropdown will be in multi-select mode.
   * When in multi-select mode, the selected value will be an array,
   * and it will be displayed as our [`<Chips>`](/?path=/docs/components-chips--sandbox) component.
   */
  multi?: boolean;
  /**
   * If set to true together with `multi`, it will make the dropdown expand to multiple lines when new values are selected.
   */
  multiline?: boolean;
  /**
  Pass closeMenuOnSelect to close the multi choose any time an options is chosen.
  */
  closeMenuOnSelect?: boolean;
  // Won't be needed once we upgrade to react-select ^5.5 https://github.com/JedWatson/react-select/issues/4088#issuecomment-1276835389
  /**
   * If menu should be closed on scroll - helpful for some tricky use cases
   * @default false, but true when insideOverflowContainer or insideOverflowWithTransformContainer are true
   */
  closeMenuOnScroll?: ((event: React.FocusEvent) => boolean) | boolean;
  /**
   * callback to be called when `multiline` is `true` and the option is removed
   */
  onOptionRemove?: (...args: unknown[]) => unknown;
  /**
  Pass Ref for reference of the actual dropdown component
  */
  ref?: React.ForwardedRef<HTMLDivElement>;
  /**
  The options set by default will be set as mandatory and the user will not be able to cancel their selection
  */
  withMandatoryDefaultOptions?: boolean;
  /**
   * Override the built-in logic to detect whether an option is selected.
   */
  isOptionSelected?: (option: unknown, selectValue: any) => boolean;
  /**
   * For display the drop down menu in overflow hidden/scroll container.
   */
  insideOverflowContainer?: boolean;
  /**
   * For display the drop down menu in overflow hidden/scroll container which contains transform css function usage.
   */
  insideOverflowWithTransformContainer?: boolean;
  /**
   * When content is passed, the dropdown will include a tooltip on the dropdown's value.
   */
  tooltipContent?: string;
  /**
   * Display the drop down with loading state.
   */
  isLoading?: boolean;
  /**
   * Overrides the built-in logic of loading message design
   */
  loadingMessage?: (obj: { inputValue: string }) => React.ReactNode;
  /**
   * aria-label attribute for dropdown
   */
  ariaLabel?: string;
  /**
   * Overrides the built-in logic of tab selecting value (default: true)
   */
  tabSelectsValue?: boolean;
  /**
   * Overrides the build-in search filter logic - https://react-select.com/advanced#custom-filter-logic
   * createFilter function is available at Dropdown.createFilter
   */
  filterOption?: (option: unknown, inputValue: string) => boolean;

  withReadOnlyStyle?: boolean;
  OptionRenderer?: (option: IComboboxOption) => JSX.Element;
  menuIsOpen?: boolean;
  onOptionSelect?: (...args: unknown[]) => void;
  onClear?: (...args: unknown[]) => void;
  popupsContainerSelector?: string;
  selectProps?: Record<string, string>;
}

const Dropdown: VibeComponent<DropdownComponentProps, HTMLDivElement> = forwardRef(
  (
    {
      className,
      optionWrapperClassName,
      singleValueWrapperClassName,
      dropdownMenuWrapperClassName,
      placeholder,
      disabled,
      readOnly,
      withReadOnlyStyle,
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
      menuId,
      menuAriaLabel,
      autoFocus,
      multi = false,
      multiline = false,
      onOptionRemove: customOnOptionRemove,
      onOptionSelect,
      onClear,
      onInputChange,
      closeMenuOnSelect = !multi,
      closeMenuOnScroll: customCloseMenuOnScroll,
      withMandatoryDefaultOptions,
      isOptionSelected,
      insideOverflowContainer,
      insideOverflowWithTransformContainer,
      tooltipContent,
      onKeyDown,
      isLoading,
      loadingMessage,
      ariaLabel,
      tabSelectsValue = true,
      popupsContainerSelector,
      filterOption,
      menuPosition,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const controlRef = useRef();
    const overrideMenuPortalTarget =
      menuPortalTarget || (popupsContainerSelector && document.querySelector(popupsContainerSelector));
    const overrideDefaultValue = useMemo(() => {
      if (defaultValue) {
        return Array.isArray(defaultValue)
          ? defaultValue.map(df => ({ ...df, isMandatory: true }))
          : { ...(defaultValue as DropdownDefaultValue), isMandatory: true };
      }

      return defaultValue;
    }, [defaultValue]);

    const [selected, setSelected] = useState(overrideDefaultValue || []);
    const finalOptionRenderer = optionRenderer || OptionRenderer;
    const finalValueRenderer = valueRenderer || ValueRenderer;
    const isControlled = !!customValue;
    const selectedOptions = customValue ?? selected;
    const selectedOptionsMap = useMemo(() => {
      if (Array.isArray(selectedOptions)) {
        return selectedOptions.reduce(
          (acc, option) => ({ ...acc, [option.value as DropdownDefaultValue["label"]]: option }),
          {}
        );
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

    const inlineStyles = useMemo(() => {
      // We first want to get the default stylized groups (e.g. "container", "menu").
      const baseStyles: any = generateBaseStyles({
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
          [stylesGroup]: (defaultStyles: any, state: any) => {
            const provided = baseStyles[stylesGroup] ? baseStyles[stylesGroup](defaultStyles, state) : defaultStyles;

            return stylesFn(provided, state);
          }
        };
      }, {} as any);

      if (multi) {
        if (multiline) {
          Object.values(ADD_AUTO_HEIGHT_COMPONENTS).forEach(component => {
            const original = mergedStyles[component];
            mergedStyles[component] = (provided: any, state: any) => ({
              ...original(provided, state),
              height: "auto"
            });
          });
        }

        const originalValueContainer = mergedStyles.valueContainer;
        mergedStyles.valueContainer = (provided: any, state: any) => ({
          ...originalValueContainer(provided, state),
          paddingLeft: 6
        });
      }

      return mergedStyles;
    }, [size, rtl, insideOverflowContainer, insideOverflowWithTransformContainer, extraStyles, multi, multiline]);

    const Menu = useCallback(
      (props: CustomMenuProps) => (
        <MenuComponent
          {...props}
          id={menuId}
          ariaLabel={menuAriaLabel}
          Renderer={menuRenderer}
          dropdownMenuWrapperClassName={dropdownMenuWrapperClassName}
        />
      ),
      [dropdownMenuWrapperClassName, menuRenderer, menuId, menuAriaLabel]
    );

    const DropdownIndicator = useCallback(
      (props: { size: string }) => <DropdownIndicatorComponent {...props} size={size} />,
      [size]
    );

    const Option = useCallback(
      (props: any) => (
        <OptionComponent {...props} Renderer={finalOptionRenderer} optionWrapperClassName={optionWrapperClassName} />
      ),
      [finalOptionRenderer, optionWrapperClassName]
    );

    const Input = useCallback(
      (props: any) => <components.Input {...props} aria-label="Dropdown input" aria-controls={menuId} />,
      [menuId]
    );

    const SingleValue = useCallback(
      (props: any) => (
        <SingleValueComponent
          {...props}
          readOnly={readOnly}
          Renderer={finalValueRenderer}
          selectedOption={(selectedOptions as DropdownDefaultValue[])[0]}
          singleValueWrapperClassName={singleValueWrapperClassName}
        />
      ),
      [finalValueRenderer, readOnly, selectedOptions, singleValueWrapperClassName]
    );

    const ClearIndicator = useCallback((props: any) => <ClearIndicatorComponent {...props} size={size} />, [size]);

    const onOptionRemove = useMemo(() => {
      return function (optionValue: any, e: any) {
        if (customOnOptionRemove) {
          customOnOptionRemove((selectedOptionsMap as DropdownDefaultValue[])[optionValue]);
        }
        const newSelectedOptions = (selectedOptions as DropdownDefaultValue[]).filter(
          option => option.value !== optionValue
        );
        if (customOnChange) {
          customOnChange(newSelectedOptions, e);
        }
        setSelected(newSelectedOptions);
      };
    }, [customOnChange, customOnOptionRemove, selectedOptions, selectedOptionsMap]);

    const customProps = useMemo(
      () => ({
        selectedOptions,
        onSelectedDelete: onOptionRemove,
        isMultiline: multiline,
        insideOverflowContainer,
        insideOverflowWithTransformContainer,
        controlRef,
        tooltipContent,
        popupsContainerSelector
      }),
      [
        selectedOptions,
        onOptionRemove,
        multiline,
        insideOverflowContainer,
        insideOverflowWithTransformContainer,
        tooltipContent,
        popupsContainerSelector
      ]
    );
    const onChange = (option: any, event: any) => {
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
            setSelected([...(selectedOptions as DropdownDefaultValue[]), selectedOption]);
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

    const DropDownComponent: any = asyncOptions ? AsyncSelect : Select;

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
      (event: any) => {
        const scrolledElement = event.target;
        if (scrolledElement?.parentElement?.classList.contains(menuStyles.dropdownMenuWrapper)) {
          return false;
        }
        return customCloseMenuOnScroll || insideOverflowContainer || insideOverflowWithTransformContainer;
      },
      [insideOverflowContainer, insideOverflowWithTransformContainer, customCloseMenuOnScroll]
    );

    return (
      <DropDownComponent
        className={cx(styles.dropdown, className)}
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
            MultiValue: NOOP as any, // We need it for react-select to behave nice with "multi"
            ValueContainer: MultiValueContainer
          }),
          ...(isVirtualized && { MenuList: WindowedMenuList })
        }}
        // When inside scroll we set the menu position by js and we can't follow the drop down location while use scrolling
        closeMenuOnScroll={closeMenuOnScroll as any}
        size={size}
        noOptionsMessage={noOptionsMessage as any}
        placeholder={placeholder}
        isDisabled={disabled}
        isClearable={!readOnly && clearable}
        isSearchable={!readOnly && searchable}
        readOnly={readOnly}
        withReadOnlyStyle={withReadOnlyStyle}
        aria-readonly={readOnly}
        aria-label={overrideAriaLabel}
        aria-details={tooltipContent}
        aria-expanded={!readOnly && menuIsOpen}
        aria-haspopup="listbox"
        aria-activedescendant
        role="combobox"
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
        styles={inlineStyles}
        theme={customTheme}
        maxMenuHeight={maxMenuHeight}
        menuPortalTarget={overrideMenuPortalTarget}
        menuPlacement={menuPlacement}
        menuPosition={menuPosition}
        menuIsOpen={!readOnly && menuIsOpen}
        tabIndex={tabIndex}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.DROPDOWN, id)}
        autoFocus={autoFocus}
        closeMenuOnSelect={closeMenuOnSelect}
        ref={ref as any}
        withMandatoryDefaultOptions={withMandatoryDefaultOptions}
        isOptionSelected={isOptionSelected}
        isLoading={isLoading}
        loadingMessage={loadingMessage}
        tabSelectsValue={tabSelectsValue}
        filterOption={filterOption}
        {...asyncAdditions}
        {...additions}
      />
    );
  }
);

Object.assign(Dropdown, {
  // TODO Deprecate Dropdown.size in the next major version - use Dropdown.sizes instead
  size: SIZES,
  sizes: SIZES,
  chipColors: DROPDOWN_CHIP_COLORS,
  menuPlacements: DROPDOWN_MENU_PLACEMENT,
  menuPositions: DROPDOWN_MENU_POSITION,
  createFilter: createFilter
});

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
  menuPlacement: DROPDOWN_MENU_PLACEMENT.BOTTOM,
  menuPosition: DROPDOWN_MENU_POSITION.ABSOLUTE,
  noOptionsMessage: NOOP,
  clearable: true,
  size: BaseSizes.MEDIUM,
  extraStyles: defaultCustomStyles,
  tabIndex: 0,
  onOptionRemove: undefined,
  id: DROPDOWN_MENU.ID,
  menuId: DROPDOWN_MENU_ID,
  menuAriaLabel: DROPDOWN_MENU_ARIA_LABEL,
  autoFocus: false,
  closeMenuOnSelect: undefined,
  closeMenuOnScroll: false,
  ref: undefined,
  withMandatoryDefaultOptions: false,
  insideOverflowContainer: false,
  insideOverflowWithTransformContainer: false,
  tooltipContent: "",
  disabled: false,
  readOnly: false,
  isLoading: false,
  loadingMessage: undefined,
  ariaLabel: undefined,
  filterOption: undefined
};

export default Dropdown;
