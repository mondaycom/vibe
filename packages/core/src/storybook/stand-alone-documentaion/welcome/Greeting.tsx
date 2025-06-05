import React from "react";
import styles from "./Greeting.module.scss";
import Flex from "../../../components/Flex/Flex";
import ThankYouSVG from "./ThankYouSVG";

export default function Greeting() {
  return (
    <Flex className={styles.greeting} gap="small" direction="column" align="start">
      <div className={styles.intro}>To our dearest contributors,</div>
      <div className={styles.content}>
        We want to thank everyone who contributes daily to monday Design Foundations.
        <br /> As an open-source design platform, Vibe’s greatest asset is the dialogue we share with our users—who are
        really the builders of our design platform.
      </div>
      <Flex justify="end" style={{ width: "100%" }}>
        <ThankYouSVG />
      </Flex>
    </Flex>
  );
}
