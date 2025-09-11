import React from "react";
import styles from "./MondayVibeBanner.module.scss";
import MondayVibeIcon from "./MondayVibeIcon";
import { trackBannerButtonClicked } from "./tracking";

const MondayVibeBanner: React.FC = () => {
  const handleStartBuildingClick = () => {
    trackBannerButtonClicked();
  };

  return (
    <div className={styles.mondayVibeBanner}>
      <div className={styles.bubble1}></div>
      <div className={styles.bubble2}></div>
      <div className={styles.content}>
        <div className={styles.text}>
          <span className={styles.title}>
            <MondayVibeIcon />
            monday vibe
          </span>{" "}
          - Turn your words into work apps.
        </div>
        <a
          href="https://monday.com/vibe"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
          onClick={handleStartBuildingClick}
        >
          Start building
        </a>
      </div>
    </div>
  );
};

export default MondayVibeBanner;
