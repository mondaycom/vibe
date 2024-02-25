import Clickable from "../Clickable";
import Flex from "../../Flex/Flex";
import { statesPlaySuite } from "../__tests__/clickable-interactions-tests";
import "./clickable.stories.scss";

export default {
  title: "Accessibility/Clickable",
  component: Clickable
};

const clickableTemplate = args => {
  return (
    <Clickable className="monday-story-clickable_first-element" onClick={() => alert("clicked")} {...args}>
      <div>I act like a button</div>
    </Clickable>
  );
};

export const Overview = {
  render: clickableTemplate.bind({}),
  name: "Overview"
};

export const States = {
  render: () => (
    <Flex gap={Flex.gaps.MEDIUM}>
      <Clickable
        className="monday-story-clickable_first-element"
        onClick={() => alert("clicked")}
        ariaLabel="clickable button"
      >
        <div>Regular clickable element</div>
      </Clickable>
      <Clickable
        className="monday-story-clickable_disabled-element"
        onClick={() => alert("clicked")}
        disabled
        ariaLabel="disabled clickable button"
      >
        <div>Disabled clickable element</div>
      </Clickable>
    </Flex>
  ),

  name: "States",
  play: statesPlaySuite
};
