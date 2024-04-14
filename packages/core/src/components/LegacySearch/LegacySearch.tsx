import cx from "classnames";
import React, { forwardRef } from "react";
import TextField from "../TextField/TextField";
import useMergeRef from "../../hooks/useMergeRef";
import { SearchDefaultIconNames, SearchType } from "./SearchConstants";
import CloseIcon from "../Icon/Icons/components/CloseSmall";
import SearchIcon from "../Icon/Icons/components/Search";
import { NOOP } from "../../utils/function-utils";
import { SubIcon, VibeComponentProps, VibeComponent, withStaticProps } from "../../types";
import { TextFieldTextType } from "../TextField/TextFieldConstants";
import { BASE_SIZES } from "../../constants";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import styles from "./LegacySearch.module.scss";

export interface SearchProps extends VibeComponentProps {
  secondaryIconName?: SubIcon;
  iconName?: SubIcon;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  debounceRate?: number;
  onBlur?: (event: React.FocusEvent) => void;
  onFocus?: (event: React.FocusEvent) => void;
  wrapperClassName?: string;
  setRef?: () => void;
  autoComplete?: string;
  /* BASE_SIZES is exposed on the component itself */
  size?: (typeof BASE_SIZES)[keyof typeof BASE_SIZES];
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

const LegacySearch: VibeComponent<SearchProps, unknown> & {
  sizes?: typeof BASE_SIZES;
  types?: typeof SearchType;
} = forwardRef<unknown, SearchProps>(
  (
    {
      secondaryIconName = CloseIcon,
      iconName = SearchIcon,
      onChange = NOOP,
      autoFocus = false,
      value = "",
      placeholder = "",
      disabled = false,
      debounceRate = 200,
      onBlur = NOOP,
      onFocus = NOOP,
      wrapperClassName = "",
      setRef = NOOP,
      autoComplete = "off",
      size = BASE_SIZES.MEDIUM,
      type = SearchType.SQUARE,
      className,
      id = "search",
      validation = null,
      inputAriaLabel,
      searchResultsContainerId = "",
      activeDescendant = "",
      iconNames = SearchDefaultIconNames,
      loading = false,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const mergedRef = useMergeRef(ref, setRef);
    return (
      <TextField
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.SEARCH, id)}
        iconName={iconName}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        placeholder={placeholder}
        disabled={disabled}
        debounceRate={debounceRate}
        className={cx(className, styles.search, { [styles.round]: type === SearchType.ROUND })}
        secondaryIconName={secondaryIconName}
        secondaryDataTestId={getTestId(ComponentDefaultTestId.CLEAN_SEARCH_BUTTON, id)}
        wrapperClassName={cx(wrapperClassName, styles.searchWrapper)}
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
        type={TextFieldTextType.SEARCH}
        role="search"
        loading={loading}
        underline={type === SearchType.UNDERLINE}
      />
    );
  }
);

export default withStaticProps(LegacySearch, {
  sizes: BASE_SIZES,
  types: SearchType
});
