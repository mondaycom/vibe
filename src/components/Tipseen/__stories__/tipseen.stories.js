import React, { useCallback, useMemo, useState } from "react";
import StoryTitle from "../../storybook-helpers/story-title/story-title";
import { withPerformance } from "storybook-addon-performance";
import Tipseen from "../Tipseen";
import { StoryStateRow } from "../../storybook-helpers";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import TipseenContent from "../TipseenContent";
import "./tipseen.stories.scss";
import TipseenWizard from "../TipseenWizard";
import TipseenImage from "../TipseenImage";
import { boolean, number, select, text } from "@storybook/addon-knobs";

export const BasicTipseen = () => {
  return (
    <StoryWrapper>
      <StoryTitle text="Empty tipseen" />
      <StoryStateRow componentClassName>
        <Tipseen position={Tipseen.positions.RIGHT} width={number("Width", undefined)}>
          <div className="monday-style-story-empty-tipseen_container" />
        </Tipseen>
      </StoryStateRow>
      <StoryTitle text="Basic tipseen" />
      <StoryStateRow componentClassName="monday-style-story-tipseen--large">
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
          <div className={"monday-style-story-tipseen_container"} />
        </Tipseen>
      </StoryStateRow>
    </StoryWrapper>
  );
};
export const WizardTipseen = () => {
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
      <StoryStateRow componentClassName="monday-style-story-tipseen_container monday-style-story-tipseen--large">
        <Tipseen position={Tipseen.positions.RIGHT} content={tipseenWizard}>
          <div className={"monday-style-story-tipseen_container"} />
        </Tipseen>
      </StoryStateRow>
    </StoryWrapper>
  );
};
export const tipseenWithImage = () => {
  return (
    <StoryWrapper>
      <StoryTitle text="Tipseen with image" />
      <StoryStateRow componentClassName="monday-style-story-tipseen_container monday-style-story-tipseen--large">
        <Tipseen
          position={Tipseen.positions.BOTTOM}
          isCloseButtonOnImage
          content={
            <>
              <TipseenImage
                className="monday-style-story-tipseen_image"
                src={"https://www.israel21c.org/wp-content/uploads/2018/07/israel-sunset-ashkelon-september.jpg"}
              />
              <TipseenContent
                isDismissHidden={false}
                title="Title"
                children="Popover message will appear here loremipsum dolor samet… "
              />
            </>
          }
        >
          <div />
        </Tipseen>
      </StoryStateRow>
    </StoryWrapper>
  );
};
export const Sandbox = () => (
  <div className="monday-style-story-sandbox-tipseen">
    <Tipseen
      position={select("Position", Tipseen.positions, Tipseen.positions.RIGHT)}
      animationTypes={select("Animation types", Tipseen.animationTypes, Tipseen.animationTypes.EXPAND)}
      justify={select("justify", Tipseen.justifyTypes, Tipseen.justifyTypes.CENTER)}
      isCloseButtonHidden={boolean("Is close button hidden", false)}
      hideWhenReferenceHidden={boolean("Hide when reference hidden", false)}
      content={
        <TipseenContent
          title={text("Title", "Title")}
          isDismissHidden={boolean("Is dismiss hidden", true)}
          children={text("Tipseen content text", "Popover message will appear here loremipsum dolor samet…")}
          submitButtonText={text("Submit button text", "Submit button text")}
          dismissButtonText={text("Dismiss button text", "Dismiss button text")}
        />
      }
    >
      <div className="monday-style-story-sandbox-tipseen_container" />
    </Tipseen>
  </div>
);

export default {
  title: "Components|Tipseen",
  component: Tipseen,
  decorators: [withPerformance]
};
