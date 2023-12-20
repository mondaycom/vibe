import { withPlaygroundRenderer } from "storybook-addon-playground";

export default {
  title: "Playground",
  decorators: [withPlaygroundRenderer]
};

export const Playground = {
  args: {
    code: {
      jsx: `<div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
  <div>
    <VibeNext.Heading>Online Playground</VibeNext.Heading>
    <VibeNext.Heading type="h3" color="secondary">
      Prototype with actual components.
    </VibeNext.Heading>
  </div>
  <div>
    <Text>
      Can't see the code editor?
      <br />
      Click on the <VibeIcons.Settings /> button on the left panel and select
      the <b>"Change Addons Orientation"</b>{" "}
    </Text>
  </div>
  <div>
    <Button onClick={() => alert("isn't that nice?")}>Click me</Button>
  </div>
</div>`
    }
  }
};
