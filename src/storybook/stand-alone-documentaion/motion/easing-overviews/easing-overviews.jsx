import { EasingOverview } from "../easing-overview/easing-overview";
import {
  EmphesizeElasticEasing,
  EnterDeceleratedEasing,
  ExitAcceleratedEasing,
  TransitionStandardEasing
} from "../assets";

const EASING = [
  {
    videoSrc: EnterDeceleratedEasing,
    title: "Enter - Decelerated easing ",
    description: "We use when object enter from out of screen to reveal extra information.",
    tokenDescription: "Qubic bezier: (0,0,0.35,1)  \n Token: motion-timing-enter"
  },
  {
    videoSrc: ExitAcceleratedEasing,
    title: "Exit - Accelerated easing",
    description: "We use when object leave the screen to hide element",
    tokenDescription: "Qubic bezier: (0.4,0,1,1) \n Token: motion-timing-exit"
  },
  {
    videoSrc: TransitionStandardEasing,
    title: "Transition - Standard easing ",
    description: "Transition between different states of the same element in screen",
    tokenDescription: "Qubic bezier: (0.2,0,0.4,1) \n Token: motion-timing-transition"
  },
  {
    videoSrc: EmphesizeElasticEasing,
    title: "Emphesize - Elastic easing",
    description: "System aletrs, notifications, atention and midiation.",
    tokenDescription: "Qubic bezier: (0,0,0.2,1.4) \n (Duration must be over 200ms ) \n motion-timing-emphesize"
  }
];

export const EasingOverviews = () => {
  return (
    <div>
      {EASING.map(({ videoSrc, title, description, tokenDescription }) => (
        <EasingOverview
          key={title}
          videoSrc={videoSrc}
          title={title}
          description={description}
          tokenDescription={tokenDescription}
        />
      ))}
    </div>
  );
};
