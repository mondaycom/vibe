import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Box } from "@vibe/core";
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
import "./styles/globals.css";

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

type ScreensAppProps = {
  externalTheme?: RouteTheme;
  externalMode?: RouteMode;
};

export function ScreensApp({ externalTheme, externalMode }: ScreensAppProps) {
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
  const [activeHeadingFont, setActiveHeadingFont] = useState<string>(() =>
    resolveHeadingFont(hashRoute.theme, hashRoute.headingFont),
  );
  const [activeTextFont, setActiveTextFont] = useState<string>(() =>
    resolveRouteFont(hashRoute.textFont, DEFAULT_TEXT_FONT),
  );
  const [openItem, setOpenItem] = useState<Item | null>(null);

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

  // Sync external theme/mode from the kitchen-sink context
  useEffect(() => {
    if (externalTheme === undefined) return;
    setActiveTheme(externalTheme);
    if (!hashRouteRef.current.headingFont) {
      setActiveHeadingFont(resolveHeadingFont(externalTheme, null));
    }
    commitHashRoute({ theme: externalTheme });
  }, [externalTheme, commitHashRoute]);

  useEffect(() => {
    if (externalMode === undefined) return;
    setActiveMode(externalMode);
    commitHashRoute({ mode: externalMode });
  }, [externalMode, commitHashRoute]);

  useEffect(() => {
    initProduct(PRODUCT);
  }, []);

  useEffect(() => {
    THEME_CLASSES.forEach((cls) =>
      document.documentElement.classList.remove(cls),
    );
    if (activeTheme) document.documentElement.classList.add(activeTheme);

    return () => {
      THEME_CLASSES.forEach((cls) => document.documentElement.classList.remove(cls));
    };
  }, [activeTheme]);

  useEffect(() => {
    MODE_CLASSES.forEach((cls) =>
      document.documentElement.classList.remove(cls),
    );
    if (activeMode) document.documentElement.classList.add(activeMode);

    return () => {
      MODE_CLASSES.forEach((cls) => document.documentElement.classList.remove(cls));
    };
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

    document.documentElement.style.setProperty(
      "--title-font-family",
      headingStack,
    );
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
          </AgentBuilderProvider>
        </SidekickViewProvider>
      </AgentsViewProvider>
    </WorkspaceSelectionProvider>
  );
}
