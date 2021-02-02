import React from "react";
import DialogContentContainer from "../DialogContentContainer";
import "./dialogContentContainerStory.scss";
import ComponentStateDescription from "../../storybook-helpers/component-state-description/ComponentStateDescription";
import { withPerformance } from "storybook-addon-performance";

export const Sandbox = () => (
  <div>
    <DialogContentContainer id="Knobs" className="dialog-content-container-story">
      I can be whatever i want to be!!!
    </DialogContentContainer>
  </div>
);

export const Types = () => (
  <div>
    <ComponentStateDescription title="Popover mode" />
    <DialogContentContainer type={DialogContentContainer.types.POPOVER} className="dialog-content-container-story">
      I can be whatever i want to be!!!
    </DialogContentContainer>
    <ComponentStateDescription title="Modal mode" />
    <DialogContentContainer type={DialogContentContainer.types.MODAL} className="dialog-content-container-story">
      I can be whatever i want to be!!!
    </DialogContentContainer>
  </div>
);

export default {
  title: "Components/DialogContentContainer",
  component: DialogContentContainer,
  decorators: [withPerformance]
};
