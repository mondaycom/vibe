import React from "react";
import styles from "./Card.module.scss";
import { StorybookLink } from "vibe-storybook-components";
import Title from "../Title";

export default function Card({
  icon,
  title,
  description,
  page
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  page: string;
}) {
  return (
    <StorybookLink className={styles.card} page={page}>
      <div className={styles.icon}>{icon}</div>
      <Title className={styles.title}>{title}</Title>
      <div className={styles.description}>{description}</div>
    </StorybookLink>
  );
}
