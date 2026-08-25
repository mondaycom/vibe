import { useState, useRef, useEffect } from "react";
import svgPaths from "../imports/svg-5v47xpc9uc";
import imgImage685 from "../assets/agent-builder/87d8479472e80436ded8aa7fd1ef991ffa65b1b7.png";
import { CARD_AVATAR_DATA, renderAvatarVisual } from "./agentBuilderData";
import {
  useAgentBuilder,
  type AgentConfigData,
} from "../context/AgentBuilderContext";
import styles from "./AgentBuilderOnboarding.module.scss";
import { StrokeSpotlight } from "./StrokeSpotlight/StrokeSpotlight";

const C_TEXT = "var(--primary-text-color)";
const C_SUB = "var(--secondary-text-color)";
const C_BORDER = "var(--layout-border-color)";
const C_BG = "var(--primary-background-color)";
const C_GREY = "var(--allgrey-background-color)";
const FONT_TITLE = "var(--title-font-family)";
const FONT_BODY = "var(--font-family)";

function AgentIcon({
  avatarImg,
  avatarBg,
}: {
  avatarImg?: string;
  avatarBg?: string;
}) {
  const bg = avatarBg && avatarBg !== "#ffffff" ? avatarBg : "#edf1fc";
  return (
    <div
      style={{
        position: "relative",
        borderRadius: "6px",
        flexShrink: 0,
        width: "32px",
        height: "32px",
        overflow: "hidden",
        backgroundColor: bg,
      }}
    >
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          borderRadius: "inherit",
          width: "100%",
          height: "100%",
        }}
      >
        <img
          alt=""
          src={avatarImg || imgImage685}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "bottom",
            pointerEvents: "none",
            transform: "scale(2)",
            transformOrigin: "bottom center",
          }}
        />
      </div>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          border: `1px solid ${C_BORDER}`,
          pointerEvents: "none",
          borderRadius: "6px",
        }}
      />
    </div>
  );
}

function Toggle({
  enabled,
  onToggle,
}: {
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={styles.plainButton}
      style={{ height: "24px", borderRadius: "6px", flexShrink: 0 }}
    >
      <div
        style={{
          height: "16px",
          position: "relative",
          flexShrink: 0,
          width: "28px",
        }}
      >
        <svg
          style={{
            position: "absolute",
            display: "block",
            width: "100%",
            height: "100%",
          }}
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 28 16"
        >
          <rect
            fill={enabled ? "#0073EA" : "#C3C6D4"}
            height="16"
            rx="8"
            width="28"
          />
          <path
            clipRule="evenodd"
            d={enabled ? svgPaths.p28df1d00 : svgPaths.p39933f40}
            fill="white"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </button>
  );
}

function ActiveBullet() {
  return (
    <div
      style={{
        position: "relative",
        flexShrink: 0,
        width: "20px",
        height: "20px",
      }}
    >
      <svg
        style={{
          position: "absolute",
          display: "block",
          width: "100%",
          height: "100%",
        }}
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <path d={svgPaths.p30a9e100} fill="#00C875" opacity="0.2" />
        <path d={svgPaths.p7fcde80} fill="#00C875" />
      </svg>
    </div>
  );
}

function InfoIcon() {
  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
        width: "16px",
        height: "16px",
      }}
    >
      <div
        style={{ position: "absolute", inset: "10.15% 10.14% 10.15% 10.16%" }}
      >
        <svg
          style={{
            position: "absolute",
            display: "block",
            width: "100%",
            height: "100%",
          }}
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 12.7531 12.7531"
        >
          <path d={svgPaths.p3b347b40} fill={C_SUB} />
          <path d={svgPaths.p15f10700} fill={C_SUB} />
          <path
            clipRule="evenodd"
            d={svgPaths.p2544a780}
            fill={C_SUB}
            fillRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
        width: "14px",
        height: "14px",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "35%",
          left: "25%",
          right: "25%",
          top: "35%",
        }}
      >
        <svg
          style={{
            position: "absolute",
            display: "block",
            width: "100%",
            height: "100%",
          }}
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 7 4.2"
        >
          <path d={svgPaths.p1b71e300} fill={C_SUB} />
        </svg>
      </div>
    </div>
  );
}

function EnterArrowIcon() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        flexShrink: 0,
      }}
    >
      <div style={{ transform: "scaleY(-1) rotate(180deg)", flex: "none" }}>
        <div
          style={{
            overflow: "hidden",
            position: "relative",
            width: "20px",
            height: "20px",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "13.01% 13.65% 13.02% 9.68%",
            }}
          >
            <svg
              style={{
                position: "absolute",
                display: "block",
                width: "100%",
                height: "100%",
              }}
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 15.334 14.7939"
            >
              <path d={svgPaths.p3c54bc80} fill={C_SUB} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

const bulletPoints = [
  "I'll collect customer feedback from a source you choose",
  "I'll analyze sentiment (positive / neutral / negative) and spot meaningful changes",
  "I'll group feedback into themes (bugs, feature requests, UX friction, pricing, performance, etc.)",
  "I'll extract actionable insights (what's happening + what to do next)",
  "I'll generate prioritized tasks with an urgency level so your team can respond strategically",
];

export function AgentBuilderOnboarding({ agent }: { agent: AgentConfigData }) {
  const { close, openConfig } = useAgentBuilder();

  const [promptValue, setPromptValue] = useState("");
  const [activeTab, setActiveTab] = useState<"brain" | "activity">("brain");
  const [triggers, setTriggers] = useState({ mention: true, assign: true });
  const [typedText, setTypedText] = useState("");
  const [showContent, setShowContent] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const fullGreeting = `Nice to meet you 👋`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypedText(fullGreeting.slice(0, i));
      if (i >= fullGreeting.length) {
        clearInterval(interval);
        setTimeout(() => setShowContent(true), 200);
      }
    }, 40);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cardData = CARD_AVATAR_DATA[agent.avatarIndex ?? 0];
  const isWhiteBg = agent.avatarBg === "#ffffff";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        backgroundColor: C_GREY,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        padding: "32px 32px 0",
      }}
    >
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minHeight: 0,
          width: "100%",
          backgroundColor: C_GREY,
          borderRadius: "16px 16px 0 0",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            padding: "16px 24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <AgentIcon avatarImg={agent.avatarImg} avatarBg={agent.avatarBg} />
            <p
              style={{
                fontFamily: FONT_TITLE,
                color: C_TEXT,
                fontSize: "18px",
                lineHeight: "24px",
                margin: 0,
              }}
            >
              {agent.name}, {agent.expertise.replace(/\s*Agent$/i, "")} expert
            </p>
          </div>
          <button
            onClick={close}
            className={styles.iconButton}
            style={{ width: "32px", height: "32px", borderRadius: "4px" }}
            aria-label="Close"
          >
            <div
              style={{
                overflow: "hidden",
                position: "relative",
                flexShrink: 0,
                width: "20px",
                height: "20px",
              }}
            >
              <div style={{ position: "absolute", inset: "20%" }}>
                <svg
                  style={{
                    position: "absolute",
                    display: "block",
                    width: "100%",
                    height: "100%",
                  }}
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 12.0008 12"
                >
                  <path d={svgPaths.p3bd83000} fill={C_TEXT} />
                </svg>
              </div>
            </div>
          </button>
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flex: 1,
            minHeight: 0,
            padding: "0 16px 16px",
          }}
        >
          {/* Left: chat */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
            }}
          >
            <div
              style={{
                backgroundColor: C_BG,
                borderRadius: "16px",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-1px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "890px",
                  height: "74px",
                  background:
                    "linear-gradient(to bottom, var(--primary-background-color), rgba(255,255,255,0.85), transparent)",
                  zIndex: 10,
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  padding: "80px 116px 180px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    maxWidth: "669px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: FONT_TITLE,
                      color: C_TEXT,
                      fontSize: "18px",
                      lineHeight: "24px",
                      letterSpacing: "-0.09px",
                      margin: 0,
                    }}
                  >
                    {typedText}
                  </h3>

                  <div
                    style={{
                      fontFamily: FONT_BODY,
                      color: C_TEXT,
                      fontSize: "16px",
                      lineHeight: "22px",
                      transition: "all 0.5s",
                      opacity: showContent ? 1 : 0,
                      transform: showContent
                        ? "translateY(0)"
                        : "translateY(8px)",
                    }}
                  >
                    <p style={{ marginBottom: "12px", marginTop: 0 }}>
                      I've gone ahead and set up the basics based on what I
                      understand you want me to do.
                    </p>
                    <p
                      style={{
                        fontWeight: 600,
                        marginBottom: "12px",
                        marginTop: 0,
                      }}
                    >
                      Here's how I'm going to work for you:
                    </p>
                    <ul
                      style={{
                        listStyle: "disc",
                        paddingLeft: "24px",
                        marginBottom: "12px",
                        marginTop: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                      }}
                    >
                      {bulletPoints.map((point, i) => (
                        <li key={i}>
                          <span
                            style={{ fontSize: "16px", lineHeight: "22px" }}
                          >
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p style={{ margin: 0 }}>
                      I'm almost ready — first, did I understand the job
                      correctly?
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      transition: "all 0.5s",
                      transitionDelay: "0.2s",
                      opacity: showContent ? 1 : 0,
                      transform: showContent
                        ? "translateY(0)"
                        : "translateY(8px)",
                    }}
                  >
                    {["Yes, that's right", "Make changes"].map((label) => (
                      <button key={label} className={styles.followUpButton}>
                        <div
                          style={{
                            display: "flex",
                            gap: "8px",
                            height: "100%",
                            alignItems: "center",
                            overflow: "hidden",
                            padding: "0 12px",
                            borderRadius: "inherit",
                          }}
                        >
                          <EnterArrowIcon />
                          <span
                            style={{
                              fontFamily: FONT_BODY,
                              color: C_TEXT,
                              fontSize: "16px",
                              lineHeight: "22px",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {label}
                          </span>
                        </div>
                        <div
                          aria-hidden="true"
                          style={{
                            position: "absolute",
                            border: `0.5px solid ${C_BORDER}`,
                            inset: "-0.5px",
                            pointerEvents: "none",
                            borderRadius: "8.5px",
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Prompt editor */}
              <div
                style={{
                  position: "absolute",
                  bottom: "8px",
                  left: 0,
                  right: 0,
                  backdropFilter: "blur(40px)",
                  padding: "16px 20px",
                  borderRadius: "16px 16px 0 0",
                }}
              >
                <div className={styles.composerShell}>
                  <StrokeSpotlight
                    palette="default"
                    spread={40}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1.5}
                    glowBlur={12}
                    radius={12}
                  >
                  <div className={styles.composerWrap}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0 12px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                          style={{
                            backgroundColor: C_TEXT,
                            height: "18px",
                            flexShrink: 0,
                            width: "1px",
                          }}
                        />
                        <textarea
                          ref={textareaRef}
                          value={promptValue}
                          onChange={(e) => setPromptValue(e.target.value)}
                          placeholder="Describe what your agent should do"
                          rows={1}
                          style={{
                            fontFamily: FONT_BODY,
                            fontSize: "14px",
                            lineHeight: "20px",
                            color: C_TEXT,
                            resize: "none",
                            border: "none",
                            outline: "none",
                            background: "transparent",
                            width: "100%",
                            minHeight: "20px",
                            maxHeight: "80px",
                            marginLeft: "4px",
                          }}
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0 12px",
                        height: "32px",
                        gap: "12px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: C_GREY,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "4px",
                          width: "28px",
                          height: "28px",
                        }}
                      >
                        <div
                          style={{
                            overflow: "hidden",
                            position: "relative",
                            flexShrink: 0,
                            width: "16px",
                            height: "16px",
                          }}
                        >
                          <div
                            style={{ position: "absolute", inset: "11.25%" }}
                          >
                            <svg
                              style={{
                                position: "absolute",
                                display: "block",
                                width: "100%",
                                height: "100%",
                              }}
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 12.4 12.4"
                            >
                              <path
                                clipRule="evenodd"
                                d={svgPaths.p225c1f00}
                                fill={C_TEXT}
                                fillRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div style={{ flex: 1 }} />
                      <div
                        style={{
                          backgroundColor: "#ecedf5",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          maxHeight: "24px",
                          maxWidth: "24px",
                          borderRadius: "12px",
                          width: "24px",
                          height: "24px",
                        }}
                      >
                        <div
                          style={{
                            overflow: "hidden",
                            position: "relative",
                            flexShrink: 0,
                            width: "16px",
                            height: "16px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              inset: "11.25% 16.35% 10.54% 17.06%",
                            }}
                          >
                            <svg
                              style={{
                                position: "absolute",
                                display: "block",
                                width: "100%",
                                height: "100%",
                              }}
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 10.6538 12.5137"
                            >
                              <path
                                clipRule="evenodd"
                                d={svgPaths.p25262000}
                                fill="rgba(50,51,56,0.38)"
                                fillRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </StrokeSpotlight>
                </div>
              </div>
            </div>
          </div>

          {/* Right: canvas */}
          <div
            style={{
              width: "437px",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              paddingBottom: "16px",
            }}
          >
            <div
              style={{
                backgroundColor: C_BG,
                borderRadius: "16px",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: "12px 12px 20px",
                gap: "32px",
                overflowY: "auto",
              }}
            >
              {/* Agent card */}
              <div
                style={{
                  backgroundColor: "#fafafc",
                  position: "relative",
                  borderRadius: "24px",
                  flexShrink: 0,
                  width: "100%",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    border: `1px solid ${C_BORDER}`,
                    inset: 0,
                    pointerEvents: "none",
                    borderRadius: "24px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    right: "24px",
                    zIndex: 10,
                  }}
                >
                  <button
                    className={styles.editButton}
                    onClick={() =>
                      openConfig({
                        avatarIndex: agent.avatarIndex,
                        name: agent.name,
                        expertise: agent.expertise,
                        avatarBg: agent.avatarBg,
                      })
                    }
                  >
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        border: "1px solid #c3c6d4",
                        inset: 0,
                        pointerEvents: "none",
                        borderRadius: "6px",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: FONT_BODY,
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: C_TEXT,
                        whiteSpace: "nowrap",
                      }}
                    >
                      Edit agent
                    </span>
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "24px",
                    alignItems: "flex-start",
                    padding: "16px 24px 16px 16px",
                  }}
                >
                  <div
                    style={{
                      height: "174.622px",
                      overflow: "hidden",
                      position: "relative",
                      borderRadius: "11.384px",
                      flexShrink: 0,
                      width: "129px",
                      backgroundColor: isWhiteBg ? C_GREY : agent.avatarBg,
                    }}
                  >
                    {cardData ? (
                      renderAvatarVisual(cardData)
                    ) : (
                      <img
                        alt=""
                        src={agent.avatarImg}
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          objectPosition: "bottom",
                          pointerEvents: "none",
                        }}
                      />
                    )}
                    {isWhiteBg && (
                      <div
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          border: `1px solid ${C_BORDER}`,
                          inset: 0,
                          pointerEvents: "none",
                          borderRadius: "11.384px",
                        }}
                      />
                    )}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      minHeight: 0,
                      minWidth: 0,
                      alignSelf: "stretch",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "18px 0",
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "3px",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: FONT_BODY,
                            fontWeight: 600,
                            color: C_TEXT,
                            fontSize: "16px",
                            lineHeight: 1.55,
                            margin: 0,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Hi I'm {agent.name}
                        </p>
                        <p
                          style={{
                            fontFamily: FONT_BODY,
                            color: C_SUB,
                            fontSize: "14px",
                            lineHeight: 1.55,
                            margin: 0,
                          }}
                        >
                          {agent.expertise}
                        </p>
                      </div>
                      <div
                        style={{
                          height: "32px",
                          position: "relative",
                          borderRadius: "62.5px",
                          flexShrink: 0,
                          width: "fit-content",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            height: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                            paddingRight: "5px",
                            borderRadius: "inherit",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              gap: "4px",
                              alignItems: "center",
                              padding: "6px 10px 6px 6px",
                              borderRadius: "50px",
                            }}
                          >
                            <ActiveBullet />
                            <span
                              style={{
                                fontFamily: FONT_BODY,
                                color: "#00c875",
                                fontSize: "14px",
                                lineHeight: 1,
                                whiteSpace: "nowrap",
                              }}
                            >
                              Active
                            </span>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          style={{
                            position: "absolute",
                            border: `1px solid ${C_BORDER}`,
                            inset: 0,
                            pointerEvents: "none",
                            borderRadius: "62.5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div style={{ flexShrink: 0, width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 12px",
                  }}
                >
                  <div style={{ flex: 1, position: "relative" }}>
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        borderBottom: `1px solid ${C_BORDER}`,
                        inset: 0,
                        pointerEvents: "none",
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        gap: "16px",
                        alignItems: "center",
                      }}
                    >
                      {(["brain", "activity"] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={styles.tabButton}
                          style={{
                            borderBottom:
                              activeTab === tab
                                ? `2px solid ${C_TEXT}`
                                : undefined,
                          }}
                        >
                          <span
                            style={{
                              fontFamily: FONT_BODY,
                              color: C_TEXT,
                              fontSize: "16px",
                              lineHeight: 1.35,
                              letterSpacing: "-0.32px",
                              whiteSpace: "nowrap",
                              fontWeight: activeTab === tab ? 600 : 400,
                              textTransform: "capitalize",
                            }}
                          >
                            {tab}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Triggers */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  flexShrink: 0,
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    width: "100%",
                  }}
                >
                  <button
                    className={styles.plainButton}
                    style={{
                      borderRadius: "4px",
                      width: "16px",
                      height: "16px",
                    }}
                  >
                    <ChevronDown />
                  </button>
                  <div
                    style={{
                      display: "flex",
                      gap: "4px",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: FONT_BODY,
                        fontWeight: 600,
                        color: C_TEXT,
                        fontSize: "14px",
                        lineHeight: "20px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Triggers
                    </span>
                    <InfoIcon />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    padding: "0 16px",
                  }}
                >
                  <div
                    style={{
                      height: "32px",
                      borderRadius: "4px",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "4px 8px",
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <div
                          style={{
                            overflow: "hidden",
                            position: "relative",
                            flexShrink: 0,
                            width: "20px",
                            height: "20px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              inset: "11.25% 11.25% 11.06% 11.25%",
                            }}
                          >
                            <svg
                              style={{
                                position: "absolute",
                                display: "block",
                                width: "100%",
                                height: "100%",
                              }}
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 15.4998 15.5383"
                            >
                              <path
                                clipRule="evenodd"
                                d={svgPaths.p1c4cc900}
                                fill={C_TEXT}
                                fillRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <span
                          style={{
                            fontFamily: FONT_BODY,
                            color: C_TEXT,
                            fontSize: "14px",
                            lineHeight: "20px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Mention @agent
                        </span>
                      </div>
                      <Toggle
                        enabled={triggers.mention}
                        onToggle={() =>
                          setTriggers((t) => ({ ...t, mention: !t.mention }))
                        }
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      height: "32px",
                      borderRadius: "4px",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "4px 8px",
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <div
                          style={{
                            overflow: "hidden",
                            position: "relative",
                            flexShrink: 0,
                            width: "20px",
                            height: "20px",
                          }}
                        >
                          <div
                            style={{ position: "absolute", inset: "10.25%" }}
                          >
                            <svg
                              style={{
                                position: "absolute",
                                display: "block",
                                width: "100%",
                                height: "100%",
                              }}
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 15.9 15.9"
                            >
                              <path
                                clipRule="evenodd"
                                d={svgPaths.p1a7d0570}
                                fill={C_TEXT}
                                fillRule="evenodd"
                              />
                              <path
                                clipRule="evenodd"
                                d={svgPaths.p2d4adc00}
                                fill={C_TEXT}
                                fillRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <span
                          style={{
                            fontFamily: FONT_BODY,
                            color: C_TEXT,
                            fontSize: "14px",
                            lineHeight: "20px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Assign agent
                        </span>
                      </div>
                      <Toggle
                        enabled={triggers.assign}
                        onToggle={() =>
                          setTriggers((t) => ({ ...t, assign: !t.assign }))
                        }
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      height: "32px",
                      borderRadius: "4px",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "4px 8px",
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <div
                          style={{
                            overflow: "hidden",
                            position: "relative",
                            flexShrink: 0,
                            width: "18px",
                            height: "18px",
                          }}
                        >
                          <div
                            style={{ position: "absolute", inset: "26.25%" }}
                          >
                            <svg
                              style={{
                                position: "absolute",
                                display: "block",
                                width: "100%",
                                height: "100%",
                              }}
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 8.55 8.55"
                            >
                              <path
                                clipRule="evenodd"
                                d={svgPaths.p2474a900}
                                fill={C_SUB}
                                fillRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <span
                          style={{
                            fontFamily: FONT_BODY,
                            color: C_SUB,
                            fontSize: "14px",
                            lineHeight: "20px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Add trigger
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  flexShrink: 0,
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    width: "100%",
                  }}
                >
                  <button
                    className={styles.plainButton}
                    style={{
                      borderRadius: "4px",
                      width: "16px",
                      height: "16px",
                    }}
                  >
                    <ChevronDown />
                  </button>
                  <div
                    style={{
                      display: "flex",
                      gap: "4px",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: FONT_BODY,
                        fontWeight: 600,
                        color: C_TEXT,
                        fontSize: "14px",
                        lineHeight: "20px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Instractions
                    </span>
                    <InfoIcon />
                  </div>
                  <button
                    className={styles.iconButton}
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "4px",
                    }}
                    aria-label="Expand instructions"
                  >
                    <div
                      style={{
                        overflow: "hidden",
                        position: "relative",
                        flexShrink: 0,
                        width: "16px",
                        height: "16px",
                      }}
                    >
                      <div style={{ position: "absolute", inset: "12.5% 15%" }}>
                        <svg
                          style={{
                            position: "absolute",
                            display: "block",
                            width: "100%",
                            height: "100%",
                          }}
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 11.2 12"
                        >
                          <path d={svgPaths.p35083680} fill={C_TEXT} />
                          <path d={svgPaths.p21175a00} fill={C_TEXT} />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>

                <div
                  style={{
                    backgroundColor: C_BG,
                    position: "relative",
                    borderRadius: "8px",
                    width: "100%",
                  }}
                >
                  <div style={{ overflow: "hidden", borderRadius: "inherit" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                        padding: "16px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: FONT_BODY,
                          color: C_TEXT,
                          fontSize: "14px",
                          lineHeight: "20px",
                          maxHeight: "262px",
                          overflow: "hidden",
                        }}
                      >
                        <p style={{ fontWeight: 700, margin: 0 }}>
                          📋 Overview
                        </p>
                        <p style={{ margin: 0 }}>
                          Monitor direct and indirect competitors weekly to
                          provide actionable updates and insights for strategic
                          decision-making.
                        </p>
                        <p style={{ margin: 0 }}>&nbsp;</p>
                        <p style={{ fontWeight: 700, margin: 0 }}>
                          📊 Competitive research tasks
                        </p>
                        <p style={{ margin: 0 }}>
                          Identify competitors - Research and list relevant
                          direct and indirect competitors in the market.
                        </p>
                        <p style={{ margin: 0 }}>
                          Track updates - Monitor competitor news, product
                          launches, and major changes regularly.
                        </p>
                        <p style={{ margin: 0 }}>
                          Analyze strategies - Assess competitor positioning,
                          marketing tactics, and business moves.
                        </p>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "135px",
                          background:
                            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.75), var(--primary-background-color))",
                          pointerEvents: "none",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      border: `1px solid ${C_BORDER}`,
                      inset: 0,
                      pointerEvents: "none",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
