import { ComponentName } from "../../../components";
import "./welcome-header.scss";

const BASE_CLASS = "monday-storybook-welcome-header";
export const WelcomeHeader = () => (
  <ComponentName className={BASE_CLASS}>
    <span className={`${BASE_CLASS}_text`}>
      Vibe Design System
      <br /> by monday.com
    </span>
  </ComponentName>
);
