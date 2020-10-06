import React, { useCallback, useState } from "react";
import Button from "../Button";
import StoryStateColumn from "../../storybook-helpers/story-state-column/story-state-column";
import StoryStateRow from "../../storybook-helpers/story-states-row/story-states-row";

export const DefaultStory = () => (
  <Button marginLeft marginRight>
    Button
  </Button>
);
export const Sizes = () => (
  <StoryStateRow>
    <StoryStateColumn title="Primary Small Button">
      <Button size={Button.sizes.SMALL}>Small</Button>
    </StoryStateColumn>
    <StoryStateColumn title="Primary Medium Button">
      <Button size={Button.sizes.MEDIUM}>Medium</Button>
    </StoryStateColumn>
    <StoryStateColumn title="Primary Large Button">
      <Button size={Button.sizes.LARGE}>Large</Button>
    </StoryStateColumn>
  </StoryStateRow>
);

export const Disabled = () => (
  <StoryStateRow>
    <StoryStateColumn title="Primary Small Button Disabled">
      <Button disabled size={Button.sizes.SMALL}>
        Small
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Primary Medium Button Disabled">
      <Button disabled size={Button.sizes.MEDIUM}>
        Medium
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Primary Large Button Disabled">
      <Button disabled size={Button.sizes.LARGE}>
        Large
      </Button>
    </StoryStateColumn>
  </StoryStateRow>
);

export const SecondaryButton = () => (
  <StoryStateRow>
    <StoryStateColumn title="Secondary Small Button">
      <Button size={Button.sizes.SMALL} kind={Button.kinds.SECONDARY}>
        Small
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Secondary Medium Button">
      <Button size={Button.sizes.MEDIUM} kind={Button.kinds.SECONDARY}>
        Medium
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Secondary Large Button">
      <Button size={Button.sizes.LARGE} kind={Button.kinds.SECONDARY}>
        Large
      </Button>
    </StoryStateColumn>
  </StoryStateRow>
);

export const DisabledSecondaryButton = () => (
  <StoryStateRow>
    <StoryStateColumn title="Secondary Small Button Disabled">
      <Button disabled size={Button.sizes.SMALL} kind={Button.kinds.SECONDARY}>
        Small
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Secondary Medium Button Disabled">
      <Button disabled size={Button.sizes.MEDIUM} kind={Button.kinds.SECONDARY}>
        Medium
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Secondary Large Button Disabled">
      <Button disabled size={Button.sizes.LARGE} kind={Button.kinds.SECONDARY}>
        Large
      </Button>
    </StoryStateColumn>
  </StoryStateRow>
);

export const TertiaryButton = () => (
  <StoryStateRow>
    <StoryStateColumn title="Tertiary Small Button">
      <Button size={Button.sizes.SMALL} kind={Button.kinds.TERTIARY}>
        Small
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Tertiary Medium Button">
      <Button size={Button.sizes.MEDIUM} kind={Button.kinds.TERTIARY}>
        Medium
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Tertiary Large Button">
      <Button size={Button.sizes.LARGE} kind={Button.kinds.TERTIARY}>
        Large
      </Button>
    </StoryStateColumn>
  </StoryStateRow>
);

export const TertiaryButtonDisabled = () => (
  <StoryStateRow>
    <StoryStateColumn title="Tertiary Small Button">
      <Button size={Button.sizes.SMALL} kind={Button.kinds.TERTIARY} disabled>
        Small
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Tertiary Medium Button">
      <Button size={Button.sizes.MEDIUM} kind={Button.kinds.TERTIARY} disabled>
        Medium
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Tertiary Large Button">
      <Button size={Button.sizes.LARGE} kind={Button.kinds.TERTIARY} disabled>
        Large
      </Button>
    </StoryStateColumn>
  </StoryStateRow>
);

export const ActiveState = () => (
  <StoryStateRow>
    <StoryStateColumn title="Active Primary">
      <Button active size={Button.sizes.LARGE} kind={Button.kinds.PRIMARY}>
        Positive Primary
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Active Secondary">
      <Button active size={Button.sizes.LARGE} kind={Button.kinds.SECONDARY}>
        Positive Secondary
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Active Tertiary">
      <Button active size={Button.sizes.LARGE} kind={Button.kinds.TERTIARY}>
        Positive Tertiary
      </Button>
    </StoryStateColumn>
  </StoryStateRow>
);

export const PositiveButtons = () => (
  <StoryStateRow>
    <StoryStateColumn title="Positive Primary">
      <Button
        size={Button.sizes.LARGE}
        kind={Button.kinds.PRIMARY}
        color={Button.colors.POSITIVE}
      >
        Positive Primary
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Positive Secondary">
      <Button
        size={Button.sizes.LARGE}
        kind={Button.kinds.SECONDARY}
        color={Button.colors.POSITIVE}
      >
        Positive Secondary
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Positive Tertiary">
      <Button
        size={Button.sizes.LARGE}
        kind={Button.kinds.TERTIARY}
        color={Button.colors.POSITIVE}
      >
        Positive Tertiary
      </Button>
    </StoryStateColumn>
  </StoryStateRow>
);

export const NegativeButtons = () => (
  <StoryStateRow>
    <StoryStateColumn title="Negative Primary">
      <Button
        size={Button.sizes.LARGE}
        kind={Button.kinds.PRIMARY}
        color={Button.colors.NEGATIVE}
      >
        Negative Primary
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Negative Secondary">
      <Button
        size={Button.sizes.LARGE}
        kind={Button.kinds.SECONDARY}
        color={Button.colors.NEGATIVE}
      >
        Negative Secondary
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Negative Tertiary">
      <Button
        size={Button.sizes.LARGE}
        kind={Button.kinds.TERTIARY}
        color={Button.colors.NEGATIVE}
      >
        Negative Tertiary
      </Button>
    </StoryStateColumn>
  </StoryStateRow>
);
export const OnColorButtons = () => (
  <div
    style={{
      backgroundColor: "var(--primary-color)",
      borderRadius: "4px",
      color: "var(--primary-color)"
    }}
  >
    <StoryStateRow>
      <StoryStateColumn>
        <Button
          size={Button.sizes.LARGE}
          kind={Button.kinds.PRIMARY}
          color={Button.colors.ON_PRIMARY_COLOR}
        >
          On Primary Primary
        </Button>
      </StoryStateColumn>
      <StoryStateColumn>
        <Button
          size={Button.sizes.LARGE}
          kind={Button.kinds.SECONDARY}
          color={Button.colors.ON_PRIMARY_COLOR}
        >
          On Primary Secondary
        </Button>
      </StoryStateColumn>
      <StoryStateColumn>
        <Button
          size={Button.sizes.LARGE}
          kind={Button.kinds.TERTIARY}
          color={Button.colors.ON_PRIMARY_COLOR}
        >
          On Primary Tertiary
        </Button>
      </StoryStateColumn>
    </StoryStateRow>
  </div>
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
    <StoryStateColumn title="Both Icons">
      <Button
        size={Button.sizes.LARGE}
        kind={Button.kinds.PRIMARY}
        color={Button.colors.PRIMARY}
        leftIcon="fa fa-check"
        rightIcon="fa fa-check"
      >
        Both Icon
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

export const IconSizes = () => (
  <StoryStateRow>
    <StoryStateColumn title="Icon Large">
      <Button
        size={Button.sizes.LARGE}
        kind={Button.kinds.PRIMARY}
        color={Button.colors.PRIMARY}
        leftIcon="fa fa-check"
      >
        Left Icon
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Icon Medium">
      <Button
        size={Button.sizes.MEDIUM}
        kind={Button.kinds.PRIMARY}
        color={Button.colors.PRIMARY}
        leftIcon="fa fa-check"
      >
        Left Icon
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Icon Small">
      <Button
        size={Button.sizes.SMALL}
        kind={Button.kinds.PRIMARY}
        color={Button.colors.PRIMARY}
        leftIcon="fa fa-check"
      >
        Left Icon
      </Button>
    </StoryStateColumn>
  </StoryStateRow>
);

export const SuccessText = () => (
  <StoryStateRow>
    <StoryStateColumn title="Success Text">
      <Button
        success
        size={Button.sizes.LARGE}
        kind={Button.kinds.PRIMARY}
        successText="Copied!"
      >
        Success Text
      </Button>
    </StoryStateColumn>
    <StoryStateColumn title="Success Icon">
      <Button
        success
        size={Button.sizes.LARGE}
        kind={Button.kinds.PRIMARY}
        successIcon="fa fa-check"
      >
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

function renderIcon() {
  return (
    <span className="intro-banner-vdo-play-btn greenBg">
      <span className="ripple greenBg" />
      <span className="ripple greenBg" />
      <span className="ripple greenBg" />
    </span>
  );
}

export const Custom = () => (
  <StoryStateRow>
    <StoryStateColumn title="Left Icon Large">
      <Button
        loading
        size={Button.sizes.MEDIUM}
        kind={Button.kinds.SECONDARY}
        leftIcon={renderIcon}
      >
        Loading
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
      <Button loading={loading} size={size} kind={kind} onClick={onClick}>
        click here
      </Button>
      <br />
      <br /> <Button onClick={resetLoading}>Reset loading</Button>
      <br />
      <br />
      <Button loading={true} size={size} kind={kind} onClick={onClick}>
        click here
      </Button>
      <br />
    </div>
  );
};

export const Loading = () => (
  <StoryStateRow>
    <StoryStateColumn title="Left Icon Large">
      <LoadingButtonWrapper
        size={Button.sizes.LARGE}
        kind={Button.kinds.PRIMARY}
      />
    </StoryStateColumn>
    <StoryStateColumn title="Left Icon Medium">
      <LoadingButtonWrapper
        size={Button.sizes.MEDIUM}
        kind={Button.kinds.PRIMARY}
      />
    </StoryStateColumn>
    <StoryStateColumn title="Left Icon Small">
      <LoadingButtonWrapper
        size={Button.sizes.SMALL}
        kind={Button.kinds.PRIMARY}
      />
    </StoryStateColumn>
  </StoryStateRow>
);

export default {
  title: "Components (WIP)/Button",
  component: Button
};
