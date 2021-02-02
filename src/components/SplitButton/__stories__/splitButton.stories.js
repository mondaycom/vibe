import React from "react";
import { boolean, select } from "@storybook/addon-knobs";
import SplitButton from "../SplitButton";
import { StoryStateColumn, StoryStateRow } from "../../storybook-helpers";
import DescriptionLabel from "../../storybook-helpers/description-label/description-label";
import { Info } from "../../Icon/Icons";
import AttentionBox from "../../AttentionBox/AttentionBox";
import "./splitButton.stories.scss";
import { withPerformance } from "storybook-addon-performance";

function SecondaryContentComponent() {
  return <div className="split-button-story-content">I can be whatever i want to be!</div>;
}

export const PrimaryButton = () => (
  <section>
    <AttentionBox
      title="Split Button extends Button prop types"
      icon={Info}
      text="This component extends the button prop types - size and kind will be applied to both buttons, main and secondary other will be applied to the main button"
    />
    <StoryStateRow>
      <StoryStateColumn
        title="Small"
        description="Small actions
Post, perly , copy, readmore."
      >
        <SplitButton
          size={SplitButton.sizes.SMALL}
          secondaryDialogContent={<SecondaryContentComponent />}
          secondaryDialogClassName="dialog-class-name"
        >
          Small
        </SplitButton>
      </StoryStateColumn>
      <StoryStateColumn title="Medium" description="Regular actions">
        <SplitButton size={SplitButton.sizes.MEDIUM} secondaryDialogContent={<SecondaryContentComponent />}>
          Medium
        </SplitButton>
      </StoryStateColumn>
      <StoryStateColumn
        title="Large"
        description="Call for action
Marketing banners
Important updates."
      >
        <SplitButton size={SplitButton.sizes.LARGE} secondaryDialogContent={<SecondaryContentComponent />}>
          Large
        </SplitButton>
      </StoryStateColumn>
    </StoryStateRow>
    <DescriptionLabel>Disabled</DescriptionLabel>
    <StoryStateRow>
      <StoryStateColumn>
        <SplitButton disabled size={SplitButton.sizes.SMALL} secondaryDialogContent={<SecondaryContentComponent />}>
          Small
        </SplitButton>
      </StoryStateColumn>
      <StoryStateColumn>
        <SplitButton disabled size={SplitButton.sizes.MEDIUM} secondaryDialogContent={<SecondaryContentComponent />}>
          Medium
        </SplitButton>
      </StoryStateColumn>
      <StoryStateColumn>
        <SplitButton disabled size={SplitButton.sizes.LARGE} secondaryDialogContent={<SecondaryContentComponent />}>
          Large
        </SplitButton>
      </StoryStateColumn>
    </StoryStateRow>
  </section>
);

export const SecondaryButton = () => (
  <section>
    <StoryStateRow>
      <StoryStateColumn title="Small">
        <SplitButton
          size={SplitButton.sizes.SMALL}
          kind={SplitButton.kinds.SECONDARY}
          secondaryDialogContent={<SecondaryContentComponent />}
        >
          Small
        </SplitButton>
      </StoryStateColumn>
      <StoryStateColumn title="Medium">
        <SplitButton
          size={SplitButton.sizes.MEDIUM}
          kind={SplitButton.kinds.SECONDARY}
          secondaryDialogContent={<SecondaryContentComponent />}
        >
          Medium
        </SplitButton>
      </StoryStateColumn>
      <StoryStateColumn title="Large">
        <SplitButton
          size={SplitButton.sizes.LARGE}
          kind={SplitButton.kinds.SECONDARY}
          secondaryDialogContent={<SecondaryContentComponent />}
        >
          Large
        </SplitButton>
      </StoryStateColumn>
    </StoryStateRow>
    <DescriptionLabel>Disabled</DescriptionLabel>
    <StoryStateRow>
      <StoryStateColumn>
        <SplitButton
          disabled
          size={SplitButton.sizes.SMALL}
          kind={SplitButton.kinds.SECONDARY}
          secondaryDialogContent={<SecondaryContentComponent />}
        >
          Small
        </SplitButton>
      </StoryStateColumn>
      <StoryStateColumn>
        <SplitButton
          disabled
          size={SplitButton.sizes.MEDIUM}
          kind={SplitButton.kinds.SECONDARY}
          secondaryDialogContent={<SecondaryContentComponent />}
        >
          Medium
        </SplitButton>
      </StoryStateColumn>
      <StoryStateColumn>
        <SplitButton
          disabled
          size={SplitButton.sizes.LARGE}
          kind={SplitButton.kinds.SECONDARY}
          secondaryDialogContent={<SecondaryContentComponent />}
        >
          Large
        </SplitButton>
      </StoryStateColumn>
    </StoryStateRow>
  </section>
);

export const TertiaryButton = () => (
  <section>
    <StoryStateRow>
      <StoryStateColumn title="Small">
        <SplitButton
          size={SplitButton.sizes.SMALL}
          kind={SplitButton.kinds.TERTIARY}
          secondaryDialogContent={<SecondaryContentComponent />}
        >
          Small
        </SplitButton>
      </StoryStateColumn>
      <StoryStateColumn title="Medium">
        <SplitButton
          size={SplitButton.sizes.MEDIUM}
          kind={SplitButton.kinds.TERTIARY}
          secondaryDialogContent={<SecondaryContentComponent />}
        >
          Medium
        </SplitButton>
      </StoryStateColumn>
      <StoryStateColumn title="Large">
        <SplitButton
          size={SplitButton.sizes.LARGE}
          kind={SplitButton.kinds.TERTIARY}
          secondaryDialogContent={<SecondaryContentComponent />}
        >
          Large
        </SplitButton>
      </StoryStateColumn>
    </StoryStateRow>
    <DescriptionLabel>Disabled</DescriptionLabel>
    <StoryStateRow>
      <StoryStateColumn>
        <SplitButton
          disabled
          size={SplitButton.sizes.SMALL}
          kind={SplitButton.kinds.TERTIARY}
          secondaryDialogContent={<SecondaryContentComponent />}
        >
          Small
        </SplitButton>
      </StoryStateColumn>
      <StoryStateColumn>
        <SplitButton
          disabled
          size={SplitButton.sizes.MEDIUM}
          kind={SplitButton.kinds.TERTIARY}
          secondaryDialogContent={<SecondaryContentComponent />}
        >
          Medium
        </SplitButton>
      </StoryStateColumn>
      <StoryStateColumn>
        <SplitButton
          disabled
          size={SplitButton.sizes.LARGE}
          kind={SplitButton.kinds.TERTIARY}
          secondaryDialogContent={<SecondaryContentComponent />}
        >
          Large
        </SplitButton>
      </StoryStateColumn>
    </StoryStateRow>
  </section>
);

export const SplitButtonsWithIcons = () => (
  <StoryStateRow>
    <StoryStateColumn title="Left Icon">
      <SplitButton
        size={SplitButton.sizes.LARGE}
        kind={SplitButton.kinds.PRIMARY}
        color={SplitButton.colors.PRIMARY}
        leftIcon="fa fa-check"
        secondaryDialogContent={<SecondaryContentComponent />}
      >
        Left Icon
      </SplitButton>
    </StoryStateColumn>
    <StoryStateColumn title="Right Icon">
      <SplitButton
        size={SplitButton.sizes.LARGE}
        kind={SplitButton.kinds.PRIMARY}
        color={SplitButton.colors.PRIMARY}
        rightIcon="fa fa-check"
        secondaryDialogContent={<SecondaryContentComponent />}
      >
        Right Icon
      </SplitButton>
    </StoryStateColumn>
    <StoryStateColumn title="Only Icon">
      <SplitButton
        size={SplitButton.sizes.LARGE}
        kind={SplitButton.kinds.PRIMARY}
        color={SplitButton.colors.PRIMARY}
        rightIcon="fa fa-check"
        secondaryDialogContent={<SecondaryContentComponent />}
      />
    </StoryStateColumn>
  </StoryStateRow>
);

export const Sandbox = () => (
  <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
    <SplitButton
      id="Knobs"
      size={select("Size", Object.values(SplitButton.sizes), SplitButton.sizes.LARGE)}
      color={select("Color", Object.values(SplitButton.colors), SplitButton.colors.PRIMARY)}
      kind={select("Kind", Object.values(SplitButton.kinds), SplitButton.kinds.PRIMARY)}
      secondaryDialogPosition={select("Seconday Dialog Alignment", {
        BOTTOM_START: SplitButton.secondaryPositions.BOTTOM_START,
        BOTTOM_MIDDLE: SplitButton.secondaryPositions.BOTTOM_MIDDLE,
        BOTTOM_END: SplitButton.secondaryPositions.BOTTOM_END
      })}
      disabled={boolean("Disabled", false)}
      shouldCloseOnClickInsideDialog={boolean("Should close dialog on click inside content", false)}
      secondaryDialogContent={<SecondaryContentComponent />}
    >
      Split Button
    </SplitButton>
  </div>
);

export default {
  title: "Components|SplitButton",
  component: SplitButton,
  decorators: [withPerformance]
};
