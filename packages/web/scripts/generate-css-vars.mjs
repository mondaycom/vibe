#!/usr/bin/env node
/**
 * Generates CSS custom property theme files from @ezds/tokens.
 *
 * Reads the compiled token JS modules and var-mapping.json, then writes
 * light.css, dark.css, and black.css into src/themes/.
 *
 * Usage: node scripts/generate-css-vars.mjs
 */

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = path.resolve(__dirname, "..");
const THEMES_DIR = path.join(WEB_ROOT, "src", "themes");
const TOKENS_DIST = path.resolve(WEB_ROOT, "..", "tokens", "dist");

function figmaPathToCssVar(tokenPath) {
  return `--ezds-${tokenPath.replace(/\//g, "-")}`;
}

/** Returns the CSS value string for a dimension token (adds px unit only for numeric pixel values). */
function dimensionValue(name, value) {
  // Shadow values are strings — emit as-is
  if (name.startsWith("shadow/")) return value;
  // Opacity is a unitless ratio
  if (name.startsWith("disabled/")) return String(value);
  // Numeric zero needs no unit
  if (value === 0) return "0";
  // All other dimensions are pixel values
  return `${value}px`;
}

/**
 * Returns the CSS value string for a component token.
 * Appends `px` only for numeric length values (radius, margin, padding, border-width).
 * Unitless ratios, opacity, z-index, scale, weight, and string values are emitted as-is.
 */
function componentValue(name, value) {
  if (typeof value === "string") return value;
  if (value === 0) return "0";
  const unitlessKeys = ["opacity", "z-index", "scale", "ratio", "weight", "multiplier"];
  const isUnitless = unitlessKeys.some(k => name.includes(k));
  if (!isUnitless && typeof value === "number" && value > 0) return `${value}px`;
  return String(value);
}

/** Returns the CSS value string for a typography token. */
function typographyValue(name, value) {
  // Font families are quoted strings — emit as-is
  if (name.startsWith("font-family/")) return value;
  // Font weights are unitless numbers
  if (name.startsWith("font-weight/")) return String(value);
  // Letter spacing uses px
  if (name.startsWith("letter-spacing/")) return `${value}px`;
  // Font sizes and line heights use px
  return `${value}px`;
}

async function loadTokens() {
  const [colors, dimensions, typography, components, motion] = await Promise.all([
    import(path.join(TOKENS_DIST, "colors.js")).then(m => m.colors),
    import(path.join(TOKENS_DIST, "dimensions.js")).then(m => m.dimensions),
    import(path.join(TOKENS_DIST, "typography.js")).then(m => m.typography),
    import(path.join(TOKENS_DIST, "components.js")).then(m => m.components),
    import(path.join(TOKENS_DIST, "motion.js")).then(m => m.motion),
  ]);
  return { colors, dimensions, typography, components, motion };
}

function loadVarMapping() {
  const raw = fs.readFileSync(path.join(__dirname, "var-mapping.json"), "utf8");
  return JSON.parse(raw);
}

function generateThemeCSS(mode, tokens, varMapping) {
  const lines = [];

  lines.push("  /* ═══ EZDS color tokens ═══ */");
  for (const [name, value] of Object.entries(tokens.colors[mode])) {
    lines.push(`  ${figmaPathToCssVar(name)}: ${value};`);
  }

  lines.push("");
  lines.push("  /* ═══ EZDS dimension tokens (spacing, radius, border, layout, shadow, opacity) ═══ */");
  for (const [name, value] of Object.entries(tokens.dimensions)) {
    lines.push(`  ${figmaPathToCssVar(name)}: ${dimensionValue(name, value)};`);
  }

  lines.push("");
  lines.push("  /* ═══ EZDS typography tokens ═══ */");
  for (const [name, value] of Object.entries(tokens.typography)) {
    lines.push(`  ${figmaPathToCssVar(name)}: ${typographyValue(name, value)};`);
  }

  lines.push("");
  lines.push("  /* ═══ EZDS motion tokens ═══ */");
  for (const [name, value] of Object.entries(tokens.motion)) {
    lines.push(`  ${figmaPathToCssVar(name)}: ${value};`);
  }

  lines.push("");
  lines.push("  /* ═══ EZDS component tokens ═══ */");
  for (const [name, value] of Object.entries(tokens.components)) {
    lines.push(`  ${figmaPathToCssVar(name)}: ${componentValue(name, value)};`);
  }

  lines.push("");
  lines.push("  /* ═══════════════════════════════════════════════════════════ */");
  lines.push("  /* Aliases: old Vibe vars → EZDS vars (internal bridge layer) */");
  lines.push("  /* DO NOT use these in new code — use --ezds-* vars above     */");
  lines.push("  /* ═══════════════════════════════════════════════════════════ */");

  lines.push("");
  lines.push("  /* Color aliases */");
  for (const [oldVar, newRef] of Object.entries(varMapping.colorAliases ?? {})) {
    lines.push(`  ${oldVar}: ${newRef};`);
  }

  lines.push("");
  lines.push("  /* Spacing aliases */");
  for (const [oldVar, newRef] of Object.entries(varMapping.spacingAliases ?? {})) {
    lines.push(`  ${oldVar}: ${newRef};`);
  }

  lines.push("");
  lines.push("  /* Motion aliases */");
  for (const [oldVar, newRef] of Object.entries(varMapping.motionAliases ?? {})) {
    lines.push(`  ${oldVar}: ${newRef};`);
  }

  lines.push("");
  lines.push("  /* Border-radius aliases */");
  for (const [oldVar, newRef] of Object.entries(varMapping.borderRadiusAliases ?? {})) {
    lines.push(`  ${oldVar}: ${newRef};`);
  }

  lines.push("");
  lines.push("  /* Font aliases */");
  for (const [oldVar, newRef] of Object.entries(varMapping.fontAliases ?? {})) {
    lines.push(`  ${oldVar}: ${newRef};`);
  }

  lines.push("");
  lines.push("  /* Opacity aliases */");
  for (const [oldVar, newRef] of Object.entries(varMapping.opacityAliases ?? {})) {
    lines.push(`  ${oldVar}: ${newRef};`);
  }

  lines.push("");
  lines.push("  /* Shadow aliases */");
  for (const [oldVar, newRef] of Object.entries(varMapping.shadowAliases ?? {})) {
    lines.push(`  ${oldVar}: ${newRef};`);
  }

  const selector =
    mode === "light"
      ? ':root, [data-theme="light"]'
      : `[data-theme="${mode}"]`;

  return `${selector} {\n${lines.join("\n")}\n}\n`;
}

async function main() {
  const tokens = await loadTokens();
  const varMapping = loadVarMapping();

  fs.mkdirSync(THEMES_DIR, { recursive: true });

  for (const mode of ["light", "dark", "black"]) {
    const css = generateThemeCSS(mode, tokens, varMapping);
    const outPath = path.join(THEMES_DIR, `${mode}.css`);
    fs.writeFileSync(outPath, css, "utf8");
    console.log(`Generated ${outPath} (${css.split("\n").length} lines)`);
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
