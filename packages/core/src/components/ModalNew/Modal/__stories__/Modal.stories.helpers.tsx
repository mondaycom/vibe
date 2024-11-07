import React from "react";
import Button from "../../../Button/Button";
import { useAfterFirstRender } from "../../../../hooks";

export const OpenedModalPreview = ({
  onOpenModalClick,
  large = false,
  children: modal
}: {
  onOpenModalClick: () => void;
  large?: boolean;
  children: React.ReactNode;
}) => {
  const isAfterFirstRender = useAfterFirstRender();
  return (
    <div
      style={{ paddingInlineStart: 32, paddingBlockStart: 40, height: large ? 540 : 360 }}
      // workaround to prevent modal from autofocusing on page load
      // autofocus would work as expected when modal closes and reopens
      {...(!isAfterFirstRender.current && { "data-no-autofocus": true })}
    >
      <Button onClick={onOpenModalClick}>Open Modal</Button>
      {modal}
    </div>
  );
};
