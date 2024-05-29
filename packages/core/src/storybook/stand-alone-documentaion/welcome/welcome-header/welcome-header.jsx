import React from "react";
import { ComponentNameDecorator } from "../../../components";
import "./welcome-header.scss";

const BASE_CLASS = "monday-storybook-welcome-header";
export const WelcomeHeader = () => (
  <ComponentNameDecorator className={BASE_CLASS}>
    <span className={`${BASE_CLASS}_text`}>
      Vibe Design System
      <br /> by monday.com
    </span>
  </ComponentNameDecorator>
);
