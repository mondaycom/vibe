
// Thumbnail / center avatar images (config screen)
import imgNbEnhancedImage from "../assets/agent-builder/87d8479472e80436ded8aa7fd1ef991ffa65b1b7.png";
import imgImage685 from "../assets/agent-builder/30c2ff5ee32d2a6508ca1717ab594ae7de682df5.png";
import imgImage686 from "../assets/agent-builder/16500cfa3be970c70a57416816f4afe3cd395907.png";
import imgImage687 from "../assets/agent-builder/df4335b1846999a54485645e75e64c077e8beaf7.png";
import imgImage688 from "../assets/agent-builder/bd1f9cc399276362a6e658b93b78156c4188adc9.png";
import imgImage689 from "../assets/agent-builder/d0878858f93607fd4081f8b338d56089f366c907.png";
import imgImage690 from "../assets/agent-builder/d6a6c4c92231bbbefbe3022840cc78010d11bb75.png";
import imgImage695 from "../assets/agent-builder/4b7c996683a3668ff14509660103f878b24f71d2.png";
import imgNbEnhancedImage1 from "../assets/agent-builder/c4397e9c0efee34cc7a3796dcadedc1e0deca954.png";
import imgAvatar10 from "../assets/agent-builder/ca36a1fdf071ada42093d90c3d1b03550ee7245c.png";
import imgAvatar11 from "../assets/agent-builder/40475c43e8b977eef304c3d1ff922b7111d1b401.png";
import imgAvatar12 from "../assets/agent-builder/1f8ad43927aa82f5179150ee505c6d1e74950330.png";

// Center (large) avatar images — transparent background versions
import imgCenter0 from "../assets/agent-builder/145f62e704627cfd6303bb369765d12daf7a685e.png";
import imgCenter1 from "../assets/agent-builder/580fe30d6db6e6259d52c2ef6fc6323f1a0e7331.png";
import imgCenter2 from "../assets/agent-builder/5e0b1ff59bd5215cae7bd0550d7b41110fdf530f.png";
import imgCenter3 from "../assets/agent-builder/7404cf854f9f30afc0d6ed853b2758dc4daa9e49.png";
import imgCenter4 from "../assets/agent-builder/6bf149e9cfdbffe8e7c43b5a339134d352646bcb.png";
import imgCenter5 from "../assets/agent-builder/b694564cbdd1bd11b64c7f582d11ea448f6da4f0.png";
import imgCenter6 from "../assets/agent-builder/916c29029ed9672c85007dbaa4be4d156cef3f71.png";
import imgCenter7 from "../assets/agent-builder/a7f4c4c85c6a1ec13ae7b14dd5b0a458c568c2b4.png";
import imgCenter8 from "../assets/agent-builder/b8ff41ab6f78acea6c0d0eea5d02f91fae6a5263.png";
import imgCenter9 from "../assets/agent-builder/efaed24f2a2fd5ebabf386ec4007ccc11cc70d18.png";
import imgCenter10 from "../assets/agent-builder/ff2eed1a20664331b7106cf299fec0aaed3bc647.png";
import imgCenter11 from "../assets/agent-builder/1faacca1c0059536e0a5356866fd6a1989ee4c86.png";

// Onboarding card crops
import imgCard8 from "../assets/agent-builder/3c9911b461a90bb6c6a342add673bfe34e65728d.png";

export type AvatarRenderType = "nested" | "cover" | "flipped";

export interface AvatarVisual {
  position: React.CSSProperties;
  renderType: AvatarRenderType;
  img: string;
  imgStyle?: React.CSSProperties;
  flipSize?: { h: number; w: number };
}

export interface AvatarItem extends AvatarVisual {
  id: number;
  centerImg: string;
  name: string;
}

const tX = "translateX(-50%)";
const tXY = "translate(-50%, -50%)";

export const avatars: AvatarItem[] = [
  {
    id: 0,
    img: imgNbEnhancedImage,
    centerImg: imgCenter1,
    name: "Avatar 1",
    renderType: "nested",
    position: {
      position: "absolute",
      height: "175px",
      width: "115px",
      left: "calc(50% - 0.5px)",
      top: "7px",
      transform: tX,
    },
    imgStyle: {
      height: "120.34%",
      left: "1.36%",
      top: "-11.19%",
      width: "100.45%",
    },
  },
  {
    id: 1,
    img: imgImage685,
    centerImg: imgCenter2,
    name: "Avatar 2",
    renderType: "nested",
    position: {
      position: "absolute",
      height: "123px",
      width: "92px",
      left: "calc(50% - 0.5px)",
      top: "10px",
      transform: tX,
    },
    imgStyle: { height: "131.48%", left: "5.19%", top: "0", width: "87.78%" },
  },
  {
    id: 2,
    img: imgImage686,
    centerImg: imgCenter8,
    name: "Avatar 3",
    renderType: "nested",
    position: {
      position: "absolute",
      height: "115px",
      width: "87px",
      left: "calc(50% - 5.25px)",
      top: "8px",
      transform: tX,
    },
    imgStyle: {
      height: "137.18%",
      left: "-14.28%",
      top: "-16.25%",
      width: "137.56%",
    },
  },
  {
    id: 3,
    img: imgImage687,
    centerImg: imgCenter6,
    name: "Avatar 4",
    renderType: "nested",
    position: {
      position: "absolute",
      height: "150px",
      width: "98px",
      left: "calc(50% - 0.5px)",
      top: "5px",
      transform: tX,
    },
    imgStyle: { height: "116%", left: "0", top: "-1.62%", width: "100%" },
  },
  {
    id: 4,
    img: imgImage688,
    centerImg: imgCenter5,
    name: "Avatar 5",
    renderType: "cover",
    position: {
      position: "absolute",
      height: "169px",
      width: "127px",
      left: "calc(50% - 0.5px)",
      top: "19px",
      transform: tX,
    },
  },
  {
    id: 5,
    img: imgImage689,
    centerImg: imgCenter0,
    name: "Avatar 6",
    renderType: "cover",
    position: {
      position: "absolute",
      height: "148px",
      width: "102px",
      left: "50%",
      top: "6px",
      transform: tX,
    },
  },
  {
    id: 6,
    img: imgImage690,
    centerImg: imgCenter4,
    name: "Avatar 7",
    renderType: "nested",
    position: {
      position: "absolute",
      height: "130px",
      width: "92px",
      left: "calc(50% - 0.75px)",
      top: "6px",
      transform: tX,
    },
    imgStyle: { height: "125.81%", left: "0", top: "-10.21%", width: "100%" },
  },
  {
    id: 7,
    img: imgImage695,
    centerImg: imgCenter7,
    name: "Avatar 8",
    renderType: "nested",
    position: {
      position: "absolute",
      height: "164px",
      width: "145px",
      left: "calc(50% + 0.5px)",
      bottom: "-72px",
      transform: tX,
    },
    imgStyle: { height: "100%", left: "0.08%", top: "0", width: "99.9%" },
  },
  {
    id: 8,
    img: imgNbEnhancedImage1,
    centerImg: imgCenter3,
    name: "Avatar 9",
    renderType: "cover",
    position: {
      position: "absolute",
      height: "175px",
      width: "96px",
      left: "calc(50% - 5.25px)",
      top: "calc(50% + 28.5px)",
      transform: tXY,
    },
  },
  {
    id: 9,
    img: imgAvatar10,
    centerImg: imgCenter9,
    name: "Avatar 10",
    renderType: "flipped",
    position: {
      position: "absolute",
      height: "176px",
      width: "99px",
      left: "50%",
      top: "calc(50% + 28px)",
      transform: tXY,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    flipSize: { h: 176, w: 99 },
  },
  {
    id: 10,
    img: imgAvatar11,
    centerImg: imgCenter10,
    name: "Avatar 11",
    renderType: "flipped",
    position: {
      position: "absolute",
      height: "175px",
      width: "98px",
      left: "calc(50% + 0.25px)",
      top: "calc(50% + 27.5px)",
      transform: tXY,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    flipSize: { h: 175, w: 98 },
  },
  {
    id: 11,
    img: imgAvatar12,
    centerImg: imgCenter11,
    name: "Avatar 12",
    renderType: "cover",
    position: {
      position: "absolute",
      height: "199px",
      width: "112px",
      left: "calc(50% - 2px)",
      top: "-15px",
      transform: tX,
    },
  },
];

export const colorSchemes: { id: number; color: string; border?: boolean }[] = [
  { id: 0, color: "#ffffff", border: true },
  { id: 1, color: "#f1c238" },
  { id: 2, color: "#03e8f9" },
  { id: 3, color: "#f960c6" },
  { id: 4, color: "#0291fb" },
  { id: 5, color: "#313131" },
  { id: 6, color: "#00ba5f" },
  { id: 7, color: "#9450fd" },
];

// Onboarding agent-card avatar crops (fitted portrait layout)
export const CARD_AVATAR_DATA: AvatarVisual[] = [
  {
    img: imgNbEnhancedImage,
    renderType: "nested",
    position: {
      position: "absolute",
      height: "169.116px",
      width: "129px",
      left: "50%",
      top: "5.51px",
      transform: tX,
    },
    imgStyle: {
      height: "345.91%",
      left: "-72.86%",
      top: "-31.71%",
      width: "248.68%",
    },
  },
  {
    img: imgImage685,
    renderType: "nested",
    position: {
      position: "absolute",
      height: "298px",
      width: "225px",
      left: "50%",
      top: "19px",
      transform: tX,
    },
    imgStyle: { height: "131.48%", left: "5.19%", top: "0", width: "87.78%" },
  },
  {
    img: imgImage686,
    renderType: "nested",
    position: {
      position: "absolute",
      height: "277px",
      width: "209px",
      left: "calc(50% - 13px)",
      top: "11px",
      transform: tX,
    },
    imgStyle: {
      height: "137.18%",
      left: "-14.28%",
      top: "-16.25%",
      width: "137.56%",
    },
  },
  {
    img: imgImage687,
    renderType: "nested",
    position: {
      position: "absolute",
      height: "398px",
      width: "260px",
      left: "calc(50% + 0.5px)",
      top: "0",
      transform: tX,
    },
    imgStyle: { height: "116%", left: "0", top: "-1.62%", width: "100%" },
  },
  {
    img: imgImage688,
    renderType: "cover",
    position: {
      position: "absolute",
      height: "375px",
      width: "283px",
      left: "calc(50% - 6px)",
      top: "19px",
      transform: tX,
    },
  },
  {
    img: imgImage689,
    renderType: "cover",
    position: {
      position: "absolute",
      height: "325px",
      width: "225px",
      left: "calc(50% - 2px)",
      top: "8px",
      transform: tX,
    },
  },
  {
    img: imgImage690,
    renderType: "nested",
    position: {
      position: "absolute",
      height: "279px",
      width: "197px",
      left: "50%",
      top: "12px",
      transform: tX,
    },
    imgStyle: { height: "125.81%", left: "0", top: "-10.21%", width: "100%" },
  },
  {
    img: imgImage695,
    renderType: "nested",
    position: {
      position: "absolute",
      height: "342px",
      width: "301px",
      left: "calc(50% + 10px)",
      top: "13px",
      transform: tX,
    },
    imgStyle: { height: "100%", left: "0.08%", top: "0", width: "99.9%" },
  },
  {
    img: imgCard8,
    renderType: "cover",
    position: {
      position: "absolute",
      height: "347px",
      width: "190px",
      left: "calc(50% - 6.5px)",
      top: "-3px",
      transform: tX,
    },
  },
  {
    img: imgAvatar10,
    renderType: "flipped",
    position: {
      position: "absolute",
      height: "387px",
      width: "218px",
      left: "calc(50% + 5.5px)",
      top: "calc(50% + 79.32px)",
      transform: tXY,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    flipSize: { h: 387, w: 218 },
  },
  {
    img: imgAvatar11,
    renderType: "flipped",
    position: {
      position: "absolute",
      height: "430px",
      width: "241px",
      left: "calc(50% + 4px)",
      top: "calc(50% + 99.82px)",
      transform: tXY,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    flipSize: { h: 430, w: 241 },
  },
  {
    img: imgAvatar12,
    renderType: "cover",
    position: {
      position: "absolute",
      height: "432.476px",
      width: "243.268px",
      left: "calc(50% - 0.13px)",
      top: "-30.09px",
      transform: tX,
    },
  },
];

export function renderAvatarVisual(v: AvatarVisual, alt = "") {
  if (v.renderType === "flipped" && v.flipSize) {
    return (
      <div style={v.position}>
        <div style={{ transform: "scaleY(-1) rotate(180deg)", flex: "none" }}>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              pointerEvents: "none",
              height: v.flipSize.h,
              width: v.flipSize.w,
            }}
          >
            <img
              alt={alt}
              src={v.img}
              style={{
                position: "absolute",
                inset: 0,
                maxWidth: "none",
                objectFit: "cover",
                pointerEvents: "none",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (v.renderType === "cover") {
    return (
      <div style={v.position}>
        <img
          alt={alt}
          src={v.img}
          style={{
            position: "absolute",
            inset: 0,
            maxWidth: "none",
            objectFit: "cover",
            pointerEvents: "none",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    );
  }

  // nested
  return (
    <div style={v.position}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <img
          alt={alt}
          src={v.img}
          style={{
            position: "absolute",
            maxWidth: "none",
            pointerEvents: "none",
            ...v.imgStyle,
          }}
        />
      </div>
    </div>
  );
}

// ─── Contextual Name / Expertise Summarizer ──────────────────────────────────

const STOP_WORDS = new Set([
  "i",
  "me",
  "my",
  "we",
  "our",
  "you",
  "your",
  "the",
  "a",
  "an",
  "and",
  "or",
  "but",
  "in",
  "on",
  "at",
  "to",
  "for",
  "of",
  "with",
  "by",
  "from",
  "is",
  "am",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "have",
  "has",
  "had",
  "do",
  "does",
  "did",
  "will",
  "would",
  "could",
  "should",
  "shall",
  "may",
  "might",
  "can",
  "that",
  "this",
  "these",
  "those",
  "it",
  "its",
  "not",
  "no",
  "so",
  "if",
  "then",
  "than",
  "what",
  "which",
  "who",
  "whom",
  "how",
  "when",
  "where",
  "why",
  "all",
  "each",
  "every",
  "both",
  "few",
  "more",
  "most",
  "other",
  "some",
  "such",
  "only",
  "also",
  "just",
  "about",
  "up",
  "out",
  "into",
  "over",
  "after",
  "before",
  "between",
  "under",
  "above",
  "very",
  "too",
  "here",
  "there",
  "again",
  "once",
  "well",
  "back",
  "even",
  "still",
  "already",
  "always",
  "never",
  "often",
  "sometimes",
  "usually",
  "really",
  "quite",
  "much",
  "many",
  "any",
  "own",
  "same",
  "able",
  "specialize",
  "specializing",
  "focus",
  "focusing",
  "help",
  "helping",
  "work",
  "working",
  "make",
  "making",
  "use",
  "using",
  "provide",
  "providing",
  "ensure",
  "ensuring",
  "like",
  "need",
  "want",
  "get",
  "got",
  "go",
  "going",
  "take",
  "taking",
  "come",
  "know",
  "think",
  "see",
  "look",
  "find",
  "give",
  "tell",
  "try",
  "ask",
  "seem",
  "feel",
  "leave",
  "call",
  "keep",
  "let",
  "begin",
  "show",
  "hear",
  "play",
  "run",
  "move",
  "live",
  "believe",
  "bring",
  "happen",
  "set",
  "put",
  "pay",
  "hold",
  "learn",
  "change",
  "lead",
  "understand",
  "across",
  "through",
  "during",
  "around",
  "among",
  "along",
  "within",
  "without",
  "toward",
  "upon",
  "act",
]);

interface DomainEntry {
  domain: string;
  keywords: string[];
  weight: number;
}

const DOMAIN_MAP: DomainEntry[] = [
  {
    domain: "Feedback",
    keywords: [
      "feedback",
      "reviews",
      "ratings",
      "survey",
      "surveys",
      "nps",
      "csat",
    ],
    weight: 1,
  },
  {
    domain: "Customer",
    keywords: [
      "customer",
      "customers",
      "client",
      "clients",
      "user",
      "users",
      "consumer",
    ],
    weight: 1,
  },
  {
    domain: "Sales",
    keywords: [
      "sales",
      "revenue",
      "pipeline",
      "deals",
      "quota",
      "crm",
      "leads",
      "conversion",
      "upsell",
      "churn",
    ],
    weight: 1,
  },
  {
    domain: "Marketing",
    keywords: [
      "marketing",
      "campaign",
      "campaigns",
      "brand",
      "branding",
      "seo",
      "advertising",
      "ads",
      "social media",
      "engagement",
    ],
    weight: 1,
  },
  {
    domain: "Product",
    keywords: [
      "product",
      "products",
      "roadmap",
      "feature",
      "features",
      "backlog",
      "sprint",
      "agile",
      "scrum",
      "prioritize",
      "prioritization",
    ],
    weight: 1,
  },
  {
    domain: "Engineering",
    keywords: [
      "code",
      "coding",
      "engineer",
      "engineering",
      "developer",
      "development",
      "software",
      "programming",
      "api",
      "backend",
      "frontend",
      "fullstack",
      "devops",
      "cicd",
      "deploy",
      "debug",
      "refactor",
    ],
    weight: 1,
  },
  {
    domain: "Design",
    keywords: [
      "design",
      "ux",
      "ui",
      "figma",
      "wireframe",
      "prototype",
      "visual",
      "layout",
      "typography",
      "accessibility",
    ],
    weight: 1,
  },
  {
    domain: "Data",
    keywords: [
      "data",
      "database",
      "sql",
      "analytics",
      "metrics",
      "kpi",
      "dashboard",
      "visualization",
      "warehouse",
      "etl",
      "pipeline",
    ],
    weight: 1,
  },
  {
    domain: "Research",
    keywords: [
      "research",
      "study",
      "studies",
      "findings",
      "hypothesis",
      "experiment",
      "experiments",
      "insights",
      "discovery",
      "literature",
    ],
    weight: 1,
  },
  {
    domain: "Content",
    keywords: [
      "content",
      "writing",
      "write",
      "blog",
      "article",
      "articles",
      "copy",
      "copywriting",
      "editorial",
      "publishing",
      "documentation",
      "docs",
    ],
    weight: 1,
  },
  {
    domain: "Finance",
    keywords: [
      "finance",
      "financial",
      "budget",
      "budgeting",
      "accounting",
      "revenue",
      "cost",
      "costs",
      "expense",
      "forecast",
      "forecasting",
      "profit",
      "invoice",
    ],
    weight: 1,
  },
  {
    domain: "HR",
    keywords: [
      "hr",
      "hiring",
      "recruit",
      "recruiting",
      "recruitment",
      "onboarding",
      "talent",
      "employee",
      "employees",
      "workforce",
      "culture",
      "retention",
      "benefits",
      "payroll",
    ],
    weight: 1,
  },
  {
    domain: "Security",
    keywords: [
      "security",
      "cybersecurity",
      "vulnerability",
      "threat",
      "threats",
      "compliance",
      "audit",
      "encryption",
      "authentication",
      "authorization",
      "firewall",
    ],
    weight: 1,
  },
  {
    domain: "Support",
    keywords: [
      "support",
      "helpdesk",
      "ticket",
      "tickets",
      "issue",
      "issues",
      "troubleshoot",
      "troubleshooting",
      "resolution",
      "escalation",
      "sla",
    ],
    weight: 1,
  },
  {
    domain: "Operations",
    keywords: [
      "operations",
      "ops",
      "logistics",
      "supply",
      "chain",
      "inventory",
      "procurement",
      "process",
      "processes",
      "workflow",
      "workflows",
      "automation",
      "efficiency",
    ],
    weight: 1,
  },
  {
    domain: "Legal",
    keywords: [
      "legal",
      "law",
      "contract",
      "contracts",
      "compliance",
      "regulation",
      "regulations",
      "policy",
      "policies",
      "intellectual property",
      "patent",
      "trademark",
    ],
    weight: 1,
  },
  {
    domain: "Communication",
    keywords: [
      "communication",
      "email",
      "emails",
      "messaging",
      "meetings",
      "presentation",
      "presentations",
      "reports",
      "reporting",
      "stakeholder",
    ],
    weight: 1,
  },
  {
    domain: "AI",
    keywords: [
      "ai",
      "artificial intelligence",
      "machine learning",
      "ml",
      "deep learning",
      "nlp",
      "natural language",
      "model",
      "models",
      "neural",
      "training",
      "inference",
      "llm",
      "gpt",
      "prompt",
    ],
    weight: 1,
  },
  {
    domain: "Sentiment",
    keywords: [
      "sentiment",
      "emotion",
      "emotions",
      "tone",
      "mood",
      "opinion",
      "opinions",
      "perception",
      "feeling",
      "feelings",
      "satisfaction",
    ],
    weight: 1,
  },
  {
    domain: "Strategy",
    keywords: [
      "strategy",
      "strategic",
      "planning",
      "plan",
      "vision",
      "mission",
      "goals",
      "objectives",
      "okr",
      "initiative",
      "initiatives",
      "transformation",
    ],
    weight: 1,
  },
  {
    domain: "Quality",
    keywords: [
      "quality",
      "qa",
      "testing",
      "test",
      "tests",
      "bug",
      "bugs",
      "defect",
      "defects",
      "regression",
      "validation",
      "verification",
    ],
    weight: 1,
  },
  {
    domain: "Education",
    keywords: [
      "education",
      "learning",
      "training",
      "course",
      "courses",
      "curriculum",
      "teaching",
      "mentoring",
      "coaching",
      "tutorial",
      "tutorials",
      "lesson",
    ],
    weight: 1,
  },
  {
    domain: "Health",
    keywords: [
      "health",
      "healthcare",
      "medical",
      "clinical",
      "patient",
      "patients",
      "wellness",
      "diagnosis",
      "treatment",
      "pharmaceutical",
    ],
    weight: 1,
  },
  {
    domain: "Project",
    keywords: [
      "project",
      "projects",
      "milestone",
      "milestones",
      "deliverable",
      "deliverables",
      "timeline",
      "deadline",
      "deadlines",
      "gantt",
      "task",
      "tasks",
    ],
    weight: 1,
  },
];

interface ActionEntry {
  role: string;
  keywords: string[];
}

const ACTION_MAP: ActionEntry[] = [
  {
    role: "Analysis",
    keywords: [
      "analyze",
      "analyzing",
      "analysis",
      "examine",
      "evaluate",
      "evaluating",
      "assess",
      "assessing",
      "measure",
      "measuring",
      "audit",
      "inspect",
      "review",
      "reviewing",
      "interpret",
    ],
  },
  {
    role: "Intelligence",
    keywords: [
      "uncover",
      "discover",
      "identify",
      "identifying",
      "detect",
      "detecting",
      "insight",
      "insights",
      "intelligence",
      "monitor",
      "monitoring",
      "track",
      "tracking",
      "observe",
      "recognize",
    ],
  },
  {
    role: "Strategy",
    keywords: [
      "strategy",
      "strategic",
      "plan",
      "planning",
      "advise",
      "advising",
      "recommend",
      "recommending",
      "optimize",
      "optimizing",
      "improve",
      "improving",
      "transform",
      "prioritize",
      "prioritizing",
    ],
  },
  {
    role: "Creation",
    keywords: [
      "create",
      "creating",
      "generate",
      "generating",
      "build",
      "building",
      "craft",
      "crafting",
      "compose",
      "composing",
      "produce",
      "producing",
      "draft",
      "drafting",
      "write",
      "writing",
    ],
  },
  {
    role: "Automation",
    keywords: [
      "automate",
      "automating",
      "automation",
      "streamline",
      "streamlining",
      "accelerate",
      "simplify",
      "simplifying",
      "scale",
      "scaling",
      "orchestrate",
    ],
  },
  {
    role: "Support",
    keywords: [
      "support",
      "supporting",
      "assist",
      "assisting",
      "resolve",
      "resolving",
      "troubleshoot",
      "troubleshooting",
      "respond",
      "responding",
      "guide",
      "guiding",
      "answer",
      "answering",
    ],
  },
  {
    role: "Synthesis",
    keywords: [
      "synthesize",
      "synthesizing",
      "summarize",
      "summarizing",
      "aggregate",
      "aggregating",
      "consolidate",
      "compile",
      "compiling",
      "distill",
      "combine",
      "merge",
      "unify",
    ],
  },
  {
    role: "Orchestration",
    keywords: [
      "coordinate",
      "coordinating",
      "manage",
      "managing",
      "orchestrate",
      "orchestrating",
      "organize",
      "organizing",
      "facilitate",
      "facilitating",
      "delegate",
      "delegating",
    ],
  },
  {
    role: "Prediction",
    keywords: [
      "predict",
      "predicting",
      "forecast",
      "forecasting",
      "anticipate",
      "anticipating",
      "project",
      "projecting",
      "estimate",
      "estimating",
      "model",
      "modeling",
      "simulate",
    ],
  },
  {
    role: "Curation",
    keywords: [
      "curate",
      "curating",
      "select",
      "selecting",
      "filter",
      "filtering",
      "sort",
      "sorting",
      "categorize",
      "categorizing",
      "classify",
      "classifying",
      "tag",
      "tagging",
      "label",
    ],
  },
];

export function summarizeExpertise(text: string): string {
  if (!text || text.trim().length === 0) return "General Purpose";

  const lower = text.toLowerCase();
  const words = lower
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length > 1 && !STOP_WORDS.has(w));

  const domainScores = DOMAIN_MAP.map((entry) => {
    let score = 0;
    for (const kw of entry.keywords) {
      if (kw.includes(" ")) {
        if (lower.includes(kw)) score += 2;
      } else {
        for (const w of words) {
          if (w === kw) score += 2;
          else if (
            w.startsWith(kw.slice(0, Math.min(kw.length, 4))) &&
            kw.length > 3
          )
            score += 1;
          else if (
            kw.startsWith(w.slice(0, Math.min(w.length, 4))) &&
            w.length > 3
          )
            score += 1;
        }
      }
    }
    return { domain: entry.domain, score };
  })
    .filter((d) => d.score > 0)
    .sort((a, b) => b.score - a.score);

  const actionScores = ACTION_MAP.map((entry) => {
    let score = 0;
    for (const kw of entry.keywords) {
      for (const w of words) {
        if (w === kw) score += 2;
        else if (w.startsWith(kw.slice(0, Math.min(kw.length, 5)))) score += 1;
      }
    }
    return { role: entry.role, score };
  })
    .filter((a) => a.score > 0)
    .sort((a, b) => b.score - a.score);

  const topDomain = domainScores[0]?.domain;
  const secondDomain = domainScores[1]?.domain;
  const topAction = actionScores[0]?.role;

  if (topDomain && topAction) {
    if (
      secondDomain &&
      domainScores[1].score >= domainScores[0].score * 0.7 &&
      secondDomain !== topDomain
    ) {
      return `${topDomain} & ${secondDomain} ${topAction}`;
    }
    return `${topDomain} ${topAction}`;
  }

  if (topDomain) return `${topDomain} Intelligence`;
  if (topAction) return `${topAction}`;

  const freq: Record<string, number> = {};
  for (const w of words) {
    freq[w] = (freq[w] || 0) + 1;
  }
  const topWord = Object.entries(freq).sort((a, b) => b[1] - a[1])[0];
  if (topWord) {
    const capitalized =
      topWord[0].charAt(0).toUpperCase() + topWord[0].slice(1);
    return `${capitalized} Specialist`;
  }

  return "AI Assistant";
}
