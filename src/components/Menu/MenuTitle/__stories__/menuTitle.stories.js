import React from "react";
import MenuTitle from "../MenuTitle";
import { FlexLayout } from "../../../storybook-helpers";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import StoryLine from "../../../../StoryBookComponents/StoryLink/StoryLine";
import { CAPTION_POSITIONS } from "../MenuTitleConstants";

export const Sandbox = () => (
  <div style={{ width: 200 }}>
    <MenuTitle
      id="menu-title"
      caption={text("caption", "Caption")}
      captionPosition={select(
        "captionPosition",
        {
          TOP: CAPTION_POSITIONS.TOP,
          BOTTOM: CAPTION_POSITIONS.BOTTOM,
          CENTER: CAPTION_POSITIONS.CENTER,
        },
        CAPTION_POSITIONS.BOTTOM
      )}
    />
  </div>
);

export const States = () => (
  <div style={{ width: 700 }}>
    <FlexLayout>
      <StoryLine title="Menu title with top caption">
        <MenuTitle
          id="menu-title-1"
          caption={"Caption"}
          captionPosition={CAPTION_POSITIONS.TOP}
        />
      </StoryLine>
    </FlexLayout>
    <FlexLayout>
      <StoryLine title="Menu title with bottom caption">
        <MenuTitle id="menu-title-2" caption={"Caption"} />
      </StoryLine>
    </FlexLayout>
    <FlexLayout>
      <StoryLine title="Menu title with center caption">
        <MenuTitle
          id="menu-title-3"
          caption={"Caption"}
          captionPosition={CAPTION_POSITIONS.CENTER}
        />
      </StoryLine>
    </FlexLayout>
  </div>
);

export default {
  title: "Work in progress/Menu/MenuTitle",
  component: MenuTitle,
};
