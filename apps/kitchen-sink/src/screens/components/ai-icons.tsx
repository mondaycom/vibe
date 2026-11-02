import aiSidekickSvg from "../assets/ai-icons/ai-sidekick.svg";
import vibeSvg from "../assets/ai-icons/vibe.svg";
import workflowsSvg from "../assets/ai-icons/workflows.svg";
import agentsSvg from "../assets/ai-icons/agents.svg";
import notetakerSvg from "../assets/ai-icons/notetaker.svg";

const AiIcon: React.FC<{ src: string; alt: string; size?: number }> = ({
  src,
  alt,
  size = 16,
}) => <img src={src} alt={alt} width={size} height={size} />;

export const AiSidekickIcon: React.FC<{ size?: number }> = ({ size }) => (
  <AiIcon src={aiSidekickSvg} alt="AI Sidekick" size={size} />
);
export const VibeAppIcon: React.FC = () => <AiIcon src={vibeSvg} alt="Vibe" />;
export const AiWorkflowsIcon: React.FC = () => (
  <AiIcon src={workflowsSvg} alt="AI Workflows" />
);
export const AiAgentsIcon: React.FC = () => (
  <AiIcon src={agentsSvg} alt="AI Agents" />
);
export const AiNotetakerIcon: React.FC = () => (
  <AiIcon src={notetakerSvg} alt="AI Notetaker" />
);
