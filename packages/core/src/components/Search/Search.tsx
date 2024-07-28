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
import { SearchProps } from "./Search.types";
import Loader from "../Loader/Loader";

const Search = forwardRef(
  (
    {
      searchIconName = SearchIcon,
      clearIconName = CloseSmallIcon,
      clearIconLabel = "Clear",
      renderAction: RenderAction,
      hideRenderActionOnInput,
      value,
      placeholder,
      size = "medium",
      disabled,
      loading,
      autoFocus,
      autoComplete = "off",
      inputAriaLabel,
      debounceRate = 400,
      searchResultsContainerId,
      currentAriaResultId,
      onChange,
      onFocus,
      onBlur,
      onClear,
      className,
      ariaExpanded,
      ariaHasPopup,
      id,
      "data-testid": dataTestId
    }: SearchProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const inputRef = useRef(null);
    const mergedRef = useMergeRef(ref, inputRef);

    const { inputValue, onEventChanged, clearValue } = useDebounceEvent({
      delay: debounceRate,
      onChange,
      initialStateValue: value
    });

    const onClearButtonClick = useCallback(() => {
      if (disabled) {
        return;
      }

      inputRef.current?.focus?.();
      clearValue();
      onClear?.();
    }, [disabled, clearValue]);

    const SearchIcon = (
      <Icon
        icon={searchIconName}
        className={styles.icon}
        clickable={false}
        iconType={Icon.type.ICON_FONT}
        iconSize={size === "small" ? "16px" : "20px"}
      />
    );

    const ClearIcon = (
      <IconButton
        className={cx(styles.icon, { [styles.empty]: !inputValue })}
        icon={clearIconName}
        ariaLabel={clearIconLabel}
        onClick={onClearButtonClick}
        size={size === "small" ? IconButton.sizes.XS : IconButton.sizes.SMALL}
        data-testid={getTestId(ComponentDefaultTestId.CLEAN_SEARCH_BUTTON, id)}
      />
    );

    const RenderRight = (
      <>
        {loading && (
          <Loader
            size={size === "small" ? Loader.sizes.XS : 20}
            color={Loader.colors.SECONDARY}
            wrapperClassName={cx({ [styles.loader]: !inputValue && !RenderAction })}
          />
        )}
        {inputValue && !disabled && ClearIcon}
        {!(hideRenderActionOnInput && inputValue) && RenderAction}
      </>
    );

    return (
      <BaseInput
        ref={mergedRef}
        id={id}
        type={"search"}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.SEARCH, id)}
        className={cx(styles.searchWrapper, className)}
        inputClassName={styles.search}
        value={inputValue}
        renderLeft={SearchIcon}
        renderRight={RenderRight}
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
        aria-controls={ariaExpanded ? searchResultsContainerId : undefined}
        aria-activedescendant={currentAriaResultId}
        aria-haspopup={ariaHasPopup}
        aria-expanded={ariaExpanded}
      />
    );
  }
);

export default Search;
