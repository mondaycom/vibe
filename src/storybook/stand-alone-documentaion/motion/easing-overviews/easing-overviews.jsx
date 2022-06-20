import { EasingOverview } from "../easing-overview/easing-overview";
import {
  EmphesizeElasticEasing,
  EnterDeceleratedEasing,
  ExitAcceleratedEasing,
  TransitionStandardEasing
} from "../assets";

const EASING = [
  {
    videoSrc: EmphesizeElasticEasing,
    title: "2Small motion - 250ms",
    description: "System aletrs, notifications, atention and midiation.",
    tokenDescription: "Token: motion-expressive-short"
  },
  {
    videoSrc: EnterDeceleratedEasing,
    title: "3Small motion - 250ms",
    description: "System aletrs, notifications, atention and midiation.",
    tokenDescription: "Token: motion-expressive-short"
  },
  {
    videoSrc: ExitAcceleratedEasing,
    title: "Small motion - 250ms",
    description: "System aletrs, notifications, atention and midiation.",
    tokenDescription: "Token: motion-expressive-short"
  },
  {
    videoSrc: TransitionStandardEasing,
    title: "7Small motion - 250ms",
    description: "System aletrs, notifications, atention and midiation.",
    tokenDescription: "Token: motion-expressive-short"
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
