import React, { useCallback, useMemo, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import ValueContainer from "./ValueContainer";
import Chip from "./Chip";

const addHeightAuto = styles => ({ ...styles, height: "auto" });

const MultiSelect = ({ multiline, value, options, onClear, onAdd, onRemove, ...rest }) => {
  const [selected, setSelected] = useState([]);
  const [isDialogShown, setIsDialogShown] = useState(false);
  const isControlled = !!value;
  const selectedOptions = value ?? selected;
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
  const filteredOptions = useMemo(() => options.filter(option => !selectedOptions.includes(option.value)), [
    options,
    selectedOptions
  ]);

  const onOptionRemove = useMemo(
    () =>
      onRemove ??
      function(optionValue, e) {
        setSelected(selected.filter(selectedOption => selectedOption !== optionValue));

        e.stopPropagation();
      },
    [onRemove, selected]
  );

  const onChange = (_, event) => {
    switch (event.action) {
      case "select-option": {
        const { value: optionValue } = event.option;

        if (onAdd) {
          onAdd(optionValue);
        }

        if (!isControlled) {
          setSelected([...selected, optionValue]);
        }
        break;
      }

      case "clear":
        if (onClear) {
          onClear();
        }

        if (!isControlled) {
          setSelected([]);
        }
        break;
    }
  };

  const hide = useCallback(() => setIsDialogShown(false), []);

  const valueContainerRenderer = useCallback(
    props => (
      <ValueContainer
        selectedOptions={selectedOptions.map(option => optionsMap[option])}
        onSelectedDelete={onOptionRemove}
        setIsDialogShown={setIsDialogShown}
        isDialogShown={isDialogShown}
        onCounterHide={hide}
        {...props}
      />
    ),
    [selectedOptions, onOptionRemove, optionsMap, isDialogShown, hide]
  );

  const multiValueRenderer = useCallback(({ data }) => <Chip {...optionsMap[data]} onDelete={onOptionRemove} />, [
    onOptionRemove,
    optionsMap
  ]);

  const extraProps = multiline
    ? {
        extraStyles: provided => ({
          ...provided,
          container: addHeightAuto,
          control: addHeightAuto,
          valueContainer: addHeightAuto
        })
      }
    : { valueContainerRenderer };

  return (
    <Dropdown
      options={filteredOptions}
      value={selectedOptions}
      onChange={onChange}
      multiValueRenderer={multiValueRenderer}
      {...extraProps}
      {...rest}
    />
  );
};

export default MultiSelect;
