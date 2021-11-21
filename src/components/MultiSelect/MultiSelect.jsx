import React, { useMemo, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Chips from "../Chips/Chips";
import Counter from "../Counter/Counter";
import classes from "./MultiSelect.module.scss";

const addHeightAuto = styles => ({ ...styles, height: "auto" });

const Container = ({ selectedOptions, multiValueRenderer, children }) => {
  const [ref, setRef] = useState();

  if (!selectedOptions.length) {
    return <div className={classes["value-container"]}>{children}</div>;
  }

  let overflowingChildren = 0;

  if (ref) {
    const { bottom: parentBottom } = ref.getBoundingClientRect();

    ref.children.forEach(child => {
      const { bottom: childBottom } = child.getBoundingClientRect();

      if (childBottom > parentBottom) {
        overflowingChildren++;
      }
    });
  }

  return (
    <div className={classes["value-container"]}>
      <div className={classes["value-container-chips"]} ref={newRef => setRef(newRef)}>
        {selectedOptions.map(data => multiValueRenderer({ data }))}
      </div>
      <div className={classes["value-container-counter"]}>
        {!!overflowingChildren && <Counter kind={Counter.kinds.LINE} prefix="+" count={overflowingChildren} />}
      </div>
    </div>
  );
};

const MultiSelect = ({ value, options, onChange, onOptionRemove, ...rest }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const isControlled = !!value;
  const _selectedOptions = value ?? selectedOptions;
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
  const filteredOptions = useMemo(() => options.filter(option => !_selectedOptions.includes(option.value)), [
    options,
    _selectedOptions
  ]);

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
        className={classes["multiselect-chip"]}
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

  const _onChange = (option, event) => {
    if (onChange) {
      onChange(event);
    }

    if (isControlled) {
      return;
    }

    switch (event.action) {
      case "select-option":
        setSelectedOptions([...selectedOptions, option.value || event.option.value]);
        break;
      case "clear":
        setSelectedOptions([]);
        break;
    }
  };

  return (
    <Dropdown
      options={filteredOptions}
      value={_selectedOptions}
      onChange={_onChange}
      // extraStyles={provided => ({
      //   ...provided,
      //   container: addHeightAuto,
      //   control: addHeightAuto,
      //   valueContainer: addHeightAuto
      // })}
      multiValueRenderer={multiValueRenderer}
      valueContainerRenderer={p => (
        <Container selectedOptions={_selectedOptions} multiValueRenderer={multiValueRenderer} {...p} />
      )}
      {...rest}
    />
  );
};

export default MultiSelect;
