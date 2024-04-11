import cx from "classnames";
import React, { forwardRef, useCallback, useRef } from "react";
import useMergeRef from "../../hooks/useMergeRef";
import CloseSmallIcon from "../Icon/Icons/components/CloseSmall";
import SearchIcon from "../Icon/Icons/components/Search";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import styles from "./Search.module.scss";
import BaseInput from "../BaseInput/BaseInput";
import useDebounceEvent from "../../hooks/useDebounceEvent";
import IconButton from "../IconButton/IconButton";
import Icon from "../Icon/Icon";
import { SearchComponent } from "./Search.types";
import Loader from "../Loader/Loader";

const Search: SearchComponent = forwardRef(
  (
    {
      searchIconName = SearchIcon,
      clearIconName = CloseSmallIcon,
      clearIconLabel = "Clear",
      additionalActionRender: AdditionalAction,
      value,
      placeholder,
      size = "medium",
      disabled,
      loading,
      autoFocus,
      autoComplete = "off",
      inputAriaLabel,
      debounceRate = 200,
      searchResultsContainerId,
      activeDescendant,
      onChange,
      onFocus,
      onBlur,
      wrapperClassName,
      className,
      id,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergeRef<HTMLInputElement>(ref, inputRef);

    const { inputValue, onEventChanged, clearValue } = useDebounceEvent({
      delay: debounceRate,
      onChange,
      initialStateValue: value
    });

    const onClearIconClick = useCallback(() => {
      if (disabled) {
        return;
      }

      inputRef.current?.focus?.();
      clearValue();
    }, [disabled, clearValue]);

    const SearchIcon = (
      <Icon
        icon={searchIconName}
        className={styles.icon}
        clickable={false}
        iconType={Icon.type.ICON_FONT}
        iconSize={size === "small" ? "16px" : "20px"}
        data-testid={getTestId(ComponentDefaultTestId.SEARCH_ICON, id)}
      />
    );

    const ClearIcon = (
      <IconButton
        className={cx(styles.icon, { [styles.empty]: !inputValue })}
        icon={clearIconName}
        ariaLabel={clearIconLabel}
        onClick={onClearIconClick}
        size={size === "small" ? IconButton.sizes.XS : IconButton.sizes.SMALL}
        data-testid={getTestId(ComponentDefaultTestId.CLEAN_SEARCH_BUTTON, id)}
      />
    );

    const RightRender = (
      <>
        {loading && (
          <Loader
            size={size === "small" ? Loader.sizes.XS : 20}
            color={Loader.colors.SECONDARY}
            wrapperClassName={cx({ [styles.loader]: !inputValue && !AdditionalAction })}
          />
        )}
        {inputValue && !disabled && ClearIcon}
        {AdditionalAction}
      </>
    );

    return (
      <BaseInput
        ref={mergedRef}
        id={id}
        type={"search"}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.SEARCH, id)}
        className={cx(styles.search, className)}
        wrapperClassName={cx(styles.searchWrapper, wrapperClassName)}
        value={inputValue}
        leftRender={SearchIcon}
        rightRender={RightRender}
        autoFocus={autoFocus}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onEventChanged}
        onBlur={onBlur}
        onFocus={onFocus}
        autoComplete={autoComplete}
        size={size}
        wrapperRole="search"
        inputRole={searchResultsContainerId ? "combobox" : undefined}
        aria-label={inputAriaLabel}
        aria-busy={loading}
        aria-owns={searchResultsContainerId}
        aria-activedescendant={activeDescendant}
      />
    );
  }
);

export default Search;
