import React from "react";
// import { Controls } from "@storybook/blocks"; // Controls are not supporting subcomponents yet, so using deprecated ArgsTable - https://github.com/storybookjs/storybook/issues/20782
import { Controls } from "@storybook/blocks";

// TODO extract to vibe-storybook-components?
export const PropsTable = props => <Controls story="Overview" sort="alpha" {...props} />;
