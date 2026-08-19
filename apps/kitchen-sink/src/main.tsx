import React from "react";
import ReactDOM from "react-dom/client";
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
