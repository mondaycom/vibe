import TooltipComponent from "../Tooltip";
import TooltipReference from "./TooltipReference";
import TooltipContent from "./TooltipContent";
import TooltipLineWrapper from "./TooltipLineWrapper";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import "./tooltip-story.scss";
import { text, boolean, number, select } from "@storybook/addon-knobs";

import {
  StoryStateRow,
  StoryStateColumn,
  FlexLayout,
  Divider
} from "../../storybook-helpers";

export const Sandbox = () => (
  <StoryStateRow centerize>
    <div
      style={{
        margin: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: "1 1 auto"
      }}
    >
      <TooltipComponent
        arrowPosition={select(
          "Arrow Position",
          { center: "center", begin: "begin", end: "end" },
          "center"
        )}
        moveBy={{ main: 10, secondary: 0 }}
        theme={select(
          "Theme",
          {
            Dark: "dark",
            Success: "success",
            Error: "error",
            Share: "share",
            Private: "private"
          },
          "dark"
        )}
        position={select(
          "Tooltip Position",
          { Top: "center", Bottom: "bottom", Right: "right", Left: "left" },
          "bottom"
        )}
        justify={select(
          "Justify Tip",
          { Center: "center", Bottom: "bottom", Top: "top" },
          "center"
        )}
        hideDelay={number("Hide Delay", 0)}
        showDelay={number("Show Delay", 300)}
        disableDialogSlide={true}
        withoutDialog={boolean("Without Dialog", false)}
        content={`I'm a tooltip`}
        showTrigger={["mouseenter"]}
        hideTrigger={["mouseleave"]}
        containerSelector="body"
      >
        <TooltipReference />
      </TooltipComponent>
      <span style={{ marginLeft: "8px" }}>Hover on me!</span>
    </div>
  </StoryStateRow>
);

export const Tooltip = () => (
  <StoryWrapper>
    <div style={{ marginBottom: "100px", height: "90px" }}>
      <Divider />
      <FlexLayout fullWidth>
        <TooltipLineWrapper title="Regular" position="top" theme="dark" />
        <TooltipLineWrapper title="Surface" position="top" theme="surface" />
      </FlexLayout>
    </div>
    <Divider />
    <div className="story-title">Positioning</div>
    <FlexLayout fullWidth>
      <TooltipLineWrapper title="Top-Start" position="top-start" theme="dark" />
      <TooltipLineWrapper title="Top" position="top" theme="dark" />
      <TooltipLineWrapper title="Top-End" position="top-end" theme="dark" />
    </FlexLayout>
    <FlexLayout fullWidth>
      <TooltipLineWrapper
        title="Bottom-Start"
        position="bottom-start"
        theme="dark"
      />
      <TooltipLineWrapper title="Bottom" position="bottom" theme="dark" />
      <TooltipLineWrapper
        title="Bottom-End"
        position="bottom-end"
        theme="dark"
      />
    </FlexLayout>
    <FlexLayout fullWidth>
      <TooltipLineWrapper title="Right" position="right" theme="dark" />
      <TooltipLineWrapper title="Left" position="left" theme="dark" />
    </FlexLayout>
  </StoryWrapper>
);

export const ImmediateTooltips = () => (
  <div>
    <StoryStateRow>
      <StoryStateColumn centerize title="Immediate show when another is shown">
        <TooltipComponent
          showDelay={number("Show Delay", 300)}
          content={`I'm a tooltip`}
          containerSelector="body"
          immediateShowDelay={0}
        >
          <TooltipReference />
        </TooltipComponent>
        <TooltipComponent
          showDelay={number("Show Delay", 300)}
          content={`I'm a tooltip`}
          containerSelector="body"
          immediateShowDelay={0}
        >
          <TooltipReference />
        </TooltipComponent>
        <TooltipComponent
          showDelay={number("Show Delay", 300)}
          content={`I'm ignoring immediate show`}
          containerSelector="body"
        >
          <TooltipReference />
        </TooltipComponent>
      </StoryStateColumn>
    </StoryStateRow>
    <StoryStateRow>
      <StoryStateColumn centerize>
        The 2 left tooltips uses the immediate show prop, <br />
        the right one ignores it and should always have showDelay
      </StoryStateColumn>
    </StoryStateRow>
  </div>
);

export default {
  title: "Components/Tooltip",
  component: TooltipComponent
};
