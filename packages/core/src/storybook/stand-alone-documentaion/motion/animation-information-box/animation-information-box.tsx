import React from "react";
import { InformationBox } from "vibe-storybook-components";
import styles from "./animation-information-box.module.scss";

interface AnimationInformationBoxProps {
  videoSrc: string;
  title: string;
  description: string;
}

export const AnimationInformationBox = ({ videoSrc, title, description }: AnimationInformationBoxProps) => {
  const AnimationInformationBoxVideo = <video className={styles.video} controls loop src={videoSrc} />;
  return <InformationBox component={AnimationInformationBoxVideo} title={title} description={description} />;
};
