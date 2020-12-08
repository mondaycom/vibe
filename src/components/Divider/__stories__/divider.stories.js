import React from "react";
import Divider from "../Divider";
import { FlexLayout } from "../../storybook-helpers";
import StoryLine from "../../../StoryBookComponents/StoryLink/StoryLine";
import { number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";

export const Sandbox = () => {
  const width = number("frame width", 200);
  const height = number("frame height", 200);
  return (
    <div>
      <FlexLayout>
        <StoryLine title="Divider">
          <div style={{ width, height }}>
            <Divider
              id="divider"
              direction={select("direction", {
                HORIZONTAL: Divider.directions.HORIZONTAL,
                VERTICAL: Divider.directions.VERTICAL
              })}
            />
          </div>
        </StoryLine>
      </FlexLayout>
    </div>
  );
};

export const Directions = () => (
  <div>
    <FlexLayout>
      <StoryLine title="Horizontal divider">
        <div style={{ width: 200, height: 200 }}>
          <Divider id="divider" direction={Divider.directions.HORIZONTAL} />
        </div>
      </StoryLine>
    </FlexLayout>
    <FlexLayout>
      <StoryLine title="Vertical divider">
        <div style={{ width: 200, height: 200 }}>
          <Divider id="divider" direction={Divider.directions.VERTICAL} />
        </div>
      </StoryLine>
    </FlexLayout>
  </div>
);

export default {
  title: "Components/Divider",
  component: Divider,
  decorators: [withPerformance]
};
