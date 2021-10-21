import { number } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import Icon from "../../../Icon/Icon";
import Robot from "../../../Icon/Icons/components/Robot";
import AccordionItem from "../../AccordionItem/AccordionItem";
import Accordion from "../Accordion";

export const Sandbox = () => {
  const width = number("width", 300);
  const height = number("height", 200);

  return (
    <div style={{ width, height }}>
      <Accordion id="Knobs" index={[0]}>
        <AccordionItem headerComponentRenderer={() => <span>I can be anything</span>}>
          <h3>Any component you want</h3>
        </AccordionItem>
        <AccordionItem headerComponentRenderer={() => <span>I can be anything</span>}>
          <Icon iconType={Icon.type.SVG} icon={Robot} iconSize={"52px"} tabindex="-1" clickable={true} />
        </AccordionItem>
        <AccordionItem headerComponentRenderer={() => <span>I can be anything</span>}></AccordionItem>
      </Accordion>
    </div>
  );
};

export default {
  title: "Components|Accordion",
  component: Accordion,
  decorators: [withPerformance]
};
