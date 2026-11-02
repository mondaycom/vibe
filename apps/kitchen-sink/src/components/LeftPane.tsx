import { ButtonGroup, SegmentedControl } from "@vibe/core";
import { useKitchenSink } from "../context/KitchenSinkContext";
import { isCurrentVibeSource, switchVibeSource, vibeSource } from "../lib/vibeSource";
import type { AppState, SystemTheme, ThemeSubPage } from "../types";
import { COMPONENT_GALLERY_LABELS, COMPONENT_GALLERY_ORDER } from "./componentGalleries";

// Not `as const`: Vibe 3's ButtonGroup takes a mutable ButtonGroupOption[].
const VIBE_SOURCE_BUTTON_GROUP_OPTIONS = [
  { value: "original", text: "Original" },
  { value: "current", text: "Current" }
];

const VIBE_SOURCE_SEGMENTED_OPTIONS = [
  { value: "original", label: "Original" },
  { value: "current", label: "Current" }
];

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
    tokenOverrides,
    componentStates,
    focusedComponentId,
    faceliftTheme,
    setView,
    setThemeSubPage,
    setComponentSubPage,
    setSystemTheme
  } = useKitchenSink();

  const currentState: AppState = {
    view,
    themeSubPage,
    componentSubPage,
    systemTheme,
    tokenOverrides,
    componentStates,
    focusedComponentId,
    faceliftTheme
  };

  const onVibeSourceChange = (value: string) => {
    switchVibeSource(value as "original" | "current", currentState);
  };

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
          className={`left-pane-link${view === "screens" ? " is-active" : ""}`}
          onClick={() => setView("screens")}
        >
          Screens
        </button>
      </nav>
      <div className="left-pane-footer" aria-hidden={collapsed}>
        <div className="left-pane-footer-section">
          <span className="left-pane-footer-label">Vibe</span>
          <div className="left-pane-footer-button-group">
            {isCurrentVibeSource ? (
              <SegmentedControl
                ariaLabel="Vibe source"
                options={VIBE_SOURCE_SEGMENTED_OPTIONS}
                size="small"
                fullWidth
                value={vibeSource}
                onChange={onVibeSourceChange}
              />
            ) : (
              <ButtonGroup
                groupAriaLabel="Vibe source"
                options={VIBE_SOURCE_BUTTON_GROUP_OPTIONS}
                size="small"
                fullWidth
                value={vibeSource}
                onSelect={value => onVibeSourceChange(String(value))}
              />
            )}
          </div>
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
