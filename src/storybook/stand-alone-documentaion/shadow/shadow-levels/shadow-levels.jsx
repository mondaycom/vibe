import { Frame } from "../../../components";
import { ShadowExample } from "./shadow-example/shadow-example";

export const ShadowLevels = ({ size }) => (
  <Frame>
    <ShadowExample />
    <span className="monday-storybook-shadow-level_title">{size}</span>
    <span className="monday-storybook-shadow-level_code">{size}</span>
  </Frame>
);
