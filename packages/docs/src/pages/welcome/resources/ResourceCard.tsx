import React from "react";
import styles from "./ResourceCard.module.scss";
import { StorybookLink } from "vibe-storybook-components";
import Title from "../Title";

export default function ResourceCard({
  icon,
  hoverIcon,
  title,
  description,
  page
}: {
  icon: React.ReactNode;
  hoverIcon: React.ReactNode;
  title: string;
  description: string;
  page: string;
}) {
  return (
    <StorybookLink className={styles.card} page={page}>
      <div>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.hoverIcon}>{hoverIcon}</div>
      </div>
      <div>
        <Title className={styles.title}>{title}</Title>
        <div className={styles.description}>{description}</div>
      </div>
    </StorybookLink>
  );
}
