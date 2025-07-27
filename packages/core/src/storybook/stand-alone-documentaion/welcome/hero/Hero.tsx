import React from "react";
import styles from "./Hero.module.scss";
import FigmaIcon from "./icons/FigmaIcon";
import GitHubIcon from "./icons/GitHubIcon";
import ResourceButton from "./ResourceButton";
import Flex from "../../../../components/Flex/Flex";
import EntranceAnimation from "../EntranceAnimation";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <EntranceAnimation delay={0}>
          <h1 className={styles.header}>
            <Flex align="center" justify="center" gap="medium">
              Vibe design system
            </Flex>
            <Flex align="center" justify="center" gap="medium">
              by monday.com
            </Flex>
          </h1>
        </EntranceAnimation>

        <EntranceAnimation delay={0.1}>
          <p className={styles.subheader}>Resources for building great monday.com experiences.</p>
        </EntranceAnimation>

        <EntranceAnimation delay={0.2}>
          <Flex gap="small">
            <ResourceButton
              text="GitHub"
              icon={<GitHubIcon />}
              href="https://github.com/mondaycom/vibe"
              tooltipContent="Become a contributor & join our GitHub community"
            />
            <ResourceButton
              text="Figma"
              icon={<FigmaIcon />}
              href="https://www.figma.com/community/file/940242815162888749"
              tooltipContent="Our Figma file is free to use"
            />
          </Flex>
        </EntranceAnimation>
      </div>
    </div>
  );
}
