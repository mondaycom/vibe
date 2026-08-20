import React from "react";
import { Box, Icon, IconButton, Flex, Divider, Avatar } from "@vibe/core";
import type { SubIcon } from "@vibe/core";
import {
  Apps,
  Help,
  Inbox,
  Invite,
  Notifications,
  Search,
  Switcher,
} from "@mondaydotcomorg/icons";
import imgAvatarContainer from "figma:asset/6f1e4ef08a4e8899bba87998c3410a8132536714.png";
import type { ConfigProductName } from "../productConfig";
import { MondayMulticolorMark } from "./ProductLogos";
import LeftPaneContent from "./LeftPaneContent";
import { NavigationRail, type RailItemId } from "./NavigationRail";
import { useSidekickView } from "../context/SidekickViewContext";
import styles from "./MainLayout.module.scss";

function TopBarActionButton({
  label,
  icon,
  badge,
  count,
}: {
  label: string;
  icon: SubIcon;
  badge?: string;
  count?: string;
}) {
  return (
    <span className={styles.topBarAction}>
      <IconButton
        icon={icon}
        kind="tertiary"
        size="medium"
        aria-label={label}
      />
      {badge && <span className={styles.topBarNotificationBadge}>{badge}</span>}
      {count && <span className={styles.topBarCounter}>{count}</span>}
    </span>
  );
}

function AvatarButton() {
  return (
    <button type="button" className={styles.avatarButton} aria-label="Profile">
      <Avatar
        size="medium"
        withoutBorder
        type="img"
        src={imgAvatarContainer}
        aria-label="User avatar"
      />
    </button>
  );
}

function RightContainer() {
  return (
    <Flex
      align="center"
      className={styles.rightContainer}
      data-name="Right container"
    >
      <TopBarActionButton
        label="Notifications"
        icon={Notifications}
        badge="5"
      />
      <TopBarActionButton label="Inbox" icon={Inbox} count="19" />
      <TopBarActionButton label="Invite" icon={Invite} />
      <TopBarActionButton label="Apps" icon={Apps} />
      <TopBarActionButton label="Help" icon={Help} />
      <Divider direction="vertical" className={styles.divider28} aria-hidden />
      <TopBarActionButton label="Product switcher" icon={Switcher} />
      <AvatarButton />
    </Flex>
  );
}

function GlobalSearch() {
  return (
    <button
      type="button"
      className={styles.globalSearch}
      aria-label="Search everything"
    >
      <Icon icon={Search} iconSize={16} className={styles.globalSearchIcon} />
      <span className={styles.globalSearchLabel}>Search for anything...</span>
      <span className={styles.globalSearchShortcut}>⌘ K</span>
    </button>
  );
}

function TopBarInternal({ product }: { product: ConfigProductName }) {
  return (
    <header
      className={styles.topBar}
      data-name="Top bar [Internal]"
      data-product={product}
    >
      <div className={styles.topBarLeft} data-testid="topbar-left-container">
        <span className={styles.topBarProductButton}>
          <MondayMulticolorMark />
        </span>
      </div>
      <div className={styles.topBarSearchSlot}>
        <GlobalSearch />
      </div>
      <nav
        className={styles.topBarRight}
        aria-label="Views and tools"
        data-testid="topbar-views-and-tools"
      >
        <RightContainer />
      </nav>
    </header>
  );
}

function LeftPane({
  activeRailItem,
  isWorkspacePanelOpen,
  onActiveRailItemChange,
  onWorkspacePanelOpenChange,
}: {
  activeRailItem: RailItemId;
  isWorkspacePanelOpen: boolean;
  onActiveRailItemChange: (activeRailItem: RailItemId) => void;
  onWorkspacePanelOpenChange: (isOpen: boolean) => void;
}) {
  const [workspacePanelWidth, setWorkspacePanelWidth] = React.useState(279);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey && e.key === ".") {
        e.preventDefault();
        onWorkspacePanelOpenChange(!isWorkspacePanelOpen);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isWorkspacePanelOpen, onWorkspacePanelOpenChange]);

  const handleSelectRailItem = (id: RailItemId) => {
    onActiveRailItemChange(id);
    onWorkspacePanelOpenChange(true);
  };

  const handleResizeStart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const startX = event.clientX;
    const startWidth = workspacePanelWidth;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const nextWidth = startWidth + moveEvent.clientX - startX;
      setWorkspacePanelWidth(Math.min(360, Math.max(240, nextWidth)));
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <Box
      className={styles.leftNav}
      data-name="Left pane"
      data-testid="leftpane"
    >
      <NavigationRail
        activeRailItem={activeRailItem}
        isWorkspacePanelOpen={isWorkspacePanelOpen}
        onSelectRailItem={handleSelectRailItem}
        onOpenWorkspacePanel={() => {
          onActiveRailItemChange("workspace");
          onWorkspacePanelOpenChange(true);
        }}
      />
      <Box
        className={`${styles.workspacePanel} ${
          isWorkspacePanelOpen
            ? styles.workspacePanelOpen
            : styles.workspacePanelClosed
        }`}
        data-testid="leftpane-new-layout"
        aria-hidden={!isWorkspacePanelOpen}
        style={
          {
            "--workspace-panel-width": `${workspacePanelWidth}px`,
          } as React.CSSProperties
        }
      >
        <Box className={styles.workspacePanelScroll}>
          <LeftPaneContent
            activePanel={activeRailItem}
            onCloseNavigation={() => onWorkspacePanelOpenChange(false)}
          />
        </Box>
        <button
          type="button"
          className={styles.leftpaneResizer}
          aria-label="Resize navigation"
          data-testid="leftpane-resizer"
          onMouseDown={handleResizeStart}
          tabIndex={isWorkspacePanelOpen ? 0 : -1}
        />
      </Box>
    </Box>
  );
}

function PageContent({
  children,
  isWorkspacePanelOpen,
  fullBleed,
}: {
  children: React.ReactNode;
  isWorkspacePanelOpen: boolean;
  fullBleed?: boolean;
}) {
  return (
    <Box
      className={`${styles.page} ${
        isWorkspacePanelOpen
          ? styles.pageWithWorkspacePanel
          : styles.pageWithCollapsedWorkspacePanel
      }`}
      data-name="Page content"
    >
      <Flex
        direction="column"
        align="stretch"
        className={`${styles.pageScroll} ${
          fullBleed ? styles.pageScrollFullBleed : ""
        }`}
      >
        {children}
      </Flex>
    </Box>
  );
}

type MainLayoutChildren =
  | React.ReactNode
  | ((activeRailItem: RailItemId) => React.ReactNode);

function Content({
  children,
  activeRailItem: controlledActiveRailItem,
  onActiveRailItemChange,
}: {
  children: MainLayoutChildren;
  activeRailItem?: RailItemId;
  onActiveRailItemChange?: (activeRailItem: RailItemId) => void;
}) {
  const [uncontrolledActiveRailItem, setUncontrolledActiveRailItem] =
    React.useState<RailItemId>("workspace");
  const [isWorkspacePanelOpen, setIsWorkspacePanelOpen] = React.useState(true);
  const { view: sidekickView } = useSidekickView();
  const activeRailItem = controlledActiveRailItem ?? uncontrolledActiveRailItem;
  const isSidekickChat =
    activeRailItem === "sidekick" && sidekickView === "chat";
  const pageContent =
    typeof children === "function" ? children(activeRailItem) : children;

  const handleActiveRailItemChange = React.useCallback(
    (nextActiveRailItem: RailItemId) => {
      setUncontrolledActiveRailItem(nextActiveRailItem);
      onActiveRailItemChange?.(nextActiveRailItem);
    },
    [onActiveRailItemChange],
  );

  return (
    <Box className={styles.content} data-name="Content">
      <Box className={styles.contentRow}>
        <LeftPane
          activeRailItem={activeRailItem}
          isWorkspacePanelOpen={isWorkspacePanelOpen}
          onActiveRailItemChange={handleActiveRailItemChange}
          onWorkspacePanelOpenChange={setIsWorkspacePanelOpen}
        />
        <PageContent
          isWorkspacePanelOpen={isWorkspacePanelOpen}
          fullBleed={isSidekickChat}
        >
          {pageContent}
        </PageContent>
      </Box>
    </Box>
  );
}

export const MainLayout: React.FC<{
  children: MainLayoutChildren;
  product: ConfigProductName;
  activeRailItem?: RailItemId;
  onActiveRailItemChange?: (activeRailItem: RailItemId) => void;
}> = ({ children, product, activeRailItem, onActiveRailItemChange }) => {
  return (
    <Flex
      direction="column"
      align="stretch"
      className={styles.root}
      data-name="Multi product board [Template]"
    >
      <Box className={styles.topBarSlot}>
        <TopBarInternal product={product} />
      </Box>
      <Content
        activeRailItem={activeRailItem}
        onActiveRailItemChange={onActiveRailItemChange}
      >
        {children}
      </Content>
    </Flex>
  );
};
