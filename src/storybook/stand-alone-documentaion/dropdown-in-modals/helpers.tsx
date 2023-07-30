import { useRef, useCallback } from "React";
import { useHelperOpenModalButton } from "../../../components/Modal/__stories__/helpers";
import { FC } from "preact/compat";

interface OpenModalButtonProps {
  setShow: (show: boolean) => void;
}

export const OpenModalButton: FC<OpenModalButtonProps> = ({ setShow }) => {
  const openModalButtonRef = useRef(null);
  return useHelperOpenModalButton({ title: "Default", setShow, openModalButtonRef });
};
