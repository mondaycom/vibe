import React from "react";
import styles from "./TeamMember.module.scss";
import { LinkedinIcon } from "./LinkedinIcon";
import Text from "../../../../components/Text/Text";
import Flex from "../../../../components/Flex/Flex";

export interface TeamMemberProps {
  image: string;
  name: string;
  title: string;
  linkedinUrl: string;
}

export const TeamMember = ({ image, name, title, linkedinUrl }: TeamMemberProps) => {
  return (
    <Flex className={styles.teamMember} direction="column" gap="large" align="start">
      <img src={image} alt={name} className={styles.image} />
      <Flex className={styles.content} direction="column">
        <a href={linkedinUrl} className={styles.link} target="_blank" rel="noreferrer">
          <Text type="text1" weight="medium" className={styles.name}>
            {name}
          </Text>
        </a>
        <Text className={styles.title}>{title}</Text>
      </Flex>
    </Flex>
  );
};
