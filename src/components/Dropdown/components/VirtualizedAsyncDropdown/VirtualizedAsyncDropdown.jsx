import React, { memo, useMemo, useCallback } from "react";
import Select from "react-select-virtualized";

const VirtualizedAsyncDropdown = memo(
  ({
    defaultOptions,
    loadOptions,
    cacheOptions,
    onInputChange,
    minimumInputSearch,
    ...props
  }) => {
    const options = useMemo(() => defaultOptions || [], [defaultOptions]);

    const asyncLoadOptions = useCallback(
      inputValue =>
        new Promise(resolve => {
          const promise = loadOptions(inputValue, resolve);
          if (Promise.resolve(promise) === promise) {
            promise.then(resolve);
          }
        }),
      [loadOptions]
    );

    return (
      <Select
        {...props}
        options={options}
        minimumInputSearch={minimumInputSearch || (!defaultOptions && 1) || 0}
        asyncInputChange={onInputChange}
        asyncLoadOptions={asyncLoadOptions}
      />
    );
  }
);

VirtualizedAsyncDropdown.displayName = "AsyncVirtualizedDropdown";

export default VirtualizedAsyncDropdown;
