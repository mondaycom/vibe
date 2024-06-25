/* eslint-disable react/require-default-props,react/forbid-prop-types */
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import { SIZES, SIZES_VALUES } from "../../constants";
import React, { forwardRef, useCallback, useMemo, useRef, useState } from "react";
import Select, { InputProps, components, createFilter, ActionMeta } from "react-select";
import AsyncSelect from "react-select/async";
import { noop as NOOP } from "lodash-es";
import { WindowedMenuList } from "react-windowed-select";
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
  DROPDOWN_ID,
  DROPDOWN_MENU_ARIA_LABEL,
  DROPDOWN_MENU_ID,
  DROPDOWN_MENU_PLACEMENT,
  DROPDOWN_MENU_POSITION
} from "./DropdownConstants";
import generateBaseStyles, { customTheme } from "./Dropdown.styles";
import Control from "./components/Control/Control";
import menuStyles from "./components/menu/menu.module.scss";
import styles from "./Dropdown.module.scss";
import {
  DropdownOption,
  DropdownState,
  CustomMenuProps,
  CustomOptionProps,
  CustomSingleValueProps,
  DropdownComponentProps
} from "./Dropdown.types";
import { VibeComponent, withStaticProps } from "../../types";

const Dropdown: VibeComponent<DropdownComponentProps, HTMLElement> & {
  size?: typeof SIZES;
  sizes?: typeof SIZES;
  chipColors?: typeof DROPDOWN_CHIP_COLORS;
  menuPlacements?: typeof DROPDOWN_MENU_PLACEMENT;
  menuPositions?: typeof DROPDOWN_MENU_POSITION;
  createFilter?: typeof createFilter;
} = forwardRef(
  (
    {
      className,
      optionWrapperClassName,
      singleValueWrapperClassName,
      dropdownMenuWrapperClassName,
      placeholder = "",
      disabled = false,
      readOnly = false,
      withReadOnlyStyle,
      onMenuOpen = NOOP,
      onMenuClose = NOOP,
      onFocus = NOOP,
      onBlur = NOOP,
      onChange: customOnChange = NOOP,
      searchable = true,
      options = [],
      defaultValue,
      value: customValue,
      noOptionsMessage,
      openMenuOnFocus,
      openMenuOnClick,
      clearable = true,
      OptionRenderer,
      optionRenderer,
      ValueRenderer,
      valueRenderer,
      menuRenderer,
      menuPlacement = Dropdown.menuPlacements.BOTTOM,
      rtl,
      size = Dropdown.sizes.MEDIUM,
      asyncOptions,
      cacheOptions,
      defaultOptions,
      isVirtualized,
      menuPortalTarget,
      extraStyles = defaultCustomStyles,
      maxMenuHeight,
      menuIsOpen,
      tabIndex = "0",
      id = DROPDOWN_ID,
      menuId = DROPDOWN_MENU_ID,
      menuAriaLabel = DROPDOWN_MENU_ARIA_LABEL,
      autoFocus = false,
      multi = false,
      multiline = false,
      onOptionRemove: customOnOptionRemove,
      onOptionSelect,
      onClear,
      onInputChange = NOOP,
      closeMenuOnSelect = !multi,
      closeMenuOnScroll: customCloseMenuOnScroll = false,
      withMandatoryDefaultOptions = false,
      isOptionSelected,
      insideOverflowContainer = false,
      insideOverflowWithTransformContainer = false,
      tooltipContent = "",
      onKeyDown = NOOP,
      isLoading = false,
      loadingMessage,
      ariaLabel,
      tabSelectsValue = true,
      popupsContainerSelector,
      filterOption,
      menuPosition = Dropdown.menuPositions.ABSOLUTE,
      "data-testid": dataTestId
    }: DropdownComponentProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const controlRef = useRef();
    const overrideMenuPortalTarget =
      menuPortalTarget || (popupsContainerSelector && document.querySelector(popupsContainerSelector));
    const overrideDefaultValue = useMemo(() => {
      if (defaultValue) {
        return Array.isArray(defaultValue)
          ? (defaultValue as DropdownOption[]).map(df => ({ ...df, isMandatory: true }))
          : { ...(defaultValue as DropdownOption), isMandatory: true };
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

    const inlineStyles = useMemo(() => {
      // We first want to get the default stylized groups (e.g. "container", "menu").
      const baseStyles = generateBaseStyles({
        size,
        rtl,
        insideOverflowContainer,
        controlRef,
        insideOverflowWithTransformContainer
      });

      type BaseStyles = typeof baseStyles;

      // Then we want to run the consumer's root-level custom styles with our "base" override groups.
      const customStyles = extraStyles(baseStyles);

      // Lastly, we create a style groups object that makes sure we run each custom group with our basic overrides.
      const mergedStyles: any = Object.entries(customStyles).reduce((accumulator, [stylesGroup, stylesFn]) => {
        return {
          ...accumulator,
          [stylesGroup]: (defaultStyles: BaseStyles, state: DropdownState) => {
            const providedFn = baseStyles[stylesGroup as keyof BaseStyles];
            const provided = providedFn ? providedFn(defaultStyles, state) : defaultStyles;

            return stylesFn(provided, state);
          }
        };
      }, {} as BaseStyles);

      if (multi) {
        if (multiline) {
          ADD_AUTO_HEIGHT_COMPONENTS.forEach((component: string) => {
            const original = mergedStyles[component];
            mergedStyles[component] = (provided: BaseStyles, state: DropdownState) => ({
              ...original(provided, state),
              height: "auto"
            });
          });
        }

        const originalValueContainer = mergedStyles.valueContainer;
        mergedStyles.valueContainer = (provided: BaseStyles, state: DropdownState) => ({
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
      (props: React.HTMLAttributes<HTMLElement> & { size?: SIZES_VALUES }) => (
        <DropdownIndicatorComponent {...props} size={size} />
      ),
      [size]
    );

    const Option = useCallback(
      (props: CustomOptionProps) => (
        <OptionComponent {...props} Renderer={finalOptionRenderer} optionWrapperClassName={optionWrapperClassName} />
      ),
      [finalOptionRenderer, optionWrapperClassName]
    );

    const Input = useCallback(
      (props: InputProps) => <components.Input {...props} aria-label="Dropdown input" aria-controls={menuId} />,
      [menuId]
    );

    const SingleValue = useCallback(
      (props: CustomSingleValueProps) => (
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

    const ClearIndicator = useCallback(
      (props: React.HTMLAttributes<HTMLElement> & { size?: SIZES_VALUES }) => (
        <ClearIndicatorComponent {...props} size={size} />
      ),
      [size]
    );

    const onOptionRemove = useMemo(() => {
      return function (optionValue: number, e: React.MouseEvent | React.KeyboardEvent) {
        if (customOnOptionRemove) {
          customOnOptionRemove(selectedOptionsMap[optionValue]);
        }
        const newSelectedOptions = Array.isArray(selectedOptions)
          ? selectedOptions.filter(option => option.value !== optionValue)
          : selectedOptions;

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
        popupsContainerSelector,
        size
      }),
      [
        selectedOptions,
        onOptionRemove,
        multiline,
        insideOverflowContainer,
        insideOverflowWithTransformContainer,
        tooltipContent,
        popupsContainerSelector,
        size
      ]
    );
    const onChange = (option: DropdownOption | DropdownOption[], meta: ActionMeta<DropdownOption>) => {
      if (customOnChange) {
        customOnChange(option, meta);
      }

      switch (meta.action) {
        case "select-option": {
          const selectedOption = multi ? meta.option : option;

          if (onOptionSelect) {
            onOptionSelect(selectedOption);
          }

          if (!isControlled) {
            setSelected([...selectedOptions, selectedOption]);
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

    const DropDownComponent: React.ElementType = asyncOptions ? AsyncSelect : Select;

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
      (event: React.FocusEvent) => {
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
        ref={ref as React.Ref<any>}
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

export default withStaticProps(Dropdown, {
  // TODO Deprecate Dropdown.size in the next major version - use Dropdown.sizes instead
  size: SIZES,
  sizes: SIZES,
  chipColors: DROPDOWN_CHIP_COLORS,
  menuPlacements: DROPDOWN_MENU_PLACEMENT,
  menuPositions: DROPDOWN_MENU_POSITION,
  createFilter: createFilter
});
