import React from "react";
import styles from "./Contributors.module.scss";
import Flex from "../../../../components/Flex/Flex";
import Founders from "./Founders";
import ContributorsList from "./ContributorsList";
import Section from "../Section";
import EntranceAnimation from "../EntranceAnimation";

export default function Contributors() {
  return (
    <Flex align="start" style={{ gap: "200px" }} className={styles.contributorsSection}>
      <EntranceAnimation>
        <Section className={styles.sectionName}>Our Contributors</Section>
      </EntranceAnimation>
      <EntranceAnimation>
        <div className={styles.subtitle}>Founders</div>
        <Founders />
        <div className={styles.subtitle}>Contributors</div>
        <ContributorsList />
      </EntranceAnimation>
    </Flex>
  );
}
