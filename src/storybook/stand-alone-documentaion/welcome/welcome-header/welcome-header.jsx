import { ComponentName } from "../../../components";
import { headerBanner } from "../assets";
import "./welcome-header.scss";

const BASE_CLASS = "monday-storybook-welcome-header";
export const WelcomeHeader = () => (
  <ComponentName className={BASE_CLASS}>
    <span className={`${BASE_CLASS}_text`}>Welcome to the monday.com Work OS Design System</span>
    <img src={headerBanner} alt="" className={`${BASE_CLASS}_image`} />
  </ComponentName>
);
