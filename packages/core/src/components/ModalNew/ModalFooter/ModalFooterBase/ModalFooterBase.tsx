import React, { forwardRef } from "react";
import styles from "./ModalFooterBase.module.scss";
import Button from "../../../Button/Button";
import Flex from "../../../Flex/Flex";
import { ModalFooterBaseProps } from "./ModalFooterBase.types";

const ModalFooterBase = forwardRef(
  ({
    primaryButton,
    secondaryButton,
    renderSideAction,
    children,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    id,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    className,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    "data-testid": dataTestId
  }: ModalFooterBaseProps) => {
    return (
      <Flex justify={Flex.justify.SPACE_BETWEEN} gap={Flex.gaps.SMALL} className={styles.footer}>
        <Flex className={styles.leftSection}>
          <Flex className={styles.buttonGroup}>
            {renderSideAction}
            {secondaryButton && (
              <Button kind={Button.kinds.TERTIARY} className={styles.secondary} onClick={secondaryButton.onClick}>
                {secondaryButton.text}
              </Button>
            )}
          </Flex>
          {children}
        </Flex>
        <Button onClick={primaryButton.onClick}>{primaryButton.text}</Button>
      </Flex>
    );
  }
);
export default ModalFooterBase;
