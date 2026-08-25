import { defineConfig, type AliasOptions } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(rootDir, "../..");
const packagesDir = path.resolve(repoRoot, "packages");

type Tsconfig = {
  compilerOptions?: {
    baseUrl?: string;
    paths?: Record<string, string[]>;
  };
};

/**
 * Yarn workspaces already symlink `@vibe/*` into node_modules.
 * Package exports still point at `dist`, so we remap to source via tsconfig paths
 * (single source of truth for IDE + Vite).
 */
function aliasesFromTsconfig(): AliasOptions {
  const tsconfigPath = path.join(rootDir, "tsconfig.json");
  const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, "utf8")) as Tsconfig;
  const baseUrl = path.resolve(rootDir, tsconfig.compilerOptions?.baseUrl ?? ".");
  const paths = tsconfig.compilerOptions?.paths ?? {};

  // Longer keys first so `@vibe/core/next` wins over `@vibe/core`.
  return Object.entries(paths)
    .map(([pattern, targets]) => {
      const find = pattern.replace(/\/\*$/, "");
      const target = (targets[0] ?? "").replace(/\/\*$/, "");
      return {
        find,
        replacement: path.resolve(baseUrl, target),
      };
    })
    .sort((a, b) => b.find.length - a.find.length);
}

const tsconfigAliases = aliasesFromTsconfig();
const vibePackageNames = tsconfigAliases
  .map(alias => (typeof alias.find === "string" ? alias.find : null))
  .filter((name): name is string => !!name?.startsWith("@vibe/"));

export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 5220,
    strictPort: false,
    fs: {
      // Workspace packages live outside kitchen-sink/; allow reading their sources.
      allow: [repoRoot],
    },
  },
  define: {
    // react-dates (Vibe v3 dep) references Node's `global`; shim it for browsers.
    global: "globalThis",
  },
  optimizeDeps: {
    // Workspace packages are linked by Yarn; keep them out of the dep optimizer
    // so Vite always serves the TypeScript/SCSS sources from tsconfig paths.
    exclude: vibePackageNames,
  },
  resolve: {
    // Prefer a single React copy across workspace packages.
    // Also dedupe deps imported by aliased @vibe/* sources — Vite resolves those
    // from packages/core (etc.), which walks up to vibe/ (no node_modules) instead
    // of apps/kitchen-sink/node_modules.
    dedupe: ["react", "react-dom", "es-toolkit"],
    alias: [
      {
        find: "es-toolkit",
        replacement: path.resolve(rootDir, "node_modules/es-toolkit"),
      },
      ...tsconfigAliases,
      // Sass `~monday-ui-style/...` / legacy `~/...` imports from component SCSS.
      // On Vibe 3 the style package is published as `monday-ui-style`. Point at the
      // workspace copy so the facelift themes compiled into its `dist` are picked up
      // (run `yarn workspace monday-ui-style build` first).
      {
        find: "monday-ui-style/dist/index.min.css",
        replacement: path.resolve(repoRoot, "packages/style/dist/index.min.css"),
      },
      {
        find: "~monday-ui-style",
        replacement: path.resolve(repoRoot, "packages/style"),
      },
      {
        find: "monday-ui-style",
        replacement: path.resolve(repoRoot, "packages/style"),
      },
      { find: "~", replacement: path.resolve(repoRoot, "node_modules") },
      // Deep AgentAvatar import — package barrel pulls monolith-only deps; stub locally when unavailable.
      {
        find: "@mondaydotcomorg/monday-ui-components/dist/esm/monday-ui-components/src/components/AgentAvatar/AgentAvatar.js",
        replacement: path.resolve(rootDir, "./src/screens/components/AgentAvatarStub.tsx"),
      },
      // figma:asset/... imports used by screens/ (facelift-prototype) components
      {
        find: "figma:asset/f0c15171c575bb8aa71b3703f917cb5be31788dd.png",
        replacement: path.resolve(rootDir, "./src/screens/assets/f0c15171c575bb8aa71b3703f917cb5be31788dd.png"),
      },
      {
        find: "figma:asset/ec90618f4fe697ef59f9ba376c95f32ab905bf13.png",
        replacement: path.resolve(rootDir, "./src/screens/assets/ec90618f4fe697ef59f9ba376c95f32ab905bf13.png"),
      },
      {
        find: "figma:asset/e80552e5cd311931922a10d6dd70061713e6b1ac.png",
        replacement: path.resolve(rootDir, "./src/screens/assets/e80552e5cd311931922a10d6dd70061713e6b1ac.png"),
      },
      {
        find: "figma:asset/cf1083401990504fa214e1814dd9e86530f6484c.png",
        replacement: path.resolve(rootDir, "./src/screens/assets/cf1083401990504fa214e1814dd9e86530f6484c.png"),
      },
      {
        find: "figma:asset/c3e2da2431edb45e665c1d6bfc0377ef4df16956.png",
        replacement: path.resolve(rootDir, "./src/screens/assets/c3e2da2431edb45e665c1d6bfc0377ef4df16956.png"),
      },
      {
        find: "figma:asset/99ba70c9442119f320638528787cb086eabb5871.png",
        replacement: path.resolve(rootDir, "./src/screens/assets/99ba70c9442119f320638528787cb086eabb5871.png"),
      },
      {
        find: "figma:asset/956984e2f299222affe9c3f9d1b91d646e618dbf.png",
        replacement: path.resolve(rootDir, "./src/screens/assets/956984e2f299222affe9c3f9d1b91d646e618dbf.png"),
      },
      {
        find: "figma:asset/8128ea9b2697cf84d6336d0cf0bbd261c3cae4a6.png",
        replacement: path.resolve(rootDir, "./src/screens/assets/8128ea9b2697cf84d6336d0cf0bbd261c3cae4a6.png"),
      },
      {
        find: "figma:asset/6f1e4ef08a4e8899bba87998c3410a8132536714.png",
        replacement: path.resolve(rootDir, "./src/screens/assets/6f1e4ef08a4e8899bba87998c3410a8132536714.png"),
      },
      {
        find: "figma:asset/4791b41afa3cbdfd3b5bceec099dbf0fe05b97cd.png",
        replacement: path.resolve(rootDir, "./src/screens/assets/4791b41afa3cbdfd3b5bceec099dbf0fe05b97cd.png"),
      },
      {
        find: "figma:asset/44a0d931f8b012dcfc18715f7a64847e76751825.png",
        replacement: path.resolve(rootDir, "./src/screens/assets/44a0d931f8b012dcfc18715f7a64847e76751825.png"),
      },
      {
        find: "figma:asset/41836246ebeea8335f78a1ba2a938aabf44d0607.png",
        replacement: path.resolve(rootDir, "./src/screens/assets/41836246ebeea8335f78a1ba2a938aabf44d0607.png"),
      },
      {
        find: "figma:asset/31a207ddb210814d45f4e60c5afe26c81fb55207.png",
        replacement: path.resolve(rootDir, "./src/screens/assets/31a207ddb210814d45f4e60c5afe26c81fb55207.png"),
      },
      {
        find: "figma:asset/15ef82c8ee79f6111e42949aea8f2307269524d3.png",
        replacement: path.resolve(rootDir, "./src/screens/assets/15ef82c8ee79f6111e42949aea8f2307269524d3.png"),
      },
    ],
  },
});
