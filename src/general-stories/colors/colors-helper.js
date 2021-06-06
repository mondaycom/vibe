import React from "react";
import * as Colors from "../../constants/colors.json";
import { StoryStateRow, StoryStateColumn, ColorItem } from "../../components/storybook-helpers";

const mainColors = {
  primary: {
    value: "var(--primary-color)",
    name: "Primary",
    themeColor: "primary-color"
  },
  "primary-hover-color": {
    value: "var(--primary-hover-color)",
    name: "Primary Hover",
    themeColor: "primary-hover-color"
  },
  "primary-selected-color": {
    value: "var(--primary-selected-color)",
    name: "Selected",
    themeColor: "primary-selected-color"
  },
  "text-color": {
    value: "var(--primary-text-color)",
    name: "Text Color",
    themeColor: "primary-text-color"
  }
};

const mainColors2 = {
  positive: {
    value: "var(--positive-color)",
    name: "Positive",
    themeColor: "positive-color"
  },
  negative: { value: "var(--negative-color)", name: "Negative", themeColor: "negative-color" },
  private: {
    value: "var(--private-color)",
    name: "Private",
    themeColor: "private-color"
  },
  share: { value: "var(--shareable-color)", name: "Shareable", themeColor: "shareable-color" }
};

const greyColors = {
  mud_black: { value: Colors.mud_black, name: "Mud" },
  wolf_gray: { value: Colors.wolf_gray, name: "Wolf" },
  ui_grey: { value: Colors.ui_grey, name: "UIGrey" },
  riverstone_gray: { value: Colors.riverstone_gray, name: "Riverstone" },
  snow_white: { value: Colors.snow_white, name: "White" }
};

const textColors = {
  mud_black: { value: Colors.mud_black, name: "Mud" },
  asphalt: { value: Colors.asphalt, name: "Asphalt" },
  link_color: { value: Colors.link_color, name: "Link Color" },
  basic_blue: { value: Colors.basic_blue, name: "Basic Blue" }
};

const buildColorsStory = (colors, halfSize) => {
  return (
    <StoryStateRow>
      {Object.keys(colors).map(colorKey => {
        const value = colors[colorKey].value.toString();
        return (
          <StoryStateColumn ignore>
            <ColorItem
              name={colors[colorKey].name}
              codeName={colorKey}
              value={value}
              themeColor={colors[colorKey].themeColor}
              halfSize={halfSize}
            />
          </StoryStateColumn>
        );
      })}
    </StoryStateRow>
  );
};

export { mainColors, mainColors2, greyColors, buildColorsStory, textColors };
