import React from "react";
import { useCallback, useEffect, useState } from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import Counter from "../Counter";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import Divider from "../../Divider/Divider";
import { AddUpdate, Update, Notifications } from "@vibe/icons";
import Icon from "../../Icon/Icon";
import Avatar from "../../Avatar/Avatar";
import "./Counter.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Counter
});

const counterTemplate = createComponentTemplate(Counter);

export default {
  title: "Components/Counter",
  component: Counter,
  argTypes: {
    ...metaSettings.argTypes,
    wrapperClassName: {
      table: {
        disable: true
      }
    },
    "data-testid": {
      table: {
        disable: true
      }
    }
  },
  decorators: metaSettings.decorators
};

export const Overview = {
  render: counterTemplate.bind({}),
  name: "Overview",

  args: {
    count: 5
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Sizes = {
  render: () => (
    <>
      <div className="storybook-counter_column">
        <Counter count={5} size="xs" />
        XS
      </div>
      <div className="storybook-counter_column">
        <Counter count={5} size="small" />
        Small
      </div>
      <div className="storybook-counter_column">
        <Counter count={5} />
        Large
      </div>
    </>
  )
};

export const Colors = {
  render: () => (
    <>
      <div className="storybook-counter_column">
        <Counter count={5} />
        Primary
      </div>
      <div className="storybook-counter_column">
        <Counter count={5} color="negative" />
        Negative or notification
      </div>
      <div className="storybook-counter_column">
        <Counter count={5} color="dark" />
        Dark
      </div>
      <div className="storybook-counter_column">
        <Counter count={5} color="light" />
        Light
      </div>
    </>
  )
};

export const Outline = {
  render: () => (
    <>
      <div className="storybook-counter_column">
        <Counter count={5} kind="line" />
        Primary
      </div>
      <div className="storybook-counter_column">
        <Counter count={5} color="negative" kind="line" />
        Negative or notification
      </div>
      <div className="storybook-counter_column">
        <Counter count={5} color="dark" kind="line" />
        Dark
      </div>
      <div className="storybook-counter_column">
        <Counter count={5} color="light" kind="line" />
        Light
      </div>
    </>
  )
};

export const Limits = {
  render: () => (
    <>
      <div className="storybook-counter_column">
        <Counter count={10} maxDigits={1} />
        One digit limit
      </div>
      <div className="storybook-counter_column">
        <Counter count={100} maxDigits={2} />
        Two digits limit
      </div>
      <div className="storybook-counter_column">
        <Counter count={1000} />
        Three digits limit
      </div>
    </>
  )
};

export const NotificationCounter = {
  render: () => {
    const maxCount = 10;
    const initialCount = 4;
    const [count, setCount] = useState(4);

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

    return (
      <div className="storybook-counter_position">
        <Avatar type="icon" icon={Notifications} backgroundColor="royal" />
        <Counter count={count} maxDigits={1} color="negative" className="storybook-counter_counter-position-top" />
      </div>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { Notifications }
      }
    }
  }
};

export const CounterOnInboxFilters = {
  render: () => (
    <>
      <div className="storybook-counter_wrapper">
        <span className="a">UX Writing & microcopy Re...</span>
        <span className="a"> Mobile Data- Iteration Plan...</span>
        <span className="a">Q Plans.</span>
      </div>
      <div className="storybook-counter_wrapper">
        <Counter count={195} color="dark" />
        <Counter count={141} color="dark" />
        <Counter count={99} color="dark" />
      </div>
    </>
  )
};

export const CountTheNumberOfUpdates = {
  render: () => (
    <div className="storybook-counter_icon-wrapper">
      <Icon icon={AddUpdate} iconSize="36" />
      <Divider />
      <div className="storybook-counter_position">
        <Icon icon={Update} iconSize="36" />
        <Counter count={5} size="small" className="storybook-counter_counter-position-bot" />
      </div>
      <Divider />
      <div className="storybook-counter_position">
        <Icon icon={Update} iconSize="36" />
        <Counter count={5} color="dark" size="small" className="storybook-counter_counter-position-bot" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { AddUpdate, Update }
      }
    }
  }
};
