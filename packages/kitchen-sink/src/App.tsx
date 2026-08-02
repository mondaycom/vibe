import { useState } from "react";
import { AppThemeShell } from "./components/AppThemeShell";
import { LeftPane } from "./components/LeftPane";
import { useKitchenSink } from "./context/KitchenSinkContext";
import { ComponentsView } from "./components/ComponentsView";
import { ToastGalleryView } from "./components/ToastGalleryView";
import { CompareView } from "./components/CompareView";
import { ThemePanel } from "./components/ThemePanel";
import { ScreensView } from "./components/ScreensView";

export default function App() {
  const { view, componentSubPage } = useKitchenSink();
  const [leftPaneCollapsed, setLeftPaneCollapsed] = useState(false);

  return (
    <AppThemeShell>
      <div
        className={`layout${leftPaneCollapsed ? " is-left-pane-collapsed" : ""}`}
      >
        <LeftPane
          collapsed={leftPaneCollapsed}
          onToggleCollapse={() => setLeftPaneCollapsed((c) => !c)}
        />
        <main className={`main-area${view === "screens" ? " main-area--no-padding" : ""}`}>
          {view === "components" && componentSubPage === "grid" && <ComponentsView />}
          {view === "components" && componentSubPage === "toast" && <ToastGalleryView />}
          {view === "compare" && <CompareView />}
          {view === "theme" && <ThemePanel />}
          {view === "screens" && <ScreensView />}
        </main>
      </div>
    </AppThemeShell>
  );
}
