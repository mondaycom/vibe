import { Clickable } from "../../index";
import { ClickableProps } from "../Clickable";

export const clickableOverviewTemplate = (args: ClickableProps) => {
  return (
    <Clickable className="monday-story-clickable_first-element" onClick={() => alert("clicked")} {...args}>
      <div>I act like a button</div>
    </Clickable>
  );
};
