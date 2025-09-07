import React from "react";
import cx from "classnames";
import { DialogContentContainer, Text, Flex } from "../../../";
import InfoLink from "../InfoLink/InfoLink";
import { type InfoDialogContentProps } from "./InfoDialogContent.types";
import styles from "./InfoDialogContent.module.scss";

const InfoDialogContent = ({ title, body, link, className }: InfoDialogContentProps) => {
  if (!title && !body && !link) {
    return null;
  }

  return (
    <DialogContentContainer type="popover" size="medium" className={cx(styles.dialogContent, className)}>
      <Flex align="start" direction="column" className={styles.contentWrapper}>
        {title && (
          <Text type="text2" weight="bold">
            {title}
          </Text>
        )}
        {body && (
          <Text type="text2" element="p">
            {body}
          </Text>
        )}
        {link && <InfoLink className={styles.link} {...link} />}
      </Flex>
    </DialogContentContainer>
  );
};

export default InfoDialogContent;
