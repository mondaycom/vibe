/** Color key with Figma path slashes replaced by underscores for RN usage. */
export type NativeColorKey = string;

export interface EZDSThemeTypography {
  fontFamily: { body: string; title: string };
  fontWeight: { veryLight: number; light: number; regular: number; medium: number; semiBold: number; bold: number };
  fontSize: Record<string, number>;
  lineHeight: Record<string, number>;
  letterSpacing: Record<string, number>;
}

export interface EZDSThemeShadow {
  xs: string;
  small: string;
  medium: string;
  large: string;
}

export interface EZDSTheme {
  colors: Record<NativeColorKey, string>;
  spacing: Record<string, number | string>;
  typography: EZDSThemeTypography;
  motion: Record<string, string>;
  shadow: EZDSThemeShadow;
  components: Record<string, number>;
}
