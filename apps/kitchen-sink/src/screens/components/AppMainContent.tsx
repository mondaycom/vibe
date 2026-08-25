import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Text,
} from "@vibe/core";
import {
  Board,
  Doc,
  MoveArrowUp,
  VideoMeeting,
  Work,
} from "@mondaydotcomorg/icons";
import type { RailItemId } from "./NavigationRail";
import styles from "./AppMainContent.module.scss";
import { SidekickPage } from "./SidekickPage";
import { SidekickChatPage } from "./SidekickChatPage";
import { useAgentsView } from "../context/AgentsViewContext";
import { useSidekickView } from "../context/SidekickViewContext";
import { AgentsPage } from "./AgentsPage";
import { ManageAgentsPage } from "./ManageAgentsPage";
import { VibePage } from "./VibePage";
import { NotetakerPage } from "./NotetakerPage";
import { HomeModesPage } from "./HomeModesPage";

type ProductIcon = React.FC<{ size?: string | number; className?: string }>;

interface AppMainContentProps {
  activeRailItem: RailItemId;
  renderWorkspace: () => React.ReactNode;
}

export interface ProductPageProps {
  tone: "sidekick" | "agents" | "vibe" | "notetaker" | "utility";
  eyebrow: string;
  title: string;
  description: string;
  icon: ProductIcon;
  children: React.ReactNode;
  primaryAction?: string;
  secondaryAction?: string;
}

export interface TemplateCardProps {
  icon: ProductIcon;
  title: string;
  description: string;
  badge?: string;
}

export interface MeetingCardProps {
  title: string;
  time: string;
  detail: string;
  status?: string;
}

export function ProductPage({
  tone,
  eyebrow,
  title,
  description,
  icon,
  children,
  primaryAction,
  secondaryAction,
}: ProductPageProps) {
  return (
    <Box className={`${styles.productPage} ${styles[tone]}`}>
      <section className={styles.productHero} aria-labelledby={`${tone}-title`}>
        <div className={styles.heroIcon} aria-hidden="true">
          <Icon icon={icon} iconSize={24} />
        </div>
        <div className={styles.heroCopy}>
          <Text
            type="text3"
            weight="medium"
            color="secondary"
            className={styles.eyebrow}
          >
            {eyebrow}
          </Text>
          <Heading type="h2" className={styles.heroTitle} id={`${tone}-title`}>
            {title}
          </Heading>
          <Text
            type="text1"
            color="secondary"
            ellipsis={false}
            className={styles.heroDescription}
          >
            {description}
          </Text>
        </div>
        {(primaryAction || secondaryAction) && (
          <Flex gap="small" align="center" className={styles.heroActions}>
            {secondaryAction && (
              <Button kind="secondary" size="small">
                {secondaryAction}
              </Button>
            )}
            {primaryAction && (
              <Button kind="primary" size="small">
                {primaryAction}
              </Button>
            )}
          </Flex>
        )}
      </section>
      {children}
    </Box>
  );
}

export function TemplateCard({
  icon,
  title,
  description,
  badge,
}: TemplateCardProps) {
  return (
    <article className={styles.templateCard}>
      <div className={styles.templateIcon} aria-hidden="true">
        <Icon icon={icon} iconSize={20} />
      </div>
      <div className={styles.templateCopy}>
        <Flex align="center" gap="xs">
          <Text type="text2" weight="medium" color="primary">
            {title}
          </Text>
          {badge && <span className={styles.badge}>{badge}</span>}
        </Flex>
        <Text type="text3" color="secondary" ellipsis={false}>
          {description}
        </Text>
      </div>
    </article>
  );
}

export function SectionHeader({
  title,
  action,
}: {
  title: string;
  action?: string;
}) {
  return (
    <Flex
      align="center"
      justify="space-between"
      className={styles.sectionHeader}
    >
      <Text type="text1" weight="medium" color="primary">
        {title}
      </Text>
      {action && (
        <Button kind="tertiary" size="small">
          {action}
        </Button>
      )}
    </Flex>
  );
}

export function PromptChip({ children }: { children: React.ReactNode }) {
  return (
    <button type="button" className={styles.promptChip}>
      {children}
    </button>
  );
}

export function ChatComposer({
  label,
  placeholder,
  actionLabel,
}: {
  label: string;
  placeholder: string;
  actionLabel: string;
}) {
  return (
    <div className={styles.composer}>
      <textarea
        className={styles.composerInput}
        aria-label={label}
        placeholder={placeholder}
      />
      <Flex
        align="center"
        justify="space-between"
        className={styles.composerFooter}
      >
        <Text type="text3" color="secondary">
          Connects to boards, docs, updates, and files
        </Text>
        <Button kind="primary" size="small" rightIcon={MoveArrowUp}>
          {actionLabel}
        </Button>
      </Flex>
    </div>
  );
}

export function MeetingCard({ title, time, detail, status }: MeetingCardProps) {
  return (
    <article className={styles.meetingCard}>
      <div className={styles.meetingIcon} aria-hidden="true">
        <Icon icon={VideoMeeting} iconSize={20} />
      </div>
      <div className={styles.meetingCopy}>
        <Flex align="center" gap="xs">
          <Text type="text2" weight="medium">
            {title}
          </Text>
          {status && <span className={styles.badge}>{status}</span>}
        </Flex>
        <Text type="text3" color="secondary">
          {time}
        </Text>
        <Text type="text3" color="secondary" ellipsis={false}>
          {detail}
        </Text>
      </div>
      <AvatarGroup size="small" max={2}>
        <Avatar type="text" text="AR" aria-label="Alex Rivera" />
        <Avatar type="text" text="JL" aria-label="Jordan Lee" />
      </AvatarGroup>
    </article>
  );
}

function UtilityPage({
  activeRailItem,
}: {
  activeRailItem: Extract<RailItemId, "favorites" | "more">;
}) {
  const isFavorites = activeRailItem === "favorites";

  return (
    <ProductPage
      tone="utility"
      eyebrow={isFavorites ? "Favorites" : "More tools"}
      title={isFavorites ? "Pinned workspace items" : "Explore workspace tools"}
      description={
        isFavorites
          ? "Open important boards, docs, and dashboards from one focused place."
          : "Find dashboards, marketplace apps, imports, admin tools, and other monday workflows."
      }
      icon={isFavorites ? Board : Work}
      primaryAction={isFavorites ? "Add favorite" : "Open marketplace"}
    >
      <div className={styles.utilityGrid}>
        {(isFavorites
          ? [
              ["New icon to Vibe - request form", "Board"],
              ["Icons catalog instructions", "Doc"],
              ["Approved icon workflow", "Board"],
            ]
          : [
              ["Dashboards", "Visualize workspace data"],
              ["Apps marketplace", "Extend your workflow"],
              ["Trash", "Restore deleted work"],
            ]
        ).map(([title, description]) => (
          <TemplateCard
            key={title}
            icon={isFavorites ? Doc : Work}
            title={title}
            description={description}
          />
        ))}
      </div>
    </ProductPage>
  );
}

export function AppMainContent({
  activeRailItem,
  renderWorkspace,
}: AppMainContentProps) {
  const { view: agentsView } = useAgentsView();
  const { view: sidekickView, chatId, chatTitle } = useSidekickView();

  switch (activeRailItem) {
    case "workspace":
      return <>{renderWorkspace()}</>;
    case "home-modes":
      return <HomeModesPage />;
    case "sidekick":
      if (sidekickView === "chat") {
        return (
          <SidekickChatPage
            key={chatId}
            chatId={chatId}
            chatTitle={chatTitle}
          />
        );
      }
      return <SidekickPage />;
    case "agents":
      if (agentsView === "manage") {
        return <ManageAgentsPage />;
      }
      return <AgentsPage />;
    case "vibe":
      return <VibePage />;
    case "notetaker":
      return <NotetakerPage />;
    case "favorites":
    case "more":
      return <UtilityPage activeRailItem={activeRailItem} />;
    default:
      return <>{renderWorkspace()}</>;
  }
}
