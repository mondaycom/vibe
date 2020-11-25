import React from "react";
import { boolean, select } from "@storybook/addon-knobs";
import SplitButton from "../SplitButton";
import { StoryStateColumn, StoryStateRow } from "../../storybook-helpers";
import StoryDialogContent from "../../Dialog/__stories__/StoryComponents/StoryDialogContent";
import DescriptionLabel from "../../storybook-helpers/description-label/description-label";

export const PrimaryButton = () => (
  <section>
    <StoryStateRow>
      <StoryStateColumn
        title="Small"
        description="Small actions
Post, perly , copy, readmore."
      >
        <SplitButton
          size={SplitButton.sizes.SMALL}
          secondaryDialogContent={<StoryDialogContent />}
          secondaryDialogClassName="dialog-class-name"
        >
          Small
        </SplitButton>
      </StoryStateColumn>
      <StoryStateColumn title="Medium" description="Regular actions">
        <SplitButton
          size={SplitButton.sizes.MEDIUM}
          secondaryDialogContent={<StoryDialogContent />}
        >
          Medium
        </SplitButton>
      </StoryStateColumn>
      <StoryStateColumn
        title="Large"
        description="Call for action
Marketing banners
Important updates."
      >
        <SplitButton
          size={SplitButton.sizes.LARGE}
          secondaryDialogContent={<StoryDialogContent />}
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
          secondaryDialogContent={<StoryDialogContent />}
        >
          Small
        </SplitButton>
      </StoryStateColumn>
      <StoryStateColumn>
        <SplitButton
          disabled
          size={SplitButton.sizes.MEDIUM}
          secondaryDialogContent={<StoryDialogContent />}
        >
          Medium
        </SplitButton>
      </StoryStateColumn>
      <StoryStateColumn>
        <SplitButton
          disabled
          size={SplitButton.sizes.LARGE}
          secondaryDialogContent={<StoryDialogContent />}
        >
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
          secondaryDialogContent={<StoryDialogContent />}
        >
          Small
        </SplitButton>
      </StoryStateColumn>
      <StoryStateColumn title="Medium">
        <SplitButton
          size={SplitButton.sizes.MEDIUM}
          kind={SplitButton.kinds.SECONDARY}
          secondaryDialogContent={<StoryDialogContent />}
        >
          Medium
        </SplitButton>
      </StoryStateColumn>
      <StoryStateColumn title="Large">
        <SplitButton
          size={SplitButton.sizes.LARGE}
          kind={SplitButton.kinds.SECONDARY}
          secondaryDialogContent={<StoryDialogContent />}
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
          secondaryDialogContent={<StoryDialogContent />}
        >
          Small
        </SplitButton>
      </StoryStateColumn>
      <StoryStateColumn>
        <SplitButton
          disabled
          size={SplitButton.sizes.MEDIUM}
          kind={SplitButton.kinds.SECONDARY}
          secondaryDialogContent={<StoryDialogContent />}
        >
          Medium
        </SplitButton>
      </StoryStateColumn>
      <StoryStateColumn>
        <SplitButton
          disabled
          size={SplitButton.sizes.LARGE}
          kind={SplitButton.kinds.SECONDARY}
          secondaryDialogContent={<StoryDialogContent />}
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
          secondaryDialogContent={<StoryDialogContent />}
        >
          Small
        </SplitButton>
      </StoryStateColumn>
      <StoryStateColumn title="Medium">
        <SplitButton
          size={SplitButton.sizes.MEDIUM}
          kind={SplitButton.kinds.TERTIARY}
          secondaryDialogContent={<StoryDialogContent />}
        >
          Medium
        </SplitButton>
      </StoryStateColumn>
      <StoryStateColumn title="Large">
        <SplitButton
          size={SplitButton.sizes.LARGE}
          kind={SplitButton.kinds.TERTIARY}
          secondaryDialogContent={<StoryDialogContent />}
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
          secondaryDialogContent={<StoryDialogContent />}
        >
          Small
        </SplitButton>
      </StoryStateColumn>
      <StoryStateColumn>
        <SplitButton
          disabled
          size={SplitButton.sizes.MEDIUM}
          kind={SplitButton.kinds.TERTIARY}
          secondaryDialogContent={<StoryDialogContent />}
        >
          Medium
        </SplitButton>
      </StoryStateColumn>
      <StoryStateColumn>
        <SplitButton
          disabled
          size={SplitButton.sizes.LARGE}
          kind={SplitButton.kinds.TERTIARY}
          secondaryDialogContent={<StoryDialogContent />}
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
        secondaryDialogContent={<StoryDialogContent />}
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
        secondaryDialogContent={<StoryDialogContent />}
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
        secondaryDialogContent={<StoryDialogContent />}
      />
    </StoryStateColumn>
  </StoryStateRow>
);

export const Sandbox = () => (
  <div>
    <SplitButton
      id="Knobs"
      size={select(
        "Size",
        Object.values(SplitButton.sizes),
        SplitButton.sizes.LARGE
      )}
      color={select(
        "Color",
        Object.values(SplitButton.colors),
        SplitButton.colors.PRIMARY
      )}
      kind={select(
        "Kind",
        Object.values(SplitButton.kinds),
        SplitButton.kinds.PRIMARY
      )}
      disabled={boolean("Disabled", false)}
      shouldCloseOnClickInsideDialog={boolean(
        "Should close dialog on click inside content",
        false
      )}
      secondaryDialogContent={<StoryDialogContent />}
    >
      Split Button
    </SplitButton>
  </div>
);

export default {
  title: "Components|SplitButton",
  component: SplitButton
};
