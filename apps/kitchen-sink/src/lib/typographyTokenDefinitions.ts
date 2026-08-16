export type TypographyTokenDef = {
  id: string;
  label: string;
  cssVar: string;
  description?: string;
  defaultValue: string;
  unit?: string;
};

export type TypographyTokenSection = {
  id: string;
  title: string;
  description?: string;
  tokens: TypographyTokenDef[];
};

const px = (value: string) => ({ defaultValue: value, unit: "px" as const });

export const TYPOGRAPHY_TOKEN_SECTIONS: TypographyTokenSection[] = [
  {
    id: "families",
    title: "Font families",
    description: "Base and title font stacks.",
    tokens: [
      {
        id: "font-family",
        label: "font-family",
        cssVar: "--font-family",
        description: "Default UI font stack",
        defaultValue: "Figtree,Roboto,Noto Sans Hebrew,Noto Kufi Arabic,Noto Sans JP,sans-serif",
      },
      {
        id: "title-font-family",
        label: "title-font-family",
        cssVar: "--title-font-family",
        description: "Heading font stack",
        defaultValue: "Poppins,Roboto,Noto Sans Hebrew,Noto Kufi Arabic,Noto Sans JP,sans-serif",
      },
    ],
  },
  {
    id: "weights",
    title: "Font weights",
    tokens: [
      {
        id: "font-weight-very-light",
        label: "font-weight-very-light",
        cssVar: "--font-weight-very-light",
        description: "Very light weight",
        defaultValue: "200",
      },
      {
        id: "font-weight-light",
        label: "font-weight-light",
        cssVar: "--font-weight-light",
        description: "Light weight",
        defaultValue: "300",
      },
      {
        id: "font-weight-normal",
        label: "font-weight-normal",
        cssVar: "--font-weight-normal",
        description: "Normal weight",
        defaultValue: "400",
      },
      {
        id: "font-weight-bold",
        label: "font-weight-bold",
        cssVar: "--font-weight-bold",
        description: "Bold weight",
        defaultValue: "500",
      },
    ],
  },
  {
    id: "sizes",
    title: "Font sizes",
    description: "Core size scale used across text styles.",
    tokens: [
      {
        id: "font-size-10",
        label: "font-size-10",
        cssVar: "--font-size-10",
        description: "Extra small text",
        ...px("14"),
      },
      {
        id: "font-size-20",
        label: "font-size-20",
        cssVar: "--font-size-20",
        description: "Small text / labels",
        ...px("14"),
      },
      {
        id: "font-size-30",
        label: "font-size-30",
        cssVar: "--font-size-30",
        description: "Body text",
        ...px("16"),
      },
      {
        id: "font-size-40",
        label: "font-size-40",
        cssVar: "--font-size-40",
        description: "Large text",
        ...px("18"),
      },
      {
        id: "font-size-50",
        label: "font-size-50",
        cssVar: "--font-size-50",
        description: "Heading scale",
        ...px("24"),
      },
      {
        id: "font-size-60",
        label: "font-size-60",
        cssVar: "--font-size-60",
        description: "Largest heading scale",
        ...px("30"),
      },
    ],
  },
  {
    id: "line-heights",
    title: "Line heights",
    description: "Core line-height scale paired with font sizes.",
    tokens: [
      {
        id: "font-line-height-10",
        label: "font-line-height-10",
        cssVar: "--font-line-height-10",
        description: "Extra small line height",
        ...px("18"),
      },
      {
        id: "font-line-height-20",
        label: "font-line-height-20",
        cssVar: "--font-line-height-20",
        description: "Small line height",
        ...px("24"),
      },
      {
        id: "font-line-height-30",
        label: "font-line-height-30",
        cssVar: "--font-line-height-30",
        description: "Body line height",
        ...px("24"),
      },
      {
        id: "font-line-height-40",
        label: "font-line-height-40",
        cssVar: "--font-line-height-40",
        description: "Large line height",
        ...px("24"),
      },
      {
        id: "font-line-height-50",
        label: "font-line-height-50",
        cssVar: "--font-line-height-50",
        description: "Heading line height",
        ...px("32"),
      },
      {
        id: "font-line-height-60",
        label: "font-line-height-60",
        cssVar: "--font-line-height-60",
        description: "Largest heading line height",
        ...px("42"),
      },
    ],
  },
  {
    id: "semantic-sizes",
    title: "Semantic font sizes",
    description: "Named sizes mapped to the core scale.",
    tokens: [
      {
        id: "font-size-h1",
        label: "font-size-h1",
        cssVar: "--font-size-h1",
        description: "H1 size",
        ...px("30"),
      },
      {
        id: "font-size-h2",
        label: "font-size-h2",
        cssVar: "--font-size-h2",
        description: "H2 size",
        ...px("24"),
      },
      {
        id: "font-size-h3",
        label: "font-size-h3",
        cssVar: "--font-size-h3",
        description: "H3 size",
        ...px("24"),
      },
      {
        id: "font-size-h4",
        label: "font-size-h4",
        cssVar: "--font-size-h4",
        description: "H4 size",
        ...px("18"),
      },
      {
        id: "font-size-h5",
        label: "font-size-h5",
        cssVar: "--font-size-h5",
        description: "H5 size",
        ...px("16"),
      },
      {
        id: "font-size-general-label",
        label: "font-size-general-label",
        cssVar: "--font-size-general-label",
        description: "General label size",
        ...px("14"),
      },
      {
        id: "font-size-paragraph",
        label: "font-size-paragraph",
        cssVar: "--font-size-paragraph",
        description: "Paragraph size",
        ...px("16"),
      },
      {
        id: "font-size-subtext",
        label: "font-size-subtext",
        cssVar: "--font-size-subtext",
        description: "Subtext size",
        ...px("14"),
      },
    ],
  },
  {
    id: "semantic-line-heights",
    title: "Semantic line heights",
    tokens: [
      {
        id: "font-line-height-h1",
        label: "font-line-height-h1",
        cssVar: "--font-line-height-h1",
        description: "H1 line height",
        ...px("42"),
      },
      {
        id: "font-line-height-h2",
        label: "font-line-height-h2",
        cssVar: "--font-line-height-h2",
        description: "H2 line height",
        ...px("32"),
      },
      {
        id: "font-line-height-h3",
        label: "font-line-height-h3",
        cssVar: "--font-line-height-h3",
        description: "H3 line height",
        ...px("32"),
      },
      {
        id: "font-line-height-h4",
        label: "font-line-height-h4",
        cssVar: "--font-line-height-h4",
        description: "H4 line height",
        ...px("24"),
      },
      {
        id: "font-line-height-h5",
        label: "font-line-height-h5",
        cssVar: "--font-line-height-h5",
        description: "H5 line height",
        ...px("24"),
      },
      {
        id: "font-line-height-general-label",
        label: "font-line-height-general-label",
        cssVar: "--font-line-height-general-label",
        description: "General label line height",
        ...px("24"),
      },
      {
        id: "font-line-height-paragraph",
        label: "font-line-height-paragraph",
        cssVar: "--font-line-height-paragraph",
        description: "Paragraph line height",
        ...px("24"),
      },
      {
        id: "font-line-height-subtext",
        label: "font-line-height-subtext",
        cssVar: "--font-line-height-subtext",
        description: "Subtext line height",
        ...px("18"),
      },
    ],
  },
  {
    id: "text-styles",
    title: "Text styles",
    description: "Full font shorthand tokens for heading and text variants.",
    tokens: [
      {
        id: "font-h1",
        label: "font-h1",
        cssVar: "--font-h1",
        defaultValue: "var(--font-weight-bold) var(--font-size-h1)/var(--font-line-height-h1) var(--title-font-family)",
      },
      {
        id: "font-h2",
        label: "font-h2",
        cssVar: "--font-h2",
        defaultValue: "var(--font-weight-bold) var(--font-size-h2)/var(--font-line-height-h2) var(--title-font-family)",
      },
      {
        id: "font-h3",
        label: "font-h3",
        cssVar: "--font-h3",
        defaultValue: "var(--font-weight-light) var(--font-size-h3)/var(--font-line-height-h3) var(--title-font-family)",
      },
      {
        id: "font-h4",
        label: "font-h4",
        cssVar: "--font-h4",
        defaultValue: "var(--font-weight-bold) var(--font-size-h4)/var(--font-line-height-h4) var(--title-font-family)",
      },
      {
        id: "font-h5",
        label: "font-h5",
        cssVar: "--font-h5",
        defaultValue: "var(--font-weight-bold) var(--font-size-h5)/var(--font-line-height-h5) var(--font-family)",
      },
      {
        id: "font-general-label",
        label: "font-general-label",
        cssVar: "--font-general-label",
        defaultValue: "var(--font-weight-normal) var(--font-size-general-label)/var(--font-line-height-general-label) var(--font-family)",
      },
      {
        id: "font-paragraph",
        label: "font-paragraph",
        cssVar: "--font-paragraph",
        defaultValue: "var(--font-weight-normal) var(--font-size-paragraph)/var(--font-line-height-paragraph) var(--font-family)",
      },
      {
        id: "font-subtext",
        label: "font-subtext",
        cssVar: "--font-subtext",
        defaultValue: "var(--font-weight-normal) var(--font-size-subtext)/var(--font-line-height-subtext) var(--font-family)",
      },
      {
        id: "font-h1-bold",
        label: "font-h1-bold",
        cssVar: "--font-h1-bold",
        defaultValue: "700 32px/40px var(--title-font-family)",
      },
      {
        id: "font-h1-medium",
        label: "font-h1-medium",
        cssVar: "--font-h1-medium",
        defaultValue: "600 32px/40px var(--title-font-family)",
      },
      {
        id: "font-h1-normal",
        label: "font-h1-normal",
        cssVar: "--font-h1-normal",
        defaultValue: "500 32px/40px var(--title-font-family)",
      },
      {
        id: "font-h1-light",
        label: "font-h1-light",
        cssVar: "--font-h1-light",
        defaultValue: "300 32px/40px var(--title-font-family)",
      },
      {
        id: "font-h2-bold",
        label: "font-h2-bold",
        cssVar: "--font-h2-bold",
        defaultValue: "700 24px/30px var(--title-font-family)",
      },
      {
        id: "font-h2-medium",
        label: "font-h2-medium",
        cssVar: "--font-h2-medium",
        defaultValue: "600 24px/30px var(--title-font-family)",
      },
      {
        id: "font-h2-normal",
        label: "font-h2-normal",
        cssVar: "--font-h2-normal",
        defaultValue: "500 24px/30px var(--title-font-family)",
      },
      {
        id: "font-h2-light",
        label: "font-h2-light",
        cssVar: "--font-h2-light",
        defaultValue: "300 24px/30px var(--title-font-family)",
      },
      {
        id: "font-h3-bold",
        label: "font-h3-bold",
        cssVar: "--font-h3-bold",
        defaultValue: "700 18px/24px var(--title-font-family)",
      },
      {
        id: "font-h3-medium",
        label: "font-h3-medium",
        cssVar: "--font-h3-medium",
        defaultValue: "600 18px/24px var(--title-font-family)",
      },
      {
        id: "font-h3-normal",
        label: "font-h3-normal",
        cssVar: "--font-h3-normal",
        defaultValue: "500 18px/24px var(--title-font-family)",
      },
      {
        id: "font-h3-light",
        label: "font-h3-light",
        cssVar: "--font-h3-light",
        defaultValue: "300 18px/24px var(--title-font-family)",
      },
      {
        id: "font-text1-bold",
        label: "font-text1-bold",
        cssVar: "--font-text1-bold",
        defaultValue: "700 16px/22px var(--font-family)",
      },
      {
        id: "font-text1-medium",
        label: "font-text1-medium",
        cssVar: "--font-text1-medium",
        defaultValue: "600 16px/22px var(--font-family)",
      },
      {
        id: "font-text1-normal",
        label: "font-text1-normal",
        cssVar: "--font-text1-normal",
        defaultValue: "400 16px/22px var(--font-family)",
      },
      {
        id: "font-text2-bold",
        label: "font-text2-bold",
        cssVar: "--font-text2-bold",
        defaultValue: "700 14px/20px var(--font-family)",
      },
      {
        id: "font-text2-medium",
        label: "font-text2-medium",
        cssVar: "--font-text2-medium",
        defaultValue: "600 14px/20px var(--font-family)",
      },
      {
        id: "font-text2-normal",
        label: "font-text2-normal",
        cssVar: "--font-text2-normal",
        defaultValue: "400 14px/20px var(--font-family)",
      },
      {
        id: "font-text3-bold",
        label: "font-text3-bold",
        cssVar: "--font-text3-bold",
        defaultValue: "700 12px/16px var(--font-family)",
      },
      {
        id: "font-text3-medium",
        label: "font-text3-medium",
        cssVar: "--font-text3-medium",
        defaultValue: "600 12px/16px var(--font-family)",
      },
      {
        id: "font-text3-normal",
        label: "font-text3-normal",
        cssVar: "--font-text3-normal",
        defaultValue: "400 12px/16px var(--font-family)",
      },
    ],
  },
];
