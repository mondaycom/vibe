export type ColorTokenDef = {
  name: string;
  description: string;
  showBorder?: boolean;
  supportsAlpha?: boolean;
};

export type ColorTokenSection = {
  id: string;
  title: string;
  description?: string;
  tokens: ColorTokenDef[];
};

export const COLOR_TOKEN_SECTIONS: ColorTokenSection[] = [
  {
    id: "primary",
    title: "Primary colors",
    tokens: [
      { name: "primary-color", description: "Use as primary color" },
      { name: "primary-hover-color", description: "Use only as hover on primary color" },
      { name: "primary-selected-color", description: "Use to indicate selected items", supportsAlpha: true },
      { name: "primary-selected-hover-color", description: "Use only as hover on selected color", supportsAlpha: true },
      { name: "primary-highlighted-color", description: "Use only as background of highlighted elements" },
    ],
  },
  {
    id: "text",
    title: "Text colors",
    tokens: [
      { name: "primary-text-color", description: "Default text color" },
      { name: "secondary-text-color", description: "Secondary text color" },
      { name: "text-color-on-inverted", description: "Text color on inverted background", showBorder: true },
      { name: "text-color-on-primary", description: "Text color on primary background" },
      { name: "disabled-text-color", description: "Disabled text color", supportsAlpha: true },
    ],
  },
  {
    id: "status",
    title: "Status colors",
    tokens: [
      { name: "positive-color", description: "Primary positive / success color" },
      { name: "positive-color-selected", description: "Selected state for positive color", supportsAlpha: true },
      { name: "negative-color", description: "Primary negative / error color" },
      { name: "negative-color-selected", description: "Selected state for negative color", supportsAlpha: true },
      { name: "warning-color", description: "Primary warning color" },
      { name: "warning-color-selected", description: "Selected state for warning color", supportsAlpha: true },
    ],
  },
  {
    id: "utility",
    title: "Utility",
    tokens: [
      { name: "ui-border-color", description: "Border color for ui elements and components" },
      { name: "layout-border-color", description: "Border color for general layout and separators" },
      { name: "placeholder-color", description: "Use for placeholder text in inputs fields" },
      { name: "icon-color", description: "Default color for icons" },
      { name: "link-color", description: "Use only for links" },
      { name: "fixed-dark-color", description: "Use as color that should remain dark in all themes" },
      {
        name: "fixed-light-color",
        description: "Use as color that should remain light in all themes",
        showBorder: true,
      },
    ],
  },
  {
    id: "backgrounds",
    title: "Backgrounds",
    description: "Surface and layout background tokens.",
    tokens: [
      { name: "inverted-color-background", description: "Opposite of primary background color" },
      {
        name: "primary-background-color",
        description: "Primary background color",
        showBorder: true,
      },
      {
        name: "primary-background-hover-color",
        description: "Use as hover color",
        supportsAlpha: true,
      },
      {
        name: "secondary-background-color",
        description: "Secondary background color",
        showBorder: true,
      },
      {
        name: "allgrey-background-color",
        description: "Secondary background color",
        showBorder: true,
      },
      { name: "ui-background-color", description: "Background color for ui elements and components" },
      { name: "ui-background-hover-color", description: "Use only as hover on ui background color" },
      {
        name: "disabled-background-color",
        description: "Use as background for disabled elements",
        showBorder: true,
      },
      { name: "primary-surface-color", description: "Use this as the surface of the main layout appearance" },
      { name: "surface-primary", description: "Primary / brand tinted surface", showBorder: true },
      { name: "surface-positive", description: "Positive tinted surface", showBorder: true },
      { name: "surface-negative", description: "Negative tinted surface", showBorder: true },
      { name: "surface-warning", description: "Warning tinted surface", showBorder: true },
      { name: "surface-neutral", description: "Neutral tinted surface", showBorder: true },
      { name: "surface-info", description: "Informational tinted surface", showBorder: true },
      { name: "text-on-surface-primary", description: "Text / icon color on --surface-primary" },
      { name: "text-on-surface-positive", description: "Text / icon color on --surface-positive" },
      { name: "text-on-surface-negative", description: "Text / icon color on --surface-negative" },
      { name: "text-on-surface-warning", description: "Text / icon color on --surface-warning" },
      { name: "text-on-surface-neutral", description: "Text / icon color on --surface-neutral" },
      { name: "text-on-surface-info", description: "Text / icon color on --surface-info" },
    ],
  },
];
