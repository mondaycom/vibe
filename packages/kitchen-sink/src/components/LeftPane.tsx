import { ButtonGroup, SegmentedControl } from "@vibe/core";
import { useKitchenSink } from "../context/KitchenSinkContext";
import type { SystemTheme, ThemeSubPage } from "../types";
import { COMPONENT_GALLERY_LABELS, COMPONENT_GALLERY_ORDER } from "./componentGalleries";

const THEME_FAMILY_OPTIONS = [
  { value: "original", label: "Original" },
  { value: "facelift", label: "Facelift" }
] as const;

const THEME_SUBPAGES: { id: ThemeSubPage; label: string }[] = [
  { id: "colors", label: "Colors" },
  { id: "radius", label: "Radius" },
  { id: "typography", label: "Typography" }
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
    faceliftTheme,
    setView,
    setThemeSubPage,
    setComponentSubPage,
    setSystemTheme,
    setFaceliftTheme
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
        {COMPONENT_GALLERY_ORDER.map(id => (
          <button
            key={id}
            type="button"
            className={`left-pane-sublink left-pane-sublink--deep${
              view === "components" && componentSubPage === id ? " is-active" : ""
            }`}
            onClick={() => setComponentSubPage(id)}
          >
            {COMPONENT_GALLERY_LABELS[id]}
          </button>
        ))}
        <button
          type="button"
          className={`left-pane-sublink${view === "theme" ? " is-active" : ""}`}
          onClick={() => setThemeSubPage(themeSubPage)}
        >
          Theme
        </button>
        {view === "theme" &&
          THEME_SUBPAGES.map(page => (
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
        <div className="left-pane-footer-section">
          <span className="left-pane-footer-label">Theme</span>
          <SegmentedControl
            options={THEME_FAMILY_OPTIONS}
            size="small"
            value={faceliftTheme ? "facelift" : "original"}
            onChange={value => setFaceliftTheme(value === "facelift")}
          />
        </div>
        <div className="left-pane-footer-section">
          <span className="left-pane-footer-label">Mode</span>
          {SYSTEM_THEMES.map(theme => (
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
      </div>
    </aside>
  );
}
