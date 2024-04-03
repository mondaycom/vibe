import Label from "../Label";
import Button from "../../Button/Button";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { NOOP } from "../../../utils/function-utils";
import { createComponentTemplate, MultipleStoryElementsWrapper } from "vibe-storybook-components";
import "./label.stories.scss";
import { useEffect, useState } from "react";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Label,
  enumPropNamesArray: ["kind", "color"]
});

export default {
  title: "Data display/Label",
  component: Label,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const labelTemplate = createComponentTemplate(Label);

export const Overview = {
  render: labelTemplate.bind({}),
  name: "Overview",
  args: {
    text: "New"
  },
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
};

export const Kinds = {
  render: () => (
    <>
      <div className="monday-storybook-label_group monday-storybook-label_states-gap">
        <Label text="New" />
        Fill
      </div>
      <div className="monday-storybook-label_group monday-storybook-label_states-gap">
        <Label text="New" kind="line" />
        Outline
      </div>
    </>
  ),

  name: "Kinds",

  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
};

export const Colors = {
  render: () => (
    <>
      <div className="monday-storybook-label_group">
        <Label text="New" />
        <Label text="New" kind="fill" />
        <Label text="New" kind="fill" />
      </div>
      <div className="monday-storybook-label_group">
        <Label text="New" color="negative" />
        <Label text="New" color="negative" kind="line" />
      </div>
      <div className="monday-storybook-label_group">
        <Label text="New" color="positive" />
        <Label text="New" color="positive" kind="line" />
      </div>
      <div className="monday-storybook-label_group">
        <Label text="New" color="dark" />
        <Label text="New" color="dark" kind="line" />
      </div>
    </>
  ),

  name: "Colors",

  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
};

export const Clickable = {
  render: () => (
    <>
      <div className="monday-storybook-label_group monday-storybook-label_states-gap">
        <Label text="New" onClick={NOOP} />
      </div>
      <div className="monday-storybook-label_group monday-storybook-label_states-gap">
        <Label text="New" kind="line" onClick={NOOP} />
      </div>
    </>
  ),

  name: "Clickable",

  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
};

export const SecondaryLabel = {
  render: () => (
    <MultipleStoryElementsWrapper className="monday-storybook-label_column-block">
      <div className="monday-storybook-label_article">
        <h5 className="monday-storybook-label_title">Gannt</h5>
        <Label text="New" kind="line" />
        <p>Plan, track and present your projects visually using the Gannt chart</p>
      </div>
      <div className="monday-storybook-label_article">
        <h5 className="monday-storybook-label_title">Apps</h5>
        <Label text="New" kind="line" />
        <p>Enhance your dashboard with widgets built on the monday apps framework</p>
      </div>
    </MultipleStoryElementsWrapper>
  ),

  name: "Secondary label",

  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
};

export const Celebration = {
  render: () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }, [animate]);

    return (
      <>
        <Label text="New" kind="line" celebrationAnimation={animate} isAnimationDisabled />
        <Button size={Button.sizes.SMALL} kind={Button.kinds.TERTIARY} onClick={() => setAnimate(true)}>
          Click to celebrate
        </Button>
      </>
    );
  },
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
};
