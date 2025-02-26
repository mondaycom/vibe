import React, { forwardRef } from "react";
import ModalFooterBase from "../ModalFooterBase/ModalFooterBase";
import { getTestId } from "../../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../../tests/constants";
import { ModalFooterProps } from "./ModalFooter.types";
import styles from "./ModalFooter.module.scss";
import { getPropsForButton } from "../utils/getPropsForButton";

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
