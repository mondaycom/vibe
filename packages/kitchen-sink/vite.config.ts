import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  define: {
    // react-dates (Vibe v3 dep) references Node's `global`; shim it for browsers.
    global: "globalThis",
  },
  resolve: {
    dedupe: ["react", "react-dom"],
    alias: {
      // Point directly at the monorepo's built packages/core so source changes
      // (after `yarn workspace @vibe/core build`) are picked up by both apps.
      "@vibe/core/tokens": path.resolve(rootDir, "../core/dist/tokens/tokens.css"),
      "@vibe/core/next": path.resolve(rootDir, "../core/dist/src/components/next.js"),
      "@vibe/core": path.resolve(rootDir, "../core/dist/src/index.js"),
      "@vibe/icons": path.resolve(rootDir, "node_modules/@vibe/icons/dist/react/index.js"),
      // Deep AgentAvatar import — package barrel pulls monolith-only deps; stub locally when unavailable.
      "@mondaydotcomorg/monday-ui-components/dist/esm/monday-ui-components/src/components/AgentAvatar/AgentAvatar.js":
        path.resolve(rootDir, "./src/screens/components/AgentAvatarStub.tsx"),
      // @ alias used by screens/ (facelift-prototype) components
      "@": path.resolve(rootDir, "./src/screens"),
      // figma:asset/... imports used by screens/ (facelift-prototype) components
      "figma:asset/f0c15171c575bb8aa71b3703f917cb5be31788dd.png": path.resolve(rootDir, "./src/screens/assets/f0c15171c575bb8aa71b3703f917cb5be31788dd.png"),
      "figma:asset/ec90618f4fe697ef59f9ba376c95f32ab905bf13.png": path.resolve(rootDir, "./src/screens/assets/ec90618f4fe697ef59f9ba376c95f32ab905bf13.png"),
      "figma:asset/e80552e5cd311931922a10d6dd70061713e6b1ac.png": path.resolve(rootDir, "./src/screens/assets/e80552e5cd311931922a10d6dd70061713e6b1ac.png"),
      "figma:asset/cf1083401990504fa214e1814dd9e86530f6484c.png": path.resolve(rootDir, "./src/screens/assets/cf1083401990504fa214e1814dd9e86530f6484c.png"),
      "figma:asset/c3e2da2431edb45e665c1d6bfc0377ef4df16956.png": path.resolve(rootDir, "./src/screens/assets/c3e2da2431edb45e665c1d6bfc0377ef4df16956.png"),
      "figma:asset/99ba70c9442119f320638528787cb086eabb5871.png": path.resolve(rootDir, "./src/screens/assets/99ba70c9442119f320638528787cb086eabb5871.png"),
      "figma:asset/956984e2f299222affe9c3f9d1b91d646e618dbf.png": path.resolve(rootDir, "./src/screens/assets/956984e2f299222affe9c3f9d1b91d646e618dbf.png"),
      "figma:asset/8128ea9b2697cf84d6336d0cf0bbd261c3cae4a6.png": path.resolve(rootDir, "./src/screens/assets/8128ea9b2697cf84d6336d0cf0bbd261c3cae4a6.png"),
      "figma:asset/6f1e4ef08a4e8899bba87998c3410a8132536714.png": path.resolve(rootDir, "./src/screens/assets/6f1e4ef08a4e8899bba87998c3410a8132536714.png"),
      "figma:asset/4791b41afa3cbdfd3b5bceec099dbf0fe05b97cd.png": path.resolve(rootDir, "./src/screens/assets/4791b41afa3cbdfd3b5bceec099dbf0fe05b97cd.png"),
      "figma:asset/44a0d931f8b012dcfc18715f7a64847e76751825.png": path.resolve(rootDir, "./src/screens/assets/44a0d931f8b012dcfc18715f7a64847e76751825.png"),
      "figma:asset/41836246ebeea8335f78a1ba2a938aabf44d0607.png": path.resolve(rootDir, "./src/screens/assets/41836246ebeea8335f78a1ba2a938aabf44d0607.png"),
      "figma:asset/31a207ddb210814d45f4e60c5afe26c81fb55207.png": path.resolve(rootDir, "./src/screens/assets/31a207ddb210814d45f4e60c5afe26c81fb55207.png"),
      "figma:asset/15ef82c8ee79f6111e42949aea8f2307269524d3.png": path.resolve(rootDir, "./src/screens/assets/15ef82c8ee79f6111e42949aea8f2307269524d3.png"),
    },
  },
});
