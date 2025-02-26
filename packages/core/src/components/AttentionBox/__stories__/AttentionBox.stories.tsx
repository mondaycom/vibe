import React, { useState } from "react";
import { useCallback } from "react";
import AttentionBox from "../AttentionBox";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate, StoryDescription } from "vibe-storybook-components";
import DialogContentContainer from "../../DialogContentContainer/DialogContentContainer";
import { Info, Invite, ThumbsUp, Favorite } from "@vibe/icons";
import Icon from "../../Icon/Icon";
import Search from "../../Search/Search";
import Avatar from "../../Avatar/Avatar";
import person from "./assets/person.png";
import Flex from "../../Flex/Flex";
import AttentionBoxLink from "../AttentionBoxLink/AttentionBoxLink";
import "./AttentionBox.stories.scss";
import Button from "../../Button/Button";

const metaSettings = createStoryMetaSettingsDecorator({
  component: AttentionBox,
  iconPropNamesArray: ["icon"],
  actionPropsArray: ["onClose"]
});

const attentionBoxTemplate = createComponentTemplate(AttentionBox);

export default {
  title: "Components/AttentionBox",
  component: AttentionBox,
  subcomponents: {
    AttentionBoxLink
  },
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators,
  parameters: {
    docs: {
      liveEdit: {
        scope: { Info }
      }
    }
  }
};

export const Overview = {
  render: attentionBoxTemplate.bind({}),
  name: "Overview",

  args: {
    onClose: () => {},
    title: "Attention box title",
    text: "Studies show that 100% of people who celebrate birthdays, will eventually die.",
    className: "monday-storybook-attention-box_box"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const States = {
  render: () => (
    <Flex direction="column" gap="small">
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
          type="success"
          className="monday-storybook-attention-box_box"
          icon={ThumbsUp}
        />
      </StoryDescription>
      <StoryDescription description="Danger">
        <AttentionBox
          title="Account low on free space"
          text="Your account is out of free space, free some space to prevent data loss."
          type="danger"
          className="monday-storybook-attention-box_box"
        />
      </StoryDescription>
      <StoryDescription description="Warning">
        <AttentionBox
          title="Account low on free space"
          text="Your account is out of free space, free some space to prevent data loss."
          type="warning"
          className="monday-storybook-attention-box_box"
          icon={Info}
        />
      </StoryDescription>
      <StoryDescription description="Dark">
        <AttentionBox
          title="What a great idea!"
          text="You can also make this list sortable by tagging the items with tags column"
          type="dark"
          className="monday-storybook-attention-box_box"
          icon={Favorite}
        />
      </StoryDescription>
    </Flex>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { StoryDescription, ThumbsUp, Favorite }
      }
    }
  }
};

export const AttentionBoxWithLink = {
  render: () => {
    return (
      /** Classname for setting a constant width to the attention box */
      <AttentionBox compact className="monday-storybook-attention-box--fixed-width">
        <Flex justify="space-between" gap="xs">
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
          className="monday-storybook-attention-box_dismissable"
          icon={Info}
        />
        <AttentionBox
          text="Attention box in compact mode"
          onClose={mockOnClose}
          compact
          className="monday-storybook-attention-box_dismissable"
        />
      </div>
    );
  }
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
        type="dark"
      />
    </div>
  )
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
            <Avatar size="medium" src={person} type="img" />
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
  parameters: {
    docs: {
      liveEdit: {
        scope: { person, Invite }
      }
    }
  },

  name: "Attention box inside a dialog/combobox"
};

export const AttentionBoxAnimation = {
  render: () => {
    const [isOpen, setOpen] = useState(false);
    const onClick = useCallback(() => {
      setOpen(true);
    }, []);
    return (
      <>
        <Flex
          gap={Flex.gaps.MEDIUM}
          style={{
            height: "44px"
          }}
        >
          <Button onClick={onClick} kind={Button.kinds.SECONDARY}>
            Entry animation
          </Button>
          {isOpen && (
            <AttentionBox
              compact
              withIconWithoutHeader
              entryAnimation
              icon={Info}
              text="First, move the content you want to copy into folder. Only main boards and dashboards can be copied."
              onClose={() => setOpen(false)}
            />
          )}
        </Flex>
      </>
    );
  },

  name: "Attention box inside a dialog/combobox"
};
