import React from "react";
import ReferenceComponent from "./Reference";
import StoryDialogContent from "./StoryDialogContent";
import FlexLayout from "../../../storybook-helpers/flex-layout/flex-layout";
import Dialog from "../../Dialog";

const placements = ["top", "bottom", "left", "right"];

const DialogStory = () => {
  return (
    <div>
      <h1>Dialog Locations</h1>
      {placements.map(placement => {
        return (
          <FlexLayout centerize>
            <Dialog
              animationType="expand"
              hideTrigger={["clickoutside"]}
              showTrigger={["mousedown"]}
              position={placement}
              content={<StoryDialogContent />}
            >
              <ReferenceComponent title="Click Me" />
            </Dialog>
          </FlexLayout>
        );
      })}
    </div>
  );
};

export default DialogStory;
