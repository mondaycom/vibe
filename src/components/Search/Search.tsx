import { SIZES } from "../../constants/sizes";
import React, { forwardRef } from "react";
import classNames from "classnames";
import TextField from "../../components/TextField/TextField";
import useMergeRefs from "../../hooks/useMergeRefs";
import { SearchIconName, SearchType, SearchTypeClass } from "./SearchConstants";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import VibeComponentProps from "../../types/VibeComponentProps";
import CloseIcon from "../Icon/Icons/components/CloseSmall";
import SearchIcon from "../Icon/Icons/components/Search";
import { NOOP } from "../../utils/function-utils";
import { IconType } from "../Icon/IconConstants";
import "./Search.scss";

function getType(type: SearchType) {
  return SearchTypeClass[type] || "";
}

export interface SearchProps extends VibeComponentProps {
  secondaryIconName?: IconType;
  iconName?: IconType;
  onChange?: () => void;
  autoFocus?: boolean;
  underline?: boolean;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  debounceRate?: number;
  onBlur?: (event: React.FocusEvent) => void;
  onFocus?: (event: React.FocusEvent) => void;
  wrapperClassName?: string;
  setRef?: () => void;
  autoComplete?: string;
  /* SIZES is exposed on the component itself */
  size?: typeof SIZES[keyof typeof SIZES];
  /* TYPES is exposed on the component itself */
  type?: SearchType;
  validation?:
    | {
        status: "error" | "success";
        text: string;
      }
    | { text: string };
  inputAriaLabel?: string;
  searchResultsContainerId?: string;
  activeDescendant?: string;
  /*  Icon names labels for a11y */
  iconNames?: {
    layout: string;
    primary: string;
    secondary: string;
  };
  /** shows loading animation */
  loading?: boolean;
}

const Search: React.ForwardRefExoticComponent<SearchProps & React.RefAttributes<unknown>> & {
  sizes?: typeof SIZES;
  types?: typeof SearchType;
} = forwardRef<unknown, SearchProps>(
  (
    {
      secondaryIconName = CloseIcon,
      iconName = SearchIcon,
      onChange = NOOP,
      autoFocus = false,
      underline = false,
      value = "",
      placeholder = "",
      disabled = false,
      debounceRate = 200,
      onBlur = NOOP,
      onFocus = NOOP,
      wrapperClassName = "",
      setRef = NOOP,
      autoComplete = "off",
      size = SIZES.MEDIUM,
      type = SearchType.SQUARE,
      className,
      id = "search",
      validation = null,
      inputAriaLabel,
      searchResultsContainerId = "",
      activeDescendant = "",
      iconNames = SearchIconName,
      loading = false
    },
    ref
  ) => {
    const mergedRef = useMergeRefs({ refs: [ref, setRef] });
    return (
      <TextField
        // @ts-ignore TODO TS-migration fix, when TextField will be converted to TS
        id={id}
        dataTestId={getTestId(ELEMENT_TYPES.SEARCH, id)}
        iconName={iconName}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        underline={underline}
        placeholder={placeholder}
        disabled={disabled}
        debounceRate={debounceRate}
        className={classNames(className, "search_component", getType(type))}
        secondaryIconName={secondaryIconName}
        secondaryDataTestId={getTestId(ELEMENT_TYPES.CLEAN_SEARCH_BUTTON, id)}
        wrapperClassName={classNames(wrapperClassName, "search_component_wrapper")}
        onBlur={onBlur}
        onFocus={onFocus}
        ref={mergedRef}
        autoComplete={autoComplete}
        size={size}
        clearOnIconClick
        validation={validation}
        inputAriaLabel={inputAriaLabel}
        searchResultsContainerId={searchResultsContainerId}
        activeDescendant={activeDescendant}
        iconsNames={iconNames}
        type="search"
        role="search"
        loading={loading}
      />
    );
  }
);

Object.assign(Search, {
  sizes: SIZES,
  types: SearchType
});

export default Search;
