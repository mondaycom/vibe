import React from "react";
import { colorsMap, contentColors } from "./colors-vars-map";
import "./ColorItem.scss";
import Sun from "../../components/Icon/Icons/components/Sun";
import Moon from "../../components/Icon/Icons/components/Moon";
import DescriptionLabel from "../../components/storybook-helpers/description-label/description-label";
import StoryWrapper from "../../StoryBookComponents/StoryWrapper/StoryWrapper";
import { buildColorsStory, codingColors, greyColors, mainColors, mainColors2, mainColors3 } from "./colors-helper";
import StoryTitle from "../../components/storybook-helpers/story-title/story-title";
import Bolt from "../../components/Icon/Icons/components/Bolt";

const KeyColorItem = ({ color, description }) => {
  return (
    <section className="color-item-component">
      <div className="color-name" style={{ width: "200px" }}>
        <span style={{ padding: "0 8px", fontSize: "16px" }}>{color}</span>
        <DescriptionLabel className="color-name-description">{description}</DescriptionLabel>
      </div>

      <div
        className="light-app-theme"
        style={{
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
              borderRadius: "4px 0px 0px 4px",
              border: "1px solid var(--ui-border-color)",
              borderRight: "none"
            }}
          />
        </div>
      </div>
      <div
        className="dark-app-theme"
        style={{
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
              width: "175px",
              backgroundColor: `var(${color})`,
              border: "1px solid var(--ui-border-color)",
              borderLeft: "none",
              borderRight: "none"
            }}
          />
        </div>
      </div>
      <div
        className="black-app-theme"
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
function ContentColors({ color, isFirst, isLast }) {
  return (
    <div style={{ height: "80%", display: "flex" }}>
      <div
        className="color-element"
        style={{
          width: "50px",
          backgroundColor: `var(--color-${color})`,
          borderRadius: isFirst ? "4px 0px 0px 4px" : "none",
          border: "1px solid var(--ui-border-color)",
          borderRight: "none"
        }}
      />
      <div
        className="color-element"
        style={{
          width: "50px",
          backgroundColor: `var(--color-${color}-hover)`,
          border: "1px solid var(--ui-border-color)",
          borderRight: "none",
          borderLeft: "none"
        }}
      />
      <div
        className="color-element"
        style={{
          width: "50px",
          backgroundColor: `var(--color-${color}-selected)`,
          borderRadius: isLast ? "0px 4px 4px 0px" : "none",
          border: "1px solid var(--ui-border-color)",
          borderRight: "none",
          borderLeft: "none"
        }}
      />
    </div>
  );
}

const ContentColorItem = ({ color }) => {
  return (
    <section className="color-item-component">
      <div className="color-name" style={{ width: "200px" }}>
        <span style={{ padding: "0 8px", fontSize: "16px" }}>--color-{color}</span>
      </div>

      <div
        className="light-app-theme"
        style={{
          height: "100%",
          backgroundColor: "var(--primary-background-color)",
          display: "flex",
          alignItems: "center"
        }}
      >
        <ContentColors color={color} isFirst />
      </div>
      <div
        className="dark-app-theme"
        style={{
          height: "100%",
          backgroundColor: "var(--primary-background-color)",
          display: "flex",
          alignItems: "center"
        }}
      >
        <ContentColors color={color} />
      </div>
      <div
        className="black-app-theme"
        style={{
          width: "175px",
          height: "100%",
          backgroundColor: "var(--primary-background-color)",
          display: "flex",
          alignItems: "center"
        }}
      >
        <ContentColors color={color} isLast />
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
      <StoryTitle text="Greyscale Colors" />
      <DescriptionLabel>These grayscale palette used for shapes, icons ,backgrounds</DescriptionLabel>
      {buildColorsStory(greyColors)}
      <div style={{ margin: "12px 0" }}>
        <br />
      </div>
      <div className="colors-container">
        <div className="themes-icon-container">
          <div className="theme-name-spacer">Color Keys</div>
          <span className="theme-container">
            <Sun className="theme-icon" /> Light
          </span>
          <span className="theme-container dark-app-theme">
            <Moon className="theme-icon" /> Dark
          </span>
          <span className="theme-container black-app-theme" style={{ width: "175" }}>
            <Bolt className="theme-icon" /> Dark
          </span>
        </div>
        {colorsMap.map(({ color, description }) => (
          <KeyColorItem color={color} description={description} />
        ))}
      </div>

      <div style={{ margin: "12px 0" }}>
        <br />
      </div>
      <StoryTitle text="Status Colors" />
      <DescriptionLabel>
        These colours are used only for color coding purposes like groups colours, statuses timeline bars etc.. this
        gives understanding and indication of orientation and belonging. The board’s main strength is its simple and
        visual appearance. That’s why the status colors should appear on the board and nowhere else in the UI.
      </DescriptionLabel>
      {contentColors.map(color => {
        return <ContentColorItem color={color} />;
      })}
    </StoryWrapper>
  );
};

export default {
  title: "Foundations|Colors"
};
