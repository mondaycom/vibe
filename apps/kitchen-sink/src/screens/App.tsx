import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Box, Toast } from "@vibe/core";
import styles from "./App.module.scss";
import { MainLayout } from "./components/MainLayout";
import { AppMainContent } from "./components/AppMainContent";
import { BoardHeader } from "./components/BoardHeader";
import { BoardGroup } from "./components/BoardGroup";
import { VibeAppBoardView } from "./components/VibeAppBoardView";
import { isVibeAppView, type BoardViewId } from "./board/boardViews";
import { Group, ColumnWidths, Item } from "./components/types";
import { ItemDetailsPanel } from "./components/ItemDetailsPanel";
import { INITIAL_GROUPS } from "./data/initialGroups";
import { MIN_COLUMN_WIDTH_PX } from "./board/gridTemplate";
import { initProduct, type ConfigProductName } from "./productConfig";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { AgentsViewProvider } from "./context/AgentsViewContext";
import { SidekickViewProvider } from "./context/SidekickViewContext";
import { AgentBuilderProvider } from "./context/AgentBuilderContext";
import {
  FACELIFT_TEST_NAV_ID,
  useWorkspaceSelection,
  WorkspaceSelectionProvider,
} from "./context/WorkspaceSelectionContext";
import { AgentBuilderModal } from "./components/AgentBuilderModal";
import { FaceliftDocPage } from "./components/FaceliftDocPage";
import type { RailItemId } from "./components/NavigationRail";
import {
  CURATED_FONTS,
  DEFAULT_HEADING_FONT,
  DEFAULT_TEXT_FONT,
  PROTECTED_FONTS,
} from "./components/fontsConfig";
import {
  buildHashRoute,
  parseHashRoute,
  ROUTE_MODE_CLASSES,
  ROUTE_THEME_CLASSES,
  routesEqual,
  type HashRoute,
  type RouteMode,
  type RouteTheme,
} from "./routing/hashRoute";

const STORAGE_KEY_CUSTOM_FONTS = "boards.customFonts";
const STORAGE_KEY_REMOVED_FONTS = "boards.removedFonts";

function loadStringArray(key: string): string[] {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed)
      ? parsed.filter((v): v is string => typeof v === "string")
      : [];
  } catch {
    return [];
  }
}

const GLAZE_NEUE_HEADING_FONT = "Hanken Grotesk";

const THEME_DEFAULT_HEADING_FONTS: Partial<Record<RouteTheme, string>> = {
  "glaze-neue": GLAZE_NEUE_HEADING_FONT,
};

function resolveRouteFont(
  routeFont: string | null,
  defaultFont: string,
): string {
  if (!routeFont) return defaultFont;
  return routeFont;
}

function resolveHeadingFont(
  theme: RouteTheme,
  routeHeadingFont: string | null,
): string {
  if (routeHeadingFont) return routeHeadingFont;
  return THEME_DEFAULT_HEADING_FONTS[theme] ?? DEFAULT_HEADING_FONT;
}

// Dedup so re-selecting a font doesn't re-inject its <link>.
const loadedFonts = new Set<string>();
function loadGoogleFont(family: string, weightsParam?: string) {
  if (loadedFonts.has(family)) return;
  const param =
    weightsParam ?? `${family.replace(/\s+/g, "+")}:wght@400;500;600;700`;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?family=${param}&display=swap`;
  document.head.appendChild(link);
  loadedFonts.add(family);
}

// When you are prompted to switch products use this variable to change it.
const PRODUCT: ConfigProductName = "work_management";

function WorkspaceContent({
  renderBoardWorkspace,
}: {
  renderBoardWorkspace: () => ReactNode;
}) {
  const { selectedId } = useWorkspaceSelection();
  if (selectedId === FACELIFT_TEST_NAV_ID) {
    return <FaceliftDocPage />;
  }
  return <>{renderBoardWorkspace()}</>;
}

const THEME_CLASSES = ROUTE_THEME_CLASSES;
const MODE_CLASSES = ROUTE_MODE_CLASSES;
type AppMode = RouteMode;

export default function App() {
  const [hashRoute, setHashRoute] = useState<HashRoute>(() => parseHashRoute());
  const hashRouteRef = useRef(hashRoute);
  const [groups, _setGroups] = useState<Group[]>(INITIAL_GROUPS);
  const [columnWidths, setColumnWidths] = useState<ColumnWidths>({
    task: 280,
    owner: 100,
    status: 140,
    priority: 140,
    eta: 100,
  });

  const handleColumnResize = (
    columnId: keyof ColumnWidths,
    newWidth: number,
  ) => {
    setColumnWidths((prev) => ({
      ...prev,
      [columnId]: Math.max(MIN_COLUMN_WIDTH_PX, newWidth),
    }));
  };

  const [activeTheme, setActiveTheme] = useState<RouteTheme>(hashRoute.theme);
  const [activeMode, setActiveMode] = useState<AppMode>(hashRoute.mode);
  const [boardViewId, setBoardViewId] = useState<BoardViewId>(
    hashRoute.boardViewId,
  );
  const [customFonts, setCustomFonts] = useState<string[]>(() =>
    loadStringArray(STORAGE_KEY_CUSTOM_FONTS),
  );
  const [removedFonts, setRemovedFonts] = useState<string[]>(() =>
    loadStringArray(STORAGE_KEY_REMOVED_FONTS),
  );
  const [activeHeadingFont, setActiveHeadingFont] = useState<string>(() =>
    resolveHeadingFont(hashRoute.theme, hashRoute.headingFont),
  );
  const [activeTextFont, setActiveTextFont] = useState<string>(() =>
    resolveRouteFont(hashRoute.textFont, DEFAULT_TEXT_FONT),
  );
  const [openItem, setOpenItem] = useState<Item | null>(null);
  const [toast, setToast] = useState<{
    open: boolean;
    message: string;
    type: "negative" | "positive";
  }>({ open: false, message: "", type: "negative" });

  // Persist user font modifications across reloads.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_CUSTOM_FONTS, JSON.stringify(customFonts));
  }, [customFonts]);
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY_REMOVED_FONTS,
      JSON.stringify(removedFonts),
    );
  }, [removedFonts]);

  const showToast = (
    message: string,
    type: "negative" | "positive" = "negative",
  ) => {
    setToast({ open: true, message, type });
  };

  const commitHashRoute = useCallback((updates: Partial<HashRoute>) => {
    const nextRoute = { ...hashRouteRef.current, ...updates };
    const nextHash = buildHashRoute(nextRoute);
    hashRouteRef.current = nextRoute;

    setHashRoute((currentRoute) =>
      routesEqual(currentRoute, nextRoute) ? currentRoute : nextRoute,
    );

    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }
  }, []);

  const handleActiveRailItemChange = useCallback(
    (activeRailItem: RailItemId) => {
      commitHashRoute({
        railItem: activeRailItem,
        agentsView:
          activeRailItem === "agents"
            ? "home"
            : hashRouteRef.current.agentsView,
        sidekickChatId: null,
      });
    },
    [commitHashRoute],
  );

  const handleBoardViewChange = useCallback(
    (nextBoardViewId: BoardViewId) => {
      setBoardViewId(nextBoardViewId);
      commitHashRoute({
        railItem: "workspace",
        boardViewId: nextBoardViewId,
        sidekickChatId: null,
      });
    },
    [commitHashRoute],
  );

  const handleAgentsViewChange = useCallback(
    (agentsView: HashRoute["agentsView"]) => {
      commitHashRoute({
        railItem: "agents",
        agentsView,
        sidekickChatId: null,
      });
    },
    [commitHashRoute],
  );

  const handleSidekickChatOpen = useCallback(
    (sidekickChatId: string) => {
      commitHashRoute({
        railItem: "sidekick",
        sidekickChatId,
      });
    },
    [commitHashRoute],
  );

  const handleSidekickHome = useCallback(() => {
    commitHashRoute({
      railItem: "sidekick",
      sidekickChatId: null,
    });
  }, [commitHashRoute]);

  const handleThemeChange = useCallback(
    (theme: string) => {
      const nextTheme = theme as RouteTheme;
      setActiveTheme(nextTheme);

      if (!hashRouteRef.current.headingFont) {
        setActiveHeadingFont(resolveHeadingFont(nextTheme, null));
      }

      commitHashRoute({ theme: nextTheme });
    },
    [commitHashRoute],
  );

  const handleModeChange = useCallback(
    (mode: string) => {
      const nextMode = mode as AppMode;
      setActiveMode(nextMode);
      commitHashRoute({ mode: nextMode });
    },
    [commitHashRoute],
  );

  const handleHeadingFontChange = useCallback(
    (font: string) => {
      setActiveHeadingFont(font);
      commitHashRoute({ headingFont: font });
    },
    [commitHashRoute],
  );

  const handleTextFontChange = useCallback(
    (font: string) => {
      setActiveTextFont(font);
      commitHashRoute({ textFont: font });
    },
    [commitHashRoute],
  );

  const applyHashRouteState = useCallback((nextRoute: HashRoute) => {
    setBoardViewId(nextRoute.boardViewId);
    setActiveTheme(nextRoute.theme);
    setActiveMode(nextRoute.mode);
    setActiveHeadingFont(
      resolveHeadingFont(nextRoute.theme, nextRoute.headingFont),
    );
    setActiveTextFont(resolveRouteFont(nextRoute.textFont, DEFAULT_TEXT_FONT));
  }, []);

  useEffect(() => {
    hashRouteRef.current = hashRoute;
  }, [hashRoute]);

  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = parseHashRoute();
      hashRouteRef.current = nextRoute;
      setHashRoute((currentRoute) =>
        routesEqual(currentRoute, nextRoute) ? currentRoute : nextRoute,
      );
      applyHashRouteState(nextRoute);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [applyHashRouteState]);

  const handleAddCustomFont = (font: string) => {
    const trimmed = font.trim();
    if (!trimmed) return;
    // If the user previously removed this font, un-remove it on re-add.
    setRemovedFonts((prev) => prev.filter((f) => f !== trimmed));
    setCustomFonts((prev) =>
      prev.includes(trimmed) ? prev : [...prev, trimmed],
    );
  };

  const handleRemoveFont = (font: string) => {
    if (PROTECTED_FONTS.has(font)) return;
    const isCustom = customFonts.includes(font);
    if (isCustom) {
      setCustomFonts((prev) => prev.filter((f) => f !== font));
    } else {
      // It's a curated font — track it as hidden.
      setRemovedFonts((prev) => (prev.includes(font) ? prev : [...prev, font]));
    }
    // If active anywhere, fall back to that side's default.
    if (activeHeadingFont === font) {
      handleHeadingFontChange(DEFAULT_HEADING_FONT);
    }
    if (activeTextFont === font) {
      handleTextFontChange(DEFAULT_TEXT_FONT);
    }
  };

  useEffect(() => {
    initProduct(PRODUCT);
  }, []);

  useEffect(() => {
    THEME_CLASSES.forEach((cls) =>
      document.documentElement.classList.remove(cls),
    );
    if (activeTheme) document.documentElement.classList.add(activeTheme);
  }, [activeTheme]);

  useEffect(() => {
    MODE_CLASSES.forEach((cls) =>
      document.documentElement.classList.remove(cls),
    );
    if (activeMode) document.documentElement.classList.add(activeMode);
  }, [activeMode]);

  useEffect(() => {
    const fallback = `"Figtree", "Poppins", "Inter", "Helvetica Neue", Arial, sans-serif`;

    const headingCurated = CURATED_FONTS.find(
      (f) => f.value === activeHeadingFont,
    );
    loadGoogleFont(activeHeadingFont, headingCurated?.googleFontParam);
    const headingStack = `"${activeHeadingFont}", ${fallback}`;

    const textCurated = CURATED_FONTS.find((f) => f.value === activeTextFont);
    loadGoogleFont(activeTextFont, textCurated?.googleFontParam);
    const textStack = `"${activeTextFont}", ${fallback}`;

    // Vibe token for headings (Heading component, board group titles, etc.)
    document.documentElement.style.setProperty(
      "--title-font-family",
      headingStack,
    );
    // Vibe token for body text + the local SCSS module var.
    document.documentElement.style.setProperty("--font-family", textStack);
    document.documentElement.style.setProperty(
      "--boards-font-family",
      textStack,
    );
  }, [activeHeadingFont, activeTextFont]);

  const renderBoardWorkspace = () => (
    <Box className={styles.boardArea}>
      <Box className={styles.boardHeaderSticky}>
        <BoardHeader
          activeViewId={boardViewId}
          onViewChange={handleBoardViewChange}
          onNewItem={() => showToast("Item created successfully", "positive")}
        />
      </Box>
      <Box
        marginTop="medium"
        className={
          isVibeAppView(boardViewId)
            ? styles.vibeAppContent
            : styles.boardGroups
        }
      >
        {isVibeAppView(boardViewId) ? (
          <VibeAppBoardView />
        ) : (
          groups.map((group) => (
            <BoardGroup
              product={PRODUCT}
              key={group.id}
              group={group}
              columnWidths={columnWidths}
              onColumnResize={handleColumnResize}
              onOpenItem={setOpenItem}
            />
          ))
        )}
      </Box>
    </Box>
  );

  const renderWorkspace = () => (
    <WorkspaceContent renderBoardWorkspace={renderBoardWorkspace} />
  );

  return (
    <WorkspaceSelectionProvider>
      <AgentsViewProvider
        key={`agents-${hashRoute.agentsView}`}
        initialView={hashRoute.agentsView}
        onViewChange={handleAgentsViewChange}
      >
        <SidekickViewProvider
          key={`sidekick-${hashRoute.sidekickChatId ?? "home"}`}
          initialChatId={hashRoute.sidekickChatId}
          onChatOpen={handleSidekickChatOpen}
          onHome={handleSidekickHome}
        >
          <AgentBuilderProvider>
            <MainLayout
              product={PRODUCT}
              activeRailItem={hashRoute.railItem}
              onActiveRailItemChange={handleActiveRailItemChange}
            >
              {(activeRailItem) => (
                <AppMainContent
                  activeRailItem={activeRailItem}
                  renderWorkspace={renderWorkspace}
                />
              )}
            </MainLayout>
            <AgentBuilderModal />
            <ItemDetailsPanel
              item={openItem}
              onClose={() => setOpenItem(null)}
            />
            <ThemeSwitcher
              activeTheme={activeTheme}
              onThemeChange={handleThemeChange}
              activeMode={activeMode}
              onModeChange={handleModeChange}
              activeHeadingFont={activeHeadingFont}
              onHeadingFontChange={handleHeadingFontChange}
              activeTextFont={activeTextFont}
              onTextFontChange={handleTextFontChange}
              customFonts={customFonts}
              removedFonts={removedFonts}
              onAddCustomFont={handleAddCustomFont}
              onRemoveFont={handleRemoveFont}
              onError={(message) => showToast(message, "negative")}
            />
            <Toast
              open={toast.open}
              type={toast.type}
              autoHideDuration={4000}
              onClose={() => setToast((t) => ({ ...t, open: false }))}
            >
              {toast.message}
            </Toast>
          </AgentBuilderProvider>
        </SidekickViewProvider>
      </AgentsViewProvider>
    </WorkspaceSelectionProvider>
  );
}
