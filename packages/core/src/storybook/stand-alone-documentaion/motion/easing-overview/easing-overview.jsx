import React from "react";
import { TokenInformationBox } from "../token-Information-box/token-information-box";
import { Flex } from "../../../../components";
import styles from "./easing-overview.module.scss";

export const EasingOverview = ({ videoSrc, title, description, tokenInfo, tokenDescription }) => {
  const EasingOverviewVideoSrc = <video className={styles.video} src={videoSrc} controls loop />;

  return (
    <div className={styles.row}>
      <Flex justify="space-between" align="start" gap="large" wrap>
        <TokenInformationBox
          className={styles.easingInformationBox}
          title={title}
          description={description}
          tokenInfo={tokenInfo}
          tokenDescription={tokenDescription}
        />
        {EasingOverviewVideoSrc}
      </Flex>
    </div>
  );
};
