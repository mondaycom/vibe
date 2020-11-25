import React from "react";
import Divider from "../Divider";
import { FlexLayout } from "../../storybook-helpers";
import StoryLine from "../../../StoryBookComponents/StoryLink/StoryLine";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { DIRECTIONS } from "../DividerConstants";

export const Sandbox = () => {
  const width = number("width", 200);
  const height = number("height", 200);
  return (
    <div>
      <FlexLayout>
        <StoryLine title="Divider">
          <div style={{ width, height }}>
            <Divider
              id="divider"
              direction={select("direction", {
                HORIZONTAL: DIRECTIONS.HORIZONTAL,
                VERTICAL: DIRECTIONS.VERTICAL,
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
          <Divider id="divider" direction={DIRECTIONS.HORIZONTAL} />
        </div>
      </StoryLine>
    </FlexLayout>
    <FlexLayout>
      <StoryLine title="Vertical divider">
        <div style={{ width: 200, height: 200 }}>
          <Divider id="divider" direction={DIRECTIONS.VERTICAL} />
        </div>
      </StoryLine>
    </FlexLayout>
  </div>
);

export default {
  title: "Components/Divider",
  component: Divider,
};
