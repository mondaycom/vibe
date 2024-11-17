import React from "react";
import { Flex, Text } from "../../../../components";
import styles from "./TeamMember.module.scss";
import { LinkedinIcon } from "./LinkedinIcon";

export interface TeamMemberProps {
  image: string;
  name: string;
  title: string;
  linkedinUrl: string;
}

export const TeamMember = ({ image, name, title, linkedinUrl }: TeamMemberProps) => {
  return (
    <Flex direction="column" gap="medium">
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
        <a href={linkedinUrl} target="_blank" rel="noreferrer">
          <LinkedinIcon className={styles.icon} />
        </a>
      </div>
      <Flex direction="column" align="center">
        <Text type="text1" weight="medium">
          {name}
        </Text>
        <Text>{title}</Text>
      </Flex>
    </Flex>
  );
};
