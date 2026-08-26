import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getSidekickChatTitle } from "../data/sidekickChats";

export type SidekickView = "home" | "chat";

interface SidekickViewContextValue {
  view: SidekickView;
  chatId: string;
  chatTitle: string;
  openChat: (chatId: string, chatTitle: string) => void;
  goHome: () => void;
}

const SidekickViewContext = createContext<SidekickViewContextValue | null>(
  null,
);

export function SidekickViewProvider({
  children,
  initialChatId = null,
  onChatOpen,
  onHome,
}: {
  children: ReactNode;
  initialChatId?: string | null;
  onChatOpen?: (chatId: string) => void;
  onHome?: () => void;
}) {
  const [view, setView] = useState<SidekickView>(
    initialChatId ? "chat" : "home",
  );
  const [chatId, setChatId] = useState(initialChatId ?? "1");
  const [chatTitle, setChatTitle] = useState(
    initialChatId ? getSidekickChatTitle(initialChatId) : "New chat",
  );

  const openChat = useCallback(
    (nextId: string, nextTitle: string) => {
      setChatId(nextId);
      setChatTitle(nextTitle);
      setView("chat");
      onChatOpen?.(nextId);
    },
    [onChatOpen],
  );

  const goHome = useCallback(() => {
    setView("home");
    onHome?.();
  }, [onHome]);

  const value = useMemo(
    () => ({ view, chatId, chatTitle, openChat, goHome }),
    [view, chatId, chatTitle, openChat, goHome],
  );

  return (
    <SidekickViewContext.Provider value={value}>
      {children}
    </SidekickViewContext.Provider>
  );
}

export function useSidekickView(): SidekickViewContextValue {
  const context = useContext(SidekickViewContext);
  if (!context) {
    throw new Error("useSidekickView must be used within SidekickViewProvider");
  }
  return context;
}
