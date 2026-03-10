import React from "react";
import { InformationBox } from "@ezds/storybook-blocks";
import "./principle.scss";

const PRINCIPLE_VISUAL_ELEMENT = `ezds-storybook-principle`;

interface PrincipleProps {
  imgSrc: string;
  title: string;
  description: string;
}

export const Principle = ({ imgSrc, title, description }: PrincipleProps) => {
  const principleVisualElement = <img className={`${PRINCIPLE_VISUAL_ELEMENT}_visual-element`} src={imgSrc} alt="" />;
  return <InformationBox component={principleVisualElement} title={title} description={description} />;
};

export default Principle;
