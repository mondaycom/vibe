import React from "react";
import Flex, { type FlexProps } from "../Flex";
import { Add, Filter, Person, Search, Sort } from "@vibe/icons";
import Button from "../../Button/Button";
import Chips from "../../Chips/Chips";
import Box from "../../Box/Box";
import { StoryDescription } from "vibe-storybook-components";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { Text } from "../../Text";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Flex,
  actionPropsArray: ["onClick"]
});

const flexTemplate = (args: FlexProps) => {
  return (
    <Flex {...args}>
      <Box padding="large" border />
      <Box padding="large" border />
      <Box padding="large" border />
    </Flex>
  );
};

export default {
  title: "Layout/Flex",
  component: Flex,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators,
  parameters: {
    docs: {
      liveEdit: {
        scope: { StoryDescription }
      }
    }
  }
};

export const Overview = {
  render: flexTemplate.bind({}),
  name: "Overview",
  args: {},
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Directions = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "var(--space-32)" }}>
      <Text type="text1" weight="medium">
        Horizontal
      </Text>
      <Flex>
        <Box padding="large" border />
        <Box padding="large" border />
        <Box padding="large" border />
      </Flex>
      <Text type="text1" weight="medium">
        Vertical
      </Text>
      <Flex direction="column">
        <Box padding="large" border />
        <Box padding="large" border />
        <Box padding="large" border />
      </Flex>
    </div>
  )
};

export const HorizontalSpacingBetweenItems = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "120px 1fr",
        alignItems: "center",
        gap: "var(--space-16) var(--space-24)"
      }}
    >
      <Text type="text1" weight="medium" ellipsis={false}>
        No spacing between items
      </Text>
      <Flex>
        <Box padding="large" border />
        <Box padding="large" border />
        <Box padding="large" border />
      </Flex>
      <Text type="text1" weight="medium" ellipsis={false}>
        Extra small spacing between items
      </Text>
      <Flex gap="xs">
        <Box padding="large" border />
        <Box padding="large" border />
        <Box padding="large" border />
      </Flex>
      <Text type="text1" weight="medium" ellipsis={false}>
        Small spacing between items
      </Text>
      <Flex gap="small">
        <Box padding="large" border />
        <Box padding="large" border />
        <Box padding="large" border />
      </Flex>
      <Text type="text1" weight="medium" ellipsis={false}>
        Medium spacing between items
      </Text>
      <Flex gap="medium">
        <Box padding="large" border />
        <Box padding="large" border />
        <Box padding="large" border />
      </Flex>
      <Text type="text1" weight="medium" ellipsis={false}>
        Large spacing between items
      </Text>
      <Flex gap="large">
        <Box padding="large" border />
        <Box padding="large" border />
        <Box padding="large" border />
      </Flex>
      <Text type="text1" weight="medium" ellipsis={false}>
        Custom spacing between items
      </Text>
      <Flex gap={32}>
        <Box padding="large" border />
        <Box padding="large" border />
        <Box padding="large" border />
      </Flex>
    </div>
  )
};

export const HorizontalFlex = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "120px 1fr",
        alignItems: "center",
        gap: "var(--space-24) var(--space-16)"
      }}
    >
      <Text type="text1" weight="medium" ellipsis={false}>
        Equal size
      </Text>
      <Flex style={{ width: 300 }}>
        <Flex flex={{ grow: 1, shrink: 1, basis: "auto" }}>
          <Box padding="medium" style={{ width: "100%" }} border>
            First
          </Box>
        </Flex>
        <Flex flex={{ grow: 1, shrink: 1, basis: "auto" }}>
          <Box padding="medium" style={{ width: "100%" }} border>
            Second
          </Box>
        </Flex>
        <Flex flex={{ grow: 1, shrink: 1, basis: "auto" }}>
          <Box padding="medium" style={{ width: "100%" }} border>
            Third
          </Box>
        </Flex>
      </Flex>
      <Text type="text1" weight="medium" ellipsis={false}>
        First item grows
      </Text>
      <Flex style={{ width: 300 }}>
        <Flex flex={{ grow: 1, shrink: 0, basis: "auto" }}>
          <Box padding="medium" style={{ width: "100%" }} border>
            First
          </Box>
        </Flex>
        <Flex flex={{ grow: 0, shrink: 0, basis: "auto" }}>
          <Box padding="medium" style={{ width: "100%" }} border>
            Second
          </Box>
        </Flex>
        <Flex flex={{ grow: 0, shrink: 0, basis: "auto" }}>
          <Box padding="medium" style={{ width: "100%" }} border>
            Third
          </Box>
        </Flex>
      </Flex>
      <Text type="text1" weight="medium" ellipsis={false}>
        Third item grows
      </Text>
      <Flex style={{ width: 300 }}>
        <Flex flex={{ grow: 0, shrink: 0, basis: "auto" }}>
          <Box padding="medium" style={{ width: "100%" }} border>
            First
          </Box>
        </Flex>
        <Flex flex={{ grow: 0, shrink: 0, basis: "auto" }}>
          <Box padding="medium" style={{ width: "100%" }} border>
            Second
          </Box>
        </Flex>
        <Flex flex={{ grow: 1, shrink: 0, basis: "auto" }}>
          <Box padding="medium" style={{ width: "100%" }} border>
            Third
          </Box>
        </Flex>
      </Flex>
    </div>
  ),

  name: "Horizontal layout using flex"
};

export const HorizontalFlexWithFlexShorthand = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "120px 1fr",
        alignItems: "center",
        gap: "var(--space-24) var(--space-16)"
      }}
    >
      <Text type="text1" weight="medium" ellipsis={false}>
        Equal size
      </Text>
      <Flex style={{ width: 300 }}>
        <Flex flex="1 1 auto">
          <Box style={{ width: "100%" }} border>
            First
          </Box>
        </Flex>
        <Flex flex="1 1 auto">
          <Box style={{ width: "100%" }} border>
            Second
          </Box>
        </Flex>
        <Flex flex="1 1 auto">
          <Box style={{ width: "100%" }} border>
            Third
          </Box>
        </Flex>
      </Flex>
      <Text type="text1" weight="medium" ellipsis={false}>
        First item grows
      </Text>
      <Flex style={{ width: 300 }}>
        <Flex flex="1 0 auto">
          <Box style={{ width: "100%" }} border>
            First
          </Box>
        </Flex>
        <Flex flex="0 0 auto">
          <Box style={{ width: "100%" }} border>
            Second
          </Box>
        </Flex>
        <Flex flex="0 0 auto">
          <Box style={{ width: "100%" }} border>
            Third
          </Box>
        </Flex>
      </Flex>
      <Text type="text1" weight="medium" ellipsis={false}>
        Third item grows
      </Text>
      <Flex style={{ width: 300 }}>
        <Flex flex="0 0 auto">
          <Box style={{ width: "100%" }} border>
            First
          </Box>
        </Flex>
        <Flex flex="0 0 auto">
          <Box style={{ width: "100%" }} border>
            Second
          </Box>
        </Flex>
        <Flex flex="1 0 auto">
          <Box style={{ width: "100%" }} border>
            Third
          </Box>
        </Flex>
      </Flex>
    </div>
  ),

  name: "Horizontal layout using flex shorthand"
};

export const VerticalSpacingBetweenItems = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "120px" }}>
        <Text align="center" type="text1" weight="medium" ellipsis={false}>
          No spacing between items
        </Text>
        <Flex direction="column">
          <Box padding="large" border />
          <Box padding="large" border />
          <Box padding="large" border />
        </Flex>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "120px" }}>
        <Text align="center" type="text1" weight="medium" ellipsis={false}>
          Extra small spacing between items
        </Text>
        <Flex gap="xs" direction="column">
          <Box padding="large" border />
          <Box padding="large" border />
          <Box padding="large" border />
        </Flex>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "120px" }}>
        <Text align="center" type="text1" weight="medium" ellipsis={false}>
          Small spacing between items
        </Text>
        <Flex gap="small" direction="column">
          <Box padding="large" border />
          <Box padding="large" border />
          <Box padding="large" border />
        </Flex>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "120px" }}>
        <Text align="center" type="text1" weight="medium" ellipsis={false}>
          Medium spacing between items
        </Text>
        <Flex gap="medium" direction="column">
          <Box padding="large" border />
          <Box padding="large" border />
          <Box padding="large" border />
        </Flex>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "120px" }}>
        <Text align="center" type="text1" weight="medium" ellipsis={false}>
          Large spacing between items
        </Text>
        <Flex gap="large" direction="column">
          <Box padding="large" border />
          <Box padding="large" border />
          <Box padding="large" border />
        </Flex>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "120px" }}>
        <Text align="center" type="text1" weight="medium" ellipsis={false}>
          Custom spacing between items
        </Text>
        <Flex gap={32} direction="column">
          <Box padding="large" border />
          <Box padding="large" border />
          <Box padding="large" border />
        </Flex>
      </div>
    </div>
  )
};

export const VerticalFlex = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "120px" }}>
        <Text align="center" type="text1" weight="medium" ellipsis={false}>
          Equal size
        </Text>
        <Flex direction="column" style={{ height: 300 }}>
          <Flex flex={{ grow: 1, shrink: 1, basis: "auto" }}>
            <Box style={{ height: "100%", width: "100%" }} padding="medium" border>
              First
            </Box>
          </Flex>
          <Flex flex={{ grow: 1, shrink: 1, basis: "auto" }}>
            <Box style={{ height: "100%", width: "100%" }} padding="medium" border>
              Second
            </Box>
          </Flex>
          <Flex flex={{ grow: 1, shrink: 1, basis: "auto" }}>
            <Box style={{ height: "100%", width: "100%" }} padding="medium" border>
              Third
            </Box>
          </Flex>
        </Flex>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "120px" }}>
        <Text align="center" type="text1" weight="medium" ellipsis={false}>
          First item grows
        </Text>
        <Flex direction="column" style={{ height: 300 }}>
          <Flex flex={{ grow: 1, shrink: 1, basis: "auto" }}>
            <Box style={{ height: "100%", width: "100%" }} padding="medium" border>
              First
            </Box>
          </Flex>
          <Flex flex={{ grow: 0, shrink: 1, basis: "auto" }}>
            <Box style={{ height: "100%", width: "100%" }} padding="medium" border>
              Second
            </Box>
          </Flex>
          <Flex flex={{ grow: 0, shrink: 1, basis: "auto" }}>
            <Box style={{ height: "100%", width: "100%" }} padding="medium" border>
              Third
            </Box>
          </Flex>
        </Flex>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "120px" }}>
        <Text align="center" type="text1" weight="medium" ellipsis={false}>
          Third item grows
        </Text>
        <Flex direction="column" style={{ height: 300 }}>
          <Flex flex={{ grow: 0, shrink: 1, basis: "auto" }}>
            <Box style={{ height: "100%", width: "100%" }} padding="medium" border>
              First
            </Box>
          </Flex>
          <Flex flex={{ grow: 0, shrink: 1, basis: "auto" }}>
            <Box style={{ height: "100%", width: "100%" }} padding="medium" border>
              Second
            </Box>
          </Flex>
          <Flex flex={{ grow: 1, shrink: 1, basis: "auto" }}>
            <Box style={{ height: "100%", width: "100%" }} padding="medium" border>
              Third
            </Box>
          </Flex>
        </Flex>
      </div>
    </div>
  ),

  name: "Vertical layout using flex"
};

export const VerticalFlexWithFlexShorthand = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "120px" }}>
        <Text align="center" type="text1" weight="medium" ellipsis={false}>
          Equal size
        </Text>
        <Flex direction="column" style={{ height: 300 }}>
          <Flex flex="1 1 auto">
            <Box style={{ height: "100%", width: "100%" }} border>
              First
            </Box>
          </Flex>
          <Flex flex="1 1 auto">
            <Box style={{ height: "100%", width: "100%" }} border>
              Second
            </Box>
          </Flex>
          <Flex flex="1 1 auto">
            <Box style={{ height: "100%", width: "100%" }} border>
              Third
            </Box>
          </Flex>
        </Flex>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "120px" }}>
        <Text align="center" type="text1" weight="medium" ellipsis={false}>
          First item grows
        </Text>
        <Flex direction="column" style={{ height: 300 }}>
          <Flex flex="1 0 auto">
            <Box style={{ height: "100%", width: "100%" }} border>
              First
            </Box>
          </Flex>
          <Flex flex="0 1 auto">
            <Box style={{ height: "100%", width: "100%" }} border>
              Second
            </Box>
          </Flex>
          <Flex flex="0 1 auto">
            <Box style={{ height: "100%", width: "100%" }} border>
              Third
            </Box>
          </Flex>
        </Flex>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "120px" }}>
        <Text align="center" type="text1" weight="medium" ellipsis={false}>
          Third item grows
        </Text>
        <Flex direction="column" style={{ height: 300 }}>
          <Flex flex="0 1 auto">
            <Box style={{ height: "100%", width: "100%" }} border>
              First
            </Box>
          </Flex>
          <Flex flex="0 1 auto">
            <Box style={{ height: "100%", width: "100%" }} border>
              Second
            </Box>
          </Flex>
          <Flex flex="1 0 auto">
            <Box style={{ height: "100%", width: "100%" }} border>
              Third
            </Box>
          </Flex>
        </Flex>
      </div>
    </div>
  ),

  name: "Vertical layout using flex shorthand"
};

export const HorizontalPositions = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "120px 1fr",
        alignItems: "center",
        gap: "var(--space-24) var(--space-16)",
        flex: 1
      }}
    >
      <Text type="text1" weight="medium" ellipsis={false}>
        Start position
      </Text>
      <Flex
        justify="start"
        style={{
          width: "100%"
        }}
      >
        <Box padding="large" border />
        <Box padding="large" border />
        <Box padding="large" border />
      </Flex>
      <Text type="text1" weight="medium" ellipsis={false}>
        Center position
      </Text>
      <Flex
        justify="center"
        style={{
          width: "100%"
        }}
      >
        <Box padding="large" border />
        <Box padding="large" border />
        <Box padding="large" border />
      </Flex>
      <Text type="text1" weight="medium" ellipsis={false}>
        End position
      </Text>
      <Flex
        justify="end"
        style={{
          width: "100%"
        }}
      >
        <Box padding="large" border />
        <Box padding="large" border />
        <Box padding="large" border />
      </Flex>
      <Text type="text1" weight="medium" ellipsis={false}>
        Space between position
      </Text>
      <Flex
        justify="space-between"
        style={{
          width: "100%"
        }}
      >
        <Box padding="large" border />
        <Box padding="large" border />
        <Box padding="large" border />
      </Flex>
      <Text type="text1" weight="medium" ellipsis={false}>
        Space around position
      </Text>
      <Flex
        justify="space-around"
        style={{
          width: "100%"
        }}
      >
        <Box padding="large" border />
        <Box padding="large" border />
        <Box padding="large" border />
      </Flex>
    </div>
  )
};

export const VerticalPositions = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "120px" }}>
        <Text align="center" type="text1" weight="medium" ellipsis={false}>
          Start position
        </Text>
        <Flex
          justify="start"
          style={{
            height: "300px"
          }}
          direction="column"
        >
          <Box padding="large" border />
          <Box padding="large" border />
          <Box padding="large" border />
        </Flex>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "120px" }}>
        <Text align="center" type="text1" weight="medium" ellipsis={false}>
          Center position
        </Text>
        <Flex
          justify="center"
          style={{
            height: "300px"
          }}
          direction="column"
        >
          <Box padding="large" border />
          <Box padding="large" border />
          <Box padding="large" border />
        </Flex>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "120px" }}>
        <Text align="center" type="text1" weight="medium" ellipsis={false}>
          End position
        </Text>
        <Flex
          justify="end"
          style={{
            height: "300px"
          }}
          direction="column"
        >
          <Box padding="large" border />
          <Box padding="large" border />
          <Box padding="large" border />
        </Flex>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "120px" }}>
        <Text align="center" type="text1" weight="medium" ellipsis={false}>
          Space between position
        </Text>
        <Flex
          justify="space-between"
          style={{
            height: "300px"
          }}
          direction="column"
        >
          <Box padding="large" border />
          <Box padding="large" border />
          <Box padding="large" border />
        </Flex>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "120px" }}>
        <Text align="center" type="text1" weight="medium" ellipsis={false}>
          Space around position
        </Text>
        <Flex
          justify="space-around"
          style={{
            height: "300px"
          }}
          direction="column"
        >
          <Box padding="large" border />
          <Box padding="large" border />
          <Box padding="large" border />
        </Flex>
      </div>
    </div>
  )
};

export const SupportMultiLinesLayout = {
  render: () => (
    <Flex
      wrap
      style={{
        width: "300px"
      }}
      gap="small"
    >
      <Chips noMargin label="Chip 1" />
      <Chips noMargin label="Chip 2" />
      <Chips noMargin label="Chip 3" />
      <Chips noMargin label="Chip 4" />
      <Chips noMargin label="Chip 5" />
      <Chips noMargin label="Chip 6" />
      <Chips noMargin label="Chip 7" />
    </Flex>
  )
};

export const FlexAsToolbarContainer = {
  render: () => (
    <Flex gap="small">
      <Button leftIcon={Add}>Add</Button>
      <Button kind="tertiary" leftIcon={Search}>
        Search
      </Button>
      <Button kind="tertiary" leftIcon={Person}>
        Person
      </Button>
      <Button kind="tertiary" leftIcon={Filter}>
        Filter
      </Button>
      <Button kind="tertiary" leftIcon={Sort}>
        Sort
      </Button>
    </Flex>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { Add, Filter, Person, Search, Sort }
      }
    }
  }
};
