import { useKitchenSink } from "../context/KitchenSinkContext";
import { sections } from "../sections";
import { ComponentGrid } from "./ComponentGrid";

export function CompareView() {
  const { componentStates, systemTheme } = useKitchenSink();

  // Original column uses the default Vibe theme class so it stays independent of
  // the global Facelift selection and any token overrides on `.app-root`.
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
