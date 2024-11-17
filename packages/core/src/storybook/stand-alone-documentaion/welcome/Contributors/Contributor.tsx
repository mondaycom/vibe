import React from "react";
import { Flex, Text } from "../../../../components";
import styles from "./Contributor.module.scss";

export interface ContributorProps {
  name: string;
  image?: string;
  href: string;
}

export default function Contributor({ name, image, href }: ContributorProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles.contributor}>
      <Flex gap="xs">
        {image && <img src={image} alt={name} className={styles.image} />}
        <Text>{name}</Text>
      </Flex>
    </a>
  );
}
