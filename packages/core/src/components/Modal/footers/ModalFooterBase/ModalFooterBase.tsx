import React, { forwardRef } from "react";
import styles from "./ModalFooterBase.module.scss";
import { Button } from "@vibe/button";
import { Flex } from "@vibe/layout";
import { type ModalFooterBaseProps } from "./ModalFooterBase.types";
import cx from "classnames";
import { Tooltip } from "@vibe/tooltip";

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

    const primaryButtonEl = <Button {...primaryButtonProps}>{primaryButtonText}</Button>;
    const secondaryButtonEl = secondaryButton ? (
      <Button {...secondaryButtonProps} kind="tertiary">
        {secondaryButtonText}
      </Button>
    ) : null;

    return (
      <Flex
        ref={ref}
        id={id}
        justify="space-between"
        gap="small"
        className={cx(styles.footer, className)}
        data-testid={dataTestId}
      >
        {primaryButtonTooltipProps.content ? (
          <Tooltip {...primaryButtonTooltipProps}>{primaryButtonEl}</Tooltip>
        ) : (
          primaryButtonEl
        )}
        {secondaryButton &&
          (secondaryButtonTooltipProps.content ? (
            <Tooltip {...secondaryButtonTooltipProps}>{secondaryButtonEl}</Tooltip>
          ) : (
            secondaryButtonEl
          ))}
        {renderAction}
      </Flex>
    );
  }
);

export default ModalFooterBase;
