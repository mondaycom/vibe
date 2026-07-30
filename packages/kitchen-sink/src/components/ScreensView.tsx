import { useState } from "react";

type ScreenTab = {
  id: string;
  label: string;
  url: string;
};

const SCREEN_TABS: ScreenTab[] = [
  {
    id: "board",
    label: "Board",
    url: "http://localhost:3000/#/workspace?view=main-table",
  },
  {
    id: "sidekick",
    label: "Sidekick",
    url: "http://localhost:3000/#/sidekick",
  },
  {
    id: "sidekick-chat",
    label: "Sidekick Chat",
    url: "http://localhost:3000/#/sidekick/chat/1",
  },
];

export function ScreensView() {
  const [activeTab, setActiveTab] = useState(SCREEN_TABS[0]!.id);
  const current = SCREEN_TABS.find((t) => t.id === activeTab) ?? SCREEN_TABS[0]!;

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
        key={current.url}
        className="screens-iframe"
        src={current.url}
        title={current.label}
        allow="same-origin"
      />
    </div>
  );
}
