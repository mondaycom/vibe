import React, { useCallback, useMemo, useState } from "react";
import cx from "classnames";
import StoryTitle from "../../storybook-helpers/story-title/story-title";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import Tipseen from "../Tipseen";
import {
  StoryStateRow,
  StoryStateColumn,
  ComponentStateDescription,
  FlexLayout,
  Divider
} from "../../storybook-helpers";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import TipseenContent from "../TipseenContent";
import "./tipseen.stories.scss";
import { TipseenWizard } from "../TipseenWizard";
import TipseenImage from "../TipseenImage";
export const States = () => {
  const [step, setStep] = useState();
  const onChangeStep = useCallback((e, index) => setStep(index), [setStep]);
  const tipseenWizard = useMemo(() => {
    const content = [
      <div>Popover message will appear here loremipsum dolor samet…</div>,
      <div>Popover message will appear here loremipsum dolor samet…</div>,
      <div>Popover message will appear here loremipsum dolor samet…</div>
    ];
    return <TipseenWizard title="title" steps={content} onChangeActiveStep={onChangeStep} activeStepIndex={step} />;
  });
  return (
    <StoryWrapper>
      <StoryTitle text="Tipseen with a wizard" />
      <StoryStateRow componentClassName="monday-style-story-tipseen_container">
        <Tipseen position={Tipseen.positions.RIGHT} content={tipseenWizard}>
          <div className={"tooltip-empty-element"} />
        </Tipseen>
      </StoryStateRow>
      <StoryTitle text="Empty tipseen" />
      <StoryStateRow componentClassName="monday-style-story-tipseen_container">
        <Tipseen position={Tipseen.positions.RIGHT}>
          <div className={"tooltip-empty-element"} />
        </Tipseen>
      </StoryStateRow>
      <StoryTitle text="Basic tipseen" />
      <StoryStateRow componentClassName="monday-style-story-tipseen_container">
        <Tipseen
          position={Tipseen.positions.RIGHT}
          content={
            <TipseenContent
              isDismissHidden={false}
              title="title"
              children="Popover message will appear here loremipsum dolor samet… "
            />
          }
        >
          <div className={"tooltip-empty-element"} />
        </Tipseen>
      </StoryStateRow>
      <StoryTitle text="Tipseen with image" />
      <StoryStateRow componentClassName="monday-style-story-tipseen_container">
        <Tipseen
          position={Tipseen.positions.RIGHT}
          isCloseButtonOnImage
          content={
            <>
              <TipseenImage
                src={"https://www.israel21c.org/wp-content/uploads/2018/07/israel-sunset-ashkelon-september.jpg"}
              />
              <TipseenContent
                isDismissHidden={false}
                title="title"
                children="Popover message will appear here loremipsum dolor samet… "
              />
            </>
          }
        >
          <div className={"tooltip-empty-element"} />
        </Tipseen>
      </StoryStateRow>
    </StoryWrapper>
  );
};

export const Sandbox = () => (
  <div>
    <Tipseen
      id="Knobs"
      title={text("Text", "Test knob value")}
      content="Popover message will appear here loremipsum dolor samet… "
    >
      <div className={cx("tooltip-empty-element")} />
    </Tipseen>
    <Tipseen
      content={
        <TipseenContent
          isDismissHidden={false}
          title="title"
          children="Popover message will appear here loremipsum dolor samet… "
        />
      }
    >
      <div className={"tooltip-empty-element"} />
    </Tipseen>
  </div>
);

export default {
  title: "Components/Tipseen",
  component: Tipseen,
  decorators: [withPerformance]
};
