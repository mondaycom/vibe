import { EasingOverview } from "../easing-overview/easing-overview";
import {
  EmphesizeElasticEasing,
  EnterDeceleratedEasing,
  ExitAcceleratedEasing,
  TransitionStandardEasing
} from "../assets";

import styles from "./easing-overviews.module.scss";

const EASING = [
  {
    videoSrc: EnterDeceleratedEasing,
    title: "Enter - Decelerated easing ",
    description: "Use when object enter from out of screen to reveal extra information.",
    tokenInfo: "cubic-bezier(0,0,0.35,1) ",
    tokenDescription: "--motion-timing-enter"
  },
  {
    videoSrc: ExitAcceleratedEasing,
    title: "Exit - Accelerated easing",
    description: "Use when object leaves the screen to hide element.",
    tokenInfo: "cubic-bezier(0.4,0,1,1)",
    tokenDescription: "--motion-timing-exit"
  },
  {
    videoSrc: TransitionStandardEasing,
    title: "Transition - Standard easing",
    description: "Use to transition between different states of the same element in screen.",
    tokenInfo: "cubic-bezier((0.4,0,0.2,1))",
    tokenDescription: "--motion-timing-transition"
  },
  {
    videoSrc: EmphesizeElasticEasing,
    title: "Emphesize - Elastic easing",
    description: "Use to draw attention to a specific action or specific information.",
    tokenInfo: "cubic-bezier((0,0,0.2,1.4),(Duration must be over 200ms)",
    tokenDescription: "--motion-timing-emphesize"
  }
];

export const EasingOverviews = () => {
  return (
    <div className={styles.container}>
      {EASING.map(({ videoSrc, title, description, tokenInfo, tokenDescription }) => (
        <EasingOverview
          key={title}
          videoSrc={videoSrc}
          title={title}
          description={description}
          tokenDescription={tokenDescription}
          tokenInfo={tokenInfo}
        />
      ))}
    </div>
  );
};
