import { getErrorMessage, MCPTool } from "../index.js";
import { MetadataService } from "./metadata-service.js";

export const listVibePublicComponentsTool: MCPTool<{}> = {
  name: "list-vibe-public-components",
  description:
    "Get a list of all public @vibe/core & @vibe/core/next components names. Use this tool to get the names of components to use in the get-vibe-component-metadata tool.",
  inputSchema: {},
  execute: async () => {
    try {
      const allMetadata = await MetadataService.getMetadata();
      const componentNames = allMetadata.map(component => component.displayName);
      // Remove duplicates if a component has a next version
      const uniqueComponentNames = [...new Set(componentNames)];
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(uniqueComponentNames, null, 2)
          }
        ]
      };
    } catch (e) {
      const errorMessage = getErrorMessage(e) || `Failed to list published components`;

      return {
        content: [
          {
            type: "text",
            text: `Error in list-vibe-public-components: ${errorMessage}`
          }
        ],
        isError: true
      };
    }
  }
};
