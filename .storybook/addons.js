import "@storybook/addon-docs/register";
import "@storybook/addon-actions/register";
import "@storybook/addon-links/register";
import { create } from "@storybook/theming";
import { addons } from "@storybook/addons";
import logo from "./logo.png";

const theme = create({
  base: "light",
  brandImage: logo,
  brandUrl: "https://monday.com",
  barSelectedColor: '#5034ff',
  brandTitle: 'Vibe Design',
  background: {
    hoverable: "rgba(80, 52, 255, 0.1)"
  },
  hoverable: "rgba(80, 52, 255, 0.1)"
});

addons.setConfig({
  theme
});
