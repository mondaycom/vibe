import React from "react";
import { InformationBox } from "vibe-storybook-components";
import "./values.scss";

const VALUES_VISUAL_ELEMENT = `monday-storybook-values`;

interface ValueProps {
  imgSrc: string;
  title: string;
  description: string;
}

export const Value = ({ imgSrc, title, description }: ValueProps) => {
  const valueElement = <img className={`${VALUES_VISUAL_ELEMENT}_visual-element`} src={imgSrc} alt="" />;
  return <InformationBox component={valueElement} title={title} description={description} />;
};

export default Value;
