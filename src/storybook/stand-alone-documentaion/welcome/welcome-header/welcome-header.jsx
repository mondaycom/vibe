import { ComponentNameDecorator } from "../../../components";
import "./welcome-header.scss";

const BASE_CLASS = "origami-storybook-welcome-header";
export const WelcomeHeader = () => (
  <ComponentNameDecorator className={BASE_CLASS}>
    <span className={`${BASE_CLASS}_head`}>Origami Design System</span>
    <span className={`${BASE_CLASS}_subhead`}>
      Here you can find our design guidelines, component documentation, and resources for buildings apps with Ikigai
      Orgami Design System.
    </span>
  </ComponentNameDecorator>
);
