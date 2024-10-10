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
    return (
      <Flex
        ref={ref}
        id={id}
        justify={Flex.justify.SPACE_BETWEEN}
        gap={Flex.gaps.SMALL}
        className={cx(styles.footer, className)}
        data-testid={dataTestId}
      >
        <Button onClick={primaryButton.onClick} className={primaryButton.className}>
          {primaryButton.text}
        </Button>
        {secondaryButton && (
          <Button kind={Button.kinds.TERTIARY} className={secondaryButton.className} onClick={secondaryButton.onClick}>
            {secondaryButton.text}
          </Button>
        )}
        {renderAction}
      </Flex>
    );
  }
);

export default ModalFooterBase;
