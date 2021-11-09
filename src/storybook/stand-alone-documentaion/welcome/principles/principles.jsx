import { InformationBox } from "../../../components/information-box/information-box";
import "./principles.scss";

export const Principles = () => (
  <div className="monday-style-principles">
    <InformationBox
      title="Clarity"
      description="Clear visuals and experiences enable users to feel confident using the platform."
    />
    <InformationBox
      title="Speed and Reliability"
      description="Fast and steady behavior gives the user a sense of control and independence."
    />
    <InformationBox
      title="Intuitive Path"
      description="Keeping a natural flow in mind when using the product helps users achieve their goals."
    />
    <InformationBox
      title="Delightful Experience"
      description="Users will continue using the platform if it makes them feel empowered."
    />
  </div>
);
