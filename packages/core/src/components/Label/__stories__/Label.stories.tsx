import React from "react";
import Label from "../Label";
import Button from "../../Button/Button";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { NOOP } from "../../../utils/function-utils";
import { createComponentTemplate } from "vibe-storybook-components";
import { useEffect, useState } from "react";
import { type Decorator, type StoryObj } from "@storybook/react";
import Flex from "../../Flex/Flex";
import Box from "../../Box/Box";
import Heading from "../../Heading/Heading";
import Text from "../../Text/Text";

type Story = StoryObj<typeof Label>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: Label
});

export default {
  title: "Components/Label",
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
    id: "overview-label",
    text: "New"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Kinds = {
  render: () => (
    <Flex style={{ marginLeft: "30px", marginTop: "10px", gap: "184px" }}>
      <Flex direction="column" align="start" gap="large">
        <Label id="kinds-fill" text="New" />
        <Text>Fill</Text>
      </Flex>
      <Flex direction="column" align="start" gap="large">
        <Label id="kinds-outline" text="New" kind="line" />
        <Text>Outline</Text>
      </Flex>
    </Flex>
  ),
  name: "Kinds"
};

export const Sizes: Story = {
  render: () => (
    <>
      <Label id="sizes-medium" text="New" />
      <Label id="sizes-small" text="New" size="small" />
    </>
  ),
  decorators: [withGrid],
  name: "Sizes"
};

export const Colors = {
  render: () => (
    <>
      <Label id="colors-default-fill" text="New" />
      <Label id="colors-negative-fill" text="New" color="negative" />
      <Label id="colors-positive-fill" text="New" color="positive" />
      <Label id="colors-dark-fill" text="New" color="dark" />
      <Label id="colors-default-line" text="New" kind="line" />
      <Label id="colors-negative-line" text="New" color="negative" kind="line" />
      <Label id="colors-positive-line" text="New" color="positive" kind="line" />
      <Label id="colors-dark-line" text="New" color="dark" kind="line" />
    </>
  ),
  decorators: [withGrid],
  name: "Colors"
};

export const Clickable = {
  render: () => (
    <>
      <Label id="clickable-fill" aria-label="Clickable new feature label" text="New" onClick={NOOP} />
      <Label id="clickable-line" aria-label="Clickable new feature label" text="New" kind="line" onClick={NOOP} />
    </>
  ),
  decorators: [withGrid],
  name: "Clickable",
  parameters: {
    docs: {
      liveEdit: {
        scope: { NOOP }
      }
    }
  }
};

export const SecondaryLabel = {
  render: () => (
    <Flex direction="column" gap="large">
      <Box style={{ width: "300px" }}>
        <Flex align="center" gap="small">
          <Heading id="gantt-heading" type="h3">
            Gannt
          </Heading>
          <Label id="gantt-label" text="New" kind="line" />
        </Flex>
        <Text element="p" type="text1">
          Plan, track and present your projects visually using the Gannt chart
        </Text>
      </Box>
      <Box style={{ width: "300px", marginTop: "8px" }}>
        <Flex align="center" gap="small">
          <Heading id="apps-heading" type="h3" style={{ display: "inline" }}>
            Apps
          </Heading>
          <Label id="apps-label" text="New" kind="line" />
        </Flex>
        <Text element="p" type="text1" style={{ marginTop: "8px" }}>
          Enhance your dashboard with widgets built on the monday apps framework
        </Text>
      </Box>
    </Flex>
  ),
  name: "Secondary label"
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
        <Label id="celebration-label" text="New" kind="line" celebrationAnimation={animate} />
        <Button
          id="celebration-button"
          ariaLabel="Trigger celebration animation"
          size="small"
          kind="tertiary"
          onClick={() => setAnimate(true)}
        >
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
