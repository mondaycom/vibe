import React from "react";
import { InformationBox } from "vibe-storybook-components";
import "./principle.scss";

const PRINCIPLE_VISUAL_ELEMENT = `monday-storybook-principle`;

export const Principle = ({ imgSrc, title, description }) => {
  const principleVisualElement = <img className={`${PRINCIPLE_VISUAL_ELEMENT}_visual-element`} src={imgSrc} alt="" />;
  return <InformationBox component={principleVisualElement} title={title} description={description} />;
};
