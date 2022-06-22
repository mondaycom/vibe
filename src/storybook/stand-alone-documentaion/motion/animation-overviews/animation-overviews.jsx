import { Flex } from "../../../../components/";
import { AnimationInformationBox } from "../animation-information-box/animation-information-box";
import { Delight, Feedback, Focus, Orientation } from "../assets";
import styles from "./animation-overviews.module.scss";

const OVERVIEW = [
  {
    videoSrc: Orientation,
    title: "Orientation & Continuity",
    description:
      "Motion give us a familiar feeling of enviorment, by helping us understand where things are located, where they're coming from and where to find them again."
  },
  {
    videoSrc: Feedback,
    title: "feedback & status -  mediation",
    description:
      "We use motion to earn the feeling of reassurance and control.It informs us when actions are in process and make us feel things happen faster than they really are."
  },
  {
    videoSrc: Focus,
    title: "Focus",
    description: "Motion helps us focus attention on what's important, without creating unnecessary distraction"
  },
  {
    videoSrc: Delight,
    title: "Delight",
    description:
      "Motion celebrates moments in our journey, create emotional commitment, and express our brand's personality and style."
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
