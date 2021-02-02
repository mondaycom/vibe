import React from "react";
import { boolean, number, select, color, text } from "@storybook/addon-knobs";
import LinearProgressBar from "../LinearProgressBar";
import colors from "../../../../constants/colors.json";
import "./linearProgressBar.stories.scss";
import { withPerformance } from "storybook-addon-performance";

export const Sandbox = () => (
  <div style={{ width: "50%", margin: "40px" }}>
    <LinearProgressBar
      value={number("Value", 50)}
      animated={boolean("Is animated", true)}
      valueSecondary={number("Secondary bar value", 60)}
      max={number("Max value", 100)}
      min={number("Min value", 0)}
      size={select("Size", Object.values(LinearProgressBar.sizes), LinearProgressBar.sizes.LARGE)}
      barStyle={select("Style", Object.values(LinearProgressBar.styles), LinearProgressBar.styles.PRIMARY)}
      indicateProgress={boolean("Indicate Progress", true)}
      className={select("With custom class", ["linear-progress-bar--custom-class", ""], "")}
      ariaLabel={text("Bar Aria Label", "my awesome growth bar")}
    />
  </div>
);

export const multiProgressBars = () => {
  const firstValue = number("First value", 10);
  const firstColor = color("First bar Color", colors.basic_blue);
  const secondValue = number("Second value", 20);
  const secondColor = color("Second bar Color", colors.blackish);
  const thirdValue = number("Third value", 30);
  const thirdColor = color("Third bar Color", colors.grass_green);
  const multiValues = [
    { value: firstValue, color: firstColor },
    { value: secondValue, color: secondColor },
    { value: thirdValue, color: thirdColor }
  ];
  return (
    <div style={{ width: "50%", margin: "40px" }}>
      <LinearProgressBar
        animated
        max={number("Max value", 100)}
        min={number("Min value", 0)}
        size={LinearProgressBar.sizes.LARGE}
        indicateProgress
        multi
        multiValues={multiValues}
        ariaLabel="A few colors"
      />
    </div>
  );
};

export default {
  title: "Components|Progress Bars/LinearProgressBar",
  component: LinearProgressBar,
  decorators: [withPerformance]
};
