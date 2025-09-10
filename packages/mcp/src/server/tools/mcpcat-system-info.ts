import { z } from "zod";
import { sessionManager, eventTracker } from "../../mcpcat-config.js";

const getMCPcatSystemInfoSchema = z.object({
  includeSessionDetails: z.boolean().optional().default(false),
  includeEventStats: z.boolean().optional().default(false),
});

export const getMCPcatSystemInfoTool = {
  name: "get-mcpcat-system-info",
  description: "Get comprehensive information about MCPcat analytics system, following the 'How it works' documentation concepts including session tracking, user intent capture, and request tracing.",
  inputSchema: getMCPcatSystemInfoSchema.shape,
  execute: async (input: z.infer<typeof getMCPcatSystemInfoSchema>) => {
    try {
      const { includeSessionDetails, includeEventStats } = input;
      const sessionStats = sessionManager.getSessionStats();

      // Use flexible typing to allow dynamic property addition
      const systemInfo: any = {
        mcpcatOverview: {
          description: "MCPcat analytics system following 'How it works' documentation",
          documentation: "https://docs.mcpcat.io/essentials/how-it-works",
          coreConcepts: [
            "Session Tracking - Every interaction within unique sessions",
            "User Intent Capture - Context parameter injection for reasoning",
            "Request Tracing - Transparent interception of MCP protocol messages",
            "Asynchronous Processing - Zero performance impact event handling",
            "Privacy Controls - Built-in redaction and user control"
          ]
        },
        currentStatus: {
          sessionsActive: sessionStats.active,
          totalSessions: sessionStats.total,
          averageSessionDuration: `${Math.round(sessionStats.averageDuration / 1000)}s`,
          eventProcessingEnabled: !!eventTracker,
          contextInjectionEnabled: true, // MCPcat automatically injects context
          privacyMode: process.env.ANONYMIZE_SESSIONS === 'true' ? 'anonymous' : 'identified'
        },
        sessionLifecycle: {
          creation: "Automatic session creation on first client connection",
          activity: "Session activity updated on each tool call",
          inactivity: `Sessions timeout after ${Math.round(parseInt(process.env.MCPCAT_SESSION_TIMEOUT || '1800000') / 60000)} minutes`,
          termination: "Sessions end on client disconnect or timeout",
          tracking: "Complete session journey from connection to final tool call"
        },
        userIntentCapture: {
          contextParameter: "MCPcat automatically injects 'context' parameter into tool schemas",
          aiAssistantIntegration: "AI assistants (Claude, Cursor) provide reasoning in context field",
          intentStorage: "User intent captured and stored as 'user_intent' in events",
          workflowInsights: "Helps understand complete user workflows and tool relationships",
          exampleContext: "Looking for authentication logic to understand how user sessions are validated"
        },
        requestTracing: {
          protocolInterception: "All MCP protocol messages intercepted transparently",
          eventTypes: [
            "tools/list - Tool discovery requests",
            "tools/call - Tool invocation with context",
            "tools/response - Tool execution results",
            "session/start - Session initialization",
            "session/end - Session termination"
          ],
          performanceImpact: "Zero performance impact through asynchronous processing",
          dataRetention: "Events batched and sent with automatic retries"
        },
        asynchronousProcessing: {
          eventQueue: "Thread-safe queue with configurable capacity",
          batchProcessing: `Events batched in groups of ${parseInt(process.env.MCPCAT_BATCH_SIZE || '10')}`,
          flushInterval: `${Math.round(parseInt(process.env.MCPCAT_FLUSH_INTERVAL || '30000') / 1000)}s intervals`,
          retryMechanism: "Automatic retries with exponential backoff",
          gracefulShutdown: "Ensures no data loss on system termination"
        }
      };

      if (includeSessionDetails) {
        const activeSessions = sessionManager.getActiveSessions();
        systemInfo.sessionDetails = activeSessions.map(session => ({
          sessionId: session.sessionId.substring(0, 12) + '...',
          startTime: session.startTime.toISOString(),
          lastActivity: session.lastActivity.toISOString(),
          duration: Math.round((session.lastActivity.getTime() - session.startTime.getTime()) / 1000),
          toolCalls: session.toolCalls.length,
          clientName: session.clientInfo?.name || 'Unknown',
          isActive: session.isActive
        }));
      }

      if (includeEventStats) {
        systemInfo.eventStats = {
          // In a real implementation, this would come from eventTracker
          supportedEventTypes: [
            "tools/call", "tools/response", "tools/list",
            "session/start", "session/end", "analytics/query"
          ],
          batchSize: parseInt(process.env.MCPCAT_BATCH_SIZE || '10'),
          flushInterval: parseInt(process.env.MCPCAT_FLUSH_INTERVAL || '30000'),
          asyncProcessing: true,
          zeroPerformanceImpact: true
        };
      }

      // Track this system info query
      eventTracker.trackEvent('analytics/query', {
        queryType: 'system-info',
        includeSessionDetails,
        includeEventStats
      });

      return {
        content: [{
          type: "text" as const,
          text: JSON.stringify(systemInfo, null, 2)
        }],
        isError: false
      };
    } catch (error) {
      return {
        content: [{
          type: "text" as const,
          text: `Error retrieving MCPcat system information: ${error}`
        }],
        isError: true
      };
    }
  }
};
