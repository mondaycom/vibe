import React from "react";
import { useCallback, useEffect, useState } from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import Counter from "../Counter";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import Divider from "../../Divider/Divider";
import { AddUpdate, Update, Notifications } from "../../Icon/Icons";
import Icon from "../../Icon/Icon";
import Avatar from "../../Avatar/Avatar";
import "./Counter.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Counter,
  enumPropNamesArray: ["size", "color", "kind"]
});

const counterTemplate = createComponentTemplate(Counter);

export default {
  title: "Feedback/Counter",
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
  }
};

export const Sizes = {
  render: () => (
    <>
      <div className="storybook-counter_column">
        <Counter count={5} />
        Big
      </div>
      <div className="storybook-counter_column">
        <Counter count={5} size="small" />
        Small
      </div>
    </>
  ),

  name: "Sizes"
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
  ),

  name: "Colors"
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
  ),

  name: "Outline"
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
  ),

  name: "Limits"
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

  name: "Notification counter"
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
  ),

  name: "Counter on inbox filters"
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

  name: "Count the number of updates"
};
