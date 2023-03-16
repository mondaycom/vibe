import Tipseen from "../Tipseen";
import TipseenContent from "../TipseenContent";
import { modifiers } from "./helper";
import { Button, Dialog } from "../../index";

export const tipseenTemplate = ({ isDismissHidden, title, children, position, ...otherArgs }) => {
  return (
    <Tipseen
      // The modifier's purpose is to prevent the tipseen from being displayed when the user scrolls the story upwards / downwards.
      // Therefore, there is no need to move this prop in your implementations.
      modifiers={modifiers}
      position={position}
      showDelay={12000}
      content={
        <TipseenContent isDismissHidden={isDismissHidden} title={title}>
          {children}
        </TipseenContent>
      }
      {...otherArgs}
    >
      <Button>Hey</Button>
    </Tipseen>
  );
};
