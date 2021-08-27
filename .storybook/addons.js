import "@storybook/addon-docs/register";
import "@storybook/addon-actions/register";
import "@storybook/addon-links/register";
import { create } from "@storybook/theming/create";
import { addons } from "@storybook/addons";

const theme = create({
  base: "light",
  brandImage:
    "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png",
  brandUrl: "https://monday.com"
});

addons.setConfig({
  theme
});
