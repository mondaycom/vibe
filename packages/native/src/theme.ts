import { colors, dimensions, typography, components, motion } from "@ezds/tokens";
import type { EZDSTheme } from "./types";

function toNativeColors(modeColors: Record<string, string>): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(modeColors)) {
    result[key.replace(/\//g, "_")] = value;
  }
  return result;
}

function toNativeMotion(): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(motion)) {
    result[key.replace(/\//g, "_")] = value;
  }
  return result;
}

function buildTypography() {
  const fontSize: Record<string, number> = {};
  const lineHeight: Record<string, number> = {};
  const letterSpacing: Record<string, number> = {};

  for (const [key, value] of Object.entries(typography)) {
    if (key.startsWith("font-size/") && typeof value === "number") {
      fontSize[key.replace("font-size/", "").replace(/-/g, "_")] = value;
    } else if (key.startsWith("line-height/") && typeof value === "number") {
      lineHeight[key.replace("line-height/", "").replace(/-/g, "_")] = value;
    } else if (key.startsWith("letter-spacing/") && typeof value === "number") {
      letterSpacing[key.replace("letter-spacing/", "").replace(/-/g, "_")] = value;
    }
  }

  return {
    fontFamily: {
      body: typography["font-family/body"] as string,
      title: typography["font-family/title"] as string,
    },
    fontWeight: {
      veryLight: typography["font-weight/20"] as number,
      light: typography["font-weight/30"] as number,
      regular: typography["font-weight/40"] as number,
      medium: typography["font-weight/50"] as number,
      semiBold: typography["font-weight/60"] as number,
      bold: typography["font-weight/70"] as number,
    },
    fontSize,
    lineHeight,
    letterSpacing,
  };
}

const nativeMotion = toNativeMotion();
const nativeTypography = buildTypography();

const shadow = {
  xs: dimensions["shadow/xs"] as string,
  small: dimensions["shadow/small"] as string,
  medium: dimensions["shadow/medium"] as string,
  large: dimensions["shadow/large"] as string,
};

export const lightTheme: EZDSTheme = {
  colors: toNativeColors(colors.light),
  spacing: Object.fromEntries(Object.entries(dimensions).filter(([k]) => !k.startsWith("shadow/"))),
  typography: nativeTypography,
  motion: nativeMotion,
  shadow,
  components: { ...components },
};

export const darkTheme: EZDSTheme = {
  colors: toNativeColors(colors.dark),
  spacing: Object.fromEntries(Object.entries(dimensions).filter(([k]) => !k.startsWith("shadow/"))),
  typography: nativeTypography,
  motion: nativeMotion,
  shadow,
  components: { ...components },
};

export const blackTheme: EZDSTheme = {
  colors: toNativeColors(colors.black),
  spacing: Object.fromEntries(Object.entries(dimensions).filter(([k]) => !k.startsWith("shadow/"))),
  typography: nativeTypography,
  motion: nativeMotion,
  shadow,
  components: { ...components },
};
