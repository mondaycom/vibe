import React from "React";
import { FC } from "preact/compat";
import Button from "../Button/Button";

interface OpenModalButtonProps {
  setShow: (show: boolean) => void;
}

export const OpenModalButton: FC<OpenModalButtonProps> = ({ setShow }) => {
  return <Button onClick={() => setShow(true)}>Open modal</Button>;
};
