import React, { forwardRef } from "react";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { ModalContentProps } from "./ModalContent.types";

const ModalContent = forwardRef(
  (
    { children, className, id, "data-testid": dataTestId }: ModalContentProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        className={className}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_NEXT_CONTENT, id)}
        data-autofocus-inside={true}
      >
        {children}
      </div>
    );
  }
);

export default ModalContent;
