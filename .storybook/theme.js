import { create } from "@storybook/theming/create";
import logo from "./assets/origami-logo.png";

export default create({
  base: "light",
  brandImage: logo,
  brandUrl: "https://www.ikigailabs.io",
  barSelectedColor: "#5034ff",
  brandTitle: "Origami Design System",

  // UI
  appBg: "white",
  appContentBg: "white",
  appBorderRadius: 4,

  barBg: '#ffffff',

  background: {
    hoverable: "rgba(80, 52, 255, 0.1)"
  },
  hoverable: "rgba(80, 52, 255, 0.1)"
});
