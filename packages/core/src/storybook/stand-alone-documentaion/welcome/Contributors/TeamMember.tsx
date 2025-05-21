import React from "react";
import styles from "./TeamMember.module.scss";
import { LinkedinIcon } from "./LinkedinIcon";
import Text from "../../../../components/Text/Text";
import Box from "../../../../components/Box/Box";
import Flex from "../../../../components/Flex/Flex";

export interface TeamMemberProps {
  image: string;
  name: string;
  title: string;
  linkedinUrl: string;
}

export const TeamMember = ({ image, name, title, linkedinUrl }: TeamMemberProps) => {
  return (
    <Flex direction="column" gap="large" align="start">
      <img src={image} alt={name} className={styles.image} />
      <Box style={{ width: "100%" }}>
        <Flex justify="space-between">
          <Text type="text1" weight="medium" className={styles.name}>
            {name}
          </Text>
          <a href={linkedinUrl} className={styles.icon} target="_blank" rel="noreferrer">
            <LinkedinIcon />
          </a>
        </Flex>
        <Text className={styles.title}>{title}</Text>
      </Box>
    </Flex>
  );
};
