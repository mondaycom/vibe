import { ColorDescription } from "../color-description/color-description";
import { Frame } from "../../../components";

export const TextColors = () => {
  return (
    <Frame>
      <ColorDescription colorName="primary-text-color" description="Use for default text color" />
      <ColorDescription colorName="secondary-text-color" description="Use when you need text with lesser importance" />
      <ColorDescription
        colorName="secondary-text-on-secondary-color"
        description="Use when you need text with lesser importance (on secondary background color)"
      />
      <ColorDescription
        colorName="text-color-on-inverted"
        description="Inverted text color (opposite of primary text color)"
        withBorder
      />
      <ColorDescription colorName="text-color-on-primary" description="Use for text on primary color" withBorder />
      <ColorDescription colorName="disabled-text-color" description="Use as text in disabled components" />
      <ColorDescription colorName="placeholder-color" description="Use for placeholder text in inputs fields" />
      <ColorDescription colorName="link-color" description="Use only for links" />
    </Frame>
  );
};
