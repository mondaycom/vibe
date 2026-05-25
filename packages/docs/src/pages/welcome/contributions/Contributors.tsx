import React from "react";
import styles from "./Contributors.module.scss";
import { Flex } from "@vibe/core";
import Founders from "./Founders";
import ContributorsList from "./ContributorsList";
import Section from "../Section";

export default function Contributors() {
  return (
    <Flex align="start" style={{ gap: "200px" }} className={styles.contributorsSection}>
      <Section
        className={styles.sectionName}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 50,
          mass: 1
        }}
      >
        Our Contributors
      </Section>

      <div>
        <div className={styles.subtitle}>Founders</div>
        <Founders />
        <div className={styles.subtitle}>Contributors</div>
        <ContributorsList />
      </div>
    </Flex>
  );
}
