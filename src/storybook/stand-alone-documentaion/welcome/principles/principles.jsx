import { InformationBox } from "../../../components/information-box/information-box";
import "./principles.scss";

const BASE_CLASS = "monday-storybook-principles";
const PRINCIPLE_VISUAL_ELEMENT = `${BASE_CLASS}_visual-element`;

export const Principles = () => (
  <div className={BASE_CLASS}>
    <InformationBox
      component={<div className={PRINCIPLE_VISUAL_ELEMENT} />}
      // component={<img name="/Clarity.svg" alt="" />}
      title="Clarity"
      description="Clear visuals and experiences enable users to feel confident using the platform."
    />
    <InformationBox
      // component={<StoryImage name="Speed" />}
      component={<div className={PRINCIPLE_VISUAL_ELEMENT} />}
      title="Speed and Reliability"
      description="Fast and steady behavior gives the user a sense of control and independence."
    />
    <InformationBox
      // component={<StoryImage name="Path" />}
      component={<div className={PRINCIPLE_VISUAL_ELEMENT} />}
      title="Intuitive Path"
      description="Keeping a natural flow in mind when using the product helps users achieve their goals."
    />
    <InformationBox
      // component={<StoryImage name="Delight" />}
      component={<div className={PRINCIPLE_VISUAL_ELEMENT} />}
      title="Delightful Experience"
      description="Users will continue using the platform if it makes them feel empowered."
    />
  </div>
);
