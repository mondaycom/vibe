import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const MARKETING_CAMPAIGN_NAV_ID = "marketing-campaign";
export const FACELIFT_TEST_NAV_ID = "facelift-test";

interface WorkspaceSelectionContextValue {
  selectedId: string;
  setSelectedId: (id: string) => void;
}

const WorkspaceSelectionContext =
  createContext<WorkspaceSelectionContextValue | null>(null);

export function WorkspaceSelectionProvider({
  children,
  initialSelectedId = MARKETING_CAMPAIGN_NAV_ID,
}: {
  children: ReactNode;
  initialSelectedId?: string;
}) {
  const [selectedId, setSelectedId] = useState<string>(initialSelectedId);
  const value = useMemo(() => ({ selectedId, setSelectedId }), [selectedId]);

  return (
    <WorkspaceSelectionContext.Provider value={value}>
      {children}
    </WorkspaceSelectionContext.Provider>
  );
}

export function useWorkspaceSelection(): WorkspaceSelectionContextValue {
  const ctx = useContext(WorkspaceSelectionContext);
  if (!ctx) {
    throw new Error(
      "useWorkspaceSelection must be used within WorkspaceSelectionProvider",
    );
  }
  return ctx;
}
