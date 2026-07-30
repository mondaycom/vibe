import { useKitchenSink } from "../context/KitchenSinkContext";
import { sections } from "../sections";
import { ComponentGrid } from "./ComponentGrid";

export function CompareView() {
  const { componentStates } = useKitchenSink();

  return (
    <div className="compare-layout">
      <section className="compare-section">
        <h3 className="compare-column-title">Original</h3>
        <ComponentGrid
          componentStates={Object.fromEntries(
            sections.map((s) => [s.id, s.defaultState])
          )}
          focusedComponentId={null}
          onFocus={() => {}}
          interactive={false}
        />
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
