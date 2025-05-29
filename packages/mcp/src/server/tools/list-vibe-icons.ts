import { getErrorMessage, MCPTool } from "../index.js";
import { IconMetadataService } from "./icon-metadata-service.js";

export const listVibeIconsTool: MCPTool<{}> = {
  name: "list-vibe-icons",
  description:
    "Get a list of all available Vibe icons from the @vibe/icons package. Returns icon names, descriptions, categories, and tags.",
  inputSchema: {},
  execute: async () => {
    try {
      const allIcons = await IconMetadataService.getIconMetadata();

      // Format the response to include relevant information
      const formattedIcons = allIcons.map(icon => ({
        name: icon.name,
        description: icon.description,
        category: icon.category || [],
        tags: icon.tags.split(", ").map(tag => tag.trim())
      }));

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                total: formattedIcons.length,
                icons: formattedIcons
              },
              null,
              2
            )
          }
        ]
      };
    } catch (e) {
      const errorMessage = getErrorMessage(e) || `Failed to list vibe icons`;

      return {
        content: [
          {
            type: "text",
            text: `Error in list-vibe-icons: ${errorMessage}`
          }
        ],
        isError: true
      };
    }
  }
};
