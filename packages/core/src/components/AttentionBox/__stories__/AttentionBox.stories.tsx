import React from "react";
import { useCallback } from "react";
import AttentionBox from "../AttentionBox";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate, StoryDescription } from "vibe-storybook-components";
import DialogContentContainer from "../../DialogContentContainer/DialogContentContainer";
import { Info, Invite, ThumbsUp } from "../../Icon/Icons";
import Icon from "../../Icon/Icon";
import Search from "../../Search/Search";
import Avatar from "../../Avatar/Avatar";
import person from "./assets/person.png";
import Flex from "../../Flex/Flex";
import Favorite from "../../Icon/Icons/components/Favorite";
import AttentionBoxLink from "../AttentionBoxLink/AttentionBoxLink";
import "./AttentionBox.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: AttentionBox,
  enumPropNamesArray: ["type", "iconType"],
  iconPropNamesArray: ["icon"],
  actionPropsArray: ["onClose"]
});

const attentionBoxTemplate = createComponentTemplate(AttentionBox);

export default {
  title: "Feedback/AttentionBox",
  component: AttentionBox,
  subcomponents: {
    AttentionBoxLink
  },
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: attentionBoxTemplate.bind({}),
  name: "Overview",

  args: {
    onClose: () => {},
    title: "Attention box title",
    text: "Studies show that 100% of people who celebrate birthdays, will eventually die.",
    className: "monday-storybook-attention-box_box"
  }
};

export const States = {
  render: () => (
    <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.SMALL}>
      <StoryDescription description="Primary">
        <AttentionBox
          title="Enabling SSO Login"
          text="Will cause all your team lose access to the account until using the correct SSO source."
          className="monday-storybook-attention-box_box"
          icon={Info}
        />
      </StoryDescription>
      <StoryDescription description="Success">
        <AttentionBox
          title="You're doing great"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          type={AttentionBox.types.SUCCESS}
          className="monday-storybook-attention-box_box"
          icon={ThumbsUp}
        />
      </StoryDescription>
      <StoryDescription description="Danger">
        <AttentionBox
          title="Account low on free space"
          text="Your account is out of free space, free some space to prevent data loss."
          type={AttentionBox.types.DANGER}
          className="monday-storybook-attention-box_box"
        />
      </StoryDescription>
      <StoryDescription description="Warning">
        <AttentionBox
          title="Account low on free space"
          text="Your account is out of free space, free some space to prevent data loss."
          type={AttentionBox.types.WARNING}
          className="monday-storybook-attention-box_box"
        />
      </StoryDescription>
      <StoryDescription description="Dark">
        <AttentionBox
          title="What a great idea!"
          text="You can also make this list sortable by tagging the items with tags column"
          type={AttentionBox.types.DARK}
          className="monday-storybook-attention-box_box"
          icon={Favorite}
        />
      </StoryDescription>
    </Flex>
  ),

  name: "States"
};

export const AttentionBoxWithLink = {
  render: () => {
    return (
      /** Classname for setting a constant width to the attention box */
      <AttentionBox compact className="monday-storybook-attention-box--fixed-width">
        <Flex justify={Flex.justify.SPACE_BETWEEN} gap={Flex.gaps.XS}>
          Get your monday.com notifications
          <AttentionBoxLink href="" text="Learn more" />
        </Flex>
      </AttentionBox>
    );
  }
};

export const Dismissable = {
  render: () => {
    const mockOnClose = useCallback(() => null, []);

    return (
      <div className="monday-storybook-attention-box_row-wrapper">
        <AttentionBox
          title="Regular attention box"
          text="Dismissable attention box with two lines of content."
          onClose={mockOnClose}
          className="monday-storybook-attention-box_box"
          icon={Info}
        />
        <AttentionBox
          text="Attention box in compact mode"
          onClose={mockOnClose}
          compact
          className="monday-storybook-attention-box_box"
        />
      </div>
    );
  },

  name: "Dismissable "
};

export const NaturalAttentionBox = {
  render: () => (
    <div className="monday-storybook-attention-box_wrapper">
      <span className="monday-storybook-attention-box_title">Cross-Account Copier</span>
      <span className="monday-storybook-attention-box_text">Copy boards and dashboards to another account</span>
      <AttentionBox
        compact
        withIconWithoutHeader
        icon={Info}
        text="First, move the content you want to copy into folder. Only main boards and dashboards can be copied."
        type={AttentionBox.types.DARK}
      />
    </div>
  ),

  name: "Natural attention box"
};

export const AttentionBoxInsideADialogCombobox = {
  render: () => {
    const mockOnClose = useCallback(() => null, []);

    return (
      <DialogContentContainer className="monday-storybook-attention-box_search-bar">
        <Search placeholder="Search by name, role, team, or email" />
        <div className="monday-storybook-attention-box_lable">Suggested people</div>
        <div className="monday-storybook-attention-box_search">
          <div className="monday-storybook-attention-box_inline-container">
            <Avatar size={Avatar.sizes.MEDIUM} src={person} type={Avatar.types.IMG} />
            <span className="monday-storybook-attention-box_name">
              May Kishon <span>(UX/UI Product Designer)</span>
            </span>
          </div>
          <div className="monday-storybook-attention-box_inline-container">
            <Icon iconSize="24" icon={Invite} className="monday-storybook-attention-box_icon" />
            <span className="monday-storybook-attention-box_name">Invite new board member by email</span>
          </div>
          <AttentionBox text="Hold ⌘ to select more than one person or team" compact onClose={mockOnClose} />
        </div>
      </DialogContentContainer>
    );
  },

  name: "Attention box inside a dialog/combobox"
};
