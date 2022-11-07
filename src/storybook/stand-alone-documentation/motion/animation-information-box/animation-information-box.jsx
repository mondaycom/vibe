import { InformationBox } from "../../../components/information-box/information-box";
import styles from "./animation-information-box.module.scss";

export const AnimationInformationBox = ({ videoSrc, title, description }) => {
  const AnimationInformationBoxVideo = <video className={styles.video} controls loop src={videoSrc} />;
  return <InformationBox component={AnimationInformationBoxVideo} title={title} description={description} />;
};
