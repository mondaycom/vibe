export const typography = {
  'font-size/body-xxs': 10,
  'font-size/body-xs': 12,
  'font-size/body-sm': 14,
  'font-size/body-md': 16,
  'font-size/body-lg': 18,
  'font-size/body-xl': 20,
  'font-size/title-xs': 24,
  'font-size/title-sm': 28,
  'font-size/title-md': 36,
  'font-size/title-lg': 48,
  'line-height/body-xxs': 16,
  'line-height/body-xs': 16,
  'line-height/body-sm': 20,
  'line-height/body-md': 24,
  'line-height/body-lg': 28,
  'line-height/body-xl': 32,
  'line-height/title-xs': 32,
  'line-height/title-sm': 36,
  'line-height/title-md': 44,
  'line-height/title-lg': 60,
  'letter-spacing/default': -1,
  // Font families
  'font-family/body': '"IBM Plex Sans", Roboto, Helvetica, Arial, sans-serif',
  'font-family/title': 'Poppins, Roboto, Helvetica, Arial, sans-serif',
  // Font weights (Figma: weight/40=Regular, weight/50=Medium, weight/60=SemiBold)
  'font-weight/20': 200,
  'font-weight/30': 300,
  'font-weight/40': 400,
  'font-weight/50': 500,
  'font-weight/60': 600,
  'font-weight/70': 700,
} as const;

// ⚠️ Font smoothing (-webkit-font-smoothing, -moz-osx-font-smoothing) is NOT here.
// These are browser directives, not CSS custom property values.
// Applied as static rules on body in packages/web/src/typography.scss.

export type TypographyToken = keyof typeof typography;
