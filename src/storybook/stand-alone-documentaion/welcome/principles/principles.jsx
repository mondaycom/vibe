import { clarity, delight, speed, path } from "../assets";
import { Principle } from "../principle/principle";
import "./principles.scss";

const BASE_CLASS = "monday-storybook-principles";

export const Principles = () => (
  <div className={BASE_CLASS}>
    <Principle
      imgSrc={clarity}
      title="Clarity"
      description="Clear visuals and experiences enable users to feel confident using the platform."
    />
    <Principle
      imgSrc={speed}
      title="Speed and Reliability"
      description="Fast and steady behavior gives the user a sense of control and independence."
    />
    <Principle
      imgSrc={path}
      title="Intuitive Path"
      description="Keeping a natural flow in mind when using the product helps users achieve their goals."
    />
    <Principle
      imgSrc={delight}
      title="Delightful Experience"
      description="Users will continue using the platform if it makes them feel empowered."
    />
  </div>
);
