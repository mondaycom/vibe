export interface SidekickChatLink {
  id: string;
  title: string;
}

export const SIDEKICK_CHATS: SidekickChatLink[] = [
  { id: "1", title: "Board progress summary" },
  { id: "2", title: "Weekly update draft" },
  { id: "3", title: "Sprint risks and blockers" },
];

export function getSidekickChatTitle(chatId: string): string {
  return SIDEKICK_CHATS.find((chat) => chat.id === chatId)?.title ?? "New chat";
}
