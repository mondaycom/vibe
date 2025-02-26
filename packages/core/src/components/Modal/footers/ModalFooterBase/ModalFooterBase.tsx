import React, { forwardRef } from "react";
import styles from "./ModalFooterBase.module.scss";
import Button from "../../../Button/Button";
import Flex from "../../../Flex/Flex";
import { ModalFooterBaseProps } from "./ModalFooterBase.types";
import cx from "classnames";
import { Tooltip } from "../../../Tooltip";

const ModalFooterBase = forwardRef(
  (
    { primaryButton, secondaryButton, renderAction, id, className, "data-testid": dataTestId }: ModalFooterBaseProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const {
      text: primaryButtonText,
      tooltipProps: primaryButtonTooltipProps = {},
      ...primaryButtonProps
    } = primaryButton;
    const {
      text: secondaryButtonText,
      tooltipProps: secondaryButtonTooltipProps = {},
      ...secondaryButtonProps
    } = secondaryButton || {};

    return (
      <Flex
        ref={ref}
        id={id}
        justify="space-between"
        gap="small"
        className={cx(styles.footer, className)}
        data-testid={dataTestId}
      >
        <Tooltip {...primaryButtonTooltipProps} content={primaryButtonTooltipProps.content}>
          <Button {...primaryButtonProps}>{primaryButtonText}</Button>
        </Tooltip>
        {secondaryButton && (
          <Tooltip {...secondaryButtonTooltipProps} content={secondaryButtonTooltipProps.content}>
            <Button {...secondaryButtonProps} kind="tertiary">
              {secondaryButtonText}
            </Button>
          </Tooltip>
        )}
        {renderAction}
      </Flex>
    );
  }
);

export default ModalFooterBase;
