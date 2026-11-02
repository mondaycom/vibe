import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type AgentBuilderView = "closed" | "config" | "onboarding";

export interface AgentConfigData {
  name: string;
  expertise: string;
  avatarBg: string;
  avatarImg: string;
  avatarIndex?: number;
}

export interface AgentConfigInitial {
  avatarIndex?: number;
  name?: string;
  expertise?: string;
  avatarBg?: string;
}

interface AgentBuilderContextValue {
  view: AgentBuilderView;
  configInitial: AgentConfigInitial | null;
  pendingAgent: AgentConfigData | null;
  /** Open the builder at the config step (optionally seeded with values). */
  openConfig: (initial?: AgentConfigInitial) => void;
  /** Advance from config to the onboarding step with the built agent. */
  openOnboarding: (data: AgentConfigData) => void;
  /** Close the whole builder modal. */
  close: () => void;
}

const AgentBuilderContext = createContext<AgentBuilderContextValue | null>(
  null,
);

export function AgentBuilderProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<AgentBuilderView>("closed");
  const [configInitial, setConfigInitial] = useState<AgentConfigInitial | null>(
    null,
  );
  const [pendingAgent, setPendingAgent] = useState<AgentConfigData | null>(
    null,
  );

  const openConfig = useCallback((initial?: AgentConfigInitial) => {
    setConfigInitial(initial ?? null);
    setView("config");
  }, []);

  const openOnboarding = useCallback((data: AgentConfigData) => {
    setPendingAgent(data);
    setConfigInitial({
      avatarIndex: data.avatarIndex,
      name: data.name,
      expertise: data.expertise,
      avatarBg: data.avatarBg,
    });
    setView("onboarding");
  }, []);

  const close = useCallback(() => {
    setView("closed");
  }, []);

  const value = useMemo(
    () => ({
      view,
      configInitial,
      pendingAgent,
      openConfig,
      openOnboarding,
      close,
    }),
    [view, configInitial, pendingAgent, openConfig, openOnboarding, close],
  );

  return (
    <AgentBuilderContext.Provider value={value}>
      {children}
    </AgentBuilderContext.Provider>
  );
}

export function useAgentBuilder(): AgentBuilderContextValue {
  const ctx = useContext(AgentBuilderContext);
  if (!ctx) {
    throw new Error("useAgentBuilder must be used within AgentBuilderProvider");
  }
  return ctx;
}
