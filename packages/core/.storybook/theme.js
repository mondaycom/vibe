import { create } from "@storybook/theming/create";

export default create({
  base: "light",
  brandImage: "/logo.svg",
  brandUrl: "https://vibe.monday.com",
  barTextColor: "var(--sb-primary-text-color)",
  barSelectedColor: "var(--sb-primary-text-color)",
  barHoverColor: "var(--sb-allgrey-background-color)",
  barBackgroundColor: "var(--sb-allgrey-background-color)",
  brandTitle: "Vibe Design System"
});
