import React from "react";
import Dialog from "../../../Dialog/Dialog";
import { matchWidthModifier } from "../../utils/dropdown-modifiers";
import { useDropdownContext } from "../../context/DropdownContext";
import Menu from "../Menu/Menu";
import SingleSelectTrigger from "../Trigger/SingleSelectTrigger";
import MultiSelectTrigger from "../Trigger/MultiSelectTrigger";

const DropdownPopup = () => {
  const { isOpen, reset, multi } = useDropdownContext();

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
      {multi ? <MultiSelectTrigger /> : <SingleSelectTrigger />}
    </Dialog>
  );
};

export default DropdownPopup;
