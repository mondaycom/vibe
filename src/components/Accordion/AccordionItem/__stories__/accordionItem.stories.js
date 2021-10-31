import React, { useState } from "react";
import { number } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import AccordionItem from "../AccordionItem";

export const Sandbox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const width = number("width", 300);
  const height = number("height", 200);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ width, height }}>
      <AccordionItem id="Knobs" open={isOpen} onClickAccordionCallback={onClick} title={"I can be anything"}>
        <h3>Any component you want</h3>
      </AccordionItem>
    </div>
  );
};

export default {
  title: "Components|AccordionItem",
  component: AccordionItem,
  decorators: [withPerformance]
};
