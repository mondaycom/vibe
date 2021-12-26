import "@storybook/addon-docs/register";
import "@storybook/addon-actions/register";
import "@storybook/addon-links/register";
import { create } from "@storybook/theming/create";
import { addons } from "@storybook/addons";
import logo from "./logo.png";

const theme = create({
  base: "light",
  brandImage: logo,
  brandUrl: "https://monday.com",
  barSelectedColor: '#5034ff',
  brandTitle: 'Vibe Design',
});

addons.setConfig({
  theme
});
