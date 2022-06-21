import { InformationBox } from "../../../components/information-box/information-box";
import styles from "./animation-overview.module.scss";

export const AnimationOverview = ({ videoSrc, title, description }) => {
  const AnimationOverviewVideo = (
    <video className={styles.video} controls loop src={videoSrc}/>
  );
  return <InformationBox className={styles.animationOverviewWrapper} component={AnimationOverviewVideo} title={title} description={description} />;
};
