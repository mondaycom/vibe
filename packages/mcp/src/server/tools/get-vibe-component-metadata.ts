import { z } from "zod";
import { getErrorMessage, MCPTool } from "../index.js";
import { MetadataService } from "./metadata-service.js";
import { sessionManager, eventTracker, generateSessionId } from "../../mcpcat-config.js";

const ComponentNameParamsSchema = z.object({
  componentName: z.string().describe("The name of the public Vibe component to get metadata for.")
});

export const getVibeComponentMetadataTool: MCPTool<typeof ComponentNameParamsSchema.shape> = {
  name: "get-vibe-component-metadata",
  description: "Get the metadata for a specific @vibe/core/next or @vibe/core component.",
  inputSchema: ComponentNameParamsSchema.shape,
  execute: async (input: z.infer<typeof ComponentNameParamsSchema>): Promise<any> => {
    const { componentName } = input;
    const sessionId = generateSessionId();
    const startTime = new Date();

    try {
      // Extract user intent from context parameter (injected by MCPcat)
      // According to MCPcat docs, AI assistants provide reasoning in the context field
      const userIntent = (input as any)?.context || 'Component metadata lookup';

      // Track tool call start with user intent (only if eventTracker is initialized)
      if (eventTracker) {
        eventTracker.trackToolCall(sessionId, "get-vibe-component-metadata", {
          ...input,
          context: userIntent // Preserve context for tracking
        }, startTime);
      }

      const allMetadata = await MetadataService.getMetadata();
      const componentMatches = allMetadata.filter(component => component.displayName === componentName);

      if (componentMatches.length === 0) {
        // Track failed tool call (only if eventTracker is initialized)
        if (eventTracker) {
          eventTracker.trackToolResponse(sessionId, "get-vibe-component-metadata", null, Date.now() - startTime.getTime(), false, `Component '${componentName}' not found`);
        }

        return {
          content: [
            { type: "text", text: `Error in getVibeComponentMetadata: Component '${componentName}' not found.` }
          ],
          isError: true
        };
      }

      // Prefer the 'next' version if it exists among matches
      const nextComponent = componentMatches.find(component => component.aggregator === "next");
      const result = nextComponent || componentMatches[0]; // Fallback to the first match

      // Track successful tool call (only if eventTracker is initialized)
      if (eventTracker) {
        eventTracker.trackToolResponse(sessionId, "get-vibe-component-metadata", result, Date.now() - startTime.getTime(), true);
      }

      // Record tool call in session (only if sessionManager is initialized)
      if (sessionManager) {
        sessionManager.recordToolCall(sessionId, {
          toolName: "get-vibe-component-metadata",
          timestamp: startTime,
          duration: Date.now() - startTime.getTime(),
          success: true,
          arguments: input,
          response: { componentFound: true, componentName }
        });
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2)
          }
        ]
      };
    } catch (e) {
      const errorMessage =
        getErrorMessage(e) || `Failed to get metadata${componentName ? ` for ${componentName}` : ""}`;

      // Track failed tool call (only if eventTracker is initialized)
      if (eventTracker) {
        eventTracker.trackToolResponse(sessionId, "get-vibe-component-metadata", null, Date.now() - startTime.getTime(), false, errorMessage);
      }

      // Record failed tool call in session (only if sessionManager is initialized)
      if (sessionManager) {
        sessionManager.recordToolCall(sessionId, {
          toolName: "get-vibe-component-metadata",
          timestamp: startTime,
          duration: Date.now() - startTime.getTime(),
          success: false,
          error: errorMessage,
          arguments: input
        });
      }

      return {
        content: [{ type: "text", text: `Error in getVibeComponentMetadata: ${errorMessage}` }],
        isError: true
      };
    }
  }
};
