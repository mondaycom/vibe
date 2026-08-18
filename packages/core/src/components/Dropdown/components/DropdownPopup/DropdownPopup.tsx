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
      // Perf-only: the menu Dialog is always mounted (`open`) so downshift's menu element stays in
      // the DOM. `positioningActive` gates Floating UI so autoUpdate/ResizeObserver run only while
      // the menu is actually open, instead of always — critical when many dropdowns render together
      // (e.g. a virtualized table). This does not affect the dialog's open/close behavior.
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
