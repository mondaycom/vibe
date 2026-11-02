import { createPortal } from "react-dom";
import { Avatar, Icon, AvatarGroup } from "@vibe/core";
import {
  Attach,
  Bookmark,
  Close,
  Email,
  Emoji,
  Feedback,
  Gif,
  Home,
  Mention,
  MoreActions,
  Notifications,
  Reply,
  ThumbsUp,
  Wand,
} from "@mondaydotcomorg/icons";
import type { Item } from "./types";
import styles from "./ItemDetailsPanel.module.scss";

interface ItemDetailsPanelProps {
  item: Item | null;
  onClose: () => void;
}

const TABS = [
  { id: "updates", label: "Updates / 1", icon: Home },
  { id: "files", label: "Files" },
  { id: "activity", label: "Activity Log" },
  { id: "info", label: "Info Boxes" },
  { id: "workforms", label: "WorkForms Item View" },
];

const DEMO_AVATAR =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face&auto=format";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyIcon = React.FC<any>;

function IconBtn({
  icon,
  label,
  className,
}: {
  icon: AnyIcon;
  label: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`${styles.iconBtn}${className ? ` ${className}` : ""}`}
      aria-label={label}
    >
      <Icon icon={icon} iconSize={16} />
    </button>
  );
}

export function ItemDetailsPanel({ item, onClose }: ItemDetailsPanelProps) {
  const open = !!item;

  return createPortal(
    <>
      <div
        className={`${styles.scrim}${open ? ` ${styles.scrimOpen}` : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`${styles.panel}${open ? ` ${styles.panelOpen}` : ""}`}
        aria-hidden={!open}
        aria-label={item ? `${item.name} details` : "Item details"}
      >
        {item && (
          <>
            <header className={styles.header}>
              <button
                type="button"
                className={styles.closeBtn}
                onClick={onClose}
                aria-label="Close item details"
              >
                <Icon icon={Close} iconSize={18} />
              </button>
              <h2 className={styles.title}>{item.name}</h2>
              <div className={styles.headerActions}>
                <AvatarGroup size="small" max={2}>
                  <Avatar
                    type="img"
                    src={item.person || DEMO_AVATAR}
                    aria-label={item.personName ?? "Owner"}
                  />
                </AvatarGroup>
                <span className={styles.brandDot} aria-hidden="true" />
                <IconBtn icon={MoreActions} label="More actions" />
              </div>
            </header>

            <nav className={styles.tabs} aria-label="Item sections">
              {TABS.map((tab, idx) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`${styles.tab}${idx === 0 ? ` ${styles.tabActive}` : ""}`}
                >
                  {tab.icon && (
                    <Icon
                      icon={tab.icon}
                      iconSize={16}
                      className={styles.tabIcon}
                    />
                  )}
                  <span className={styles.tabLabel}>{tab.label}</span>
                </button>
              ))}
              <button
                type="button"
                className={styles.tabAdd}
                aria-label="Add tab"
              >
                +
              </button>
            </nav>

            <div className={styles.subActions}>
              <button type="button" className={styles.subAction}>
                <Icon icon={Email} iconSize={16} />
                Update via email
              </button>
              <span className={styles.subActionDivider} aria-hidden="true" />
              <button type="button" className={styles.subAction}>
                <Icon icon={Feedback} iconSize={16} />
                Give feedback
              </button>
            </div>

            <div className={styles.body}>
              <div className={styles.composer}>
                <div className={styles.composerInput}>
                  Write an update and mention others with @
                </div>
                <div className={styles.composerToolbar}>
                  <IconBtn icon={Mention} label="Mention" />
                  <IconBtn icon={Attach} label="Attach" />
                  <IconBtn icon={Gif} label="Insert GIF" />
                  <IconBtn icon={Emoji} label="Insert emoji" />
                  <span className={styles.composerAi}>
                    <IconBtn icon={Wand} label="AI assist" />
                    <span className={styles.composerAiDot} aria-hidden="true" />
                  </span>
                </div>
              </div>

              <article className={styles.update}>
                <header className={styles.updateHeader}>
                  <Avatar
                    size="small"
                    type="img"
                    src={DEMO_AVATAR}
                    aria-label="Itamar Ben Shushan"
                  />
                  <div className={styles.updateMeta}>
                    <span className={styles.updateAuthor}>
                      Itamar Ben Shushan
                    </span>
                    <span className={styles.updateTimestamp}>17d</span>
                  </div>
                  <div className={styles.updateActions}>
                    <IconBtn icon={Notifications} label="Subscribe" />
                    <IconBtn icon={Bookmark} label="Bookmark" />
                    <IconBtn icon={MoreActions} label="More" />
                  </div>
                </header>
                <div className={styles.updateBody}>
                  <p>
                    Context from <strong>Guy / Itamar [New Role Sync]</strong>{" "}
                    (2026-05-24):
                  </p>
                  <p>
                    Action item for Itamar: Talk with Daniel about the
                    distinction between Sidekick and internal/external Agents,
                    and explore adding an <em>Upload an Image</em> option for
                    Sidekick.
                  </p>
                </div>
                <div className={styles.updateFooter}>
                  <button type="button" className={styles.updateFooterAction}>
                    <Icon icon={ThumbsUp} iconSize={16} />
                    Like
                  </button>
                  <button type="button" className={styles.updateFooterAction}>
                    <Icon icon={Reply} iconSize={16} />
                    Reply
                  </button>
                </div>
                <div className={styles.replyRow}>
                  <Avatar
                    size="small"
                    type="img"
                    src={DEMO_AVATAR}
                    aria-label="You"
                  />
                  <div className={styles.replyInput}>
                    Write a reply and mention others with @
                  </div>
                </div>
              </article>
            </div>
          </>
        )}
      </aside>
    </>,
    document.body,
  );
}
