import { useState } from "react";
import { AppThemeShell } from "./components/AppThemeShell";
import { LeftPane } from "./components/LeftPane";
import { useKitchenSink } from "./context/KitchenSinkContext";
import { ComponentsView } from "./components/ComponentsView";
import { componentGalleries, isComponentGalleryId } from "./components/componentGalleries";
import { ThemePanel } from "./components/ThemePanel";
import { ScreensView } from "./components/ScreensView";

export default function App() {
  const { view, componentSubPage } = useKitchenSink();
  const [leftPaneCollapsed, setLeftPaneCollapsed] = useState(false);

  const GalleryView =
    view === "components" && isComponentGalleryId(componentSubPage)
      ? componentGalleries[componentSubPage]
      : null;

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
          {GalleryView && <GalleryView />}
          {view === "theme" && <ThemePanel />}
          {view === "screens" && <ScreensView />}
        </main>
      </div>
    </AppThemeShell>
  );
}
