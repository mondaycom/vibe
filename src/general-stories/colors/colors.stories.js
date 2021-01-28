import React from "react";
import { allMondayColors, colorsMap } from "./colors-vars-map";
import "./ColorItem.scss";
import Sun from "../../components/Icon/Icons/components/Sun";
import Moon from "../../components/Icon/Icons/components/Moon";
import DescriptionLabel from "../../components/storybook-helpers/description-label/description-label";
import StoryWrapper from "../../StoryBookComponents/StoryWrapper/StoryWrapper";
import {
  buildColorsStory,
  codingColors,
  darkColors,
  greyColors,
  mainColors,
  mainColors2,
  mainColors3
} from "./colors-helper";
import StoryTitle from "../../components/storybook-helpers/story-title/story-title";

const KeyColorItem = ({ color, description }) => {
  return (
    <section className="color-item-component">
      <div className="color-name">
        <span style={{ padding: "0 8px", fontSize: "16px" }}>{color}</span>
        <DescriptionLabel className="color-name-description">{description}</DescriptionLabel>
      </div>

      <div className="light-app-theme" style={{ height: "80%" }}>
        <div
          className="color-element"
          style={{
            width: "150px",
            backgroundColor: `var(${color})`,
            borderRadius: "4px 0px 0px 4px",
            border: "1px solid var(--ui-border-color)",
            borderRight: "none"
          }}
        />
      </div>
      <div
        className="dark-app-theme"
        style={{
          width: "175px",
          height: "100%",
          backgroundColor: "var(--primary-background-color)",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div style={{ height: "80%" }}>
          <div
            className="color-element"
            style={{
              width: "150px",
              backgroundColor: `var(${color})`,
              borderRadius: "0px 4px 4px 0px",
              border: "1px solid var(--ui-border-color)",
              borderLeft: "none"
            }}
          />
        </div>
      </div>
    </section>
  );
};

const ColorItem = ({ color }) => {
  return (
    <section className="all-color-item">
      <div className="all-color-element" style={{ backgroundColor: `var(${color})` }} />
      <span className="all-color-name">{color}</span>
    </section>
  );
};

export const Colors = () => {
  return (
    <StoryWrapper>
      <StoryTitle text="Main Colors" />
      {buildColorsStory(mainColors)}
      {buildColorsStory(mainColors2)}
      {buildColorsStory(mainColors3)}
      {buildColorsStory(greyColors)}
      <div style={{ margin: "24px 0" }}>
        <br />
      </div>
      <StoryTitle text="Colors Keys" />
      <div className="colors-container">
        <div className="themes-icon-container">
          <div className="theme-name-spacer">Color Keys</div>
          <span className="theme-container">
            <Sun className="theme-icon" /> Light
          </span>
          <span className="theme-container dark-app-theme" style={{ width: "175" }}>
            <Moon className="theme-icon" /> Dark
          </span>
        </div>
        {colorsMap.map(({ color, description }) => (
          <KeyColorItem color={color} description={description} />
        ))}
      </div>

      <div style={{ margin: "24px 0" }}>
        <br />
      </div>
      <StoryTitle text="Status Colors" />
      <DescriptionLabel>
        These colours are used only for color coding purposes like groups colours, statuses timeline bars etc.. this
        gives understanding and indication of orientation and belonging. The board’s main strength is its simple and
        visual appearance. That’s why the status colors should appear on the board and nowhere else in the UI.
      </DescriptionLabel>
      {buildColorsStory(codingColors, true)}
    </StoryWrapper>
  );
};

// export const MondayColors = () => {
//   return (
//     <div className="all-colors-container">
//       {allMondayColors.map(colorName => (
//         <ColorItem color={colorName} />
//       ))}
//     </div>
//   );
// };

export default {
  title: "Foundations|Colors"
};
