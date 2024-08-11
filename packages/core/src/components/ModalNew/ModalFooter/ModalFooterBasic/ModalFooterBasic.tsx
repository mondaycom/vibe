import React, { forwardRef } from "react";
import { getTestId } from "../../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../../tests/constants";
import { ModalFooterBasicProps } from "./ModalFooterBasic.types";
import ModalFooterBase from "../ModalFooterBase/ModalFooterBase";

const ModalFooterBasic = forwardRef(
  (
    {
      primaryButton,
      secondaryButton,
      renderSideAction,
      className,
      id,
      "data-testid": dataTestId
    }: ModalFooterBasicProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <ModalFooterBase
        primaryButton={primaryButton}
        secondaryButton={secondaryButton}
        renderSideAction={renderSideAction}
        className={className}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_NEXT_FOOTER_BASIC, id)}
        ref={ref}
      />
    );
  }
);

export default ModalFooterBasic;
