import React, { forwardRef } from "react";
import cx from "classnames";
import ModalFooterBase from "../ModalFooterBase/ModalFooterBase";
import { getTestId } from "../../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../../tests/constants";
import { ModalFooterProps } from "./ModalFooter.types";
import styles from "./ModalFooter.module.scss";
import { ModalFooterActionProps } from "../ModalFooterBase/ModalFooterBase.types";

function getPropsForButton(button?: ModalFooterActionProps, buttonClassName?: string) {
  if (!button) return undefined;
  const { tooltipProps, className, ...rest } = button;
  return {
    ...rest,
    className: tooltipProps ? className : cx(className, buttonClassName),
    tooltipProps: tooltipProps
      ? { ...tooltipProps, referenceWrapperClassName: cx(tooltipProps.referenceWrapperClassName, buttonClassName) }
      : undefined
  };
}

const ModalFooter = forwardRef(
  (
    { primaryButton, secondaryButton, renderSideAction, "data-testid": dataTestId, className, id }: ModalFooterProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const primary = getPropsForButton(primaryButton, styles.primary);
    const secondary = getPropsForButton(secondaryButton, styles.secondary);

    return (
      <ModalFooterBase
        ref={ref}
        className={className}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_NEXT_FOOTER, id)}
        primaryButton={primary}
        secondaryButton={secondary}
        renderAction={renderSideAction}
      />
    );
  }
);

export default ModalFooter;
