import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
// Warmth palette override, ported from mf-topbar. After styles.css so it wins.
import "./styles/themes/warmth.css";
import App from "./App";
import { KitchenSinkProvider } from "./context/KitchenSinkContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <KitchenSinkProvider>
      <App />
    </KitchenSinkProvider>
  </React.StrictMode>
);
