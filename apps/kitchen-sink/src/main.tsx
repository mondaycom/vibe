import React from "react";
import ReactDOM from "react-dom/client";
// @vibe/core declares `sideEffects: ["*.scss","*.css",...]`, so its `style-imports.ts`
// (a .ts file) is treeshaken away and the theme CSS never reaches the bundle.
// Import it here instead: vite.config.ts maps this to the workspace build (facelift
// themes included), vite.original.config.ts maps it to the published package.
import "monday-ui-style/dist/index.min.css";
import "./styles.css";
import App from "./App";
import { KitchenSinkProvider } from "./context/KitchenSinkContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <KitchenSinkProvider>
      <App />
    </KitchenSinkProvider>
  </React.StrictMode>
);
