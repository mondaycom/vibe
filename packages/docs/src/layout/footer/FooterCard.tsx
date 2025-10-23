import React from "react";
import styles from "./FooterCard.module.scss";
import { Flex } from "@vibe/core";
import ArrowIcon from "./ArrowIcon";
import Title from "../../pages/welcome/Title";

export default function FooterCard({
  title,
  description,
  linkText,
  href
}: {
  title: string;
  description: string;
  linkText: string;
  href: string;
}) {
  return (
    <a href={href} className={styles.footerCard} target="_blank" rel="noreferrer noopener">
      <Flex className={styles.content} direction="column" align="start">
        <Title className={styles.title}>{title}</Title>
        <div className={styles.description}>{description}</div>
      </Flex>
      <Flex className={styles.link} align="center" gap="small">
        {linkText} <ArrowIcon />
      </Flex>
    </a>
  );
}
