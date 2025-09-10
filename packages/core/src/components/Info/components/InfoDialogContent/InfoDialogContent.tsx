import React, { forwardRef } from "react";
import cx from "classnames";
import { DialogContentContainer, Text, Flex } from "../../../";
import InfoLink from "../InfoLink/InfoLink";
import { type InfoDialogContentProps } from "./InfoDialogContent.types";
import styles from "./InfoDialogContent.module.scss";

const InfoDialogContent = forwardRef(
  ({ id, title, body, link, className }: InfoDialogContentProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    if (!title && !body && !link) {
      return null;
    }

    return (
      <DialogContentContainer id={id} type="popover" size="medium" className={cx(styles.dialogContent, className)}>
        <Flex ref={ref} tabIndex={-1} align="start" direction="column" gap="xs" className={styles.contentWrapper}>
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
  }
);

export default InfoDialogContent;
