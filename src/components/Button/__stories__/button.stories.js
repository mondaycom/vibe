import React, { useCallback, useState } from "react";
import Button from "../Button";
import StoryStateColumn from "../../storybook-helpers/story-state-column/story-state-column";
import StoryStateRow from "../../storybook-helpers/story-states-row/story-states-row";
import DescriptionLabel from "../../storybook-helpers/description-label/description-label";
import { withPerformance } from "storybook-addon-performance";

export const DefaultStory = () => (
  <Button marginLeft marginRight>
    Button
  </Button>
);
export const PrimaryButton = () => (
  <section>
    <StoryStateRow>
      <StoryStateColumn
        title="Small"
        description="Small actions
Post, perly , copy, readmore."
      >
        <Button size={Button.sizes.SMALL}>Small</Button>
      </StoryStateColumn>
      <StoryStateColumn title="Medium" description="Regular actions">
        <Button size={Button.sizes.MEDIUM}>Medium</Button>
      </StoryStateColumn>
      <StoryStateColumn
        title="Large"
        description="Call for action
Marketing banners
Important updates."
      >
        <Button size={Button.sizes.LARGE}>Large</Button>
      </StoryStateColumn>
    </StoryStateRow>
    <DescriptionLabel>Disabled</DescriptionLabel>
    <StoryStateRow>
      <StoryStateColumn>
        <Button disabled size={Button.sizes.SMALL}>
          Small
        </Button>
      </StoryStateColumn>
      <StoryStateColumn>
        <Button disabled size={Button.sizes.MEDIUM}>
          Medium
        </Button>
      </StoryStateColumn>
      <StoryStateColumn>
        <Button disabled size={Button.sizes.LARGE}>
          Large
        </Button>
      </StoryStateColumn>
    </StoryStateRow>
  </section>
);

export const SecondaryButton = () => (
  <section>
    <StoryStateRow>
      <StoryStateColumn title="Small">
        <Button size={Button.sizes.SMALL} kind={Button.kinds.SECONDARY}>
          Small
        </Button>
      </StoryStateColumn>
      <StoryStateColumn title="Medium">
        <Button size={Button.sizes.MEDIUM} kind={Button.kinds.SECONDARY}>
          Medium
        </Button>
      </StoryStateColumn>
      <StoryStateColumn title="Large">
        <Button size={Button.sizes.LARGE} kind={Button.kinds.SECONDARY}>
          Large
        </Button>
      </StoryStateColumn>
    </StoryStateRow>
    <DescriptionLabel>Disabled</DescriptionLabel>
    <StoryStateRow>
      <StoryStateColumn>
        <Button disabled size={Button.sizes.SMALL} kind={Button.kinds.SECONDARY}>
          Small
        </Button>
      </StoryStateColumn>
      <StoryStateColumn>
        <Button disabled size={Button.sizes.MEDIUM} kind={Button.kinds.SECONDARY}>
          Medium
        </Button>
      </StoryStateColumn>
      <StoryStateColumn>
        <Button disabled size={Button.sizes.LARGE} kind={Button.kinds.SECONDARY}>
          Large
        </Button>
      </StoryStateColumn>
    </StoryStateRow>
  </section>
);

export const TertiaryButton = () => (
  <section>
    <StoryStateRow>
      <StoryStateColumn title="Small">
        <Button size={Button.sizes.SMALL} kind={Button.kinds.TERTIARY}>
          Small
        </Button>
      </StoryStateColumn>
      <StoryStateColumn title="Medium">
        <Button size={Button.sizes.MEDIUM} kind={Button.kinds.TERTIARY}>
          Medium
        </Button>
      </StoryStateColumn>
      <StoryStateColumn title="Large">
        <Button size={Button.sizes.LARGE} kind={Button.kinds.TERTIARY}>
          Large
        </Button>
      </StoryStateColumn>
    </StoryStateRow>
    <DescriptionLabel>Disabled</DescriptionLabel>
    <StoryStateRow>
      <StoryStateColumn>
        <Button size={Button.sizes.SMALL} kind={Button.kinds.TERTIARY} disabled>
          Small
        </Button>
      </StoryStateColumn>
      <StoryStateColumn>
        <Button size={Button.sizes.MEDIUM} kind={Button.kinds.TERTIARY} disabled>
          Medium
        </Button>
      </StoryStateColumn>
      <StoryStateColumn>
        <Button size={Button.sizes.LARGE} kind={Button.kinds.TERTIARY} disabled>
          Large
        </Button>
      </StoryStateColumn>
    </StoryStateRow>
  </section>
);

export const ActiveState = () => (
  <StoryStateRow>
    <StoryStateColumn title="Active Primary">
      <Button active size={Button.sizes.LARGE} kind={Button.kinds.PRIMARY}>
        Active Primary
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Active Secondary">
      <Button active size={Button.sizes.LARGE} kind={Button.kinds.SECONDARY}>
        Active Secondary
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Active Tertiary">
      <Button active size={Button.sizes.LARGE} kind={Button.kinds.TERTIARY}>
        Active Tertiary
      </Button>
    </StoryStateColumn>
  </StoryStateRow>
);

export const PositiveButtons = () => (
  <StoryStateRow>
    <StoryStateColumn title="Primary">
      <Button size={Button.sizes.LARGE} kind={Button.kinds.PRIMARY} color={Button.colors.POSITIVE}>
        Positive Primary
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Secondary">
      <Button size={Button.sizes.LARGE} kind={Button.kinds.SECONDARY} color={Button.colors.POSITIVE}>
        Positive Secondary
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Tertiary">
      <Button size={Button.sizes.LARGE} kind={Button.kinds.TERTIARY} color={Button.colors.POSITIVE}>
        Positive Tertiary
      </Button>
    </StoryStateColumn>
  </StoryStateRow>
);

export const NegativeButtons = () => (
  <StoryStateRow>
    <StoryStateColumn title="Primary">
      <Button size={Button.sizes.LARGE} kind={Button.kinds.PRIMARY} color={Button.colors.NEGATIVE}>
        Negative Primary
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Secondary">
      <Button size={Button.sizes.LARGE} kind={Button.kinds.SECONDARY} color={Button.colors.NEGATIVE}>
        Negative Secondary
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Tertiary">
      <Button size={Button.sizes.LARGE} kind={Button.kinds.TERTIARY} color={Button.colors.NEGATIVE}>
        Negative Tertiary
      </Button>
    </StoryStateColumn>
  </StoryStateRow>
);
export const OnColorButtons = () => (
  <>
    <div
      style={{
        backgroundColor: "var(--color-blackish)",
        borderRadius: "4px"
      }}
    >
      <StoryStateRow>
        <StoryStateColumn>
          <Button size={Button.sizes.LARGE} kind={Button.kinds.PRIMARY} color={Button.colors.ON_PRIMARY_COLOR}>
            On Primary Primary
          </Button>
        </StoryStateColumn>
        <StoryStateColumn>
          <Button size={Button.sizes.LARGE} kind={Button.kinds.SECONDARY} color={Button.colors.ON_PRIMARY_COLOR}>
            On Primary Secondary
          </Button>
        </StoryStateColumn>
        <StoryStateColumn>
          <Button size={Button.sizes.LARGE} kind={Button.kinds.TERTIARY} color={Button.colors.ON_PRIMARY_COLOR}>
            On Primary Tertiary
          </Button>
        </StoryStateColumn>
      </StoryStateRow>
    </div>
    <div
      style={{
        backgroundColor: "var(--color-dark-pink)",
        borderRadius: "4px",
        marginTop: "16px"
      }}
    >
      <StoryStateRow>
        <StoryStateColumn>
          <Button size={Button.sizes.LARGE} kind={Button.kinds.PRIMARY} color={Button.colors.ON_PRIMARY_COLOR}>
            On Primary Primary
          </Button>
        </StoryStateColumn>
        <StoryStateColumn>
          <Button size={Button.sizes.LARGE} kind={Button.kinds.SECONDARY} color={Button.colors.ON_PRIMARY_COLOR}>
            On Primary Secondary
          </Button>
        </StoryStateColumn>
        <StoryStateColumn>
          <Button size={Button.sizes.LARGE} kind={Button.kinds.TERTIARY} color={Button.colors.ON_PRIMARY_COLOR}>
            On Primary Tertiary
          </Button>
        </StoryStateColumn>
      </StoryStateRow>
    </div>
  </>
);

export const ButtonsWithIcons = () => (
  <StoryStateRow>
    <StoryStateColumn title="Left Icon">
      <Button
        size={Button.sizes.LARGE}
        kind={Button.kinds.PRIMARY}
        color={Button.colors.PRIMARY}
        leftIcon="fa fa-check"
      >
        Left Icon
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Right Icon">
      <Button
        size={Button.sizes.LARGE}
        kind={Button.kinds.PRIMARY}
        color={Button.colors.PRIMARY}
        rightIcon="fa fa-check"
      >
        Right Icon
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Only Icon">
      <Button
        size={Button.sizes.LARGE}
        kind={Button.kinds.PRIMARY}
        color={Button.colors.PRIMARY}
        rightIcon="fa fa-check"
      />
    </StoryStateColumn>
  </StoryStateRow>
);

export const SuccessText = () => (
  <StoryStateRow>
    <StoryStateColumn title="Success Text">
      <Button success size={Button.sizes.LARGE} kind={Button.kinds.PRIMARY} successText="Copied!">
        Success Text
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Success Icon">
      <Button success size={Button.sizes.LARGE} kind={Button.kinds.PRIMARY} successIcon="fa fa-check">
        Success icon
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Success Icon and Text">
      <Button
        success
        size={Button.sizes.LARGE}
        kind={Button.kinds.PRIMARY}
        successIcon="fa fa-check"
        successText="Copied!"
      >
        Success icon
      </Button>
    </StoryStateColumn>
  </StoryStateRow>
);

const LoadingButtonWrapper = ({ size, kind }) => {
  const [loading, setLoading] = useState(false);
  const onClick = useCallback(() => {
    setLoading(true);
  }, [setLoading]);

  const resetLoading = useCallback(() => {
    setLoading(false);
  }, [setLoading]);
  return (
    <div>
      <Button loading={true} size={size} kind={kind} onClick={onClick}>
        click here
      </Button>
      <br />
      <br />
      <Button loading={loading} size={size} kind={kind} onClick={onClick}>
        click here
      </Button>
      <br />
      <br />
      <Button onClick={resetLoading} kind={Button.kinds.TERTIARY} size={Button.sizes.SMALL}>
        Reset loading
      </Button>
      <br />
    </div>
  );
};

export const Loading = () => (
  <StoryStateRow>
    <StoryStateColumn title="Left Icon Large">
      <LoadingButtonWrapper size={Button.sizes.MEDIUM} kind={Button.kinds.PRIMARY} />
    </StoryStateColumn>
    <StoryStateColumn title="Left Icon Medium">
      <LoadingButtonWrapper size={Button.sizes.MEDIUM} kind={Button.kinds.SECONDARY} />
    </StoryStateColumn>
    <StoryStateColumn title="Left Icon Small">
      <LoadingButtonWrapper size={Button.sizes.MEDIUM} kind={Button.kinds.TERTIARY} />
    </StoryStateColumn>
  </StoryStateRow>
);

export default {
  title: "Components|Button",
  component: Button,
  decorators: [withPerformance]
};
