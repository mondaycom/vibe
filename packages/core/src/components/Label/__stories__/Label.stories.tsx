import React from "react";
import Label from "../Label";
import Button from "../../Button/Button";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { NOOP } from "../../../utils/function-utils";
import { createComponentTemplate, MultipleStoryElementsWrapper } from "vibe-storybook-components";
import "./Label.stories.scss";
import { useEffect, useState } from "react";
import { Decorator, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Label>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: Label
});

export default {
  title: "Data display/Label",
  component: Label,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const withGrid: Decorator = Story => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 180px)",
      marginInlineStart: "30px",
      marginTop: "10px",
      gap: "50px",
      width: "100%"
    }}
  >
    <Story />
  </div>
);

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
    },
    docs: {
      liveEdit: {
        isEnabled: false
      }
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

export const Sizes: Story = {
  render: () => (
    <>
      <Label text="New" />
      <Label text="New" size="small" />
    </>
  ),
  decorators: [withGrid],
  name: "Sizes",

  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
};

export const Colors = {
  render: () => (
    <>
      <Label text="New" />
      <Label text="New" color="negative" />
      <Label text="New" color="positive" />
      <Label text="New" color="dark" />
      <Label text="New" kind="line" />
      <Label text="New" color="negative" kind="line" />
      <Label text="New" color="positive" kind="line" />
      <Label text="New" color="dark" kind="line" />
    </>
  ),
  decorators: [withGrid],
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
      <Label text="New" onClick={NOOP} />
      <Label text="New" kind="line" onClick={NOOP} />
    </>
  ),
  decorators: [withGrid],
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
        <Label text="New" kind="line" celebrationAnimation={animate} />
        <Button size="small" kind="tertiary" onClick={() => setAnimate(true)}>
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
