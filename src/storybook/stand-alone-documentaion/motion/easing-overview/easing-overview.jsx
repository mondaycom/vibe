import { TokenInformationBox } from "../token-Information-box/token-information-box";
import { Flex } from "../../../../components";
import styles from "./easing-overview.module.scss";

export const EasingOverview = ({ videoSrc, title, description, tokenDescription }) => {
  const EasingOverviewVideoSrc = <video className={styles.video} src={videoSrc} controls />;

  return (
    <div className={styles.row}>
      <Flex justify={Flex.justify.SPACE_BETWEEN} align={Flex.align.START} gap={Flex.gaps.LARGE}>
        <TokenInformationBox title={title} description={description} tokenDescription={tokenDescription} />
        {EasingOverviewVideoSrc}
      </Flex>
    </div>
  );
};
