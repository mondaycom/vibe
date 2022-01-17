import React from "react";
import { withPerformance } from "storybook-addon-performance";
import EditableInput from "../EditableInput";

export const Sandbox = () => (
  <div style={{ width: "300px", border: "1px solid", padding: "30px" }}>
    <EditableInput inputType="input" value="Hello input" />
    <br />
    <br />
    <EditableInput inputType="textarea" value="Hello textarea" />
    <br />
    <br />
    <EditableInput
      inputType="textarea"
      autoSize
      value="Hello textarea autosize test long long text"
      ariaLabel="Edit input"
    />
  </div>
);

export default {
  title: "Components|EditableInput",
  component: EditableInput,
  decorators: [withPerformance]
};
