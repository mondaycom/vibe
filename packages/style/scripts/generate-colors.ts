#!/usr/bin/env node

import * as fs from "fs";
import * as path from "path";
import postcss from "postcss";
// @ts-ignore: Missing type declarations
import postcssCustomProperties from "postcss-custom-properties";

const CSS_FILE = path.join(__dirname, "../dist/index.css");
const OUTPUT_FILE = path.join(__dirname, "../src/files/colors-new.json");

interface ThemeColors {
  [key: string]: string;
}

interface Themes {
  [themeName: string]: ThemeColors;
}

const THEME_PATTERNS = {
  "light-app-theme": [":root", ".light-app-theme", ".default-app-theme"],
  "dark-app-theme": [".dark-app-theme"],
  "black-app-theme": [".black-app-theme"],
  "hacker_theme-app-theme": [".hacker_theme-app-theme"]
};

async function generateColors(): Promise<void> {
  const css = fs.readFileSync(CSS_FILE, "utf8");

  const themes: Themes = {};

  for (const [themeName, patterns] of Object.entries(THEME_PATTERNS)) {
    const themeColors = await resolveThemeColors(css, patterns);
    if (Object.keys(themeColors).length > 0) {
      themes[themeName] = themeColors;
    }
  }

  for (const [themeName, colors] of Object.entries(themes)) {
    const resolvedColors: ThemeColors = {};

    for (const [key, value] of Object.entries(colors)) {
      // Only include values that don't contain var() references
      if (!value.includes("var(")) {
        resolvedColors[key] = value;
      }
    }

    themes[themeName] = resolvedColors;
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(themes, null, 2));

  Object.entries(themes).forEach(([theme, colors]) => {
    console.log(`✓ ${theme}: ${Object.keys(colors).length} colors`);
  });
  console.log(`✓ Generated ${OUTPUT_FILE} - all values are final hex/rgb/rgba`);
}

async function resolveThemeColors(css: string, themePatterns: string[]): Promise<ThemeColors> {
  const themeFlattened = flattenThemeToRoot(css, themePatterns);

  const resolved = await postcss([
    postcssCustomProperties({
      preserve: false
    })
  ]).process(themeFlattened, { from: undefined });

  // Extract resolved color values
  const colors: ThemeColors = {};
  const ast = postcss.parse(resolved.css);

  ast.walkDecls(decl => {
    if (isColorProperty(decl.prop)) {
      const key = decl.prop.replace("--", "");
      colors[key] = decl.value;
    }
  });

  return colors;
}

function flattenThemeToRoot(css: string, themePatterns: string[]): string {
  const ast = postcss.parse(css);
  const themeVariables: string[] = [];
  const allVariables: string[] = [];

  ast.walkRules(rule => {
    const isThemeRule = themePatterns.some(pattern => rule.selector.includes(pattern));

    rule.walkDecls(decl => {
      if (isColorProperty(decl.prop)) {
        const variableDecl = `${decl.prop}: ${decl.value};`;

        if (isThemeRule) {
          themeVariables.push(variableDecl);
        } else {
          allVariables.push(variableDecl);
        }
      }
    });
  });

  const flattenedVariables = [...allVariables, ...themeVariables];
  return `:root {\n  ${flattenedVariables.join("\n  ")}\n}`;
}

function isColorProperty(prop: string): boolean {
  return prop.startsWith("--") && prop.includes("color");
}

if (require.main === module) {
  generateColors().catch(console.error);
}

export { generateColors };
