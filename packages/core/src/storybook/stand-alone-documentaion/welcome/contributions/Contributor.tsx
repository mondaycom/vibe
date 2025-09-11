import React from "react";
import { Flex, Text, Tooltip } from "../../../../components";
import styles from "./Contributor.module.scss";
import { type ElementContent } from "../../../../types";

export interface ContributorProps {
  name: string;
  image?: string;
  href: string;
  tooltip?: ElementContent;
}

export default function Contributor({ name, image, href, tooltip }: ContributorProps) {
  const contributor = (
    <a href={href} target="_blank" rel="noreferrer" className={styles.contributor}>
      <Flex gap="xs">
        {image && <img src={image} alt={name} className={styles.image} />}
        <Text>{name}</Text>
      </Flex>
    </a>
  );

  if (tooltip) {
    return <Tooltip content={tooltip}>{contributor}</Tooltip>;
  }
  return contributor;
}
