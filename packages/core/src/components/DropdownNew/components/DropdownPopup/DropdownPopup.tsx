import React from "react";
import Dialog from "../../../Dialog/Dialog"; // Corrected path
import { matchWidthModifier } from "../../utils/dropdown-modifiers"; // Corrected path
import { useDropdownContext } from "../../context/DropdownContext";
import Trigger from "../Trigger/Trigger"; // Trigger is a sibling in components/
import Menu from "../Menu/Menu"; // Menu is a sibling in components/

const DropdownPopup = () => {
  const { isOpen, reset } = useDropdownContext();

  return (
    <Dialog
      open={isOpen}
      useDerivedStateFromProps
      position="bottom-start"
      moveBy={{ main: 4, secondary: 0 }}
      observeContentResize={true}
      showTrigger={[]}
      hideTrigger={[]}
      onClickOutside={() => {
        if (isOpen) {
          reset();
        }
      }}
      modifiers={matchWidthModifier}
      content={<Menu />}
    >
      <Trigger />
    </Dialog>
  );
};

export default DropdownPopup;
