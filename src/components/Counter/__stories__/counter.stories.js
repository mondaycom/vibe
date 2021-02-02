import React, { useCallback, useEffect, useState } from "react";
import Counter from "../Counter";
import { StoryStateColumn, StoryStateRow } from "../../storybook-helpers";
import { number, select } from "@storybook/addon-knobs";
import Notifications from "../../Icon/Icons/components/Notifications";
import "./counter.stories.scss";
import { withPerformance } from "storybook-addon-performance";

export const Fill = () => (
  <section>
    <StoryStateRow>
      <StoryStateColumn title="Large" />
    </StoryStateRow>
    <StoryStateRow>
      <StoryStateColumn title="Primary" description="Info counter">
        <Counter ariaLabel="primary counter" id="primary-id" />
      </StoryStateColumn>
      <StoryStateColumn title="Negative" description="Notifications">
        <Counter color={Counter.colors.NEGATIVE} ariaLabel="Negative counter" id="Negative-id" />
      </StoryStateColumn>
      <StoryStateColumn title="Dark" description="General">
        <Counter color={Counter.colors.DARK} ariaLabel="Dark counter" id="Dark-id" />
      </StoryStateColumn>
    </StoryStateRow>
    <StoryStateRow>
      <StoryStateColumn title="Small" />
    </StoryStateRow>
    <StoryStateRow>
      <StoryStateColumn title="Primary" description="Info counter">
        <Counter size={Counter.sizes.SMALL} ariaLabel="primary counter" id="small-primary-id" />
      </StoryStateColumn>
      <StoryStateColumn title="Negative" description="Notifications">
        <Counter
          size={Counter.sizes.SMALL}
          color={Counter.colors.NEGATIVE}
          ariaLabel="negative counter"
          id="small-negative-id"
        />
      </StoryStateColumn>
      <StoryStateColumn title="Dark" description="General">
        <Counter size={Counter.sizes.SMALL} color={Counter.colors.DARK} ariaLabel="dark counter" id="small-dark-id" />
      </StoryStateColumn>
    </StoryStateRow>
  </section>
);

export const Line = () => (
  <section>
    <StoryStateRow>
      <StoryStateColumn title="Large" />
    </StoryStateRow>
    <StoryStateRow>
      <StoryStateColumn title="Primary" description="Info counter">
        <Counter kind={Counter.kinds.LINE} ariaLabel="primary-line counter" id="primary-line-id-large" />
      </StoryStateColumn>
      <StoryStateColumn title="Negative" description="Notifications">
        <Counter
          kind={Counter.kinds.LINE}
          color={Counter.colors.NEGATIVE}
          ariaLabel="negative counter"
          id="negative-line-id-large"
        />
      </StoryStateColumn>
      <StoryStateColumn title="Dark" description="General">
        <Counter
          kind={Counter.kinds.LINE}
          color={Counter.colors.DARK}
          ariaLabel="dark counter"
          id="line-dark-id-large"
        />
      </StoryStateColumn>
    </StoryStateRow>
    <StoryStateRow>
      <StoryStateColumn title="Small" />
    </StoryStateRow>
    <StoryStateRow>
      <StoryStateColumn title="Primary" description="Info counter">
        <Counter
          kind={Counter.kinds.LINE}
          size={Counter.sizes.SMALL}
          ariaLabel="primary-line counter"
          id="primary-line-idsmall"
        />
      </StoryStateColumn>
      <StoryStateColumn title="Negative" description="Notifications">
        <Counter
          kind={Counter.kinds.LINE}
          size={Counter.sizes.SMALL}
          color={Counter.colors.NEGATIVE}
          ariaLabel="primary-line counter"
          id="Negative-line-idsmall"
        />
      </StoryStateColumn>
      <StoryStateColumn title="Dark" description="General">
        <Counter
          kind={Counter.kinds.LINE}
          size={Counter.sizes.SMALL}
          color={Counter.colors.DARK}
          ariaLabel="primary-line counter"
          id="dark-line-idsmall"
        />
      </StoryStateColumn>
    </StoryStateRow>
  </section>
);

export const Limits = () => (
  <section>
    <StoryStateRow>
      <StoryStateColumn title="1 digit limit" description="maxDigits=1, count=10">
        <Counter maxDigits={1} count={10} id="limit-1-digit" ariaLabel="Counter is limited by 1 digit" />
      </StoryStateColumn>
      <StoryStateColumn title="2 digits limit" description="maxDigits=2, count=100">
        <Counter maxDigits={2} count={100} id="limit-2-digit" ariaLabel="Counter is limited by 2 digit" />
      </StoryStateColumn>
      <StoryStateColumn title="3 digits limit" description="maxDigits=3, count=1000">
        <Counter maxDigits={3} count={1000} id="limit-3-digit" ariaLabel="Counter is limited by 3 digit" />
      </StoryStateColumn>
    </StoryStateRow>
  </section>
);

const CountChangeComponent = ({ initialCount, maxCount, maxDigits, ...props }) => {
  const [count, setCount] = useState(null);
  const changeCountCallback = useCallback(() => {
    const newCount = count === maxCount ? initialCount : count + 1;
    setCount(newCount);
  }, [count, setCount]);

  useEffect(() => {
    setCount(initialCount);
  }, [initialCount, setCount]);

  useEffect(() => {
    const interval = setInterval(changeCountCallback, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [changeCountCallback]);

  return <Counter {...props} count={count} maxDigits={maxDigits} />;
};

export const CountChangeAnimation = () => {
  return (
    <section>
      <StoryStateRow>
        <StoryStateColumn title="Regular">
          <CountChangeComponent initialCount={1} maxCount={11} />
        </StoryStateColumn>
      </StoryStateRow>
      <StoryStateRow>
        <StoryStateColumn title="Going above maxDigits">
          <CountChangeComponent initialCount={97} maxCount={102} maxDigits={2} color={Counter.colors.NEGATIVE} />
        </StoryStateColumn>
      </StoryStateRow>
    </section>
  );
};

export const Sandbox = () => (
  <div>
    <Counter
      id="Knobs"
      count={number("Count", 5)}
      size={select("Size", [Counter.sizes.LARGE, Counter.sizes.SMALL], Counter.sizes.LARGE)}
      kind={select("Kind", [Counter.kinds.FILL, Counter.kinds.LINE], Counter.kinds.FILL)}
      color={select(
        "Color",
        [Counter.colors.PRIMARY, Counter.colors.DARK, Counter.colors.NEGATIVE],
        Counter.colors.PRIMARY
      )}
      maxDigits={number("Max Digits", 3)}
    />
  </div>
);

export const NotificationCounter = () => (
  <div className="storybook-counter-sandbox-tag">
    <Counter
      id="Knobs"
      count={number("Count", 5)}
      size={select("Size", [Counter.sizes.LARGE, Counter.sizes.SMALL], Counter.sizes.LARGE)}
      kind={Counter.kinds.FILL}
      color={Counter.colors.NEGATIVE}
      maxDigits={number("Max Digits", 3)}
      wrapperClassName="counter-tag"
    />
    <Notifications size={32} />
  </div>
);

export default {
  title: "Components|Counter",
  component: Counter,
  decorators: [withPerformance]
};
