import React from "react";
import { Dialog } from "@vibe/dialog";
import { matchWidthMiddleware } from "../../utils/dropdown-modifiers";
import { useDropdownContext } from "../../context/DropdownContext";
import Menu from "../Menu/Menu";
import SingleSelectTrigger from "../Trigger/SingleSelectTrigger";
import MultiSelectTrigger from "../Trigger/MultiSelectTrigger";

const DropdownPopup = () => {
  const { multi, isOpen } = useDropdownContext();

  return (
    <Dialog
      open
      useDerivedStateFromProps
      // Keep the menu mounted for downshift, but only run Floating UI while it's open.
      positioningActive={isOpen}
      position="bottom-start"
      moveBy={{ main: 4, secondary: 0 }}
      observeContentResize={true}
      showTrigger={[]}
      hideTrigger={[]}
      middleware={[matchWidthMiddleware]}
      content={<Menu />}
      referenceWrapperElement="div"
    >
      {multi ? <MultiSelectTrigger /> : <SingleSelectTrigger />}
    </Dialog>
  );
};

export default DropdownPopup;
