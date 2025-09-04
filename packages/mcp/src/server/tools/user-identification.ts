import { z } from "zod";
import { sessionManager } from "../../mcpcat-config.js";

const getUserIdentificationInfoSchema = z.object({
  includeClientDetails: z.boolean().optional().default(true),
});

const setUserIdentificationModeSchema = z.object({
  mode: z.enum(['anonymous', 'client-based', 'session-based', 'custom']).describe("User identification mode"),
  customIdentifier: z.string().optional().describe("Custom identifier when using custom mode"),
});

export const getUserIdentificationInfoTool = {
  name: "get-user-identification-info",
  description: "Get information about user identification methods available in MCPcat, including options for scenarios without OAuth/API keys",
  inputSchema: getUserIdentificationInfoSchema.shape,
  execute: async (input: z.infer<typeof getUserIdentificationInfoSchema>) => {
    try {
      const { includeClientDetails } = input;

      // Build the response object
      const identificationMethods: any = {
        overview: {
          description: "MCPcat supports multiple user identification methods, including scenarios without OAuth/API keys",
          methods: [
            {
              name: "OAuth/Token-based",
              description: "Using authentication tokens from request parameters or MCP auth",
              availability: "Requires OAuth/API key integration",
              privacy: "High - user consent and control",
              example: "extract token from request.params.arguments.token"
            },
            {
              name: "Client-based",
              description: "Identify users based on MCP client information and capabilities",
              availability: "Always available - no setup required",
              privacy: "Medium - based on client metadata only",
              example: "Use client name, version, and platform from MCP protocol"
            },
            {
              name: "Session-based",
              description: "Consistent identification based on session patterns and behavior",
              availability: "Always available - automatic",
              privacy: "Medium - based on usage patterns",
              example: "Generate consistent IDs based on session characteristics"
            },
            {
              name: "Anonymous",
              description: "No user identification - pure session tracking",
              availability: "Always available - opt-in via ANONYMIZE_SESSIONS=true",
              privacy: "High - no personal data collected",
              example: "return null from identify function"
            }
          ]
        }
      };

      if (includeClientDetails) {
        // Get sample client information from current sessions
        const activeSessions = sessionManager.getActiveSessions();
        const clientTypes = [...new Set(activeSessions.map(s => s.clientInfo?.name).filter(Boolean))];

        identificationMethods.clientAnalysis = {
          activeSessions: activeSessions.length,
          uniqueClientTypes: clientTypes,
          sampleClients: activeSessions.slice(0, 5).map(session => ({
            sessionId: session.sessionId.substring(0, 12) + '...',
            clientInfo: session.clientInfo,
            userId: `client_${session.sessionId.substring(5, 13)}`,
            identificationMethod: 'client-based'
          }))
        };
      }

      return {
        content: [{
          type: "text" as const,
          text: JSON.stringify(identificationMethods, null, 2)
        }],
        isError: false
      };
    } catch (error) {
      return {
        content: [{
          type: "text" as const,
          text: `Error retrieving user identification information: ${error}`
        }],
        isError: true
      };
    }
  }
};

export const demonstrateUserIdentificationTool = {
  name: "demonstrate-user-identification",
  description: "Demonstrate different user identification approaches available in MCPcat for scenarios without OAuth/API keys",
  inputSchema: z.object({}).shape,
  execute: async () => {
    try {
      const demonstration = {
        currentImplementation: {
          method: "Client-based + Session-based hybrid",
          description: "Combines MCP client information with session consistency",
          userIdFormat: "client_{hash}_{session_prefix}",
          privacyLevel: "Medium - client metadata only",
          identificationFactors: [
            "MCP client name (e.g., 'Claude Desktop', 'Cursor')",
            "Client version and platform",
            "Session characteristics",
            "Request patterns (tool usage)"
          ]
        },
        examples: {
          "Claude Desktop User": {
            clientInfo: { name: "Claude Desktop", version: "1.0.0", platform: "macOS" },
            generatedUserId: "client_abc123_sess_123456",
            identificationMethod: "client-based"
          },
          "Cursor IDE User": {
            clientInfo: { name: "Cursor", version: "0.40.0", platform: "macOS" },
            generatedUserId: "client_def456_sess_789012",
            identificationMethod: "client-based"
          },
          "Unknown Client": {
            clientInfo: { name: "Unknown Client", version: "Unknown", platform: "Unknown" },
            generatedUserId: "client_unknown_sess_random",
            identificationMethod: "session-based"
          }
        },
        configuration: {
          anonymousMode: "Set ANONYMIZE_SESSIONS=true for no identification",
          disableTracking: "Set DISABLE_USER_ANALYTICS=true for complete opt-out",
          customIdentification: "Implement custom identify function for OAuth/API keys"
        },
        bestPractices: [
          "Client-based identification works without any setup",
          "Session-based provides consistency across tool calls",
          "Anonymous mode available for privacy-conscious users",
          "All methods respect user privacy and data protection"
        ]
      };

      return {
        content: [{
          type: "text" as const,
          text: JSON.stringify(demonstration, null, 2)
        }],
        isError: false
      };
    } catch (error) {
      return {
        content: [{
          type: "text" as const,
          text: `Error demonstrating user identification: ${error}`
        }],
        isError: true
      };
    }
  }
};
