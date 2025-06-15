import React from "react";
import styles from "./ContributorsSection.module.scss";
import Flex from "../../../../components/Flex/Flex";
import Founders from "./Founders";
import Contributors from "./Contributors";
import Section from "../Section";

export default function ContributorsSection() {
  return (
    <Flex align="start" style={{ gap: "200px" }} className={styles.contributorsSection}>
      <Section className={styles.sectionName}>Our Contributors</Section>
      <div>
        <div className={styles.subtitle}>Founders</div>
        <Founders />
        <div className={styles.subtitle}>Contributors</div>
        <Contributors />
      </div>
    </Flex>
  );
}
