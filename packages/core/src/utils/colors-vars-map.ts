export const colorsMap = [
  { color: "--primary-color", description: "Use to emphasise main ui components" },
  {
    color: "--primary-on-secondary-color",
    description: "Use to emphasise main ui components on secondary background color"
  },
  { color: "--primary-hover-color", description: "Use only as a hover on primary color" },
  {
    color: "--primary-hover-on-secondary-color",
    description: "Use only as a hover on primary color on secondary background color"
  },
  { color: "--primary-selected-color", description: "Use to indicate selected state of primary items" },
  {
    color: "--primary-selected-hover-color",
    description: "Use to indicate hover state on a primary-selected-color items"
  },
  {
    color: "--primary-highlighted-color",
    description: "Use this to indicate highlighted components of primary items"
  },
  {
    color: "--primary-surface-color",
    description: "Use this as the surface of the main layout appearance"
  },
  {
    color: "--primary-selected-on-secondary-color",
    description: "Use to indicate selected state of primary items on secondary background color"
  },
  { color: "--primary-text-color", description: "Use for default text color" },
  {
    color: "--primary-text-on-secondary-color",
    description: "Use for default text color on secondary background color"
  },
  { color: "--secondary-text-color", description: "Use when you need text with lesser importance" },
  {
    color: "--secondary-text-on-secondary-color",
    description: "Use when you need text with lesser importance (on secondary background color)"
  },
  { color: "--primary-background-hover-color", description: "Use as hover color" },
  { color: "--primary-background-hover-on-secondary-color", description: "Use as hover color on secondary color" },
  {
    color: "--inverted-color-background",
    description: "Inverted background color (opposite of primary background color)"
  },
  { color: "--text-color-on-inverted", description: "Inverted text color (opposite of primary text color)" },
  { color: "--text-color-on-primary", description: "Use for text on primary color" },
  { color: "--fixed-light-color", description: "Use as color that should remain light in all themes" },
  { color: "--fixed-dark-color", description: "Use as color that should remain dark in all themes" },
  // states
  {
    color: "--positive-color",
    description: "Use to indicate a positive action/state (success, completion, approval...)"
  },
  { color: "--positive-color-hover", description: "Use only as hover color on positive color" },
  { color: "--positive-color-selected", description: "Use only as selected indication for a positive colors" },
  {
    color: "--positive-color-selected-hover",
    description: "Use to indicate hover state on a positive-color-selected items"
  },
  {
    color: "--negative-color",
    description: "Use to indicate a negative action/state (delete, error...)"
  },
  { color: "--negative-color-hover", description: "Use only as hover color on negative color" },
  { color: "--negative-color-selected", description: "Use as selected indication for negative colors" },
  {
    color: "--negative-color-selected-hover",
    description: "Use to indicate hover state on a negative-selected items"
  },
  {
    color: "--private-color",
    description: "Use to indicate that something is private (board, icons...)"
  },
  {
    color: "--shareable-color",
    description: "Use to indicate that something is shareable (board, dashboard...)"
  },
  {
    color: "--warning-color",
    description: "Use to indicate a warning action/state (severity, alert, caution...)"
  },
  { color: "--warning-color-hover", description: "Use only as hover color on warning color" },
  { color: "--warning-color-selected", description: "Use as selected indication for warning colors" },
  {
    color: "--warning-color-selected-hover",
    description: "Use to indicate hover state on a warning-selected items"
  },
  // borders
  { color: "--ui-border-color", description: "Border color for ui elements and components (Button, Input...)" },
  { color: "--ui-border-on-secondary-color", description: "Border color for ui elements on secondary color" },
  {
    color: "--layout-border-color",
    description: "Border color for general layout and separators (Leftpane, Menu Divider...)"
  },
  {
    color: "--layout-border-on-secondary-color",
    description: "Border color for general layout on secondary background color"
  },
  { color: "--placeholder-color", description: "Use for placeholder text in inputs fields" },
  {
    color: "--placeholder-on-secondary-color",
    description: "Use for placeholder text in inputs fields on secondary background color"
  },
  { color: "--icon-color", description: "Default color for icons" },
  { color: "--icon-on-secondary-color", description: "Default color for icons on secondary background color" },
  // disabled
  {
    color: "--disabled-background-color",
    description: "Use as background for disabled elements (ui hovers or elements)"
  },
  { color: "--disabled-text-color", description: "Use as text in disabled components" },
  {
    color: "--disabled-background-on-secondary-color",
    description: "Use as background for disabled elements on secondary background"
  },
  {
    color: "--disabled-text-on-secondary-color",
    description: "Use as text in disabled components on secondary background color"
  },
  // Link
  { color: "--link-color", description: "Use only for links" },
  { color: "--link-on-secondary-color", description: "Use only for links on secondary colors" },
  // Backgrounds
  { color: "--primary-background-color", description: "Primary background color" },
  { color: "--secondary-background-color", description: "Secondary background color" },
  { color: "--grey-background-color", description: "Grey background color" },
  { color: "--allgrey-background-color", description: "Grey background color, stays grey in dark and black themes" },
  { color: "--ui-background-color", description: "Background color for UI elements and components" }
];

export const colorsHashMap = colorsMap.reduce((map, current) => {
  const newColorName = current.color.substring(2);
  map.set(newColorName, current.description);
  return map;
}, new Map());

export const contentColors = [
  "grass_green",
  "done-green",
  "bright-green",
  "saladish",
  "egg_yolk",
  "working_orange",
  "dark-orange",
  "peach",
  "sunset",
  "stuck-red",
  "dark-red",
  "sofia_pink",
  "lipstick",
  "bubble",
  "purple",
  "dark_purple",
  "berry",
  "dark_indigo",
  "indigo",
  "navy",
  "bright-blue",
  "dark-blue",
  "aquamarine",
  "chili-blue",
  "river",
  "winter",
  "explosive",
  "american_gray",
  "blackish",
  "brown",
  "orchid",
  "tan",
  "sky",
  "coffee",
  "royal",
  "teal",
  "lavender",
  "steel",
  "lilac",
  "pecan"
] as const;

export type CONTENT_COLORS_VALUES = (typeof contentColors)[number];

export enum ColorStyle {
  REGULAR = "regular",
  HOVER = "hover",
  SELECTED = "selected"
}

export enum ContentColorByName {
  GRASS_GREEN = "grass_green",
  DONE_GREEN = "done-green",
  BRIGHT_GREEN = "bright-green",
  SALADISH = "saladish",
  EGG_YOLK = "egg_yolk",
  WORKING_ORANGE = "working_orange",
  DARK_ORANGE = "dark-orange",
  PEACH = "peach",
  SUNSET = "sunset",
  STUCK_RED = "stuck-red",
  DARK_RED = "dark-red",
  SOFIA_PINK = "sofia_pink",
  LIPSTICK = "lipstick",
  BUBBLE = "bubble",
  PURPLE = "purple",
  DARK_PURPLE = "dark_purple",
  BERRY = "berry",
  DARK_INDIGO = "dark_indigo",
  INDIGO = "indigo",
  NAVY = "navy",
  BRIGHT_BLUE = "bright-blue",
  DARK_BLUE = "dark-blue",
  AQUAMARINE = "aquamarine",
  CHILI_BLUE = "chili-blue",
  RIVER = "river",
  WINTER = "winter",
  EXPLOSIVE = "explosive",
  AMERICAN_GRAY = "american_gray",
  BLACKISH = "blackish",
  BROWN = "brown",
  ORCHID = "orchid",
  TAN = "tan",
  SKY = "sky",
  COFFEE = "coffee",
  ROYAL = "royal",
  TEAL = "teal",
  LAVENDER = "lavender",
  STEEL = "steel",
  LILAC = "lilac",
  PECAN = "pecan"
}

export enum StateSelectedColor {
  POSITIVE = "--positive-color-selected",
  NEGATIVE = "--negative-color-selected",
  PRIMARY = "--primary-selected-color",
  WARNING = "--warning-color-selected"
}
export enum StateSelectedHoverColor {
  POSITIVE = "--positive-color-selected-hover",
  NEGATIVE = "--negative-color-selected-hover",
  PRIMARY = "--primary-selected-hover-color"
}

export const ElementAllowedColor = {
  ...ContentColorByName,
  ...StateSelectedColor,
  ...StateSelectedHoverColor
};

export type ElementColor = (typeof ElementAllowedColor)[keyof typeof ElementAllowedColor] | string;

export const elementColorsNames = Object.values(ElementAllowedColor).reduce((acc: Record<string, string>, key) => {
  acc[key] = key;
  return acc;
}, {});

const getColorKeyByValue = (colorValue: string, colors: Record<string, string>) => {
  return Object.keys(colors)[Object.values(colors).indexOf(colorValue)];
};

export function getElementColor(
  colorValue: keyof typeof ElementAllowedColor | string,
  isSelectedPalette = false,
  isSelectedHoverPalette = false
): string {
  const colorKey = getColorKeyByValue(colorValue, ElementAllowedColor);
  if (!colorKey) {
    return colorValue;
  }

  if (ContentColorByName[colorKey as keyof typeof ContentColorByName]) {
    return `var(--color-${ContentColorByName[colorKey as keyof typeof ContentColorByName]}${
      isSelectedPalette ? "-selected" : ""
    })`;
  }
  if (StateSelectedHoverColor[colorKey as keyof typeof StateSelectedHoverColor] && isSelectedHoverPalette) {
    return `var(${StateSelectedHoverColor[colorKey as keyof typeof StateSelectedHoverColor]})`;
  }
  if (StateSelectedColor[colorKey as keyof typeof StateSelectedColor] && isSelectedPalette) {
    return `var(${StateSelectedColor[colorKey as keyof typeof StateSelectedColor]})`;
  }
}
