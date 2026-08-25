import { useState, useCallback } from "react";
import { useWorkspaceSelection } from "../context/WorkspaceSelectionContext";
import {
  Box,
  Flex,
  Text,
  Heading,
  Avatar,
  Button,
  Icon,
  IconButton,
  Dropdown,
  Menu,
  MenuItem,
  Search,
  Label,
  type DropdownOption,
  type AvatarProps,
} from "@vibe/core";
import {
  ActivityLog,
  Add,
  AgentsLogo,
  Board,
  Doc,
  Edit,
  Favorite,
  Feedback,
  Home,
  MondayVibeLogo,
  SidebarCollapsed,
} from "@mondaydotcomorg/icons";
import {
  DEFAULT_EXPANDED_FOLDERS,
  WORKSPACE_NAV_TREE,
  type NavItemIcon,
  type NavTreeNode,
} from "../data/workspaceNavTree";
// Deep import (not the package barrel) — the barrel pulls chat-client → trident-runtime
// (monolith-only) which breaks the Vite build. AgentAvatar only needs @vibe/core.
import AgentAvatar from "@mondaydotcomorg/monday-ui-components/dist/esm/monday-ui-components/src/components/AgentAvatar/AgentAvatar.js";
import type { AgentsView } from "../context/AgentsViewContext";
import { useAgentsView } from "../context/AgentsViewContext";
import { useSidekickView } from "../context/SidekickViewContext";
import type { RailItemId } from "./NavigationRail";
import { SIDEKICK_CHATS } from "../data/sidekickChats";
import { GlassAgentTile, type GlassAgentTileVariant } from "./GlassAgentTile";
import styles from "./LeftPaneContent.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyIcon = React.FC<any>;

const NAV_ITEM_ICONS: Record<NavItemIcon, AnyIcon> = {
  home: Home,
  board: Board,
  doc: Doc,
  apps: Board,
  star: Favorite,
};

type WorkspaceOption = DropdownOption<{
  avatarText: string;
  backgroundColor: NonNullable<AvatarProps["backgroundColor"]>;
}>;

const WORKSPACE_OPTIONS: WorkspaceOption[] = [
  {
    value: "vibe-design",
    label: "Vibe - Design",
    avatarText: "V",
    backgroundColor: "dark_purple",
  },
];

type UtilityPanelId = Exclude<RailItemId, "workspace">;

interface InlinePanelIconProps {
  className?: string;
}

interface UtilityPanelRow {
  label: string;
  /** Leading icon for nav-button rows (Vibe Button leftIcon). */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  leftIcon?: React.FC<any>;
  meta?: string;
  badge?: string;
  avatarText?: string;
  /** Circular profile image (e.g. agent photo). */
  image?: string;
  /** Tint behind agent portrait tiles (Glaze agent rows). */
  avatarBg?: string;
  /** When set, renders a coded glass agent tile instead of an image avatar. */
  glassVariant?: GlassAgentTileVariant;
  /** Show a green presence dot on the avatar. */
  online?: boolean;
  /** CSS gradient for the app-tile icon (Vibe apps). */
  iconGradient?: string;
  indicator?:
    | "conversation"
    | "prompt"
    | "agent"
    | "app"
    | "meeting"
    | "favorite"
    | "tool";
  trailing?: string;
  selected?: boolean;
  /** Agents panel nav — switches main content view when clicked. */
  navAction?: AgentsView;
  /** Sidekick chat list — opens the chat surface for this scenario when clicked. */
  chatId?: string;
  /** Icon used when the parent section renders as a workspace-style nav tree. */
  treeIcon?: NavItemIcon;
  /** Optional trailing icon for nav-tree rows. */
  treeTrailingIcon?: NavItemIcon;
}

interface UtilityPanelSection {
  title?: string;
  action?: string;
  rows: UtilityPanelRow[];
  /** Render rows as plain single-line items (no icon, meta, or border) — e.g. chat history. */
  simpleList?: boolean;
  /** Render rows as full-width tertiary buttons matching the panel's primary action. */
  navButtons?: boolean;
  /** Render rows as workspace-style nav tree items (icon + label, no meta). */
  navTree?: boolean;
}

interface UtilityHero {
  eyebrow?: string;
  title: string;
  description: string;
  primaryAction?: string;
  chips?: string[];
  metrics?: UtilityHeroMetric[];
}

interface UtilityHeroMetric {
  label: string;
  value: string;
}

interface UtilityPanelState {
  title: string;
  menuLabel: string;
  primaryAction: string;
  primaryActionIcon?: "edit" | "plus";
  searchPlaceholder?: string;
  navSections: UtilityPanelSection[];
  hero?: UtilityHero;
  contentSections: UtilityPanelSection[];
  footerActions: string[];
}

const UTILITY_PANEL_STATES: Record<UtilityPanelId, UtilityPanelState> = {
  "home-modes": {
    title: "Home",
    menuLabel: "Home menu",
    primaryAction: "New chat",
    primaryActionIcon: "edit",
    searchPlaceholder: "Search conversations",
    navSections: [
      {
        title: "All chats",
        simpleList: true,
        rows: SIDEKICK_CHATS.map((chat) => ({
          label: chat.title,
          chatId: chat.id,
        })),
      },
    ],
    contentSections: [],
    footerActions: ["Settings", "Give feedback"],
  },
  sidekick: {
    title: "Sidekick",
    menuLabel: "Sidekick menu",
    primaryAction: "New chat",
    primaryActionIcon: "edit",
    searchPlaceholder: "Search Sidekick history",
    navSections: [
      {
        title: "All chats",
        simpleList: true,
        rows: SIDEKICK_CHATS.map((chat) => ({
          label: chat.title,
          chatId: chat.id,
        })),
      },
    ],
    contentSections: [],
    footerActions: ["Get Sidekick on mobile", "Settings", "Give feedback"],
  },
  agents: {
    title: "Agents",
    menuLabel: "Agents menu",
    primaryAction: "New agent",
    navSections: [
      {
        navButtons: true,
        rows: [
          { label: "Manage agents", navAction: "manage", leftIcon: AgentsLogo },
          { label: "Feed", navAction: "feed", leftIcon: ActivityLog },
        ],
      },
    ],
    contentSections: [
      {
        title: "My agents",
        rows: [
          {
            label: "Elena",
            meta: "Response Triage & Cohort Router",
            glassVariant: 1,
            indicator: "agent",
          },
          {
            label: "Fiona",
            meta: "Response Triage & Cohort Router",
            glassVariant: 2,
            indicator: "agent",
          },
          {
            label: "Sarah",
            meta: "Sprint Intake Triage Lead",
            glassVariant: 3,
            indicator: "agent",
          },
          {
            label: "Brittany",
            meta: "Leave Status Agent",
            glassVariant: 4,
            online: true,
            indicator: "agent",
          },
        ],
      },
    ],
    footerActions: ["Skill hub", "Give us feedback"],
  },
  vibe: {
    title: "Vibe",
    menuLabel: "Vibe menu",
    primaryAction: "New Vibe app",
    navSections: [
      {
        simpleList: true,
        rows: [{ label: "My apps" }],
      },
    ],
    contentSections: [
      {
        title: "Recent apps",
        rows: [
          {
            label: "Onboarding Progress",
            meta: "Published",
            indicator: "app",
          },
          {
            label: "Vibe Activity",
            meta: "Published",
            indicator: "app",
          },
          {
            label: "Design System Feed",
            meta: "Draft",
            indicator: "app",
          },
          {
            label: "Workshop Insights",
            meta: "Published",
            indicator: "app",
          },
          {
            label: "Code Progress",
            meta: "Draft",
            indicator: "app",
          },
        ],
      },
    ],
    footerActions: ["Give us feedback"],
  },
  notetaker: {
    title: "AI Notetaker",
    menuLabel: "Notetaker menu",
    primaryAction: "Invite via URL",
    navSections: [],
    contentSections: [
      {
        title: "Upcoming",
        rows: [
          {
            label: "Lunch break",
            meta: "Now, today at 12:00 pm",
            badge: "Next",
            indicator: "meeting",
          },
          {
            label: "Weekly 1:1",
            meta: "Today at 2:00 pm",
            indicator: "meeting",
          },
          {
            label: "Team Weekly Sync",
            meta: "Today at 3:00 pm",
            indicator: "meeting",
          },
          {
            label: "Candidate Interview",
            meta: "Today at 4:00 pm",
            indicator: "meeting",
          },
        ],
      },
      {
        title: "Meeting summaries",
        rows: [
          {
            label: "Product Sync",
            meta: "Recorded · 36m 48s",
            indicator: "meeting",
          },
          {
            label: "Design Review",
            meta: "Recorded · 35m 40s",
            indicator: "meeting",
          },
          {
            label: "Engineering Sync",
            meta: "Recorded · 46m 20s",
            indicator: "meeting",
          },
        ],
      },
    ],
    footerActions: ["Learn more", "Give feedback", "Settings"],
  },
  favorites: {
    title: "Favorites",
    menuLabel: "Favorites menu",
    primaryAction: "Add favorite",
    navSections: [],
    contentSections: [
      {
        title: "Favorites",
        navTree: true,
        rows: [
          { label: "New icon to Vibe - request form", treeIcon: "board" },
          { label: "Icons catalog instructions", treeIcon: "doc" },
          { label: "Approved icon workflow", treeIcon: "board" },
        ],
      },
      {
        title: "Recents",
        navTree: true,
        rows: [
          {
            label: "Asset deprecation template",
            treeIcon: "board",
            treeTrailingIcon: "star",
          },
          {
            label: "Dropdown deprecation",
            treeIcon: "doc",
            treeTrailingIcon: "star",
          },
          {
            label: "Modal deprecation",
            treeIcon: "doc",
            treeTrailingIcon: "star",
          },
          {
            label: "Team weekly meeting",
            treeIcon: "board",
            treeTrailingIcon: "star",
          },
          {
            label: "Marketing campaign",
            treeIcon: "board",
            treeTrailingIcon: "star",
          },
        ],
      },
    ],
    footerActions: ["Manage favorites"],
  },
  more: {
    title: "More",
    menuLabel: "More tools menu",
    primaryAction: "Browse tools",
    navSections: [],
    hero: {
      title: "More workspace tools",
      description:
        "Templates, dashboards, marketplace apps, imports, and admin tools.",
    },
    contentSections: [
      {
        title: "Common tools",
        rows: [
          {
            label: "Dashboards",
            meta: "Visualize workspace data",
            indicator: "tool",
          },
          {
            label: "Apps marketplace",
            meta: "Extend your workflow",
            badge: "Popular",
            indicator: "tool",
          },
          { label: "Trash", meta: "Restore deleted work", indicator: "tool" },
        ],
      },
    ],
    footerActions: ["Open marketplace"],
  },
};

const PANEL_TONE_CLASSES: Record<UtilityPanelId, string> = {
  "home-modes": styles.panelToneSidekick,
  sidekick: styles.panelToneSidekick,
  agents: styles.panelToneAgents,
  vibe: styles.panelToneVibe,
  notetaker: styles.panelToneNotetaker,
  favorites: styles.panelToneFavorites,
  more: styles.panelToneMore,
};

const ROW_INDICATOR_CLASSES: Record<
  NonNullable<UtilityPanelRow["indicator"]>,
  string
> = {
  conversation: styles.productRowIconConversation,
  prompt: styles.productRowIconPrompt,
  agent: styles.productRowIconAgent,
  app: styles.productRowIconApp,
  meeting: styles.productRowIconMeeting,
  favorite: styles.productRowIconFavorite,
  tool: styles.productRowIconTool,
};

function workspaceOptionRow(option: WorkspaceOption) {
  return (
    <Flex align="center" gap="xs" className={styles.workspaceDropdownValue}>
      <Avatar
        className={styles.workspaceAvatar}
        size="xs"
        type="text"
        text={option.avatarText}
        square
        backgroundColor={option.backgroundColor}
        role="img"
        aria-label={option.label}
      />
      <Text
        type="text2"
        weight="normal"
        color="primary"
        className={styles.workspaceDropdownValueLabel}
      >
        {option.label}
      </Text>
    </Flex>
  );
}

function PanelBackground() {
  return (
    <div aria-hidden="true" className={styles.panelBg}>
      <div className={`${styles.panelBgLayer} ${styles.panelBgLayerBase}`} />
      <div className={`${styles.panelBgLayer} ${styles.panelBgLayerSheen}`} />
    </div>
  );
}

function PanelEllipsisIcon({ className }: InlinePanelIconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <circle cx="5.25" cy="10" r="1.15" />
      <circle cx="10" cy="10" r="1.15" />
      <circle cx="14.75" cy="10" r="1.15" />
    </svg>
  );
}

function PanelSearchIcon({ className }: InlinePanelIconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M9.083 14.167a5.083 5.083 0 1 0 0-10.167 5.083 5.083 0 0 0 0 10.167Z"
        stroke="currentColor"
        strokeWidth="1.45"
      />
      <path
        d="m12.75 12.75 3.25 3.25"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PanelPlusIcon({ className }: InlinePanelIconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M10 2.25C10.4142 2.25 10.75 2.58579 10.75 3V9.25H17C17.4142 9.25 17.75 9.58579 17.75 10C17.75 10.4142 17.4142 10.75 17 10.75H10.75V17C10.75 17.4142 10.4142 17.75 10 17.75C9.58579 17.75 9.25 17.4142 9.25 17V10.75H3C2.58579 10.75 2.25 10.4142 2.25 10C2.25 9.58579 2.58579 9.25 3 9.25H9.25V3C9.25 2.58579 9.58579 2.25 10 2.25Z" />
    </svg>
  );
}

function PanelIconButton({
  label,
  children,
  onClick,
  className,
  testId,
}: {
  label: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  testId?: string;
}) {
  return (
    <button
      type="button"
      className={`${styles.panelIconButton}${className ? ` ${className}` : ""}`}
      aria-label={label}
      data-testid={testId}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Chevron({
  isExpanded,
  variant = "section",
}: {
  isExpanded: boolean;
  variant?: "section" | "tree";
}) {
  if (variant === "tree") {
    return (
      <span
        aria-hidden="true"
        className={`${styles.chevron} ${styles.treeChevron}`}
      >
        <svg
          viewBox="0 0 16 16"
          width="16"
          height="16"
          fill="currentColor"
          focusable="false"
        >
          <path d={isExpanded ? "M4 6h8l-4 4-4-4Z" : "M6 4l4 4-4 4V4Z"} />
        </svg>
      </span>
    );
  }

  return (
    <span aria-hidden="true" className={styles.chevron}>
      <svg
        viewBox="0 0 20 20"
        width="12"
        height="12"
        fill="currentColor"
        focusable="false"
      >
        <path
          d={
            isExpanded
              ? "M9.442 12.76a.77.77 0 0 0 1.116 0l4.21-4.363a.84.84 0 0 0 0-1.157.77.77 0 0 0-1.116 0L10 11.025 6.348 7.24a.77.77 0 0 0-1.117 0 .84.84 0 0 0 0 1.157l4.21 4.363Z"
              : "M12.76 10.56a.77.77 0 0 0 0-1.116L8.397 5.233a.84.84 0 0 0-1.157 0 .77.77 0 0 0 0 1.116l3.785 3.653-3.785 3.652a.77.77 0 0 0 0 1.117.84.84 0 0 0 1.157 0l4.363-4.211Z"
          }
        />
      </svg>
    </span>
  );
}

function PanelHeader({
  title,
  menuLabel,
  onCloseNavigation,
}: {
  title: string;
  menuLabel: string;
  onCloseNavigation: () => void;
}) {
  return (
    <div className={styles.panelHeader}>
      <Text
        type="text2"
        weight="medium"
        color="secondary"
        className={styles.panelTitle}
      >
        {title}
      </Text>
      <Flex gap="xs" align="center" className={styles.panelHeaderActions}>
        <PanelIconButton
          label={menuLabel}
          testId="menu-button_workspace-panel-menu"
        >
          <PanelEllipsisIcon className={styles.panelIcon} />
        </PanelIconButton>
        <PanelIconButton label="Search">
          <PanelSearchIcon className={styles.panelIcon} />
        </PanelIconButton>
        <IconButton
          icon={SidebarCollapsed}
          kind="tertiary"
          size="small"
          className={styles.panelHeaderIconButton}
          iconClassName={styles.panelIcon}
          aria-label="Close navigation"
          data-testid="collapse-leftpane-button-workspace"
          onClick={onCloseNavigation}
        />
      </Flex>
    </div>
  );
}

function WorkspacePanelContent({
  selectedItem,
  onSelect,
  onCloseNavigation,
}: {
  selectedItem: string;
  onSelect: (id: string) => void;
  onCloseNavigation: () => void;
}) {
  return (
    <>
      <PanelHeader
        title="Workspace"
        menuLabel="Workspace menu"
        onCloseNavigation={onCloseNavigation}
      />
      <WorkspaceSelector />
      <MyWorkspaceAgentsRow />
      <ContentSection selectedItem={selectedItem} onSelect={onSelect} />
    </>
  );
}

function UtilityPanelContent({
  activePanel,
  onCloseNavigation,
}: {
  activePanel: UtilityPanelId;
  onCloseNavigation: () => void;
}) {
  const { view: agentsView, setView: setAgentsView } = useAgentsView();
  const {
    view: sidekickView,
    chatTitle: sidekickChatTitle,
    openChat: openSidekickChat,
    goHome: goSidekickHome,
  } = useSidekickView();
  const state = UTILITY_PANEL_STATES[activePanel];
  const isSidekick = activePanel === "sidekick";
  const isVibePanel = activePanel === "vibe";

  return (
    <>
      <PanelHeader
        title={state.title}
        menuLabel={state.menuLabel}
        onCloseNavigation={onCloseNavigation}
      />
      <div
        className={`${styles.utilityPanelContent} ${styles.productPanelContent} ${PANEL_TONE_CLASSES[activePanel]}${isVibePanel ? ` ${styles.vibePanelContent}` : ""}`}
      >
        {isVibePanel ? (
          <>
            <Button
              kind="tertiary"
              color="primary"
              size="small"
              active
              leftIcon={Add}
              className={`${styles.productPrimaryAction} ${styles.vibePrimaryAction}`}
            >
              {state.primaryAction}
            </Button>

            {state.navSections.map((section) => (
              <UtilityPanelSectionView
                key={getUtilitySectionKey(section, "nav")}
                section={section}
                compact
                variant="vibe"
              />
            ))}

            {state.contentSections.map((section) => (
              <UtilityPanelSectionView
                key={getUtilitySectionKey(section, "content")}
                section={section}
                variant="vibe"
              />
            ))}

            <div className={styles.productPanelFooter}>
              {state.footerActions.map((action) => (
                <button
                  key={action}
                  type="button"
                  className={styles.productFooterAction}
                >
                  <Icon
                    icon={Feedback}
                    size={20}
                    className={styles.productFooterActionIcon}
                  />
                  <span className={styles.productFooterActionLabel}>
                    {action}
                  </span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            {(() => {
              const [firstNav, ...restNav] = state.navSections;
              const inlineNav = firstNav?.navButtons ? firstNav : undefined;
              const otherNav = inlineNav ? restNav : state.navSections;
              return (
                <>
                  <div className={styles.productNavList}>
                    <Button
                      kind="tertiary"
                      color="primary"
                      size="small"
                      leftIcon={state.primaryActionIcon === "edit" ? Edit : Add}
                      className={styles.productPrimaryAction}
                      onClick={
                        activePanel === "agents"
                          ? () => setAgentsView("home")
                          : isSidekick
                            ? () => goSidekickHome()
                            : undefined
                      }
                    >
                      {state.primaryAction}
                    </Button>
                    {inlineNav?.rows.map((row) => {
                      const isActive = row.navAction
                        ? agentsView === row.navAction
                        : !!row.selected;
                      return (
                        <Button
                          key={row.label}
                          kind="tertiary"
                          color="primary"
                          size="small"
                          active={isActive}
                          leftIcon={row.leftIcon}
                          className={styles.productPrimaryAction}
                          onClick={
                            row.navAction && activePanel === "agents"
                              ? () => setAgentsView(row.navAction!)
                              : undefined
                          }
                        >
                          {row.label}
                        </Button>
                      );
                    })}
                  </div>

                  {state.searchPlaceholder && (
                    <Search
                      size="small"
                      placeholder={state.searchPlaceholder}
                      aria-label={state.searchPlaceholder}
                      className={styles.productSearch}
                    />
                  )}

                  {otherNav.map((section) => (
                    <UtilityPanelSectionView
                      key={getUtilitySectionKey(section, "nav")}
                      section={section}
                      compact
                      onNavAction={
                        activePanel === "agents" ? setAgentsView : undefined
                      }
                      activeNavAction={
                        activePanel === "agents" ? agentsView : undefined
                      }
                      onChatOpen={isSidekick ? openSidekickChat : undefined}
                      activeChatTitle={
                        isSidekick && sidekickView === "chat"
                          ? sidekickChatTitle
                          : undefined
                      }
                    />
                  ))}
                </>
              );
            })()}

            {state.hero && <UtilityPanelHero hero={state.hero} />}

            {state.contentSections.map((section) => (
              <UtilityPanelSectionView
                key={getUtilitySectionKey(section, "content")}
                section={section}
              />
            ))}

            <div className={styles.productPanelFooter}>
              {state.footerActions.map((action) => (
                <button
                  key={action}
                  type="button"
                  className={styles.productFooterAction}
                >
                  {action}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

function getUtilitySectionKey(section: UtilityPanelSection, fallback: string) {
  return (
    section.title ??
    `${fallback}-${section.rows.map((row) => row.label).join("-")}`
  );
}

function UtilityPanelHero({ hero }: { hero: UtilityHero }) {
  return (
    <section className={styles.productHero}>
      {hero.eyebrow && (
        <Text
          element="span"
          type="text3"
          weight="medium"
          color="secondary"
          className={styles.productHeroEyebrow}
        >
          {hero.eyebrow}
        </Text>
      )}
      <Heading
        type="h3"
        weight="medium"
        color="primary"
        className={styles.productHeroTitle}
      >
        {hero.title}
      </Heading>
      <Text
        type="text3"
        color="secondary"
        maxLines={3}
        className={styles.productHeroDescription}
      >
        {hero.description}
      </Text>
      {hero.metrics && (
        <div className={styles.productHeroMetrics}>
          {hero.metrics.map((metric) => (
            <div key={metric.label} className={styles.productHeroMetric}>
              <Text
                element="span"
                type="text3"
                weight="medium"
                color="primary"
                className={styles.productHeroMetricValue}
              >
                {metric.value}
              </Text>
              <Text
                element="span"
                type="text3"
                color="secondary"
                className={styles.productHeroMetricLabel}
              >
                {metric.label}
              </Text>
            </div>
          ))}
        </div>
      )}
      {hero.primaryAction && (
        <Button
          kind="primary"
          size="small"
          className={styles.productHeroAction}
        >
          {hero.primaryAction}
        </Button>
      )}
      {hero.chips && (
        <div className={styles.productChips}>
          {hero.chips.map((chip) => (
            <Text
              key={chip}
              element="span"
              type="text3"
              color="secondary"
              className={styles.productChip}
            >
              {chip}
            </Text>
          ))}
        </div>
      )}
    </section>
  );
}

function UtilityPanelSectionView({
  section,
  compact = false,
  variant = "default",
  onNavAction,
  activeNavAction,
  onChatOpen,
  activeChatTitle,
}: {
  section: UtilityPanelSection;
  compact?: boolean;
  variant?: "default" | "vibe";
  onNavAction?: (action: AgentsView) => void;
  activeNavAction?: AgentsView;
  onChatOpen?: (chatId: string, chatTitle: string) => void;
  activeChatTitle?: string;
}) {
  return (
    <section className={styles.productSection}>
      {(section.title || section.action) && (
        <div className={styles.productSectionHeader}>
          {section.title && (
            <Text
              element="span"
              type="text3"
              weight="medium"
              color="secondary"
              className={styles.productSectionTitle}
            >
              {section.title}
            </Text>
          )}
          {section.action && (
            <button type="button" className={styles.productSectionAction}>
              {section.action}
            </button>
          )}
        </div>
      )}
      {section.simpleList && variant === "vibe" ? (
        <div className={styles.productSimpleRows}>
          {section.rows.map((row) => (
            <button
              key={row.label}
              type="button"
              className={`${styles.productSimpleRow}${row.selected ? ` ${styles.productSimpleRowSelected}` : ""}`}
            >
              <Icon
                icon={MondayVibeLogo}
                size={20}
                className={styles.productSimpleRowIcon}
              />
              <Text
                element="span"
                type="text2"
                color="secondary"
                ellipsis
                className={styles.productSimpleRowLabel}
              >
                {row.label}
              </Text>
            </button>
          ))}
        </div>
      ) : section.navButtons ? (
        <div className={styles.productNavList}>
          {section.rows.map((row) => {
            const isActive = row.navAction
              ? activeNavAction === row.navAction
              : !!row.selected;
            return (
              <Button
                key={row.label}
                kind="tertiary"
                color="primary"
                size="small"
                active={isActive}
                leftIcon={row.leftIcon}
                className={styles.productPrimaryAction}
                onClick={
                  row.navAction && onNavAction
                    ? () => onNavAction(row.navAction!)
                    : undefined
                }
              >
                {row.label}
              </Button>
            );
          })}
        </div>
      ) : section.navTree ? (
        <div className={styles.navTree}>
          {section.rows.map((row) => (
            <NavTreeItemRow
              key={row.label}
              label={row.label}
              icon={NAV_ITEM_ICONS[row.treeIcon ?? "board"]}
              trailingIcon={
                row.treeTrailingIcon
                  ? NAV_ITEM_ICONS[row.treeTrailingIcon]
                  : undefined
              }
              depth={0}
              selected={false}
              onSelect={() => {}}
            />
          ))}
        </div>
      ) : section.simpleList ? (
        <Menu className={styles.productMenu}>
          {section.rows.map((row) => (
            <MenuItem
              key={row.label}
              title={row.label}
              selected={
                row.navAction
                  ? activeNavAction === row.navAction
                  : row.chatId && onChatOpen
                    ? activeChatTitle === row.label
                    : row.selected
              }
              onClick={
                row.navAction && onNavAction
                  ? () => onNavAction(row.navAction!)
                  : row.chatId && onChatOpen
                    ? () => onChatOpen(row.chatId!, row.label)
                    : undefined
              }
            />
          ))}
        </Menu>
      ) : (
        <div className={styles.productRows}>
          {section.rows.map((row) => (
            <UtilityPanelRowButton
              key={row.label}
              row={row}
              compact={compact}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function UtilityPanelRowButton({
  row,
  compact,
}: {
  row: UtilityPanelRow;
  compact: boolean;
}) {
  const indicator = row.indicator ?? "tool";

  return (
    <button
      type="button"
      className={`${styles.productRow}${row.indicator === "agent" ? ` ${styles.productRowAgent}` : ""}${compact ? ` ${styles.productRowCompact}` : ""}${row.selected ? ` ${styles.productRowSelected}` : ""}`}
    >
      {row.glassVariant ? (
        <span className={styles.productRowGlass}>
          <GlassAgentTile
            variant={row.glassVariant}
            size={40}
            ariaLabel={row.label}
          />
          {row.online && (
            <span className={styles.productRowOnline} aria-hidden="true" />
          )}
        </span>
      ) : row.image ? (
        <span
          className={styles.productRowAvatar}
          style={
            row.avatarBg
              ? ({ backgroundColor: row.avatarBg } as React.CSSProperties)
              : undefined
          }
        >
          <AgentAvatar size="small" src={row.image} aria-label={row.label} />
          {row.online && (
            <span className={styles.productRowOnline} aria-hidden="true" />
          )}
        </span>
      ) : row.indicator === "app" && !row.iconGradient ? (
        <span
          className={`${styles.productRowAppIcon} ${styles.productRowAppIconNeutral}`}
          aria-hidden="true"
        >
          <Icon
            icon={MondayVibeLogo}
            size={20}
            className={styles.productRowAppGlyph}
          />
        </span>
      ) : row.iconGradient ? (
        <span
          className={styles.productRowAppIcon}
          style={{ background: row.iconGradient }}
          aria-hidden="true"
        >
          <Icon
            icon={MondayVibeLogo}
            size={20}
            className={styles.productRowAppGlyph}
          />
        </span>
      ) : row.avatarText ? (
        <span className={styles.productRowAvatar}>
          <Avatar
            size="small"
            type="text"
            text={row.avatarText}
            backgroundColor="dark_purple"
            aria-label={row.label}
          />
        </span>
      ) : (
        <span
          className={`${styles.productRowIcon} ${ROW_INDICATOR_CLASSES[indicator]}`}
          aria-hidden="true"
        >
          {getRowIndicatorLabel(indicator, row.label)}
        </span>
      )}
      <span className={styles.productRowText}>
        <Text
          element="span"
          type="text3"
          weight={compact ? "normal" : "medium"}
          color="primary"
          ellipsis
          className={styles.productRowLabel}
        >
          {row.label}
        </Text>
        {row.meta && (
          <Text
            element="span"
            type="text3"
            color="secondary"
            ellipsis
            className={styles.productRowMeta}
          >
            {row.meta}
          </Text>
        )}
      </span>
      {row.trailing && (
        <Text
          element="span"
          type="text3"
          color="secondary"
          className={styles.productRowTrailing}
        >
          {row.trailing}
        </Text>
      )}
      {row.badge && (
        <Text
          element="span"
          type="text3"
          weight="medium"
          color="primary"
          className={styles.productBadge}
        >
          {row.badge}
        </Text>
      )}
    </button>
  );
}

function getRowIndicatorLabel(
  indicator: NonNullable<UtilityPanelRow["indicator"]>,
  fallback: string,
) {
  const indicatorLabels: Record<
    NonNullable<UtilityPanelRow["indicator"]>,
    string
  > = {
    conversation: "S",
    prompt: "AI",
    agent: "A",
    app: "V",
    meeting: "N",
    favorite: "*",
    tool: fallback.charAt(0),
  };

  return indicatorLabels[indicator];
}

function WorkspaceSelector() {
  const [workspace, setWorkspace] = useState<WorkspaceOption>(
    WORKSPACE_OPTIONS[0],
  );

  return (
    <div className={styles.workspaceCard}>
      <Dropdown<WorkspaceOption>
        id="left-pane-workspace"
        className={styles.workspaceDropdownWrap}
        aria-label="Workspace"
        menuAriaLabel="Workspaces"
        size="small"
        clearable={false}
        searchable
        options={WORKSPACE_OPTIONS}
        value={workspace}
        onChange={(option) => {
          if (option) setWorkspace(option);
        }}
        valueRenderer={(option) => workspaceOptionRow(option)}
        optionRenderer={(option) => workspaceOptionRow(option)}
      />
      <button
        type="button"
        aria-label="Add item to workspace"
        className={styles.workspaceAddButton}
      >
        <PanelPlusIcon className={styles.workspaceAddIcon} />
      </button>
    </div>
  );
}

const WORKSPACE_AGENTS: {
  name: string;
  role: string;
  variant: GlassAgentTileVariant;
}[] = [
  { name: "Elena", role: "Response Triage & Cohort Router", variant: 1 },
  { name: "Fiona", role: "Response Triage & Cohort Router", variant: 2 },
  { name: "Sarah", role: "Sprint Intake Triage Lead", variant: 3 },
];

function MyWorkspaceAgentsRow() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.workspaceAgentsBlock}>
      <button
        type="button"
        className={styles.sectionRow}
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        aria-label="My workspace agents"
      >
        <span className={styles.sectionLabelGroup}>
          <span className={styles.sectionLabel}>My workspace agents</span>
          <Chevron isExpanded={expanded} />
        </span>
        {!expanded && (
          <span className={styles.workspaceAgentStack} aria-hidden="true">
            {WORKSPACE_AGENTS.map((agent) => (
              <span key={agent.name} className={styles.workspaceAgentStackItem}>
                <GlassAgentTile
                  variant={agent.variant}
                  size={22}
                  ariaLabel={agent.name}
                />
              </span>
            ))}
          </span>
        )}
      </button>
      {expanded && (
        <div className={styles.workspaceAgentsList}>
          {WORKSPACE_AGENTS.map((agent) => (
            <button
              key={agent.name}
              type="button"
              className={styles.workspaceAgentRow}
            >
              <span className={styles.workspaceAgentRowAvatar}>
                <GlassAgentTile
                  variant={agent.variant}
                  size={40}
                  ariaLabel={agent.name}
                />
              </span>
              <span className={styles.workspaceAgentRowText}>
                <span className={styles.workspaceAgentRowName}>
                  {agent.name}
                </span>
                <span className={styles.workspaceAgentRowRole}>
                  {agent.role}
                </span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function NavTreeItemRow({
  label,
  icon: ItemIcon,
  trailingIcon: TrailingIcon,
  badge,
  depth,
  selected,
  onSelect,
}: {
  label: string;
  icon: AnyIcon;
  trailingIcon?: AnyIcon;
  badge?: string;
  depth: number;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      className={`${styles.treeRow}${selected ? ` ${styles.treeRowSelected}` : ""}`}
      style={
        {
          "--tree-depth": depth,
          "--tree-indent": `calc(${depth} * (var(--space-20) + var(--space-2)))`,
        } as React.CSSProperties
      }
      onClick={onSelect}
      aria-current={selected ? "page" : undefined}
    >
      <Icon icon={ItemIcon} size={16} className={styles.treeRowIcon} />
      <span className={styles.treeRowLabel}>{label}</span>
      {badge && (
        <Label text={badge} color="primary" size="small" className={styles.treeRowBadge} />
      )}
      {TrailingIcon && (
        <Icon
          icon={TrailingIcon}
          size={16}
          className={styles.treeRowTrailingIcon}
        />
      )}
    </button>
  );
}

function NavTreeNodes({
  nodes,
  depth,
  selectedItem,
  expandedFolders,
  onSelect,
  onToggleFolder,
}: {
  nodes: NavTreeNode[];
  depth: number;
  selectedItem: string;
  expandedFolders: Record<string, boolean>;
  onSelect: (id: string) => void;
  onToggleFolder: (folderId: string) => void;
}) {
  return (
    <>
      {nodes.map((node) => {
        if (node.type === "folder") {
          const isExpanded = !!expandedFolders[node.id];
          return (
            <div key={node.id} className={styles.folderGroup}>
              <button
                type="button"
                className={`${styles.treeRow} ${styles.treeRowFolder}`}
                style={
                  {
                    "--tree-depth": depth,
                    "--tree-indent": `calc(${depth} * (var(--space-20) + var(--space-2)))`,
                    "--folder-color": node.color,
                  } as React.CSSProperties
                }
                onClick={() => onToggleFolder(node.id)}
                aria-expanded={isExpanded}
                aria-label={`Toggle ${node.label} folder`}
              >
                <Chevron isExpanded={isExpanded} variant="tree" />
                <span className={styles.treeRowLabel}>{node.label}</span>
              </button>
              {isExpanded && node.children.length > 0 && (
                <NavTreeNodes
                  nodes={node.children}
                  depth={depth + 1}
                  selectedItem={selectedItem}
                  expandedFolders={expandedFolders}
                  onSelect={onSelect}
                  onToggleFolder={onToggleFolder}
                />
              )}
            </div>
          );
        }

        return (
          <NavTreeItemRow
            key={node.id}
            label={node.label}
            icon={NAV_ITEM_ICONS[node.icon]}
            badge={node.badge}
            depth={depth}
            selected={selectedItem === node.id}
            onSelect={() => onSelect(node.id)}
          />
        );
      })}
    </>
  );
}

function ContentSection({
  selectedItem,
  onSelect,
}: {
  selectedItem: string;
  onSelect: (id: string) => void;
}) {
  const [contentExpanded, setContentExpanded] = useState(true);
  const [expandedFolders, setExpandedFolders] = useState(
    DEFAULT_EXPANDED_FOLDERS,
  );

  const toggleFolder = useCallback((folderId: string) => {
    setExpandedFolders((prev) => ({ ...prev, [folderId]: !prev[folderId] }));
  }, []);

  return (
    <div className={styles.contentSection}>
      <button
        type="button"
        className={styles.sectionRow}
        onClick={() => setContentExpanded((prev) => !prev)}
        aria-expanded={contentExpanded}
        aria-label="Toggle Content"
      >
        <span className={styles.sectionLabelGroup}>
          <span className={styles.sectionLabel}>Content</span>
          <Chevron isExpanded={contentExpanded} />
        </span>
      </button>
      {contentExpanded && (
        <div className={styles.navTree} role="tree" aria-label="Workspace">
          <NavTreeNodes
            nodes={WORKSPACE_NAV_TREE}
            depth={0}
            selectedItem={selectedItem}
            expandedFolders={expandedFolders}
            onSelect={onSelect}
            onToggleFolder={toggleFolder}
          />
        </div>
      )}
    </div>
  );
}

export interface LeftPaneContentProps {
  activePanel: RailItemId;
  onCloseNavigation: () => void;
}

export default function LeftPaneContent({
  activePanel,
  onCloseNavigation,
}: LeftPaneContentProps) {
  const { selectedId: selectedItem, setSelectedId } = useWorkspaceSelection();

  const handleSelect = useCallback(
    (id: string) => {
      setSelectedId(id);
    },
    [setSelectedId],
  );

  return (
    <Flex
      direction="column"
      align="stretch"
      className={styles.root}
      data-name={`${activePanel} panel`}
      aria-label={
        activePanel === "workspace"
          ? "Workspace"
          : UTILITY_PANEL_STATES[activePanel].title
      }
    >
      <Box
        className={`${styles.panel}${activePanel === "vibe" ? ` ${styles.panelVibe}` : ""}`}
      >
        <PanelBackground />
        <div className={styles.panelInner}>
          {activePanel === "workspace" ? (
            <WorkspacePanelContent
              selectedItem={selectedItem}
              onSelect={handleSelect}
              onCloseNavigation={onCloseNavigation}
            />
          ) : (
            <UtilityPanelContent
              activePanel={activePanel}
              onCloseNavigation={onCloseNavigation}
            />
          )}
        </div>
      </Box>
    </Flex>
  );
}
