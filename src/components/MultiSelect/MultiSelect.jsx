import React, { useMemo, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Chips from "../Chips/Chips";
import "./MultiSelect.scss";

const MultiSelect = ({ value, options, onChange, onOptionRemove, ...props }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const isControlled = !!value;
  const _value = value ?? selectedOptions;
  const optionsMap = useMemo(
    () =>
      options.reduce(
        (acc, option) => ({
          ...acc,
          [option.value]: option
        }),
        []
      ),
    [options]
  );
  const filteredOptions = useMemo(() => options.filter(option => !_value.includes(option.value)), [options, _value]);

  const _onOptionRemove =
    onOptionRemove ??
    function(optionValue, e) {
      setSelectedOptions(selectedOptions.filter(selectedOption => selectedOption !== optionValue));

      e.stopPropagation();
    };

  const multiValueRenderer = ({ data: optionValue }) => {
    const label = optionsMap[optionValue].label;

    return (
      <Chips
        noAnimation
        id={optionValue}
        label={label}
        onDelete={_onOptionRemove}
        onMouseDown={e => {
          e.stopPropagation();
        }}
      />
    );
  };

  const _onChange = (_, event) => {
    if (onChange) {
      onChange(event);
    }

    if (!isControlled && event.action === "select-option") {
      setSelectedOptions([...selectedOptions, event.option.value]);
    }
  };

  return (
    <Dropdown
      options={filteredOptions}
      value={_value}
      onChange={_onChange}
      multiValueRenderer={multiValueRenderer}
      {...props}
    />
  );
};

export default MultiSelect;
