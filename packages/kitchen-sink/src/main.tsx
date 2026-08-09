import React from "react";
import ReactDOM from "react-dom/client";
import "@vibe/core/tokens";
// Local facelift themes (not in published @vibe/core tokens yet — style dist isn't built)
import "../../style/src/themes/facelift-light-theme.scss";
import "../../style/src/themes/facelift-dark-theme.scss";
import "../../style/src/themes/facelift-black-theme.scss";
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
