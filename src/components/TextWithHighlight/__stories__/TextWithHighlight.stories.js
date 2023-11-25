import TextWithHighlight from "../TextWithHighlight";
import { createComponentTemplate } from "vibe-storybook-components";

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
