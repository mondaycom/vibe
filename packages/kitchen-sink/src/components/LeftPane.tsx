import { useKitchenSink } from "../context/KitchenSinkContext";
import type { SystemTheme, ThemeSubPage } from "../types";

const THEME_SUBPAGES: { id: ThemeSubPage; label: string }[] = [
  { id: "colors", label: "Colors" },
  { id: "radius", label: "Radius" },
  { id: "typography", label: "Typography" },
];

const SYSTEM_THEMES: SystemTheme[] = ["light", "dark", "black"];

type LeftPaneProps = {
  collapsed: boolean;
  onToggleCollapse: () => void;
};

export function LeftPane({ collapsed, onToggleCollapse }: LeftPaneProps) {
  const {
    view,
    themeSubPage,
    componentSubPage,
    systemTheme,
    setView,
    setThemeSubPage,
    setComponentSubPage,
    setSystemTheme,
  } = useKitchenSink();

  return (
    <aside className={`left-pane${collapsed ? " is-collapsed" : ""}`}>
      <div className="left-pane-header">
        {!collapsed && <h1 className="left-pane-title">Facelift Kitchen Sink</h1>}
        <button
          type="button"
          className="left-pane-toggle"
          onClick={onToggleCollapse}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-expanded={!collapsed}
        >
          {collapsed ? "›" : "‹"}
        </button>
      </div>
      <nav className="left-pane-nav" aria-hidden={collapsed}>
        <button
          type="button"
          className={`left-pane-link${view === "components" ? " is-active" : ""}`}
          onClick={() => setView("components")}
        >
          Components
        </button>
        <button
          type="button"
          className={`left-pane-sublink left-pane-sublink--deep${view === "components" && componentSubPage === "dropdown" ? " is-active" : ""}`}
          onClick={() => setComponentSubPage("dropdown")}
        >
          Dropdown
        </button>
        <button
          type="button"
          className={`left-pane-sublink${view === "theme" ? " is-active" : ""}`}
          onClick={() => setThemeSubPage(themeSubPage)}
        >
          Theme
        </button>
        {view === "theme" &&
          THEME_SUBPAGES.map((page) => (
            <button
              key={page.id}
              type="button"
              className={`left-pane-sublink left-pane-sublink--deep${themeSubPage === page.id ? " is-active" : ""}`}
              onClick={() => setThemeSubPage(page.id)}
            >
              {page.label}
            </button>
          ))}
        <button
          type="button"
          className={`left-pane-link${view === "compare" ? " is-active" : ""}`}
          onClick={() => setView("compare")}
        >
          Compare
        </button>
        <button
          type="button"
          className={`left-pane-link${view === "screens" ? " is-active" : ""}`}
          onClick={() => setView("screens")}
        >
          Screens
        </button>
      </nav>
      <div className="left-pane-footer" aria-hidden={collapsed}>
        {SYSTEM_THEMES.map((theme) => (
          <button
            key={theme}
            type="button"
            className={`left-pane-theme-mode${systemTheme === theme ? " is-active" : ""}`}
            onClick={() => setSystemTheme(theme)}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </button>
        ))}
      </div>
    </aside>
  );
}
