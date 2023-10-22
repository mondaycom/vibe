import { useState } from "react";
import Slider from "../Slider";
import Button from "../../Button/Button";

const OnChangeBugStory = () => {
  const min = 0;
  const max = 100;
  const [value, setValue] = useState([min, max]);
  const onChange = (values: number[]) => {
    setValue(values);
  };
  const defaultValue = [0, 100];

  const valueFormatter = (value: number) => `${value}%`;

  return (
    <div>
      <Slider
        ranged
        valueText=""
        min={min}
        max={max}
        step={1}
        showValue
        defaultValue={defaultValue}
        valueFormatter={valueFormatter}
        value={value}
        // @ts-expect-error
        onChange={onChange}
      />
      <Button onClick={() => setValue([min, max])}>Reset</Button>
    </div>
  );
};

export default OnChangeBugStory;
