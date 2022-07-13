import { AnimationInformationBox } from "../animation-information-box/animation-information-box";
import { Delight, Feedback, Focus, Orientation } from "../assets";
import styles from "./animation-overviews.module.scss";

const OVERVIEW = [
  {
    videoSrc: Orientation,
    title: "Orientation & Continuity",
    description:
      "We use motion to give a sense of familiarity by helping us understand where things are located, where they're coming from, and where to find them again."
  },
  {
    videoSrc: Feedback,
    title: "feedback & status -  mediation",
    description:
      "We use motion to earn the feeling of reassurance and control.It informs us when actions are in process and make things appear to happen faster than they actually do."
  },
  {
    videoSrc: Focus,
    title: "Focus",
    description:
      "We use motion to helps focus user attention on what's important, without adding unnecessary distractions."
  },
  {
    videoSrc: Delight,
    title: "Delight",
    description:
      "We use motion to celebrate moments in the user's journey. Motion creates emotional commitment and expresses our brand's personality and style."
  }
];

export const AnimationOverviews = () => {
  return (
    <div className={styles.animationOverviewGrid}>
      {OVERVIEW.map(({ videoSrc, title, description }) => (
        <AnimationInformationBox key={title} videoSrc={videoSrc} title={title} description={description} />
      ))}
    </div>
  );
};
