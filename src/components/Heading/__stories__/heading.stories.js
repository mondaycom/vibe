import React from "react";
import { withPerformance } from "storybook-addon-performance";
import Heading from "../Heading";

export const Sandbox = () => (
  <div style={{ width: "200px", border: "1px solid" }}>
    <Heading text="Hello H1" type="h1" />
    <Heading
      text="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form"
      type="h2"
      ellipsisMaxLines={3}
    />
    <Heading text="Hello H2" type="h2" />
    <Heading text="Hello H3" type="h3" />
    <Heading text="Hello H4" type="h4" />
    <Heading text="Hello H5" type="h5" />
  </div>
);

export default {
  title: "Components/Heading",
  component: Heading,
  decorators: [withPerformance]
};
