import { z } from "zod";
import { sessionManager, eventTracker } from "../../mcpcat-config.js";

const getSessionAnalyticsSchema = z.object({
  includeInactive: z.boolean().optional().default(false),
  limit: z.number().optional().default(10),
});

const getProjectAnalyticsSchema = z.object({
  includeEvents: z.boolean().optional().default(false),
});

export const getSessionAnalyticsTool = {
  name: "get-session-analytics",
  description: "Get analytics about MCP server sessions, following MCPcat session concepts. Provides insights into user engagement, session duration, and tool usage patterns.",
  inputSchema: getSessionAnalyticsSchema.shape,
  execute: async (input: z.infer<typeof getSessionAnalyticsSchema>) => {
    try {
      const { includeInactive, limit } = input;
      if (!sessionManager) {
        return {
          content: [{
            type: "text" as const,
            text: "Session manager not initialized. MCPcat tracking may be disabled."
          }],
          isError: true
        };
      }

      const stats = sessionManager.getSessionStats();

      let sessions = includeInactive
        ? Array.from((sessionManager as any)['sessions'].values())
        : sessionManager.getActiveSessions();

      // Sort by most recent activity
      sessions = sessions
        .sort((a: any, b: any) => b.lastActivity.getTime() - a.lastActivity.getTime())
        .slice(0, limit);

      const sessionDetails = sessions.map((session: any) => ({
        sessionId: session.sessionId,
        startTime: session.startTime.toISOString(),
        lastActivity: session.lastActivity.toISOString(),
        duration: session.lastActivity.getTime() - session.startTime.getTime(),
        isActive: session.isActive,
        toolCalls: session.toolCalls.length,
        clientInfo: session.clientInfo,
        userInfo: session.userInfo,
        recentTools: session.toolCalls.slice(-3).map((tc: any) => tc.toolName)
      }));

      // Track this analytics query as an event
      eventTracker.trackEvent('analytics/query', {
        queryType: 'session-analytics',
        includeInactive,
        limit,
        resultCount: sessionDetails.length
      });

      return {
        content: [{
          type: "text" as const,
          text: JSON.stringify({
            summary: {
              totalSessions: stats.total,
              activeSessions: stats.active,
              averageDurationMs: Math.round(stats.averageDuration),
              averageDurationMinutes: Math.round(stats.averageDuration / 60000 * 100) / 100
            },
            sessions: sessionDetails,
            insights: {
              mostActiveClient: sessionDetails.length > 0 ? sessionDetails[0].clientInfo?.name : null,
              totalToolCalls: sessionDetails.reduce((sum, s) => sum + s.toolCalls, 0),
              averageToolsPerSession: sessionDetails.length > 0
                ? Math.round(sessionDetails.reduce((sum, s) => sum + s.toolCalls, 0) / sessionDetails.length * 100) / 100
                : 0
            }
          }, null, 2)
        }],
        isError: false
      };
    } catch (error) {
      return {
        content: [{
          type: "text" as const,
          text: `Error retrieving session analytics: ${error}`
        }],
        isError: true
      };
    }
  }
};

export const getProjectAnalyticsTool = {
  name: "get-project-analytics",
  description: "Get analytics about the MCP server project, following MCPcat project concepts. Provides insights into project usage, tool performance, and system health.",
  inputSchema: getProjectAnalyticsSchema.shape,
  execute: async (input: z.infer<typeof getProjectAnalyticsSchema>) => {
    try {
      if (!sessionManager) {
        return {
          content: [{
            type: "text" as const,
            text: "Session manager not initialized. MCPcat tracking may be disabled."
          }],
          isError: true
        };
      }

      const sessionStats = sessionManager.getSessionStats();

      const analytics = {
        project: {
          name: "Vibe MCP Server",
          version: "0.6.0",
          description: "Vibe Design System MCP Server",
          tools: [
            "get-vibe-component-metadata",
            "list-vibe-public-components",
            "get-vibe-component-examples",
            "get-vibe-component-accessibility",
            "list-vibe-icons",
            "list-vibe-tokens",
            "v3-migration"
          ]
        },
        sessions: {
          total: sessionStats.total,
          active: sessionStats.active,
          averageDuration: Math.round(sessionStats.averageDuration / 1000), // in seconds
          averageDurationMinutes: Math.round(sessionStats.averageDuration / 60000 * 100) / 100
        },
        performance: {
          uptime: process.uptime(),
          memoryUsage: process.memoryUsage(),
          platform: process.platform,
          nodeVersion: process.version
        },
        events: input.includeEvents ? {
          // In a real implementation, this would return recent events
          recentEventTypes: ["session/start", "tools/call", "tools/response", "session/end"],
          totalEventsTracked: 0 // This would be populated from eventTracker
        } : null
      };

      // Track this analytics query as an event
      eventTracker.trackEvent('analytics/query', {
        queryType: 'project-analytics',
        includeEvents: input.includeEvents
      });

      return {
        content: [{
          type: "text" as const,
          text: JSON.stringify(analytics, null, 2)
        }],
        isError: false
      };
    } catch (error) {
      return {
        content: [{
          type: "text" as const,
          text: `Error retrieving project analytics: ${error}`
        }],
        isError: true
      };
    }
  }
};
