export const colorsMap = [
  { color: "--primary-color", description: "Use this to emphasise main ui components" },
  {
    color: "--primary-on-secondary-color",
    description: "Use this to emphasise main ui components on secondary background color"
  },
  { color: "--primary-hover-color", description: "Use only as a hover on primary color" },
  {
    color: "--primary-hover-on-secondary-color",
    description: "Use only as a hover on primary color on secondary background color"
  },
  { color: "--primary-selected-color", description: "Use this to indicate selected state of primary items" },
  {
    color: "--primary-selected-on-secondary-color",
    description: "Use this to indicate selected state of primary items on secondary background color"
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
  // states
  {
    color: "--positive-color",
    description: "Use when you want to indicate sometime positive (success, completion of something...)"
  },
  { color: "--positive-color-hover", description: "Use only as hover color on positive color" },
  { color: "--positive-color-selected", description: "Use only as selected indication for a positive colors" },
  {
    color: "--negative-color",
    description: "Use when you want to indicate a negative action/state (delete, failed action..., error)"
  },
  { color: "--negative-color-hover", description: "Use only as hover color on negative color" },
  { color: "--negative-color-selected", description: "Use as selected indication for negative colors" },
  {
    color: "--private-color",
    description: "Use when you want to indicate that something is private (board, icons...)"
  },
  {
    color: "--shareable-color",
    description: "Use when you want to indicate that something is shareable (board, dashboard...)"
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
  { color: "--allgrey-background-color", description: "Grey background color, stays grey in dark and black themes" }
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
];

export const COLOR_STYLES = {
  REGULAR: "regular",
  HOVER: "hover",
  SELECTED: "selected"
};

export const contentColorsByName = {
  GRASS_GREEN: "grass_green",
  DONE_GREEN: "done-green",
  BRIGHT_GREEN: "bright-green",
  SALADISH: "saladish",
  EGG_YOLK: "egg_yolk",
  WORKING_ORANGE: "working_orange",
  DARK_ORANGE: "dark-orange",
  PEACH: "peach",
  SUNSET: "sunset",
  STUCK_RED: "stuck-red",
  DARK_RED: "dark-red",
  SOFIA_PINK: "sofia_pink",
  LIPSTICK: "lipstick",
  BUBBLE: "bubble",
  PURPLE: "purple",
  DARK_PURPLE: "dark_purple",
  BERRY: "berry",
  DARK_INDIGO: "dark_indigo",
  INDIGO: "indigo",
  NAVY: "navy",
  BRIGHT_BLUE: "bright-blue",
  DARK_BLUE: "dark-blue",
  AQUAMARINE: "aquamarine",
  CHILI_BLUE: "chili-blue",
  RIVER: "river",
  WINTER: "winter",
  EXPLOSIVE: "explosive",
  AMERICAN_GRAY: "american_gray",
  BLACKISH: "blackish",
  BROWN: "brown",
  ORCHID: "orchid",
  TAN: "tan",
  SKY: "sky",
  COFFEE: "coffee",
  ROYAL: "royal",
  TEAL: "teal",
  LAVENDER: "lavender",
  STEEL: "steel",
  LILAC: "lilac",
  PECAN: "pecan"
};

export const stateSelectedColors = {
  POSITIVE: "--positive-color-selected",
  NEGATIVE: "--negative-color-selected",
  PRIMARY: "--primary-selected-color"
};
export const elementAllowedColors = [...Object.keys(contentColorsByName), ...Object.keys(stateSelectedColors)];
export const elementColorsNames = elementAllowedColors.reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {});

export const getElementColor = (colorName, isSelectedPalette = false) => {
  if (contentColorsByName[colorName]) {
    return `var(--color-${contentColorsByName[colorName]}${isSelectedPalette ? "-selected" : ""}`;
  }
  if (stateSelectedColors[colorName] && isSelectedPalette) {
    return `var(${stateSelectedColors[colorName]})`;
  }
  return colorName;
};

export const allMondayColors = [
  "--color-asphalt",
  "--color-light_blue",
  "--color-basic_blue",
  "--color-basic_light_blue",
  "--color-dark_blue",
  "--color-link_color",
  "--color-snow_white",
  "--color-success",
  "--color-success-hover",
  "--color-success-highlight",
  "--color-purple",
  "--color-error",
  "--color-error-hover",
  "--color-error-highlight",
  "--color-placholder_gray",
  "--color-wolf_gray",
  "--color-mud_black",
  "--color-jaco_gray",
  "--color-black",
  "--color-dark_purple",
  "--color-blue_links",
  "--color-bazooka",
  "--color-dark_marble",
  "--color-marble",
  "--color-gainsboro",
  "--color-grass_green",
  "--color-jeans",
  "--color-egg_yolk",
  "--color-saladish",
  "--color-lipstick",
  "--color-working_orange",
  "--color-aqua",
  "--color-brown",
  "--color-blackish",
  "--color-explosive",
  "--color-american_gray",
  "--color-highlight_blue",
  "--color-pulse_text_color",
  "--color-highlight",
  "--color-placeholder_light_gray",
  "--color-scrollbar_gray",
  "--color-timeline_grid_blue",
  "--color-timeline_blue",
  "--color-default_group_color",
  "--color-very_light_gray",
  "--color-pulse_bg",
  "--color-jade",
  "--color-form_purple",
  "--color-form_btn_hover",
  "--color-board_views_grey",
  "--color-board_views_blue",
  "--color-board_views_grey_hover",
  "--color-board_views_blue_secondary",
  "--color-brand-blue",
  "--color-brand-charcoal",
  "--color-brand-gold",
  "--color-brand-green",
  "--color-brand-iris",
  "--color-brand-light-blue",
  "--color-brand-malachite",
  "--color-brand-purple",
  "--color-brand-red",
  "--color-public",
  "--color-private",
  "--color-word-blue",
  "--color-ppt-orange",
  "--color-excel-green",
  "--color-pdf-red",
  "--color-zip-orange",
  "--color-media-blue",
  "--color-surface",
  "--color-burned_eggplant",
  "--color-live_blue",
  "--color-extra_light_gray",
  "--color-glitter",
  "--color-ultra_light_gray",
  "--color-red_shadow",
  "--color-green_shadow",
  "--color-storm_gray",
  "--color-riverstone_gray",
  "--color-ui_grey",
  "--color-border_light_gray",
  "--color-like_red",
  "--color-lime-green",
  "--color-mustered",
  "--color-dark_red",
  "--color-dark-red",
  "--color-trolley-grey",
  "--color-dark-purple",
  "--color-dark-orange",
  "--color-sofia_pink",
  "--color-dark-pink",
  "--color-turquoise",
  "--color-light-pink",
  "--color-red-shadow",
  "--color-orange",
  "--color-yellow",
  "--color-green-shadow",
  "--color-grass-green",
  "--color-blue-links",
  "--color-bright-blue",
  "--color-amethyst",
  "--color-green-haze",
  "--color-sunset",
  "--color-bubble",
  "--color-peach",
  "--color-berry",
  "--color-winter",
  "--color-river",
  "--color-navy",
  "--color-aquamarine",
  "--color-indigo",
  "--color-dark_indigo"
];
