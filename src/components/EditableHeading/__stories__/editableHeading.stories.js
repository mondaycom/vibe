import React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import EditableHeading from "../EditableHeading";
import { TYPES } from "../../Heading/HeadingConstants";

export const Sandbox = () => (
  <div style={{ width: "200px", height: "500px", padding: "16px", border: "1px solid" }}>
    <EditableHeading type={TYPES.h1} value="Edit H1" />
    <br />
    <EditableHeading type={TYPES.h2} value="Edit H2" />
    <br />
    <EditableHeading type={TYPES.h3} value="Edit H3" />
    <br />
    <EditableHeading type={TYPES.h4} value="Edit H4" />
    <br />
    <EditableHeading type={TYPES.h5} value="Edit H5" />
    <br />
    <EditableHeading type={TYPES.h3} value="In publishing and graphic design, Lorem ipsum is a placeholder" />
    <br />
    <EditableHeading
      style={{ height: "66px" }}
      tooltipPosition="right"
      type={TYPES.h2}
      value="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form"
      ellipsisMaxLines={2}
    />
  </div>
);

export default {
  title: "Components/EditableHeading",
  component: EditableHeading,
  decorators: [withPerformance]
};
