import React from "react";
import { Dialog } from "@vibe/core";
import { matchWidthModifier } from "../../utils/dropdown-modifiers";
import { useDropdownContext } from "../../context/DropdownContext";
import Menu from "../Menu/Menu";
import SingleSelectTrigger from "../Trigger/SingleSelectTrigger";
import MultiSelectTrigger from "../Trigger/MultiSelectTrigger";

const DropdownPopup = () => {
  const { multi } = useDropdownContext();

  return (
    <Dialog
      open
      useDerivedStateFromProps
      position="bottom-start"
      moveBy={{ main: 4, secondary: 0 }}
      observeContentResize={true}
      showTrigger={[]}
      hideTrigger={[]}
      modifiers={matchWidthModifier}
      content={<Menu />}
      referenceWrapperElement="div"
    >
      {multi ? <MultiSelectTrigger /> : <SingleSelectTrigger />}
    </Dialog>
  );
};

export default DropdownPopup;
