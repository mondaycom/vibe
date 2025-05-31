import React from "react";
import styles from "./Footer.module.scss";
import Flex from "../../../components/Flex/Flex";
import FooterCard from "./FooterCard";
import Title from "../../stand-alone-documentaion/welcome/Title";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Flex style={{ gap: "80px" }} align="start" className={styles.footerContent}>
        <div className={styles.footerTitles}>
          <Title className={styles.title}>Vibe Feedback.</Title>
          <p className={styles.subtitle}>We would love to hear your thoughts about Vibe!</p>
        </div>
        <Flex gap="large" className={styles.footerCards} align="start" flex="1">
          <FooterCard
            title="Bug report"
            description="Report a bug on our production"
            href="https://github.com/mondaycom/vibe/issues/new?template=bug_report.yml"
            linkText="See more"
          />
          <FooterCard
            title="General contact"
            description="General questions, feature requests, ideas, etc."
            href="https://forms.monday.com/forms/213ebddcb0d423ae5b6178fb6e8f7b3d?r=use1"
            linkText="See more"
          />
        </Flex>
      </Flex>
    </div>
  );
}
