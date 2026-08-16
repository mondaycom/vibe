import type { ThemeSubPage, TokenFieldDef, TokenOverrides } from "../types";

export const EMPTY_TOKEN_OVERRIDES: TokenOverrides = {
  colors: {},
  radius: {},
  spacing: {},
  typography: {},
};

export const TOKEN_FIELDS_BY_SUBPAGE: Record<ThemeSubPage, TokenFieldDef[]> = {
  colors: [],
  radius: [
    {
      id: "radius-small",
      label: "border-radius-small",
      description: "Small corner radius",
      kind: "css-var",
      cssVar: "--border-radius-small",
      unit: "px",
      defaultValue: "4",
    },
    {
      id: "radius-medium",
      label: "border-radius-medium",
      description: "Medium corner radius",
      kind: "css-var",
      cssVar: "--border-radius-medium",
      unit: "px",
      defaultValue: "8",
    },
    {
      id: "radius-big",
      label: "border-radius-big",
      description: "Large corner radius",
      kind: "css-var",
      cssVar: "--border-radius-big",
      unit: "px",
      defaultValue: "16",
    },
    {
      id: "radius-full",
      label: "border-radius-full",
      description: "Fully rounded corner radius",
      kind: "css-var",
      cssVar: "--border-radius-full",
      unit: "px",
      defaultValue: "99",
    },
  ],
  typography: [],
};
