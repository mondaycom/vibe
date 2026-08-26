// Type shim for deep-importing AgentAvatar from @mondaydotcomorg/monday-ui-components.
// We import the component module directly (not the package barrel) because the barrel
// re-exports chat-client → @mondaydotcomorg/trident-runtime, a monolith-only package
// that is not published for standalone bundling and breaks the Vite build. AgentAvatar
// itself only depends on @vibe/core, so the deep import bundles cleanly.
declare module "@mondaydotcomorg/monday-ui-components/dist/esm/monday-ui-components/src/components/AgentAvatar/AgentAvatar.js" {
  import type { FC } from "react";
  import type { AvatarProps } from "@vibe/core";
  const AgentAvatar: FC<Omit<AvatarProps, "square" | "type">>;
  export default AgentAvatar;
}
