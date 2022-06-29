import React, { useCallback, useState } from "react";
import RadioButton from "../RadioButton";
import Button from "../../Button/Button";

const ControlledRadioButton = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onClickCB = useCallback(() => {
    setSelectedIndex(prev => (prev + 1) % 3);
  }, [setSelectedIndex]);
  const onChange = useCallback(() => {}, []);

  return (
    <div className="monday-style-radio-buttons_wrapper-column">
      <div>Controlled radio buttons</div>
      <Button kind={Button.kinds.SECONDARY} onClick={onClickCB}>{`Select next radio button (Radio ${
        ((selectedIndex + 1) % 3) + 1
      }) `}</Button>
      <RadioButton text="Radio 1" name="radio-buttons-group-5" checked={selectedIndex === 0} onSelect={onChange} />
      <RadioButton text="Radio 2" name="radio-buttons-group-5" checked={selectedIndex === 1} onSelect={onChange} />
      <RadioButton text="Radio 3" name="radio-buttons-group-5" checked={selectedIndex === 2} onSelect={onChange} />
    </div>
  );
};

export const controlledRadioButton = () => {
  return <ControlledRadioButton />;
};
