import React, { useMemo } from "react";
import "@storybook/addon-docs/register";
import "@storybook/addon-interactions/register";
import "@storybook/addon-actions/register";
import "@storybook/addon-links/register";
import { create } from "@storybook/theming";
import { addons } from "@storybook/addons";
import logo from "./logo.png";
import { SideBarLabel } from "/dist/storybook/index";

window.STORYBOOK_GA_ID = "UA-308574295";
window.STORYBOOK_REACT_GA_OPTIONS = {};

const BETA_COMPONENTS = ["Typography"];
const DEPRECATED_COMPONENTS = ["Typography tokens"];

const theme = create({
  base: "light",
  brandImage: logo,
  brandUrl: "https://style.monday.com",
  barSelectedColor: "#5034ff",
  brandTitle: "Vibe Design",
  background: {
    hoverable: "rgba(80, 52, 255, 0.1)"
  },
  hoverable: "rgba(80, 52, 255, 0.1)"
});

addons.setConfig({
  theme,
  sidebar: {
    // Add deprecated and beta tags
    renderLabel: ({ name, type }) => {
      const beta = useMemo(() => BETA_COMPONENTS.find(storyPage => storyPage === name), []);
      const deprecated = useMemo(() => DEPRECATED_COMPONENTS.find(storyPage => storyPage === name), []);
      return type === "story" ? <SideBarLabel name={name} type={type} beta={beta} deprecated={deprecated} /> : name;
    }
  }
});
