import React, { useCallback, useState } from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import Clickable from "../Clickable";
import "./clickable.stories.scss";

export const Sandbox = () => {
  const [count, setCount] = useState(0);
  const onClick = useCallback(() => setCount(count + 1), [count, setCount]);
  return (
    <div>
      <Clickable id="Knobs" onClick={onClick} className="monday-story-clickable_first-element">
        I'm a clickable element with a custom design
      </Clickable>
      Pressed {count} times
    </div>
  );
};

export default {
  title: "Components|Clickable",
  component: Clickable,
  decorators: [withPerformance]
};
