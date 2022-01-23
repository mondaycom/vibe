import Tipseen from "../Tipseen";
import TipseenContent from "../TipseenContent";
import { modifiers } from "./helper";

export const tipseenTemplate = ({ isDismissHidden, title, children, position, otherArgs }) => {
  return (
    <Tipseen
      // The modifier's purpose is to prevent the tipseen from being displayed when the user scrolls the story upwards / downwards.
      // Therefore, there is no need to move this prop in your implementations.
      modifiers={modifiers}
      position={position}
      content={
        <TipseenContent isDismissHidden={isDismissHidden} title={title}>
          {children}
        </TipseenContent>
      }
      {...otherArgs}
    >
      <div className="monday-style-story-tipseen_container" />
    </Tipseen>
  );
};
