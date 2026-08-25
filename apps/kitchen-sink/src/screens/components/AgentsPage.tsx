import { useState } from "react";
import { Box, Button, Flex, Heading, Icon, IconButton, Text } from "@vibe/core";
import {
  AISkills,
  Board,
  MoveArrowLeft,
  MoveArrowRight,
  MoveArrowUp,
  Microphone,
} from "@mondaydotcomorg/icons";
import { PromptChip } from "./AppMainContent";
import { useAgentBuilder } from "../context/AgentBuilderContext";
import { StrokeSpotlight } from "./StrokeSpotlight/StrokeSpotlight";
import { STROKE_NO_PULSE_ATTR } from "./StrokeSpotlight/useStrokeSpotlight";
import agentElena from "../assets/agents/elena-wide.png";
import agentSarah from "../assets/agents/sarah-wide.png";
import agentBrittany from "../assets/agents/brittany-wide.png";
import styles from "./AgentsPage.module.scss";

const PROMPT_CHIPS = [
  "Customer Support",
  "Feedback Analyzer",
  "Strategic Market Insights",
  "Thread Follow-up",
] as const;

const AGENT_CARDS = [
  {
    name: "Elena",
    role: "Response Triage & Cohort Router",
    description:
      "I'll review each new submission and route it to the right cohort.",
    boardRef: "Product Design Sprint",
    image: agentElena,
  },
  {
    name: "Sarah",
    role: "Sprint Intake Triage Lead",
    description:
      "I'll turn new tasks into sprint-ready work with clear owners and next steps.",
    boardRef: "Sprint Planning Board",
    image: agentSarah,
  },
  {
    name: "Brittany",
    role: "Leave Status Agent",
    description:
      "I'll keep leave statuses updated and notify the right people.",
    boardRef: "Team Operations",
    image: agentBrittany,
  },
] as const;

export function AgentsPage() {
  const [carouselOffset, setCarouselOffset] = useState(0);
  const visibleCards = AGENT_CARDS.slice(carouselOffset, carouselOffset + 2);
  const { openConfig } = useAgentBuilder();

  return (
    <Box className={styles.root}>
      <Flex
        align="center"
        justify="end"
        gap="small"
        className={styles.headerActions}
      >
        <Button kind="tertiary" size="small">
          Bring your agent
        </Button>
        <Button kind="secondary" size="small" onClick={() => openConfig()}>
          + Start from blank
        </Button>
      </Flex>

      <div className={styles.heroBlock}>
        <div className={styles.hero}>
          <Heading type="h1" weight="bold" className={styles.heroTitle}>
            Build your <span className={styles.gradientWord}>agent</span>
          </Heading>
          <Text
            type="text1"
            color="secondary"
            ellipsis={false}
            className={styles.heroSubtitle}
          >
            Hey Alex, add a teammate that gets work done for you
          </Text>
        </div>

        <div className={styles.composerShell}>
          <StrokeSpotlight
            palette="default"
            spread={40}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={1.5}
            glowBlur={12}
          >
            <div className={styles.composerWrap}>
              <textarea
                className={styles.composerInput}
                aria-label="Describe a new agent"
                placeholder="Analyzes customer feedback and routes it to the right team..."
              />
              <Flex
                align="center"
                justify="space-between"
                className={styles.composerFooter}
              >
                <Flex align="center" gap="xs">
                  <Button
                    kind="tertiary"
                    size="small"
                    {...{ [STROKE_NO_PULSE_ATTR]: true }}
                  >
                    + Add context
                  </Button>
                  <IconButton
                    icon={Microphone}
                    size="small"
                    kind="tertiary"
                    aria-label="Voice input"
                    {...{ [STROKE_NO_PULSE_ATTR]: true }}
                  />
                </Flex>
                <Flex align="center" gap="xs">
                  <Button
                    kind="tertiary"
                    size="small"
                    {...{ [STROKE_NO_PULSE_ATTR]: true }}
                  >
                    AI model ▾
                  </Button>
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

        <Flex className={styles.chips}>
          {PROMPT_CHIPS.map((chip) => (
            <PromptChip key={chip}>{chip}</PromptChip>
          ))}
        </Flex>
      </div>

      <div className={styles.carouselSection}>
        <Flex
          align="center"
          justify="space-between"
          className={styles.carouselHeader}
        >
          <Flex align="center" gap="xs">
            <Heading type="h3" weight="bold">
              Agents made for you
            </Heading>
            <Icon icon={AISkills} size={16} label="About suggested agents" />
          </Flex>
          <Flex align="center" gap="xs">
            <IconButton
              icon={MoveArrowLeft}
              size="small"
              kind="tertiary"
              aria-label="Previous agents"
              disabled={carouselOffset === 0}
              onClick={() => setCarouselOffset((o) => Math.max(0, o - 1))}
            />
            <IconButton
              icon={MoveArrowRight}
              size="small"
              kind="tertiary"
              aria-label="Next agents"
              disabled={carouselOffset + 2 >= AGENT_CARDS.length}
              onClick={() =>
                setCarouselOffset((o) =>
                  Math.min(AGENT_CARDS.length - 2, o + 1),
                )
              }
            />
          </Flex>
        </Flex>

        <div className={styles.agentCarousel}>
          {visibleCards.map(({ name, role, description, boardRef, image }) => (
            <article key={name} className={styles.agentCard}>
              <img
                className={styles.agentPortrait}
                src={image}
                alt=""
                aria-hidden="true"
              />
              <div className={styles.agentInfo}>
                <Text type="text3" color="secondary" ellipsis>
                  {name},
                </Text>
                <Text
                  type="text2"
                  weight="medium"
                  color="primary"
                  ellipsis={false}
                >
                  {role}
                </Text>
                <Text
                  type="text3"
                  color="secondary"
                  ellipsis={false}
                  className={styles.agentDescription}
                >
                  {description}
                </Text>
                <Flex align="center" gap="xs" className={styles.agentBoard}>
                  <Text type="text3" color="secondary">
                    Based on:
                  </Text>
                  <span className={styles.boardChip}>
                    <Icon
                      icon={Board}
                      size={12}
                      label={boardRef}
                      className={styles.boardChipIcon}
                    />
                    {boardRef}
                  </span>
                </Flex>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Box>
  );
}
