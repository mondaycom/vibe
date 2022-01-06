import React from "react";
import { withPerformance } from "storybook-addon-performance";
import ListTitle from "../ListTitle";

export const Sandbox = () => {
  const title = "Essentials";
  return (
    <div>
      <ListTitle id="Knobs">{title}</ListTitle>
    </div>
  );
};

export default {
  title: "Components|List/ListTitle",
  component: ListTitle,
  decorators: [withPerformance]
};
