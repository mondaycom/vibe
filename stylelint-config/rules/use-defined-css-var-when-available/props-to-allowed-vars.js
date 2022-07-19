const SPACINGS = [
  "--spacing-xs",
  "--spacing-small",
  "--spacing-medium",
  "--spacing-large",
  "--spacing-xl",
  "--spacing-xxl",
  "--spacing-xxxl"
];

const BORDER_RADIUSES = ["--border-radius-small", "--border-radius-medium", "--border-radius-big"];

const BORDER_WIDTHS = ["--border-width"];

const BORDER_STYLES = ["--border-style"];

const FONT_SIZES = [
  // since "--font-size-10" and "--font-size-20" have the same value, we need to pick only one of them as "valid value", to allow autofix
  // "--font-size-10",
  "--font-size-20",
  "--font-size-30",
  "--font-size-40",
  "--font-size-50",
  "--font-size-60",
  "--font-size-h1",
  "--font-size-h2",
  "--font-size-h3",
  "--font-size-h4",
  "--font-size-h5",
  "--font-size-general-label",
  "--font-size-paragraph",
  "--font-size-subtext"
];

const FONT_WEIGHTS = ["--font-weight-very-light", "--font-weight-light", "--font-weight-normal", "--font-weight-bold"];

const FONT_LINE_HEIGHTS = [
  "--font-line-height-10",
  // since "--font-line-height-20", "--font-line-height-30" and "--font-line-height-40" have the same value, we need to pick only one of them as "valid value", to allow autofix
  // "--font-line-height-20",
  // "--font-line-height-30",
  "--font-line-height-40",
  "--font-line-height-50",
  "--font-line-height-60",
  "--font-line-height-h1",
  "--font-line-height-h2",
  "--font-line-height-h3",
  "--font-line-height-h4",
  "--font-line-height-h5",
  "--font-line-height-general-label",
  "--font-line-height-paragraph",
  "--font-line-height-subtext"
];

const ANIMATION_TIMING = [
  "--motion-timing-enter",
  "--motion-timing-exit",
  "--motion-timing-transition",
  "--motion-timing-emphasize",
  "--expand-animation-timing"
];

const ANIMATION_DURATION = [
  "--motion-productive-short",
  "--motion-productive-medium",
  "--motion-productive-long",
  "--motion-expressive-short",
  "--motion-expressive-long"
];

const SPACING_PROPS = [
  "padding",
  "padding-top",
  "padding-bottom",
  "padding-left",
  "padding-right",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-block",
  "padding-block-end",
  "padding-block-start",

  "margin",
  "margin-top",
  "margin-bottom",
  "margin-left",
  "margin-right",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-block",
  "margin-block-end",
  "margin-block-start",

  "inset",
  "inset-end",
  "inset-start"
];

const BORDER_RADIUSES_PROPS = [
  "border-radius",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-start-start-radius",
  "border-start-end-radius",
  "border-end-start-radius",
  "border-end-end-radius"
];

const BORDER_WIDTHS_PROPS = ["border", "border-width"];

const BORDER_STYLES_PROPS = ["border", "border-style"];

const TIMING_FUNCTION_PROPS = ["transition", "transition-timing", "animation", "animation-timing-function"];

const DURATION_FUNCTION_PROPS = ["transition", "transition-duration", "animation", "animation-duration"];

const OPACITY_PROPS = ["opacity"];

function mapPropsToAllowedVars(propNames, allowedVars, recommended = undefined) {
  allowedVars = Array.isArray(allowedVars) ? allowedVars : [allowedVars];
  propNames = Array.isArray(propNames) ? propNames : [propNames];

  return propNames.reduce(
    (result, propName) => ({
      ...result,
      [propName]: { allowedVars, recommended }
    }),
    {}
  );
}

// List the CSS props we want to lint, and map each one to the values we would prefer to use.
// For example, let's say that the key "border-radius" is mapped to --border-radius-small and --border-radius-medium.
// This means that if --border-radius-small or --border-radius-medium can be used while linting a rule with the property "border-radius", we will show an error

const PROPS_TO_ALLOWED_VARS = {
  ...mapPropsToAllowedVars(SPACING_PROPS, SPACINGS),
  ...mapPropsToAllowedVars(BORDER_RADIUSES_PROPS, BORDER_RADIUSES),
  ...mapPropsToAllowedVars(BORDER_WIDTHS_PROPS, BORDER_WIDTHS),
  ...mapPropsToAllowedVars(BORDER_STYLES_PROPS, BORDER_STYLES),
  ...mapPropsToAllowedVars("line-height", FONT_LINE_HEIGHTS, [
    "--font-line-height-subtext",
    "--font-line-height-h1",
    "--font-line-height-h2",
    "--font-line-height-h4"
  ]),
  ...mapPropsToAllowedVars("font-weight", FONT_WEIGHTS),
  ...mapPropsToAllowedVars("font-size", FONT_SIZES, [
    "--font-size-h1",
    "--font-size-h2",
    "--font-size-h4",
    "--font-size-h5",
    "--font-size-general-label"
  ]),
  ...mapPropsToAllowedVars(TIMING_FUNCTION_PROPS, ANIMATION_TIMING, ["--expand-animation-timing"]),
  ...mapPropsToAllowedVars(DURATION_FUNCTION_PROPS, ANIMATION_DURATION, ["--animation-expressive-short"]),
  ...mapPropsToAllowedVars(OPACITY_PROPS, "--disabled-component-opacity"),

  "font-family": { allowedVars: ["--font-family", "--h1-font-family"] },
  "-webkit-font-smoothing": { allowedVars: ["--font-smoothing-webkit"] },
  "-moz-osx-font-smoothing": { allowedVars: ["--font-smoothing-moz"] }
};

module.exports = {
  PROPS_TO_ALLOWED_VARS
};
