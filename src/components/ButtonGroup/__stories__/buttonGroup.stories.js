import React from "react";
import { withPerformance } from "storybook-addon-performance";
import ButtonGroup from "../ButtonGroup";

export const Sandbox = () => (
  <div
    style={{
      width: "800px",
      height: "300px",
      border: "1px solid"
    }}
  >
    <br />
    <div style={{ textAlign: "center" }}>Medium Size</div>
    <br />
    <ButtonGroup
      componentClassName="buttons-group"
      name="test1"
      onSelect={value => console.log("Selected: ", value)}
      size={ButtonGroup.sizes.MEDIUM}
      options={[
        { value: 1, text: "Option 1", icon: "fa fa-star" },
        { value: 2, text: "Option 2" },
        { value: 3, text: "Option 3", leftIcon: "fa fa-star" }
      ]}
    />
    <br />
    <ButtonGroup
      componentClassName="buttons-group-tertiary"
      name="test2"
      onSelect={value => console.log("Selected: ", value)}
      size={ButtonGroup.sizes.MEDIUM}
      kind={ButtonGroup.kinds.TERTIARY}
      options={[
        { value: 1, text: "Option 1", icon: "fa fa-star" },
        { value: 2, text: "Option 2" },
        { value: 3, text: "Option 3", leftIcon: "fa fa-star" }
      ]}
    />
    <br />
    <div style={{ textAlign: "center" }}>Medium Size Disabled</div>
    <br />
    <ButtonGroup
      componentClassName="buttons-group"
      name="test1"
      onSelect={value => console.log("Selected: ", value)}
      size={ButtonGroup.sizes.MEDIUM}
      disabled
      options={[
        { value: 1, text: "Option 1", icon: "fa fa-star" },
        { value: 2, text: "Option 2" },
        { value: 3, text: "Option 3", leftIcon: "fa fa-star" }
      ]}
    />
    <br />
    <div style={{ textAlign: "center" }}>Small Size</div>
    <br />
    <ButtonGroup
      componentClassName="buttons-group"
      name="test1"
      onSelect={value => console.log("Selected: ", value)}
      size={ButtonGroup.sizes.SMALL}
      options={[
        { value: 1, text: "Option 1", icon: "fa fa-star" },
        { value: 2, text: "Option 2" },
        { value: 3, text: "Option 3", leftIcon: "fa fa-star" }
      ]}
    />
    <br />
  </div>
);

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  decorators: [withPerformance]
};
