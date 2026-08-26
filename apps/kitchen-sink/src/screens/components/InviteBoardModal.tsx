import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Avatar, Icon } from "@vibe/core";
import { Dropdown, type DropdownOption } from "@vibe/core/next";
import { Close, Comment, Workspace } from "@mondaydotcomorg/icons";
import { GlassAgentTile, type GlassAgentTileVariant } from "./GlassAgentTile";
import { DEMO_AVATAR_1, DEMO_AVATAR_2 } from "@/demo/demoPeople";
import styles from "./InviteBoardModal.module.scss";

interface InviteBoardModalProps {
  open: boolean;
  onClose: () => void;
  workspaceName?: string;
}

type Tab = "people" | "agents";

const PEOPLE = [
  {
    name: "Itamar Ben Shushan",
    role: "Senior Product Design Lead",
    avatar: DEMO_AVATAR_1,
    defaultRole: "Owner",
  },
  {
    name: "Arava Sheleff Itelson",
    role: "Director of Product Design",
    avatar: DEMO_AVATAR_2,
    defaultRole: "Default (Editor)",
  },
  {
    name: "Nati Bawer",
    role: "Director of Product Design",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face&auto=format",
    defaultRole: "Default (Editor)",
  },
];

interface AgentInfo {
  name: string;
  role: string;
  variant: GlassAgentTileVariant;
  owner: string;
}

const AGENTS: AgentInfo[] = [
  {
    name: "Diane, Design Task Intake Agent",
    role: "Design Task Intake Agent",
    variant: 1,
    owner: "Itamar Ben Shushan",
  },
  {
    name: "Kelly, Design Operations Agent",
    role: "Design Operations Agent",
    variant: 2,
    owner: "Itamar Ben Shushan",
  },
  {
    name: "Tasko, Task Intake Clarifier",
    role: "Task Intake Clarifier",
    variant: 3,
    owner: "Itamar Ben Shushan",
  },
  {
    name: "Joyce, Personal Fitness Assistant",
    role: "Personal Fitness Assistant",
    variant: 4,
    owner: "Itamar Ben Shushan",
  },
];

const ROLE_OPTIONS: DropdownOption[] = [
  { value: "owner", label: "Owner" },
  { value: "editor", label: "Default (Editor)" },
  { value: "viewer", label: "Viewer" },
];

const ACCESS_OPTIONS: DropdownOption[] = [
  { value: "editor", label: "Editor" },
  { value: "viewer", label: "Viewer" },
  { value: "none", label: "No access" },
];

export function InviteBoardModal({
  open,
  onClose,
  workspaceName = "Personal workspace - Itamar Ben Shushan",
}: InviteBoardModalProps) {
  const [tab, setTab] = useState<Tab>("people");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className={styles.scrim} onClick={onClose} role="presentation">
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-label="Invite to this board"
        onClick={(e) => e.stopPropagation()}
      >
        <header className={styles.header}>
          <h2 className={styles.title}>Invite to this board</h2>
          <div className={styles.headerActions}>
            <button
              type="button"
              className={styles.iconBtn}
              aria-label="Open chat"
            >
              <Icon icon={Comment} iconSize={18} />
            </button>
            <button
              type="button"
              className={styles.iconBtn}
              aria-label="Close"
              onClick={onClose}
            >
              <Icon icon={Close} iconSize={18} />
            </button>
          </div>
        </header>

        <div className={styles.searchWrap}>
          <input
            type="text"
            className={styles.search}
            placeholder="Search by name, team, or email address"
            aria-label="Search by name, team, or email address"
          />
        </div>

        <nav className={styles.tabs} aria-label="Invite tabs">
          <button
            type="button"
            className={`${styles.tab}${tab === "people" ? ` ${styles.tabActive}` : ""}`}
            onClick={() => setTab("people")}
          >
            People
          </button>
          <button
            type="button"
            className={`${styles.tab}${tab === "agents" ? ` ${styles.tabActive}` : ""}`}
            onClick={() => setTab("agents")}
          >
            Agents
          </button>
        </nav>

        <div className={styles.list}>
          {tab === "people"
            ? PEOPLE.map((person) => (
                <div key={person.name} className={styles.row}>
                  <span className={styles.rowAvatar}>
                    <Avatar
                      size="medium"
                      type="img"
                      src={person.avatar}
                      aria-label={person.name}
                    />
                  </span>
                  <div className={styles.rowText}>
                    <span className={styles.rowName}>{person.name}</span>
                    <span className={styles.rowMeta}>{person.role}</span>
                  </div>
                  <div className={styles.rowRole}>
                    <Dropdown
                      size="small"
                      clearable={false}
                      searchable={false}
                      options={ROLE_OPTIONS}
                      defaultValue={
                        ROLE_OPTIONS.find(
                          (o) => o.label === person.defaultRole,
                        ) ?? ROLE_OPTIONS[1]
                      }
                    />
                  </div>
                </div>
              ))
            : AGENTS.map((agent) => (
                <div key={agent.name} className={styles.row}>
                  <span className={styles.rowAvatarTile}>
                    <GlassAgentTile
                      variant={agent.variant}
                      size={40}
                      ariaLabel={agent.name}
                    />
                  </span>
                  <div className={styles.rowText}>
                    <span className={styles.rowName}>{agent.name}</span>
                    <span className={styles.rowMetaSmall}>
                      <Avatar size="xs" type="img" src={DEMO_AVATAR_1} />
                      {agent.owner}
                    </span>
                  </div>
                </div>
              ))}
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerHeading}>General access</div>
          <div className={styles.footerRow}>
            <span className={styles.footerIcon} aria-hidden="true">
              <Icon icon={Workspace} iconSize={20} />
            </span>
            <div className={styles.footerText}>
              Only people in <strong>{workspaceName}</strong>
            </div>
            <div className={styles.footerRole}>
              <Dropdown
                size="small"
                clearable={false}
                searchable={false}
                options={ACCESS_OPTIONS}
                defaultValue={ACCESS_OPTIONS[0]}
              />
            </div>
          </div>
        </footer>
      </div>
    </div>,
    document.body,
  );
}
