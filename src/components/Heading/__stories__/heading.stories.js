import React from "react";
import { withPerformance } from "storybook-addon-performance";
import { TYPES } from "../HeadingConstants";
import Heading from "../Heading";

export const Sandbox = () => (
  <div style={{ width: "200px", border: "1px solid" }}>
    <Heading type={TYPES.h1} value="Hello H1" />
    <br />
    <Heading type={TYPES.h2} value="Hello H2" />
    <br />
    <Heading type={TYPES.h3} value="Hello H3" />
    <br />
    <Heading type={TYPES.h4} value="Suggest Edit H4" suggestEditOnHover />
    <br />
    <Heading type={TYPES.h5} value="H5 with tooltip" nonEllipsisTooltip="Click to edit" />
    <br />
    <Heading
      type={TYPES.h3}
      value="In publishing and graphic design, Lorem ipsum is a placeholder"
      nonEllipsisTooltip="This tooltip is not shown since overflow"
    />
    <br />
    <Heading
      style={{ maxHeight: "64px" }}
      tooltipPosition="right"
      type={TYPES.h2}
      value="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form"
      ellipsisMaxLines={2}
    />
  </div>
);

export default {
  title: "Components/Heading",
  component: Heading,
  decorators: [withPerformance]
};
