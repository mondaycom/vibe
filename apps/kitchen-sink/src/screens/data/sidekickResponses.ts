// Generates a contextual Sidekick response based on user input
export function generateSidekickResponse(userMessage: string): {
  intro: string;
  followUp: string;
} {
  const lower = userMessage.toLowerCase();

  if (lower.includes("onboarding") || lower.includes("onboard")) {
    return {
      intro:
        "I've drafted an onboarding board tailored to help get your new team member up to speed. It includes key milestones, introductions, and first-week tasks.",
      followUp:
        "Want me to assign owners to each task, add due dates based on a start date, or share the board with the team?",
    };
  }

  if (
    lower.includes("meeting") ||
    lower.includes("recap") ||
    lower.includes("summary")
  ) {
    return {
      intro:
        "Here's a clean meeting recap based on your request. You can review and tweak any details as needed.",
      followUp:
        "Want me to turn the action items into tasks, post this as a doc update, or share it with the team?",
    };
  }

  if (
    lower.includes("task") ||
    lower.includes("to-do") ||
    lower.includes("todo")
  ) {
    return {
      intro:
        "I've organized the tasks based on your input. Each item includes a suggested priority and timeline.",
      followUp:
        "Should I assign these to specific team members, set due dates, or create a timeline view?",
    };
  }

  if (
    lower.includes("report") ||
    lower.includes("status") ||
    lower.includes("update")
  ) {
    return {
      intro:
        "Here's a status report based on the current state of your boards. I've highlighted key blockers and upcoming deadlines.",
      followUp:
        "Want me to email this to stakeholders, schedule a recurring update, or break down the blockers into action items?",
    };
  }

  if (
    lower.includes("board") ||
    lower.includes("create") ||
    lower.includes("build")
  ) {
    return {
      intro:
        "I've set up a new board structure based on your description. It includes relevant columns and groups to get you started.",
      followUp:
        "Would you like me to add sample items, customize the columns, or invite collaborators to this board?",
    };
  }

  if (
    lower.includes("email") ||
    lower.includes("write") ||
    lower.includes("draft")
  ) {
    return {
      intro:
        "I've drafted the content based on your request. Feel free to review and adjust the tone or details.",
      followUp:
        "Should I save this as a doc, copy it to your clipboard, or refine any specific section?",
    };
  }

  if (
    lower.includes("help") ||
    lower.includes("how") ||
    lower.includes("what")
  ) {
    return {
      intro:
        "Great question. Here's what I found based on your request. I've kept the answer concise and actionable.",
      followUp:
        "Want me to go deeper on any of these points, or would you like me to help you take action on something specific?",
    };
  }

  // Default response
  return {
    intro:
      "I've processed your request and put together a response. Let me know if this captures what you had in mind.",
    followUp:
      "Would you like me to refine this further, save it as a doc, or take any follow-up actions?",
  };
}
