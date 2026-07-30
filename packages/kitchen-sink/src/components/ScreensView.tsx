import { useState } from "react";
import { useKitchenSink } from "../context/KitchenSinkContext";

type ScreenTab = {
  id: string;
  label: string;
  basePath: string;
};

const SCREEN_TABS: ScreenTab[] = [
  { id: "board",        label: "Board",         basePath: "#/workspace?view=main-table" },
  { id: "sidekick",     label: "Sidekick",      basePath: "#/sidekick" },
  { id: "sidekick-chat",label: "Sidekick Chat", basePath: "#/sidekick/chat/1" },
];

function buildScreenUrl(basePath: string, faceliftTheme: boolean, systemTheme: string): string {
  const params: string[] = [];
  if (faceliftTheme) params.push("theme=glaze");
  if (systemTheme === "dark") params.push("mode=dark");
  if (systemTheme === "black") params.push("mode=black");

  const separator = basePath.includes("?") ? "&" : "?";
  const query = params.length ? separator + params.join("&") : "";
  return `http://localhost:3000/${basePath}${query}`;
}

export function ScreensView() {
  const { faceliftTheme, systemTheme } = useKitchenSink();
  const [activeTab, setActiveTab] = useState(SCREEN_TABS[0]!.id);
  const current = SCREEN_TABS.find((t) => t.id === activeTab) ?? SCREEN_TABS[0]!;
  const src = buildScreenUrl(current.basePath, faceliftTheme, systemTheme);

  return (
    <div className="screens-view">
      <div className="screens-tab-bar">
        {SCREEN_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`screens-tab${activeTab === tab.id ? " is-active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <iframe
        key={src}
        className="screens-iframe"
        src={src}
        title={current.label}
      />
    </div>
  );
}
