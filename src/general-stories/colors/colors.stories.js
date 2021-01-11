import React from "react";
import { colorsMap } from "./colors-vars-map";
import "./ColorItem.scss";

const ColorItem = ({ color }) => {
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

export const ColorKeys = () => {
  return (
    <div className="colors-container">
      {colorsMap.map(colorName => (
        <ColorItem color={colorName} />
      ))}
    </div>
  );
};

export default {
  title: "Foundations|Colors"
};
