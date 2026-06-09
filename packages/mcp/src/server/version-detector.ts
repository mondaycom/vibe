import { readFile } from "fs/promises";
import { join, dirname } from "path";

export type VibeMajorVersion = 3 | 4;

const DEFAULT_VERSION: VibeMajorVersion = 4;

let cachedVersion: VibeMajorVersion | null = null;

export async function detectVibeVersion(): Promise<VibeMajorVersion> {
  if (cachedVersion !== null) {
    return cachedVersion;
  }

  const detected = await resolveVersion();
  cachedVersion = detected;
  console.error(`[Vibe MCP] Detected Vibe major version: ${detected}`);
  return detected;
}

async function resolveVersion(): Promise<VibeMajorVersion> {
  const fromNodeModules = await detectFromNodeModules();
  if (fromNodeModules !== null) {
    return fromNodeModules;
  }

  const fromPackageJson = await detectFromPackageJson();
  if (fromPackageJson !== null) {
    return fromPackageJson;
  }

  console.error(`[Vibe MCP] Could not detect Vibe version, defaulting to v${DEFAULT_VERSION}`);
  return DEFAULT_VERSION;
}

async function detectFromNodeModules(): Promise<VibeMajorVersion | null> {
  let dir = process.cwd();

  for (let i = 0; i < 10; i++) {
    const pkgPath = join(dir, "node_modules", "@vibe", "core", "package.json");
    try {
      const content = await readFile(pkgPath, "utf-8");
      const pkg = JSON.parse(content);
      const major = parseMajor(pkg.version);
      if (major !== null) {
        console.error(`[Vibe MCP] Found @vibe/core@${pkg.version} at ${pkgPath}`);
        return major;
      }
    } catch {
      // not found at this level, walk up
    }

    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }

  return null;
}

async function detectFromPackageJson(): Promise<VibeMajorVersion | null> {
  let dir = process.cwd();

  for (let i = 0; i < 10; i++) {
    const pkgPath = join(dir, "package.json");
    try {
      const content = await readFile(pkgPath, "utf-8");
      const pkg = JSON.parse(content);

      const allDeps = {
        ...pkg.dependencies,
        ...pkg.devDependencies,
      };

      const vibeRange = allDeps?.["@vibe/core"];
      if (vibeRange) {
        const major = parseMajorFromRange(vibeRange);
        if (major !== null) {
          console.error(`[Vibe MCP] Found @vibe/core range "${vibeRange}" in ${pkgPath}`);
          return major;
        }
      }
    } catch {
      // not found at this level, walk up
    }

    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }

  return null;
}

export function parseMajor(version: string): VibeMajorVersion | null {
  const match = version.match(/^(\d+)\./);
  if (!match) return null;
  const major = parseInt(match[1], 10);
  if (major === 3 || major === 4) return major;
  return DEFAULT_VERSION;
}

export function parseMajorFromRange(range: string): VibeMajorVersion | null {
  // Match patterns like ^3.0.0, ~4.1.0, 3.x, >=3.0.0
  // Look for the first major-version-like number that follows a range operator or starts the string
  const match = range.match(/(?:^|[\^~>=\s])(\d+)\./);
  if (!match) {
    // Try bare number like "3" or "4"
    const bareMatch = range.match(/^(\d+)$/);
    if (!bareMatch) return null;
    const major = parseInt(bareMatch[1], 10);
    if (major === 3 || major === 4) return major;
    return DEFAULT_VERSION;
  }
  const major = parseInt(match[1], 10);
  if (major === 3 || major === 4) return major;
  return DEFAULT_VERSION;
}
