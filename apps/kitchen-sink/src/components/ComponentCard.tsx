import type { Section } from "../types";
import { ErrorBoundary } from "./ErrorBoundary";

type Props = {
  section: Section;
  state: Record<string, unknown>;
  focused: boolean;
  onFocus: () => void;
  interactive?: boolean;
};

export function ComponentCard({
  section,
  state,
  focused,
  onFocus,
  interactive = true,
}: Props) {
  const { Demo, title } = section;

  const className = [
    "component-card",
    interactive && focused ? "is-focused" : "",
    !interactive ? "is-static" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={className}
      onClick={interactive ? onFocus : undefined}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={
        interactive
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") onFocus();
            }
          : undefined
      }
    >
      <h2 className="component-card-title">{title}</h2>
      <div className="component-card-demo">
        <ErrorBoundary fallback={<p className="card-error">Could not render this state</p>}>
          <Demo state={state} />
        </ErrorBoundary>
      </div>
    </article>
  );
}
