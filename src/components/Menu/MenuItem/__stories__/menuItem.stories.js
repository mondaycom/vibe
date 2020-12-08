import React from "react";
import MenuItem from "../MenuItem";
import { FlexLayout } from "../../../storybook-helpers";
import { text, boolean, select } from "@storybook/addon-knobs";
import { selectIcon } from "../../../storybook-helpers";
import StoryLine from "../../../../StoryBookComponents/StoryLink/StoryLine";
import { Activity } from "../../../Icon/Icons";
import Icon from "../../../Icon/Icon";
import { withPerformance } from "storybook-addon-performance";

export const Sandbox = () => {
  const iconType = select(
    "icon type",
    { FONT: Icon.type.ICON_FONT, SVG: Icon.type.SVG },
    Icon.type.SVG
  );
  const icon =
    iconType === Icon.type.SVG
      ? selectIcon("SVG icon", "Activity")
      : text("font icon", "fa fa-star");
  return (
    <div style={{ width: 200 }}>
      <MenuItem
        id="menu-item"
        title={text("title", "My item")}
        icon={icon}
        disabled={boolean("disabled", false)}
        onClick={() => alert("hello")}
      />
    </div>
  );
};

export const States = () => (
  <div style={{ width: 700 }}>
    <FlexLayout>
      <StoryLine title="Menu item">
        <MenuItem
          id="menu-item"
          title={("title", "My item")}
          icon={"fa fa-star-o"}
          iconType={Icon.type.ICON_FONT}
        />
      </StoryLine>
    </FlexLayout>
    <FlexLayout>
      <StoryLine title="Menu item with svg icon">
        <MenuItem
          id="menu-item"
          title={"SVG icon item"}
          icon={Activity}
          iconType={Icon.type.ICON_SVG}
        />
      </StoryLine>
    </FlexLayout>
    <FlexLayout>
      <StoryLine title="Disabled menu item">
        <MenuItem
          id="menu-item"
          title={"Disabled item"}
          icon={"fa fa-star-o"}
          disabled={true}
        />
      </StoryLine>
    </FlexLayout>
  </div>
);

export default {
  title: "Work in progress/Menu/MenuItem",
  component: MenuItem,
  decorators: [withPerformance]
};
