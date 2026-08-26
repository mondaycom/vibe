import { Box, Flex, Heading, Icon, IconButton, Text } from "@vibe/core";
import {
  AISkills,
  Apps,
  AttachSlanted,
  Board,
  BulletsAI,
  Camera,
  Doc,
  Microphone,
  MoveArrowUp,
  SearchAI,
  Work,
} from "@mondaydotcomorg/icons";
import styles from "./SidekickPage.module.scss";
import { StrokeSpotlight } from "@vibe/core";
import { STROKE_NO_PULSE_ATTR } from "@vibe/core";

type ShortcutColorVar = `var(--color-${string})`;

interface ActionShortcut {
  icon: React.FC<{ size?: string | number; className?: string }>;
  label: string;
  color: ShortcutColorVar;
}

const ACTION_SHORTCUTS: ActionShortcut[] = [
  {
    icon: Board,
    label: "Create a board",
    color: "var(--color-lavender-selected)",
  },
  {
    icon: Doc,
    label: "Write a doc",
    color: "var(--color-aquamarine-selected)",
  },
  {
    icon: SearchAI,
    label: "Research online",
    color: "var(--color-egg_yolk-selected)",
  },
  {
    icon: BulletsAI,
    label: "Analyze data",
    color: "var(--color-lipstick-selected)",
  },
  {
    icon: Camera,
    label: "Generate an image",
    color: "var(--color-done-green-selected)",
  },
  {
    icon: Work,
    label: "Build a Vibe app",
    color: "var(--color-orchid-selected)",
  },
  {
    icon: AISkills,
    label: "Learn about",
    color: "var(--color-bright-blue-selected)",
  },
];

const SUGGESTED_STARTERS = [
  {
    title: "Create a structured board",
    description: "Build a board with owners, milestones, and timelines.",
    chip: "Board",
  },
  {
    title: "Draft a clear document",
    description: "Turn goals and decisions into a crisp written document.",
    chip: "Doc",
  },
  {
    title: "Get a snapshot of progress",
    description: "Summarize what's done, in progress, and at risk.",
    chip: "Insights",
  },
  {
    title: "Generate ideas to solve a concrete work challenge",
    description: "Brainstorm approaches and turn them into an action plan.",
    chip: "Brainstorm",
  },
] as const;

export function SidekickPage() {
  return (
    <Box className={styles.root}>
      <div className={styles.heroBlock}>
        <div className={styles.hero}>
          <Heading type="h1" weight="bold" className={styles.heroGreeting}>
            Hey Naama
          </Heading>
          <Heading type="h2" className={styles.heroQuestion}>
            What would you like to work on today?
          </Heading>
        </div>

        <div className={styles.composerShell}>
          <StrokeSpotlight
            palette="sidekick"
            spread={40}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={1.5}
            glowBlur={12}
          >
            <div className={styles.composerWrap}>
              <textarea
                className={styles.composerInput}
                aria-label="Ask Sidekick"
                placeholder="@ Mention boards and docs..."
              />
              <Flex
                align="center"
                justify="space-between"
                className={styles.composerFooter}
              >
                <Flex align="center" gap="xs">
                  <IconButton
                    icon={Apps}
                    size="small"
                    kind="tertiary"
                    aria-label="Add widget"
                    {...{ [STROKE_NO_PULSE_ATTR]: true }}
                  />
                  <IconButton
                    icon={AttachSlanted}
                    size="small"
                    kind="tertiary"
                    aria-label="Attach file"
                    {...{ [STROKE_NO_PULSE_ATTR]: true }}
                  />
                  <button
                    type="button"
                    className={styles.contextButton}
                    {...{ [STROKE_NO_PULSE_ATTR]: true }}
                  >
                    @ Add context
                  </button>
                </Flex>
                <Flex align="center" gap="xs">
                  <IconButton
                    icon={Microphone}
                    size="small"
                    kind="tertiary"
                    aria-label="Voice input"
                    {...{ [STROKE_NO_PULSE_ATTR]: true }}
                  />
                  <IconButton
                    icon={MoveArrowUp}
                    kind="primary"
                    color="primary"
                    size="small"
                    aria-label="Send message"
                  />
                </Flex>
              </Flex>
            </div>
          </StrokeSpotlight>
        </div>

        <Box className={styles.shortcutRow}>
          {ACTION_SHORTCUTS.map(({ icon, label, color }) => (
            <button
              key={label}
              type="button"
              className={styles.shortcut}
              style={{ "--chip-bg": color } as React.CSSProperties}
            >
              <span className={styles.shortcutCircle}>
                <Icon icon={icon} size={20} aria-hidden />
              </span>
              <Text
                element="span"
                type="text3"
                color="primary"
                ellipsis={false}
                className={styles.shortcutLabel}
              >
                {label}
              </Text>
            </button>
          ))}
        </Box>
      </div>

      <div className={styles.cardsSection}>
        <Text
          type="text1"
          weight="medium"
          color="primary"
          className={styles.sectionTitle}
        >
          Suggested starters tailored for your work
        </Text>

        <div className={styles.starterGrid}>
          {SUGGESTED_STARTERS.map(({ title, description, chip }) => (
            <button type="button" key={title} className={styles.starterCard}>
              <div className={styles.starterCopy}>
                <Text
                  type="text2"
                  weight="medium"
                  color="primary"
                  ellipsis={false}
                  className={styles.starterTitle}
                >
                  {title}
                </Text>
                <Text type="text3" color="secondary" ellipsis={false}>
                  {description}
                </Text>
              </div>
              <span className={styles.starterChip}>{chip}</span>
            </button>
          ))}
        </div>
      </div>
    </Box>
  );
}
