import { sections } from "../sections";
import { ComponentCard } from "./ComponentCard";

type Props = {
  componentStates: Record<string, Record<string, unknown>>;
  focusedComponentId: string | null;
  onFocus: (id: string) => void;
  interactive?: boolean;
};

export function ComponentGrid({
  componentStates,
  focusedComponentId,
  onFocus,
  interactive = true,
}: Props) {
  return (
    <div className="component-grid">
      {sections.map((section) => (
        <ComponentCard
          key={section.id}
          section={section}
          state={componentStates[section.id] ?? section.defaultState}
          focused={interactive && focusedComponentId === section.id}
          onFocus={() => onFocus(section.id)}
          interactive={interactive}
        />
      ))}
    </div>
  );
}
