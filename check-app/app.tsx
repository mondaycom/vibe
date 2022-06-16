import React from "react";
import vibeLogo from "../.storybook/logo.png";
import * as vibe from "../dist/main.js";
import "../dist/main.css";
import "./app.css";

function handleButtonClick(...args: any) {
  console.log("app: handleButtonClick", ...args);
}

function App() {
  return (
    <div className="vibe-check-app">
      <header>
        <a href="https://style.monday.com/" target="_blank" rel="noreferrer">
          <img src={vibeLogo} className="logo" alt="Vibe Design System logo" />
        </a>
        <h1>Check App</h1>
      </header>
      <main>
        <vibe.Button onClick={handleButtonClick}>Button</vibe.Button>
        <vibe.Button kind={vibe.Button.kinds.SECONDARY}>Secondary</vibe.Button>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
