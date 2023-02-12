import { Button, Flex } from "../../../components";
import React, { useRef, useState } from "react";

// internal custom hook to help with writing tests and stories.
export const createHelperOpenModalButton = ({ title = "Open modal", setShow, openModalButtonRef }) => {
  return (
    <Button onClick={() => setShow(true)} ref={openModalButtonRef}>
      {title}
    </Button>
  );
};
