import React from "react";
import styles from "./Letter.module.scss";
import Flex from "../../../components/Flex/Flex";
import ThankYouSVG from "./ThankYouSVG";

export default function Letter() {
  return (
    <Flex justify="center" style={{ width: "100%" }}>
      <Flex className={styles.letter} direction="column" align="start">
        <div className={styles.intro}>To our dearest contributors,</div>
        <div className={styles.content}>
          We want to thank everyone who contributes daily to monday Design Foundations. As an open-source design
          platform, Vibe’s greatest asset is the dialogue we share with our users—who are really the builders of our
          design platform.
        </div>
        <Flex justify="end" style={{ width: "100%" }}>
          <ThankYouSVG />
        </Flex>
      </Flex>
    </Flex>
  );
}
