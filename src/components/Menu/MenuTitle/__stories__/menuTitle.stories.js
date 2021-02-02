import React from "react";
import MenuTitle from "../MenuTitle";
import { FlexLayout } from "../../../storybook-helpers";
import { text, select } from "@storybook/addon-knobs";
import StoryLine from "../../../../StoryBookComponents/StoryLink/StoryLine";
import { withPerformance } from "storybook-addon-performance";

export const Sandbox = () => (
  <div style={{ width: 200 }}>
    <MenuTitle
      id="menu-title"
      caption={text("caption", "Caption")}
      captionPosition={select(
        "captionPosition",
        {
          TOP: MenuTitle.positions.TOP,
          BOTTOM: MenuTitle.positions.BOTTOM,
          CENTER: MenuTitle.positions.CENTER
        },
        MenuTitle.positions.BOTTOM
      )}
    />
  </div>
);

export const States = () => (
  <div style={{ width: 700 }}>
    <FlexLayout>
      <StoryLine title="Menu title with top caption">
        <MenuTitle id="menu-title-1" caption={"Caption"} captionPosition={MenuTitle.positions.TOP} />
      </StoryLine>
    </FlexLayout>
    <FlexLayout>
      <StoryLine title="Menu title with bottom caption">
        <MenuTitle id="menu-title-2" caption={"Caption"} />
      </StoryLine>
    </FlexLayout>
    <FlexLayout>
      <StoryLine title="Menu title with center caption">
        <MenuTitle id="menu-title-3" caption={"Caption"} captionPosition={MenuTitle.positions.CENTER} />
      </StoryLine>
    </FlexLayout>
  </div>
);

export default {
  title: "Work in progress/Menu/MenuTitle",
  component: MenuTitle,
  decorators: [withPerformance]
};
