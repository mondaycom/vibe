import React from "react";
import cx from "classnames";
import styles from "./TeamMember.module.scss";
import Text from "../../../../components/Text/Text";
import Flex from "../../../../components/Flex/Flex";

export interface TeamMemberProps {
  image: string;
  name: string;
  title: string;
  linkedinUrl: string;
  className?: string;
}

export const TeamMember = ({ image, name, title, linkedinUrl, className }: TeamMemberProps) => {
  return (
    <a href={linkedinUrl} className={cx(styles.teamMember, className)} target="_blank" rel="noreferrer">
      <Flex direction="column" gap="large" align="start">
        <img src={image} alt={name} className={styles.image} />
        <Flex className={styles.content} direction="column" align="start">
          <Text type="text1" weight="medium" className={styles.name}>
            {name}
          </Text>
          <Text className={styles.title}>{title}</Text>
        </Flex>
      </Flex>
    </a>
  );
};
