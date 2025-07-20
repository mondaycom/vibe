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
            <ResourceButton text="GitHub" icon={<GitHubIcon />} href="https://github.com/mondaycom/vibe" />
            <ResourceButton
              text="Figma"
              icon={<FigmaIcon />}
              href="https://www.figma.com/file/pTpO3Wobs5cQwRsabt21Nd/monday.com-UI-kit?node-id=14811%3A20455"
            />
          </Flex>
        </EntranceAnimation>
      </div>
    </div>
  );
}
