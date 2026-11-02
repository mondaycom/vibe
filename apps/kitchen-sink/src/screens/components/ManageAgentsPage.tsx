import { useState } from "react";
import { Box, Button, Flex, Heading, Icon, IconButton, Text } from "@vibe/core";
import {
  AddSmall,
  AICredits,
  Bullets,
  DropdownChevronDown,
  LastUpdated,
  Menu,
  PersonAI,
  Sort,
  Workspace,
} from "@mondaydotcomorg/icons";
import {
  MANAGE_AGENTS,
  TOOL_IMAGES,
  TOOL_LABELS,
  type AgentStatus,
  type ManageAgentRow,
} from "../data/manageAgents";
import bulletImage from "../assets/tools/bullet.png";
import { useAgentBuilder } from "../context/AgentBuilderContext";
import styles from "./ManageAgentsPage.module.scss";

function StatusDot({ status }: { status: AgentStatus }) {
  return (
    <img
      className={`${styles.statusDot} ${
        status === "live" ? styles.statusDotLive : styles.statusDotPaused
      }`}
      src={bulletImage}
      alt=""
      aria-hidden="true"
    />
  );
}

function AgentTools({ agent }: { agent: ManageAgentRow }) {
  const visibleTools = agent.tools.slice(0, 3);

  return (
    <div className={styles.toolsCell}>
      <div className={styles.toolStack}>
        {visibleTools.map((tool) => (
          <span
            key={tool}
            className={styles.toolBadge}
            title={TOOL_LABELS[tool]}
          >
            <img
              className={styles.toolBadgeImage}
              src={TOOL_IMAGES[tool]}
              alt={TOOL_LABELS[tool]}
            />
          </span>
        ))}
        {agent.extraTools ? (
          <span className={styles.toolOverflow}>+{agent.extraTools}</span>
        ) : null}
      </div>
    </div>
  );
}

function AgentTableRow({ agent }: { agent: ManageAgentRow }) {
  return (
    <article className={styles.tableRow}>
      <div className={styles.agentCell}>
        <div
          className={styles.agentAvatar}
          style={{ backgroundColor: agent.avatarBg }}
        >
          <img
            className={styles.agentAvatarImage}
            src={agent.image}
            alt=""
            aria-hidden="true"
          />
        </div>
        <div className={styles.agentCopy}>
          <Text
            element="p"
            type="text1"
            weight="normal"
            color="primary"
            ellipsis={false}
            className={styles.agentName}
          >
            {agent.name}, {agent.role}
          </Text>
          <Text
            element="p"
            type="text2"
            color="secondary"
            ellipsis={false}
            className={styles.agentCreator}
          >
            By {agent.creator}
          </Text>
        </div>
      </div>

      <AgentTools agent={agent} />

      <div className={styles.statusCell}>
        <StatusDot status={agent.status} />
        <span>{agent.status === "live" ? "Live" : "Paused"}</span>
      </div>

      <div className={styles.activityCell}>
        <Icon icon={LastUpdated} iconSize={20} aria-hidden />
        <span>{agent.lastActivity}</span>
      </div>

      <div className={styles.creditsCell}>
        <Icon icon={AICredits} iconSize={16} aria-hidden />
        <span>{agent.creditsUsed}</span>
      </div>

      <IconButton
        className={styles.rowMenu}
        icon={Menu}
        kind="tertiary"
        size="xs"
        aria-label={`Actions for ${agent.name}`}
      />
    </article>
  );
}

export function ManageAgentsPage() {
  const [listView, setListView] = useState(true);
  const { openConfig } = useAgentBuilder();

  return (
    <Box className={styles.root}>
      <header className={styles.header}>
        <Heading type="h3" weight="medium" className={styles.title}>
          Manage agents
        </Heading>
        <Flex className={styles.headerActions} gap="small" align="center">
          <Button kind="tertiary" size="small" leftIcon={PersonAI}>
            Bring your own agent
          </Button>
          <Button
            kind="primary"
            size="small"
            leftIcon={AddSmall}
            onClick={() => openConfig()}
          >
            New agent
          </Button>
        </Flex>
      </header>

      <section className={styles.listSection} aria-label="Agent list">
        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>Filter by:</span>
            <Button kind="tertiary" size="xs" rightIcon={DropdownChevronDown}>
              Type
            </Button>
            <Button kind="tertiary" size="xs" rightIcon={DropdownChevronDown}>
              Status
            </Button>
          </div>

          <div className={styles.filterRight}>
            <Button kind="tertiary" size="xs" rightIcon={Sort}>
              Newest
            </Button>
            <div className={styles.viewToggle}>
              <IconButton
                icon={Bullets}
                kind={listView ? "secondary" : "tertiary"}
                size="xs"
                aria-label="List view"
                aria-pressed={listView}
                onClick={() => setListView(true)}
              />
              <IconButton
                icon={Workspace}
                kind={listView ? "tertiary" : "secondary"}
                size="xs"
                aria-label="Grid view"
                aria-pressed={!listView}
                onClick={() => setListView(false)}
              />
            </div>
          </div>
        </div>

        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <span className={styles.colHeader}>Agent name</span>
            <span className={styles.colHeader}>Tools</span>
            <span className={`${styles.colHeader} ${styles.colHeaderStatus}`}>
              Status
            </span>
            <span className={styles.colHeader}>Last activity</span>
            <span className={styles.colHeader}>AI credits used</span>
            <span className={styles.colHeader} aria-hidden="true" />
          </div>

          {MANAGE_AGENTS.map((agent) => (
            <AgentTableRow key={agent.id} agent={agent} />
          ))}
        </div>
      </section>
    </Box>
  );
}
