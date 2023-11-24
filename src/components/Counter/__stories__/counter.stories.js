import { useCallback, useEffect, useState } from "@storybook/addons";
import Counter from "../Counter";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import Avatar from "../../Avatar/Avatar";
import Divider from "../../Divider/Divider";
import { AddUpdate, Notifications, Update } from "../../Icon/Icons";
import Icon from "../../Icon/Icon";
import { createComponentTemplate } from "vibe-storybook-components";
import "./counter.stories.scss";

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
    <div className="storybook-counter_column">
      <Counter count={5} />
      Big
    </div>
  ),

  name: "Sizes"
};

export const Colors = {
  render: () => (
    <div className="storybook-counter_column">
      <Counter count={5} />
      Primary
    </div>
  ),

  name: "Colors"
};

export const Outline = {
  render: () => (
    <div className="storybook-counter_column">
      <Counter count={5} kind={Counter.kinds.LINE} />
      Primary
    </div>
  ),

  name: "Outline"
};

export const Limits = {
  render: () => (
    <div className="storybook-counter_column">
      <Counter count={10} maxDigits={1} />
      One digit limit
    </div>
  ),

  name: "Limits"
};

// TODO storybook 7 migration: story isn't working in storybook 7
// export const NotificationCounter = {
//   render: () => {
//     const maxCount = 10;
//     const initialCount = 4;
//     const [count, setCount] = useState(4);
//
//     const changeCountCallback = useCallback(() => {
//       const newCount = count === maxCount ? initialCount : count + 1;
//       setCount(newCount);
//     }, [count, setCount]);
//
//     useEffect(() => {
//       setCount(initialCount);
//     }, [initialCount, setCount]);
//
//     useEffect(() => {
//       const interval = setInterval(changeCountCallback, 1000);
//
//       return () => {
//         clearInterval(interval);
//       };
//     }, [changeCountCallback]);
//
//     return (
//       <div className="storybook-counter_position">
//         <Avatar type={Avatar.types.ICON} icon={Notifications} backgroundColor={Avatar.colors.ROYAL} />
//         <Counter
//           count={count}
//           maxDigits={1}
//           color={Counter.colors.NEGATIVE}
//           className="storybook-counter_counter-position-top"
//         />
//       </div>
//     );
//   },
//
//   name: "Notification counter"
// };

// First story in Use cases and examples
// ### Notification counter
//
// Used on the notification icon to indicate the number of new notifications.
//
// <Canvas>
//     <Story of={CounterStories.NotificationCounter} />
// </Canvas>

export const CounterOnInboxFilters = {
  render: () => (
    <div className="storybook-counter_wrapper">
      <span className="a">UX Writing & microcopy Re...</span>
      <span className="a">Mobile Data- Iteration Plan...</span>
      <span className="a">Q Plans.</span>
    </div>
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
        <Counter count={5} size={Counter.sizes.SMALL} className="storybook-counter_counter-position-bot" />
      </div>
      <Divider />
      <div className="storybook-counter_position">
        <Icon icon={Update} iconSize="36" />
        <Counter
          count={5}
          color={Counter.colors.DARK}
          size={Counter.sizes.SMALL}
          className="storybook-counter_counter-position-bot"
        />
      </div>
    </div>
  ),

  name: "Count the number of updates"
};
