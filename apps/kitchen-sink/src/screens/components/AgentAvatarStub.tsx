import { Avatar, type AvatarProps } from "@vibe/core";

type AgentAvatarProps = Omit<AvatarProps, "square" | "type">;

/** Local stand-in for monday-ui-components AgentAvatar (deep import unavailable in this worktree). */
export default function AgentAvatar(props: AgentAvatarProps) {
  return <Avatar {...props} type="img" square />;
}
