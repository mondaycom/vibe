import React from "react";
import { allMondayColors, colorsMap } from "./colors-vars-map";
import "./ColorItem.scss";
import Sun from "../../components/Icon/Icons/components/Sun";
import Moon from "../../components/Icon/Icons/components/Moon";

const KeyColorItem = ({ color }) => {
  return (
    <section className="color-item-component">
      <span className="light-app-theme" style={{ height: "100%" }}>
        <div className="color-element" style={{ backgroundColor: `var(${color})` }} />
      </span>
      <span className="color-name">{color}</span>
      <span className="dark-app-theme" style={{ height: "100%" }}>
        <div className="color-element" style={{ backgroundColor: `var(${color})` }} />
      </span>
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

export const ColorKeys = () => {
  return (
    <div className="colors-container">
      <div className="themes-icon-container">
        <span className="theme-container">
          <Sun className="theme-icon" />
          Light Theme
        </span>
        <span className="theme-container">
          <Moon className="theme-icon" />
          Dark Theme
        </span>
      </div>
      {colorsMap.map(colorName => (
        <KeyColorItem color={colorName} />
      ))}
    </div>
  );
};

export const MondayColors = () => {
  return (
    <div className="all-colors-container">
      {allMondayColors.map(colorName => (
        <ColorItem color={colorName} />
      ))}
    </div>
  );
};

export default {
  title: "Foundations|Colors"
};
