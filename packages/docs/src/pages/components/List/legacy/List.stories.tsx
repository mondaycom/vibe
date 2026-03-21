import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemAvatar,
  type ListProps,
  Flex,
  ListTitle,
  DialogContentContainer
} from "@vibe/core";
import { Board, Team, ThumbsUp } from "@vibe/icons";
import { useCallback } from "react";
import { StoryDescription } from "vibe-storybook-components";
import { createStoryMetaSettingsDecorator } from "../../../../utils/createStoryMetaSettingsDecorator";
import person1 from "../../Avatar/assets/person1.png";
import person2 from "../../Avatar/assets/person2.png";
import person3 from "../../Avatar/assets/person3.png";

const metaSettings = createStoryMetaSettingsDecorator({
  component: List
});

export default {
  title: "Components/List/List",
  component: List,
  subcomponents: {
    ListItem,
    ListItemIcon,
    ListItemAvatar
  },
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const listTemplate = (args: ListProps) => {
  const onClick = useCallback(() => alert("On click!"), []);
  return (
    <List {...args}>
      <ListItem onClick={onClick}>Board Power up</ListItem>
      <ListItem onClick={onClick}>Team Power up</ListItem>
      <ListItem onClick={onClick}>Essentials</ListItem>
    </List>
  );
};

export const Overview = {
  render: listTemplate.bind({}),
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

export const ListWithCategories = {
  render: () => (
    <List>
      <ListTitle>First category</ListTitle>
      <ListItem>List item 1</ListItem>
      <ListItem>List item 2</ListItem>
      <ListTitle>Second category</ListTitle>
      <ListItem>List item 3</ListItem>
      <ListItem>List item 4</ListItem>
    </List>
  )
};

export const ListWithIcons = {
  render: () => (
    <List>
      <ListItem id="list-1">
        <ListItemIcon icon={Board} />
        List item 1
      </ListItem>
      <ListItem id="list-2">
        <ListItemIcon icon={Team} />
        List item 2
      </ListItem>
      <ListItem id="list-3">
        <ListItemIcon icon={ThumbsUp} />
        List item 3
      </ListItem>
    </List>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { Board, Team, ThumbsUp }
      }
    }
  }
};

export const ListWithAvatars = {
  render: () => (
    <List>
      <ListItem id="list-1">
        <ListItemAvatar src={person1} />
        List item 1
      </ListItem>
      <ListItem id="list-2">
        <ListItemAvatar src={person2} />
        List item 2
      </ListItem>
      <ListItem id="list-3">
        <ListItemAvatar src={person3} />
        List item 3
      </ListItem>
    </List>
  ),

  parameters: {
    docs: {
      liveEdit: {
        scope: { person1, person2, person3 }
      }
    }
  }
};

export const ListWithVirtualizationOptimization = {
  render: () => (
    <Flex
      align="start"
      gap="large"
      style={{
        width: "100%"
      }}
      direction="column"
    >
      <StoryDescription description="Regular">
        <DialogContentContainer
          style={{
            height: "162px",
            width: "200px"
          }}
        >
          <List
            renderOnlyVisibleItems
            style={{
              height: "100%",
              width: "100%"
            }}
          >
            <ListItem>List item 1</ListItem>
            <ListItem>List item 2</ListItem>
            <ListItem>List item 3</ListItem>
            <ListItem>List item 4</ListItem>
            <ListItem>List item 5</ListItem>
            <ListItem>List item 6</ListItem>
            <ListItem>List item 7</ListItem>
            <ListItem>List item 8</ListItem>
            <ListItem>List item 9</ListItem>
            <ListItem>List item 10</ListItem>
            <ListItem>List item 11</ListItem>
            <ListItem>List item 12</ListItem>
          </List>
        </DialogContentContainer>
      </StoryDescription>
      <StoryDescription description="With categories">
        <DialogContentContainer
          style={{
            height: "159px",
            width: "200px"
          }}
        >
          <List
            renderOnlyVisibleItems
            style={{
              height: "100%",
              width: "100%"
            }}
          >
            <ListTitle>First category</ListTitle>
            <ListItem>List item 1</ListItem>
            <ListItem>List item 2</ListItem>
            <ListTitle>Second category</ListTitle>
            <ListItem>List item 3</ListItem>
            <ListItem>List item 4</ListItem>
            <ListItem>List item 5</ListItem>
            <ListItem>List item 6</ListItem>
            <ListItem>List item 7</ListItem>
            <ListItem>List item 8</ListItem>
            <ListItem>List item 9</ListItem>
            <ListItem>List item 10</ListItem>
            <ListItem>List item 11</ListItem>
            <ListItem>List item 12</ListItem>
          </List>
        </DialogContentContainer>
      </StoryDescription>
    </Flex>
  ),

  parameters: {
    docs: {
      liveEdit: {
        scope: { StoryDescription }
      }
    }
  }
};
