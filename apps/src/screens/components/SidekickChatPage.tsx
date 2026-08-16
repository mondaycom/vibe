import { useEffect, useRef, useState } from "react";
import { Button, IconButton } from "@vibe/core";
import {
  Info,
  ThumbsUp,
  ThumbsDown,
  Duplicate,
  Menu,
  Check,
  DropdownChevronDown,
  DropdownChevronRight,
} from "@mondaydotcomorg/icons";
import { AiSidekickIcon } from "./ai-icons";
import { SidekickPromptEditor } from "./SidekickPromptEditor";
import { ResponseStream } from "./ResponseStream";
import { generateSidekickResponse } from "../data/sidekickResponses";
import { CHAT_SCENARIOS } from "../data/sidekickChatScenarios";
import glowImg from "../assets/sidekick/glow.png";
import userAvatar from "figma:asset/6f1e4ef08a4e8899bba87998c3410a8132536714.png";
import styles from "./SidekickChatPage.module.scss";

type MessageType =
  | { id: string; role: "user"; text: string }
  | {
      id: string;
      role: "sidekick";
      content: React.ReactNode;
      card?: React.ReactNode;
      followUp?: React.ReactNode;
      sourceCount?: number;
      showThoughtProcess?: boolean;
      thoughtProcessLabel?: string;
    }
  | { id: string; role: "approval"; text: string }
  | { id: string; role: "thinking" };

function Breadcrumb({ chatTitle }: { chatTitle: string }) {
  return (
    <div className={styles.breadcrumb}>
      <div className={styles.breadcrumbInner}>
        <div className={styles.breadcrumbCrumb}>
          <AiSidekickIcon size={20} />
          <span className={styles.breadcrumbTitle}>AI Sidekick</span>
          <span className={styles.breadcrumbSub}>/ {chatTitle}</span>
        </div>
        <button
          type="button"
          className={styles.breadcrumbChevron}
          aria-label="Chat options"
        >
          <DropdownChevronDown size="16" />
        </button>
      </div>
    </div>
  );
}

function UserMessage({
  text,
  isNew,
  msgId,
}: {
  text?: string;
  isNew?: boolean;
  msgId?: string;
}) {
  return (
    <div
      data-msg-id={msgId}
      className={`${styles.userMessage} ${isNew ? styles.slideUp : ""}`}
    >
      <div className={styles.userMessageInner}>
        <div className={styles.userAvatarWrap}>
          <img
            alt="User avatar"
            className={styles.userAvatar}
            src={userAvatar}
          />
        </div>
        <div className={styles.userBubble}>
          <p className={styles.userBubbleText}>{text}</p>
        </div>
      </div>
    </div>
  );
}

function ThoughtProcessHeader({ label }: { label?: string }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setExpanded((e) => !e)}
      className={styles.thoughtHeader}
    >
      <span className={styles.thoughtLabel}>{label || "Thought process"}</span>
      <span
        className={`${styles.thoughtChevron} ${
          expanded ? styles.thoughtChevronExpanded : ""
        }`}
      >
        <DropdownChevronRight size="16" />
      </span>
    </button>
  );
}

function FeedbackFooter({ sourceCount }: { sourceCount?: number }) {
  return (
    <div className={styles.feedbackFooter}>
      <IconButton
        icon={ThumbsUp}
        size="xs"
        kind="tertiary"
        aria-label="Helpful"
      />
      <IconButton
        icon={ThumbsDown}
        size="xs"
        kind="tertiary"
        aria-label="Not helpful"
      />
      <IconButton
        icon={Duplicate}
        size="xs"
        kind="tertiary"
        aria-label="Copy"
      />
      <IconButton icon={Menu} size="xs" kind="tertiary" aria-label="More" />

      <div className={styles.feedbackSpacer} />

      {sourceCount != null && sourceCount > 0 && (
        <Button kind="tertiary" size="xs" leftIcon={Info}>
          {sourceCount} {sourceCount === 1 ? "source" : "sources"}
        </Button>
      )}
    </div>
  );
}

function SidekickResponse({
  content,
  card,
  followUp,
  isNew,
  sourceCount,
  showThoughtProcess,
  thoughtProcessLabel,
  isLast,
}: {
  content: React.ReactNode;
  card?: React.ReactNode;
  followUp?: React.ReactNode;
  isNew?: boolean;
  sourceCount?: number;
  showThoughtProcess?: boolean;
  thoughtProcessLabel?: string;
  isLast?: boolean;
}) {
  const [introComplete, setIntroComplete] = useState(!isNew);

  return (
    <div className={`${styles.response} ${isNew ? styles.slideUpSlow : ""}`}>
      <div className={styles.responseInner}>
        {showThoughtProcess && (
          <ThoughtProcessHeader label={thoughtProcessLabel} />
        )}

        <div className={styles.responseStack}>
          <div className={styles.responseText}>
            {isNew && typeof content === "string" ? (
              <ResponseStream
                textStream={content}
                mode="fade"
                speed={95}
                fadeDuration={200}
                segmentDelay={6}
                as="p"
                onComplete={() => setIntroComplete(true)}
              />
            ) : (
              <div>{content}</div>
            )}
          </div>

          {card && <div className={styles.responseCard}>{card}</div>}

          {followUp && introComplete && (
            <div className={styles.responseText}>
              {isNew && typeof followUp === "string" ? (
                <ResponseStream
                  textStream={followUp}
                  mode="fade"
                  speed={95}
                  fadeDuration={200}
                  segmentDelay={6}
                  as="p"
                />
              ) : (
                <div>{followUp}</div>
              )}
            </div>
          )}
        </div>

        <div
          className={
            isLast ? styles.feedbackFooterWrap : styles.feedbackFooterHidden
          }
        >
          <FeedbackFooter sourceCount={sourceCount} />
        </div>
      </div>
    </div>
  );
}

function ApprovalLabel({ text }: { text: string }) {
  return (
    <div className={styles.approval}>
      <div className={styles.approvalChip}>
        <Check size="16" color="var(--positive-color)" />
        <span className={styles.approvalText}>{text}</span>
      </div>
    </div>
  );
}

function ThinkingIndicator() {
  return (
    <div className={styles.thinking}>
      <div className={styles.thinkingInner}>
        <AiSidekickIcon size={20} />
        <span className={styles.thinkingLabel}>Thinking</span>
        <span className={styles.thinkingDots}>
          <span
            className={styles.thinkingDot}
            style={{ animationDelay: "0ms" }}
          />
          <span
            className={styles.thinkingDot}
            style={{ animationDelay: "150ms" }}
          />
          <span
            className={styles.thinkingDot}
            style={{ animationDelay: "300ms" }}
          />
        </span>
      </div>
    </div>
  );
}

function scenarioToMessages(chatId: string): MessageType[] {
  const scenario = CHAT_SCENARIOS[chatId];
  if (!scenario) return [];
  return scenario.messages.map((msg, i) => {
    if (msg.role === "user") {
      return { id: `${chatId}-${i}`, role: "user" as const, text: msg.text };
    }
    if (msg.role === "approval") {
      return {
        id: `${chatId}-${i}`,
        role: "approval" as const,
        text: msg.text,
      };
    }
    return {
      id: `${chatId}-${i}`,
      role: "sidekick" as const,
      content: msg.content,
      card: msg.card,
      sourceCount: msg.sourceCount,
      showThoughtProcess: msg.showThoughtProcess,
      thoughtProcessLabel: msg.thoughtProcessLabel,
    };
  });
}

interface SidekickChatPageProps {
  chatId: string;
  chatTitle: string;
}

export function SidekickChatPage({ chatId, chatTitle }: SidekickChatPageProps) {
  const presetMessages = scenarioToMessages(chatId);
  const [extraMessages, setExtraMessages] = useState<MessageType[]>([]);
  const [newMessageIds, setNewMessageIds] = useState<Set<string>>(new Set());
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollToMsgId, setScrollToMsgId] = useState<string | null>(null);
  const [bottomSpacerHeight, setBottomSpacerHeight] = useState(0);

  const allMessages = [...presetMessages, ...extraMessages];

  useEffect(() => {
    if (!scrollToMsgId) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const targetEl = container.querySelector<HTMLElement>(
          `[data-msg-id="${scrollToMsgId}"]`,
        );
        if (!targetEl) return;

        const containerHeight = container.clientHeight;
        const targetOffsetTop = targetEl.offsetTop;
        const scrollTarget = Math.max(0, targetOffsetTop - 28);
        const contentBelowTarget =
          container.scrollHeight - targetOffsetTop - bottomSpacerHeight;
        const neededSpacer = Math.max(0, containerHeight - contentBelowTarget);

        if (neededSpacer !== bottomSpacerHeight) {
          setBottomSpacerHeight(neededSpacer);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              container.scrollTo({ top: scrollTarget, behavior: "smooth" });
              setScrollToMsgId(null);
            });
          });
        } else {
          container.scrollTo({ top: scrollTarget, behavior: "smooth" });
          setScrollToMsgId(null);
        }
      });
    });
  }, [scrollToMsgId, allMessages.length, bottomSpacerHeight]);

  const handleSend = (text: string) => {
    const userId = Date.now().toString();
    const userMsg: MessageType = { id: userId, role: "user", text };

    const response = generateSidekickResponse(text);
    const sidekickId = `sidekick-${Date.now() + 1}`;
    const sidekickMsg: MessageType = {
      id: sidekickId,
      role: "sidekick",
      content: response.intro,
      followUp: response.followUp,
    };

    setNewMessageIds((prev) => new Set(prev).add(userId).add(sidekickId));
    setExtraMessages((prev) => [...prev, userMsg, sidekickMsg]);
    setScrollToMsgId(userId);

    setTimeout(() => {
      setNewMessageIds(new Set());
    }, 5000);
  };

  return (
    <div className={styles.root}>
      <img alt="" src={glowImg} aria-hidden="true" className={styles.glow} />
      <div className={styles.stage}>
        <div className={styles.stageInner}>
          <div className={styles.header}>
            <div className={styles.headerBar}>
              <Breadcrumb chatTitle={chatTitle} />
            </div>
            <div aria-hidden="true" className={styles.headerFade} />
          </div>

          <div className={styles.body}>
            <div className={styles.scrollOuter}>
              <div ref={scrollContainerRef} className={styles.scrollContainer}>
                {allMessages.map((msg, idx) => {
                  if (msg.role === "user") {
                    return (
                      <UserMessage
                        key={msg.id}
                        text={msg.text}
                        isNew={newMessageIds.has(msg.id)}
                        msgId={msg.id}
                      />
                    );
                  }
                  if (msg.role === "approval") {
                    return <ApprovalLabel key={msg.id} text={msg.text} />;
                  }
                  if (msg.role === "thinking") {
                    return <ThinkingIndicator key={msg.id} />;
                  }
                  if (msg.role === "sidekick") {
                    const isLastSidekick = !allMessages
                      .slice(idx + 1)
                      .some((m) => m.role === "sidekick");
                    return (
                      <SidekickResponse
                        key={msg.id}
                        content={msg.content}
                        card={msg.card}
                        followUp={msg.followUp}
                        isNew={newMessageIds.has(msg.id)}
                        sourceCount={msg.sourceCount}
                        showThoughtProcess={msg.showThoughtProcess}
                        thoughtProcessLabel={msg.thoughtProcessLabel}
                        isLast={isLastSidekick}
                      />
                    );
                  }
                  return null;
                })}
                <div
                  className={styles.bottomSpacer}
                  style={{
                    minHeight:
                      bottomSpacerHeight > 0
                        ? `${bottomSpacerHeight}px`
                        : "1px",
                  }}
                />
              </div>
            </div>

            <div className={styles.composerWrap}>
              <SidekickPromptEditor onSend={handleSend} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
