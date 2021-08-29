import Button from "../Button";
import ButtonDocumentation from "./button.stories.mdx";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" }
  },
  parameters: {
    docs: {
      page: ButtonDocumentation
    }
  }
};
