import agentElena from "../assets/agents/elena-wide.png";
import agentSarah from "../assets/agents/sarah-wide.png";
import agentBrittany from "../assets/agents/brittany-wide.png";
import toolSlack from "../assets/tools/slack.png";
import toolGmail from "../assets/tools/gmail.png";
import toolMonday from "../assets/tools/monday.png";

export type AgentStatus = "live" | "paused";

export type AgentToolId = "slack" | "gmail" | "monday";

export interface ManageAgentRow {
  id: string;
  name: string;
  role: string;
  creator: string;
  image: string;
  avatarBg: string;
  tools: AgentToolId[];
  extraTools?: number;
  status: AgentStatus;
  lastActivity: string;
  creditsUsed: number;
}

export const MANAGE_AGENTS: ManageAgentRow[] = [
  {
    id: "zara",
    name: "Zara",
    role: "Campaign Strategist",
    creator: "Jon snow",
    image: agentElena,
    avatarBg: "rgba(255, 132, 228, 0.5)",
    tools: ["slack"],
    status: "paused",
    lastActivity: "1 hour ago",
    creditsUsed: 20,
  },
  {
    id: "kai",
    name: "Kai",
    role: "Marketing Content Writer",
    creator: "Jon snow",
    image: agentSarah,
    avatarBg: "rgba(157, 255, 0, 0.5)",
    tools: ["slack", "gmail", "monday"],
    extraTools: 1,
    status: "live",
    lastActivity: "4 hours ago",
    creditsUsed: 48,
  },
  {
    id: "jamie",
    name: "Jamie",
    role: "Marketing Designer",
    creator: "Jon snow",
    image: agentBrittany,
    avatarBg: "rgba(148, 80, 253, 0.5)",
    tools: ["slack", "gmail"],
    status: "live",
    lastActivity: "Yesterday",
    creditsUsed: 48,
  },
];

export const TOOL_LABELS: Record<AgentToolId, string> = {
  slack: "Slack",
  gmail: "Gmail",
  monday: "monday",
};

export const TOOL_COLORS: Record<AgentToolId, string> = {
  slack: "#611f69",
  gmail: "#ea4335",
  monday: "#ff3d57",
};

export const TOOL_IMAGES: Record<AgentToolId, string> = {
  slack: toolSlack,
  gmail: toolGmail,
  monday: toolMonday,
};
