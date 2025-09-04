import { getErrorMessage, MCPTool } from "../index.js";
import { MetadataService } from "./metadata-service.js";
import { sessionManager, eventTracker, generateSessionId } from "../../mcpcat-config.js";

export const listVibePublicComponentsTool: MCPTool<{}> = {
  name: "list-vibe-public-components",
  description:
    "Get a list of all public @vibe/core & @vibe/core/next components names. Use this tool to get the names of components to use in the get-vibe-component-metadata tool.",
  inputSchema: {},
  execute: async () => {
    const sessionId = generateSessionId();
    const startTime = new Date();
    const userIntent = 'List all available Vibe components';

    try {
      if (eventTracker) {
        eventTracker.trackToolCall(sessionId, "list-vibe-public-components", {}, startTime);
      }

      const allMetadata = await MetadataService.getMetadata();
      const componentNames = allMetadata.map(component => component.displayName);
      // Remove duplicates if a component has a next version
      const uniqueComponentNames = [...new Set(componentNames)];

      const result = {
        componentCount: uniqueComponentNames.length,
        components: uniqueComponentNames
      };

      if (eventTracker) {
        eventTracker.trackToolResponse(sessionId, "list-vibe-public-components", result, Date.now() - startTime.getTime(), true);
      }

      if (sessionManager) {
        sessionManager.recordToolCall(sessionId, {
          toolName: "list-vibe-public-components",
          timestamp: startTime,
          duration: Date.now() - startTime.getTime(),
          success: true,
          arguments: {},
          response: result
        });
      }

      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(uniqueComponentNames, null, 2)
          }
        ]
      };
    } catch (e) {
      const errorMessage = getErrorMessage(e) || `Failed to list published components`;

      if (eventTracker) {
        eventTracker.trackToolResponse(sessionId, "list-vibe-public-components", null, Date.now() - startTime.getTime(), false, errorMessage);
      }

      if (sessionManager) {
        sessionManager.recordToolCall(sessionId, {
          toolName: "list-vibe-public-components",
          timestamp: startTime,
          duration: Date.now() - startTime.getTime(),
          success: false,
          error: errorMessage,
          arguments: {}
        });
      }

      return {
        content: [
          {
            type: "text" as const,
            text: `Error in list-vibe-public-components: ${errorMessage}`
          }
        ],
        isError: true
      };
    }
  }
};
