import { useState } from "react";
import {
  Box,
  Button,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  SegmentedControl,
} from "@vibe/core";
import { Mention } from "@vibe/icons";
import {
  Add,
  AISkills,
  AttachSlanted,
  Board,
  Doc,
  DropdownChevronDown,
  Idea,
  Image,
  Menu as MenuIcon,
  Microphone,
  MoveArrowUp,
  Present,
  RegenerateAI,
  Search,
  SlashCommand,
} from "@mondaydotcomorg/icons";
import agentSarah from "../assets/home-modes/sarah.png";
import agentDiana from "../assets/home-modes/diana.png";
import vibeThumb1 from "../assets/home-modes/vibe-thumb-1.svg";
import vibeThumb2 from "../assets/home-modes/vibe-thumb-2.svg";
import vibeThumb3 from "../assets/home-modes/vibe-thumb-3.svg";
import gmailIcon from "../assets/home-modes/gmail.svg";
import slackIcon from "../assets/home-modes/slack.png";
import outlookIcon from "../assets/home-modes/outlook.svg";
import styles from "./HomeModesPage.module.scss";
import { StrokeSpotlight } from "./StrokeSpotlight/StrokeSpotlight";
import { STROKE_NO_PULSE_ATTR } from "./StrokeSpotlight/useStrokeSpotlight";

type HomeMode = "sidekick" | "agents" | "vibe";

const MODE_OPTIONS = [
  { value: "sidekick", label: "Sidekick" },
  { value: "agents", label: "Agents" },
  { value: "vibe", label: "Vibe" },
] as const;

const MODE_COPY: Record<
  HomeMode,
  { title: string; subtitle: string; placeholder: string }
> = {
  sidekick: {
    title: "Do your work",
    subtitle: "Hey Naama, what do you want to work on today?",
    placeholder: "Create reports",
  },
  agents: {
    title: "Build your agents",
    subtitle:
      "Hey Naama, pick a pre-built agent or build with a simple description",
    placeholder: "Build your agent",
  },
  vibe: {
    title: "Build your ideas",
    subtitle: "Hey Naama, build a new Vibe app with a simple description",
    placeholder: "Build your new application",
  },
};

const SIDEKICK_CHIPS = [
  { label: "Create a board", icon: Board },
  { label: "Write a doc", icon: Doc },
  { label: "Research online", icon: Search },
] as const;

const VIBE_CHIPS = [
  { label: "Design Asset Library" },
  { label: "Design Feedback Loop" },
  { label: "Design Sprint Planner" },
] as const;

const SIDEKICK_STARTERS = [
  {
    title: "Structured board",
    description:
      "Create a structured board with owners, milestones, and timelines",
    badge: "Board",
    badgeBg: "#e8e7fd",
  },
  {
    title: "Clear document",
    description: "Draft a clear document with goals and next steps",
    badge: "Doc",
    badgeBg: "#dff5f2",
  },
  {
    title: "Progress summary",
    description: "Get a snapshot of progress, risks, and priorities",
    badge: "Insights",
    badgeBg: "rgba(255,146,232,0.3)",
  },
  {
    title: "Brainstorm ideas",
    description: "Generate ideas to solve a concrete work challenge",
    badge: "Brainstorm",
    badgeBg: "rgba(3,201,250,0.12)",
  },
  {
    title: "Research topics",
    description: "Research a topic or alternatives for better decisions",
    badge: "Research",
    badgeBg: "rgba(255,214,51,0.3)",
  },
  {
    title: "Image creating",
    description: "Create an image to explain a plan or workflow",
    badge: "Image",
    badgeBg: "#e8e7fd",
  },
] as const;

const AGENT_CARDS = [
  {
    title: "Figma-to-Request Validator",
    description:
      "I'll validate each request's Figma link and flag what's missing.",
    basedOn: "Task - Vibe team",
    image: agentSarah,
  },
  {
    title: "Design-to-Dev Handoff Enforcer",
    description:
      "I'll block “Code review” until the task has a real spec and links.",
    basedOn: "Design Sprint",
    image: agentDiana,
  },
] as const;

const VIBE_CARDS = [
  {
    title: "Creative Studio Hub",
    description:
      "Use AI to analyze communication history and sentiment to score lead engagement, and automatically suggest personalized follow-up strategies to improve conversion rates.",
    basedOn: "Task - Vibe team",
    image: vibeThumb1,
  },
  {
    title: "Project control",
    description: "Team leads multi-project visibility hub",
    basedOn: "Task - Vibe team",
    image: vibeThumb2,
  },
  {
    title: "Knowledge manager",
    description: "Centralize docs, decisions, and team knowledge in one place.",
    basedOn: "Home",
    image: vibeThumb3,
  },
  {
    title: "Org chart",
    description: "Map roles, reporting lines, and ownership across teams.",
    basedOn: "Home",
    image: vibeThumb1,
  },
] as const;

function ConnectToolsBadges() {
  return (
    <span className={styles.toolBadges} aria-hidden>
      <span className={styles.toolBadge}>
        <img src={gmailIcon} alt="" />
      </span>
      <span className={styles.toolBadge}>
        <img src={slackIcon} alt="" />
      </span>
      <span className={styles.toolBadge}>
        <img src={outlookIcon} alt="" />
      </span>
    </span>
  );
}

function BasedOnChip({ label }: { label: string }) {
  return (
    <div className={styles.basedOn}>
      <span>Based on</span>
      <span className={styles.basedOnChip}>
        <Icon icon={Board} iconSize={14} aria-hidden />
        {label}
      </span>
    </div>
  );
}

export function HomeModesPage() {
  const [mode, setMode] = useState<HomeMode>("sidekick");
  const [composerFocused, setComposerFocused] = useState(false);
  const copy = MODE_COPY[mode];

  return (
    <Box
      className={[
        styles.root,
        mode === "agents" ? styles.rootAgents : "",
        mode === "vibe" ? styles.rootVibe : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <button type="button" className={styles.whatsNew}>
        <Icon icon={Present} iconSize={20} aria-hidden />
        What&apos;s new
      </button>

      <div className={styles.heroBlock}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>{copy.title}</h1>
          <p className={styles.heroSubtitle}>{copy.subtitle}</p>
        </div>

        <div className={styles.composerShell}>
          <StrokeSpotlight
            palette={
              mode === "sidekick"
                ? "sidekick"
                : mode === "vibe"
                  ? "vibe"
                  : "default"
            }            spread={40}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={1.5}
            glowBlur={12}
          >
            <div
              className={[
                styles.composer,
                composerFocused ? styles.composerFocused : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <textarea
                key={mode}
                className={styles.composerInput}
                aria-label={copy.title}
                placeholder={copy.placeholder}
                defaultValue=""
                onFocus={() => setComposerFocused(true)}
                onBlur={() => setComposerFocused(false)}
              />
              <div className={styles.composerFooter}>
                <div className={styles.composerLeft}>
                  <MenuButton
                    className={styles.addMenuButton}
                    ariaLabel="Add"
                    size="small"
                    closeMenuOnItemClick
                    dialogPosition={MenuButton.dialogPositions.BOTTOM_START}
                    dialogOffset={{ main: 8, secondary: 0 }}
                    triggerElement={(triggerProps) => (
                      <IconButton
                        {...triggerProps}
                        icon={Add}
                        size="small"
                        kind="tertiary"
                        aria-label="Add"
                        {...{ [STROKE_NO_PULSE_ATTR]: true }}
                      />
                    )}
                  >
                    <Menu
                      id="home-modes-add-menu"
                      size="medium"
                      focusItemIndexOnMount={0}
                      aria-label="Add to prompt"
                      className={styles.addMenu}
                    >
                      <MenuItem title="Add context" icon={Mention} />
                      <MenuItem title="Upload files" icon={AttachSlanted} />
                      <MenuItem
                        title="Connect tools"
                        icon={AISkills}
                        rightIcon={ConnectToolsBadges}
                      />
                      <MenuItem title="Use skills" icon={SlashCommand} />
                    </Menu>
                  </MenuButton>
                  <span {...{ [STROKE_NO_PULSE_ATTR]: true }}>
                    <SegmentedControl
                      className={styles.modeControl}
                      ariaLabel="Home mode"
                      size="small"
                      options={[...MODE_OPTIONS]}
                      value={mode}
                      onChange={(value) => setMode(value as HomeMode)}
                    />
                  </span>
                </div>
                <div className={styles.composerRight}>
                  <button
                    type="button"
                    className={styles.modelButton}
                    {...{ [STROKE_NO_PULSE_ATTR]: true }}
                  >
                    Model
                    <Icon icon={DropdownChevronDown} iconSize={16} aria-hidden />
                  </button>
                  <IconButton
                    icon={Microphone}
                    size="small"
                    kind="tertiary"
                    aria-label="Speech to text"
                    {...{ [STROKE_NO_PULSE_ATTR]: true }}
                  />
                  <button
                    type="button"
                    className={styles.sendButton}
                    aria-label="Send"
                  >
                    <Icon icon={MoveArrowUp} iconSize={20} aria-hidden />
                  </button>
                </div>
              </div>
            </div>
          </StrokeSpotlight>
        </div>

        {mode === "sidekick" && (
          <div className={styles.chipRow}>
            {SIDEKICK_CHIPS.map(({ label, icon }) => (
              <button key={label} type="button" className={styles.chip}>
                <Icon icon={icon} iconSize={20} aria-hidden />
                {label}
              </button>
            ))}
            <button
              type="button"
              className={`${styles.chip} ${styles.chipMore}`}
              aria-label="More actions"
            >
              <Icon icon={MenuIcon} iconSize={20} aria-hidden />
            </button>
          </div>
        )}

        {mode === "vibe" && (
          <div className={styles.chipRow}>
            {VIBE_CHIPS.map(({ label }) => (
              <button key={label} type="button" className={styles.chip}>
                {label}
              </button>
            ))}
            <button
              type="button"
              className={`${styles.chip} ${styles.chipMore}`}
              aria-label="More actions"
            >
              <Icon icon={MenuIcon} iconSize={20} aria-hidden />
            </button>
          </div>
        )}
      </div>

      <div key={mode} className={styles.content}>
        {mode === "sidekick" && (
          <>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionCopy}>
                <p className={styles.sectionTitle}>Suggested starters</p>
                <p className={styles.sectionSubtitle}>
                  Pick a tailored suggested starter for your work
                </p>
              </div>
              <Button kind="tertiary" size="small" leftIcon={RegenerateAI}>
                Regenerate
              </Button>
            </div>
            <div className={styles.starterGrid}>
              {SIDEKICK_STARTERS.map((card) => (
                <button
                  key={card.title}
                  type="button"
                  className={styles.starterCard}
                >
                  <div className={styles.starterCopy}>
                    <p className={styles.starterTitle}>{card.title}</p>
                    <p className={styles.starterDescription}>
                      {card.description}
                    </p>
                  </div>
                  <span
                    className={styles.starterBadge}
                    style={{ background: card.badgeBg }}
                  >
                    {card.badge === "Brainstorm" && (
                      <Icon icon={Idea} iconSize={14} aria-hidden />
                    )}
                    {card.badge === "Image" && (
                      <Icon icon={Image} iconSize={14} aria-hidden />
                    )}
                    {card.badge}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}

        {mode === "agents" && (
          <>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionCopy}>
                <p className={styles.sectionTitle}>Agents made for you</p>
                <p className={styles.sectionSubtitle}>
                  Based on your workspace activity
                </p>
              </div>
              <Button kind="tertiary" size="small" leftIcon={RegenerateAI}>
                Regenerate
              </Button>
            </div>
            <div className={styles.agentGrid}>
              {AGENT_CARDS.map((card) => (
                <button
                  key={card.title}
                  type="button"
                  className={styles.agentCard}
                >
                  <div className={styles.agentThumb}>
                    <img src={card.image} alt="" />
                  </div>
                  <div className={styles.cardBody}>
                    <div>
                      <p className={styles.cardTitle}>{card.title}</p>
                      <p className={styles.cardDescription}>
                        {card.description}
                      </p>
                    </div>
                    <BasedOnChip label={card.basedOn} />
                  </div>
                </button>
              ))}
            </div>
          </>
        )}

        {mode === "vibe" && (
          <>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionCopy}>
                <p className={styles.sectionTitle}>
                  Live suggestions, made for you
                </p>
                <p className={styles.sectionSubtitle}>
                  Prompts tailored to your team, boards, and current projects
                </p>
              </div>
              <Button kind="tertiary" size="small" leftIcon={RegenerateAI}>
                Regenerate
              </Button>
            </div>
            <div className={styles.vibeGrid}>
              {VIBE_CARDS.map((card) => (
                <button
                  key={card.title}
                  type="button"
                  className={styles.vibeCard}
                >
                  <div className={styles.vibeThumb}>
                    <img src={card.image} alt="" />
                  </div>
                  <div className={styles.cardBody}>
                    <div>
                      <p className={styles.cardTitle}>{card.title}</p>
                      <p className={styles.cardDescription}>
                        {card.description}
                      </p>
                    </div>
                    <BasedOnChip label={card.basedOn} />
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </Box>
  );
}
