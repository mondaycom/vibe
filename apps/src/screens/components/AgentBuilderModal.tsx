import {
  useAgentBuilder,
  type AgentConfigData,
} from "../context/AgentBuilderContext";
import { AgentBuilderConfig } from "./AgentBuilderConfig";
import { AgentBuilderOnboarding } from "./AgentBuilderOnboarding";
import imgDefaultAvatar from "../assets/agent-builder/87d8479472e80436ded8aa7fd1ef991ffa65b1b7.png";

const DEFAULT_AGENT: AgentConfigData = {
  name: "Elena",
  expertise: "Feedback Intelligence Agent",
  avatarBg: "#f960c6",
  avatarImg: imgDefaultAvatar,
  avatarIndex: 0,
};

export function AgentBuilderModal() {
  const { view, configInitial, pendingAgent } = useAgentBuilder();

  if (view === "config") {
    return <AgentBuilderConfig initial={configInitial} />;
  }
  if (view === "onboarding") {
    return <AgentBuilderOnboarding agent={pendingAgent ?? DEFAULT_AGENT} />;
  }
  return null;
}
