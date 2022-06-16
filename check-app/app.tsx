import React from "react";
import vibeLogo from "../.storybook/logo.png";
import Button from "../src/components/Button/Button";
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
        <Button onClick={handleButtonClick}>Button</Button>
        <Button kind={Button.kinds.SECONDARY}>Secondary</Button>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
