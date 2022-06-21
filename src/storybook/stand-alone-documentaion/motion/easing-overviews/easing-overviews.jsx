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
    description: "We use when object enter from out of screen to reveal extra information.",
    tokenInfo: "Qubic bezier: (0.2,0,0.4,1) \n Token: motion-timing-transition",
    tokenDescription: "Qubic bezier: (0,0,0.35,1)  \n Token: motion-timing-enter"
  },
  {
    videoSrc: ExitAcceleratedEasing,
    title: "Exit - Accelerated easing",
    description: "We use when object leave the screen to hide element",
    tokenInfo: "Qubic bezier: (0.2,0,0.4,1) \n Token: motion-timing-transition",
    tokenDescription: "Qubic bezier: (0.4,0,1,1) \n Token: motion-timing-exit"
  },
  {
    videoSrc: TransitionStandardEasing,
    title: "Transition - Standard easing ",
    description: "Transition between different states of the same element in screen",
    tokenInfo: "Qubic bezier: (0.2,0,0.4,1) \n Token: motion-timing-transition",
    tokenDescription: "motion-timing-emphesize"
  },
  {
    videoSrc: EmphesizeElasticEasing,
    title: "Emphesize - Elastic easing",
    description: "System aletrs, notifications, atention and midiation.",
    tokenInfo:"Qubic bezier: (0,0,0.2,1.4)(Duration must be over 200ms )",
    tokenDescription: "motion-timing-emphesize"
  }
];

export const EasingOverviews = () => {
  return (
    <div className={styles.container}>
      {EASING.map(({ videoSrc, title, description, tokenInfo,tokenDescription }) => (
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
