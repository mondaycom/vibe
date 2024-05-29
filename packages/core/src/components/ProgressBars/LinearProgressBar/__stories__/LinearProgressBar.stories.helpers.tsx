import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";
import DialogContentContainer from "../../../DialogContentContainer/DialogContentContainer";
import LinearProgressBar from "../LinearProgressBar";

export const TipMultiStepIndicator = () => (
  <Tip>
    If you need to lead a user through a progress, use the{" "}
    <StorybookLink page="Navigation/MultiStepIndicator" size={StorybookLink.sizes.SMALL}>
      MultiStepIndicator
    </StorybookLink>{" "}
    instead.
  </Tip>
);

export const ComponentRulePositive = () => (
  <DialogContentContainer className="linear-progress-bar_dialog-wrapper">
    <b>Items usage</b>
    <div className="linear-progress-bar_inline-wrapper">
      <span>Items</span>
      <span>142/200</span>
    </div>
    <LinearProgressBar value={71} />
  </DialogContentContainer>
);

export const ComponentRuleNegative = () => (
  <DialogContentContainer className="linear-progress-bar_dialog-wrapper">
    <b>Storage</b>
    <div className="linear-progress-bar_row-wrapper">
      <div className="linear-progress-bar_title">Drive 1</div>
      <LinearProgressBar className="linear-progress-bar_without-bg" value={88} />
    </div>
    <div className="linear-progress-bar_row-wrapper">
      <div className="linear-progress-bar_title">Drive 2</div>
      <LinearProgressBar className="linear-progress-bar_without-bg" value={46} />
    </div>
    <div className="linear-progress-bar_row-wrapper">
      <div className="linear-progress-bar_title">Drive 3</div>
      <LinearProgressBar className="linear-progress-bar_without-bg" value={72} />
    </div>
  </DialogContentContainer>
);
