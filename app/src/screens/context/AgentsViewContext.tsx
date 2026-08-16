import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type AgentsView = "home" | "manage" | "feed";

interface AgentsViewContextValue {
  view: AgentsView;
  setView: (view: AgentsView) => void;
}

const AgentsViewContext = createContext<AgentsViewContextValue | null>(null);

export function AgentsViewProvider({
  children,
  initialView = "home",
  onViewChange,
}: {
  children: ReactNode;
  initialView?: AgentsView;
  onViewChange?: (view: AgentsView) => void;
}) {
  const [view, setViewState] = useState<AgentsView>(initialView);

  const setView = useCallback(
    (next: AgentsView) => {
      setViewState(next);
      onViewChange?.(next);
    },
    [onViewChange],
  );

  const value = useMemo(() => ({ view, setView }), [view, setView]);

  return (
    <AgentsViewContext.Provider value={value}>
      {children}
    </AgentsViewContext.Provider>
  );
}

export function useAgentsView(): AgentsViewContextValue {
  const context = useContext(AgentsViewContext);
  if (!context) {
    throw new Error("useAgentsView must be used within AgentsViewProvider");
  }
  return context;
}
