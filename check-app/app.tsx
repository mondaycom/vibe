import React from "react";
import vibeLogo from "../.storybook/logo.png";
import "./app.css";

function App() {
  return (
    <div className="vibe-check-app">
      <header>
        <a href="https://style.monday.com/" target="_blank" rel="noreferrer">
          <img src={vibeLogo} className="logo" alt="Vibe Design System logo" />
        </a>
        <h1>Check App</h1>
      </header>
      <main>Components here</main>
      <footer></footer>
    </div>
  );
}

export default App;
