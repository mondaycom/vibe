import { TextWithHighlight } from "@ezds/core";
import { createComponentTemplate } from "@ezds/storybook-blocks";

export default {
  title: "Text/TextWithHighlight",
  component: TextWithHighlight
};

const textWithHighlightTemplate = createComponentTemplate(TextWithHighlight);

export const Overview = {
  render: textWithHighlightTemplate.bind({}),
  name: "Overview",

  args: {
    text: "Hello world, hello world again",
    highlightTerm: "Hello again"
  }
};
