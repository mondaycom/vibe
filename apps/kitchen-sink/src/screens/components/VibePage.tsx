import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Toggle,
  Tooltip,
} from "@vibe/core";
import {
  Add,
  DropdownChevronDown,
  DropdownChevronRight,
  MoveArrowUp,
  RegenerateAI,
} from "@mondaydotcomorg/icons";
import { ChipsNav } from "./ChipsNav";
import {
  APP_TEMPLATES,
  INSPIRATIONS,
  LIVE_SUGGESTIONS,
  buildPaletteBackground,
} from "../data/vibeHome";
import { PROMPT_CHIPS } from "../data/promptChips";
import mondayVibeLogo from "../assets/vibe-logo-colored.png";
import { StrokeSpotlight } from "./StrokeSpotlight/StrokeSpotlight";
import { STROKE_NO_PULSE_ATTR } from "./StrokeSpotlight/useStrokeSpotlight";
import styles from "./VibePage.module.scss";

const MAX_NAMED_CHIPS = 2;

function PaletteIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.25781 9.30566C6.78707 9.35951 7.20097 9.80619 7.20117 10.3496C7.20117 10.9293 6.73007 11.4001 6.15039 11.4004C5.60683 11.4002 5.16009 10.9865 5.10645 10.457L5.10059 10.3496L5.10645 10.2422C5.16045 9.7131 5.60709 9.3 6.15039 9.2998L6.25781 9.30566Z"
        fill="currentColor"
      />
      <path
        d="M13.957 7.90527C14.4864 7.95888 14.9 8.4058 14.9004 8.94922C14.9004 9.52912 14.4295 10 13.8496 10C13.306 9.9998 12.8593 9.58613 12.8057 9.05664L12.7998 8.94922L12.8057 8.8418C12.8598 8.31286 13.3064 7.89961 13.8496 7.89941L13.957 7.90527Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.65723 5.80566C8.18648 5.85951 8.60039 6.3062 8.60059 6.84961C8.60055 7.42932 8.12946 7.90013 7.5498 7.90039C7.00626 7.90019 6.55953 7.48646 6.50586 6.95703L6.5 6.84961L6.50586 6.74219C6.55984 6.21307 7.00649 5.8 7.5498 5.7998L7.65723 5.80566Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1572 5.10547C11.6864 5.1593 12.1003 5.60608 12.1006 6.14941C12.1006 6.72915 11.6295 7.19993 11.0498 7.2002C10.5062 7.2 10.0595 6.78632 10.0059 6.25684L10 6.14941L10.0059 6.04199C10.0599 5.51299 10.5066 5.09981 11.0498 5.09961L11.1572 5.10547Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2.25C12.0314 2.25 13.9932 2.9759 15.4512 4.28809C16.9117 5.60257 17.7499 7.40309 17.75 9.2998C17.75 10.427 17.3019 11.5086 16.5049 12.3057C15.7079 13.1024 14.627 13.5498 13.5 13.5498H11.9248C11.8367 13.5498 11.7498 13.5748 11.6748 13.6211C11.6 13.6674 11.5394 13.7338 11.5 13.8125C11.4606 13.8913 11.4443 13.9796 11.4521 14.0674C11.4601 14.1551 11.4922 14.2391 11.5449 14.3096L11.7549 14.5898C11.9749 14.8832 12.1087 15.2324 12.1416 15.5977C12.1745 15.9629 12.1054 16.3302 11.9414 16.6582C11.7774 16.9863 11.5249 17.2622 11.2129 17.4551C10.901 17.6478 10.5415 17.75 10.1748 17.75H10C7.94457 17.75 5.97294 16.9339 4.51953 15.4805C3.06614 14.0271 2.25 12.0554 2.25 10C2.25002 7.94459 3.06614 5.97292 4.51953 4.51953C5.97294 3.06614 7.94459 2.25 10 2.25ZM10 3.75C8.34241 3.75 6.75315 4.40897 5.58105 5.58105C4.40897 6.75314 3.75002 8.34242 3.75 10C3.75 11.6576 4.40897 13.2468 5.58105 14.4189C6.75316 15.591 8.3424 16.25 10 16.25H10.1748C10.263 16.25 10.3498 16.2251 10.4248 16.1787C10.4997 16.1323 10.5602 16.0661 10.5996 15.9873C10.639 15.9085 10.6563 15.8202 10.6484 15.7324C10.6405 15.6446 10.6076 15.5608 10.5547 15.4902L10.3447 15.21C10.1247 14.9166 9.99094 14.5674 9.95801 14.2021C9.92513 13.8369 9.99421 13.4696 10.1582 13.1416C10.3222 12.8136 10.5747 12.5375 10.8867 12.3447C11.1986 12.152 11.5582 12.0498 11.9248 12.0498H13.5C14.2293 12.0498 14.9286 11.7599 15.4443 11.2441C15.96 10.7284 16.25 10.0291 16.25 9.2998C16.2499 7.85497 15.6131 6.45069 14.4482 5.40234C13.2807 4.35163 11.6816 3.75 10 3.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function VibePage() {
  const [isPlanMode, setIsPlanMode] = React.useState(false);

  return (
    <Box className={styles.root}>
      <div className={styles.heroBlock}>
        <div className={styles.hero}>
          <Heading type="h1" weight="normal" className={styles.heroTitle}>
            Hey Naama
          </Heading>
        </div>

        <div className={styles.composerShell}>
          <StrokeSpotlight
            palette="vibe"
            spread={40}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={1.5}
            glowBlur={12}
          >
            <div className={styles.composerWrap}>
              <textarea
                className={styles.composerInput}
                aria-label="Describe a Vibe app"
                placeholder="Describe your new application"
              />
              <Flex
                align="center"
                justify="space-between"
                className={styles.composerFooter}
              >
                <Flex align="center" className={styles.promptActionsLeft}>
                  <Tooltip content="Attach, discuss, theme, and connect boards">
                    <span
                      className={styles.compactActionsAnchor}
                      {...{ [STROKE_NO_PULSE_ATTR]: true }}
                    >
                      <IconButton
                        className={styles.compactActionsButton}
                        icon={Add}
                        size="small"
                        kind="tertiary"
                        aria-label="More prompt actions"
                      />
                    </span>
                  </Tooltip>
                  <Button
                    className={styles.modelButton}
                    kind="tertiary"
                    size="small"
                    rightIcon={DropdownChevronDown}
                    {...{ [STROKE_NO_PULSE_ATTR]: true }}
                  >
                    Model
                  </Button>
                </Flex>
                <Flex align="center" className={styles.promptActionsRight}>
                  <div
                    className={styles.planToggleWrapper}
                    data-testid="plan-mode-toggle"
                    {...{ [STROKE_NO_PULSE_ATTR]: true }}
                  >
                    <Toggle
                      id="vibe-plan-mode-toggle"
                      aria-label="Plan"
                      isSelected={isPlanMode}
                      onChange={(value) => setIsPlanMode(value)}
                      size="small"
                      offOverrideText="Plan"
                      onOverrideText=""
                      className={styles.planToggle}
                      toggleSelectedClassName={styles.planToggleSelected}
                    />
                  </div>
                  <Button
                    className={styles.submitButton}
                    kind="primary"
                    color="inverted"
                    size="small"
                    aria-label="Submit"
                  >
                    <MoveArrowUp size={20} />
                  </Button>
                </Flex>
              </Flex>
            </div>
          </StrokeSpotlight>
        </div>

        <div className={styles.promptChipsRow}>
          <ChipsNav>
            {PROMPT_CHIPS.map((chip) => {
              const ChipIcon = chip.icon;
              return (
                <button
                  key={chip.id}
                  type="button"
                  data-chip
                  className={styles.promptChip}
                  aria-label={chip.label}
                >
                  <ChipIcon
                    className={styles.promptChipIcon}
                    aria-hidden="true"
                  />
                  <span>{chip.label}</span>
                </button>
              );
            })}
          </ChipsNav>
        </div>
      </div>

      <section
        className={styles.liveSection}
        aria-label="Live suggestions, made for you"
      >
        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderText}>
            <span className={styles.liveTitle}>
              Live suggestions, made for you
            </span>
            <span className={styles.liveSubtitle}>
              Prompts tailored to your team, boards, and current projects.
            </span>
          </div>
          <Tooltip content="Available soon">
            <span>
              <Button
                kind="tertiary"
                size="small"
                leftIcon={RegenerateAI}
                disabled
              >
                Regenerate
              </Button>
            </span>
          </Tooltip>
        </div>

        <div className={styles.liveCards}>
          {LIVE_SUGGESTIONS.map((suggestion) => {
            const Glyph = suggestion.glyph;
            const namedChips = suggestion.basedOn.slice(0, MAX_NAMED_CHIPS);
            return (
              <button
                key={suggestion.name}
                type="button"
                className={styles.liveCard}
              >
                <div className={styles.liveCardTop}>
                  <div
                    className={styles.liveGlyph}
                    style={{
                      background: buildPaletteBackground(
                        suggestion.paletteIndex,
                      ),
                    }}
                    aria-hidden="true"
                  >
                    <Glyph className={styles.liveGlyphIcon} />
                  </div>
                  <div className={styles.liveInfo}>
                    <span className={styles.liveCardTitle}>
                      {suggestion.name}
                    </span>
                    <span className={styles.liveCardDescription}>
                      {suggestion.description}
                    </span>
                  </div>
                </div>
                <div className={styles.liveCardBottom}>
                  <span className={styles.basedOnConnector}>Based on</span>
                  <div className={styles.chipsRow}>
                    {namedChips.map((board) => {
                      const ChipIcon = board.icon;
                      return (
                        <span key={board.label} className={styles.chip}>
                          <ChipIcon
                            className={styles.chipIcon}
                            aria-hidden="true"
                          />
                          <span className={styles.chipLabel}>
                            {board.label}
                          </span>
                        </span>
                      );
                    })}
                    {suggestion.overflowCount ? (
                      <span className={styles.overflowChip}>
                        +{suggestion.overflowCount}
                      </span>
                    ) : null}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className={styles.templateSection} aria-label="App templates">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderText}>
            <span className={styles.liveTitle}>App templates</span>
            <span
              className={`${styles.liveSubtitle} ${styles.sectionSubtitle}`}
            >
              Quick start with a pre-built app template
            </span>
          </div>
          <Button
            kind="tertiary"
            size="small"
            color="primary"
            rightIcon={DropdownChevronRight}
          >
            All templates
          </Button>
        </div>

        <div className={styles.templateCards}>
          {APP_TEMPLATES.map((template) => (
            <button
              key={template.id}
              type="button"
              className={styles.templateCard}
            >
              <div className={styles.templateThumbnail}>
                <div className={styles.templateThumbnailFrame}>
                  <img
                    src={template.thumbnail}
                    alt=""
                    aria-hidden="true"
                    className={styles.templateThumbnailImage}
                    draggable={false}
                  />
                </div>
                <span className={styles.templateBadge} aria-hidden="true">
                  <img
                    src={mondayVibeLogo}
                    alt=""
                    className={styles.templateBadgeLogo}
                  />
                </span>
                <span className={styles.viewTemplateButton}>Use template</span>
              </div>
              <div className={styles.templateInfo}>
                <span className={styles.templateTitle}>{template.title}</span>
                <span className={styles.templateDescription}>
                  {template.description}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className={styles.inspiredSection} aria-label="Get inspired">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderText}>
            <span className={styles.liveTitle}>Get inspired</span>
            <span
              className={`${styles.liveSubtitle} ${styles.sectionSubtitle}`}
            >
              Find a theme you love, then make it yours.
            </span>
          </div>
          <Tooltip content="Available soon">
            <span>
              <Button
                kind="tertiary"
                size="small"
                color="primary"
                rightIcon={DropdownChevronRight}
                disabled
              >
                All inspirations
              </Button>
            </span>
          </Tooltip>
        </div>

        <div className={styles.inspiredGrid}>
          {INSPIRATIONS.map((inspiration) => (
            <button
              key={inspiration.slug}
              type="button"
              className={styles.inspiredCard}
              aria-label={`${inspiration.label}, ${inspiration.theme} style`}
            >
              <div className={styles.inspiredImage}>
                <img
                  src={inspiration.thumbnail}
                  alt=""
                  aria-hidden="true"
                  className={styles.inspiredThumbnail}
                  draggable={false}
                />
                <span className={styles.styleBadge} aria-hidden="true">
                  <PaletteIcon />
                </span>
                <span
                  className={styles.useInspirationButton}
                  aria-hidden="true"
                >
                  Use inspiration
                </span>
              </div>
              <div className={styles.inspiredLabelStack}>
                <span className={styles.inspiredLabel}>
                  {inspiration.label}
                </span>
                <span className={styles.inspiredDescription}>
                  {inspiration.theme}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </Box>
  );
}
