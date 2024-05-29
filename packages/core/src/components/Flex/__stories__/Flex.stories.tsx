import React from "react";
import Flex, { FlexProps } from "../Flex";
import { Add, Filter, Person, Search, Sort } from "../../Icon/Icons";
import Button from "../../Button/Button";
import Chips from "../../Chips/Chips";
import { StoryDescription } from "vibe-storybook-components";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import styles from "./Flex.stories.module.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Flex,
  enumPropNamesArray: ["justify", "align"],
  actionPropsArray: ["onClick"]
});

const flexTemplate = (args: FlexProps) => {
  return (
    <Flex {...args}>
      <Button>Primary</Button>
      <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
      <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
    </Flex>
  );
};

export default {
  title: "Layout/Flex",
  component: Flex,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: flexTemplate.bind({}),
  name: "Overview",
  args: {}
};

export const Directions = {
  render: () => (
    <div className={styles["story-container"]}>
      <StoryDescription description="Horizontal">
        <Flex>
          <Button>Primary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Vertical">
        <Flex direction={Flex.directions.COLUMN}>
          <Button>Primary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>
      </StoryDescription>
    </div>
  ),

  name: "Directions"
};

export const HorizontalSpacingBetweenItems = {
  render: () => (
    <div className={styles["story-container"]}>
      <StoryDescription description="No spacing between items">
        <Flex gap={Flex.gaps.NONE}>
          <Button>Primary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Extra small spacing between items">
        <Flex gap={Flex.gaps.XS}>
          <Button>Primary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Small spacing between items">
        <Flex gap={Flex.gaps.SMALL}>
          <Button>Primary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Medium spacing between items">
        <Flex gap={Flex.gaps.MEDIUM}>
          <Button>Primary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Large spacing between items">
        <Flex gap={Flex.gaps.LARGE}>
          <Button>Primary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Custom spacing between items">
        <Flex gap={32}>
          <Button>Primary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>
      </StoryDescription>
    </div>
  ),

  name: "Horizontal spacing between items"
};

export const VerticalSpacingBetweenItems = {
  render: () => (
    <Flex
      style={{
        width: "100%"
      }}
      justify={Flex.justify.SPACE_AROUND}
    >
      <StoryDescription description="No spacing between items" vertical>
        <Flex gap={Flex.gaps.NONE} direction={Flex.directions.COLUMN}>
          <Button>Primary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Extra small spacing between items" vertical>
        <Flex gap={Flex.gaps.XS} direction={Flex.directions.COLUMN}>
          <Button>Primary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Small spacing between items" vertical>
        <Flex gap={Flex.gaps.SMALL} direction={Flex.directions.COLUMN}>
          <Button>Primary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Medium spacing between items" vertical>
        <Flex gap={Flex.gaps.MEDIUM} direction={Flex.directions.COLUMN}>
          <Button>Primary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Large spacing between items" vertical>
        <Flex gap={Flex.gaps.LARGE} direction={Flex.directions.COLUMN}>
          <Button>Primary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Custom spacing between items" vertical>
        <Flex gap={32} direction={Flex.directions.COLUMN}>
          <Button>Primary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>
      </StoryDescription>
    </Flex>
  ),

  name: "Vertical spacing between items"
};

export const HorizontalPositions = {
  render: () => (
    <div
      className={styles["story-container"]}
      style={{
        width: "100%"
      }}
    >
      <StoryDescription description="Start position">
        <Flex
          justify={Flex.justify.START}
          style={{
            width: "100%"
          }}
        >
          <Button>Primary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Center position">
        <Flex
          justify={Flex.justify.CENTER}
          style={{
            width: "100%"
          }}
        >
          <Button>Primary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="End position">
        <Flex
          justify={Flex.justify.END}
          style={{
            width: "100%"
          }}
        >
          <Button>Primary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Space between position">
        <Flex
          justify={Flex.justify.SPACE_BETWEEN}
          style={{
            width: "100%"
          }}
        >
          <Button>Primary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Space around position">
        <Flex
          justify={Flex.justify.SPACE_AROUND}
          style={{
            width: "100%"
          }}
        >
          <Button>Primary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>
      </StoryDescription>
    </div>
  ),

  name: "Horizontal positions"
};

export const VerticalPositions = {
  render: () => (
    <Flex
      style={{
        width: "100%"
      }}
      justify={Flex.justify.SPACE_AROUND}
    >
      <StoryDescription description="Start position" vertical>
        <Flex
          justify={Flex.justify.START}
          style={{
            height: "300px"
          }}
          direction={Flex.directions.COLUMN}
        >
          <Button>Primary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Center position" vertical>
        <Flex
          justify={Flex.justify.CENTER}
          style={{
            height: "300px"
          }}
          direction={Flex.directions.COLUMN}
        >
          <Button>Primary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="End position" vertical>
        <Flex
          justify={Flex.justify.END}
          style={{
            height: "300px"
          }}
          direction={Flex.directions.COLUMN}
        >
          <Button>Primary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Space between position" vertical>
        <Flex
          justify={Flex.justify.SPACE_BETWEEN}
          style={{
            height: "300px"
          }}
          direction={Flex.directions.COLUMN}
        >
          <Button>Primary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Space around position" vertical>
        <Flex
          justify={Flex.justify.SPACE_AROUND}
          style={{
            height: "300px"
          }}
          direction={Flex.directions.COLUMN}
        >
          <Button>Primary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>
      </StoryDescription>
    </Flex>
  ),

  name: "Vertical positions"
};

export const SupportMultiLinesLayout = {
  render: () => (
    <Flex
      wrap
      style={{
        width: "300px"
      }}
      gap={Flex.gaps.SMALL}
    >
      <Chips className={styles["flex-chip"]} label="Chip 1" />
      <Chips className={styles["flex-chip"]} label="Chip 2" />
      <Chips className={styles["flex-chip"]} label="Chip 3" />
      <Chips className={styles["flex-chip"]} label="Chip 4" />
      <Chips className={styles["flex-chip"]} label="Chip 5" />
      <Chips className={styles["flex-chip"]} label="Chip 6" />
      <Chips className={styles["flex-chip"]} label="Chip 7" />
    </Flex>
  ),

  name: "Support multi lines layout"
};

export const FlexAsToolbarContainer = {
  render: () => (
    <Flex>
      <Button leftIcon={Add}>Add</Button>
      <Button kind={Button.kinds.TERTIARY} leftIcon={Search}>
        Search
      </Button>
      <Button kind={Button.kinds.TERTIARY} leftIcon={Person}>
        Person
      </Button>
      <Button kind={Button.kinds.TERTIARY} leftIcon={Filter}>
        Filter
      </Button>
      <Button kind={Button.kinds.TERTIARY} leftIcon={Sort}>
        Sort
      </Button>
    </Flex>
  ),

  name: "Flex as toolbar container"
};
