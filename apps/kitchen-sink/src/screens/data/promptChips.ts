import {
  AgileProject,
  Calendar,
  CRM,
  CustomerFeedback,
  Deals,
  EnabledUser,
  Goals,
  IncidentManager,
  Knowledge,
  Megaphone,
  Roadmap,
  Speedometer,
  Tasks,
  ToDoList,
  WorkspaceHome,
} from "@mondaydotcomorg/icons";
import type { ComponentType, SVGProps } from "react";

export interface PromptChip {
  id: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

// Ported 1:1 from the mini-home redesign's prompt-chips.constants.ts +
// translations.json (the static prototype omits the full prompt payloads).
export const PROMPT_CHIPS: readonly PromptChip[] = [
  { id: "track_project", label: "Track a project", icon: WorkspaceHome },
  { id: "plan_event", label: "Plan an event", icon: Tasks },
  { id: "plan_content", label: "Plan content", icon: Calendar },
  { id: "run_hiring", label: "Run hiring", icon: EnabledUser },
  { id: "collect_requests", label: "Collect requests", icon: Roadmap },
  { id: "track_budget", label: "Track budget", icon: Speedometer },
  { id: "launch_campaign", label: "Launch campaign", icon: Megaphone },
  { id: "manage_crm", label: "Manage CRM", icon: CRM },
  { id: "close_deals", label: "Close deals", icon: Deals },
  { id: "knowledge_hub", label: "Centralize docs", icon: Knowledge },
  { id: "set_okrs", label: "Set OKRs", icon: Goals },
  { id: "triage_incidents", label: "Triage incidents", icon: IncidentManager },
  { id: "plan_sprint", label: "Plan sprint", icon: AgileProject },
  { id: "gather_feedback", label: "Gather feedback", icon: CustomerFeedback },
  { id: "organize_tasks", label: "Organize tasks", icon: ToDoList },
];
