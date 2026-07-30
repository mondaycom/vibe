import { useKitchenSink } from "../context/KitchenSinkContext";
import { sections } from "../sections";
import { ComponentGrid } from "./ComponentGrid";

export function CompareView() {
  const { componentStates, systemTheme } = useKitchenSink();

  // The Original column needs to escape the parent's facelift-theme and tokenOverride
  // CSS vars. By applying the Vibe system-theme class directly on this wrapper,
  // the Vibe tokens.css rules re-specify all custom properties for this subtree —
  // specified values beat inherited ones, so the facelift cascade is blocked here.
  const originalThemeClass = `${systemTheme}-app-theme`;

  return (
    <div className="compare-layout">
      <section className="compare-section">
        <h3 className="compare-column-title">Original Vibe</h3>
        <div className={originalThemeClass}>
          <ComponentGrid
            componentStates={Object.fromEntries(
              sections.map((s) => [s.id, s.defaultState])
            )}
            focusedComponentId={null}
            onFocus={() => {}}
            interactive={false}
          />
        </div>
      </section>
      <section className="compare-section">
        <h3 className="compare-column-title">Your design</h3>
        <ComponentGrid
          componentStates={componentStates}
          focusedComponentId={null}
          onFocus={() => {}}
          interactive={false}
        />
      </section>
    </div>
  );
}
