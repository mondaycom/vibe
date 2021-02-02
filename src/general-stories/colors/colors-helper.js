import React from "react";
import * as Colors from "../../constants/colors.json";
import { StoryStateRow, StoryStateColumn, ColorItem } from "../../components/storybook-helpers";

const mainColors = {
  primary: {
    value: Colors.primary,
    name: "Primary",
    themeColor: "primary-color"
  },
  "primary-hover": {
    value: Colors["primary-hover"],
    name: "Primary-hover",
    themeColor: "primary-hover-color"
  },
  "primary-highlight": {
    value: Colors.higlight,
    name: "Highlight",
    themeColor: "primary-selected-color"
  },
  dark: {
    value: Colors.mud_black,
    name: "Dark",
    themeColor: "primary-text-color"
  }
};

const mainColors2 = {
  success: {
    value: Colors.success,
    name: "Success",
    themeColor: "positive-color"
  },
  error: { value: Colors.error, name: "Error", themeColor: "negative-color" }
};

const mainColors3 = {
  private: {
    value: Colors.private,
    name: "Private",
    themeColor: "private-color"
  },
  share: { value: Colors.share, name: "Shareable", themeColor: "share-color" }
};

const darkColors = {
  board_views_grey: {
    value: Colors.board_views_grey,
    name: "Left highlight"
  },
  board_views_blue_secondary: {
    value: Colors.board_views_blue_secondary,
    name: "Left main"
  },
  board_views_blue: {
    value: Colors.board_views_blue,
    name: "name is missing"
  }
};

const greyColors = {
  mud_black: { value: Colors.mud_black, name: "Mud" },
  wolf_gray: { value: Colors.wolf_gray, name: "Wolf" },
  ui_grey: { value: Colors.ui_grey, name: "UIGrey" },
  riverstone_gray: { value: Colors.riverstone_gray, name: "Riverstone" },
  snow_white: { value: Colors.snow_white, name: "White" }
};

const codingColors = {
  success: { value: Colors.success, name: "Done Green" },
  grass_green: { value: Colors.grass_green, name: "Grass Green" },
  lime_green: { value: Colors.lime_green, name: "Bright Green" },
  mustered: { value: Colors.mustered, name: "Saladish" },
  dark_orange: { value: Colors["dark-orange"], name: "Dark Orange" },
  egg_yolk: { value: Colors.egg_yolk, name: "Egg Yolk" },
  red_shadow: { value: Colors.red_shadow, name: "Red" },
  dark_red: { value: Colors.dark_red, name: "Dark Red" },
  sofia_pink: { value: Colors.sofia_pink, name: "Sofia Pink" },
  lipstick: { value: Colors.lipstick, name: "Lipstick" },
  "dark-purple": { value: Colors["dark-purple"], name: "Dark Purple" },
  amethyst: { value: Colors.amethyst, name: "Purple" },
  orange: { value: Colors.orange, name: "Orange" },
  blue_links: { value: Colors.blue_links, name: "Dark Blue" },
  jeans: { value: Colors.jeans, name: "Light Blue" },
  turquoise: { value: Colors.turquoise, name: "Chill Blue" },
  explosive: { value: Colors.explosive, name: "Explosive" },
  american_grey: { value: Colors.american_gray, name: "American Grey" },
  blackish: { value: Colors.blackish, name: "Blackish" },
  brown: { value: Colors.brown, name: "Brown" },
  sunset: { value: Colors.sunset, name: "Sunset" },
  bubble: { value: Colors.bubble, name: "Bubble" },
  peach: { value: Colors.peach, name: "Peach" },
  berry: { value: Colors.berry, name: "Berry" },
  winter: { value: Colors.winter, name: "Winter" },
  river: { value: Colors.river, name: "River" },
  navy: { value: Colors.navy, name: "Navy" },
  aquamarine: { value: Colors.aquamarine, name: "aquamarine" },
  indigo: { value: Colors.indigo, name: "Indigo" },
  dark_indigo: { value: Colors.dark_indigo, name: "Dark Indigo" }
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

export { mainColors, mainColors2, mainColors3, darkColors, greyColors, codingColors, buildColorsStory, textColors };
