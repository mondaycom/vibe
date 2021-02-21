import React from "react";
import { withPerformance } from "storybook-addon-performance";
import { TYPES } from "../HeadingConstants";
import Heading from "../Heading";

export const Sandbox = () => (
  <div style={{ width: "200px", border: "1px solid" }}>
    <Heading text="Hello H1" type={TYPES.h1} />
    <Heading text="Hello H2" type={TYPES.h2} />
    <Heading text="Hello H3" type={TYPES.h3} />
    <Heading text="Hello H4" type={TYPES.h4} />
    <Heading text="Hello H5" type={TYPES.h5} />
    <Heading text="In publishing and graphic design, Lorem ipsum is a placeholder" type={TYPES.h3} />
    <Heading
      style={{ maxHeight: "64px" }}
      tooltipPosition="right"
      text="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form"
      type={TYPES.h2}
      ellipsisMaxLines={2}
    />
  </div>
);

export default {
  title: "Components/Heading",
  component: Heading,
  decorators: [withPerformance]
};
