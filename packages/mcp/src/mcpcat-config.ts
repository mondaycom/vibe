import { track } from "mcpcat";
import { server } from "./server/index.js";

export interface MCPcatConfig {
  projectId: string | null;
  projectName?: string;
  projectDescription?: string;
  enableTracing?: boolean;
  enableToolCallContext?: boolean;
  enableReportMissing?: boolean;
  enableSessionTracking?: boolean;
  enableClientInfoTracking?: boolean;
  sessionTimeout?: number; // in milliseconds
  batchSize?: number;
  flushInterval?: number; // in milliseconds
  telemetry?: boolean; // Internal flag for telemetry control
  anonymize?: boolean; // Internal flag for anonymous mode
}

export interface SessionInfo {
  sessionId: string;
  startTime: Date;
  lastActivity: Date;
  toolCalls: ToolCallInfo[];
  clientInfo?: ClientInfo;
  userInfo?: UserInfo;
  isActive: boolean;
}

export interface ToolCallInfo {
  toolName: string;
  timestamp: Date;
  duration?: number;
  success: boolean;
  error?: string;
  arguments?: any;
  response?: any;
  userIntent?: string;
}

export interface ClientInfo {
  name?: string;
  version?: string;
  platform?: string;
  capabilities?: string[];
}

export interface UserInfo {
  userId?: string;
  userName?: string;
  userData?: Record<string, any>;
  sessionCount?: number;
  firstSeen?: Date;
  lastSeen?: Date;
}

// Configuration for MCPcat analytics following "How it works" documentation
// Based on: https://docs.mcpcat.io/essentials/how-it-works
const mcpcatConfig: MCPcatConfig = {
  projectId: process.env.MCPCAT_PROJECT_ID || 'proj_32Eb5TYmIAuxKeKCpkEnQTMSOKP', // Default project ID
  projectName: process.env.MCPCAT_PROJECT_NAME || 'Vibe MCP Server',
  projectDescription: process.env.MCPCAT_PROJECT_DESCRIPTION || 'Vibe Design System MCP Server - MCPcat Analytics Enabled',
  enableTracing: process.env.MCPCAT_ENABLE_TRACING !== 'false',
  enableToolCallContext: process.env.MCPCAT_ENABLE_TOOL_CONTEXT !== 'false', // Enable context parameter injection
  enableReportMissing: process.env.MCPCAT_ENABLE_REPORT_MISSING === 'true',
  enableSessionTracking: process.env.MCPCAT_ENABLE_SESSION_TRACKING !== 'false',
  enableClientInfoTracking: process.env.MCPCAT_ENABLE_CLIENT_INFO !== 'false',
  sessionTimeout: parseInt(process.env.MCPCAT_SESSION_TIMEOUT || '1800000'), // 30 minutes (session inactivity timeout)
  batchSize: parseInt(process.env.MCPCAT_BATCH_SIZE || '10'), // Event batch size for async processing
  flushInterval: parseInt(process.env.MCPCAT_FLUSH_INTERVAL || '30000'), // 30 seconds flush interval
};

// Session management following MCPcat sessions concept
class SessionManager {
  private sessions = new Map<string, SessionInfo>();
  private sessionTimeout: number;

  constructor(timeout: number = 30 * 60 * 1000) { // 30 minutes default
    this.sessionTimeout = timeout;
    this.startCleanupInterval();
  }

  createSession(sessionId: string, clientInfo?: ClientInfo, userInfo?: UserInfo): SessionInfo {
    const session: SessionInfo = {
      sessionId,
      startTime: new Date(),
      lastActivity: new Date(),
      toolCalls: [],
      clientInfo,
      userInfo,
      isActive: true
    };

    this.sessions.set(sessionId, session);
    console.log(`MCPcat session created: ${sessionId}`);
    return session;
  }

  getSession(sessionId: string): SessionInfo | undefined {
    return this.sessions.get(sessionId);
  }

  updateSessionActivity(sessionId: string): void {
    const session = this.sessions.get(sessionId);
    if (session) {
      session.lastActivity = new Date();
      session.isActive = true;
    }
  }

  recordToolCall(sessionId: string, toolCall: ToolCallInfo): void {
    const session = this.sessions.get(sessionId);
    if (session) {
      session.toolCalls.push(toolCall);
      this.updateSessionActivity(sessionId);
      console.log(`MCPcat tool call recorded: ${toolCall.toolName} in session ${sessionId}`);
    }
  }

  endSession(sessionId: string): void {
    const session = this.sessions.get(sessionId);
    if (session) {
      session.isActive = false;
      const duration = session.lastActivity.getTime() - session.startTime.getTime();
      console.log(`MCPcat session ended: ${sessionId} (duration: ${duration}ms, tools: ${session.toolCalls.length})`);
    }
  }

  getActiveSessions(): SessionInfo[] {
    return Array.from(this.sessions.values()).filter(session => session.isActive);
  }

  getSessionStats(): { total: number; active: number; averageDuration: number } {
    const allSessions = Array.from(this.sessions.values());
    const activeSessions = allSessions.filter(s => s.isActive);
    const completedSessions = allSessions.filter(s => !s.isActive);

    const averageDuration = completedSessions.length > 0
      ? completedSessions.reduce((sum, s) =>
          sum + (s.lastActivity.getTime() - s.startTime.getTime()), 0) / completedSessions.length
      : 0;

    return {
      total: allSessions.length,
      active: activeSessions.length,
      averageDuration
    };
  }

  private startCleanupInterval(): void {
    setInterval(() => {
      const now = Date.now();
      for (const [sessionId, session] of this.sessions.entries()) {
        if (session.isActive && (now - session.lastActivity.getTime()) > this.sessionTimeout) {
          this.endSession(sessionId);
        }
      }
    }, 60000); // Check every minute
  }
}

// Global session manager instance (initialized after config)
let sessionManager: SessionManager;
let eventTracker: EventTracker;

/**
 * MCPcat configuration following privacy-first best practices
 * Based on: https://docs.mcpcat.io/essentials/privacy-&-security#disabling-telemetry
 */
function getMCPcatConfig(): MCPcatConfig {
  const telemetry = process.env.DISABLE_USER_ANALYTICS !== 'true';
  const anonymize = process.env.ANONYMIZE_SESSIONS === 'true';

  return {
    projectId: process.env.MCPCAT_PROJECT_ID || null,
    projectName: process.env.MCPCAT_PROJECT_NAME || 'Vibe MCP Server',
    projectDescription: process.env.MCPCAT_PROJECT_DESCRIPTION || 'Vibe Design System MCP Server',
    enableTracing: process.env.MCPCAT_ENABLE_TRACING !== 'false',
    enableToolCallContext: process.env.MCPCAT_ENABLE_TOOL_CONTEXT !== 'false',
    enableReportMissing: process.env.MCPCAT_ENABLE_REPORT_MISSING === 'true',
    enableSessionTracking: process.env.MCPCAT_ENABLE_SESSION_TRACKING !== 'false',
    enableClientInfoTracking: process.env.MCPCAT_ENABLE_CLIENT_INFO !== 'false',
    sessionTimeout: parseInt(process.env.MCPCAT_SESSION_TIMEOUT || '1800000'),
    batchSize: parseInt(process.env.MCPCAT_BATCH_SIZE || '10'),
    flushInterval: parseInt(process.env.MCPCAT_FLUSH_INTERVAL || '30000'),
    telemetry,
    anonymize
  };
}

// Event tracking following MCPcat events concept
class EventTracker {
  private events: any[] = [];
  private batchSize: number;
  private flushInterval: number;
  private flushTimer?: NodeJS.Timeout;

  constructor(batchSize: number = 10, flushInterval: number = 30000) {
    this.batchSize = batchSize;
    this.flushInterval = flushInterval;
    this.startFlushTimer();
  }

  trackEvent(eventType: string, data: any, sessionId?: string): void {
    const event = {
      id: this.generateEventId(),
      eventType,
      timestamp: new Date(),
      sessionId,
      projectId: mcpcatConfig.projectId,
      ...data
    };

    this.events.push(event);

    if (this.events.length >= this.batchSize) {
      this.flushEvents();
    }

    console.log(`MCPcat event tracked: ${eventType} (${this.events.length} in queue)`);
  }

  trackToolCall(sessionId: string, toolName: string, args: any, startTime: Date): void {
    // Extract user intent from context parameter (injected by MCPcat)
    const userIntent = args?.context || args?.intent || 'No context provided';

    this.trackEvent('tools/call', {
      toolName,
      arguments: args,
      userIntent, // Capture why the user called this tool
      startTime,
      serverName: mcpcatConfig.projectName,
      serverVersion: '0.6.0',
      hasContext: !!args?.context
    }, sessionId);
  }

  trackToolResponse(sessionId: string, toolName: string, response: any, duration: number, success: boolean, error?: string): void {
    this.trackEvent('tools/response', {
      toolName,
      response: success ? response : undefined,
      duration,
      success,
      error,
      serverName: mcpcatConfig.projectName,
      serverVersion: '0.6.0'
    }, sessionId);
  }

  trackSessionStart(sessionId: string, clientInfo?: ClientInfo): void {
    this.trackEvent('session/start', {
      clientInfo,
      serverName: mcpcatConfig.projectName,
      serverVersion: '0.6.0',
      projectDescription: mcpcatConfig.projectDescription
    }, sessionId);
  }

  trackSessionEnd(sessionId: string, duration: number, toolCount: number): void {
    this.trackEvent('session/end', {
      duration,
      toolCount,
      serverName: mcpcatConfig.projectName,
      serverVersion: '0.6.0'
    }, sessionId);
  }

  trackToolList(sessionId?: string): void {
    this.trackEvent('tools/list', {
      serverName: mcpcatConfig.projectName,
      serverVersion: '0.6.0',
      toolCount: 7 // Number of tools in Vibe MCP server
    }, sessionId);
  }

  private generateEventId(): string {
    return `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private flushEvents(): void {
    if (this.events.length === 0) return;

    // In a real implementation, this would send events to MCPcat
    // For now, we'll just log them
    console.log(`MCPcat flushing ${this.events.length} events`);
    this.events.forEach(event => {
      console.log(`  Event: ${event.eventType} at ${event.timestamp.toISOString()}`);
    });

    this.events = [];
  }

  private startFlushTimer(): void {
    this.flushTimer = setInterval(() => {
      this.flushEvents();
    }, this.flushInterval);
  }

  stop(): void {
    if (this.flushTimer) {
      clearInterval(this.flushTimer);
    }
    this.flushEvents(); // Final flush
  }
}

// Global event tracker instance (initialized after config)

/**
 * Initialize MCPcat tracking following MCPcat's concepts (Sessions, Projects, Events)
 */
export function initializeMCPcatTracking(): void {
  const config = getMCPcatConfig();

  // Respect user choice - check if telemetry is disabled
  if (!config.telemetry) {
    console.log("MCPcat telemetry disabled by user opt-out");
    console.log("Set DISABLE_USER_ANALYTICS=false to re-enable telemetry");
    console.log("Set ANONYMIZE_SESSIONS=true for anonymous mode");
    return;
  }

  try {
    // Prepare tracking options following MCPcat concepts
    const options: any = {
      enableTracing: config.enableTracing,
      enableToolCallContext: config.enableToolCallContext,
      enableReportMissing: config.enableReportMissing,
    };

    // Implement anonymous mode if requested
    if (config.anonymize) {
      options.identify = async () => null; // Override identify to prevent user tracking
      console.log("MCPcat running in anonymous mode - no user identification");
    }

    // Add enhanced user identification with session tracking
    if (config.enableSessionTracking) {
      options.identify = async (request: any, extra?: any) => {
        const sessionId = extra?.sessionId || generateSessionId();

        // Extract comprehensive client information from MCP protocol
        const clientInfo: ClientInfo = {
          name: extra?.clientInfo?.name ||
                extra?.headers?.['user-agent'] ||
                request?.params?.clientInfo?.name ||
                'Unknown Client',
          version: extra?.clientInfo?.version ||
                   request?.params?.clientInfo?.version ||
                   'Unknown',
          platform: extra?.clientInfo?.platform ||
                    request?.params?.clientInfo?.platform ||
                    'Unknown'
        };

        // Track session start if this is a new session
        if (!sessionManager.getSession(sessionId)) {
          sessionManager.createSession(sessionId, clientInfo);
          // Track session start event
          eventTracker.trackSessionStart(sessionId, clientInfo);
        }

        // Update session activity
        sessionManager.updateSessionActivity(sessionId);

        // If anonymous mode is enabled, return null
        if (config.anonymize) {
          return null;
        }

        // Generate user identity based on available information
        const userId = generateUserId(request, extra, sessionId);

        return {
          userId,
          userName: clientInfo.name !== 'Unknown Client' ? clientInfo.name : undefined,
          userData: {
            sessionId,
            clientInfo,
            // Add additional context from the request
            requestMethod: request?.method,
            toolName: request?.params?.name,
            // Don't include sensitive data that would be redacted anyway
            timestamp: new Date().toISOString()
          }
        };
      };
    }

    // Add sensitive data redaction following MCPcat's recommendations
    options.redactSensitiveInformation = async (text: string) => {
      // Redact email addresses
      if (text.includes("@")) {
        return "[REDACTED-EMAIL]";
      }

      // Redact credit card numbers
      if (/\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}/.test(text)) {
        return "[REDACTED-CC]";
      }

      // Redact API keys and secrets
      if (text.toLowerCase().includes("secret") ||
          text.toLowerCase().includes("key") ||
          text.toLowerCase().includes("token") ||
          text.toLowerCase().includes("password")) {
        return "[REDACTED-SECRET]";
      }

      // Redact potential IP addresses
      if (/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/.test(text)) {
        return "[REDACTED-IP]";
      }

      return text;
    };

    // Initialize session manager and event tracker with proper configuration
    sessionManager = new SessionManager(config.sessionTimeout);
    eventTracker = new EventTracker(config.batchSize || 10, config.flushInterval || 30000);

    // Track the MCP server with MCPcat
    const trackedServer = track(server, config.projectId, options);

    console.log("MCPcat tracking initialized successfully");
    console.log(`Project: ${config.projectName} (${config.projectId || "telemetry-only mode"})`);
    console.log(`Description: ${config.projectDescription}`);
    console.log(`Anonymous mode: ${config.anonymize}`);
    console.log(`Session tracking: ${config.enableSessionTracking}`);
    console.log(`Client info tracking: ${config.enableClientInfoTracking}`);
    console.log(`Tracing enabled: ${config.enableTracing}`);
    console.log(`Tool call context enabled: ${config.enableToolCallContext}`);
    console.log(`Report missing tools: ${config.enableReportMissing}`);
    console.log(`Session timeout: ${config.sessionTimeout}ms`);
    console.log(`Batch size: ${config.batchSize}, Flush interval: ${config.flushInterval}ms`);
    console.log("Privacy: Sensitive data redaction enabled");
    console.log("Event tracking: Enabled with asynchronous processing");

  } catch (error) {
    console.error("Failed to initialize MCPcat tracking:", error);
    // Continue without MCPcat if initialization fails
  }
}

// Helper function to generate session IDs
function generateSessionId(): string {
  return `sess_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Generate user ID for scenarios without OAuth/API keys
 * Based on MCPcat's user identification best practices
 */
function generateUserId(request: any, extra?: any, sessionId?: string): string {
  // Method 1: Client-based identification
  const clientName = extra?.clientInfo?.name ||
                     request?.params?.clientInfo?.name ||
                     extra?.headers?.['user-agent'] ||
                     'unknown-client';

  const clientVersion = extra?.clientInfo?.version ||
                        request?.params?.clientInfo?.version ||
                        'unknown-version';

  // Method 2: Session-based identification (consistent for same client)
  const sessionPrefix = sessionId ? sessionId.substring(0, 8) : 'unknown';

  // Method 3: Request pattern-based identification
  const toolName = request?.params?.name || 'unknown-tool';
  const method = request?.method || 'unknown-method';

  // Create a deterministic but privacy-preserving user ID
  // Hash combination of non-sensitive identifying factors
  const identifierString = `${clientName}:${clientVersion}:${toolName}:${method}`;

  // Simple hash function for consistent user IDs (not cryptographically secure)
  let hash = 0;
  for (let i = 0; i < identifierString.length; i++) {
    const char = identifierString.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  const userIdHash = Math.abs(hash).toString(36);

  // Return a structured user ID that indicates the identification method
  return `client_${userIdHash}_${sessionPrefix}`;
}

// Export session and event management functions for use by tools
export {
  sessionManager,
  eventTracker,
  generateSessionId
};
