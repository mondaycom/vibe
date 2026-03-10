#!/usr/bin/env node
/**
 * Migrates old Vibe CSS var references in component SCSS files to their
 * direct --ezds-* equivalents, eliminating the alias dependency for component code.
 *
 * Usage:
 *   node scripts/migrate-scss-vars.mjs --dry-run   (preview changes)
 *   node scripts/migrate-scss-vars.mjs             (apply changes)
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, extname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __dirname = join(fileURLToPath(import.meta.url), "..");
const ROOT = join(__dirname, "..");
const require = createRequire(import.meta.url);

const varMapping = JSON.parse(
  readFileSync(join(ROOT, "packages/web/scripts/var-mapping.json"), "utf8")
);

const dryRun = process.argv.includes("--dry-run");

// Build replacement map: old CSS var name → --ezds-* var name (unwrap var(...))
const replacements = {};
for (const section of [
  "colorAliases",
  "spacingAliases",
  "motionAliases",
  "borderRadiusAliases",
  "fontAliases",
  "opacityAliases",
  "shadowAliases",
]) {
  if (!varMapping[section]) continue;
  for (const [oldVar, newRef] of Object.entries(varMapping[section])) {
    const match = newRef.match(/var\((--ezds-[^)]+)\)/);
    const ezdsVar = match ? match[1] : newRef;
    replacements[oldVar] = ezdsVar;
  }
}

const TARGET_DIRS = [
  join(ROOT, "packages/core/src"),
  join(ROOT, "packages/components"),
  join(ROOT, "packages/base/src"),
];

let totalFiles = 0;
let changedFiles = 0;

function walkDir(dir, callback) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath, callback);
    } else if (extname(fullPath) === ".scss") {
      callback(fullPath);
    }
  }
}

function migrateFile(filePath) {
  let src = readFileSync(filePath, "utf-8");
  let changed = false;

  for (const [oldVar, newVar] of Object.entries(replacements)) {
    // Match var(--old-name) and var(--old-name, fallback) — preserve fallbacks
    const escaped = oldVar.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(
      `var\\(${escaped}((?:,\\s*[^)]+)?)\\)`,
      "g"
    );
    const next = src.replace(regex, (_, fallback) =>
      fallback ? `var(${newVar}${fallback})` : `var(${newVar})`
    );
    if (next !== src) {
      src = next;
      changed = true;
    }
  }

  totalFiles++;
  if (changed) {
    changedFiles++;
    if (dryRun) {
      console.log(`[DRY-RUN] Would update: ${filePath}`);
    } else {
      writeFileSync(filePath, src);
      console.log(`Updated: ${filePath}`);
    }
  }
}

for (const dir of TARGET_DIRS) {
  try {
    walkDir(dir, migrateFile);
  } catch (e) {
    if (e.code !== "ENOENT") throw e;
  }
}

console.log(
  `\n${dryRun ? "[DRY-RUN] " : ""}${changedFiles} of ${totalFiles} SCSS files ${dryRun ? "would be updated" : "updated"}.`
);
