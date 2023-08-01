import { FC } from "preact/compat";
import Button from "../../../components/Button/Button";

interface OpenModalButtonProps {
  setShow: (show: boolean) => void;
}

export const OpenModalButton: FC<OpenModalButtonProps> = ({ setShow }) => {
  return <Button onClick={() => setShow(true)}>Open modal</Button>;
};
