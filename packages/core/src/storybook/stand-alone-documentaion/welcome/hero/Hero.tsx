import React from "react";
import styles from "./Hero.module.scss";
import HeartIcon from "./icons/HeartIcon";
import ArrowIcon from "./icons/ArrowIcon";
import FigmaIcon from "./icons/FigmaIcon";
import GitHubIcon from "./icons/GitHubIcon";
import ResourceButton from "./ResourceButton";
import Flex from "../../../../components/Flex/Flex";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.header}>
        <Flex align="center" justify="center" gap="medium">
          Vibe design <HeartIcon className={styles.heartIcon} /> system
        </Flex>
        <Flex align="center" justify="center" gap="large">
          by <ArrowIcon className={styles.arrowIcon} /> monday.com
        </Flex>
      </h1>
      <p className={styles.subheader}>
        Foundations, components, patterns and processes are what experiences are made of.
      </p>
      <Flex gap="small">
        <ResourceButton
          text="Figma"
          icon={<FigmaIcon />}
          href="https://www.figma.com/file/pTpO3Wobs5cQwRsabt21Nd/monday.com-UI-kit?node-id=14811%3A20455"
        />
        <ResourceButton text="GitHub" icon={<GitHubIcon />} href="https://github.com/mondaycom/vibe" />
      </Flex>
    </div>
  );
}
