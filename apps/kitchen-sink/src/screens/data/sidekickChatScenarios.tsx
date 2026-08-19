import { Button, IconButton } from "@vibe/core";
import { Robot, Open, Check } from "@mondaydotcomorg/icons";
import ownerAvatar from "figma:asset/6f1e4ef08a4e8899bba87998c3410a8132536714.png";

// Token-driven font stacks so theme/font-menu changes apply to chat cards too.
const BODY_FONT = "var(--font-family)";
const TITLE_FONT = "var(--title-font-family)";

export type PresetMessage =
  | { role: "user"; text: string }
  | {
      role: "sidekick";
      content: React.ReactNode;
      card?: React.ReactNode;
      sourceCount?: number;
      showThoughtProcess?: boolean;
      thoughtProcessLabel?: string;
    }
  | { role: "approval"; text: string };

export interface ChatScenario {
  title: string;
  messages: PresetMessage[];
}

function S({ n }: { n: number }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "18px",
        height: "18px",
        marginLeft: "2px",
        border: "1px solid var(--layout-border-color)",
        borderRadius: "999px",
        color: "var(--secondary-text-color)",
        fontSize: "11px",
        fontWeight: 500,
        lineHeight: 1,
        verticalAlign: "text-bottom",
      }}
    >
      {n}
    </span>
  );
}

function SSOBlockerCard() {
  return (
    <div style={{ padding: "4px 0", width: "100%" }}>
      <div
        style={{
          border: "1px solid var(--layout-border-color)",
          borderRadius: "8px",
          overflow: "hidden",
          backgroundColor: "var(--primary-background-color)",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            paddingRight: "16px",
            height: "52px",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: "1 1 0",
              alignItems: "center",
              gap: "16px",
              paddingRight: "12px",
              minWidth: 0,
            }}
          >
            <div
              style={{
                width: "6px",
                height: "52px",
                backgroundColor: "var(--color-royal)",
                flexShrink: 0,
              }}
            />
            <p
              style={{
                fontFamily: BODY_FONT,
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "22px",
                color: "var(--primary-text-color)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                flex: "1 1 0",
                minWidth: 0,
                margin: 0,
              }}
            >
              Vendor SSO setup incomplete
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              height: "28px",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "64px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                alt=""
                src={ownerAvatar}
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              style={{
                width: "100px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  width: "100px",
                  height: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "var(--color-stuck-red)",
                  color: "var(--fixed-light-color)",
                  fontFamily: BODY_FONT,
                  fontSize: "14px",
                  fontWeight: 400,
                  borderRadius: "4px",
                  whiteSpace: "nowrap",
                }}
              >
                Stuck
              </span>
            </div>
            <div
              style={{
                width: "100px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "51px",
                  height: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "var(--allgrey-background-color)",
                  borderRadius: "4px",
                }}
              >
                <span
                  style={{
                    fontFamily: BODY_FONT,
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    color: "var(--primary-text-color)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Jun 5
                </span>
              </div>
            </div>
            <div
              style={{
                width: "100px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  width: "100px",
                  height: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "var(--color-done-green)",
                  color: "var(--fixed-light-color)",
                  fontFamily: BODY_FONT,
                  fontSize: "14px",
                  fontWeight: 400,
                  borderRadius: "4px",
                  whiteSpace: "nowrap",
                }}
              >
                Yes
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const boldClause: React.CSSProperties = {
  fontFamily: TITLE_FONT,
  fontSize: "18px",
  fontWeight: 500,
  lineHeight: "28px",
  letterSpacing: "0",
  color: "var(--primary-text-color)",
};

function AutomationRuleCard() {
  return (
    <div style={{ padding: "4px 0", width: "100%" }}>
      <div
        style={{
          backgroundColor: "var(--primary-background-color)",
          border: "0.5px solid var(--ui-border-color)",
          borderRadius: "16px",
          overflow: "hidden",
          paddingBottom: "24px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "20px 24px 12px 24px",
          }}
        >
          <Robot size="24" color="var(--icon-color)" />
        </div>
        <div style={{ padding: "0 24px" }}>
          <p
            style={{
              fontFamily: TITLE_FONT,
              fontSize: "18px",
              fontWeight: 200,
              lineHeight: "28px",
              letterSpacing: "0",
              color: "var(--primary-text-color)",
              margin: 0,
            }}
          >
            When <span style={boldClause}>status</span> changes to{" "}
            <span style={boldClause}>Critical</span> and{" "}
            <span style={boldClause}>release type</span> is{" "}
            <span style={boldClause}>Customer release</span>,{" "}
            <span style={boldClause}>notify</span> me via{" "}
            <span style={boldClause}>Sidekick</span>
          </p>
        </div>
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  fontFamily: BODY_FONT,
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "22px",
  color: "var(--secondary-text-color)",
};
const valueStyle: React.CSSProperties = {
  fontFamily: BODY_FONT,
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "22px",
  color: "var(--primary-text-color)",
};

function VendorCaseCard() {
  return (
    <div style={{ padding: "4px 0", width: "100%" }}>
      <div
        style={{
          backgroundColor: "var(--primary-background-color)",
          border: "0.5px solid var(--ui-border-color)",
          borderRadius: "16px",
          overflow: "hidden",
          width: "100%",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 16px 16px 24px",
            borderBottom: "0.5px solid var(--ui-border-color)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M17 7.5V16a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 16V7.5M1.5 4.5h17l-1.5 3H3L1.5 4.5z"
                stroke="var(--icon-color)"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 11h4"
                stroke="var(--icon-color)"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            <span
              style={{
                fontFamily: BODY_FONT,
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "22px",
                color: "var(--primary-text-color)",
              }}
            >
              Vendor Portal
            </span>
          </div>
          <div style={{ flex: 1 }} />
          <IconButton icon={Open} size="xs" kind="tertiary" />
        </div>

        {/* Body */}
        <div style={{ padding: "0 12px" }}>
          {/* Info section */}
          <div
            style={{
              padding: "16px 8px 16px 8px",
              borderBottom: "0.5px solid var(--ui-border-color)",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {/* Row 1: Case title + Severity */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "112px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    width: "175px",
                  }}
                >
                  <span style={labelStyle}>Case title</span>
                  <span style={valueStyle}>Vendor SSO setup incomplete</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <span style={labelStyle}>Severity</span>
                  <span
                    style={{
                      backgroundColor: "var(--negative-color)",
                      color: "var(--fixed-light-color)",
                      fontFamily: BODY_FONT,
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      whiteSpace: "nowrap",
                      display: "inline-block",
                      width: "fit-content",
                    }}
                  >
                    Severity 1 - Critical
                  </span>
                </div>
              </div>
              {/* Row 2: Product + Linked Board */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "112px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    width: "175px",
                  }}
                >
                  <span style={labelStyle}>Product</span>
                  <span style={valueStyle}>Okta SSO</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <span style={labelStyle}>Linked Board</span>
                  <span style={{ ...valueStyle, color: "var(--link-color)" }}>
                    Enterprise Pilot board
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Description section */}
          <div style={{ padding: "16px 9px" }}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <span style={labelStyle}>Description</span>
              <p
                style={{
                  fontFamily: BODY_FONT,
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: "var(--primary-text-color)",
                  margin: 0,
                }}
              >
                SSO configuration is blocking the June 12 pilot launch.
                Authentication handshake fails on first login. Vendor owns the
                next step — no internal workaround available.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "12px 16px",
            borderTop: "0.5px solid var(--ui-border-color)",
            gap: "8px",
          }}
        >
          <Button kind="primary" size="small" disabled rightIcon={Check}>
            Submitted
          </Button>
        </div>
      </div>
    </div>
  );
}

export const CHAT_IDS = ["1", "2", "3"] as const;

export const CHAT_SCENARIOS: Record<string, ChatScenario> = {
  "1": {
    title: "Trusted cross account insights",
    messages: [
      {
        role: "user",
        text: "Where are my biggest risks right now",
      },
      {
        role: "sidekick",
        content: (
          <>
            <p>
              Ranked using your program priorities, milestones, teams in scope,
              and the <strong>context your org marked for this program</strong>{" "}
              — the program brief, operating plan, and escalation policy.
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: "1.25em", margin: 0 }}>
              <li>
                <strong>Enterprise pilot</strong> is slipping behind plan.{" "}
                <S n={2} />
              </li>
              <li>
                <strong>AI rollout</strong> is drifting across two dependent
                teams. <S n={2} />
              </li>
              <li>
                <strong>Design handoff</strong> is slowing a key milestone.{" "}
                <S n={1} />
              </li>
            </ul>
            <p>
              I also weighted <strong>customer-facing milestones higher</strong>{" "}
              based on how you typically rank risk in weekly reviews.
            </p>
          </>
        ),
        sourceCount: 5,
        showThoughtProcess: true,
        thoughtProcessLabel: "Read 5 boards, 3 docs",
      },
      {
        role: "user",
        text: "What should I do first?",
      },
      {
        role: "sidekick",
        content: (
          <p>
            Start with the pilot. Resolve the onboarding blockers and update the
            timeline before your next program review. <S n={2} />
          </p>
        ),
        sourceCount: 2,
        showThoughtProcess: true,
        thoughtProcessLabel: "Read pilot board, review doc",
      },
    ],
  },

  "2": {
    title: "Proactive Sidekick",
    messages: [
      {
        role: "sidekick",
        content: (
          <p>
            Quick flag, Adi — in your weekly risk check,{" "}
            <strong>Enterprise pilot</strong> came up as the top issue.
            Onboarding blockers are still open and the timeline may slip.{" "}
            <S n={3} />
          </p>
        ),
        sourceCount: 3,
        showThoughtProcess: true,
        thoughtProcessLabel: "Read 3 boards, 2 docs",
      },
      {
        role: "user",
        text: "From now on, as soon as an open onboarding blocker puts a customer-facing milestone at risk, surface it — even if the board is still green",
      },
      {
        role: "sidekick",
        content: (
          <p>Saved. I'll surface it as soon as those signals line up.</p>
        ),
      },
    ],
  },

  "3": {
    title: "Doing the work",
    messages: [
      {
        role: "sidekick",
        content: (
          <p>
            Heads up Adi — in your weekly risk check,{" "}
            <strong>Vendor SSO setup incomplete</strong> is now the biggest risk
            to the <strong>June 12 pilot launch</strong>. It's still open and
            the vendor owns the next step. <S n={2} />
          </p>
        ),
        card: <SSOBlockerCard />,
        sourceCount: 2,
        showThoughtProcess: true,
        thoughtProcessLabel: "Read 2 boards, 1 doc",
      },
      {
        role: "user",
        text: "Open a vendor case",
      },
      {
        role: "sidekick",
        content: (
          <p>
            Sure, I can do that using your{" "}
            <strong>Case management skill</strong> — it'll open this case
            directly in <strong>Zendesk</strong>. Does everything look right
            before I submit?
          </p>
        ),
        card: <VendorCaseCard />,
        showThoughtProcess: true,
        thoughtProcessLabel: "Connected to Case management skill",
      },
      {
        role: "approval",
        text: "Case submission approved",
      },
      {
        role: "sidekick",
        content: (
          <p>
            Submitted a <strong>Severity 1</strong> case for Vendor SSO setup
            incomplete and linked it to your program board. <S n={1} />
          </p>
        ),
        sourceCount: 1,
        showThoughtProcess: true,
        thoughtProcessLabel: "Opened vendor case, updated board",
      },
      {
        role: "user",
        text: "Next time, do this as soon as it affects a customer-facing milestone",
      },
      {
        role: "sidekick",
        content: (
          <p>
            Saved. I'll open the case as soon as an open blocker puts a
            customer-facing milestone at risk.
          </p>
        ),
        card: <AutomationRuleCard />,
      },
    ],
  },
};
