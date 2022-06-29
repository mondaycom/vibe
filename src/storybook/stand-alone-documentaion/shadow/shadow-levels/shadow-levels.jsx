import { Frame } from "../../../components";
import { ShadowExample } from "./shadow-example/shadow-example";
import "./shadow-levels.scss";

export const ShadowLevels = () => (
  <Frame className="monday-storybook-shadow-levels">
    <ShadowExample size={ShadowExample.size.XS} />
    <ShadowExample size={ShadowExample.size.SMALL} />
    <ShadowExample size={ShadowExample.size.MEDIUM} />
    <ShadowExample size={ShadowExample.size.LARGE} />
  </Frame>
);
