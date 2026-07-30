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
      { name: "primary-selected-color", description: "Use to indicate selected items" },
      { name: "primary-selected-hover-color", description: "Use only as hover on selected color" },
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
      {
        name: "disabled-background-color",
        description: "Use as background for disabled elements",
        showBorder: true,
      },
      { name: "primary-surface-color", description: "Use this as the surface of the main layout appearance" },
    ],
  },
];
