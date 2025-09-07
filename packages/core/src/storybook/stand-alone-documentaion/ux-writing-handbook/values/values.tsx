import React from "react";
import { InformationBox } from "vibe-storybook-components";
import styles from "./values.module.scss";

interface ValueProps {
  imgSrc: string;
  title: string;
  description: string;
}

export const Value = ({ imgSrc, title, description }: ValueProps) => {
  const valueElement = <img className={styles.visualElement} src={imgSrc} alt="" />;
  return <InformationBox component={valueElement} title={title} description={description} />;
};

export default Value;
