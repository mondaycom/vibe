import React, { forwardRef } from "react";
import styles from "./ModalFooterBase.module.scss";
import Button from "../../../Button/Button";
import Flex from "../../../Flex/Flex";
import { ModalFooterBaseProps } from "./ModalFooterBase.types";
import cx from "classnames";

const ModalFooterBase = forwardRef(
  (
    { primaryButton, secondaryButton, renderAction, id, className, "data-testid": dataTestId }: ModalFooterBaseProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { text: primaryButtonText, ...primaryButtonProps } = primaryButton;
    const { text: secondaryButtonText, ...secondaryButtonProps } = secondaryButton || {};
    return (
      <Flex
        ref={ref}
        id={id}
        justify={Flex.justify.SPACE_BETWEEN}
        gap={Flex.gaps.SMALL}
        className={cx(styles.footer, className)}
        data-testid={dataTestId}
      >
        <Button {...primaryButtonProps}>{primaryButtonText}</Button>
        {secondaryButton && (
          <Button {...secondaryButtonProps} kind={Button.kinds.TERTIARY}>
            {secondaryButtonText}
          </Button>
        )}
        {renderAction}
      </Flex>
    );
  }
);

export default ModalFooterBase;
