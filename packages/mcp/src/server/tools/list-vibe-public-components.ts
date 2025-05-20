import vibeMetadata from "@vibe/core/meta";
import { MCPTool } from "../index.js";

export const listVibePublicComponentsTool: MCPTool<{}> = {
  name: "list-vibe-public-components",
  description:
    "Get a list of all public @vibe/core & @vibe/core/next components names. Use this tool to get the names of components to use in the get-vibe-component-metadata tool.",
  inputSchema: {},
  execute: async () => {
    try {
      const components = vibeMetadata.map(component => component.displayName);
      // Remove duplicates if a component has a next version
      const uniqueComponents = [...new Set(components)];
      return {
        content: [{ type: "text", text: JSON.stringify(uniqueComponents, null, 2) }]
      };
    } catch (e) {
      const message = (e instanceof Error ? e.message : e) || "Failed to get published components";
      return {
        content: [{ type: "text", text: `Error in list-vibe-public-components: ${message}` }],
        isError: true
      };
    }
  }
};
